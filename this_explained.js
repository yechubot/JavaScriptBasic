console.log(this);

var myCar2 = {
maxSpeed: 70, 
driver: "Yeeun",
drive: function(speed,time) {
console.log(speed*time);
},
logDriver : function() {
console("driver name is " + this.driver)
}

};
