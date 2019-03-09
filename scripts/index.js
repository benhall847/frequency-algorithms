
// this takes 2 arrays and compares the frequencies
function freqDigits(a,b){

// this will be a histogram -
// key represents each number that exists in the first array
// the value of each key represents how many times they are NOT of the same frequency.
    let myHistogram = {};

    // for each value in array a
    a.forEach(function (num){
        // if a key representing 'num' in myHistogram exists
        if (myHistogram[num]){
            // add 1 to the value of the key in myHistogram
            myHistogram[num] += 1;
        }else{
            // else, create a key representing 'num' with the initial value of 1
            myHistogram[num] = 1;
        };
    });
    // for each value in array b
    b.forEach(function (num){
        // if a key representing 'num' in myHistogram exists
        if (myHistogram[num]){
            // subtract 1 from the value of that key.
            myHistogram[num] -= 1;

            // else the length of (a != b) therefore the result is false.
        }else{
            return false;
        };
    });
    // return the histogram.
    // example - if the value of each key in the histogram == 0
    // then frequency is the same.
    // if a value(x) of a key in the histogram != 0
    // than that key ocurred absolute(x) times more frequently
    return myHistogram;
};


// this function checks if the value of each key is equal to 0
function freqChecker(a, b, myFunc){
    // first it we will call a function to create a histogram result object
    // the result will be true unless a key value !== 0;
    let results = myFunc(a,b), result = true;

    // for each key in results
    Object.keys(results).forEach(function (key){

        // if the key value !== 0, the result is false.
        if (results[key] !== 0){
            result = false;
        };
    });
    return result;
};

// console.log(freqChecker([1,2,3,4], [1,2,3,4], freqDigits))
// console.log(freqChecker([1,2,3,4], [1,4,5,6], freqDigits))
// console.log(freqChecker([1,2,3,4],[1,4,4,2], freqDigits))

function secondPowerChecker(a,b){
    let myHistogram = {};
    // we create a key based on the second array, which is already to the power of 2.
    b.forEach(function (num){
        if (myHistogram[num]){
            myHistogram[num] += 1;
        }else{
            myHistogram[num] = 1;
        }
    })
    // then we compare the frequency each number in the first array, to the power of two.
    a.forEach(function (num){
        if (myHistogram[num ** 2]){
            myHistogram[num ** 2] -= 1;
        }else{
            return false;
        };
    });
    return myHistogram;
};

// console.log(freqChecker([1,2,3,4], [1,4,9,16],secondPowerChecker))
// console.log(freqChecker([1,2,3,4], [1,4,5,6], secondPowerChecker))


// this function takes two strings, and converts them into two arrays, assuming they are of the same length.
function stringConverter(a,b){
    // first we initialize an array of 2 arrays.
    let mylists = [[],[]];
    // for the index of each character in the first string.
    for (let i = 0; i < String(a).length; i++){
        // push each character of 'a' to the first array
        mylists[0].push(String(a)[i]);
        // push each character of 'b' to the second array
        mylists[1].push(String(b)[i]);
    };
    // return both arrays, as an array.
    return mylists;
}

// this function counts how many characters are different
function difFreqChecker(a, b){

    // we create a result object of comparing a to b, and initialize our count at 0
    let results = freqDigits(a,b), result = 0;

    // for each key in our results
    Object.keys(results).forEach(function (key){

        // if the value of each key !== 0
        if (results[key] !== 0){

            // add the value of that key (which represents how many did not repeat) 
            // to our result counter
            result += results[key];
        }
    });

    // return our result counter
    return result;
};

// for checking Anagram how many letters are different.
function howManyDifferent(a){

    // if the string length % 2 == 0
    if (a.length % 2 !== 0){

        // -1 representing that solution is not possible.
        return -1;
    }

    // create a new string of the first half of the given string
    let astring = a.substring(0, a.length / 2);

    // and a new string for the second half of the given string
    let bstring = a.substring((a.length / 2), a.length);

    // return the result of calling 2 helper functions
    // with our 2 new strings as helper arguements
    return stringChecker(astring, bstring, difFreqChecker);
}


// this function checks if the first string or integers has the same frequency as
// the second string or integers.
function stringChecker(a,b, myFunc){
    // we initialize our results
    let results;
    // if the length of b !== the length of a
    if (String(b).length !== String(a).length){
        // we know the answer is false
        return false;
    } else{
        // we convert our strings/integers to arrays.
        // stringConverter- returns 2 arrays within an array.
        results = stringConverter(a,b);
        // we then compare the frequency of our two arrays
        return myFunc(results[0],results[1]);
    };
    
};

// console.log(stringChecker(1243, 1323, freqChecker));

// console.log(stringChecker("pie", "eip", freqChecker));


// console.log(howManyDifferent("xyyx"));
