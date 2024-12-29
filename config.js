const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'
global.eypzApi = 'https://combative-sarine-eypz-god-d4cce0fc.koyeb.app/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05RTWRRTC9KdDdjWjJFMjBHbm9yQVRTdG0rdDZOU3I1U051U0NFeDlsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWJCQ3RTUEc1K1BHNWNpYjltQ3BYZ0liOGtIdVVWWS8zN0IrcWRJdmNuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RVI4UW9FWHBJNDhoRnZEaE5SeFJmT2ovanUyNnZ3UHZaMVl1bVZIOW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4M0FJREMvc0kzZlozeHdOTDZZdDNMMVBEdHd5SzlsS1ZGbnRueEdDelNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIa3F0dmdJU0ZYSTF5MDNheXlXRUNHbzEycFBHYyt2STJDaVdTek1DWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhZWFdPeG82SEsvbysyMHphUVJiQ0NQeVdiSnVkZ1lqM0xsSU01TXE5bEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJ0YUYrY3F4bDI5R2xCME5leVFRNTcrSDNxejM1d3BiQnczVG5CZ0hFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHd1Z1FSNlBKanVTVUJNZEI2bVpWZ2VLZjlEejZyUXYrckxTYXlzMzYyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1wMkdIV091YkhQeUNYY3piSC9XcmsvbnEzdkw0eFZWUXZnMzRZNSs1UFVCRzZrTkYvalV0VStQYXRKUmluRndiVkRudjVYQTZnc1FsbWJCWGNmM0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJQUk5YMDgzZXBqbTVtaE1nY1ZsQzd6ZEgwdGd4VVJ4bkU4c285SWZva3VnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NzQ4NTY0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQkIxM0NGMjA5NzhDOEQ1NDAyRUYwN0NDODY5QTgyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1MjA4ODA3fV0sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnTmZkUU9NelFBeUF6clVRcGVlS1l3IiwicGhvbmVJZCI6ImU2N2RlYjE5LTkyMTMtNDVlZC04NDgzLWVhOGYxZjE3YWRhZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGS3ViMVQwOGtSQnFrQnZGWlJFd1NXTGVsZG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05Fd2ROeHVKbXd3SGFiQ2dkakd0ZWxBendFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpUQUZETkJGIiwibWUiOnsiaWQiOiIyNjM3Nzc0ODU2NDg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIkYW5jaMO4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZnprT3NERU1mZXRMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiWHBSZDZpaHFEV1dvVXlmSTA5aWplSnB0cTQzLzZRRm14N3ZoaU5GUXpZPSIsImFjY291bnRTaWduYXR1cmUiOiI3OFYrQ2JnRTJlZUNpandPQXMwZWM0TmFDZlkvb2VYdS9IcXNNdll1Y0xya0hSR21mQkR5V1ZoVmlHbVFucU5JdWZQdTN2SW4wOHE2RHZTVHRvMWdDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid3JFV2lFUkVWU0R2Qm9JcXlDLytVWmlMa3FvYkN6K3IvQUF0Vmc4eHZHc2VjSEhla09ubUcvZWhUeDM5SG5lVUhENHh4UG5zbGpyd3hsbnhqL0NRQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Nzc0ODU2NDg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXMTZVWGVvb2FnMWxxRk1ueU5QWW8zaWFiYXVOLytrQlpzZTc0WWpSVU0yIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MjA4Nzg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1VTSJ9",
  MENU_URL: process.env.MENU_URL || "https://ik.imagekit.io/eypz/1722873079279_lHOJlrddC.png",
  CAPTION: process.env.CAPTION || "Iᴢᴜᴍɪ",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "Eypz God",
  BOT_NAME: process.env.BOT_NAME || "𝚰𝚭𝐔𝚳𝚰-𝚅3",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "Izumi-v3,❤️",
  AUDIO_DATA: process.env.AUDIO_DATA || "Eʏᴘᴢ;Iᴢᴜᴍɪ-ᴠ3;https://i.imgur.com/cO0TZJv.jpeg",
  PROCESSNAME: process.env.PROCESSNAME || "Izumi-v3",
  AUTHOR: process.env.AUTHOR || "Eypz God",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "your_koyeb_api_key",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB: toBool(process.env.KOYEB) || false,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
