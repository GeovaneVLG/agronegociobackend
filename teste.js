const app = require('./src/app');
require('dotenv').config();

app.listen(4000, () => console.log('server rodando'));