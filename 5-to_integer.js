const args = process.argv.slice(2);
const nunmber = parseInt(args);

if(nunmber){
    console.log(`My number: ${nunmber}`);
}
else{
    console.log("Not a number");
}