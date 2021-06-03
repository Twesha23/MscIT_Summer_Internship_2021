console.log("Script of Control Flow");

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#1 return value when 
var ans = moveCommand("forward");
console.log(ans);
//undefined

//#2 return value when 
var ans = moveCommand("back");
console.log(ans);
//"you arrived home"

//#3 return value when
 var ans = moveCommand("right");
 console.log(ans);
//"you found a river"

//#4 return value when 
var ans = moveCommand("left");
console.log(ans);
//undefined

