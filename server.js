import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('<h1>api runing</h1>')
});

app.get('/api', (req, res) => {
  try {
    throw new Error('error getting api')

  } catch (error) {
    console.log('nuevo error: ' + error);
  }
})

app.listen(port,()=>{
  console.log('listening on port '+ port);
});
