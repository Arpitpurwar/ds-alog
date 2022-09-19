       
    function generateSubsetSumsRecur(arr, st, end, index, runningSum, sums)
    {
        console.log('arr', arr, 'start', st,'end:', end,'index:', index, runningSum, sums)
        if (index == end + 1)
        {
            (sums.push(runningSum) > 0);
            return;
        }
        generateSubsetSumsRecur(arr, st, end, index + 1, runningSum + arr[index], sums);
        generateSubsetSumsRecur(arr, st, end, index + 1, runningSum, sums);
    }

    function numberOfSubsets(arr, n, a, b)
    {
       let lowerBound = (A, T) => {
		    let N = A.length,i = 0,j = N;
		    while (i < j) {
		        let k = Math.floor((i + j) / 2);
		        if (A[k] < T)
		            i = k + 1;
		        else
		            j = k;
		    }
		    return i;
		};

		let upperBound = (A, T) => {
		    let N = A.length,
		        i = 0,
		        j = N;
		    while (i < j) {
		        let k = Math.floor((i + j + 1) / 2);
		        if (A[k] <= T)
		            i = k;
		        else
		            j = k - 1;
		    }
		    return A[j] <= T ? j + 1 : j;
		}; 
        var sums = new Array();
        generateSubsetSumsRecur(arr, 0, parseInt(n / 2), 0, 0, sums);
        console.log(sums)
        var firstSubsetSums = sums.slice(0);
        
        var sums2 = new Array();
        generateSubsetSumsRecur(arr, parseInt(n / 2) + 1, n - 1, parseInt(n / 2) + 1, 0, sums2);
         console.log(sums2,firstSubsetSums)
        var secondSubsetSums = sums2.slice(0);
       
        secondSubsetSums.sort(function(a, b) {return a - b;});
        var count = 0;
        for (var i = 0; i < firstSubsetSums.length; i++)
        {
            var p = lowerBound(secondSubsetSums, a-firstSubsetSums[i]) - secondSubsetSums[0];
		        var q = upperBound(secondSubsetSums, b-firstSubsetSums[i]) - secondSubsetSums[0];
            count += (q - p);
        }
        return count;
    }

   
        var N = 3;
        var A = -1;
        var B = 2;
        var arr =
        [1, -2, 3];
        console.log(numberOfSubsets(arr, N, A, B));
   