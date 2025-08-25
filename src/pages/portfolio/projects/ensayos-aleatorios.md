---
layout:  /src/layouts/ProjectLayout.astro
title: 'Ensayos Aleatorios'
pubDate: 2025-08-20
description: 'Un generador de ensayos aleatorios para la prueba PAES M1 2025, con preguntas de diversas categorías.'
languages: ["python", "streamlit"]
image:
  url: "/images/projects/ensayos-aleatorios.webp"
  alt: "Imagen del proyecto Ensayos Aleatorios."
---
## 🌐 Demo
👉 <a href="https://ensayosaleatorios.streamlit.app/" target="_blank">Enlace al proyecto</a>

## 📝 Descripción

Este proyecto es un **Generador de Ensayos Aleatorios** diseñado específicamente para la preparación de la prueba **PAES M1 2025**. Permite a los usuarios crear ensayos de práctica seleccionando el número de preguntas por eje temático o utilizando un número de "forma" (semilla) específico para generar un ensayo reproducible. El sistema genera un documento PDF con una cantidad aleatoria de preguntas seleccionadas.

## 🧩 Características
- **Generación Aleatoria de Ensayos:** Crea ensayos de práctica con preguntas seleccionadas al azar de una base de datos.
- **Selección por Eje Temático:** Permite al usuario elegir la cantidad de preguntas por cada categoría (álgebra, geometría, números, probabilidad y estadística).
- **Generación por Semilla (Forma):** Posibilidad de generar un ensayo específico y reproducible utilizando un número de "forma" predefinido.
- **Exportación a PDF:** Genera un documento PDF descargable con el ensayo creado, incluyendo imágenes de las preguntas.

## 💡 Tecnologías utilizadas
- Python
- Streamlit (para la interfaz de usuario web)
- ReportLab (para la generación de documentos PDF)
- Pillow (PIL) (para el procesamiento de imágenes de las preguntas)

## 🎯 Objetivo
El objetivo de este proyecto es proporcionar una herramienta eficiente y flexible para estudiantes que se preparan para la prueba PAES M1 2025, permitiéndoles generar una variedad ilimitada de ensayos de práctica personalizados y descargables en formato PDF.

🚀 *Desarrollado por matpb99.*