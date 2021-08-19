// Add Promt validators
const { emptyValidator, shouldBeNumber } = require('../helpers/promt-validation.helper');
const addProductQuestion = [{
        type: 'input',
        name: 'name',
        message: 'Provide Product Name:',
        validate: emptyValidator
    },
    {
        type: 'input',
        name: 'price',
        message: 'Provide Product Price (Only Number):',
        validate: shouldBeNumber
    },
    {
        type: 'input',
        name: 'unit',
        message: 'Provide Product Unit (Only Number):',
        validate: shouldBeNumber
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide Product Description:',
        validate: emptyValidator
    }
];

module.exports = {
    addProductQuestion,
}