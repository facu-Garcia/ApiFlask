import os

def mostrar_estructura_directorio(ruta, nivel=0, excluir_directorios=None):
    if excluir_directorios is None:
        excluir_directorios = ['env', '.git']

    # Obtiene la lista de archivos y directorios en la ruta especificada
    contenido = os.listdir(ruta)
    # Ordena alfabéticamente el contenido
    contenido.sort()
    
    for item in contenido:
        # Construye la ruta completa del ítem
        ruta_completa = os.path.join(ruta, item)
        # Indenta según el nivel de profundidad
        indentacion = '    ' * nivel
        
        # Si es un directorio y debe ser excluido
        if os.path.isdir(ruta_completa) and item not in excluir_directorios:
            # Si es un directorio, imprime su nombre
            print(f"{indentacion}├── {item}/")
            # Llama recursivamente a la función para mostrar el contenido del directorio
            mostrar_estructura_directorio(ruta_completa, nivel + 1, excluir_directorios)
        elif not os.path.isdir(ruta_completa):
            # Si es un archivo, simplemente imprime su nombre
            print(f"{indentacion}├── {item}")


if __name__ == "__main__":
    # Ruta del directorio raíz de tu proyecto
    ruta_proyecto = '.'
    # Llamada a la función para mostrar la estructura, excluyendo las carpetas 'env' y '.git'
    mostrar_estructura_directorio(ruta_proyecto)
