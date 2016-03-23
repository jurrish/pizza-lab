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

//create timeArrays for each store that have demand functions at a given time(.push into time array)

// storesArray = [ballard, firstHill, internationalDistrict, southLakeUnion, georgetown, ravenna];
function createLocation(name){
  var storeLocation = {
    name : name,
    hourlyData : [],
  };

  function getHourlyData(time, minDelivery, maxDelivery, minPizza, maxPizza) {
    var am8 = {
      time: time,
      pizzasSold: pizzaDemand(minPizza, maxPizza),
      deliveriesMade: deliveryDemand(minDelivery, maxDelivery),
    };

    am8.driversRecommended = driverDemand(am8.deliveriesMade);

    storeLocation.hourlyData.push(am8);
  }

  getHourlyData('8:00 am', 0, 4, 0,4);
  getHourlyData('9:00 am', 0, 4, 0,4);
  getHourlyData('11:00 am', 0, 4, 0,4);
  return storeLocation;
};

var ballard = createLocation('ballard');
var freemont = createLocation('freemont');
