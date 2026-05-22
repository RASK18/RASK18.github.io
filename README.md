# Disboard

Web estatica para usar `disboard.es` como indice de proyectos publicados con
GitHub Pages.

## Estructura

- `index.html`: estructura de la pagina.
- `styles.css`: estilos responsive y paleta visual.
- `script.js`: lista editable de proyectos.
- `assets/disboard-hero.png`: imagen principal usada como fondo visual.
- `CNAME`: dominio personalizado para GitHub Pages.
- `.nojekyll`: evita el procesado Jekyll de GitHub Pages.

## Anadir proyectos

Edita el array `projects` en `script.js`:

```js
{
  title: "Nombre del proyecto",
  description: "Descripcion breve para la tarjeta.",
  href: "https://disboard.es/nombre-del-repo/",
  tags: ["HTML", "CSS", "JS"],
  status: "Activo",
  tone: "pink",
  piece: "♜"
}
```

`tone` acepta `pink`, `cyan` o `gold`. `piece` permite cambiar el simbolo
decorativo de la tarjeta.

Si el proyecto esta en un repositorio GitHub Pages sin dominio personalizado
propio, la ruta publica esperada sera:

```text
https://disboard.es/nombre-del-repo/
```

## Despliegue previsto

1. Publica estos archivos en el repositorio `RASK18/RASK18.github.io`.
2. En GitHub Pages, configura el dominio personalizado `disboard.es`.
3. Configura el DNS del dominio siguiendo la documentacion de GitHub Pages.
4. Activa HTTPS cuando GitHub termine de validar el certificado.

No hay dependencias, build ni servidor obligatorio. Puedes abrir `index.html`
directamente en el navegador para revisar cambios.
