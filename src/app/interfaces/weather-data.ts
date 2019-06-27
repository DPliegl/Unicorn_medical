export class WeatherData {
    humidity: number;
    temperature_3: number;
    temperature_a: number;
    date: string;
    brightness: number;
    air_pressure: number;
    rain: number;
    direction: number;
    wind: number;
    time: string;

    constructor(data: {
        humidity: number, temperature_3: number, temperature_a: number, date: string, brightness: number,
        air_pressure: number, rain: number, direction: number, wind: number, time: string
    }) {

        this.humidity = data.humidity;
        this.temperature_3 = data.temperature_3;
        this.temperature_a = data.temperature_a;
        this.date = data.date;
        this.brightness = data.brightness;
        this.air_pressure = data.air_pressure;
        this.rain = data.rain;
        this.direction = data.direction;
        this.wind = data.wind;
        this.time = data.time;
    }

}

export interface IWeatherData {
    'Datum': string,
    'Zeit': string,
    'Temp. A.': number,
    'Temp. 3': number,
    'Feuchte A.': number,
    'Luftdruck': number,
    'Regen': number,
    'Wind': number,
    'Richtung': number,
    'Helligkeit': number,
}


