import dotenv from 'dotenv';

dotenv.config();

class Print {
  constructor(props) {
    this.state = props.state || null;
    this.cid = props.cid || null;
    this.cycle = props.cycle || '2018';
    this.org = props.org || 'NRA';

    /*
    * Render FETCH URL Method: repsFromState
    * Provides a list of 115th Congressional legislators and associated attributes for
    * specified subset (state or specific CID).
    * @param { string: 2 letter state code } STATE
    */
    const url = {
      repsFromState: () => `https://www.opensecrets.org/api/?method=getLegislators&id=${this.state}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`,

      /**
     * Render FETCH URL Method: sectorToCandidate
     * Provides sector total of specified politician's receipts
     * @param { string: candidate ID } CID
     * @param { string: year of election cycle } [cycle=2018]
     */
      sectorsToCandidate: () => `https://www.opensecrets.org/api/?method=candSector&cid=${this.cid}&cycle=${this.cycle}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`,

      /**
    * render FETCH URL method: getOrgs
    * Provides a list of organizations and ids that match the term searched.
    *
    * @param {string: full or partial organization name } org
    */
      getOrgs: () => `https://www.opensecrets.org/api/?method=getOrgs&org=${this.org}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`,
    };
    return { url };
  }
}


export default Print;
