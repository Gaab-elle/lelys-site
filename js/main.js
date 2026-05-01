const LANGUAGE_STORAGE_KEY = "lelys-language";
const SUPPORTED_LANGUAGES = ["pt", "en", "es"];
let currentLanguage = "pt";

const TRANSLATIONS = {
  pt: {
    "meta.title": "Le Lys Espaço",
    "nav.about": "Sobre",
    "nav.spaces": "Espaços",
    "nav.gallery": "Galeria",
    "nav.contact": "Contato",
    "nav.quote": "Fazer um Orçamento",
    "nav.languageSelector": "Seletor de idioma",
    "hero.kicker": "Le Lys Espaço",
    "hero.titleImageAlt": "Vem ser Le Lys",
    "hero.description": "Aqui, você encontra o espaço ideal para o seu evento: salões rústicos, modernos e elegantes, e ainda contamos com um espaço infantil dedicado para tornar cada momento ainda mais memorável.",
    "hero.cta": "CONHEÇA NOSSOS ESPAÇOS",
    "hero.coupleAlt": "Casal celebrando",
    "hero.carouselAria": "Tipos de eventos",
    heroCarouselItems: ["CASAMENTOS", "ANIVERSÁRIOS", "BATIZADOS", "FORMATURAS", "15 ANOS", "CORPORATIVO", "CHÁ DE BEBÊ"],
    "about.eyebrow": "Nós Criamos · Nós Celebramos",
    "about.title": "Realizamos Sonhos",
    "about.text": "A Le Lys Espaço tem mais de 12 anos realizando eventos inesquecíveis em Belém do Pará. Criada por especialistas em decoração, reunimos em quatro espaços únicos — o elegante <strong>MAISON</strong>, o rústico <strong>JARDIN</strong>, o sofisticado <strong>VENTURA</strong> e o mágico <strong>EBA</strong> — tudo que você precisa para celebrar com estrutura e muito cuidado. Da escolha do espaço ao buffet e decoração, nossa equipe está aqui por você.",
    "maison.title": "Le Lys Maison<br>O elegante",
    "maison.text1": "O Le Lys Maison é o cenário ideal para quem busca refinamento em cada detalhe. Com capacidade para até 150 pessoas e uma atmosfera de elegância atemporal, este espaço foi pensado para celebrações que merecem o melhor — do primeiro olhar ao último brinde.",
    "maison.text2": "Equipado com ar-condicionado, som e iluminação profissional e decoração adaptada para seu gosto, o Maison entrega estrutura completa para que você celebre com tranquilidade e sofisticação.",
    "maison.text3": "<strong>Ideal para:</strong> casamentos, formaturas, aniversários, eventos corporativos e muito mais.",
    "ventura.eyebrow": "Tudo Está Nos Detalhes",
    "ventura.title": "Le Lys Ventura<br>O sofisticado",
    "ventura.text1": "O Le Lys Ventura combina modernidade e sofisticação para quem quer um evento com personalidade marcante. Com capacidade para até 120 pessoas, seu ambiente versátil e imponente se adapta a diferentes estilos de celebração sem abrir mão do requinte.",
    "ventura.text2": "Com ar-condicionado, cozinha completa, som e iluminação profissional e decoração inclusa, o Ventura oferece toda a estrutura para que cada detalhe aconteça com excelência.",
    "ventura.text3": "<strong>Ideal para:</strong> formaturas, aniversários de 15 anos, casamentos, eventos corporativos e muito mais.",
    "jardin.title": "Le Lys Jardin<br>O rústico",
    "jardin.text1": "O Le Lys Jardin traz o charme do rústico com todo o conforto que o seu evento merece. Com capacidade para até 120 pessoas, seu ambiente acolhedor e cheio de personalidade cria aquela atmosfera calorosa e única que transforma qualquer celebração em uma experiência especial.",
    "jardin.text2": "Conta com ar-condicionado, cozinha completa, som e iluminação profissional e decoração inclusa — tudo pronto para que o único trabalho seu seja o de celebrar.",
    "jardin.text3": "<strong>Ideal para:</strong> aniversários, batizados, confraternizações, eventos corporativos e muito mais.",
    "eba.title": "EBA Buffet Infantil<br>O mágico",
    "eba.text1": "O EBA Buffet Infantil foi pensado para transformar aniversários em uma experiência divertida, colorida e inesquecível. Um espaço encantador, preparado para receber crianças e famílias com conforto e segurança.",
    "eba.text2": "Com estrutura completa, decoração temática e ambientes planejados para celebrar cada detalhe, o EBA é o cenário ideal para festas cheias de alegria.",
    "eba.text3": "<strong>Ideal para:</strong> aniversários infantis, mesversários, festas temáticas e celebrações em família.",
    "common.visitSpace": "VISITAR ESPAÇO",
    "gallery.title": "Nossa Galeria",
    "gallery.text": "Um olhar sobre os momentos mágicos que tivemos o privilégio de criar para nossos clientes.",
    "gallery.filtersAria": "Filtrar galeria por espaço",
    "gallery.filterMaison": "MAISON",
    "gallery.filterJardin": "JARDIN",
    "gallery.filterVentura": "VENTURA",
    "gallery.filterEba": "EBA",
    "gallery.prevAria": "Mostrar imagens anteriores",
    "gallery.nextAria": "Mostrar mais imagens",
    "gallery.closeAria": "Fechar imagem",
    "gallery.lightboxAlt": "Imagem ampliada da galeria",
    "gallery.space.maison": "Maison",
    "gallery.space.jardin": "Jardin",
    "gallery.space.ventura": "Ventura",
    "gallery.space.eba": "EBA",
    "gallery.mediaAria": "Galeria {space}",
    "contact.eyebrow": "Prontos? Vamos Começar",
    "contact.title": "Vamos Planejar<br>Seu Dia,<br>Do Seu Jeito.",
    "contact.visitBtn": "VENHA NOS VISITAR",
    "contact.quoteBtn": "FAÇA UM ORÇAMENTO",
    "contact.address": "Ao lado do Itaú (Doca) - R. Boaventura da Silva, 414 - Reduto, Belém - PA, 66053-050",
    "contact.mapTitle": "Mapa da localização Le Lys Espaço",
    "footer.quote": "Nossos planejadores vão deixar seu grande dia ainda mais inesquecível.",
    "footer.about": "Sobre",
    "footer.services": "Espaços",
    "footer.gallery": "Galeria",
    "footer.contact": "Contato",
    "footer.privacy": "Privacidade",
    "footer.copy": "© 2026 Le Lys Espaço. Todos os direitos reservados."
  },
  en: {
    "meta.title": "Le Lys Venue",
    "nav.about": "About",
    "nav.spaces": "Venues",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.quote": "Request a Quote",
    "nav.languageSelector": "Language selector",
    "hero.kicker": "Le Lys Venue",
    "hero.titleImageAlt": "Join Le Lys",
    "hero.description": "Here, you will find the ideal venue for your event: rustic, modern, and elegant halls. We also offer a dedicated kids' area to make every moment even more memorable.",
    "hero.cta": "DISCOVER OUR VENUES",
    "hero.coupleAlt": "Couple celebrating",
    "hero.carouselAria": "Event types",
    heroCarouselItems: ["WEDDINGS", "BIRTHDAYS", "BAPTISMS", "GRADUATIONS", "SWEET 15", "CORPORATE", "BABY SHOWER"],
    "about.eyebrow": "We Create · We Celebrate",
    "about.title": "We Build Dreams",
    "about.text": "Le Lys Venue has over 12 years of experience creating unforgettable events in Belém, Pará. Founded by decor specialists, we bring together four unique spaces — elegant <strong>MAISON</strong>, rustic <strong>JARDIN</strong>, sophisticated <strong>VENTURA</strong>, and magical <strong>EBA</strong> — everything you need to celebrate with structure and care. From choosing the venue to buffet and decor, our team is here for you.",
    "maison.title": "Le Lys Maison<br>The Elegant One",
    "maison.text1": "Le Lys Maison is the ideal setting for those seeking refinement in every detail. With capacity for up to 150 guests and a timeless elegant atmosphere, this venue is designed for celebrations that deserve the best — from the first look to the final toast.",
    "maison.text2": "Equipped with air conditioning, professional sound and lighting, and decor tailored to your taste, Maison offers complete structure so you can celebrate with comfort and sophistication.",
    "maison.text3": "<strong>Perfect for:</strong> weddings, graduations, birthdays, corporate events, and much more.",
    "ventura.eyebrow": "Everything Is in the Details",
    "ventura.title": "Le Lys Ventura<br>The Sophisticated One",
    "ventura.text1": "Le Lys Ventura combines modern style and sophistication for those who want an event with a strong personality. With capacity for up to 120 guests, its versatile and striking atmosphere adapts to different celebration styles without giving up elegance.",
    "ventura.text2": "With air conditioning, full kitchen, professional sound and lighting, and included decor, Ventura delivers complete infrastructure for every detail to happen with excellence.",
    "ventura.text3": "<strong>Perfect for:</strong> graduations, sweet 15 parties, weddings, corporate events, and more.",
    "jardin.title": "Le Lys Jardin<br>The Rustic One",
    "jardin.text1": "Le Lys Jardin brings rustic charm with all the comfort your event deserves. With capacity for up to 120 guests, its welcoming and personality-filled atmosphere creates a warm and unique experience for any celebration.",
    "jardin.text2": "It features air conditioning, full kitchen, professional sound and lighting, and included decor — everything ready so your only task is to celebrate.",
    "jardin.text3": "<strong>Perfect for:</strong> birthdays, baptisms, gatherings, corporate events, and much more.",
    "eba.title": "EBA Kids Buffet<br>The Magical One",
    "eba.text1": "EBA Kids Buffet was designed to turn birthdays into a fun, colorful, and unforgettable experience. A charming venue prepared to welcome children and families with comfort and safety.",
    "eba.text2": "With complete infrastructure, themed decor, and spaces planned to celebrate every detail, EBA is the perfect stage for joyful parties.",
    "eba.text3": "<strong>Perfect for:</strong> kids' birthdays, monthly celebrations, themed parties, and family events.",
    "common.visitSpace": "VISIT VENUE",
    "gallery.title": "Our Gallery",
    "gallery.text": "A look at the magical moments we had the privilege to create for our clients.",
    "gallery.filtersAria": "Filter gallery by venue",
    "gallery.filterMaison": "MAISON",
    "gallery.filterJardin": "JARDIN",
    "gallery.filterVentura": "VENTURA",
    "gallery.filterEba": "EBA",
    "gallery.prevAria": "Show previous images",
    "gallery.nextAria": "Show more images",
    "gallery.closeAria": "Close image",
    "gallery.lightboxAlt": "Enlarged gallery image",
    "gallery.space.maison": "Maison",
    "gallery.space.jardin": "Jardin",
    "gallery.space.ventura": "Ventura",
    "gallery.space.eba": "EBA",
    "gallery.mediaAria": "{space} gallery",
    "contact.eyebrow": "Ready? Let's Start",
    "contact.title": "Let's Plan<br>Your Day,<br>Your Way.",
    "contact.visitBtn": "COME VISIT US",
    "contact.quoteBtn": "REQUEST A QUOTE",
    "contact.address": "Next to Itaú (Doca) - R. Boaventura da Silva, 414 - Reduto, Belém - PA, 66053-050",
    "contact.mapTitle": "Le Lys Venue location map",
    "footer.quote": "Our planners will make your big day even more unforgettable.",
    "footer.about": "About",
    "footer.services": "Venues",
    "footer.gallery": "Gallery",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy",
    "footer.copy": "© 2026 Le Lys Venue. All rights reserved."
  },
  es: {
    "meta.title": "Le Lys Espacio",
    "nav.about": "Sobre",
    "nav.spaces": "Espacios",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.quote": "Solicitar Presupuesto",
    "nav.languageSelector": "Selector de idioma",
    "hero.kicker": "Le Lys Espacio",
    "hero.titleImageAlt": "Ven a Le Lys",
    "hero.description": "Aquí encuentras el espacio ideal para tu evento: salones rústicos, modernos y elegantes. Además, contamos con un espacio infantil dedicado para hacer cada momento aún más memorable.",
    "hero.cta": "CONOCE NUESTROS ESPACIOS",
    "hero.coupleAlt": "Pareja celebrando",
    "hero.carouselAria": "Tipos de eventos",
    heroCarouselItems: ["BODAS", "CUMPLEAÑOS", "BAUTIZOS", "GRADUACIONES", "15 AÑOS", "CORPORATIVO", "BABY SHOWER"],
    "about.eyebrow": "Creamos · Celebramos",
    "about.title": "Hacemos Sueños Realidad",
    "about.text": "Le Lys Espacio tiene más de 12 años realizando eventos inolvidables en Belém do Pará. Creado por especialistas en decoración, reunimos cuatro espacios únicos: el elegante <strong>MAISON</strong>, el rústico <strong>JARDIN</strong>, el sofisticado <strong>VENTURA</strong> y el mágico <strong>EBA</strong>. Todo lo que necesitas para celebrar con estructura y cuidado. Desde la elección del espacio hasta el buffet y la decoración, nuestro equipo está aquí para ti.",
    "maison.title": "Le Lys Maison<br>El elegante",
    "maison.text1": "Le Lys Maison es el escenario ideal para quienes buscan refinamiento en cada detalle. Con capacidad para hasta 150 personas y una atmósfera de elegancia atemporal, este espacio fue pensado para celebraciones que merecen lo mejor, desde la primera mirada hasta el último brindis.",
    "maison.text2": "Equipado con aire acondicionado, sonido e iluminación profesional y decoración adaptada a tu gusto, Maison ofrece una estructura completa para que celebres con tranquilidad y sofisticación.",
    "maison.text3": "<strong>Ideal para:</strong> bodas, graduaciones, cumpleaños, eventos corporativos y mucho más.",
    "ventura.eyebrow": "Todo Está en los Detalles",
    "ventura.title": "Le Lys Ventura<br>El sofisticado",
    "ventura.text1": "Le Lys Ventura combina modernidad y sofisticación para quienes quieren un evento con personalidad marcada. Con capacidad para hasta 120 personas, su ambiente versátil e imponente se adapta a diferentes estilos de celebración sin perder la elegancia.",
    "ventura.text2": "Con aire acondicionado, cocina completa, sonido e iluminación profesional y decoración incluida, Ventura ofrece toda la estructura para que cada detalle suceda con excelencia.",
    "ventura.text3": "<strong>Ideal para:</strong> graduaciones, fiestas de 15 años, bodas, eventos corporativos y mucho más.",
    "jardin.title": "Le Lys Jardin<br>El rústico",
    "jardin.text1": "Le Lys Jardin trae el encanto rústico con toda la comodidad que tu evento merece. Con capacidad para hasta 120 personas, su ambiente acogedor y lleno de personalidad crea una atmósfera cálida y única que transforma cualquier celebración en una experiencia especial.",
    "jardin.text2": "Cuenta con aire acondicionado, cocina completa, sonido e iluminación profesional y decoración incluida: todo listo para que tu único trabajo sea celebrar.",
    "jardin.text3": "<strong>Ideal para:</strong> cumpleaños, bautizos, convivencias, eventos corporativos y mucho más.",
    "eba.title": "EBA Buffet Infantil<br>El mágico",
    "eba.text1": "EBA Buffet Infantil fue pensado para transformar cumpleaños en una experiencia divertida, colorida e inolvidable. Un espacio encantador, preparado para recibir a niños y familias con comodidad y seguridad.",
    "eba.text2": "Con estructura completa, decoración temática y ambientes diseñados para celebrar cada detalle, EBA es el escenario ideal para fiestas llenas de alegría.",
    "eba.text3": "<strong>Ideal para:</strong> cumpleaños infantiles, celebraciones mensuales, fiestas temáticas y reuniones familiares.",
    "common.visitSpace": "VISITAR ESPACIO",
    "gallery.title": "Nuestra Galería",
    "gallery.text": "Una mirada a los momentos mágicos que tuvimos el privilegio de crear para nuestros clientes.",
    "gallery.filtersAria": "Filtrar galería por espacio",
    "gallery.filterMaison": "MAISON",
    "gallery.filterJardin": "JARDIN",
    "gallery.filterVentura": "VENTURA",
    "gallery.filterEba": "EBA",
    "gallery.prevAria": "Mostrar imágenes anteriores",
    "gallery.nextAria": "Mostrar más imágenes",
    "gallery.closeAria": "Cerrar imagen",
    "gallery.lightboxAlt": "Imagen ampliada de la galería",
    "gallery.space.maison": "Maison",
    "gallery.space.jardin": "Jardin",
    "gallery.space.ventura": "Ventura",
    "gallery.space.eba": "EBA",
    "gallery.mediaAria": "Galería {space}",
    "contact.eyebrow": "¿Listos? Empecemos",
    "contact.title": "Planifiquemos<br>Tu Día,<br>A Tu Manera.",
    "contact.visitBtn": "VEN A VISITARNOS",
    "contact.quoteBtn": "SOLICITA UN PRESUPUESTO",
    "contact.address": "Al lado de Itaú (Doca) - R. Boaventura da Silva, 414 - Reduto, Belém - PA, 66053-050",
    "contact.mapTitle": "Mapa de ubicación de Le Lys Espacio",
    "footer.quote": "Nuestros planificadores harán que tu gran día sea aún más inolvidable.",
    "footer.about": "Sobre",
    "footer.services": "Espacios",
    "footer.gallery": "Galería",
    "footer.contact": "Contacto",
    "footer.privacy": "Privacidad",
    "footer.copy": "© 2026 Le Lys Espacio. Todos los derechos reservados."
  }
};

