var updateMatrix = function(mat) {
    let row = mat.length;
    let col = mat[0].length;
    
    let queue = [];
    let ans = []
    
    for(let i=0; i< row; i++){
        ans.push([])
    }
	 
    for(let i = 0; i< row; i++){
        for(let j = 0; j< col; j++){
            if(mat[i][j] === 0){
                ans[i][j] = 0;
                queue.push(i*col + j);
            }
            else{
                ans[i][j] = -1;
            }
        }
    }
    
    const dir = [[0,1],[0,-1],[-1,0],[1,0]];
    let level = 0;
    
    while(queue.length > 0){
        let size = queue.length;
        console.log(queue, ans)
        while(size-- > 0){
            let cell = queue.shift();
            let rc = Math.floor(cell/col);
            let cc = cell%col;

            for(let i = 0; i< dir.length; i++){
				let nr = rc+dir[i][0];
                let nc = cc+dir[i][1];
				
                if(nr >= 0 && nc >= 0 && nr < row && nc < col && ans[nr][nc] === -1){
                    queue.push(nr*col+nc);
                    ans[nr][nc] = level+1;
                 }
            }

        }
        
        level++;
    }
    
  return ans  
    
};


console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))