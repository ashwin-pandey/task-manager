const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
// console.log(`port = ${port}`);
const mongoURI = process.env.MONGO_URI;
// console.log(`mongo url = ${mongoURI}`);

module.exports = {
    port,
    mongoURI
}