// Variables globales
let currentGallery = '';
let currentSlideshow = '';
let currentSlideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let currentGame = null; // Almacena el juego actualmente seleccionado
let currentLore = null; // Almacena el elemento de lore actualmente seleccionado

// Configuración de lore - AQUÍ PUEDES AÑADIR NUEVOS ELEMENTOS DE LORE
const loreSistema = [
    {
        id: 'historia_origen',
        titulo: 'Historia del Origen',
        slideshow: [
            {
                type: 'text',
                title: 'En el Principio',
                content: 'Hace eones, cuando las estrellas eran jóvenes y los mundos apenas comenzaban a formarse, una antigua civilización conocida como los Precursores dominaba la galaxia.'
            },
            {
                type: 'text',
                title: 'El Gran Cataclismo',
                content: 'Su ambición desmedida los llevó a crear una tecnología que alteró el tejido mismo del espacio-tiempo, provocando un cataclismo que fragmentó su imperio.'
            },
            {
                type: 'text',
                title: 'El Legado',
                content: 'De sus ruinas nacieron las cartas Aiala, fragmentos de conocimiento y poder que contienen la esencia de su sabiduría perdida.'
            }
        ]
    },
    {
        id: 'cartas_poder',
        titulo: 'Las Cartas de Poder',
        slideshow: [
            {
                type: 'text',
                title: 'Naturaleza Mística',
                content: 'Cada carta Aiala vibra con una energía ancestral, capaz de alterar la realidad según la voluntad de quien las posee.'
            },
            {
                type: 'text',
                title: 'Los Cuatro Elementos',
                content: 'Las cartas se dividen en cuatro arcanos: Fuego (pasión y destrucción), Agua (intuición y cambio), Tierra (estabilidad y crecimiento), y Aire (conocimiento y libertad).'
            },
            {
                type: 'text',
                title: 'El Quinto Elemento',
                content: 'Existe un quinto arcano, el Vacío, que representa el equilibrio entre todos los elementos y el potencial infinito de la creación.'
            }
        ]
    },
    {
        id: 'guardianes',
        titulo: 'Los Guardianes',
        slideshow: [
            {
                type: 'text',
                title: 'Protectores Ancestrales',
                content: 'Tras la caída de los Precursores, surgieron los Guardianes, seres dedicados a proteger el conocimiento de las cartas Aiala.'
            },
            {
                type: 'text',
                title: 'La Orden Secreta',
                content: 'Organizados en una orden secreta, los Guardianes han preservado durante milenios las tradiciones y rituales necesarios para usar las cartas de forma segura.'
            },
            {
                type: 'text',
                title: 'El Juramento',
                content: 'Todo Guardián jura proteger el equilibrio cósmico y evitar que el poder de las cartas sea usado para fines destructivos.'
            }
        ]
    },
    {
        id: 'profecia',
        titulo: 'La Profecía del Retorno',
        slideshow: [
            {
                type: 'text',
                title: 'Las Palabras Antiguas',
                content: 'Las escrituras precursoras hablan de un tiempo en que las cartas volverán a unirse, restaurando el orden perdido en la galaxia.'
            },
            {
                type: 'text',
                title: 'El Elegido',
                content: 'Según la profecía, un ser especial reunirá todas las cartas Aiala y tendrá la sabiduría para usarlas sin repetir los errores del pasado.'
            },
            {
                type: 'text',
                title: 'El Nuevo Amanecer',
                content: 'Cuando llegue ese momento, nacerá una nueva era de prosperidad y conocimiento que se extenderá por toda la galaxia.'
            }
        ]
    },
    {
        id: 'mundos_perdidos',
        titulo: 'Los Mundos Perdidos',
        slideshow: [
            {
                type: 'text',
                title: 'Vestigios del Imperio',
                content: 'Dispersos por la galaxia existen mundos que alguna vez fueron parte del gran imperio Precursor, ahora en ruinas pero llenos de secretos.'
            },
            {
                type: 'text',
                title: 'Aiala Prime',
                content: 'El mundo natal de los Precursores, Aiala Prime, desapareció durante el cataclismo. Se dice que quien lo encuentre obtendrá acceso a la carta maestra.'
            },
            {
                type: 'text',
                title: 'Los Nexos',
                content: 'Ciertos mundos conservan nexos dimensionales que permiten viajar instantáneamente entre sistemas, pero su uso requiere cartas específicas como llave.'
            }
        ]
    }
];

