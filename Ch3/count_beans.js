function countChar(str, char_) {
	var count = 0;
	for(var counter = 0; counter < str.length; counter++) {
		if(str[counter] == char_)
			count++;
	}
	return count;
}

console.log(countChar('BBBaBB', 'B')) //5
