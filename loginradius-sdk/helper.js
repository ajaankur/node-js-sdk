//Check null or undefined parameter
function checkNullOrUndefined(input) {
    return (input === null || typeof(input) === 'undefined') ? '' : input;
};

//Check value for null support
function checkNullSupport(input) {
    return (input === true );
};

//Get Error response
function checkError(input) {
    return input && input.ErrorCode;
};

//Get Server Time


//Calculate SOTT.
function getSott(callback, config, startDate, endDate, timeDifference) {
    var cipher = require('./sdk/sott')(config, startDate, endDate, timeDifference);
    cipher.then(
        function(sott) {
            return callback(sott);
        },
        function(reason) {
            console.log(reason);
        })
}

module.exports = {
    checkNullOrUndefined: checkNullOrUndefined,
    checkError: checkError,
    getSott: getSott,
    checkNullSupport: checkNullSupport
}