const arg = process.argv;
let timer = arg.slice(2);
timer.sort;

for (const input of timer) {
  if (Number(input) && input > 0) {
    setTimeout(()=> {
      process.stdout.write('\x07');
    }, input * 1000);
  }
}