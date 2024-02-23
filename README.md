# Project Portfolio: E-Commerce App Backend

#### This project is a backend implementation for an e-commerce application. It's built with Node.js and uses PostgreSQL for the database. The backend provides a robust API for managing users, products, and orders.

### Features

<b>User Management:</b> The application supports user registration and authentication. Users can sign up with their
email and password, and user data is stored securely in the database.

<b>Product Catalog:</b> The backend provides endpoints for managing a product catalog. This includes adding new products,
updating existing products, and deleting products.

<b>Order Processing:</b> Users can place orders for products, and the backend handles order processing. This includes
updating the inventory of products when an order is placed.

<b>API Documentation:</b> The API is fully documented using Swagger. This provides a clear overview of the available
endpoints and how to use them.

### Technologies Used

<b>Node.js:</b> The backend is built with Node.js, a JavaScript runtime that allows for efficient and scalable server-side applications.

<b>Express.js:</b> Express.js is used as the web server framework. It simplifies the process of writing server-side code by providing a robust set of features for building single, multi-page, and hybrid web applications.

<b>PostgreSQL:</b> PostgreSQL is used as the database for this application. It's a powerful, open-source object-relational
database system that uses and extends the SQL language.

<b>Swagger:</b> Swagger is used for documenting the API. It provides a user-friendly interface for exploring and testing
the API.

### Future Improvements

<b>Payment Processing Integration:</b> In the future, we plan to integrate a payment processing system to handle
transactions.

<b>Expanded Product Features:</b> We also plan to expand the product features to include categories, ratings, and reviews.

This project showcases my ability to build a robust and secure backend for a complex application. It demonstrates my
understanding of server-side JavaScript, database management, and API development.

## How to Download and Run the Project

Follow these steps to download and run the project:

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

<li>Node.js and npm (Node Package Manager). Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
npm is a package manager for Node.js packages, and it is installed when you install Node.js.</li>
<li>PostgreSQL. PostgreSQL is a powerful, open-source object-relational database system.</li> <br/>

<b>Step 1:</b> Clone the Repository
First, you'll need to clone the repository. Open your terminal and run the following command:

`git clone https://github.com/yourusername/yourrepository.git`

Replace yourusername/yourrepository.git with the actual username and repository name.

<b>Step 2:</b> Install Dependencies
Navigate into the project directory and install the necessary dependencies with npm:

`cd yourrepository`
</br>
`npm install`

Replace <i>yourrepository</i> with the actual repository name.

<b>Step 3:</b> Set Up the Database
You'll need to create a PostgreSQL database for the application. The steps to do this will depend on your PostgreSQL
installation.

Once you've created the database, update the database configuration in the project. This is typically found in a config
directory or a .env file. You'll need to set the database name, username, and password.

<b>Step 4:</b> Run the Application
You're now ready to run the application. Start the server with the following command:

`npm start`

The application should now be running at `http://localhost:5000`(or whatever port you've configured).

<b>Step 5:</b> Access the API Documentation
You can access the Swagger API documentation at `http://localhost:5000/api-docs`.

That's it! You've now downloaded and are running the project. Enjoy exploring the API and the codebase.

### Setting up a PostgreSQL

#### Step 1: Install PostgreSQL

First, you need to install PostgreSQL. The installation process varies depending on your operating system. You can download PostgreSQL from the official website: https://www.postgresql.org/download/

#### Step 2: Create a New Database

After installing PostgreSQL, you can create a new database. Open the PostgreSQL command line interface (psql) and run
the following command:

`CREATE DATABASE your_database_name;`

Replace your_database_name with the name you want to give to your database.

#### Step 3: Create a Database User

Next, create a new user and give them a password:

`CREATE USER your_user_name WITH ENCRYPTED PASSWORD 'your_password';`

Replace your_user_name and 'your_password' with your desired username and password.

#### Step 4: Grant Privileges

Grant the necessary privileges to your new user:

`GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_user_name;`

Replace your_database_name and your_user_name with your actual database name and username.

#### Step 5: Connect to the Database

You can now connect to your new database with the following command:

`\c your_database_name`

Replace your_database_name with your actual database name.

#### Step 6: Configure Your Application

Finally, update your application's database configuration with your new database name, username, and password. This is typically done in a config file or a .env file in your project.

Please note that these instructions are quite general. Depending on your specific setup and requirements, you might need to perform additional configuration. Always refer to the official PostgreSQL documentation for the most accurate and detailed information.
