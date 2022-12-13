// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.


// function square(base, exponent){
//     return Math.floor(Math.pow(base, exponent))
// }
// console.log(square(7,9.2))


// # 답안

// ```jsx
// const n = prompt('수를 입력하세요.').split(' ');

// console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
// ```

const str = "a b c";

const arr = str.split("");

console.log(arr)