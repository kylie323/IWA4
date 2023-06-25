const date = 2050;
let label = "parent";
let count = 0;

if (date) {
	console.log('January', 'New Year’s Day')
	console.log('March', 'Human Rights Day')
	let date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4

	if (label = false) {
	  console.log('June', 'Youth Day')
		count = count + 1
  }
}

if (date) {
  console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	let date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	 if (label = "parent") {
     let date = 'December'
	   console.log(date, 'Christmas Day')
		 count = count + 1
}
console.log(date, 'Day of Goodwill')
count = count + 1
}

console.log('Your status is:', label)
console.log('The year is:', date)
console.log('The total holidays is:', count)