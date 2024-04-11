const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const { Op } = require('sequelize');

const app = express();

// 创建 Sequelize 实例
const sequelize = new Sequelize('railway', 'postgres', 'DpIXwQjiOwpcLlpgyofHZZvhzlAjbMRD', {
  dialect: 'postgres',
  host: 'monorail.proxy.rlwy.net',
  port: 22660,
  logging: false
});

// 定义用户模型
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  result_time: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'users_2',
  timestamps: false
});

// 创建表
sequelize.sync();

// 定义路由
app.post('/time', async (req, res) => {
  try {
    const newUser = await User.create();
    res.json(newUser);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
