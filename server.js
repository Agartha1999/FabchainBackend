require("dotenv").config();

const app = require("./src/app.js");

const loginEvent  = require('./src/initializedFunctions/login.js');
const {
  createAmostras, 
  createPerfiles, 
  createGruposTemporarios,
  startMonitorarReplays
} = require('./src/initializedFunctions/robots.js');
const delay = require('./src/initializedFunctions/delay.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!:", PORT);
});


global.CookieAccess = null;
const intervalId = setInterval(loginEvent, 12 * 60 * 60 * 1000);
loginEvent();

async function amostrasBot() {
  await delay(9000);
  while (true) {
    await createAmostras();
    await delay(3000);
  }
}
amostrasBot();

async function padroesBot() {
  await delay(10000);
  while (true) {
      await createPerfiles();
      await delay(3000);
  }
}
padroesBot();

async function criarGruposBot() {
  await delay(7000);
  while (true) {
      await createGruposTemporarios();
      await delay(3000);
  }
}
criarGruposBot();

async function startReplayBot() {
  await delay(8000);
  while (true) {
      await startMonitorarReplays();
      await delay(3000);
  }
}
startReplayBot(); 