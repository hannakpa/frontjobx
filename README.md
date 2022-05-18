# frontjobx
## Proyecto Front React con la librería Storybook para la Nuwe Hackathon 05/22, Barcelona

### Descripción
El proyecto trata de un reto para clasificar como front-end a la Hackatón, donde habrá un reto final en equipos. El reto front consiste en emplear la librería Storybook con cualquier framework (React, Angular, View.js...), en este caso con React, para crear diferentes componentes aislados, a su vez personalizables y reutilizables y poder renderizarlos en una página principal. Esta página deberá ser responsive: con posibilidad de scroll en su variante de fila horizontal y reorganizarse en una columna en las versiones tablet y móvil. 

### Instalación
Para el proyecto se usó la última versión actual de Vite (2.9.9) como herramienta de tooling por su ligereza para inicializar el entorno de React (18.0.0). Además, aprovecha el sistema de módulos de ES6 (ESModules). Es necesario tener antes instalado Node.js en el equipo. 

```
npm init vite@latest frontjobx    //crea el entorno
npm install                       //instala las dependencias
npm run dev                       //ejecuta el entorno
```

Sobre este mismo proyecto se instaló la librería Storybook. Storybook utiliza otro localhost, por lo que se ejecuta en otra consola:

```
npx -p @storybook/cli sb init     //instala las dependencias necesarias para ejecutar la librería en react
npm run storybook                 //ejecuta la librería
```


## Clonar el repositorio
Para clonarlo, se debe insertar los siguientes comandos:

```
git clone https://github.com/hannakpa/frontjobx.git
npm i
npm run dev                       //en una consola. localhost:3000
npm run storybook                 //en otra consola. localhost:6006
```

## Organización
En la carpeta Stories se guardan todos los componentes, css y stories. 
Dentro del entorno de Storybook la estructuración es la siguiente:
2 apartados principales: Partes y Global. **Partes** contiene todos los componentes aislados que aparecerían en la página. Están agrupados en Carta (entera y sus partes) y Título (Título de la página). El apartado **Global** contiene la suma de todas las partes. Es decir, el resultado final, donde se podrá modificar el contenido y su responsividad.

- Partes 
  - Titulo
  - Carta 
    - Lista 
    - TituloCarta 
      - Black
      - Grey
    - Badge 
      - Primary
    
- Global
  - Plantilla 

### Partes
En partes se guardan todos los elementos aislados. Estos se distribuyen en carpetas distintas según el componente del que formen parte.

#### Titulo
Contiene el título general que tendrá la página. Se le puede cambiar el tamaño y color. Tiene 3 stories de distintos colores: rojo, negro y azúl. Dentro de cada una de las stories se puede modificar el título, el color y el tamaño (sm, md y lg). 

#### Carta
En carta se guardan tanto los elementos aislados que conforman la carta, como la carta completa en sí.

- Story **Lista**: contiene todas las cartas. Imprime el contenido que se le ha pasado a la storie como argumento dentro de un array de objetos. Esta misma información se puede editar en la propia story. Cada objeto contiene la información de cada carta: *title* (título), *desc* (descripción) y *tags*(puede haber más de uno). La story **Carta** recoge toda la información y se le pasa a su propio componente Carta, quien se encarga de pasarle la información del título al componente **TituloCarta** (quien imprime aplicando sus formatos) y pasarle al componente **Badge** un array con uno o varios *tags* y este aplica un map para imprimirlos. 
Además, en esta story se puede elegir el tamaño deseado de la carta (sm, md, lg) y modificar, borrar o añadir cartas y su contenido.

- Grupo **TítuloCarta**: tiene dos stories: **Black** y **Grey**. En cada una de estas stories se puede modificar el texto (que por defecto es cursiva tiene un emoji), el color y el tamaño del título. El componente de **TituloCarta** recibe los datos que le transmite **Carta** e imprime su título con el el color de la strory predefinida (Black).

- Grupo **Badge**: Este grupo contiene una story llamada **Primary**. En esta se puede elegir un *label* (vienen varias predefinidas), elegir el color de fondo del *tag*, y elegir el tamaño del elemento (small, medium, large). Este componente, al igual que **TituloCarta**, recibe datos de **Carta**. En este caso, si son varios datos, recibe un array y **Badge** implementa un map e imprime todos los *tags* de cada carta. 


### Global
En este apartado aparece la story **Plantilla**. En esta se pueden ver tanto el título principal de la página, como cada una de las cartas con sus contenidos. La información la recibe de un array de objetos y luego se transmiten a cada componente para que ejecuten las funciones necesarias para imprimirlo en el formato predefinido. Los controles de esta story permiten modificar, borrar o añadir contenido de cada carta. Asímismo, el control *direction* permite elegir entre dos orientaciones para la disposición de las cartas: *row* (horizontal con scroll) y *column* (vertical). La página tiene un diseño responsivo, de modo que si su dirección es *row*, se convertirá en una columna al cambiar su visualización a la del móvil.  

### Licencia

[MIT](https://choosealicense.com/licenses/mit/) License © 2022 [Hanna-Klaudia Petrakova](https://github.com/hannakpa)