// Configuración de juegos - AQUÍ PUEDES AÑADIR NUEVOS JUEGOS
const juegosSistema = [
    {
        id: 'juego1',
        imagen: 'juego01.png',
        jugadores: '2-4 jugadores',
        duracion: '45-60 minutos',
        dificultad: 'Intermedio',
        resources: [
            'cartas/1.png',
            'cartas/2.png',
            'cartas/3.png',
            'cartas/4.png',
            'cartas/5.png',
            'cartas/6.png',
            'cartas/7.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'text',
                    title: 'Preparación del Juego',
                    content: 'Cada jugador recibe una nave nodriza y recursos iniciales. Coloca el tablero galáctico en el centro.'
                },
                {
                    type: 'text',
                    title: 'Objetivo',
                    content: 'Sé el primero en controlar 3 sistemas clave simultáneamente para ganar la partida.'
                },
                {
                    type: 'text',
                    title: 'Secuencia de Turno',
                    content: 'En tu turno: 1) Explora nuevos sistemas, 2) Extrae recursos, 3) Construye flotas, 4) Mueve y ataca.'
                }
            ],
            examples: [
                {
                    type: 'image-text',
                    title: 'Ejemplo: Exploración',
                    image: 'juegos/juego01.png',
                    content: 'Usa tu nave exploradora para descubrir un sistema rico en cristales. Esto te dará ventaja en construcción.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Combate',
                    content: 'Tu flota de 3 naves ataca un sistema enemigo defendido por 2 naves. Tira dados y suma bonificaciones.'
                },
                {
                    type: 'image-text',
                    title: 'Ejemplo: Diplomacia',
                    image: 'cartas/1.png',
                    content: 'Forma una alianza temporal con otro jugador para defenderte de un ataque conjunto.'
                }
            ]
        }
    },
    {
        id: 'juego2',
        imagen: 'juego02.png',
        jugadores: '2-5 jugadores',
        duracion: '30-45 minutos',
        dificultad: 'Fácil',
        resources: [
            'cartas/8.png',
            'cartas/9.png',
            'cartas/10.png',
            'cartas/11.png',
            'cartas/12.png',
            'cartas/13.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'text',
                    title: 'Preparación del Mercado',
                    content: 'Cada jugador recibe dinero inicial y una carreta. Coloca las cartas de mercancías boca arriba.'
                },
                {
                    type: 'text',
                    title: 'Objetivo del Comerciante',
                    content: 'Acumula la mayor cantidad de dinero comprando barato y vendiendo caro.'
                },
                {
                    type: 'text',
                    title: 'Acciones Disponibles',
                    content: 'En tu turno puedes: Comprar mercancías, Vender en mercados, Transportar entre ciudades.'
                }
            ],
            examples: [
                {
                    type: 'image-text',
                    title: 'Ejemplo: Especulación',
                    image: 'juegos/juego02.png',
                    content: 'Compra trigo a 2 monedas cuando hay abundancia, luego véndelo a 5 monedas en temporada de escasez.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Contratos',
                    content: 'Acepta un contrato para entregar 3 especias en la capital. Te dará ingresos garantizados.'
                },
                {
                    type: 'image-text',
                    title: 'Ejemplo: Rutas',
                    image: 'cartas/2.png',
                    content: 'Establece una ruta comercial entre el puerto (pescado barato) y la montaña (pescado caro).'
                }
            ]
        }
    },
    {
        id: 'juego3',
        imagen: 'juego03.png',
        jugadores: '1-4 jugadores',
        duracion: '60-90 minutos',
        dificultad: 'Avanzado',
        resources: [
            'cartas/14.png',
            'cartas/15.png',
            'cartas/16.png',
            'cartas/17.png',
            'cartas/18.png',
            'cartas/19.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'text',
                    title: 'Creación de Héroes',
                    content: 'Cada jugador elige un héroe con habilidades únicas: Guerrero, Mago, Ladrón o Clérigo.'
                },
                {
                    type: 'text',
                    title: 'Exploración de Mazmorras',
                    content: 'Revela habitaciones gradualmente. Cada una puede contener tesoros, enemigos o trampas.'
                },
                {
                    type: 'text',
                    title: 'Sistema de Combate',
                    content: 'Tira dados de ataque, suma modificadores de armas y habilidades. Gestiona vida y maná.'
                }
            ],
            examples: [
                {
                    type: 'text',
                    title: 'Ejemplo: Combate Táctico',
                    content: 'El Guerrero atrae enemigos, mientras el Mago lanza hechizos desde atrás y el Clérigo cura.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Búsqueda de Tesoros',
                    content: 'El Ladrón desactiva una trampa y encuentra una llave que abre el cofre del tesoro oculto.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Jefe Final',
                    content: 'Coordinad ataques especiales para derrotar al Dragon. Usad pociones sabiamente.'
                }
            ]
        }
    },
    {
        id: 'juego4',
        imagen: 'juego04.png',
        jugadores: '2-4 jugadores',
        duracion: '45-75 minutos',
        dificultad: 'Intermedio',
        resources: [
            'cartas/20.png',
            'cartas/21.png',
            'cartas/22.png',
            'cartas/23.png',
            'cartas/24.png',
            'cartas/25.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'text',
                    title: 'Fundación de la Ciudad',
                    content: 'Comienza con un terreno vacío y fondos iniciales. Planifica la disposición de tu ciudad.'
                },
                {
                    type: 'text',
                    title: 'Tipos de Edificios',
                    content: 'Residencial (población), Comercial (dinero), Industrial (recursos), Servicios (bonificaciones).'
                },
                {
                    type: 'text',
                    title: 'Sistema de Puntuación',
                    content: 'Gana puntos por eficiencia, diseño urbano, satisfacción ciudadana y crecimiento económico.'
                }
            ],
            examples: [
                {
                    type: 'text',
                    title: 'Ejemplo: Distrito Residencial',
                    content: 'Coloca casas cerca de parques y colegios. Los ciudadanos felices pagan más impuestos.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Zona Industrial',
                    content: 'Sitúa fábricas lejos de residencias pero cerca de carreteras para transporte eficiente.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Centro Comercial',
                    content: 'Construye tiendas en el centro, conectadas con transporte público para máximo beneficio.'
                }
            ]
        }
    },
    {
        id: 'juego5',
        imagen: 'juego05.png',
        jugadores: '3-6 jugadores',
        duracion: '30-50 minutos',
        dificultad: 'Fácil',
        resources: [
            'cartas/26.png',
            'cartas/27.png',
            'cartas/28.png',
            'cartas/29.png',
            'cartas/30.png',
            'cartas/31.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'text',
                    title: 'Caso del Misterio',
                    content: 'Se ha cometido un crimen. Cada detective tiene pistas secretas. Trabajad juntos para resolverlo.'
                },
                {
                    type: 'text',
                    title: 'Compartir Información',
                    content: 'Da pistas sin revelar detalles exactos. Usa frases como "vi algo sospechoso" en lugar de datos específicos.'
                },
                {
                    type: 'text',
                    title: 'Proceso de Deducción',
                    content: 'Discutid teorías, votad por el sospechoso más probable. Si acertáis todos, ¡ganáis juntos!'
                }
            ],
            examples: [
                {
                    type: 'text',
                    title: 'Ejemplo: Pista Temporal',
                    content: 'Tu carta dice "9:15 PM". Comparte: "El crimen no pudo ocurrir muy tarde en la noche".'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Pista de Ubicación',
                    content: 'Tu carta menciona "biblioteca". Di: "El lugar del crimen está relacionado con conocimiento".'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Deducción',
                    content: 'Combinando pistas: "Si fue temprano y en la biblioteca, solo el bibliotecario tenía acceso".'
                }
            ]
        }
    },
    {
        id: 'juego6',
        imagen: 'juego06.png',
        jugadores: '2-6 jugadores',
        duracion: '20-35 minutos',
        dificultad: 'Fácil',
        resources: [
            'cartas/32.png',
            'cartas/33.png',
            'cartas/34.png',
            'cartas/35.png',
            'cartas/36.png',
            'cartas/37.png'
        ],
        slideshow: {
            instructions: [
                {
                    type: 'image-text',
                    title: 'Preparación de la Carrera',
                    image: 'juegos/juego06.png',
                    content: 'Cada piloto recibe una nave y un mazo de cartas de acción. Coloca obstáculos en el circuito.'
                },
                {
                    type: 'text',
                    title: 'Mecánica de Movimiento',
                    content: 'Juega cartas de velocidad para avanzar. Cartas más altas = más velocidad pero más riesgo.'
                },
                {
                    type: 'image-text',
                    title: 'Cartas de Acción',
                    image: 'cartas/4.png',
                    content: 'Usa cartas especiales para sabotear rivales, esquivar obstáculos o conseguir turbo.'
                }
            ],
            examples: [
                {
                    type: 'text',
                    title: 'Ejemplo: Adelantamiento',
                    content: 'Usa "Turbo" para adelantar al líder, pero guarda "Escudo" por si te contraatacan.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Sabotaje',
                    content: 'Lanza "Misil" al piloto que va primero para ralentizarlo y tomar la delantera.'
                },
                {
                    type: 'text',
                    title: 'Ejemplo: Supervivencia',
                    content: 'Hay un campo de asteroides. Usa "Maniobra Evasiva" para pasarlo sin daño.'
                }
            ]
        }
    }
];

