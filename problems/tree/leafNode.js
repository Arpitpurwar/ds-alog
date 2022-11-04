let i = 0;
function isLeaf(pre, min, max)
{
	console.log('pre',i,pre[i],min, max);
	let n = preorder.length;
	if (i >= n)
	{
	return false;
	}

	if (pre[i] > min && pre[i] < max)
	{
	i++;
	console.log("middle", i,pre[i], min, max);
	let left = isLeaf(pre, min, pre[i - 1]);
	let right = isLeaf(pre, pre[i - 1], max);
	console.log("end", i, pre[i], min, max);
	if (!left && !right)
	{
	console.log(pre[i - 1] + " ");
	}
	return true;
	}
	return false;
}

function findLeafNodes(preorder) {
  isLeaf(preorder, Number.MIN_VALUE, Number.MAX_VALUE);
}
let preorder = [890, 325, 290, 530, 965];
findLeafNodes(preorder);