
const papper = {
   producto: "papper",
   price: 100,
   quantity: 10,
};



const invoices = [
   {
      id: 1,
      name: "Compras de oficina",

      client: {
         name: "Jhon",
         lastname: "Doe",
      },

      items: [
         // arreglo
         {
            producto: "keyboard",
            price: 399,
            quantity: 2,
         },
         {
            producto: "mouse",
            price: 200,
            quantity: 1,
         },
         papper,
      ]
   },
   {
      id: 2,
      name: "Compras de computación",

      client: {
         name: "carlos",
         lastname: "gomez",
      },

      items: [
         // arreglo
         {
            producto: "keyboard",
            price: 399,
            quantity: 2,
         },
         {
            producto: "screen 17",
            price: 800,
            quantity: 1,
         },
         papper,
      ]
   },
   {
      id: 3,
      name: "Compras de papeleria",

      client: {
         name: "jefferson",
         lastname: "alvarez",
      },

      items: [
         // arreglo
         {
            producto: "pen",
            price: 400,
            quantity: 1,
         },
         {
            producto: "ruler",
            price: 100,
            quantity: 50,
         },
      ],
   }
];

const invoicesName = invoices.map( i => {
   return i.name;
})

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map( i =>  i.client.name);
console.log(invoicesClient);

// devuelve el objeto
const invoiceByName = invoices.find( i => i.client.name === 'Jhon');
console.log(invoiceByName);

// devuelve el objeto
const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log('Filter eliminar')
const invoiceDeleted = invoices.filter(i => i.id != 2);
console.log(invoiceDeleted);

// devuelve el objeto
const invoiceFilter2 = invoices.filter(i => i.items.includes(papper));
console.log(invoiceFilter2);

// devuleve true o false
const result = invoices.some(i => i.client.name === 'Jhon');
console.log(result);