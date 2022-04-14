const fs = require('fs');

// /// READ DATA /// //
// Read data from json computer files- synch - executed once - json convert to object
const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}\\..\\dev-data\\data\\tours-simple.json`,
    'utf-8'
  )
);

// /// ROUT HANDLERS /// //
exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not yet defined',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not yet defined',
  });
};
