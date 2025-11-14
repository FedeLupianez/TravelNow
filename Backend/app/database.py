# En este archivo voy a simular una base de datos con una clase
import os
import json
from secrets import token_hex


def new_id():
    """genera un token hex random para usar como id único"""
    return token_hex(16)


class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self) -> None:
        # Cada archivo.json es una tabla
        base_dir = os.path.dirname(os.path.abspath(__file__))
        self.data_dir = os.path.join(base_dir, "data")
        self.tables = [
            name.lower().removesuffix(".json") for name in os.listdir(self.data_dir)
        ]
        self.data = {}
        for table in self.tables:
            file_path = os.path.join(self.data_dir, f"{table}.json")
            with open(file_path, "r", encoding="utf-8-sig") as file:
                self.data[table] = json.load(file)

    def get_all_data(self, table: str) -> dict:
        if table not in self.tables:
            raise Exception(f"La tabla {table} no existe")
        return self.data[table]

    def get_data(self, table: str, id: int) -> dict:
        if table not in self.tables:
            raise Exception(f"La tabla {table} no existe")
        str_id = str(id)
        if str_id not in self.data[table]:
            raise Exception(f"El id {id} no existe en la tabla {table}")
        return self.data[table][str_id]

    def get_by_column(self, table: str, col: str, value) -> dict:
        if table not in self.tables:
            raise Exception(f"La tabla {table} no existe")
        if type(value) is str:
            value = value.lower()

        for id in self.data[table]:
            if col not in self.data[table][id]:
                raise Exception(f"La columna {col} no existe en la tabla {table}")
            data = self.data[table][id][col]

            if type(data) is str:
                data = data.lower()

            if data == value:
                return self.data[table][id]
        return {}

    def get_new_index(self, table: str) -> int:
        new_idx = len(self.data[table])
        if new_idx in self.data[table]:
            actual_keys = self.data[table].keys()
            actual_keys = list(map(int, actual_keys))
            numbers = range(max(actual_keys) + 1)
            new_idx = set(actual_keys).difference(numbers).pop()
        return new_idx

    def add_data(self, table: str, data: dict) -> None:
        if table not in self.tables:
            raise Exception(f"La tabla {table} no existe")
        idx = str(self.get_new_index(table))
        self.data[table][idx] = data
        self.data[table][idx]["id"] = new_id()
        print(self.data[table][idx])

    def commit(self, table: str | None = None) -> None:
        if not table:
            for table in self.tables:
                file_path = os.path.join(self.data_dir, f"{table}.json")
                with open(file_path, "w", encoding="utf-8-sig") as file:
                    json.dump(self.data[table], file, indent=3)
        else:
            file_path = os.path.join(self.data_dir, f"{table}.json")
            with open(file_path, "w", encoding="utf-8-sig") as file:
                json.dump(self.data[table], file, indent=3)
