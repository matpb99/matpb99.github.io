---
layout:  /src/layouts/ProjectLayout.astro
title: 'Rutina Optimizada'
pubDate: 2025-08-20
description: 'Una aplicación web que utiliza programación lineal para generar planes de entrenamiento de gimnasio.'
languages: ["python", "streamlit", "pandas"]
image:
  url: "/images/projects/rutina-optimizada.webp"
  alt: "Imagen del proyecto Rutina Optimizada."
---

## 🌐 Demo
👉 <a href="https://rutinaoptimizada.streamlit.app/" target="_blank">Enlace al proyecto</a>

## 📝 Descripción

Esta es una aplicación web que utiliza programación lineal para generar planes de entrenamiento de gimnasio. La herramienta calcula una distribución óptima de ejercicios y series basándose en un conjunto de reglas y restricciones definidas por el usuario.

## 🧩 Características
- **Configuración Flexible:** Define días de entrenamiento, máximo de series por día y repeticiones semanales por ejercicio.
- **Gestión de Ejercicios:** Añade, activa o desactiva ejercicios y marca cuáles son fundamentales.
- **Distribución por Músculo:** Asigna grupos musculares a días específicos y fija un objetivo de series semanales.
- **Penalizaciones:** Evita que ejercicios incompatibles (como sentadillas y peso muerto) se asignen al mismo día.
- **Exportar/Importar:** Guarda y carga tu configuración en un archivo JSON.

## 💡 Tecnologías utilizadas
- Python
- Streamlit
- PuLP (Optimización Lineal)
- Pandas


## 🎯 Objetivo
El objetivo es modelar la planificación de una rutina como un problema de optimización lineal, buscando minimizar las penalizaciones y cumpliendo con todas las restricciones del usuario para generar un plan de entrenamiento óptimo y personalizado.

🚀 *Desarrollado por matpb99.*