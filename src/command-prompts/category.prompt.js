const { emptyValidator } = require('../helpers/promt-validation.helper');
const addCategoryQuestion = [{
    type: 'input',
    name: 'name',
    require: true,
    message: 'Provide Category Name:',
    validate: emptyValidator
}];
module.exports = {
    addCategoryQuestion,
};