import categoruis from "./categories"
import products from "./products"
/*
This block is a imitation of server side work.
To use this you should type:

      export default axisos from './axisos';

      axisos.get("on_of_parameter_from_implementation")
        .then(res => .....)   or use asinc function
  */

export default {
  get: function(path) {
    return new Promise((res, rej) => {
      setTimeout(() => {
         switch (path) {
           case 'categories'   : res(categoruis);                              break;
           case 'confectionary': res({confectionary: products.confectionary}); break;
           case 'oil'          : res({oil : products.oil});                    break;
           case 'ice'          : res({ice: products.ice});                     break;
           case 'alcogol'      : res({alcogol:products.alcogol});              break;

           default : rej("Uuops!");
         }
      }, 1000, path)
    })


  }
}
