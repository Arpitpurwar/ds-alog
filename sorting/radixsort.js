const countSort = (givenArray, decimal) => {
   let frequency = new Array(10).fill(0);
 
   for (let i = 0; i < givenArray.length; i++){
	 frequency[Math.floor((givenArray[i] / decimal) % 10)]++;
   }
      
      
   console.log("Frequency");
   
    console.log(frequency);
    console.log();
    for (let i = 1; i < 10; i++){
		frequency[i] += frequency[i - 1];
	}
       
     
    console.log("Frequency Sum");
   
    console.log(frequency);
    
   
   resultArray = new Array(givenArray.length).fill(0);

   for (let i = givenArray.length - 1; i >= 0; i--) {
       resultArray[frequency[Math.floor((givenArray[i] / decimal) % 10)] - 1] = givenArray[i];
	   frequency[Math.floor((givenArray[i] / decimal) % 10)]--;
   }
  
    for (let i = 0; i < givenArray.length; i++){
		givenArray[i] = resultArray[i];
	}

   console.log("sort with " + decimal + "'s decimal place.")
   console.log(givenArray);
}
const radixsort = (givenArray) => {
   let maxElement = Math.max(...givenArray);
   for (let decimal = 1; Math.floor(maxElement / decimal) > 0; decimal *= 10){
       console.log("calling countSort with " + decimal + "'s decimal place.")
       countSort(givenArray, decimal);
   }
}
let givenArray = [129, 431, 234, 653, 232, 824, 2, 921, 54];

radixsort(givenArray);

console.log("Result");
console.log(givenArray);
