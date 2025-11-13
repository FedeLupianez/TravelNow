import os

BASE_DIR = os.path.dirname(__file__)


def get_path(file_name: str) -> str:
    for base_dir, dirs, files in os.walk(BASE_DIR):
        if file_name in files:
            return os.path.abspath(os.path.join(base_dir, file_name))
    return ""
