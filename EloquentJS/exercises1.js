// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function printTriangle () {
    let printable ='';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i; j++) {
            printable = printable + '#';
        }
        console.log(printable)
        printable = '';
    }
}

//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
// print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz() {
    count = 0;
    printable = '';

    while (count <= 100) {
        if (count % 3 === 0) {
            printable = printable + "Fizz";
        } if (count % 5 === 0) {
            printable = printable + "Buzz";
        }
        if (printable !== "") {
            console.log(printable);
        } else {
            console.log(count);
        }
        count++;
        printable = '';

    }
}


function printChessBoard(size) {

    white = " "
    black = "#"
    printable = '';

    for (let i = 0; i <size ; i++) {
        for (let j = 0; j <size ; j++) {
            if (j % 2  === 0 && i % 2 === 0 || j % 2 === 1 && i % 2 === 1) {
                printable = printable + white;
            }else {
                printable = printable + black
            }
        }
        console.log(printable);
        printable = '';
    }

}

printChessBoard(4);