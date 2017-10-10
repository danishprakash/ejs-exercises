function reverseArray(arr) {
	var newArr = [];
	var j = 0;
	for(var a = arr.length-1; a >= 0 ; a--) {
		newArr[j] = arr[a];
		j++;
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	var j = arr.length - 1;
	for(var i = 0; i < (arr.length)/2; i++) {
		var temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
		j--;
	}
	return arr;
}

console.log(reverseArray([5, 4, 3, 2, 1]))
console.log(reverseArrayInPlace([5, 4, 3, 2, 1]))
