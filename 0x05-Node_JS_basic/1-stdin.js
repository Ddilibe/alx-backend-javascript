console.log("Welcome to Holberton School, what is your name?");
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
if (process.argv.length > 1) {
	console.log(`Your name is ${process.argv[2]} from processes`);
} else {
	readline.question(``, name=>{
		console.log(`Your name is ${name} from readline`);
		readline.close();
	});
}
console.log("\nThis important software is now closing\n")
