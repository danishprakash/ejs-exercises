var TAX_RATE = 0.8;
var PHONE_PRICE = 99.99;
var ACC_PRICE = 9.99;
var total = 0;
var flag;

function formatTotal ( amount ) {
	amount += (amount * TAX_RATE);
	return "$" + amount.toFixed( 2 );
}

var bank_balance = prompt('Enter your bank balance: ');

while(true) {
	
	if ( bank_balance < PHONE_PRICE ) {
		console.log('Your bank balance is insufficient');
		break;
	}
	
	bank_balance -= PHONE_PRICE;
	total += PHONE_PRICE;

	//flag should be explicitly coerced in order to avoid problems
	flag = Number(prompt('Do you want to add accessory for $9.99? (1/0)'));
	if ( flag ) {
		total += ACC_PRICE;
		bank_balance -= ACC_PRICE;
	}

	console.log('Your grand total: ' + formatTotal(total));
	
	flag = Number(prompt("Your current balance is: " + bank_balance.toFixed( 2 ) + "\nDo you want to continue shopping? (1/0)"));
	if ( !flag ) {
		break
	}
}
