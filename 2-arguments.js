// checkArg.js
const args = process.argv.slice(2); // ignore node + script path

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log("Argument found");
}
