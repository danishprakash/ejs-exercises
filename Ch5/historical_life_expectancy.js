function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function groupBy(array, f) {
	var obj = {};
	array.forEach(function(person) {
		if (person in obj)
			obj[f].push((person.died - person.born));
		else
			obj[f] = [(person.died - person.born)];
	});
	return obj;
}

var sets = groupBy(array, function(person) {
	return Math.ceil(person.died);
})

for(item in sets) {
	console.log(average(sets[item]));
}
