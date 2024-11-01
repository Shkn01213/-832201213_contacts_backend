// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 创建 MySQL 数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ContactsDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL Database');
});

// 添加联系人
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

// 获取联系人列表
app.get('/api/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.query(query, (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.json(results);
      }
  });
});

// 删除联系人
app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM contacts WHERE id = ?';
  db.query(query, [id], (err, result) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send({ message: 'Contact deleted' });
      }
  });
});

// 更新联系人
app.put('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const { name, phone_number, email, is_favorite } = req.body;
  const query = 'UPDATE contacts SET name = ?, phone_number = ?, email = ?, is_favorite = ? WHERE id = ?';
  db.query(query, [name, phone_number, email, is_favorite, id], (err, result) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send({ message: 'Contact updated' });
      }
  });
});

// 收藏联系人
app.post('/api/contacts/:id/favorite', (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE Contacts SET is_favorite = NOT is_favorite WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
      if (err) throw err;
      res.status(200).send('Favorite status updated successfully');
  });
});

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
