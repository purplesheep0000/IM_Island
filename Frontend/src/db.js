// db.js

import Dexie from 'dexie';

// 初始化 Dexie 資料庫
const db = new Dexie("TimestampDB");

// 定義資料庫結構
db.version(1).stores({
    timestamps: 'timestamp'
});

// 開啟資料庫
db.open().catch(function(error) {
    console.error('無法開啟資料庫：', error);
});

// 導出 db 物件
export default db;
