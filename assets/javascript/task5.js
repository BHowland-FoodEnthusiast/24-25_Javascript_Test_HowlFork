/* Put code for the task below */



/* I had to borrow this nightmare code from our old Javascript Github page.
I feel stupid for not having thought of it 32 minutes ago.
 */
function textEval() {
    /*
    * Here we establish 4 variables to evaluate whether the text boxes are empty.
    */
    let value1 = document.getElementById("fullName").value;
    let value2 = document.getElementById("address").value;
    let value3 = document.getElementById("phone").value;
    let value4 = document.getElementById("email").value;

    /*
    * Here we actually evaluate if they are empty and, if so,
    * change the color of the box to red. This lets the user know that box is required.
    */
    if (value1 === "") {
        document.getElementById("fullName").style.backgroundColor = "red";
    }
    if (value2 === "") {
        document.getElementById("address").style.backgroundColor = "red";
    }
    if (value3 === "") {
        document.getElementById("phone").style.backgroundColor = "red";
    }
    if (value4 === "") {
        document.getElementById("email").style.backgroundColor = "red";
    }else if(value4 !== "") {
        document.getElementById("email").style.backgroundColor = "white";
    }
}