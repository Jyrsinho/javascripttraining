
function myLoop(value, test, update, body) {

    while (test(value)) {
        body(value);
        value = update(value);
    }

}



myLoop(3, n => n > 0, n => n - 1, console.log);


