# Modul B - Genomförande av webbsidan

**Tävlingstid för uppgiften: 4h**

I denna modul ska du bygga Retro Game House High Score Hall Of Fame-galleriets webbplats. Webbplatsen ska visa de bästa spelskorna för varje spel. Hall of Fame kommer att skapas för varje spel eller evenemang, och de bästa spelarna kommer att presenteras på hederslistan.

**Startsida (`index.html`):** Galleriet kommer att lista spel/evenemang från de nyaste till de äldsta som har kommit in i Hall of Fame, där den senast tillagda visas överst. Spelinformationen måste hämtas från den medföljande JSON-filen. Sidan visar de 20 nyaste Hall of Fame-inläggen, och sidnumrering tillåter användaren att bläddra bland de nästa 20 spelen. Om det finns mer än 20 spel, använd numerisk paginering. Se till att det finns minst 21 spel för att visa hur pagineringen fungerar. Varje spelpost innehåller en bild, spelets namn, bästa poängen och vinnarnas användarnamn.

**Spel-/Evenemangssida (`game.html`):** Genom att klicka på ett spel-/evenemangsnamn kommer man till en spelspecifik Hall of Fame-vy som inkluderar spelets namn, bild och resultat. I denna modul öppnas alla spel på samma spelsida (`game.html`). Spelinformationen måste hämtas från JSON-filen (`game id:1`). Resultaten ska visa rankning, spelarens användarnamn, poäng och datum. Spelarna ska listas efter sina poäng, med toppspelaren (rank 1) överst. Se till att de tre bästa poängen är markerade på lämpligt sätt. Antalet visade spelare definieras i användarhanteringen, med maximalt 20 resultat i detta skede.

Lägg till en sökfunktion på båda sidorna. På Hall of Fame-sidan ska sökningen baseras på spelnamn. På spelsidan ska sökningen baseras på användarnamn. Implementera sökfunktionen utan en separat sökknapp, använd moderna metoder som en 300-millisekunders `debounce`-fördröjning för att optimera sökningen.

Följ kundens grafiska riktlinjer och använd de tillhandahållna grafiska materialen. Kundens tillhandahållna foton, logotyper och stilguide finns tillgängliga på [material](https://sollertis.datainsafe.fi/mycloud/index.php/s/xtMkjwhXCrGrC0D) och i ytterligare material i assets-mappen.

Att följa kundens företagsidentitet, färger och stilar är absolut nödvändigt för att säkerställa att den nya webbplatsen passar den nuvarande webbplatsen. Kunden kräver att webbplatsen är användarvänlig, modern och lätt att använda på olika enheter. Det är också viktigt för kunden att webbplatsen motsvarar målgruppens förväntningar och skapar en atmosfär som är karakteristisk för retrospel. De obligatoriska sektionerna från den grafiska designen som behöver beaktas vid implementeringen är logotypen, färgerna, typsnitten, textstorleken och bilderna som bör väljas från bildbiblioteket.

- Skrivbordsversionens bredd: 1440px
- Mobilversionens bredd: 375px

Både startsidan (`index.html`) och spelsidan (`game.html`) delar en liknande layout för header och footer. Header innehåller logotypen och en inloggningsknapp. I footern ingår konkurrentens namn, skola och upphovsrättsinformation, markerad "Taitaja 2024."

Se till att din HTML- och CSS-kod är semantiskt korrekt och passerar alla valideringstester utan fel. Kontrollera att koden är optimerad, välorganiserad och uppfyller tillgänglighetskraven. Koden ska vara av hög kvalitet, tydlig och hållbar. Vi använder Chrome Lighthouse för att kontrollera kodens kvalitet. Dessutom kommer sidan att testas med tillgänglighetsverktygen Axe DevTools, som hjälper till att identifiera och åtgärda tillgänglighetsproblem, vilket säkerställer att webbplatsen är tillgänglig för så många användare som möjligt.

**I slutet av modulen måste du leverera:**

- En fungerande, statisk, responsiv webbplats på en server
- Ett uppdaterat GitHub-repository (inklusive den skapade webbplatskoden) och en `README.md`-fil
