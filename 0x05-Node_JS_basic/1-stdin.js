console.log = (d) => {
	process.stdout.write(`${d}\n`);
}
const well = "Welcome to Holberton School, what is your name?";
console.log(well);
process.on('exit', () =>{
	process.stdout.write("This important software is now closing");
});

if (process.stdin.isTTy) {
	process.stdin.on('readable', () => {
		const input = process.stdin.read();
		process.stdout.write(`Your name is: ${input.toString()}`);
		process.exit()
	});
} else {
	process.stdin.on('data', (data) => {
		process.stdout.write(`Your name is ${data}`);
		process.exit();
	});
}