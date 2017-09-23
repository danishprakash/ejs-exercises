var size = 8;
var player = "#";

for (var a = 0; a < size; a++) {
	for (var b = 0; b < size/2; b++) {
		if(a % 2 == 0)
			process.stdout.write(player + " ");
		else
			process.stdout.write(" " + player);
	}
	console.log("\n");
}

