const isConnected = [[1,0,0],[0,1,0],[0,0,1]]

const row = isConnected.length;
const column = isConnected[0].length;

const visited = new Array(row).fill(false);

let count = 0;
const stack = [];
for(let i = 0; i< visited.length; i++){
	if(!visited[i]){
		count++;
		stack.push(i);

		while(stack.length >0){
			const index = stack.pop();
			visited[index] = true;

			for(let j=0; j< column; j++){
				if(!visited[j] && isConnected[index][j]===1){
					stack.push(j)
				}
			}
		}

	}
}

console.log(count);