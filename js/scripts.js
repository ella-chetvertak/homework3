let num = 0;
let string = ''
let nameof = prompt('Enter your name', '')
while (num < 4) {
    if (num === 2) {
        string += `Happy birthday, dear ${nameof}\n`;
    } else {
        string += 'Happy birthday to you\n';
    }
    num++
}
console.log(string);
let it_number = prompt('Enter your number of iterations', '');
let output = '';
for (let i = 0; i < it_number; i++) {
    output += '.#';
}
console.log(output);
let sum = 0;
let it_num = prompt('Enter the number', '')
while (isNaN(it_num)) {
    it_num = prompt('Invalid. You should enter a number', '');
} 
for (let i = 0; i < it_num; i+=2) {
    sum+=i
}
console.log(`The sum of odd numbers before ${it_num} is ${sum}`);
for (let i = 0;;) {
    i++;
    let rndm = Math.random();
    if (rndm > 0.7) {
        console.log(`Loop was finished because of: ${rndm}`);
        console.log(`Number of iterations: ${i}`);
        break;
    }
}
for (let i = 0; i<51; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Div by 5 and 3')
    } else if (i % 5 == 0) {
        console.log('Div by 5')
    } else if (i % 3 == 0) {
        console.log('Div by 3')
    } else {
        console.log(i)
    }
}
let today = new Date();
let dd = String(today.getDate());
let time = String(today.getTime()); 
console.log(today);
