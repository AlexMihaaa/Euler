function number() {
    let maxLength = 0;
    let maxStart = 0;
    for (let n = 1; n < 1000000; n++) {
        const arr = [];
        let count = n;
        while (count != 1) {
            if (count % 2 === 0) {
                count /= 2
                arr.push(count)
            } else {
                count = (count * 3) + 1;
                arr.push(count)
            }
        }
        if (maxLength < arr.length) {
            maxLength = arr.length
            maxStart = n;
        }
    }
    console.log(maxLength, maxStart)
}
number()
