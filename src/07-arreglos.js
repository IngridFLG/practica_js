

const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products)

// forma 1
products.forEach( el => console.log(el) )

// forma 2
for(const prod of products){
   console.log(prod);
}

// forma 3
for (let i = 0; i < products.length; i++) {
   const el = products[i];
   console.log(el);
}

// imprime mesa
console.log(products[0]);