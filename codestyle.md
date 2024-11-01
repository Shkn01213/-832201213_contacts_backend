# Code Style Guide

This code style guide outlines the conventions followed in the `server.js` file, written for a Node.js and Express backend. Consistent use of this guide improves readability, maintainability, and collaboration.

## General Guidelines

- **File Naming**: Use lowercase for filenames, separated by hyphens (e.g., `server.js`).
- **Indentation**: Use 4 spaces for indentation to enhance readability.
- **Semicolons**: Always use semicolons to terminate statements.
- **Variable Declarations**: Use `const` for variables that are not reassigned and `let` for those that are.
- **Error Handling**: Ensure comprehensive error handling for database queries and responses.

## Project Structure

The server code follows a flat structure. Business logic and routes are combined in `server.js`. Future enhancements may include separating routes, controllers, and database configuration into different files for modularity.

## Specific Code Conventions

### 1. Variable Naming

- **Database and Request Variables**: Use `camelCase` for variable names, e.g., `db`, `app`, `query`.
- **Constants**: Use `UPPERCASE` for constants (e.g., `PORT`).

### 2. Route Handlers

Each route follows the RESTful convention and has a clear structure:

1. Route path and HTTP method (`app.get`, `app.post`, etc.)
2. Parameter and body extraction using destructuring (e.g., `const { id } = req.params`)
3. SQL query string and database operation
4. Error handling and response

**Example of a Route Handler**:
```javascript
app.post('/api/contacts', (req, res) => {
  const { name, phone_number, email, is_favorite } = req.body;
  const query = 'INSERT INTO contacts (name, phone_number, email, is_favorite) VALUES (?, ?, ?, ?)';
  db.query(query, [name, phone_number, email, is_favorite || false], (err, result) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send({ message: 'Contact added', id: result.insertId });
      }
  });
});
