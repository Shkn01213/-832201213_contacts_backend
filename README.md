# Contacts Management API

This is a simple RESTful API built with Node.js and Express for managing a list of contacts. It uses MySQL as the database to store contact information, including fields such as name, phone number, email, and favorite status.

## Features

- Add a new contact
- Retrieve all contacts
- Delete a contact
- Update contact details
- Toggle the favorite status of a contact

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MySQL](https://www.mysql.com/) (version 5.7 or higher)
- [npm](https://www.npmjs.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
npm install body-parser cor jsdom mysql mysql2 sequelize
```
### 3. Set up MySQL Database

1. Create a new MySQL database called `ContactsDB`.
2. Create a `contacts` table with the following schema:

   ```sql
   CREATE TABLE contacts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       phone_number VARCHAR(15),
       email VARCHAR(255),
       is_favorite BOOLEAN DEFAULT FALSE
   );
```

3. **Update Database Configuration**

   Update the database configuration in `server.js` if necessary (e.g., MySQL user, password).

4. **Run the Server**

   Start the server using the following command:

   ```bash
   node server.js
```

