function sevenBoom(arr) {
    // look for a # that contains the # 7 (47, 7, 17)
    //turn to string and check for a 7
    let foundSeven = arr.toString().includes(7);
    console.log(foundSeven)
    //return boom if 7 found
    if (foundSeven === true) {
        return "Boom!"

    } else {
        //return 'there is no 7 in the array' if no 7 

        return "there is no 7 in the array"
    }
}