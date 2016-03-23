console.log('pizza shit');

//create pizzaDemand Function
function pizzaDemand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create deliveryDemand Function
function deliveryDemand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create driverDemand Function
function driverDemand(deliveryDemand) {
  return Math.ceil(deliveryDemand / 3);
}
//
// create timeArrays for each store that have demand functions at a given time(.push into time array)
//
// // storesArray = [ballard, firstHill, internationalDistrict, southLakeUnion, georgetown, ravenna];
// function createLocation(name){
//   var storeLocation = {
//     name : name,
//     hourlyData : [],
//   };
//
//   function getHourlyData(time, minDelivery, maxDelivery, minPizza, maxPizza) {
//     var am8 = {
//       time: time,
//       pizzasSold: pizzaDemand(minPizza, maxPizza),
//       deliveriesMade: deliveryDemand(minDelivery, maxDelivery),
//     };
//
//     am8.driversRecommended = driverDemand(am8.deliveriesMade);
//
//     storeLocation.hourlyData.push(am8);
//   }
//
//   getHourlyData('8:00 am', 0, 4, 0,4);
//   getHourlyData('9:00 am', 0, 4, 0,4);
//   getHourlyData('11:00 am', 0, 4, 0,4);
//   return storeLocation;
// };
//
// var ballard = createLocation('ballard');
// var freemont = createLocation('freemont');
//

function getRandomIntInclusive(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PizzaLocation(name) {
  this.name = name;
  this.hourlyData = [];
}

PizzaLocation.prototype.pushHourlyData = function(name){
  this.hourlyData.push(name);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveries, maxDeliveries) {
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('12:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('12:00 am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('2:00 am', 8, 15, 6, 16));
