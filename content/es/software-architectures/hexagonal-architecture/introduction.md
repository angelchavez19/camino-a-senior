---
title: Introducción a la Arquitectura Hexagonal
date: Oct 08, 2025
locale: es
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
  et ex eu elit viverra suscipit. Nullam sodales ornare turpis. Nunc fermentum
  tellus diam, id rutrum mi tristique quis. Quisque non nunc libero. Duis
  lobortis enim mollis elit venenatis, vitae tincidunt nibh efficitur. Nulla
  facilisi. In ut rutrum ligula. Donec ut dolor congue, rutrum enim id, gravida
  nisi. Nam viverra nibh at magna elementum, venenatis malesuada nunc ultrices.
---

*Ports and Adapters Architecture* (*Arquitectura de puertos y adaptadores*), o más conocido como *Hexagonal Architecture* (*Arquitectura Hexagonal*), es una arquitectura que busca aislar la lógica de negocio de las dependencias de código, ya sea librerias o frameworks e incluso conexiones a base de datos.

## Conceptos clave

### Dominio (*Domain*)

Contiene toda la lógica de negocio y reglas esenciales independientes de cualquier tecnología. Está ligado al lenguaje de programación más que de los tecnologias externas.

### Puertos (*Ports*)

Son *contratos* que definen los puntos de comunicación entre el dominio y el mundo exterior.

### Adaptadores (*Adapters*)

Implementan puertos específicos que conectan con sistemas externos (base de datos, servicios, interfaces de usuario, etc). Esto es especialmente útil cuando cambiamos de motor de base de datos, librería o framework.
