
export const onCheckboxChange = (event) => {
  const { checked, name } = event.target;
  const taskId = parseInt(name, 10);
  const isComplete = `${checked}`;
  return new Promise((resolve, reject) => {
    if ((typeof (taskId) === 'number')
    && ((isComplete === 'true') || (isComplete === 'false'))) {
      const result = { id: taskId, key: 'isComplete', value: isComplete };
      resolve(result);
    } else {
      reject(new Error('This submission is invalid'));
    }
  });
};

export const sendFormSubmit = (event) => {
  event.preventDefault();
  const defaultCol = 0;
  const titleInput = document.querySelector('input[name="titleInput"]');
  const newTaskTitle = titleInput.value;

  let result;

  return new Promise((resolve, reject) => {
    if (newTaskTitle.length < 2) {
      reject(new Error('Enter a title for this task'));
    } else {
      titleInput.value = '';
      result = { title: newTaskTitle, column: defaultCol, isComplete: 'false' };
      resolve(result);
    }
  });
};

// Only Used by the InteractJS listener: see ./interactions.js
export const onDragMove = (event) => {
  const { target } = event;
  const x = event.pageX - event.x0;
  const y = event.pageY - event.y0;
  // transform the element with webkit too.
  target.style.webkitTransform = `translate(${x}px, ${y}px )`;
  target.style.transform = `translate(${x}px, ${y}px )`;
  target.style['z-index'] = 99;
  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
};
