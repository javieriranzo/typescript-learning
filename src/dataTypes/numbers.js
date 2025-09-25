"use strict";
let city1Name = "Valencia";
let city2Name = "Madrid";
let city1Temperature = 30;
let city2Temperature = 20;
let haveGreatHumidity = true;
function printTemperatureDifference(name1, temperature1, name2, temperature2) {
    let motivo = '';
    if (haveGreatHumidity && city1Name === "Valencia" && temperature2 < temperature1) {
        motivo = 'because it has great humidity';
        console.log(`${name1} is cooler than ${name2}, ${motivo} `);
        return;
    }
    if (temperature1 > temperature2)
        console.log(`${name1} is warmer than ${name2} by ${temperature1 - temperature2} degrees`);
    if (temperature1 < temperature2)
        console.log(`${name2} is warmer than ${name1} by ${temperature2 - temperature1} degrees`);
    if (temperature1 === temperature2)
        console.log(`${name1} and ${name2} have the same temperature`);
}
printTemperatureDifference(city1Name, city1Temperature, city2Name, city2Temperature);
