export const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };
  
  export const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  
  export const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
  
  export const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };
  