import glob
from app import app
from pyloid.rpc import PyloidRPC

rpc = PyloidRPC()

store = app.store("../data/store.json")

BASE_PATH_STORAGE = store.get("BASE_PATH_STORAGE") if store.get("BASE_PATH_STORAGE") else "."

@rpc.method()
async def file_list():
    return glob.glob(f"{BASE_PATH_STORAGE}/**/**.*", recursive=True)
