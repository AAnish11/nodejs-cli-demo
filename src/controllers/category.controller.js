const errorHandler = require('../helpers/execution.helper');
const Category = require('../models/category');
const { prompt } = require('inquirer');
// Add Promt validators
const { addCategoryQuestion } = require('../command-prompts/category.prompt');

const categoryController = {
    addCategory: async() => {
        return errorHandler(async() => {
            const questionResp = await prompt(addCategoryQuestion);
            const modelData = {
                name: questionResp.name
            };
            const modalInstance = new Category(modelData);
            const resp = await modalInstance.save();
            console.log(resp.error ? resp.error : 'Category successfully added!');
        });
    },

    getCategories: async() => {
        return errorHandler(async() => {
            const resp = await Category.aggregate([{
                    $sort: {
                        _id: -1
                    }
                },
                {
                    $project: {
                        _id: 0,
                        'Category Id': "$_id",
                        'Category Name': "$name",
                    }
                }
            ]);
            console.log(resp);
        });
    },

    getCategoriesNameIds: async() => {
        return errorHandler(async() => {
            const resp = await Category.find({});
            return resp.map(eachCat => {
                return {
                    name: eachCat.name,
                    id: eachCat._id,
                }
            });
        });
    },
};
module.exports = categoryController;