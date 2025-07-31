// checkArg.js
const args = process.argv.slice(2); // ignore node + script path

if (args == "") {
  console.log("No argument");
} else {
  console.log(args);
}
