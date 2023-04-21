
function getElementsGreaterThanOrEqual(num,n,mat)
{
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (mat[i][0] > num) {
            return ans;
        }
        if (mat[i][n - 1] <= num) {
            ans += n;
            continue;
        }
        let greaterThan = 0;
        for (let jump = n / 2; jump >= 1; jump /= 2) {
            while (greaterThan + jump < n &&
                mat[i][greaterThan + jump] <= num) {
                greaterThan += jump;		
      }
        }
        ans += greaterThan + 1;
  console.log('ans', ans, 'row',i)
    }
    return ans;
}

function kthSmallestChocolates(mat,n,k)
{
    let l = mat[0][0], r = mat[n - 1][n - 1];
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2, 10);
  console.log('mid', mid, 'l', l, 'r', r)
        let gtem = getElementsGreaterThanOrEqual(mid, n, mat);
        if (gtem >= k)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return l;
}


let n = 4;
let mat = [
    [10, 20, 30, 40],
    [15, 26, 35, 44],
    [24, 29, 37, 38],
    [32, 33, 39, 42],
];