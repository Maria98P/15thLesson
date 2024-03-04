const car1 = {
    type: "fiat",
    model: "500",
    color: "white",
    fullInfo: function(){
        return "your car is a " + this.type + " " + this.model;
    }
};

const car2 = {
    type: "nissan",
    model: "primera",
    color: "black",
    fullInfo: function(){
        return "your car is a " + this.type + " " + this.model;
    }
};


const car3 = {
    type: "nissan",
    model: "qashqai",
    color: "red",
    fullInfo: function(){
        return "your car is a " + this.type + " " + this.model;
    }
};

let cars = [car1, car2, car3];
cars.forEach(function(car) {
    console.log(car.fullInfo());
});


const person1 = {
    fname: "Maria",
    lname: "Paraskeupoulou",
    age: "25",
    showInfo: function(){
        document.getElementById("people").innerHTML+= "First Name: " + this.fname +"<br> Last name: "+ this.lname +"<br>";
    }

}

const person2 = {
    fname: "Antonis",
    lname: "Sth",
    age: "27",
    showInfo: function(){
        document.getElementById("people").innerHTML+= "First Name: " + this.fname +"<br> Last name: "+ this.lname +"<br>";
    }

}
const person3 = {
    fname: "Takis",
    lname: "Patatakis",
    age: "29",
    showInfo: function(){
        document.getElementById("people").innerHTML+= "First Name: " + this.fname +"<br> Last name: "+ this.lname +"<br>";
    }

}

people=[person1, person2, person3];
people.forEach(function(person){
    person.showInfo();
})

const animal1 = {
    kind: "cat",
    name: "tom",
    write: function(){
        return "my favourite character is " + this.name;
    }

}

const animal2 = {
    kind: "mouse",
    name: "jerry",
    write: function(){
        return "my favourite character is " + this.name;
    }

}

const animal3 ={
    kind:"dog",
    name:"spike",
    write: function(){
        return "my favourite character is " + this.name;
    }

}

const animals= [animal1, animal2, animal3];
animals.forEach(function (animal){
    document.write(animal.write() + "<br>");
})