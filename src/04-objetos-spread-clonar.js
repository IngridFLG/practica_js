
// crear objetos dentro de objetos
const invoice = {
   id: 10, 
   name: 'Compras de oficina',
   date: new Date(),

   client: {
      id: 2,
      name: 'Jhon',
      lastname: 'Doe',
      age: 22,
   },

   items: [ // arreglo
      {
         producto: 'keyboard',
         price: 399,
         quantity: 2,
      },
      {
         pproducto: 'mouse',
         price: 200,
         quantity: 1,
      },
      {
         pproducto: 'paper',
         price: 100,
         quantity: 10,
      },
   ], 

   total: function(){
      let total = 0;
      this.items.forEach(item => {
         total = total + item.price * item.quantity;
      });
      return total;
   },

   //opcion 1 mejor
   greeting: function(){
      return `Hola ${this.client.name}`;
   },
   //opcion 2
   greeting2: () => {
      return `Hola ${invoice.client.name}`;
   },
};

//const invoice2 = invoice;
const invoice2 = { ...invoice};

const result = invoice === invoice2;

if (result) console.log(result);
else console.log('no son iguales');

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);

