const dotenv = require('./dotenv');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// mongoose.connect
//     .then( () => {
server.listen(dotenv.parsed.PORT);
console.log(`Server started at PORT: ${dotenv.parsed.PORT}`)
// });
