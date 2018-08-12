export default function (state) {
  let filteredProd = [];
  let categoryProd = []
  const { filters, products } = state;

  const Items = new RegExp(`/(\\w+)/(\\w+)(?:/(\\w+))?`)
 .exec(filters);
 categoryProd = products[Items[1]];
  let massGroups = [];
  massGroups.push(Items[2]);
 let subgroup  = 1;
 if(typeof Items[3] !== "undefined") {
   subgroup = 2;
   massGroups.push(Items[3]);
 };

 for(let item in categoryProd) {
   let counter = 0;
  for(let jtem in massGroups) {
    if (categoryProd[item].categories.indexOf(massGroups[jtem]) !== -1)
    counter++;
  }
  if(counter === subgroup)
   filteredProd.push(categoryProd[item]);
 }
 return filteredProd;
}
