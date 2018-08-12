

export default function (group, subgroup) {
  let naming;
  if(subgroup){
  naming  = `${group} ${subgroup}`;
  } else {
     naming = `${group}`;
    }
  return naming.toUpperCase();
}
