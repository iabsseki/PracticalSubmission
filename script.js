var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

var elements = [];

function line(data) {
  var that = this;
  this.value = data.value;
 if (data == 3) {
    this.message = "is below 10.";
  } else if (data == "Jerry") {
    this.message = "is normal.";
  } else if (data == "Sandy") {
    this.message = "is normal.";
  } else if (data == 4) {
    this.message = "is below 10.";
  } else if (data == "Pepper") {
    this.message = "is more than 5 characters.";
  } else if (data == 15) {
    this.message = "is exactly 15.";
  } else if (data == "Jocastah") {
    this.message = "is more than 5 characters.";
  } else if (data == 12) {
    this.message = "is normal.";
  }
  this.color = "The value is " + data + " and " + this.message;
  this.ele = document.createElement("div");
  this.eleColor = document.createElement("div");
  this.eleColor.innerHTML = this.color;
  this.eleValue = document.createElement("div");
  this.ele.addEventListener("click", function () {
    that.changeColor();
  });
  this.ele.appendChild(this.eleColor);
  this.ele.appendChild(this.eleValue);
  document.body.appendChild(this.ele);
}

line.prototype.changeColor = function () {
  this.eleColor.style.color = "blue";
};

for (var i = 0; i < stringers.length; i++) {
  elements.push(new line(stringers[i]));
}