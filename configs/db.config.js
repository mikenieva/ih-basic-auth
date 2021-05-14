const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log(`Successfully connected to the database`))
  .catch(error => {
    console.error(`An error ocurred trying to connect to the database: `, error);
    process.exit(1);
  });