// Datos para las galerías
const galleryData = {
    gallery1: [], // Se cargará dinámicamente (cartas)
    gallery2: [], // Se cargará desde juegosSistema (juegos)
    lore: [] // Se cargará desde loreSistema (elementos de lore)
};

// Función para cargar y ordenar los juegos alfabéticamente
function loadJuegos() {
    // Crear una copia del array de juegos y ordenarla alfabéticamente por ID
    const juegosSorted = [...juegosSistema].sort((a, b) => {
        return a.id.localeCompare(b.id, 'es', { sensitivity: 'base' });
    });
    
    galleryData.gallery2 = juegosSorted;
}

// Función para cargar los elementos de lore alfabéticamente
function loadLore() {
    // Crear una copia del array de lore y ordenarla alfabéticamente por título
    const loreSorted = [...loreSistema].sort((a, b) => {
        return a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' });
    });
    
    galleryData.lore = loreSorted;
}

// Función para cargar dinámicamente las imágenes de la carpeta cartas
async function loadCartasImages() {
    try {
        // Lista de extensiones de imagen soportadas
        const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
        const images = [];
        
        // Intentar cargar imágenes numeradas (del 1 al 200 para cubrir un rango amplio)
        for (let i = 1; i <= 100; i++) {
            for (const ext of imageExtensions) {
                const imagePath = `cartas/${i}.${ext}`;
                try {
                    // Verificar si la imagen existe intentando cargarla
                    await new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => {
                            images.push(`${i}.${ext}`);
                            resolve();
                        };
                        img.onerror = () => reject();
                        img.src = imagePath;
                    });
                    break; // Si encontramos la imagen con esta extensión, no buscar más extensiones para este número
                } catch (error) {
                    // Imagen no existe, continuar con la siguiente extensión
                    continue;
                }
            }
        }
        
        // Ordenar las imágenes numéricamente
        images.sort((a, b) => {
            const numA = parseInt(a.split('.')[0]);
            const numB = parseInt(b.split('.')[0]);
            return numA - numB;
        });
        
        galleryData.gallery1 = images;
        
    } catch (error) {
        console.log('Error cargando imágenes:', error);
        // Fallback: usar nombres predefinidos si hay error
        galleryData.gallery1 = [];
    }
}

