require('dotenv').config(); // read file .env
                            // Vars in process.env.
const server = require('./server/index.js')

const PORT = process.env.PORT || 3300
console.log(PORT)
server.listen(PORT, () => console.log('Server is live at localhost:' + PORT));
