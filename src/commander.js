const program = require('commander');
const mongoose = require('mongoose');
// Add Product Controller
const productController = require('./controllers/product.controller');

// Add Category Controller
const categoryController = require('./controllers/category.controller');

// close the db connection after command execution
const closeDbConnection = () => mongoose.connection.close();

/**
 * Program commands
 * Perform commands for products schema
 *  - Add Product
 *  - List Products
 *  - Delete Products
 */
// Add New Product
program
    .command('add-product')
    .alias('ap')
    .description('Add New Products')
    .action(async() => {
        await productController.addNewProduct();
        closeDbConnection();

    });
// List Saved Products
program
    .command('products')
    .alias('p')
    .description('List all saved products')
    .action(async() => {
        await productController.getProducts();
        closeDbConnection();
    });

/**
 * Categories commands
 * Perform commands for categories schema
 *  - Add Category
 *  - List Category
 *  - Delete Category
 */
program
    .command('add-category')
    .alias('ac')
    .description('Add New Cateogry')
    .action(async() => {
        await categoryController.addCategory();
        closeDbConnection();
    });
program
    .command('categories')
    .alias('c')
    .description('List Saved Cateogries')
    .action(async() => {
        await categoryController.getCategories();
        closeDbConnection();
    });
// parse command argument
program.parse(process.argv);