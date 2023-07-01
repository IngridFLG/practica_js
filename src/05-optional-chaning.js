
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

console.log(invoice.company?.name);
console.log(invoice.client?.name);
console.log(invoice.client?.address?.street);
if(invoice.company != undefined && invoice.company.name){
   console.log('perfecto!!');
} else{
   console.log('no existe la empresa');
}
