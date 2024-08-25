const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes and origins
app.use(cors());

app.use(express.json());

app.post('/bfhl', (req, res) => {
  // Your POST request handling logic
  const { data } = req.body;
  // Process the data and construct the response
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: data.filter(item => !isNaN(item)),
    alphabets: data.filter(item => /^[A-Za-z]$/.test(item)),
    highest_lowercase_alphabet: data.filter(item => /^[a-z]$/.test(item)).sort().slice(-1)
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  // Your GET request handling logic
  res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
