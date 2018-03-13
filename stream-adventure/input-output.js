const readStream = process.stdin;
const writeStream = process.stdout;

readStream.pipe(writeStream);
