
import { invoiceById} from './data/invoices';

const promise = new Promise((resolve, reject) => {

   setTimeout(() => {
      const result = invoiceById(2);

      if(result){
         resolve(result);
      }else {
         reject('Error!! no existe la factura');
      }
      
   }, 2500);
});


promise.then(console.log).catch(console.error);

// promise.then((result) => {
//       console.log(result);
// }).catch((error) => console.error(error));
