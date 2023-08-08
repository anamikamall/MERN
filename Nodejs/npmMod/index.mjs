import chalk from 'chalk';
import validator from 'validator';
// const validator = require('validator');

console.log(chalk.blue.italic('Hello world!'));
console.log(chalk.blue.underline.inverse('Hello world 2'));
console.log(chalk.green.underline.inverse('Success'));
console.log(chalk.red.underline.inverse('Fail'));

const res = validator.isEmail('anamika@gmail.com');
// console.log(res);
console.log(res ? chalk.green.underline.inverse(res) : chalk.red.underline.inverse(res));