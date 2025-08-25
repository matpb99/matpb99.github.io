---
layout:  /src/layouts/ProjectLayout.astro
title: 'Visualización 3D de Embeddings con Control Gestual'
pubDate: 2025-08-20
description: 'Un proyecto innovador que visualiza embeddings semánticos en 3D y permite la interacción mediante gestos de mano.'
languages: ["python", "opencv", "sklearn"]
image:
  url: "/images/projects/3d-embeddings.webp"
  alt: "Imagen del proyecto Visualización con Dedos."
---

## 📝 Descripción

Este proyecto es una **Visualización 3D Interactiva de Embeddings Semánticos** que permite a los usuarios explorar el espacio de significado de oraciones mediante el control de gestos de mano. Combina procesamiento de lenguaje natural, aprendizaje automático, visión por computadora y gráficos 3D para ofrecer una experiencia de usuario única e intuitiva.

## 🧩 Características
- **Generación de Embeddings Semánticos:** Transforma oraciones en representaciones numéricas de alta dimensión utilizando modelos de lenguaje.
- **Visualización 3D:** Proyecta los embeddings semánticos a un espacio 3D para su visualización interactiva.
- **Base de Datos Vectorial:** Utiliza ChromaDB para almacenar y gestionar los embeddings de manera eficiente.
- **Seguimiento de Manos y Gestos:** Detecta y rastrea movimientos de manos y gestos (como pellizcos y puños cerrados) a través de una cámara web.
- **Control de Navegación 3D:** Permite a los usuarios trasladar, rotar y hacer zoom en el espacio 3D utilizando gestos naturales de la mano.
- **Interacción Intuitiva:** Ofrece una forma novedosa y sin contacto de interactuar con datos complejos.

## 💡 Tecnologías utilizadas
- Python
- OpenCV (para procesamiento de video y visión por computadora)
- MediaPipe (para detección y seguimiento de puntos clave de la mano)
- Open3D (para la creación y manipulación de la visualización 3D)
- scikit-learn (para reducción de dimensionalidad con PCA)
- ChromaDB (como base de datos vectorial para embeddings)
- Sentence-Transformers (para la generación de embeddings semánticos)


## 🎯 Objetivo
El objetivo de este proyecto es explorar nuevas formas de interacción humano-computadora, permitiendo la manipulación de datos abstractos y complejos, como los embeddings semánticos, a través de una interfaz intuitiva y natural basada en gestos.

🚀 *Desarrollado por matpb99.*