// Función para mostrar páginas
function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Función para mostrar la página de inicio
function showHome() {
    showPage('homePage');
    currentGallery = '';
}

// Función para mostrar una galería
async function showGallery(galleryId) {
    currentGallery = galleryId;
    
    // Si es gallery1, cargar imágenes dinámicamente
    if (galleryId === 'gallery1') {
        await loadCartasImages();
    } else if (galleryId === 'gallery2') {
        // Si es gallery2, cargar y ordenar juegos
        loadJuegos();
    } else if (galleryId === 'lore') {
        // Si es lore, cargar elementos de lore
        loadLore();
    }
    
    generateGalleryItems(galleryId);
    showPage(galleryId + 'Page');
}

// Función para generar elementos de galería
function generateGalleryItems(galleryId) {
    const galleryContainer = document.getElementById(galleryId);
    const items = galleryData[galleryId];
    
    galleryContainer.innerHTML = '';
    
    if (galleryId === 'gallery1') {
        // Para gallery1, mostrar imágenes de cartas (sin títulos)
        items.forEach(imageName => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item gallery-image-item';
            
            const img = document.createElement('img');
            img.src = `cartas/${imageName}`;
            img.alt = imageName;
            
            galleryItem.appendChild(img);
            galleryItem.onclick = () => showImageModal(imageName);
            galleryContainer.appendChild(galleryItem);
        });
    } else if (galleryId === 'gallery2') {
        // Para gallery2, mostrar juegos con imágenes y títulos (con overlay)
        items.forEach(juego => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item gallery-image-item gallery-game-item';
            
            const img = document.createElement('img');
            img.src = `juegos/${juego.imagen}`;
            img.alt = juego.id;
            
            const titleOverlay = document.createElement('div');
            titleOverlay.className = 'image-title-overlay';
            
            const titleSpan = document.createElement('span');
            titleSpan.textContent = juego.id.toUpperCase();
            titleOverlay.appendChild(titleSpan);
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(titleOverlay);
            galleryItem.onclick = () => showDetail(juego.id, juego.id);
            galleryContainer.appendChild(galleryItem);
        });
    } else if (galleryId === 'lore') {
        // Para lore, mostrar botones de texto que abren directamente las diapositivas
        items.forEach(loreItem => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item gallery-lore-item';
            
            const titleElement = document.createElement('span');
            titleElement.textContent = loreItem.titulo.toUpperCase();
            titleElement.className = 'lore-title';
            
            galleryItem.appendChild(titleElement);
            galleryItem.onclick = () => openLoreSlideshow(loreItem.id);
            galleryContainer.appendChild(galleryItem);
        });
    }
}

