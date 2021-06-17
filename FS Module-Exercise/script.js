const fs=require('fs');

//1)To what floor do the instructions take Santa?
function Q1(){
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('santa-time');
        const directions=data.toString();
        const directionsArray=directions.split('');
        const ans=directionsArray.reduce((acc,currentValue)=>{
            if(currentValue==='(')
                return acc+=1;
            else if(currentValue===')')
                return acc-=1;
        },0)
        console.timeEnd('santa-time');
        console.log("Floor:",ans);
    })
   
}
Q1();

//2)What is the position of the character that causes Santa to first enter the basement?
function Q2(){
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('santa-time');
        const directions=data.toString();
        const directionsArray=directions.split('');
        let acc=0 , c=0;
        const ans=directionsArray.some((currentValue)=>{
            if(currentValue==='(')
                acc+=1;
            else if(currentValue===')')
                acc-=1;
        
        c++;
        return acc < 0;
    })
        console.timeEnd('santa-time');
        console.log("Basement reached after :",c);
    })
   
}
Q2();