exports.min = function min(array) {

    let min = Math.min.apply(null, array);

    if (isFinite(min)) {
        return min
    } else {
        return 0;
    }

}


exports.max = function max(array) {

    let max = Math.max.apply(null, array);

    if (isFinite(max)) {
        return max
    } else {
        return 0;
    }

}

exports.avg = function avg(array) {



    let arraySum = 0;
    if (Array.isArray(array)) {
        let sum = array.length;
        if (array.length !== 0) {
            for (i = 0; i < sum; i++) {
                arraySum += array[i];
            }
            return arraySum / sum;
        } else {
            return 0;
        }

    }
    if (!Array.isArray(array)) {
        return 0;
    }
}