// Función para mostrar la página de detalles
function showDetail(itemId, itemTitle) {
    document.getElementById('detailTitle').textContent = itemTitle.toUpperCase();
    
    // Buscar la información específica del juego y almacenarla
    currentGame = juegosSistema.find(j => j.id === itemId);
    console.log('Juego seleccionado:', currentGame); // Debug
    
    const detailContent = document.getElementById('detailContent');
    if (detailContent && currentGame) {
        // Generar contenido simplificado del juego
        detailContent.innerHTML = `
            <div class="game-detail-simple">
                <div class="game-image-container">
                    <img src="juegos/${currentGame.imagen}" alt="${currentGame.id}" class="game-detail-image">
                </div>
                <div class="game-quick-info">
                    <span>${currentGame.jugadores}</span> • <span>${currentGame.duracion}</span> • <span>${currentGame.dificultad}</span>
                </div>
                <div class="detail-buttons">
                    <button class="detail-button" onclick="openSlideshow('instructions')">Instrucciones</button>
                    <button class="detail-button" onclick="openSlideshow('examples')">Ejemplos</button>
                    <button class="detail-button" onclick="openSlideshow('resources')">Recursos</button>
                </div>
            </div>
        `;
    } else {
        // Fallback si no se encuentra el juego
        detailContent.innerHTML = `
            <div class="detail-buttons">
                <button class="detail-button" onclick="openSlideshow('instructions')">Instrucciones</button>
                <button class="detail-button" onclick="openSlideshow('examples')">Ejemplos</button>
                <button class="detail-button" onclick="openSlideshow('resources')">Recursos</button>
            </div>
        `;
    }
    
    showPage('detailPage');
}

