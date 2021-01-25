---
title: Docker - Introducción, conceptos básicos.
description: Introducción y conceptos básicos de Docker, en esta entrada repasaremos los principales conceptos de Docker y la terminología principal asociada a esta tecnología. ,  .
# img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
img: data:image/jpeg;base64,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
alt: nice image
author: 
  name: Nacho
  bio: Para que nos conozcamos un poco mejor ... 
  img: /yo.jpg
tag: "Docker"
date: '2020-01-02'
---
# Introducción a Docker y containerización
<br>

## ¿Qué es containerización?  
<br>

**"En mí PC si funciona"**, cuantas veces hemos dicho u oído esta frase, seguro que más de las que nos gustaría, esto es así porque venimos trabajando de una forma en la que no se tienen 
en cuenta modelos de integración, empaquetado, distribución y ejecución consistentes sin importar dónde y cómo se hagan.

Con la containerización tratamos de solucionar este problema, **containerizar** una aplicación es, explicado de forma sencilla, ejecutar la aplicación de forma 
aislada al resto de procesos, en la máquina que la hospeda. Eso permite compartir mucho mejor los recursos físicos de un servidor, 
aumentando la densidad de aplicaciones, pero manteniendo el aislamiento entre ellas.

La containerización no es una técnica nueva, sino que viene usándose desde hace más de 10 años en sistemas Linux. Linux incluye funcionalidades para aislar procesos unos de otros,
aislar espacios de nombres y usuarios, o compartir recursos de computación.

##  ¿Qué es Docker?
<br>

![Logo Docker](/img/docker/docker.png)

Docker nace para hacer de la containerización algo sencillo, al alcance de todos. Es decir, Docker toma todos los conceptos existentes de containerización, 
y alguna de las librerías y herramientas existentes, para crear una plataforma nueva con un foco en la experiencia de desarrollo y operación.
Que fuera, sobre todo, sencilla de aprender y de usar. Y lo consiguió.

En pocos años Docker se ha convertido en el estándar de industria para la containerización de aplicaciones, 
y ha abierto la puerta a muchos otros proyectos que lo complementan, extienden o tratan de competir con él. 
Y el formato que impulsó Docker para definir las imágenes ejecutables y empaquetarlas para su distribución, se ha convertido en el estándar abierto que usan 
prácticamente todas las tecnologías de containerización actuales.

## Conceptos básicos de Docker 
<br>

Algunos de los conceptos básicos de Docker que debemos manejar son: 
<br>

- **Docker Engine**. El motor de Docker es el 'ejecutable', la pieza que sabe coger una imagen en disco y convertirla en un contenedor, es decir, 
un proceso productivo en una máquina host, con el debido aislamiento, acceso a recursos de computación y comunicación con el mundo exterior.

- **Docker Image**. Una imagen Docker es un fichero en disco que contiene toda la información de los ficheros, permisos, puertos de red, volúmenes
o comando ejecutable al inicio, entre otros datos. Las imágenes Docker están estratificadas en capas, de forma que imágenes más complejas
se basan en imágenes más sencillas, y solo deben llevar traza de los cambios sobre la imagen en la que se basan (p.ej. los ficheros nuevos,
los que se han cambiado, etc.). Las imágenes Docker se guardan en registros desde las que son distribuidas cuando son necesarias
(p.ej. Docker Hub, Docker Trusted Registry, Red Hat Quay, etc.). El formato de imagen Docker es a día de hoy un estándar de la Open Container Initiative
 y usado por otros motores aparte del propio Docker.

- **Docker Machine**. Es un host - ya sea servidor físico, virtual o PC - que tiene configurado Docker Engine y permite por tanto gestionar el ciclo de vida de las imágenes y ejecutarlas.

- **Docker Volume**. Un volumen en general es un espacio en disco para uso de un programa. En el caso específico de Docker, 
los volúmenes se asocian a contenedores (no a imágenes). Pueden ser efímeros que se destruyen al finalizar el proceso del contenedor (p.ej. el típico volumen /tmp)
 o persistentes (p.ej. el volumen donde guardamos los ficheros de una base de datos o de un gestor de contenido).

- **Docker Network**. Una red en Docker es una virtualización sobre las redes existentes en el host, 
que permite tener entornos privados aislados unos de otros, y configurar reglas que permitan o no los accesos entre redes y con el mundo exterior. 
Como regla básica, dos contenedores en la misma red Docker tienen visibilidad entre sí, pero no si están en redes diferentes. 
Otro concepto importante es el de puerto expuesto y publicado. Un puerto expuesto es un puerto del contenedor que es accesible a otros contenedores de la red 
(p.ej. el puerto de una base de datos). Un puerto publicado es un puerto que es accesible desde la máquina host y por tanto accesible desde el mundo exterior 
(p.ej. el puerto de escucha de una aplicación web).

