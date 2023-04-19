//let mat = [[8,20],[3,15]];
let mat = [[3,8],[5,9],[1,5]];

let noOfSessions = mat.length;

let result = 0;

mat.forEach(session => {
    result+= session[1] - session[0];
})

let avgTime = Math.floor(result/noOfSessions);

console.log(avgTime);