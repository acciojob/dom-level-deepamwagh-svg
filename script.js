//your JS code here. If required.
const elem = document.getElementById("level");

let level = 1;

let parent = elem.parentElement;

while (parent) {
    level++;
    parent = parent.parentElement;
}

alert("The level of the element is: " + level);
