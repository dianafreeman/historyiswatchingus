/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import open from 'open';
import DataStructure from './data';

dotenv.config();

const app = express();

// Serve the static files from dist folder
// app.use(express.static(path.join(__dirname, '/client/public/')));
app.use(bodyParser.json());


// Disable listening in test mode
if (process.env.NODE_ENV === 'testing') {
  console.warn('Listening not enabled in test mode.');
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} in MODE ${process.env.NODE_ENV}`);
  //  open(`http://localhost:${process.env.PORT}`);
  });
}

/*  TODO: Create a few helper functions to handle API needs */

// GET /reps Route
app.get('/reps', (req, res) => {
  // const data = db.get('tasks');
  const data = DataStructure.getReps();
  res.status(200).send(data);
});

/*
 * Manage requests that are not already declared
 * and redirect them to the client
 */
app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/client/public/index.html`));
});

module.exports = app;
