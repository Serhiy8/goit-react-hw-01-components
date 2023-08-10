export const getRandomHexColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  if(red > 30 || green > 30 || blue > 30) {
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;       
  }

   getRandomHexColor()

}