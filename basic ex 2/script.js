class Car {
    type;
    model;
    color;
    constructor( carsType, carsModel, carsColor){
        this.type = carsType;
        this.model = carsModel;
        this.color = carsColor;
    }
     write(){
        console.log(this.type)
     }
}


class Motorbike extends Car{
    wheelsNumber;
    constructor (carsType, carsModel, carsColor, carsWheelsNumber){
        super(carsType, carsModel, carsColor);
        this.wheelsNumber = carsWheelsNumber;
    }
}
var c1 = new Car("fiat", "500", "white");


var c2 = new Car("nissan", "primera", "red");


var c3 = new Car ("nissan", "qashqai", "pink");

var motorbike = new Motorbike ("ktm", "390", "red", "2")

var cars = [c1, c2, c3, motorbike];
cars.forEach(function(car){
    car.write();
});