/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import open from 'open';

dotenv.config();
const adapter = new FileSync('db.json');
const db = low(adapter);
const app = express();

// Serve the static files from dist folder
app.use(express.static(path.join(__dirname, 'dist/')));
app.use(bodyParser.json());


// Disable listening in test mode
if (process.env.NODE_ENV === 'testing') {
  console.warn('Listening not enabled in test mode.');
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} in MODE ${process.env.NODE_ENV}`);
    open(`http://localhost:${process.env.PORT}`);
  });
}

/* Create a few helper functions to handle API needs */

const exists = id => db.get('tasks').find({ id: parseInt(id, 10) }).value();
const generateid = () => {
  // self generate a new id each time
  const newId = (() => parseInt(Math.random(1) * 1000, 10))();
  const ids = db.get('tasks')
    .map('id')
    .value();
  // return the new ID if it doesn't already exist
  // otherwise try again.
  return (ids.indexOf(newId) === -1 ? newId : newId);
};


// GET /tasks Route
app.get('/tasks', (req, res) => {
  const data = db.get('tasks');
  res.status(200).json(data);
});

// PUT: Update task route
app.put('/tasks/:id/:key/:value', (req, res) => {
  let { id, value } = req.params;
  const { key } = req.params;
  id = parseInt(id, 10);
  value = (key === 'column' ? parseInt(value, 10) : value);

  // ID should be a number
  if (exists(id)) {
    try {
      db.get('tasks')
        .find({ id })
        .assign({ [key]: value })
        .write();
      res.status(200).json(db.get('tasks').value());
    } catch (err) {
      res.status(500).json({ error: err });
    }
  } else {
    res.status(404).json({ error: `No task found with the ID ${id}` });
  }
});

// POST: Add new tasks Route
app.post('/tasks/:title/:column/:isComplete', (req, res) => {
  let { column, title, isComplete } = req.params;
  column = parseInt(column, 10);
  title = decodeURIComponent(title);
  isComplete = `${isComplete}`;
  const id = generateid();
  try {
    // Add a post
    db.get('tasks')
      .push({
        id,
        title,
        column,
        isComplete,
      })
      .write();
    res.status(201).json(db.get('tasks').value());
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Delete: delete task Route
app.delete('/tasks/:id', (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10);
  if (exists(id)) {
    try {
      db.get('tasks')
        .remove({ id })
        .write();
      res.status(200).json(db.get('tasks').value());
    } catch (err) {
      res.status(500).json({ error: `Internal Server Error: ${err}` });
    }
  } else {
    res.status(404).json({ error: `No task found with the ID ${id}` });
  }
});

/*
 * Manage requests that are not already declared
 * and redirect them to the client
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

module.exports = app;
