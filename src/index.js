exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let min = array.length ? array[0] : 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }


        return min;
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let max = array.length ? array[0] : 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }


        return max;
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {

        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        var avg = total / array.length;
        return avg;
    }
}