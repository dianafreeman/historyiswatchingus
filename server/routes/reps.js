import fetch from 'node-fetch';
import { FETCH_OPTIONS } from '../util/config';
import Print from '../util/Print';


const get = (req, res) => {
  if (!req.params.state) return res.status(401).json({ ERROR: 'State parameter is required'})
  const print = new Print({ state: req.params.state });
  const url = print.url.repsFromState();
  fetch(url, FETCH_OPTIONS)
    .then(res => res.json())
    .then(json => res.status(200).json({
      state: req.params.state,
      timestamp: new Date(),
      reps: json.response.legislator.map(l => l['@attributes']),
    }))
    .catch(err => res.status(400).send(err));
};

const sectorsTo = (req, res) => {
  const print = new Print({ cid: req.params.cid });
  const url = print.url.sectorsToCandidate();
  fetch(url, FETCH_OPTIONS)
    .then(res => res.json())
    .then(json => res.status(200).json({
      cid: req.params.cid,
      timestamp: new Date(),
      sectors: json.response.sectors,
    }))
    .catch(err => res.status(400).send(err));
};


const RepRoute = { get, sectorsTo };

export default RepRoute;
