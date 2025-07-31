// checkArg.js
const args = process.argv.slice(2); // ignore node + script path

if (args[0] = undefined || args.slice(2) == "") {
  console.log("No argument");
} else {
  console.log(args[0]);
}
