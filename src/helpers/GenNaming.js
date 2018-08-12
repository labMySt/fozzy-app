

export default function (filters, categories) {
  let naming;

  const Items = new RegExp(`/(\\w+)/(\\w+)(?:/(\\w+))?`)
  .exec(filters);

  let categoryProd = categories[Items[1]].groups;
  let subgroup = null;
  for(let item of categoryProd) {
   if(item.path === Items[2]){
      naming = item.name;
      subgroup = item.subgroups;
      break;
    }
  }

  if(typeof Items[3] !== "undefined") {
    for(let item of subgroup) {
     if(item.path === Items[3]){
        naming =  naming + " " + item.name;
        break;
      }
    }
  }

  return naming.toUpperCase();
}
