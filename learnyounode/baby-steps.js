const sum = process.argv.slice(2).reduce((acc, curr) => acc + +curr, 0);

console.log(sum);
