# En este archivo voy a simular una base de datos con una clase
import os
import json


class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self) -> None:
        # Cada archivo.json es una tabla
        self.tables = [
            name.lower().removesuffix(".json") for name in os.listdir("./Data")
        ]
        print(self.tables)
        self.data = {}
        for table in self.tables:
            with open(f"./Data/{table}.json", "r", encoding="utf-8") as file:
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

    def get_new_id(self, table: str) -> int:
        new_id = len(self.data[table])
        if new_id in self.data[table]:
            actual_keys = self.data[table].keys()
            actual_keys = list(map(int, actual_keys))
            numbers = range(max(actual_keys) + 1)
            print(actual_keys, numbers)
            new_id = set(actual_keys).difference(numbers).pop()
        return new_id

    def add_data(self, table: str, data: dict) -> None:
        if table not in self.tables:
            raise Exception(f"La tabla {table} no existe")
        id = str(self.get_new_id(table))
        self.data[table][id] = data
        print(self.data[table])
        print(self.data[table][id])

    def commit(self, table: str | None = None) -> None:
        if not table:
            for table in self.tables:
                with open(f"./Data/{table}.json", "w", encoding="utf-8") as file:
                    json.dump(self.data[table], file, indent=3)
        else:
            with open(f"./Data/{table}.json", "w", encoding="utf-8") as file:
                json.dump(self.data[table], file, indent=3)
