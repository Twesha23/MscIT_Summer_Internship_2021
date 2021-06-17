const fs=require('fs');
fs.readFile('./file1.txt',(err,data)=>{
    if(err){
        console.log("Error!!");
    }
    else
    console.log('Async',data.toString('utf-8'));
})

const file = fs.readFileSync('./file1.txt');
console.log('Sync',file.toString('utf-8'));

fs.appendFile('./file1.txt','Good Morning',err=>{
    if(err){
        console.log("Error");
    }
})

fs.writeFile('./file2.txt','Good Evening',err=>{
    if(err){
        console.log("Error");
    }
})

fs.unlink('./file2.txt',err=>{
    if(err){
        console.log("Error");
    }
    console.log('Deleted successfully');
})