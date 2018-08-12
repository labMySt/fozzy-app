import categoruis from "./categories"
import products from "./products"

export default {
  get: function(path) {
    return new Promise((res, rej) => {
      setTimeout(() => {
         switch (path) {
           case 'categories'   : res(categoruis);             break;
           case 'confectionary': res(products.confectionary); break;
           case 'oil'          : res(products.oil);           break;
           case 'ice'          : res(products.ice);           break;
           case 'alcogol'      : res(products.alcogol);       break;

           default : rej("Uuops!");
         }
      }, 1000, path)
    })


  }
}
