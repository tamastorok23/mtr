const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());


const app = new Koa();
const router = new Router();

app.use(bodyParser());

// Buy order indítása
// Input: { symbol: String, quantity: Number, price?: Number }
router.get('/teszt', async () => {
  console.log('teszt oldal megnyitva');
});

// Router és szerver indítása
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Koa szerver fut: http://localhost:3000/');
});