//MongoDB connection
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    //should connection be unsuccessful, throw this error:
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;