// "use strict";

(function(){
    //We can create an object with properties like so!
    let kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: ("12/6/2013")
    };

    //We can also define property values to an object these two ways
    kamea.age = 9;
    kamea["weight_in_lbs"] = 2400;

    let babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: ("2/6/2021")
    }

    //We can also access the properties by using the following syntax
    console.log(kamea.age);
    console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

    //Well, whales are neat and all, but what would be a more practical application for objects?

    let forecast = [
        {
            day: "monday",
            summary: "partly cloudy",
            highsLows: "90",
            highActual
        }
    ]

});