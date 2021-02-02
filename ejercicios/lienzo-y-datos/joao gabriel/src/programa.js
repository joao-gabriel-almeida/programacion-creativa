import './scss/estilos.scss';

const c = document.getElementById('lienzo');
const ctx = c.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
const hex_numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let hexcode = "";

let aceleracion = 0;
c.onmouseover= (evento) => {
let hexcode = "";
for (var i = 0 ; i < 6 ; i++){
let random_index = Math.floor(Math.random() * hex_numbers.length); 
hexcode += hex_numbers[random_index];
};
console.log(hexcode);
}


function actualizar() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
ctx.fillStyle = "#" + hexcode.toString();
ctx.fillRect(0, 0, c.width, c.height);

};


c.onmousemove = (evento) => {
raton.x = evento.clientX;
raton.y = evento.clientY;
ctx.beginPath();
ctx.arc(raton.x, 50, raton.y, 0, 2 * Math.PI);
ctx.stroke();
};
window.onresize = actualizar;
actualizar();


console.log('Webpack');
