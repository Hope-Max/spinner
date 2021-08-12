const symbol = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i < symbol.length; i++) {
  if (i === symbol.length - 1) {
    setTimeout(() => process.stdout.write(`\r${symbol[i]}   \n`), 100 + i * 200);
  } else {
    setTimeout(() => process.stdout.write(`\r${symbol[i]}   `), 100 + i * 200);
  }
}