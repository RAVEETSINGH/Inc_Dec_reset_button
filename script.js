const dec= document.getElementById("dec");
const reset= document.getElementById("reset");
const inc= document.getElementById("inc");
const countLabel= document.getElementById("countLabel");
let count=0;
inc.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}
dec.onclick = function(){
    count--;
     document.getElementById("countLabel").textContent = count;

}
reset.onclick = function () {
    if (count === 0) {
        document.getElementById("countLabel").textContent = ` already reset`;
    } else {
        count = 0;
        document.getElementById("countLabel").textContent = count;
    }
}