// 변수 대문자로 시작해서 만듦 - > Consturctor
var Car = function(maxSpeed, driver) {
  
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  
  this.drive = function(speed, time) {
  console.log(speed * time );
};
this.logDrive = function() {
console.log("driver name is " + this.driver);
};

}

var myCar = new Car(70, "bot");
var myCar2 = new Car(30, "yechu");
var myCar3 = new Car(50, "max");
var myCar4 = new Car(20, "robot");

