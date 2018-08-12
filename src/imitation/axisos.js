import categoruis from "./categories"
import products from "./products"

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
