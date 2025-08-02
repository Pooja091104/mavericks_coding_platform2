#!/usr/bin/env python3
"""
Simple test to start the server
"""

import uvicorn
import sys
import os

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    print("Starting server...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, log_level="info")
except Exception as e:
    print(f"Error starting server: {e}")
    import traceback
    traceback.print_exc() 