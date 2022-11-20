//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

// my Code
class Car extends VehicleModule {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    scheduleService(mileage) {
        if(this.mileage > 30000 ) { this.timeForMaintenance == true 
         return this.scheduleService;
        }
    }

    start() {
        if(this.fuel > 0) {
         console.log("engine has started.");
         return this.started = true;
        } else {
         console.log("no fuel");
         return this.started = false;
        }
    }

    loadPassenger(num) {
     if (this.passenger < this.maximumPassengers) {
      if((num + this.passenger) <= this.maximumPassengers) {
       this.passenger = num;
       return this.passenger;
      } else {
       console.log(this.model + " " + this.make + " not have enough space to take all passengers.")
      }
     } else {
      console.log(this.model + " " + this.make + " is full");
     }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "white", "50000");
console.log(v.make)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)