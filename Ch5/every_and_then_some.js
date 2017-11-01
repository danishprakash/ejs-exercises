function every(array, func) {
	for(var a = 0; a < array.length; a++) {
		if (!(func(array[a])))
			return false;
	}
	return true;
}

function some(array, func) {
	for(var i = 0; i < array.length; i++) {
		if (func(array[i]))
			return true;
	}
	return false;
}

console.log(every([2,4,6,8], function even(item) {
	return item % 2 == 0;
}))
// true

console.log(every([3,4,7,9], function even(item) {
	return item % 2 == 0;
}))
//true
