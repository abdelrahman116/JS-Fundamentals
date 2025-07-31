const args = process.argv.slice(2);
let out = []
num = Number(args);
if(num){
    for (let i = 0 ; i < num ; i++){
out.push("X");
}
for (let i = 0 ; i < num ; i++){
console.log(out.join(""));
}
}
else{
    console.log("Missing size");
}