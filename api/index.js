import express from 'express';
import RepRoutes from './routes/reps';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('../', 'client/public/')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('../','client/public/index.html'));
});

app.use('/reps/:state', RepRoutes.get);

app.use('/rep/:cid', RepRoutes.sectorsTo);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Started on port ${process.env.SERVER_PORT}`);
});

export default app;
