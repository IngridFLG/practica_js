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

 const invoiceByName = (clientName) => {
    return invoices.find( i => i.client.name === clientName);
 }

 const invoiceById = (id) => {
    return invoices.find(i => i.id === id);
 }
  
export {
    papper,
    invoices,
    invoiceByName,
    invoiceById
}