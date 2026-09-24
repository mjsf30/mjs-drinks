/* =========================================================
   DRINKAR
   ---------------------------------------------------------
   name        = drinkens namn
   tags        = används för sökning och filter
   badge       = lilla etiketten på bilden
   description = beskrivningen kunden ser
   tastes      = smakorden
   ingredients = ingredienser som visas när drinken öppnas
   ========================================================= */

const drinks = [
  {
    name:'Sodapop',
    tags:['sourz','blue curaçao','frisk'],
    badge:'SIGNATURE',
    description:'Frisk och syrlig med grönt äpple, citrus och lätt bubblig sötma. Ett färgstarkt val för dig som gillar fräscha drinkar.',
    tastes:['Äpple','Citrus','Bubblig'],
    ingredients:['Sourz Apple','Blue Curaçao','Sockerlag','Citronjuice','7Up']
  },

  {
    name:'P2',
    tags:['vodka','sourz','frisk'],
    badge:'FRESH',
    description:'Lätt, frisk och fruktig med vanilj, grönt äpple och lime. Sötman balanseras av en pigg citrusfräschör.',
    tastes:['Äpple','Lime','Vanilj'],
    ingredients:['Vodka Vanilj','Sourz Apple','Limejuice','7Up']
  },

  {
    name:'Trixie',
    tags:['vodka','passion','tropisk'],
    badge:'TROPISK',
    description:'Tropisk och fyllig med passionsfrukt, vanilj och kola, rundad med lime och en hint av grenadin.',
    tastes:['Passion','Vanilj','Söt'],
    ingredients:['Butterscotch','Vodka Vanilj','Passionjuice','Limejuice','Grenadin']
  },

  {
    name:'Rosa Pantern',
    tags:['vodka','krämig','söt'],
    badge:'CREAMY',
    description:'Len, krämig och dessertlik med vanilj, mjölk och grenadin. Mjuk, söt och lättdrucken.',
    tastes:['Krämig','Vanilj','Söt'],
    ingredients:['Vodka','Licor 43','Grenadin','Mjölk','Grädde']
  },

  {
    name:'Midori Lemonade',
    tags:['midori','frisk','söt'],
    badge:'FRISK',
    description:'Klar, fruktig och citrusfrisk med Midoris melonkaraktär, citron och bubblig Sprite.',
    tastes:['Melon','Citron','Bubblig'],
    ingredients:['Midori','Citronjuice','Vit sirap','Sprite']
  },

  {
    name:'Savoy 75',
    tags:['gin','bubbel','frisk'],
    badge:'BUBBEL',
    description:'Elegant och torr med gin, frisk citron och cava. Fräsch, bubblig och perfekt för dig som vill ha något mindre sött.',
    tastes:['Torr','Citron','Bubbel'],
    ingredients:['Gin','Torr Cava','Citronjuice','Vit sirap','Apelsinskal']
  },

  {
    name:'Coucou D’or',
    tags:['gin','limoncello','frisk'],
    badge:'SIGNATURE',
    description:'Frisk och sofistikerad med gin, limoncello, gurka och grapefrukt. Citrusdriven med en sval och lätt bitter avslutning.',
    tastes:['Gurka','Citrus','Grapefrukt'],
    ingredients:['Gin','Limoncello','Gurksirap','Citronjuice','Grappo Grapefruit Tonic','Gurka']
  },

  {
    name:'Coucou 0%',
    tags:['0%','alkoholfri','frisk'],
    badge:'0%',
    description:'Alkoholfri, sval och citrusfrisk med gurka och grapefrukttonic. Ett vuxet och fräscht alternativ utan alkohol.',
    tastes:['Alkoholfri','Gurka','Grapefrukt'],
    ingredients:['Gurksirap','Citronjuice','Grappo Grapefruit Tonic','Gurka']
  },

  {
    name:'Draken’s Clover',
    tags:['gin','amaro','sour'],
    badge:'SOUR',
    description:'En vuxen sour med gin, bittersöt amaro och mörka bär. Äggvitan ger en mjuk och silkeslen textur.',
    tastes:['Bärig','Bittersöt','Syrlig'],
    ingredients:['Beefeater Gin','Amaro Montenegro','Citronjuice','Spiced Wildberrys Monin','Äggvita']
  },

  {
    name:'Aperol Fizz',
    tags:['aperol','bubbel','sour'],
    badge:'FIZZ',
    description:'Luftig och bittersöt med Aperol, citron och bubbel. Frisk citrus möter mjuk skumkrona och apelsin.',
    tastes:['Bittersöt','Apelsin','Bubbel'],
    ingredients:['Aperol Spritz','Citronjuice','Sockerlag','Äggvita','Bubbel','Apelsin']
  },

  {
    name:'White Russian',
    tags:['vodka','kaffe','krämig'],
    badge:'CLASSIC',
    description:'Rik, mjuk och krämig med kaffe, vodka och vispgrädde. Ett fylligt val med tydlig dessertkänsla.',
    tastes:['Kaffe','Krämig','Fyllig'],
    ingredients:['Vodka','Kahlúa','Vispgrädde']
  },

  {
    name:'Tom Collins',
    tags:['gin','classic','frisk'],
    badge:'CLASSIC',
    description:'En tidlös, lätt och uppfriskande gin-drink med citron, balanserad sötma och bubblig avslutning.',
    tastes:['Citron','Frisk','Bubblig'],
    ingredients:['Gin','Citronjuice','Sockerlag','Sprite']
  },

  {
    name:'Espresso Martini',
    tags:['vodka','kaffe','fyllig'],
    badge:'CLASSIC',
    description:'Intensiv och elegant med espresso, kaffelikör och vodka. Fyllig kaffesmak med en liten sälta som lyfter helheten.',
    tastes:['Espresso','Kaffe','Fyllig'],
    ingredients:['Vodka','Kahlúa','Espresso','Salt']
  },

  {
    name:'Viol Fizz',
    tags:['gin','viol','floral'],
    badge:'FLORAL',
    description:'Blommig, mjuk och syrlig med viol, gin och citron. En aromatisk drink med fluffig textur.',
    tastes:['Viol','Blommig','Syrlig'],
    ingredients:['Gin','Viollikör','Citronjuice','Sockerlag','Äggvita']
  },

  {
    name:'Pink Lady',
    tags:['gin','cointreau','sour'],
    badge:'SOUR',
    description:'Fruktig och syrlig med gin, apelsinlikör och grenadin. Äggvitan gör drinken mjuk, len och elegant.',
    tastes:['Citrus','Fruktig','Len'],
    ingredients:['Gin','Cointreau','Citronjuice','Grenadin','Äggvita']
  },

  {
    name:'Aperol Sour',
    tags:['aperol','sour','syrlig'],
    badge:'SOUR',
    description:'Syrlig och bittersöt med Aperols apelsintoner, citron och en len skumkrona. Frisk men samtidigt rund.',
    tastes:['Apelsin','Syrlig','Len'],
    ingredients:['Aperol','Citronjuice','Sockerlag','Äggvita']
  },

  {
    name:'Amaretto Sour',
    tags:['amaretto','sour','syrlig','söt','mandel'],
    badge:'SOUR',
    description:'Söt och syrlig med toner av mandel och citron, balanserad med en lätt kryddig bitterhet. Len med en mjuk skumkrona.',
    tastes:['Mandel','Söt & syrlig','Kryddig'],
    ingredients:['Amaretto','Citronjuice','Sockerlag','Äggvita','Angostura Bitters']
  },

  {
    name:'Whiskey Sour',
    tags:['whiskey','bourbon','sour','syrlig'],
    badge:'SOUR',
    description:'En klassisk sour med bourbon, frisk citron och balanserad sötma. Fyllig och len med en mjuk skumkrona.',
    tastes:['Bourbon','Söt & syrlig','Len'],
    ingredients:['Bourbon Whiskey','Citronjuice','Sockerlag','Äggvita']
  }
];


