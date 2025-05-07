const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Tool Inventory Backend Running!');
});

// Listen
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
