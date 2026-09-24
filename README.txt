DRINKMENY – SÅ ÄNDRAR DU SIDAN SJÄLV
=====================================

SNABBSTART
1. Öppna index.html i en webbläsare för att se sidan.
2. De tre viktigaste filerna är:
   - index.html = sidans struktur och rubriker
   - styles.css = färger, storlekar och design
   - script.js = drinkar, beskrivningar, recept och smakord

ÄNDRA EN DRINKTEXT
Öppna script.js i t.ex. Anteckningar, Visual Studio Code eller annan texteditor.
Längst upp finns listan: const drinks = [ ... ]

Exempel:
{
  name:'Sodapop',
  description:'Frisk och syrlig ...',
  tastes:['Äpple','Citrus','Bubblig'],
  ingredients:['4 cl Sourz Apple', ...]
}

- name = drinkens namn
- description = texten KUNDEN ser när den väljer drink
- tastes = de små smaketiketterna
- ingredients = bartenderreceptet med exakta mängder
- visual = sakerna som faller ner i glaset i animationen

VIKTIGT:
Behåll kommatecken, citationstecken och hakparenteser på ungefär samma sätt som i de befintliga drinkarna.

LÄGGA IN EN DRINKBILD
Lägg bilden i mappen:
assets/drinks/

Filnamnen ska vara:
sodapop.jpg
p2.jpg
trixie.jpg
rosa-pantern.jpg
midori-lemonade.jpg
savoy-75.jpg
coucou-d-or.jpg
coucou-0.jpg
draken-s-clover.jpg
aperol-fizz.jpg
white-russian.jpg
tom-collins.jpg
espresso-martini.jpg
viol-fizz.jpg
pink-lady.jpg
aperol-sour.jpg

Du kan använda JPG, JPEG, PNG eller WEBP. Samma namn används oavsett filformat.
Exempel: sodapop.png fungerar också.

TIPS FÖR BILDER
- Stående eller kvadratiska bilder fungerar bäst.
- Försök ha drinken centrerad i bilden.
- 1200 x 900 px eller större räcker bra.
- Håll gärna samma stil/bakgrund på alla drinkbilder för ett proffsigt intryck.

ÄNDRA RUBRIKEN HÖGST UPP
Öppna index.html och leta efter:
<h1>Vad är du sugen på?</h1>

Ändra bara texten mellan <h1> och </h1>.

ÄNDRA INTROTEXTEN
Direkt under rubriken finns:
<p class="hero__lead">...</p>
Ändra bara texten mellan taggarna.

ÄNDRA FÄRGER
Öppna styles.css. Allra högst upp finns:
:root {
  --bg: ...;
  --text: ...;
  --accent: ...;
}

--bg = bakgrundsfärg
--text = vanlig text
--accent = den limegröna accentfärgen

LÄGGA TILL EN NY DRINK
Det enklaste är att kopiera ett helt drinkblock i script.js, klistra in det direkt under ett annat block och ändra name, description, tastes, ingredients och visual.
Se till att blocket avslutas med }, om det ligger fler drinkar efter.

PUBLICERA + QR-KOD
När sidan publiceras på t.ex. Netlify, GitHub Pages eller en egen domän får den en URL.
QR-koden ska sedan peka på den URL:en.

SÄKERHETSKOPIA
Innan du gör större ändringar: kopiera hela drinkmenu-mappen. Då kan du alltid gå tillbaka om något blir fel.