function t(key) {
  return TRANSLATIONS[currentLanguage]?.[key] ?? TRANSLATIONS.pt[key] ?? key;
}

function tf(key, replacements = {}) {
  let value = t(key);
  Object.entries(replacements).forEach(([token, replacement]) => {
    value = value.replaceAll(`{${token}}`, replacement);
  });
  return value;
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : "pt";
  } catch {
    return "pt";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // no-op
  }
}

function renderHeroCarousel() {
  const track = document.getElementById("hero-text-carousel-track");
  if (!track) return;
  const items = TRANSLATIONS[currentLanguage]?.heroCarouselItems || TRANSLATIONS.pt.heroCarouselItems;
  const fullList = [...items, ...items];
  track.innerHTML = fullList.map((item) => `<span>${item}</span>`).join("");
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mapping = el.getAttribute("data-i18n-attr");
    if (!mapping) return;
    mapping.split(",").forEach((chunk) => {
      const [attr, key] = chunk.split(":").map((item) => item.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  document.documentElement.lang = currentLanguage === "en" ? "en" : currentLanguage === "es" ? "es" : "pt-BR";
  document.title = t("meta.title");
  renderHeroCarousel();
}

function setLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;
  currentLanguage = language;
  if (persist) saveLanguage(language);
  applyTranslations();
  if (typeof window.refreshGalleryText === "function") window.refreshGalleryText();
}

async function loadComponent(targetId, componentPath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Falha ao carregar ${componentPath}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

function initLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-btn");
  if (buttons.length === 0) return;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang, true);
    });
  });
}