/* =========================================================
   SIDANS FUNKTIONER
   ========================================================= */

const menu = document.querySelector('#menu');
const template = document.querySelector('#drink-card-template');
const search = document.querySelector('#search');
const chips = [...document.querySelectorAll('.chip')];

let activeFilter = 'all';


/* Gör drinknamnet till ett filnamn.
   "Amaretto Sour" blir "amaretto-sour"
*/
function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}


/* =========================================================
   BILDER
   Testar PNG, JPG, JPEG och WEBP automatiskt
   ========================================================= */

function loadImageWithFallback(img, placeholder, drinkName) {

  const basePath = `assets/drinks/${slugify(drinkName)}`;

  const extensions = [
    'png',
    'jpg',
    'jpeg',
    'webp'
  ];

  let currentIndex = 0;

  // Dölj placeholdern medan vi försöker ladda bilden
  if (placeholder) {
    placeholder.style.display = 'none';
  }

  // Bilden börjar osynlig
  img.style.opacity = '0';

  function tryNextImage() {

    if (currentIndex >= extensions.length) {
      img.style.display = 'none';

      // Visa placeholder endast om ingen bild alls hittades
      if (placeholder) {
        placeholder.style.display = 'flex';
      }

      return;
    }

    img.src = `${basePath}.${extensions[currentIndex]}`;
    currentIndex++;
  }

  img.onload = function () {

    img.style.display = 'block';
    img.classList.add('has-image');

    // Mjuk fade-in
    requestAnimationFrame(() => {
      img.style.opacity = '1';
    });

    if (placeholder) {
      placeholder.style.display = 'none';
    }
  };

  img.onerror = function () {
    tryNextImage();
  };

  tryNextImage();
}

