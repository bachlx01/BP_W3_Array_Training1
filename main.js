function excercise1 (){
    let myArray = new Array (10);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Math.round(Math.random()*98);
    }
    let count = 0;
    for (let x in myArray){
        if (myArray[x]>=10)
            count +=1;
    }
    alert('There are '+ count + 'number great more than 10');
}

function excercise2 () {
    let myArray = new Array (10);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Math.round(Math.random()*98);
    }
    let max = myArray[0];
    for (let x=0; x < myArray.length;x++){
        if (myArray[x] > max) {
            max = myArray[x];
        }
    }
    alert(max + ' index: ' + myArray.indexOf(max));
    console.log(myArray);
}

function excercise3 () {
    let myArray = new Array (10);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Math.round(Math.random()*98);
    }
    let max = myArray[0];
    let sum = 0;
    for (let x=0; x < myArray.length;x++){
        if (myArray[x] > max) {
            max = myArray[x];
        }
        sum += myArray[x];
    }
    alert('Maximum is ' + max + ' Average is: ' + sum/myArray.length);
}

function excercise4 () {
    let myArray = new Array(5);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = prompt('Enter a number: ');
    }
    alert(myArray.reverse());
}

function excercise5 () {
    let myArray = new Array(5);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = prompt('Enter a number: ');
    }
    let count = 0;
    for (let x in myArray){
        if (myArray[x] < 0)
            count+=1;
    }
    alert(count);
}

function excercise6 () {
    let myArray = new Array(5);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = prompt('Enter a number: ');
    }
    let number = prompt('Enter a number: ');
    let confirm = false;
    for (let x in myArray){
        if (myArray[x] == number){
            confirm = true;
            break;
        }
    }
    if (confirm == true){
        alert( number + ' is in the array');
    } else
        alert(number + ' is not in the array');
}

function excercise7 () {
    let myArray = new Array(5);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = prompt('Enter a number: ');
    }
    let number = prompt('Enter a number to check: ');
    for (let x =0; x < myArray.length; x++){
        if (myArray[x] == number){
            myArray.splice(x,1);
            break;
        }
    }
    alert(myArray);
}

function excercise8 () {
    let myArray = new Array (10);
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Math.round(Math.random()*98);
    }
    alert(myArray.sort(function (a,b){return b-a}));
}

function excercise9 () {
    let a = new Array (10);
    for (let i = 0; i < a.length; i++) {
        a[i] = Math.round(Math.random()*98);
    }
    let b = new Array (10);
    for (let i = 0; i < b.length; i++) {
        b[i] = Math.round(Math.random()*98);
    }
    let c = a.concat(b);
    alert(c);
}