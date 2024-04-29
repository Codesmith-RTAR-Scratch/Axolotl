/* eslint-disable no-console */
require('dotenv').config();

const db = {};

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.dbUser,
  host: 'lallah.db.elephantsql.com',
  database: process.env.dbUser,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.getTableRows = async () => {
  try {
    const client = await pool.connect();

    const result = await client.query('SELECT * FROM Receipts');

    console.log(result.rows);

    client.release();
  } catch (err) {
    console.error('Error executing getTableRow query', err.stack);
  }
};

db.insertData = async () => {
  try {
    const client = await pool.connect();

    const itemCost = 5;
    const foodItem = 'Congee';
    const itemQuantity = 1;

    const result = await client.query(
      'INSERT INTO Receipts (itemCost, foodItem, itemQuantity, receiptID) VALUES ($1, $2, $3, uuid_generate_v4())',
      [itemCost, foodItem, itemQuantity]
    );

    client.release();
  } catch (err) {
    console.log('Error executing insertData query', err.stack);
  }
};

db.getTableRows();

module.exports = db;
