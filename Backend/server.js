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
  },
  timestamp: {
    type: DataTypes.INTEGER // 修改为整数类型
  }
}, {
  tableName: 'users_2',
  timestamps: true // 将 timestamps 设置为 true
});

// 创建表
sequelize.sync();

// 定义路由
app.post('/time', async (req, res) => {
  try {
    const currentTimeStamp = Math.floor(new Date().getTime() / 1000); // 获取当前时间的时间戳（以秒为单位）
    const newUser = await User.create({ timestamp: currentTimeStamp }); // 创建用户时设置 timestamp 字段为当前时间戳
    res.json(newUser);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
