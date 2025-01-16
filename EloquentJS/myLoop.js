
function myLoop(value, test, update, body) {

    while (test(value)) {
        body(value);
        value = update(value);
    }

}



myLoop(3, n => n > 0, n => n - 1, console.log);


let array = [1,2,3,4,5,6];

myLoop (10, n => n >= 0, n => n-2, console.log);