//Check value is array or not

var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
    };
