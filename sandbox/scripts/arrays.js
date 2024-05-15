const numberStrings = ['one','two','three']

const numberList = numberStrings.map(function (number) {
    `<li>${number}</li>`
});
document.querySelector('#myList').innerHTML = numberList.join();

const letterGrade = ['A','B','A'];

function getGpa(grade) {
    points = 0
    if (grade === 'A') {
        points = 4;
    }
    else if (grade === 'B') {
        points = 3;
    }
    else if (grade === 'C') {
        points = 2;
    }
    else if (grade === 'D') {
        points = 1;
    } else {
        points = 0;
    }
}

const gpaPoints = letterGrade.map(getGpa)

gpaPoints((total, point) => total + point, 0) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruit = fruits.filter((fruit) => fruit.length > 6);

const numbers = [12, 34, 21, 54];
const luckNumber = 21;

numbers.indexOf(luckNumber);