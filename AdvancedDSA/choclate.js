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
					greaterThan += jump;		}
			}
			ans += greaterThan + 1;
		}
		return ans;
	}
 
	function kthSmallestChocolates(mat,n,k)
	{
		let l = mat[0][0], r = mat[n - 1][n - 1];
		while (l <= r) {
			let mid = l + parseInt((r - l) / 2, 10);
			let gtem =
			getElementsGreaterThanOrEqual(mid, n, mat);
			if (gtem >= k)
				r = mid - 1;
			else
				l = mid + 1;
		}
		return l;
	}
 
 
let n = 4;
let mat = [];
let line = true;
while (line) {
	let inp = readline();
	if (inp){
		mat.push(inp.split(', ').map(item => parseInt(item)))
	}
	else {
		line = false;
	}
}
	console.log(kthSmallestChocolates(mat, 4, 5));