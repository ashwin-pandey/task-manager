const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const PORT = process.env.PORT;
// console.log(`port = ${port}`);
const MONGO_URI = process.env.MONGO_URI;
// console.log(`mongo url = ${mongoURI}`);
const FRONT_END_URI = process.env.FRONT_END_URI;
// console.log(`frontend url = ${frontEndUri}`);

module.exports = {
    PORT,
    MONGO_URI,
    FRONT_END_URI   
}