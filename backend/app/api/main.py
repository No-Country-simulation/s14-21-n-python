from fastapi import APIRouter
router = APIRouter()

@router.get("/") 
async def main_route():     
  return {"message": "Hey, It is me Fastapi"}