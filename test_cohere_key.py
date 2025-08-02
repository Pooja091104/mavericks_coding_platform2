#!/usr/bin/env python3
"""
Test script to verify Cohere API key
"""

import os
import cohere
from dotenv import load_dotenv

def test_cohere_key():
    # Load environment variables
    load_dotenv()
    
    # Get API key
    api_key = os.getenv("COHERE_API_KEY")
    print(f"Cohere API Key loaded: {api_key[:10]}..." if api_key else "No Cohere API key found")
    
    if not api_key:
        print("❌ Error: No COHERE_API_KEY found in .env file")
        print("📝 Please:")
        print("1. Go to https://dashboard.cohere.ai/api-keys")
        print("2. Sign up for a free account")
        print("3. Create an API key")
        print("4. Add it to your .env file as: COHERE_API_KEY=your_key_here")
        return False
    
    try:
        # Configure Cohere
        client = cohere.Client(api_key)
        
        # Test with a simple prompt
        response = client.generate(
            model='command',
            prompt='Say "Hello World"',
            max_tokens=10,
            temperature=0.1
        )
        
        print("✅ Cohere API Key is valid!")
        print(f"Response: {response.generations[0].text}")
        return True
        
    except Exception as e:
        print(f"❌ Cohere API Key test failed: {e}")
        print("📝 Please check your API key at https://dashboard.cohere.ai/api-keys")
        return False

if __name__ == "__main__":
    test_cohere_key() 