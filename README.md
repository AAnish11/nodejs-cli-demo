# nodejs-cli-demo
A Basic CLI App, uses for adding categories and products through cli interface. 

## Setup Project
- Go to inside the root project directory
- install the project dependency by using the `npm install`.
- Make sure the `mongodb` running on the local machine.
- DB configuration can be edited inside the `/src/db.connection.js` file
- To create the symlink run the following command `npm link` inside the root directoy of the project. once symlink will created we can use this command `product-cli`

## How to use?
- Run the `product-cli` or `node index.js` to finds the available commands.
<img width="1765" alt="availanle-commands" src="https://user-images.githubusercontent.com/17794853/130077494-08e9b8d6-b854-4cf2-809b-b69cecb8e557.png">

- Run the `product-cli ac` or `node index.js ac` to add the new category.
<img width="819" alt="add-category" src="https://user-images.githubusercontent.com/17794853/130077987-1c285290-3237-4a4a-9111-fc6389c121c5.png">

### Use other commands, to peform more actions for adding or listing saved product/categories

### Examples
- Category List

<img width="1124" alt="list-product" src="https://user-images.githubusercontent.com/17794853/130078503-db9192bf-ca24-4df4-b1b3-b4ec50f5315d.png">

- Add New Product

<img width="922" alt="add-product" src="https://user-images.githubusercontent.com/17794853/130078632-24feaf0d-df46-4f27-b754-683f35aeff0e.png">


