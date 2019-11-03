import { observable, computed, decorate, action } from 'mobx';

class Store {
  // Observables
  // ---------------------------------------------------------------------------
  location = null;
  representatives = [];
  causes = [];

  // // Computed
  // // ---------------------------------------------------------------------------

  // get aVersionOfADynamicThing() {
  //   return this.things.filter(thing => thing.isCool === true);
  // }
  get reps() {
      return this.representatives
  }

  // Actions
  // ---------------------------------------------------------------------------

  setLocation(location) {
    return (this.location = location);
  }
  
  setReps(reps) {
      return (this.representatives = reps)
  }

  setCauses(arrayOfCauses) {
    return (this.causes = arrayOfCauses.map(c => ({
      isSelected: false,
      ...c,
    })));
  }

  setSelectedCause(cause) {
    return this.causes.map(c =>
      JSON.stringify(cause) === JSON.stringify(c)
        ? { isSelected: true, ...cause }
        : { ...cause }
    );
  }
}

decorate(Store, {
    location: observable,
    representatives: observable,
    
    reps: computed,

    setLocation: action,
    setReps: action,
});

export default new Store();
