#!/usr/bin/env python3
"""
Test script to verify Gemini API key
"""

import os
import google.generativeai as genai
from dotenv import load_dotenv

def test_gemini_key():
    # Load environment variables
    load_dotenv()
    
    # Get API key
    api_key = os.getenv("GEMINI_API_KEY")
    print(f"Gemini API Key loaded: {api_key[:10]}..." if api_key else "No Gemini API key found")
    
    if not api_key:
        print("❌ Error: No GEMINI_API_KEY found in .env file")
        print("📝 Please:")
        print("1. Go to https://makersuite.google.com/app/apikey")
        print("2. Sign in with your Google account")
        print("3. Create an API key")
        print("4. Add it to your .env file as: GEMINI_API_KEY=your_key_here")
        return False
    
    try:
        # Configure Gemini
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-pro')
        
        # Test with a simple prompt
        response = model.generate_content("Say 'Hello World'")
        
        print("✅ Gemini API Key is valid!")
        print(f"Response: {response.text}")
        return True
        
    except Exception as e:
        print(f"❌ Gemini API Key test failed: {e}")
        print("📝 Please check your API key at https://makersuite.google.com/app/apikey")
        return False

if __name__ == "__main__":
    test_gemini_key() 