---
title: Introducción a la Arquitectura Hexagonal
date: Oct 09, 2025
locale: es
image: https://res.cloudinary.com/dyb6gvqzx/image/upload/v1760069756/Arquitectura_Hexagonal_fdz4vx.png
description: La arquitectura hexagonal permite aislar la lógica de negocio de las dependencias externas.
---

_Ports and Adapters Architecture_ (_Arquitectura de puertos y adaptadores_), o más conocido como _Hexagonal Architecture_ (_Arquitectura Hexagonal_), es una arquitectura que busca aislar la lógica de negocio de las dependencias externas, ya sea librerias o frameworks e incluso conexiones a base de datos.

::content-image{alt="Hexagonal Architecture" src="https://res.cloudinary.com/dyb6gvqzx/image/upload/v1760069756/Arquitectura_Hexagonal_fdz4vx.png"}
::

## Conceptos clave

### Dominio (_Domain_)

Contiene toda la lógica de negocio y reglas esenciales independientes de cualquier tecnología. Está ligado al lenguaje de programación más que de los tecnologias externas.

### Puertos (_Ports_)

Son _contratos_ que definen los puntos de comunicación entre el dominio y el mundo exterior.

#### Puertos de entrada (_Driving ports_)

Permite al exterior interactuar con el dominio. Ejemplos: controlladores HTTP, CLI, eventos, GUI, etc.

#### Puertos de salida (_Driven ports_)

Permite al dominio interactuar con el exterior. Ejemplo: servicios de correo, conexión a base de datos, interacción con librerias de terceros, etc.

### Adaptadores (_Adapters_)

Implementan puertos específicos que conectan con sistemas externos (base de datos, servicios, interfaces de usuario, etc). Esto es especialmente útil cuando cambiamos de motor de base de datos, librería o framework.
