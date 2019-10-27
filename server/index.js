/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();
// const adapter = new FileSync('db.json');
// const db = low(adapter);
const app = express();

// Serve the static files from dist folder
// app.use(express.static(path.join(__dirname, 'dist/')));
app.use(bodyParser.json());

// Disable listening in test mode
if (process.env.NODE_ENV === 'testing') {
  console.warn('Listening not enabled in test mode.');
} else {
  app.listen(process.env.PORT, () => {
    console.log(
      `Listening on port ${process.env.PORT} in MODE ${process.env.NODE_ENV}`
    );
    // open(`http://localhost:${process.env.PORT}`);
  });
}

// GET /reps Route
app.get('/reps/:state', (req, res) => {
  const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${req.params.state}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`;
  fetch(url, {
    mode: 'no-cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => res.json(json.response.legislator))
    .catch(err => res.status(400).send(err));
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
        isComplete
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
