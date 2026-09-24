const artists = [
    {
        id: 'artemisia',
        name: 'Artemisia Gentileschi',
        era: '1593 – c. 1656 • Roma, Italia',
        style: 'BARROCO ITALIANO',
        bio: 'Artemisia Gentileschi (1593–1656) fue una pintora barroca italiana, hoy considerada una de las artistas más talentosas de la generación posterior a Caravaggio. En una época en que las mujeres no eran aceptadas por las academias de arte ni por los mecenas, fue la primera mujer en convertirse en miembro de la Accademia di Arte del Disegno en Florencia.',
        bio2: 'Su obra se caracteriza por retratar mujeres fuertes y sufrientes de los mitos, alegorías y la Biblia. La violencia de sus claroscuros y la crudeza de sus escenas a menudo se interpretan a través de la lente de sus propias experiencias traumáticas, transformando el lienzo en un espacio de vindicación personal y colectiva.',
        hiddenHistory: 'Durante siglos, el genio de Artemisia fue eclipsado por el escándalo de su juicio por violación. La historia del arte oficial a menudo minimizó su técnica magistral, atribuyendo sus mejores obras a su padre o contemporáneos masculinos.',
        odsConnection: 'La recuperación de la figura de Artemisia es fundamental para desmantelar las narrativas patriarcales en la historia del arte. Su legado inspira a visibilizar a las creadoras contemporáneas y garantizar su participación plena y efectiva.',
        heroImg: 'assets/Artemisa3.jpg.jpeg',
        heroPosition: 'center 20%',
        artworks: [
            { title: 'Judith decapitando a Holofernes', year: '1612–13', img: 'assets/Judith decapitando.jpg.jpeg' },
            { title: 'Autorretrato como alegoría', year: '1638–39', img: 'assets/Artemisia_Gentileschi_Selfportrait_Martyr.jpg.jpeg' }
        ],
        meta: {
            periodo: 'Barroco',
            ubicacion: 'Florencia / Roma',
            tecnica: 'Óleo sobre lienzo',
            estado: 'Reivindicada'
        },
        index: '01',
        tag: 'PIONERA'
    },
    {
        id: 'hilma',
        name: 'Hilma af Klint',
        era: '1862 – 1944 • Solna, Suecia',
        style: 'ARTE ABSTRACTO',
        bio: 'Pintora sueca y verdadera pionera del arte abstracto. Años antes que Kandinsky o Mondrian, Hilma ya creaba composiciones visuales no representativas basadas en sus investigaciones espirituales, científicas y teosóficas.',
        bio2: 'Su obra monumental, "Los cuadros para el templo", representa dimensiones espirituales complejas a través de diagramas geométricos, espirales y colores vibrantes que buscaban explicar la evolución de la humanidad y el universo.',
        hiddenHistory: 'Consciente de que su época no estaba preparada, estipuló que sus cuadros no se mostraran hasta 20 años después de su muerte. Cuando por fin se exhibieron, las instituciones dominadas por hombres se resistieron a reconocerla como la inventora de la abstracción.',
        odsConnection: 'El caso de Hilma demuestra cómo la historia oficial sistemáticamente ignora la innovación femenina. Su inclusión reescribe el canon del arte moderno, un paso esencial para la equidad (ODS 5).',
        heroImg: 'assets/Hilma-af-Klint-uncropped.jpg.jpeg',
        heroPosition: 'center 30%',
        artworks: [
            { title: 'Los Diez Mayores, N° 7', year: '1907', img: 'assets/Trabajo 1.jpg.jpeg' },
            { title: 'El Cisne, N° 17', year: '1915', img: 'assets/trabajo 2.jpg.jpeg' }
        ],
        meta: {
            periodo: 'Arte Moderno',
            ubicacion: 'Estocolmo',
            tecnica: 'Óleo y temple',
            estado: 'Redescubierta'
        },
        index: '02',
        tag: 'VISIONARIA'
    },
    {
        id: 'edmonia',
        name: 'Edmonia Lewis',
        era: '1844 – 1907 • Nueva York / Roma',
        style: 'NEOCLASICISMO',
        bio: 'Escultora estadounidense de herencia afroamericana y nativa americana (Ojibwe). Fue la primera mujer afrodescendiente y nativa en ganar reconocimiento internacional como escultora en el mundo de las Bellas Artes.',
        bio2: 'Se instaló en Roma para escapar del racismo en EE.UU. Allí dominó la escultura neoclásica en mármol, creando obras monumentales que abordaban temas de abolición, emancipación y sus raíces indígenas.',
        hiddenHistory: 'Enfrentó doble discriminación (raza y género). Tras su muerte, gran parte de su obra fue destruida, perdida o ignorada. Su tumba en Londres permaneció sin nombre durante más de un siglo hasta ser restaurada en 2017.',
        odsConnection: 'La historia de Edmonia subraya la importancia de la interseccionalidad dentro del ODS 5. La verdadera igualdad requiere abrir espacios y preservar el patrimonio de mujeres de todas las razas y orígenes.',
        heroImg: 'assets/330px-motto-edmonia-lewis-original.jpg!Portrait.jpg.jpeg',
        heroPosition: 'center 15%',
        artworks: [
            { title: 'La Muerte de Cleopatra', year: '1876', img: 'assets/The_Death_of_Cleopatra.jpg.jpeg' },
            { title: 'Para siempre libre', year: '1867', img: 'assets/trabajoE.jpg.jpeg' }
        ],
        meta: {
            periodo: 'Neoclasicismo',
            ubicacion: 'Roma',
            tecnica: 'Escultura en mármol',
            estado: 'Restaurada'
        },
        index: '03',
        tag: 'PIONERA'
    }
];

