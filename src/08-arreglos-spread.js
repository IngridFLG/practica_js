

let products = ['mesa', 'silla', 'notebook', 'teclado'];
products.push('pantalla lcd', 'sony tv');
products = products.concat('azul', 'rojo');

const fruits = ['peras', 'manzanas', 'sandias', 'fresas'];

//const marked = [...fruits, ...products, 'lechuga', 'papas', 'uvas'];

const marked2 = products.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products);
console.log(marked2);