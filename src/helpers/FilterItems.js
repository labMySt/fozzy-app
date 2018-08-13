/*
   Use this function to separate products depending on
   set filters. Just put products object, and get arrey with
   products what you need
*/


export default function (state) {
  let filteredProd = [];
  let categoryProd = []
  const { filters, products } = state;

 categoryProd = products[filters[0]];
  let massGroups = [];
  massGroups.push(filters[1]);
 let subgroup  = 1;
 if(typeof filters[2] !== "undefined") {
   subgroup = 2;
   massGroups.push(filters[2]);
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