const navItems = [
    { id: 'explorar', label: 'Explorar', icon: 'explore' },
    { id: 'artistas', label: 'Artistas', icon: 'palette' },
    { id: 'cronologia', label: 'Cronología', icon: 'timeline' },
    { id: 'agenda2030', label: 'Agenda 2030', icon: 'public' },
    { id: 'favoritos', label: 'Favoritos', icon: 'grade' }
];

let activeTab = 'artistas';
let activeArtistId = 'artemisia';

const sidebarNav = document.getElementById('sidebar-nav');
const mainContent = document.getElementById('main-content');
const btnSubmit = document.getElementById('btn-submit');

function init() {
    renderSidebar();
    renderMain();
    
    if(btnSubmit) {
        btnSubmit.addEventListener('click', () => {
            activeTab = 'submit';
            renderSidebar();
            renderMain();
        });
    }
}

function renderSidebar() {
    sidebarNav.innerHTML = '';
    
    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = '#';
        
        const isActive = activeTab === item.id;
        a.className = isActive ? "nav-item active" : "nav-item";
        
        a.innerHTML = `
            <div class="nav-item-content">
                <span class="material-symbols-outlined" data-icon="${item.icon}">${item.icon}</span>
                ${item.label}
            </div>
            ${isActive && item.id === 'artistas' ? '<span class="material-symbols-outlined">expand_more</span>' : ''}
        `;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            activeTab = item.id;
            renderSidebar();
            renderMain();
        });
        
        sidebarNav.appendChild(a);
        
        if (isActive && item.id === 'artistas') {
            const subList = document.createElement('div');
            subList.className = "nav-sublist";
            
            artists.forEach(artist => {
                const isArtistActive = activeArtistId === artist.id;
                const subA = document.createElement('a');
                subA.href = "#";
                subA.className = isArtistActive ? "nav-subitem active" : "nav-subitem";
                subA.innerText = artist.name;
                
                subA.addEventListener('click', (e) => {
                    e.preventDefault();
                    activeArtistId = artist.id;
                    renderSidebar();
                    renderMain();
                });
                
                subList.appendChild(subA);
            });
            
            sidebarNav.appendChild(subList);
        }
    });
}

function renderMain() {
    if (activeTab === 'artistas') {
        const artist = artists.find(a => a.id === activeArtistId);
        renderArtistDetail(artist);
    } else if (activeTab === 'explorar') {
        renderExplorar();
    } else if (activeTab === 'cronologia') {
        renderCronologia();
    } else if (activeTab === 'agenda2030') {
        renderAgenda2030();
    } else if (activeTab === 'favoritos') {
        renderFavoritos();
    } else if (activeTab === 'submit') {
        renderSubmit();
    } else {
        renderPlaceholder(navItems.find(n => n.id === activeTab));
    }
}

