const { error } = require('console');
const fs = require('fs');

// CREATE a file
// Blocking
fs.writeFileSync('./text.txt', 'Hey there');

// Non Blocking
fs.writeFile('./text2.txt', 'Hey there', (err) => {
    console.log('error: ', err)
});


// READ a file
const result = fs.readFileSync('./text.txt', 'utf-8');
// console.log('ReadFileSync output: ', result);

fs.readFile('./text2.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('ReadFile output: ', result);
    }
})

// APPEND file
fs.appendFileSync('./text.txt', `${Date.now()} Hey There \n`);


// COPY file
fs.cpSync('text.txt', './copy.txt');
fs.cpSync('text.txt', './copy2.txt');

// DELETE file
fs.unlinkSync('./copy2.txt')

// check the file STATUS
console.log(fs.statSync('./text.txt'));

// create a DIR
fs.mkdirSync('my-docs');
fs.mkdirSync('my-docs/a/b', { recursive: true });
