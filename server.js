const favoriteFood = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My favorite food is ${favoriteFood}`);
    await sleep(3000);
  }
}

main();