function renderExplorar() {
    mainContent.innerHTML = `
        <header class="page-header">
            <h1 class="page-title font-headline text-primary text-uppercase">Explorar Archivo</h1>
            <p class="page-subtitle">Descubre las voces silenciadas por la historia oficial. Una colección vanguardista del talento femenino en las artes.</p>
        </header>
        <div class="grid grid-cols-1 md-grid-cols-2 md-grid-cols-3 mt-4">
            ${artists.map(a => `
                <div class="artist-card" onclick="activeTab='artistas'; activeArtistId='${a.id}'; renderSidebar(); renderMain();">
                    <div class="artist-card-img-wrapper">
                        <img src="${a.heroImg}" alt="${a.name}" class="artist-img" style="object-position: ${a.heroPosition || 'center 20%'};">
                        <div class="artist-card-overlay"></div>
                    </div>
                    <span class="label-caps text-accent-yellow" style="margin-bottom: 4px;">${a.style}</span>
                    <h3 class="artist-card-title font-headline">${a.name}</h3>
                    <p class="artist-card-bio">${a.bio}</p>
                    <button class="btn-outline label-caps">Ver Perfil</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCronologia() {
    mainContent.innerHTML = `
        <header class="page-header">
            <h1 class="page-title font-headline text-primary text-uppercase">Cronología</h1>
            <p class="page-subtitle">Un recorrido temporal por la rebeldía creativa. El tiempo no borra el talento.</p>
        </header>
        <div class="timeline-container">
            <div class="timeline-line"></div>
            ${[...artists].sort((a,b) => a.era.localeCompare(b.era)).map(a => `
                <div class="timeline-item">
                    <div class="timeline-dot">
                        <span class="material-symbols-outlined" style="font-size: 14px" data-icon="trip_origin">trip_origin</span>
                    </div>
                    <div class="timeline-content">
                        <div style="margin-bottom: 4px;">
                            <span class="label-caps text-accent-yellow">${a.era.split('•')[0].trim()}</span>
                        </div>
                        <h3 class="font-headline text-white" style="font-size: 24px; margin-bottom: 8px;">${a.name}</h3>
                        <p class="text-pale-gold" style="font-size: 14px;">${a.style}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAgenda2030() {
    mainContent.innerHTML = `
        <header class="page-header">
            <h1 class="page-title font-headline text-primary text-uppercase">Impacto ODS 5</h1>
            <p class="page-subtitle">Igualdad de género y empoderamiento a través de la memoria histórica del arte.</p>
        </header>
        
        <div class="grid grid-cols-1 md-grid-cols-12" style="margin-top: 16px;">
            <div class="col-span-4 box-accent" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color: var(--tertiary-container); border: none;">
                <span class="material-symbols-outlined text-white" style="font-size: 96px; opacity: 0.5; margin-bottom: 16px;" data-icon="female">female</span>
                <h2 class="font-headline text-white text-uppercase" style="font-size: 32px;">Objetivo 5</h2>
                <p class="label-caps" style="color: rgba(255,255,255,0.8); margin-top: 8px;">Naciones Unidas</p>
            </div>
            
            <div class="col-span-8 box-panel">
                <h3 class="font-headline text-accent-yellow" style="font-size: 24px; margin-bottom: 16px;">¿Por qué visibilizar a las mujeres artistas?</h3>
                <p style="margin-bottom: 16px;">
                    La recuperación de la memoria de las creadoras históricas es un acto directo de justicia reparativa y contribuye activamente a las metas del Objetivo de Desarrollo Sostenible número 5.
                </p>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 16px; color: var(--pale-gold);">
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <span class="material-symbols-outlined text-accent-yellow" data-icon="check_box">check_box</span>
                        <span><strong>Meta 5.1:</strong> Poner fin a todas las formas de discriminación, incluyendo la invisibilización sistemática en libros de texto y museos.</span>
                    </li>
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <span class="material-symbols-outlined text-accent-yellow" data-icon="check_box">check_box</span>
                        <span><strong>Meta 5.5:</strong> Asegurar la participación plena y efectiva de las mujeres, reconociendo a aquellas que lideraron en el pasado para inspirar a las líderes del futuro.</span>
                    </li>
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <span class="material-symbols-outlined text-accent-yellow" data-icon="check_box">check_box</span>
                        <span><strong>Meta 5.c:</strong> Promover políticas para la igualdad de género empoderando a las mujeres en el ámbito cultural e histórico.</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function renderFavoritos() {
    mainContent.innerHTML = `
        <header class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
                <h1 class="page-title font-headline text-primary text-uppercase">Archivo Personal</h1>
                <p class="page-subtitle">Tus artistas e historias rescatadas favoritas.</p>
            </div>
            <span class="label-caps" style="padding: 4px 12px; background-color: var(--surface-variant); border: 1px solid var(--technical-olive);">2 GUARDADOS</span>
        </header>
        
        <div class="grid grid-cols-1 md-grid-cols-2" style="margin-top: 16px;">
            <!-- Favorito 1 -->
            <div style="display: flex; background-color: var(--surface-med); border: 1px solid var(--technical-olive); overflow: hidden;">
                <div style="width: 33.333%; background-color: var(--ink-black); border-right: 1px solid var(--technical-olive); display: flex; align-items: center; justify-content: center; padding: 8px;">
                    <span class="label-caps" style="font-size: 10px; color: var(--technical-olive);">(IMG)</span>
                </div>
                <div style="padding: 16px; width: 66.666%; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <h3 class="font-headline text-white" style="font-size: 24px; margin-bottom: 4px;">Artemisia Gentileschi</h3>
                        <p class="label-caps text-accent-yellow">PIONERA</p>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px;">
                        <button style="background: transparent; border: none; color: var(--pale-gold);"><span class="material-symbols-outlined">share</span></button>
                        <button style="background: transparent; border: none; color: var(--tertiary-container);"><span class="material-symbols-outlined">heart_minus</span></button>
                    </div>
                </div>
            </div>
            
            <!-- Favorito 2 -->
            <div style="display: flex; background-color: var(--surface-med); border: 1px solid var(--technical-olive); overflow: hidden;">
                <div style="width: 33.333%; background-color: var(--ink-black); border-right: 1px solid var(--technical-olive); display: flex; align-items: center; justify-content: center; padding: 8px;">
                    <span class="label-caps" style="font-size: 10px; color: var(--technical-olive);">(IMG)</span>
                </div>
                <div style="padding: 16px; width: 66.666%; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <h3 class="font-headline text-white" style="font-size: 24px; margin-bottom: 4px;">Hilma af Klint</h3>
                        <p class="label-caps text-accent-yellow">VISIONARIA</p>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px;">
                        <button style="background: transparent; border: none; color: var(--pale-gold);"><span class="material-symbols-outlined">share</span></button>
                        <button style="background: transparent; border: none; color: var(--tertiary-container);"><span class="material-symbols-outlined">heart_minus</span></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSubmit() {
    mainContent.innerHTML = `
        <header class="page-header">
            <h1 class="page-title font-headline text-primary text-uppercase">Sugerir Artista</h1>
            <p class="page-subtitle">Contribuye al archivo. Ayúdanos a desenterrar a creadoras ocultas.</p>
        </header>
        
        <div class="box-panel" style="margin-top: 24px; max-width: 48rem;">
            <form onsubmit="event.preventDefault(); alert('¡Gracias! La artista ha sido enviada al comité curatorial.');" style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <label class="label-caps text-pale-gold" style="display: block; margin-bottom: 8px;">Nombre de la Artista</label>
                    <input type="text" placeholder="Ej. Remedios Varo" class="form-input" required>
                </div>
                
                <div class="grid grid-cols-1 md-grid-cols-2">
                    <div>
                        <label class="label-caps text-pale-gold" style="display: block; margin-bottom: 8px;">Periodo / Época</label>
                        <input type="text" placeholder="Ej. Surrealismo" class="form-input" required>
                    </div>
                    <div>
                        <label class="label-caps text-pale-gold" style="display: block; margin-bottom: 8px;">País / Región</label>
                        <input type="text" placeholder="Ej. España / México" class="form-input" required>
                    </div>
                </div>
                
                <div>
                    <label class="label-caps text-pale-gold" style="display: block; margin-bottom: 8px;">Su Historia Oculta (Breve)</label>
                    <textarea rows="4" placeholder="¿Por qué su obra fue olvidada o atribuida a otros?" class="form-textarea" required></textarea>
                </div>
                
                <div>
                    <label class="label-caps text-pale-gold" style="display: block; margin-bottom: 8px;">Enlace de Referencia</label>
                    <input type="url" placeholder="https://" class="form-input">
                </div>
                
                <button type="submit" class="btn-submit label-caps" style="margin-top: 16px; padding: 16px; font-size: 14px;">
                    <span class="material-symbols-outlined" data-icon="send">send</span>
                    ENVIAR EXPEDIENTE
                </button>
            </form>
        </div>
    `;
}

function renderArtistDetail(artist) {
    const artworksHtml = artist.artworks.map(art => `
        <div class="artwork-card">
            <div class="artwork-img-wrapper">
                <img src="${art.img}" alt="${art.title}" class="artist-img">
            </div>
            <div class="artwork-details">
                <h4 class="label-caps artwork-title">${art.title}</h4>
                <p style="font-size: 12px; color: var(--technical-olive); margin-top: 4px;">${art.year}</p>
            </div>
        </div>
    `).join('');

    mainContent.innerHTML = `
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-overlay absolute inset-0"></div>
            <img src="${artist.heroImg}" alt="${artist.name}" class="absolute inset-0 hero-img" style="object-position: ${artist.heroPosition || 'center 20%'};">
        </section>

        <!-- Artist Header -->
        <header class="page-header" style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end; gap: 16px;">
            <div>
                <span class="label-caps" style="display: inline-block; padding: 4px 8px; background-color: var(--technical-olive); color: var(--ink-black); margin-bottom: 8px;">${artist.index} — ${artist.tag}</span>
                <h1 class="page-title font-headline text-primary text-uppercase">${artist.name}</h1>
            </div>
            <div style="display: flex; gap: 8px;">
                <button style="width: 40px; height: 40px; border: 2px solid var(--technical-olive); background: transparent; color: var(--pale-gold); display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined">bookmark</span></button>
                <button style="width: 40px; height: 40px; border: 2px solid var(--technical-olive); background: transparent; color: var(--pale-gold); display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined">share</span></button>
            </div>
        </header>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md-grid-cols-12" style="margin-top: 32px;">
            <!-- Biography Column -->
            <article class="col-span-8 flex-col gap-6" style="display: flex;">
                <div class="box-panel">
                    <h2 class="font-headline text-uppercase" style="font-size: 24px; color: var(--secondary); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined text-accent-yellow">history_edu</span>
                        Biografía
                    </h2>
                    <p style="font-size: 18px; margin-bottom: 16px;">${artist.bio}</p>
                    <p style="font-size: 16px; color: var(--text-variant);">${artist.bio2}</p>
                </div>
                
                <!-- Featured Works Grid -->
                <div>
                    <h3 class="font-headline text-primary text-uppercase" style="font-size: 24px; margin-bottom: 16px; border-bottom: 1px solid var(--technical-olive); padding-bottom: 8px;">OBRAS DESTACADAS</h3>
                    <div class="grid grid-cols-1 md-grid-cols-2 gap-4">
                        ${artworksHtml}
                    </div>
                </div>
            </article>

            <!-- Sidebar Info Column -->
            <aside class="col-span-4 flex-col gap-6" style="display: flex;">
                <!-- Hidden History Box -->
                <div class="box-dark">
                    <h3 class="font-headline text-uppercase" style="font-size: 24px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined">visibility_off</span>
                        Historia Oculta
                    </h3>
                    <p style="font-size: 14px; margin-bottom: 16px;">${artist.hiddenHistory}</p>
                    <a href="#" class="label-caps text-accent-yellow" style="display: inline-flex; align-items: center; gap: 4px;">
                        LEER ARCHIVO <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
                    </a>
                </div>

                <!-- SDG 5 Alignment Box -->
                <div class="box-accent relative">
                    <div class="absolute" style="top: 0; right: 0; padding: 8px; opacity: 0.2;">
                        <span class="material-symbols-outlined" style="font-size: 64px; color: var(--tertiary-container);">female</span>
                    </div>
                    <h3 class="label-caps text-uppercase" style="margin-bottom: 8px;">ALINEACIÓN ODS 5</h3>
                    <h4 class="font-headline text-white text-uppercase" style="font-size: 24px; margin-bottom: 8px;">Igualdad de Género</h4>
                    <p style="font-size: 14px; position: relative; z-index: 10;">${artist.odsConnection}</p>
                </div>

                <!-- Tech Specs / Meta -->
                <div style="background-color: var(--ink-black); border: 1px solid var(--technical-olive); padding: 16px;">
                    <h4 class="label-caps text-technical-olive text-uppercase" style="margin-bottom: 12px; border-bottom: 1px solid var(--technical-olive); padding-bottom: 4px;">METADATA</h4>
                    <ul class="metadata-list" style="font-size: 14px; color: var(--pale-gold);">
                        <li><span>PERIODO</span> <span>${artist.meta.periodo}</span></li>
                        <li><span>UBICACIÓN</span> <span>${artist.meta.ubicacion}</span></li>
                        <li><span>TÉCNICA</span> <span>${artist.meta.tecnica}</span></li>
                        <li><span>ESTADO</span> <span class="text-accent-yellow">${artist.meta.estado}</span></li>
                    </ul>
                </div>
            </aside>
        </div>
    `;
}

// Start app
init();
