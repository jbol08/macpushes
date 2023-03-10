function countTrue(arr) {
    //count how many times true appears in an array
    //initialize a count of 0
    let count = 0;
    //go through array and check for true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            //increment count everytime a true occurs
            count += 1
        }
    }
    return count;
}

function countTrue(arr) {
	//count how many times true appears in an array
	//initialize a count of 0
 let count = 0;
	//go through array and check for true
	let total = arr.filter(word => word === true)
		//increment count everytime a true occurs
	.reduce((accumulator, currentValue) => 
	accumulator + currentValue,count);

		return total
}
