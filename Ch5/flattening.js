/* Flattens array using higher order functions */

var arr = [['Hello'], [' World!']];

console.log(arr.reduce(
	function(total, curr) {
		return total.concat(curr);
	}
));
