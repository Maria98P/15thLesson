class Car {
    name;
    productionYear;
    image;
    price;
    constructor (carName, carProductionYear, carImage, carPrice){
        this.name = carName;
        this.productionYear = carProductionYear;
        this.image = carImage;
        this.price = carPrice;
    }
    write() {
        document.getElementsByClassName("title")[0].innerHTML = this.name;
       document.getElementsByClassName("paragraph")[0].innerHTML = "Production Year: " + this.productionYear + "<br>" + " Price: " + this.price;
       document.getElementsByClassName("image")[0].innerHTML = "<img src='download.jpg' alt='Car Image'>";
    }
       

  
}

let car1 = new Car("Ford Mustang", "2024","download.jpg" , "30,920");
let car2 = new Car("Audi A4", "2024", "", "30,000");
let car3 = new Car("Bmw X1", "2024", "", "45,419");
let car4 = new Car("Chevrolet Camaro", "2024", "", "30,920");
let car5 = new Car("Dodge Challenger", "2024", "", "30,920");
let car6 = new Car("Tesla Model", "2024", "", "30,920");
let car7 = new Car("BMW i3", "2024", "", "30,920");
let car8 = new Car("Nissan Leaf", "2024", "", "30,920");

const cars = [car1, car2, car3, car4,car5, car6, car7, car8];

cars.forEach(car => {
    car.write();
});


/*  ftiaxe ta classes se ola ta h2/img/klp opws sto prwto
    push - na mpainoun ta kainourgia automata
    na metraei se  poia thesh eimaste gia na ananewnei to inner html swsta (me +1?)
    na anoigei me on click extra info me megalh eikona se ena function, kai na to kleinei me on click ksana (me mona-zuga?)*/



