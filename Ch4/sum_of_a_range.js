function range(start, end, step=1) {
	var res = [];
	if (step > 0) {
		for(var a = start; a <= end; a += step)
			res.push(a);
	} else {
		for(var a = start; a >= end; a += step)
			res.push(a);
	}
	return res;
}

function sum(list) {
	var sum = 0;
	for(var a = 0; a < list.length; a++)
		sum += list[a];
	return sum;
}

console.log(sum(range(5, 2, -1)));
