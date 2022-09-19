let lowerBound = (A, T) => {
		    let N = A.length,left = 0,right = N;

		// bring your left index just lower than target and then increase left by 1 to get lower bound...
		// if element found...then well & gud and that index otherwise if not found then left+1 would
		// be the lower bound for that new element

		    while (left < right) {
		        let k = Math.floor((left + right) / 2);
		        if (A[k] < T) 
		            left = k + 1; 
		        else
		            right = k;
		    }
		
		    return left;};

let upperBound = (A, T) => {
		    let N = A.length,left = 0,right = N;
		
		    while (left < right) {
		        let mid = Math.floor((left + right) / 2);
				console.log('left',left, "right:", right, "mid", mid)
		        if (A[mid] > T)
		            right = mid;
		        else
		            left = mid +1;
			
				console.log('lleft',left, "right:", right, "mid", mid)
		    }
		
		    return right;};
console.log(lowerBound([2,6,7,8,9,10,10,12,13],1))