/* =========================================================
   BYGG DRINKKORTEN
   ========================================================= */

function render() {

  const q = search.value.trim().toLowerCase();

  const filtered = drinks.filter(drink => {

    const searchableText = `
      ${drink.name}
      ${drink.description}
      ${drink.tastes.join(' ')}
      ${drink.tags.join(' ')}
      ${drink.ingredients.join(' ')}
    `.toLowerCase();

    const matchesSearch =
      !q || searchableText.includes(q);

    const matchesFilter =
      activeFilter === 'all' ||
      drink.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });


  menu.innerHTML = '';


  if (!filtered.length) {

    menu.innerHTML = `
      <div class="empty">
        Ingen drink matchade sökningen.
      </div>
    `;

    return;
  }


  filtered.forEach(drink => {

    const node =
      template.content.cloneNode(true);

    const card =
      node.querySelector('.drink-card');

    const button =
      node.querySelector('.card-button');

    const img =
      node.querySelector('.drink-image');

    const placeholder =
      node.querySelector('.image-placeholder');


    /* TEXT */

    node.querySelector('.drink-name').textContent =
      drink.name;

    node.querySelector('.drink-type').textContent =
      drink.tags.slice(0, 2).join(' · ');

    node.querySelector('.drink-description').textContent =
      drink.description;

    node.querySelector('.badge').textContent =
      drink.badge;


    /* BILD */

    img.alt = `${drink.name} drink`;

    loadImageWithFallback(
      img,
      placeholder,
      drink.name
    );


    /* SMAK-TAGGAR */

    const tasteTags =
      node.querySelector('.taste-tags');

    drink.tastes.forEach(taste => {

      const span =
        document.createElement('span');

      span.className = 'taste-tag';

      span.textContent = taste;

      tasteTags.appendChild(span);

    });


    /* INGREDIENSER */

    const ingredientList =
      node.querySelector('.ingredient-list');

    drink.ingredients.forEach((ingredient, index) => {

      const li =
        document.createElement('li');

      li.textContent = ingredient;

      /*
       Varje ingrediens får ett index.
       CSS använder detta för att låta dem
       komma fram en efter en.
      */

      li.style.setProperty(
        '--ingredient-index',
        index
      );

      ingredientList.appendChild(li);

    });


    /* =====================================================
       ÖPPNA / STÄNG KORT

       CSS kommer att använda .open för att:
       - sudda drinkbilden
       - mörka bilden
       - tona bort beskrivningen
       - visa ingredienserna
       - animera ingredienserna en efter en
       ===================================================== */

    button.addEventListener('click', () => {

      const isOpen =
        card.classList.toggle('open');

      button.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
      );


      /*
       Ändra texten på knappen.
       Om din nya HTML innehåller .open-hint-text
       används den automatiskt.
      */

      const hintText =
        card.querySelector('.open-hint-text');

      if (hintText) {

        hintText.textContent =
          isOpen
            ? 'Stäng ingredienser'
            : 'Se ingredienser';

      }

    });


    menu.appendChild(node);

  });


  observeCards();
}


