let count = 0;

//decreases the count by 1
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}

//resets the counter to 0
document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("counter").innerHTML = count;
}

//increases the count by 1
document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}