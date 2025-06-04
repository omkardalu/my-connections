require('dotenv').config();
const express = require('express');
const cors = require('cors');
const submitRoutes = require('./routes/submitRoutes.js');;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1',submitRoutes);

app.listen(port,() => {
  console.log(`Server running on http://localhost:${port}`);
  
})
