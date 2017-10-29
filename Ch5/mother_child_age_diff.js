function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function mother_child(p) { return p.mother.age - p.age; }

console.log(average(array.map(mother_child)));