// Función para mostrar la página de detalles de lore
function showLoreDetail(loreId, loreTitle) {
    document.getElementById('detailTitle').textContent = loreTitle.toUpperCase();
    
    // Buscar la información específica del lore y almacenarla
    currentLore = loreSistema.find(l => l.id === loreId);
    console.log('Lore seleccionado:', currentLore); // Debug
    
    const detailContent = document.getElementById('detailContent');
    if (detailContent && currentLore) {
        // Generar contenido simplificado del lore
        detailContent.innerHTML = `
            <div class="game-detail-simple">
                <div class="lore-info">
                    <h3>${currentLore.titulo}</h3>
                    <p>Descubre los secretos y la historia de este elemento del universo Aiala.</p>
                </div>
                <div class="detail-buttons">
                    <button class="detail-button" onclick="openLoreSlideshow('${currentLore.id}')">Ver Historia</button>
                </div>
            </div>
        `;
    } else {
        // Fallback si no se encuentra el lore
        detailContent.innerHTML = `
            <div class="detail-buttons">
                <button class="detail-button" onclick="openLoreSlideshow('${loreId}')">Ver Historia</button>
            </div>
        `;
    }
    
    showPage('detailPage');
}

// Función para mostrar imagen ampliada
function showImageModal(imageName) {
    // Crear el modal de imagen si no existe
    let imageModal = document.getElementById('imageModal');
    if (!imageModal) {
        imageModal = document.createElement('div');
        imageModal.id = 'imageModal';
        imageModal.className = 'image-modal';
        imageModal.innerHTML = `
            <div class="image-modal-content">
                <img id="modalImage" src="" alt="">
            </div>
        `;
        document.body.appendChild(imageModal);
        
        // Cerrar modal al hacer clic
        imageModal.onclick = closeImageModal;
    }
    
    // Mostrar la imagen
    const modalImage = document.getElementById('modalImage');
    
    // Si imageName ya contiene la ruta completa, usarla directamente
    if (imageName.includes('/')) {
        modalImage.src = imageName;
    } else {
        // Si solo es el nombre del archivo, añadir la carpeta cartas
        modalImage.src = `cartas/${imageName}`;
    }
    
    modalImage.alt = imageName;
    imageModal.classList.add('active');
}

// Función para cerrar imagen ampliada
function closeImageModal() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.classList.remove('active');
    }
}

// Función para volver a la galería
function goBackToGallery() {
    if (currentGallery) {
        showGallery(currentGallery);
    } else {
        showHome();
    }
}

// Función para abrir presentación de diapositivas
function openSlideshow(type) {
    currentSlideshow = type;
    currentSlideIndex = 0;
    
    if (type === 'resources') {
        // Para recursos, mostrar galería de imágenes
        generateResourceGallery();
    } else {
        // Para instructions y examples, mostrar diapositivas normales
        generateSlides(type);
    }
    
    document.getElementById('slideshow').classList.add('active');
    setupTouchEvents();
}

// Función para abrir presentación de diapositivas de lore
function openLoreSlideshow(loreId) {
    currentSlideshow = 'lore';
    currentSlideIndex = 0;
    
    // Buscar el elemento de lore específico
    const loreData = loreSistema.find(l => l.id === loreId);
    
    if (loreData) {
        generateLoreSlides(loreData.slideshow);
    } else {
        // Fallback si no se encuentra el lore
        generateLoreSlides([
            {
                type: 'text',
                title: 'Contenido no disponible',
                content: 'No hay información disponible para este elemento de lore.'
            }
        ]);
    }
    
    document.getElementById('slideshow').classList.add('active');
    setupTouchEvents();
}

// Función para cerrar presentación de diapositivas
function closeSlideshow() {
    document.getElementById('slideshow').classList.remove('active');
    removeTouchEvents();
}

// Función para generar galería de recursos
function generateResourceGallery() {
    const slideContainer = document.getElementById('slideContainer');
    
    // Obtener las imágenes de recursos del juego actual
    let resourceImages = [];
    if (currentGame && currentGame.resources) {
        resourceImages = currentGame.resources;
        console.log('Recursos encontrados:', resourceImages); // Debug
    } else {
        console.log('No se encontraron recursos o currentGame:', currentGame); // Debug
    }
    
    slideContainer.innerHTML = '';
    
    if (resourceImages.length > 0) {
        // Crear una sola "diapositiva" que contenga la galería vertical de 3 columnas
        const gallerySlide = document.createElement('div');
        gallerySlide.className = 'slide active resource-gallery-slide-vertical';
        
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'resource-gallery-vertical';
        
        // Crear elementos de galería como en AIALATECA
        resourceImages.forEach((imagePath) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'resource-gallery-item-vertical';
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = 'Recurso del juego';
            img.onclick = () => showImageModal(imagePath); // Pasar la ruta completa
            
            galleryItem.appendChild(img);
            galleryContainer.appendChild(galleryItem);
        });
        
        gallerySlide.appendChild(galleryContainer);
        slideContainer.appendChild(gallerySlide);
    } else {
        // Fallback si no hay recursos
        const fallbackSlide = document.createElement('div');
        fallbackSlide.className = 'slide active';
        fallbackSlide.innerHTML = `
            <h3>Recursos no disponibles</h3>
            <p>No hay recursos específicos disponibles para este juego.</p>
        `;
        slideContainer.appendChild(fallbackSlide);
    }
}