function initScrollFade() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section > *").forEach((el) => {
    if (!el.classList.contains("hero-text")) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      observer.observe(el);
    }
  });
}

function initGalleryFilters() {
  const galleryGrid = document.getElementById("gallery-grid");
  const filterButtons = document.querySelectorAll(".gallery-filter");
  const prevButton = document.getElementById("gallery-prev");
  const nextButton = document.getElementById("gallery-next");
  const pageIndicator = document.getElementById("gallery-page-indicator");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("gallery-lightbox-image");
  const lightboxClose = document.getElementById("gallery-lightbox-close");
  if (!galleryGrid || filterButtons.length === 0 || !prevButton || !nextButton || !pageIndicator || !lightbox || !lightboxImage || !lightboxClose) return;

  const galleryData = {
    maison: [
      "maison/MAISON_ANIVERSÁRIO_CLÁSSICO_TERRA-COTA.JPG.jpeg",
      "maison/MAISON_ANIVERSÁRIO_CLÁSSICO_TERRA-COTA_BRANCO.jpg.jpeg",
      "maison/MAISON_ANIVERSÁRIO_ESPELHADO_ROSA_BRANCO.png",
      "maison/MAISON_CASAMENTO_CLASSICO_AZUL_BRANCO.jpg.jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_AZUL_BTRANCO_01MESA.jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_BRANCO.jpg.jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_BRANCO_ROSA_..jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_BRANCO_ROSA_.jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_BRANCO_ROXO_01MESA.jpg.jpeg",
      "maison/MAISON_CASAMENTO_CLASSICO_ROSA_BRANCO.jpg.jpeg",
      "maison/MAISON_CASAMENTO_ESPELHADO_BRANCO_01MESA (2).jpg.jpeg",
      "maison/MAISON_CASAMENTO_ESPELHADO_BRANCO_01MESA (2).png",
      "maison/MAISON_CASAMENTO_ESPELHADO_BRANCO_01MESA.jpg.jpeg",
      "maison/MAISON_CASAMENTO_ESPELHADO_BRANCO_01MESA.png",
      "maison/MAISON_CASAMENTO_ESPELHADO_BRANCO_ROSA_01MESA.jpg.jpeg",
      "maison/MAISON_CASAMENTO_ESPELHADO_FLORES_NATURAIS_BRANCO_ROSA.jpg.jpeg",
      "maison/MAISON_CASAMENTO_ESPELHADO_ROSA_01MESA.PNG",
      "maison/MAISON_CASAMENTO_TERRA-COTA_BRANCO.jpg.jpeg",
      "maison/MAISON_FORMATURA_365.jpeg"
    ],
    jardin: [
      "jardin/JARDIN_15_CLÁSSICO_BRANCO_AZUL.jpg.jpeg",
      "jardin/JARDIN_15_CLÁSSICO_BRANCO_ROXO_ROSA.jpg.jpeg",
      "jardin/JARDIN_15_RÚSTICO_MADEIRA_BRANCO_VERMELHO_ROSA.jpg.jpeg",
      "jardin/JARDIN_15_RÚSTICO_RIPADO_BRANCO_AZUL.jpg.jpeg",
      "jardin/JARDIN_15_RÚSTICO_RIPADO_BRANCO_TERRA-COTA_AMARELO.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_CLÁSSICO_BRANCO_TERRA-COTA_ROSA.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_CLÁSSICO_BRANCO_VERMELHO.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_ESPELHADO_BRANCO_LARANJA_ROSA_ROXO_VERDE_NEON.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_ESPELHADO_BRANCO_LARANJA_ROXO_NEON.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_MADEIRA_BRANCO_ROSA.png",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_MADEIRA_BRANCO_ROXO.png",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_MADEIRA_BRANCO_TERRA-COTA.png",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_MADEIRA_BRANCO_TERRA-COTA_VINHO.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_AMARELO.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_AZUL.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_LARANJA_AMARELO.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA (1).jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA (2).jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA (3).jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA.jpg.jpeg",
      "jardin/JARDIN_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA_AMARELO.jpg.jpeg",
      "jardin/JARDIN_CASAMENTO.jpeg",
      "jardin/JARDIN_CASAMENTO_CLÁSSICO_BRANCO (2).jpg.jpeg",
      "jardin/JARDIN_CASAMENTO_CLÁSSICO_BRANCO.JPG.jpeg",
      "jardin/JARDIN_CASAMENTO_RÚSTICO_MADEIRA_PRETO_VERMELHO (1).jpg.jpeg",
      "jardin/JARDIN_CASAMENTO_RÚSTICO_RIPADO_BRANCO (3).jpg.jpeg",
      "jardin/JARDIN_CASAMENTO_RÚSTICO_RIPADO_BRANCO_TERRA-COTA_AZUL (11).jpg.jpeg",
      "jardin/JARDIN_CASAMENTO_RÚSTICO_RIPADO_BRANCO_VERMELHO_ROSA (5).jpg.jpeg"
    ],
    ventura: [
      "ventura/IMG_3123.PNG",
      "ventura/IMG_3124.PNG",
      "ventura/IMG_5636.PNG",
      "ventura/IMG_5637.PNG",
      "ventura/VENTURA_15_CLASSICO_AZUL.jpg.jpeg",
      "ventura/VENTURA_15_CLASSICO_AZUL1.jpeg",
      "ventura/VENTURA_15_CLASSICO_AZUL2.jpeg",
      "ventura/VENTURA_15_ESPELHADO_PRETO_AZUL_BRANCO.jpg.jpeg",
      "ventura/VENTURA_15_ESPELHADO_ROSA.jpg.jpeg",
      "ventura/VENTURA_ANIVERSÁRIO_CLASSICO_ROSA.jpg.jpeg",
      "ventura/VENTURA_ANIVERSÁRIO_ESPELHADO_PRETO (1).jpg.jpeg",
      "ventura/VENTURA_ANIVERSÁRIO_ESPELHADO_PRETO.jpg.jpeg",
      "ventura/VENTURA_ANIVERSÁRIO_RÚSTICO_RIPADO_BRANCO_ROSA.jpg.jpeg",
      "ventura/VENTURA_ANIVERSÁRIO_RÚSTICO_RIPADO_ROSA_ROXO.jpg.jpeg"
    ],
    eba: [
      "EBA/BABY SHARK - EBA.jpeg",
      "EBA/BABY SHARK-EBA.jpeg",
      "EBA/CORINTHIANS2-EBA.jpeg",
      "EBA/CORINTHIANS3- EBA.jpeg",
      "EBA/CORINTHIANS3-EBA.jpeg",
      "EBA/DINOSAUROS- EBA.jpg.jpeg",
      "EBA/HARRY POTTER-EBA.jpeg",
      "EBA/MINECRAFT - EBA.jpeg",
      "EBA/MINECRAFT-EBA.jpeg",
      "EBA/MINECRAFT3-EBA.jpeg",
      "EBA/NARUTO-EBA.png",
      "EBA/NARUTO-EBA3.png",
      "EBA/PATRULHA CANINA-EBA.jpeg",
      "EBA/PEQUENA SEREIA - EBA.png",
      "EBA/PEQUENA SEREIA1 - EBA.png",
      "EBA/PEQUENO PRINCIPE1 - EBA.jpeg",
      "EBA/PRINCESAS1-EBA.jpeg",
      "EBA/PRINCESAS2- EBA.jpeg",
      "EBA/SAVANA-EBA.jpeg",
      "EBA/SONIC-EBA.jpeg",
      "EBA/TOY STORY-EBA.jpeg"
    ]
  };

  const pageSize = 6;
  let currentSpace = "maison";
  let currentPage = 0;

  function renderGallery(space, page = 0) {
    const items = galleryData[space] || galleryData.maison;
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    const safePage = Math.min(Math.max(page, 0), totalPages - 1);
    const start = safePage * pageSize;
    const visibleItems = items.slice(start, start + pageSize);
    const spaceLabel = t(`gallery.space.${space}`);

    currentSpace = space;
    currentPage = safePage;

    galleryGrid.innerHTML = visibleItems.map((itemSrc, index) => {
      const encodedSrc = itemSrc.split("/").map((part) => encodeURIComponent(part)).join("/");
      const itemClass = index % 5 === 0 ? "gallery-item tall" : "gallery-item";
      const isVideo = itemSrc.toLowerCase().endsWith(".mp4");
      if (isVideo) {
        return `
          <div class="${itemClass}">
            <video class="gallery-media" autoplay muted loop playsinline controls preload="metadata" aria-label="${tf("gallery.mediaAria", { space: spaceLabel })}">
              <source src="${encodedSrc}" type="video/mp4">
              Seu navegador não suporta vídeo em HTML5.
            </video>
          </div>
        `;
      }
      return `
        <div class="${itemClass}">
          <img class="gallery-media" src="${encodedSrc}" data-fullsrc="${encodedSrc}" alt="${tf("gallery.mediaAria", { space: spaceLabel })}">
        </div>
      `;
    }).join("");

    pageIndicator.textContent = `${safePage + 1} / ${totalPages}`;
    prevButton.disabled = safePage === 0;
    nextButton.disabled = safePage >= totalPages - 1;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderGallery(button.dataset.space, 0);
    });
  });

  prevButton.addEventListener("click", () => {
    renderGallery(currentSpace, currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    renderGallery(currentSpace, currentPage + 1);
  });

  galleryGrid.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img.gallery-media");
    if (!clickedImage) return;
    const fullSrc = clickedImage.dataset.fullsrc || clickedImage.currentSrc || clickedImage.src;
    lightboxImage.onerror = null;
    lightboxImage.onload = null;
    lightboxImage.src = fullSrc;
    lightboxImage.alt = clickedImage.alt || t("gallery.lightboxAlt");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxClose) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });

  window.refreshGalleryText = () => renderGallery(currentSpace, currentPage);
  renderGallery(currentSpace, 0);
}

async function initPage() {
  currentLanguage = getSavedLanguage();

  await Promise.all([
    loadComponent("header-component", "components/header.html"),
    loadComponent("hero-component", "components/hero.html"),
    loadComponent("about-component", "components/about.html"),
    loadComponent("services-component", "components/services.html"),
    loadComponent("passion-component", "components/passion.html"),
    loadComponent("jardin-component", "components/jardin.html"),
    loadComponent("eba-component", "components/eba.html"),
    loadComponent("gallery-component", "components/gallery.html"),
    loadComponent("contact-component", "components/contact.html"),
    loadComponent("footer-component", "components/footer.html")
  ]);

  initLanguageSwitcher();
  initScrollFade();
  initGalleryFilters();
  setLanguage(currentLanguage, false);
}

document.addEventListener("DOMContentLoaded", initPage);
