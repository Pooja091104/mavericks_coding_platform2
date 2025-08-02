#!/usr/bin/env python3
"""
Test script to verify Gemini API key
"""

import os
import google.generativeai as genai
from dotenv import load_dotenv

def test_api_key():
    # Load environment variables
    load_dotenv()
    
    # Get API key
    api_key = os.getenv("GEMINI_API_KEY")
    print(f"API Key loaded: {api_key[:10]}..." if api_key else "No API key found")
    
    if not api_key:
        print("❌ Error: No API key found in .env file")
        return False
    
    try:
        # Configure Gemini
        genai.configure(api_key=api_key)
        
        # Test with a simple prompt
        model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
        response = model.generate_content("Say 'Hello World'")
        
        print("✅ API Key is valid!")
        print(f"Response: {response.text}")
        return True
        
    except Exception as e:
        print(f"❌ API Key test failed: {e}")
        return False

if __name__ == "__main__":
    test_api_key() 