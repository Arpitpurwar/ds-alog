class Graph{
	constructor(vertices){
		this.vertices = vertices;
		this.adjList = [];
		for(let i=0; i< vertices;i++){
			this.adjList.push([]);
		}
	}

	addEdge(src, dest){
		this.adjList[src].push(dest);
		this.adjList[dest].push(src);
	}

	connectdComponentsRecursive(){
		let visited = new Array(this.vertices).fill(false);
		let ans = 0;
		let adjListArray = this.adjList;
		console.log(adjListArray)
		for(let i=0; i<visited.length; i++){
			if(!visited[i]){
				ans++;
				dfsRecursive(i)

				console.log('next connected Component');
			}
		}

		function dfsRecursive(vertices){
			visited[vertices] = true;
			console.log('connected vertices', vertices);
			for(let i =0; i< adjListArray[vertices].length; i++){
				if(!visited[adjListArray[vertices][i]]){
					dfsRecursive(adjListArray[vertices][i])
				}
			}

		}

		console.log('total componenet', ans);

	}

	connectdComponentsIterative(){
		let adjList = this.adjList;
		let visited = new Array(this.vertices).fill(false);

		let ans = 0;
		let stack = [];
		for(let i = 0; i< visited.length; i++){
			if(!visited[i]){
				ans++;
				stack.push(i);
				
				while(stack.length > 0){
					const vertices = stack.pop();
					visited[vertices] = true;
					console.log('connnected vertices', vertices);
					for(let i = 0; i< adjList[vertices].length; i++){
						if(!visited[adjList[vertices][i]]){
							stack.push(adjList[vertices][i]);
						}
					}
				}

				console.log('next Connected component');
			}
		}

		console.log('total connected component', ans);
	}
}

let graph = new Graph(5)
graph.addEdge(0,1)
graph.addEdge(1,2)
graph.addEdge(3,4)
// console.log(graph)
graph.connectdComponentsRecursive();
graph.connectdComponentsIterative();