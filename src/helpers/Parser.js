/*
  use for separate ulr and set visidility filter
*/

export default function (url) {
  const filters = new RegExp(`/(\\w+)/(\\w+)(?:/(\\w+))?`)
 .exec(url);
 const filterItems = [filters[1], filters[2], filters[3]];
 return filterItems;
}
