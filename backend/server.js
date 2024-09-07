const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');

app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error', err));

// Define the basic route
app.get('/', (req, res) => {
  res.send('Hello from the back-end !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
