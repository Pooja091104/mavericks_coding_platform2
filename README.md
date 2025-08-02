# Mavericks Resume Analyzer Backend

This backend service uses FastAPI and Google's Gemini AI to extract technical skills from uploaded resumes.

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Set up Environment Variables
Create a `.env` file in the `mavericks-backend` directory:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

To get a Gemini API key:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env` file

### 3. Start the Server
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The server will start on `http://localhost:8000`

### 4. Test the API
- Health check: `GET http://localhost:8000/health`
- Resume analysis: `POST http://localhost:8000/analyze_resume`

## Features

- **PDF Support**: Extracts text from PDF resumes
- **TXT Support**: Processes plain text resumes
- **AI-Powered**: Uses Gemini AI for intelligent skill extraction
- **Multiple File Types**: Handles both PDF and TXT formats
- **Detailed Response**: Returns skills, file info, and processing stats

## API Endpoints

### POST /analyze_resume
Upload a resume file to extract skills.

**Request:**
- Content-Type: multipart/form-data
- Body: file (PDF or TXT)

**Response:**
```json
{
  "skills": ["Python", "React", "Docker", "AWS"],
  "filename": "resume.pdf",
  "text_length": 1500,
  "skills_count": 4
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "service": "resume-analyzer"
}
```

## Error Handling

The API provides detailed error messages for:
- Invalid file formats
- PDF parsing errors
- AI processing failures
- Network issues

## Dependencies

- FastAPI: Web framework
- Uvicorn: ASGI server
- PyPDF2: PDF text extraction
- Google Generative AI: AI skill extraction
- Python-dotenv: Environment variable management 