const Product = require('../models/products');
const errorHandler = require('../helpers/execution.helper');
const { prompt } = require('inquirer');
const categoryController = require('./category.controller');
const { addProductQuestion } = require('../command-prompts/product.prompt');
const productController = {
    addNewProduct: async() => {
        return errorHandler(async() => {
            // Fetch existing categories
            const savedCategories = await categoryController.getCategoriesNameIds();
            if (savedCategories.length === 0) {
                console.log('No Category added!, please add category first!');
                return;
            }
            // Add category selection in prompt
            addProductQuestion.push({
                type: 'list',
                name: 'category',
                message: 'Select Category',
                choices: savedCategories,
            });
            let questionResp = await prompt(addProductQuestion);
            questionResp.categoryId = savedCategories.find(cat => cat.name == questionResp.category).id;
            delete questionResp.category;

            // Add new product in DB
            const modalInstance = new Product(questionResp);
            const resp = await modalInstance.save();
            console.log(resp.error ? resp.error : 'Product successfully addd!');
        });
    },
    getProducts: async() => {
        return errorHandler(async() => {
            const resp = await Product.aggregate([{
                    $lookup: {
                        from: 'categories',
                        localField: 'categoryId',
                        foreignField: '_id',
                        as: 'categoryData'
                    },
                },
                {
                    $unwind: "$categoryData"
                },
                {
                    $sort: {
                        _id: -1
                    }
                },
                {
                    $project: {
                        '_id': 0,
                        'Product Id': "$_id",
                        'Product Name': "$name",
                        'Product Price': "$price",
                        'Product Unit': "$unit",
                        'Product Description': "$description",
                        'Category Name': "$categoryData.name",
                    }
                }
            ]);
            console.log(resp);
        });
    },
};
module.exports = productController;