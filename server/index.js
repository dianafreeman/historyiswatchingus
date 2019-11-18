import express from 'express';
import RepRoutes from './routes/reps';

let app = express();

app.use('/reps/:state', RepRoutes.get);

app.use('/rep/:cid', RepRoutes.sectorsTo);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Started on port ${process.env.SERVER_PORT}`);
});

export default app;
