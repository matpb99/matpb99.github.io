---
layout:  /src/layouts/ProjectLayout.astro
title: 'To Champions'
pubDate: 2025-08-20
description: 'Un simulador de clasificación para el Valorant Champions Tour, que predice las probabilidades de los equipos.'
languages: ["python", "streamlit", "pandas","apis"]
image:
  url: "/images/projects/to-champions.webp"
  alt: "Imagen del proyecto To Champions."
---

## 🌐 Demo
👉 <a href="https://valo-to-champions.streamlit.app/" target="_blank">Enlace al proyecto</a>

## 📝 Descripción

Este proyecto es un **Simulador de Clasificación para el Valorant Champions Tour**. Permite a los usuarios simular los resultados de los partidos restantes de la temporada regular y los playoffs, y luego utiliza simulaciones de Monte Carlo para predecir las probabilidades de cada equipo de clasificarse para el Valorant Champions.

## 🧩 Características
- **Obtención de Datos:** Consume datos reales de partidos de Valorant de la API de vlr.gg.
- **Simulación de Temporada Regular:** Permite simular los partidos restantes de la temporada regular, incluyendo la selección de ganadores.
- **Simulación de Playoffs:** Simula el bracket completo de los playoffs, incluyendo las fases superior e inferior.
- **Cálculo de Puntos:** Calcula los puntos de clasificación de los equipos basados en los resultados simulados.
- **Simulación Monte Carlo:** Ejecuta múltiples simulaciones para determinar la probabilidad de clasificación de cada equipo.
- **Interfaz Interactiva:** Aplicación web construida con Streamlit para una fácil interacción.

## 💡 Tecnologías utilizadas
- Python
- Streamlit
- Pandas (para manipulación y análisis de datos)
- aiohttp (para peticiones asíncronas a la API)
- joblib (para paralelización de simulaciones)


## 🎯 Objetivo
El objetivo de este proyecto es proporcionar una herramienta interactiva y predictiva para los aficionados de Valorant, permitiéndoles explorar diferentes escenarios de partidos y entender las probabilidades de clasificación de sus equipos favoritos para el Valorant Champions.

🚀 *Desarrollado por matpb99.*