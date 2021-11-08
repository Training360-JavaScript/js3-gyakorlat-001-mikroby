const HU = {
  date(toHunDate) {
    return new Intl
      .DateTimeFormat('hu-HU').format(toHunDate);
  },
  
  curreny(toHuf) {
    return new Intl
      .NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(toHuf);
  },
  
  list(array) {
    return array.map((item, index,array) =>
      index === array.length-1 ? ` és ${item}`: `, ${item}`).join('').replace(', ','');
  }

  // list(array) {
  //   const copy=[...array];
  //   copy.splice(-1, 0, 'és');
  //   return copy.join(', ').replace(', és,', ' és');    
  // }
}

export default HU


// const test = ['alma', 'körte', 'banán', 'eper', 'málna'];
// console.log(HU.date(new Date()));
// console.log(HU.curreny(1200))
// console.log(HU.list(test));
