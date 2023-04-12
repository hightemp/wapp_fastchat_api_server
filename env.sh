python3 -m venv env

source env/bin/activate

# Install FastChat
pip3 install fschat

# Install the latest main branch of huggingface/transformers
pip3 install git+https://github.com/huggingface/transformers

pip3 install fastapi

pip3 install uvicorn