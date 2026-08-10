const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/consultation', (req, res) => {
  const { name, phone, need, question } = req.body;
  
  if (!name || !phone || !need) {
    return res.status(400).json({ error: 'Name, phone, and need are required fields.' });
  }

  // Simulate saving to database or sending email
  console.log('--- New Consultation Request ---');
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Need: ${need}`);
  console.log(`Question: ${question || 'N/A'}`);
  console.log('--------------------------------');

  // Simulate delay to show loading state on frontend
  setTimeout(() => {
    res.status(200).json({ message: 'Consultation request received successfully.' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
