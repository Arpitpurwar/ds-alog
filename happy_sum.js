function getSquare(n){
	let temp = n%10;
	if(temp === n){
		return n*n;
	}
	return temp*temp + getSquare(Math.floor(n/10))
}

function isHappy(n){
	let result = getSquare(n)
	if(result === 1){
		return true
	}else if( result === 0 || result >1 && result <10){
		return false
	}
	else{
		return isHappy(result)
	}
}

console.log(isHappy(16))