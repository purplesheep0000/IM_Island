from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String, TIMESTAMP, Sequence
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime

# 创建 FastAPI 应用
app = FastAPI()

# 创建引擎和会话
engine = create_engine("postgresql://postgres:DpIXwQjiOwpcLlpgyofHZZvhzlAjbMRD@monorail.proxy.rlwy.net:22660/railway")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 创建基类
Base = declarative_base()

# 用户模型
class User(Base):
    __tablename__ = "users_2"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # 添加 autoincrement=True
    result_time = Column(TIMESTAMP, server_default="NOW()")

# 创建表
Base.metadata.create_all(bind=engine)

# 定义获取数据库会话的函数
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 定义路由
@app.post("/time")
async def time(db: Session = Depends(get_db)):
    new_user = User(result_time=datetime.now())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user