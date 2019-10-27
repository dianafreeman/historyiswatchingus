import dotenv from 'dotenv';

class Request {
    constructor(props) {
    this.location = props.stateCode || 'IL'
    this.type = props.type || 
    }
    
    reps: (stateCode) => `https://www.opensecrets.org/api/?method=getLegislators&id=${stateCode}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`


}
export default {
    reps: (stateCode) => `https://www.opensecrets.org/api/?method=getLegislators&id=${stateCode}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`
    orgs: () => ``;
}