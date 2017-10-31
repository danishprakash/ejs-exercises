function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function mother_child(p) { return p.mother.age - p.age; }

console.log(average(array.filter(function(person) {
	return person.mother.name != null;
}).map(mother_child)));
