module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})