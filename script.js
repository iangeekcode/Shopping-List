var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createElement() {
	//First we create an <li> an store it inside a variable
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value))

	li.addEventListener("click", function () {
		var isCrossed = li.classList.toggle("done")
		var delButton = document.createElement("button");
		if (isCrossed === true) {
			delButton.appendChild(document.createTextNode("DELETE"));
			delButton.classList.add("del-button")
			delButton.addEventListener("click", function () {
				li.classList.add("remove-li")
			})
			li.appendChild(delButton);
		}
		else{
		  document.querySelector(".del-button")
      .remove();	
		}
	})
	ul.appendChild(li);
	input.value = "";
}

function buttonClicked() {
	if (input.value.length > 0) {
		createElement();
	}
}

function enterKeyPressed(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createElement();
	}
}

button.addEventListener("click", buttonClicked);
input.addEventListener("keydown", enterKeyPressed);
