from typing import List
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

class TextRequest(BaseModel):
    text: str

class TextResponse(BaseModel):
    result: List[str]

"""
POST /predict HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
    "text": "The quick brown fox jumps over the lazy dog."
}

HTTP/1.1 200 OK
content-type: application/json

{
    "result": [
        "The quick brown fox jumps over the lazy dog. The end."
    ]
}
"""

@app.post("/predict", response_model=TextResponse)
def predict(text_request: TextRequest):
    # Инициализируем pipeline для модели
    model_pipeline = pipeline('text-generation', model='facebook/opt-350m')
    # Генерируем текст на основе входного запроса
    generated_text = model_pipeline(text_request.text, max_length=50, do_sample=True)
    # Возвращаем результат
    return TextResponse(result=[generated_text[0]['generated_text']])


