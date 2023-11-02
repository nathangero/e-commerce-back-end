# E-commerce Back End

## Description

The purpose of this repo is to connect a front-end client to a MySQL database. The front-end client I used was Insomnia for quick and easy RESTful API endpoint testing. This was to practice creating a SQL database, but using it via the node package Sequelize. I used the Sequelize node package to create tables via JavaScript classes inheriting Sequelize Models, make relationships between tables, and create http requests via RESTful API endpoints. 

This was a pretty fun project to do! I've used the `mysql2` node package before and while that's good, it's no where on the same level as Sequelize in terms of robustness. I would definitely use the Sequelize package again, especially for a full-stack application.

### Database breakdown

The database schema is to emulate an e-commerce back end, which contains tables of Category, Product, and Tag. Every Product belongs to a Category, every Category has many Products, and Proucts and Tags have a many-to-many relationship through a table called ProductTag.

## Installation

**Make sure you have `node` installed in your system to use `npm`. You can download node [here](https://nodejs.org/en/download)**

You'll need some way to test API datapoints. I personally used the Insomnia app. You can download Insomnia [here](https://insomnia.rest/download)

There are three parts for this installation, downloading MySQL, cloning/downloading the code, and setting up the database, its tables, and some seed data.

### Install MySQL

1. Go to the [MySQL download page](https://dev.mysql.com/downloads/mysql/) and download the latest version for your respective system.
2. Follow the steps in this on this [page](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)
3. (Optional) Install [MySQL Workbench](https://www.mysql.com/products/workbench/)
4. Move on to cloning/downloading the code

### Clone/download the code

1. Clone/download the code from this repo.
2. Go to the directory where you downloaded the code and install the packages using the terminal command:
```js
npm i
```
3. Find and open the file `Database.js` in the code directory.
4. Go to line 17 where it says `password: PASSWORD,`. Replace the text `PASSWORD` with the password you used during the MySQL installation. This is so the code can access the database.

### Setup the database

1. In the code directory, navigate to the `db` directory. 
2. Copy all the contents from the `schema.sql` file and paste it into the MySQL Workbench or in the MySQL shell in your terminal/command prompt. This is the structure for the database.
3. (Optional) Run the following script in the terminal to setup initial data values in the database.
```bash
npm run seed
```
4. Click the lightning bolt ⚡ to run the SQL statements to setup the database.

## Usage

You'll need to create a `.env` file in the root of the directory to connect to the MySQL server. It should have the following variables:
* DB_NAME="ecommerce_db"
* DB_USER="\<your MySQL username\>"
* DB_PASSWORD="\<your MySQL password\>"

1. Start the server by running the following terminal command in the code directory:
```bash
node server.js
```
2. Once you see that the server is running, open up your API endpoint testing software.
3. You'll use this base URL endpoint: `http://localhost/3001/api` then you can choose from the following Router endpoints to put after `/api`:
- `/categories`
- `/products`
- `/tags`

4. The following are how to use the individual http requests for each Model:
    - GET requests will end in either `"/"` or `"/:id"`, where `"/:id"` is selecting a specific id in the database instead of all enteries.
    - POST requests will end in `"/"`. You'll need to create your own JSON body that matches the corresonding table schema.
    - PUT requests will end in `"/:id"`. You'll need to create your own JSON body that matches the corresonding table schema.
        - Categories only have the column `category_name` changed.
        - Products only have the column `tag_id` changed. This should be an Array of Integers
        - Tags only have the column `tag_name` changed.
    - DELETE requests will end in `"/:id"`. Just provide the id to the item in the database you want to delete.

## Walkthrough Video

https://github.com/nathangero/e-commerce-back-end/assets/25491849/0c829b19-ed36-4289-95d0-00279383d964

## Learning Points

* Sequelize takes some getting used to. I think setting the initial database schema is much easier writting out the statements, but Sequelize definitely makes other things so much more convenient like validation, references, and establishing relationships between tables.
* Once again async/await makes code more readable, and easier to work with in my opinion.
* Using a many-to-many relationship pretty useful to connect at least 2 tables together. I was surprised how simple it was to see all the relationships between the different Prodcuts and their Tags via the ProductTag table.
* Using a `.env` file is a nice easy way to keep credentials locally.

## Code Snippet

This code blew my mind when it came to establishing relationships between the Product and Tag tables. It was so easy to make a many-to-many relationship
```js
Product.belongsToMany(Tag, {
    through: ProductTag,
    onDelete: 'CASCADE'
});


Tag.belongsToMany(Product, {
    through: ProductTag,
    onDelete: 'CASCADE'
});
```

## Credits

### Resources

[Sequelize model](https://sequelize.org/docs/v6/core-concepts/model-basics/)

[Sequelize querying - basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

[Sequelize querying - finders](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)

[Sequelize validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
