var filterCarsPromise = require('./promise3.js')

// mobil berwarna hitam tahun 2019
filterCarsPromise("black", 2019)
  .then(function (cars) {
    console.log(cars);
    })
    .catch(function (error) {
    console.log(error);
    }
    );

  filterCarsPromise("silver", 2017)
  .then(function (cars) {
    console.log(cars);
    })
    .catch(function (error) {
    console.log(error.message);
    }
    );

    // async/await untuk kondisi ini
    async function getCars() {
      try {
        var cars = await filterCarsPromise("grey", 2019);
        console.log(cars);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCars();

    
    // async/await untuk kondisi ini
    async function getCars2() {
      try {
        var cars = await filterCarsPromise("grey", 2018);
        console.log(cars);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCars2();

    
    // async/await untuk kondisi ini
    async function getCars3() {
      try {
        var cars = await filterCarsPromise("black", 2020);
        console.log(cars);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCars3();