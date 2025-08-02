#!/usr/bin/env python3
"""
Startup script for the Mavericks Resume Analyzer Backend
"""

import uvicorn
import os
from dotenv import load_dotenv

def main():
    # Load environment variables
    load_dotenv()
    
    # Check if Gemini API key is set (optional for testing)
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("⚠️ Warning: GEMINI_API_KEY not found - using fallback mode")
        print("Some features may be limited. For full functionality, create a .env file with:")
        print("GEMINI_API_KEY=your_api_key_here")
    else:
        print("✅ Gemini API Key loaded successfully")
    print("🚀 Starting Mavericks Resume Analyzer Backend...")
    print("📍 Server will be available at: http://localhost:8000")
    print("📊 Health check: http://localhost:8000/health")
    print("🛑 Press Ctrl+C to stop the server")
    print("-" * 50)
    
    # Start the server
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )

if __name__ == "__main__":
    main() 