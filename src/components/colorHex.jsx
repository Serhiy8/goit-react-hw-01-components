export const getRandomHexColor = () => {
  let red = Math.floor(Math.random() * 256).toString(16);
  let green = Math.floor(Math.random() * 256).toString(16);
  let blue = Math.floor(Math.random() * 256).toString(16);

  if(red > 30 || green > 30 || blue > 30) {
    return `#${red.padStart(2, '0')}${green.padStart(2, '0')}${blue.padStart(2, '0')}`;       
  }

   return getRandomHexColor();

}