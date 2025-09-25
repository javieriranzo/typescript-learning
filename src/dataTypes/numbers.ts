let city1Name: string = "Valencia"
let city2Name: string = "Madrid"

let city1Temperature: number = 30
let city2Temperature: number = 20

let haveGreatHumidity: boolean = true

function printTemperatureDifference(name1: string, temperature1: number, name2: string, temperature2: number): void {
    let motivo: string = ''
    if (haveGreatHumidity && city1Name === "Valencia" && temperature2 < temperature1) {
        motivo = 'because it has great humidity'
        console.log(`${name1} is cooler than ${name2}, ${motivo} `)
        return
    }
    if (temperature1 > temperature2) 
        console.log(`${name1} is warmer than ${name2} by ${temperature1 - temperature2} degrees`)
    if (temperature1 < temperature2) 
        console.log(`${name2} is warmer than ${name1} by ${temperature2 - temperature1} degrees`)
    if (temperature1 === temperature2) 
        console.log(`${name1} and ${name2} have the same temperature`)
}

printTemperatureDifference(city1Name, city1Temperature, city2Name, city2Temperature)