var twoCitySchedCost = function (costs) {
    let totalCost = 0;
    costs.sort((a, b) => {
      return b[0] - b[1] - (a[0] - a[1]);
    });
   
    // City B
    for (let i = 0; i < costs.length / 2; i++) {
      totalCost += costs[i][1];
    }

    // city A
    for (let i = costs.length / 2; i < costs.length; i++) {
      totalCost += costs[i][0];
    }
    return totalCost;
  };
   
  const inpArr = [];
  const n = parseInt(readline());
  for (let i = 0; i < n; i++) {
      inpArr.push(readline().split(' ').map(item => parseInt(item)));
   
  }
   
  //let inpArr = [[10,20],[30,200],[400,50],[30,20]];
  console.log(twoCitySchedCost(inpArr));