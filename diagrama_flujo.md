# Arquitectura y Flujo del Código

Este diagrama explica cómo funciona la aplicación por debajo (la relación entre `index.html` y `app.js`), de forma visual.

```mermaid
graph TD
    %% Nodos principales
    HTML[index.html<br>Estructura Base y Tailwind]
    JS[app.js<br>Lógica y Base de Datos]
    DOM_Side[#sidebar-nav<br>Menú Lateral]
    DOM_Main[#main-content<br>Área Principal]
    
    %% Flujo de inicio
    HTML --> |"Carga el script al final del body"| JS
    JS --> |"1. Llama a init()"| Init(Función init)
    
    %% Renderizado inicial
    Init --> |"2. renderSidebar()"| DOM_Side
    Init --> |"3. renderMain()"| DOM_Main
    
    %% Interacción del usuario
    DOM_Side -.-> |"Usuario hace click en un Tab<br>(ej. 'Cronología')"| EventTab(Evento Click: Tab)
    DOM_Side -.-> |"Usuario hace click en una Artista<br>(ej. 'Hilma')"| EventArtist(Evento Click: Artista)
    
    %% Manejo de eventos
    EventTab --> |"Actualiza variable activeTab"| RenderSide(renderSidebar)
    EventTab --> RenderMain(renderMain)
    
    EventArtist --> |"Actualiza variable activeArtistId"| RenderSide
    EventArtist --> RenderMain
    
    %% Ciclo de pintado
    RenderSide --> |"Re-pinta el menú con el estado activo"| DOM_Side
    RenderMain --> |"Verifica activeTab"| Condicion{¿Es 'artistas'?}
    
    Condicion -- "Sí" --> RenderDetail(renderArtistDetail)
    Condicion -- "No" --> RenderPlace(renderPlaceholder)
    
    RenderDetail --> |"Busca datos en array 'artists' e inyecta HTML"| DOM_Main
    RenderPlace --> |"Inyecta HTML de 'Sección en construcción'"| DOM_Main
    
    %% Estilos
    classDef file fill:#1E404F,stroke:#988A20,stroke-width:2px,color:#fff;
    classDef func fill:#34685C,stroke:#E6692A,stroke-width:2px,color:#fff;
    classDef dom fill:#CC2132,stroke:#fff,stroke-width:2px,color:#fff;
    classDef evt fill:#E6692A,stroke:#fff,stroke-width:2px,color:#132832;
    
    class HTML,JS file;
    class Init,RenderSide,RenderMain,RenderDetail,RenderPlace func;
    class DOM_Side,DOM_Main dom;
    class EventTab,EventArtist evt;
```

## Resumen del Comportamiento

1. **Datos Desacoplados:** Toda la información (biografías, nombres de obras, etc.) vive en un arreglo `artists` al principio de `app.js`. El HTML solo contiene el contenedor vacío.
2. **Estado (State):** Hay dos variables cruciales: `activeTab` (sabe qué pestaña principal estás viendo) y `activeArtistId` (sabe qué artista estás viendo).
3. **Re-renderizado:** Cada vez que haces clic en un elemento del menú, la aplicación no recarga la página. En cambio, actualiza las variables de estado y vuelve a "dibujar" (re-renderizar) los menús y el contenido principal inyectando el código HTML internamente con JavaScript.
