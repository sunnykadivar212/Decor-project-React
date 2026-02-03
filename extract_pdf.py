import sys
try:
    import PyPDF2
    
    pdf_path = r'g:\React Projects\Decor-project\src\assets\Company Profile final.pdf'
    
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        print(f"Total pages: {len(reader.pages)}\n")
        print("="*80)
        
        for i, page in enumerate(reader.pages):
            print(f"\n--- Page {i+1} ---\n")
            text = page.extract_text()
            print(text)
            print("\n" + "="*80)
            
except ImportError:
    print("PyPDF2 not installed. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2"])
    print("Please run the script again.")
except Exception as e:
    print(f"Error: {e}")