## Orquestando contenedores
<br>

Aunque Docker es una gran ventaja para el problema de gestionar la distribución y ejecución de aplicaciones de una forma portable,
difícilmente una aplicación consista en un solo contenedor. Normalmente nos encontraremos múltiples contenedores trabajando juntos 
(p.ej. app front, el backend, la base de datos), y en muchas ocasiones necesitaremos tener varias copias del mismo contenedor para absorber 
más carga de los usuarios, o para distribuirlas en múltiples host para ser resistente a los fallos.

Para gestionar contenedores a escala, es preciso contar con una plataforma que gestione los recursos de computación de uno o varios host, 
y que permita orquestar la ejecución de docenas, incluso cientos de contenedores, sin volvernos locos trabajando con ellos uno a uno.

Aunque no entraremos en profundidad en plataformas de orquestación de contenedores, sí que es 
interesante comentar las principales para que os resulten familiares:

- **Docker Swarm**. La plataforma de orquestación de la propia Docker Inc. (la compañía detrás de Docker y Docker Enterprise, negocio recientemente adquirido por Mirantis). 
Muy sencilla de poner en marcha pero complicada de mantener en buena salud. Requiere realmente de una plataforma Docker Enterprise (comercial) para sacarle todo su partido.

- **Kubernetes**. El **rey** de las plataformas. Estándar de facto que se ha impuesto a todas las demás en cuota de adopción. 
Inicialmente fue una contribución de Google y luego muchas compañías han empezado a invertir estratégicamente en él, notablemente Red Hat.

- **Red Hat OpenShift**. Plataforma basada en Kubernetes, con un foco en la usabilidad y experiencia de desarrollo.

- **RancherOS**. Desde su versión 2.0, plataforma basada en Kubernetes, compartiendo el foco en la usabilidad y experiencia de otras opciones.

- **Mesosphere**. La plataforma de orquestación de Mesos.

- **Amazon Web Services ECS, Elastic Container Service**. Plataforma de orquestación propietaria de Amazon Web Services.

- **Amazon Web Services EKS, Elastic Kubernetes Service**. Plataforma basada en Kubernetes gestionada por Amazon Web Services.

- **Google Cloud GKE, Google Kubernetes Engine**. Plataforma basada en Kubernetes gestionada por Google Cloud.

- **Microsoft Azure AKS, Azure Kubernetes Service**. Plataforma basada en Kubernetes gestionada por Microsoft Azure.

- **Microsoft Azure ARO, Azure Red Hat OpenShift**. Plataforma basada en OpenShift gestionada por Microsoft Azure.


## Diferencias entre containerización y máquinas virtuales
<br>

En este punto, posiblemente muchos os preguntáis cuál es la diferencia entre Docker y una máquina virtual de "toda la vida", como VirtualBox, VMware o Hyper-V.

Ambos enfoques de virtualización son complementarios, con sus pros y contras. En el caso de las máquinas virtuales, la unidad de virtualización es el host virtual, lo que incluye, sobre el hipervisor, un stack completo con sistema operativo, librerías y dependencias, y finalmente la aplicación virtualizada. En el caso de los contenedores, la unidad de virtualización comienza más "arriba", sobre el sistema operativo.

Eso quiere decir que en un mismo host físico que proporciona la capacidad de virtualizar con contenedores, todos ellos comparten el kernel del sistema operativo, lo que puede ocasionar ciertas incompatibilidades llegado el caso (p.ej. imágenes que dependen de glibc).

Sin embargo, en un enfoque con máquinas virtuales, como la virtualización incluye al sistema operativo, el mismo host físico puede alojar diferentes sistemas, p.ej. máquinas Windows o Linux conviviendo en el mismo host.

Las máquinas virtuales son rápidas de iniciar, pero los contenedores lo son aun más, puesto que no deben iniciar el sistema operativo. Las máquinas virtuales ofrecen un mayor aislamiento entre aplicaciones, y darán menos problemas derivados de incompatibilidad en el kernel (incluso aunque sean distintas aplicaciones basadas en Linux).

Gráficamente, podemos verlo en el siguiente diagrama:

![Comparación entre máquinas virtuales y contenedores](/img/docker/comp-vm-cont.png)

Ambos enfoques además pueden convivir, y dentro de un mismo host físico que lo soporta, se pueden desplegar máquinas virtuales y contenedores simultáneamente, consiguiendo en una sola plataforma lo mejor de ambos mundos.

Espero que esta entrada haya sido de tú interest y si te ha gustado no olvides compartir. 


