function arrayToList(arr) {
	var list = {};
	for(var i = arr.length-1; i > -1; i--) {
		var newItem = {	value: arr[i] };
		if( i == arr.length-1)
			newItem.rest = null;
		else
			newItem.rest = list;
		list = newItem;
	}
	return list;
}

function arrayToList2(arr) {
	var list = null;
	for(var i = arr.length-1; i > -1; i--)
		list = {value: arr[i], rest: list };
	return list;
}

function listToArray(list) {
	var arr = [];
	while(list != null) {
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}

function prepend(item, list) {
	var newItem = {
		value: item,
		rest: list
	};
	list = newItem;
	return list;
}

function nth(list, index) {
	var i = 0;
	while(list != null) {
		if( i == index)
			return list.value;
		i++;
		list = list.rest;
	}
	return undefined;
}


console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
