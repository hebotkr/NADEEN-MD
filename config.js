const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WEx1nApb#Zv5n2pMUlYKYqkCB0F7aKoVCoC8njzhdjF10hvuRyso ", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*🌝 Hello I am nadeen*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "private", //private or public
AUTO_VOICE:"true" //true or false
};
