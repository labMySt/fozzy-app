import translations from '../translations';


export default function (group, subgroup) {
  if(subgroup)
  var naming = `${translations[group]} ${translations[subgroup]}`;
  else
   var naming = `${translations[group]}`;
  return naming.toUpperCase();
}
