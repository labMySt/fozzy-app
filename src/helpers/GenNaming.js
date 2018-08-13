/*
   Simple fucntion that helps you to gemerate name of products
   proup, witch you see in current moment on your sceen
*/

export default function (filters, categories) {
  let naming;

  let categoryProd = categories[filters[0]].groups;
  let subgroup = null;
  for(let item of categoryProd) {
   if(item.path === filters[1]){
      naming = item.name;
      subgroup = item.subgroups;
      break;
    }
  }

  if(typeof filters[2] !== "undefined") {
    for(let item of subgroup) {
     if(item.path === filters[2]){
        naming =  naming + " " + item.name;
        break;
      }
    }
  }

  return naming.toUpperCase();
}
