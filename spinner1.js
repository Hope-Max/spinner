// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 1700);

const symbol = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i < symbol.length; i++) {
  if (i === symbol.length - 1) {
    setTimeout(() => process.stdout.write(`\r${symbol[i]}   \n`), 100 + i * 200);
  } else {
    setTimeout(() => process.stdout.write(`\r${symbol[i]}   `), 100 + i * 200);
  }
}