import os

def print_tree(directory, prefix=""):
    # Obtener una lista de todos los elementos en el directorio
    items = [item for item in os.listdir(directory) if item != "env"]
    items.sort()
    
    for index, item in enumerate(items):
        path = os.path.join(directory, item)
        is_last = index == len(items) - 1
        
        # Definir prefijos para mostrar en formato de árbol
        connector = "└── " if is_last else "├── "
        print(prefix + connector + item)
        
        # Si es una carpeta, recorrer recursivamente
        if os.path.isdir(path):
            new_prefix = prefix + ("    " if is_last else "│   ")
            print_tree(path, new_prefix)

if __name__ == "__main__":
    print("Estructura del proyecto:")
    print_tree(os.getcwd())