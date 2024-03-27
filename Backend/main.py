from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String, TIMESTAMP, Sequence
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime

# 创建 FastAPI 应用
app = FastAPI()

# 创建引擎和会话
engine = create_engine("postgresql://postgres:20030629@localhost/IM_Island")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 创建基类
Base = declarative_base()

# 用户模型
class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    resul = Column(String(50), nullable=False)
    result_time = Column(TIMESTAMP, server_default="NOW()")

# 创建表
Base.metadata.create_all(bind=engine)

# 创建新用户时分配用户ID
def create_user(db: Session, resul: str):
    new_user = User(resul=resul)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# 路由示例
@app.post("/users/")
async def create_user_api(resul: str, db: Session = Depends(SessionLocal)):
    return create_user(db, resul)

@app.post("/click")
async def click(user_id: int, db: Session = Depends(SessionLocal)):
    current_time = datetime.now()
    db.execute(users.insert().values(user_id=user_id, result_time=current_time))
    db.commit()
    return {"message": "Click recorded successfully!"}

@app.post("/answer")
async def answer(user_id: int, opt: str, page: str, db: Session = Depends(SessionLocal)):
    ans = 'green_tea'
    db.execute(users.insert().values(user_id=user_id, resul=ans))
    db.commit()
    return {"message": "Answer recorded successfully!"}
