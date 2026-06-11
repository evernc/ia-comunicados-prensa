# Comandos básicos de Git usados en el proyecto

## Verificar instalación

```bash
git --version
```

## Configurar usuario

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@example.com"
```

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd ia-comunicados-prensa
```

## Ver estado del proyecto

```bash
git status
```

## Agregar cambios

```bash
git add .
```

## Crear commit

```bash
git commit -m "Crear prototipo inicial de IA para comunicados"
```

## Subir cambios

```bash
git push
```

## Crear rama secundaria

```bash
git checkout -b feature-generador-comunicados
```

## Subir rama secundaria

```bash
git push -u origin feature-generador-comunicados
```

## Unir rama

La unión se realiza mediante Pull Request en GitHub. El Scrum Master revisa y autoriza el merge hacia la rama principal main/master.
