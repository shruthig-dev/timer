
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  process.stdin.on('data', (key) => {
        if( String(key) === "b")
        {
            process.stdout.write('\x07');
        }
        else if(Number(key) && key > 0)
        {
            console.log(`\nsetting timer for ${key} seconds...`)
            setTimeout(()=> {
              process.stdout.write('\x07');
            }, key * 1000);
          }
          else if (String(key) === '\u0003') {
            console.log("Thanks for using me, ciao!");
            process.exit();
          }
          else{
              console.log("Enter any number between 1 t0 9 to set a timmer");
          }
  })

