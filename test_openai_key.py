#!/usr/bin/env python3
"""
Test script to verify OpenAI API key
"""

import os
import openai
from dotenv import load_dotenv

def test_api_key():
    # Load environment variables
    load_dotenv()
    
    # Get API key
    api_key = os.getenv("OPENAI_API_KEY")
    print(f"API Key loaded: {api_key[:10]}..." if api_key else "No API key found")
    
    if not api_key:
        print("❌ Error: No API key found in .env file")
        return False
    
    try:
        # Configure OpenAI
        openai.api_key = api_key
        
        # Test with a simple prompt
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": "Say 'Hello World'"}
            ],
            max_tokens=50
        )
        
        print("✅ API Key is valid!")
        print(f"Response: {response.choices[0].message.content}")
        return True
        
    except Exception as e:
        print(f"❌ API Key test failed: {e}")
        return False

if __name__ == "__main__":
    test_api_key() 