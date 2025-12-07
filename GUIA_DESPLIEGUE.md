# Guía de Despliegue - ikerbretos.github.io

Este proyecto está configurado para desplegarse en **https://ikerbretos.github.io/**.

## Estado Actual
- He configurado el origen remoto: `https://github.com/ikerbretos/ikerbretos.github.io.git`
- He ajustado `package.json` y `vite.config.ts` para funcionar en la raíz del dominio.

## Pasos para Publicar (Desplegar)

Simplemente ejecuta este comando en la terminal:

```powershell
npm run deploy
```

### ¿Qué hará esto?
1. Compilará tu código (`npm run build`).
2. Enviará los archivos generados a la rama `gh-pages` de tu repositorio.

### Configuración en GitHub
1. Ve a tu repositorio: https://github.com/ikerbretos/ikerbretos.github.io
2. Ve a **Settings (Configuración)** > **Pages**.
3. En "Build and deployment", asegúrate de que **Source** sea "Deploy from a branch".
4. En **Branch**, selecciona `gh-pages` y la carpeta `/(root)`.
5. Guarda los cambios.

En unos minutos, tu web estará online en https://ikerbretos.github.io/.
