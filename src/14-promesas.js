
import { findInvoiceById } from './data/invoices';

findInvoiceById(3).then(console.log).catch(console.error);

// promise.then((result) => {
//       console.log(result);
// }).catch((error) => console.error(error));

