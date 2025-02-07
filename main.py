from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

@app.get("/", response_class=HTMLResponse)
async def read_index():
    return read_file("index.html")

@app.get("/history", response_class=HTMLResponse)
async def read_history():
    return read_file("history.html")

@app.get("/properties", response_class=HTMLResponse)
async def read_properties():
    return read_file("properties.html")

@app.get("/contact", response_class=HTMLResponse)
async def read_contact():
    return read_file("contact.html")

@app.get("/navbar", response_class=HTMLResponse)
async def read_navbar():
    return read_file("navbar.html")

@app.get("/footer", response_class=HTMLResponse)
async def read_footer():
    return read_file("footer.html")