/* =========================================================
   SCROLL-ANIMATION
   ========================================================= */

let observer;

function observeCards() {

  if (observer) {
    observer.disconnect();
  }


  observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );


  document
    .querySelectorAll('.drink-card')
    .forEach((card, index) => {

      card.style.transitionDelay =
        `${Math.min(index * 35, 180)}ms`;

      observer.observe(card);

    });
}


/* =========================================================
   SÖKNING
   ========================================================= */

search.addEventListener(
  'input',
  render
);


/* =========================================================
   FILTER
   ========================================================= */

chips.forEach(chip => {

  chip.addEventListener(
    'click',
    () => {

      activeFilter =
        chip.dataset.filter;

      chips.forEach(otherChip => {

        otherChip.classList.toggle(
          'active',
          otherChip === chip
        );

      });

      render();

    }
  );

});


/* =========================================================
   STARTA SIDAN
   ========================================================= */

render();

/* =========================================================
   ANIMERAD RÖKVIDEO
   ========================================================= */

const smokeVideos = [
  document.querySelector('.smoke-video-1'),
  document.querySelector('.smoke-video-2')
];

const smokeSpeed = 0.65;
const crossfadeTime = 3;

let currentSmoke = 0;
let switchingSmoke = false;


/* Sänk hastigheten */

smokeVideos.forEach(video => {
  video.playbackRate = smokeSpeed;
});


/* Starta första videon */

const firstVideo = smokeVideos[0];

firstVideo.currentTime = 0;
firstVideo.classList.add('active');

firstVideo.play().catch(() => {});


/* Kontrollera hela tiden när det är dags att byta */

function updateSmoke() {

  const currentVideo =
    smokeVideos[currentSmoke];

  if (
    !switchingSmoke &&
    currentVideo.duration &&
    currentVideo.currentTime >=
      currentVideo.duration - (crossfadeTime * smokeSpeed)
  ) {

    switchingSmoke = true;

    const nextIndex =
      (currentSmoke + 1) % smokeVideos.length;

    const nextVideo =
      smokeVideos[nextIndex];


    /* Starta nästa rök från början */

    nextVideo.currentTime = 0;
    nextVideo.playbackRate = smokeSpeed;

    nextVideo
      .play()
      .catch(() => {});


    /* Crossfade */

    nextVideo.classList.add('active');
    currentVideo.classList.remove('active');


    /* När övergången är klar */

    setTimeout(() => {

      currentVideo.pause();
      currentVideo.currentTime = 0;

      currentSmoke = nextIndex;
      switchingSmoke = false;

    }, crossfadeTime * 1000);

  }

  requestAnimationFrame(updateSmoke);
}


/* Starta kontrollen */

requestAnimationFrame(updateSmoke);