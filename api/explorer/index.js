import express from 'express';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config()

const app = express();


app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname,'./dist/index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`Started on port ${process.env.PORT}`);
});


export default app;
