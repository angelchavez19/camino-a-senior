---
title: Introduction to Hexagonal Architecture
date: Oct 09, 2025
locale: en
image: https://res.cloudinary.com/dyb6gvqzx/image/upload/v1760069756/Arquitectura_Hexagonal_fdz4vx.png
description: The hexagonal architecture aims to isolate business logic from external dependencies.
---

_Ports and Adapters Architecture_, also known as _Hexagonal Architecture_, is a software architecture pattern that aims to isolate the business logic from external dependencies, such as libraries, frameworks, or even database connections.

::content-image{alt="Hexagonal Architecture" src="https://res.cloudinary.com/dyb6gvqzx/image/upload/v1760069756/Arquitectura_Hexagonal_fdz4vx.png"}
::

## Key Concepts

### Domain

Contains all the core business logic and rules that are independent of any technology. It’s tied to the programming language rather than external technologies.

### Ports

These are _contracts_ that define the communication points between the domain and the outside world.

#### Driving Ports

Allow the outside world to interact with the domain. Examples: HTTP controllers, CLI commands, events, GUI interfaces, etc.

#### Driven Ports

Allow the domain to interact with the outside world. Examples: email services, database connections, third-party libraries, etc.

### Adapters

Implement specific ports that connect to external systems (databases, services, user interfaces, etc.). This is especially useful when changing the database engine, library, or framework.
