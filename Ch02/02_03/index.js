const logger = require("./Logger"); // instance of Logger
const Shopper = require("./Shopper");
const Store = require("./Store");

logger.log("starting app...");

new Shopper("alex", 500);
new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750,
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5,
  },
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
