export const getRandomHexColor = () => {
  const colorEl = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  let red = colorEl();
  let green = colorEl();
  let blue = colorEl();

    return `#${red}${green}${blue}`; 

}