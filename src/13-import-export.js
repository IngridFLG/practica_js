
import { invoices, papper, invoiceByName} from './data/invoices';


const invoicesName = invoices.map( i => {
   return i.name;
})

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map( i =>  i.client.name);
console.log(invoicesClient);

// devuelve el objeto
// const invoiceByName = invoices.find( i => i.client.name === 'Jhon');
console.log('Buscar por nombre del cliente');
console.log(invoiceByName('Jhon'));

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