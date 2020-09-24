//Given a list (array) find the second largest number

let largest;
let second;

const secondLargest = (list) => {
    for (let i = 0; i <= list.length; i++) {
        if (i === 0) {
            largest = list[0];

        } if (list[1] > largest) {
            largest = list[1];
            second = list[0];

        }
        if(list[i] > largest) {
            second = largest;
            largest = list[i];
        }
        if(list[i] > second && list[i] < largest) {
            second = list[i];
        }

    }
    return second;
}