// Función para generar diapositivas
function generateSlides(type) {
    const slideContainer = document.getElementById('slideContainer');
    
    // Usar las diapositivas del juego actual, o fallback genérico si no hay juego seleccionado
    let slides = [];
    if (currentGame && currentGame.slideshow && currentGame.slideshow[type]) {
        slides = currentGame.slideshow[type];
    } else {
        // Fallback genérico si no hay contenido específico
        slides = [
            {
                type: 'text',
                title: 'Contenido no disponible',
                content: 'No hay información específica disponible para esta sección.'
            }
        ];
    }
    
    slideContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        if (index === 0) slideElement.classList.add('active');
        
        if (slide.type === 'text') {
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <p>${slide.content}</p>
            `;
        } else if (slide.type === 'image-text') {
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <img src="${slide.image}" alt="${slide.title}">
                <p>${slide.content}</p>
            `;
        }
        
        slideContainer.appendChild(slideElement);
    });
}

// Función para generar diapositivas de lore
function generateLoreSlides(slides) {
    const slideContainer = document.getElementById('slideContainer');
    
    slideContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        if (index === 0) slideElement.classList.add('active');
        
        if (slide.type === 'text') {
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <p>${slide.content}</p>
            `;
        } else if (slide.type === 'image-text') {
            slideElement.innerHTML = `
                <h3>${slide.title}</h3>
                <img src="${slide.image}" alt="${slide.title}">
                <p>${slide.content}</p>
            `;
        }
        
        slideContainer.appendChild(slideElement);
    });
}

// Función para ir a la siguiente diapositiva
function nextSlide() {
    const slides = document.querySelectorAll('#slideContainer .slide');
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Función para ir a la diapositiva anterior
function prevSlide() {
    const slides = document.querySelectorAll('#slideContainer .slide');
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
    slides[currentSlideIndex].classList.add('active');
}

// Configurar eventos táctiles para swipe
function setupTouchEvents() {
    const slideContainer = document.getElementById('slideContainer');
    
    slideContainer.addEventListener('touchstart', handleTouchStart);
    slideContainer.addEventListener('touchend', handleTouchEnd);
}

// Remover eventos táctiles
function removeTouchEvents() {
    const slideContainer = document.getElementById('slideContainer');
    
    slideContainer.removeEventListener('touchstart', handleTouchStart);
    slideContainer.removeEventListener('touchend', handleTouchEnd);
}

// Manejar inicio del toque
function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

// Manejar fin del toque
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

// Manejar gesto de swipe
function handleSwipe() {
    const swipeThreshold = 50; // Umbral mínimo para considerar un swipe
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe hacia la derecha - diapositiva anterior
            prevSlide();
        } else {
            // Swipe hacia la izquierda - siguiente diapositiva
            nextSlide();
        }
    }
}

// Inicialización cuando la página carga
document.addEventListener('DOMContentLoaded', async function() {
    // Asegurar que se muestre la página de inicio
    showHome();
    
    // Cargar las imágenes de cartas al inicio para acelerar la navegación
    await loadCartasImages();
    
    // Cargar y ordenar los juegos
    loadJuegos();
    
    // Prevenir el zoom en dispositivos móviles
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    
    // Prevenir el doble tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// Prevenir el comportamiento predeterminado del scroll en el canvas principal
document.getElementById('mainCanvas').addEventListener('touchmove', function(event) {
    const target = event.target;
    const gallery = target.closest('.gallery');
    
    // Solo permitir scroll dentro de las galerías
    if (!gallery) {
        event.preventDefault();
    }
}, { passive: false });
