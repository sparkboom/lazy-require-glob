import del from 'del';
let chalk = require('chalk');

export default ({dist}) => () => {

    console.log(chalk.yellow(`Cleaning ${dist}`));
    return del(dist, {force:true});
};
