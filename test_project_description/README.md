# Moduuli B - Web-sivun toteutus

**Tehtävään käytettävä kilpailuaika: 4h**

Retrogamehouse High Score Hall Of Fame kunniagalleria sivuston rakentaminen tapahtuu tässä moduulissa.

Sivustolla näytetään peleistä pelikohtaisesti parhaat pelitulokset. Kunniagalleria tehdään peli- tai tapahtumakohtaisesti ja parhaiten pelanneet pelaajat pääsevät kunniatauluun.

**Etusivulla (`index.html`)** galleriassa listataan uusimmasta vanhimpaan pelit/tapahtumat, jotka ovat päässeet Hall of Fameen, niin että viimeisimpänä lisätty näkyy ylimpänä. Pelien tiedot on tuotava annetusta JSON-tiedostosta. Sivu näyttää 20 uusinta Hall Of Famea, ja alhaalta sivutuksen (`pagination`) avulla käyttäjä voi selata seuraavia 20 peliä. Jos pelija on enemmän kuin 20, käytetään numerollista sivutusta. Varmista, että sinulla on vähintään 21 pelia, jotta nähdään, miten sivutus toimii. Jokaisella pelillä on kuva, pelin nimi ja paras tulos sekä voittajan käyttäjänimi.

**Pelin / tapahtuman** nimeä klikkaamalla päästään pelikohtaiseen Hall of Fame-näkymään, jossa on pelin nimi ja kuva sekä tulokset. Tässä moduulissa kaikki pelit avautuvat samalle pelisivulle (`peli.html`). Pelin tiedot on tuotava JSON-tiedostosta (`game id:1`). Tuloksissa näkyy sijoitus, pelaajan käyttäjänimi, tulos ja päivämäärä. Pelaajat listataan tulosten mukaan, jossa sijoitus 1 eli voittaja, näytetään ylimmäisenä. Varmista, että kolme parasta tulosta saavat ansaitsemansa korostuksen. Näytettävien pelaajien määrä määritellään käyttäjähallinnan puolella, tässä vaiheessa on kuvattu maximissa 20 tulosta.

Lisää hakutoiminto molemmille sivulle: Hall of Fame -sivulla haku pelien nimien perusteella ja Pelisivulla käyttäjänimien perusteella. Hakutoiminto on toteutettava ilman erillistä hakupainiketta. Käytä moderneja menetelmiä, kuten 300 millisekunnin `debounce`-viivettä, tehdäksesi hausta optimoidumman.

Toteutettavissa osissa on noudatettava asiakkaan graafista ohjeistusta ja käytettävä asiakkaan graafista materiaalia. Asiakkaan antamat valokuvat, logot ja tyyliopas ovat
saatavilla [materiaalit](https://sollertis.datainsafe.fi/mycloud/index.php/s/xtMkjwhXCrGrC0D) ja
lisämateriaalit assets-kansiossa.

Asiakkaan yritysilmeen, värien ja tyylien noudattaminen on ehdottoman tärkeää, jotta uusi verkkosivu sopii nykyiseen sivustoon. Asiakas vaatii, että sivu on käyttäjäystävällinen, moderni ja helppokäyttöinen eri päätelaitteilla. Asiakkaalle on myös tärkeää, että sivu vastaa kohdeyleisön odotuksia ja luo retropeleille ominaisen tunnelman. Graafisesta suunnitelmasta pakolliset osiot, joita toteutuksessa tulee huomioida, ovat logo, värit, fontit ja tekstikoko ja kuvat, jotka tulee huomioida kuvakirjastosta.

- Työpöydän versio 1440px leveä ja
- Mobiililaite versio 375px leveä.

Sekä etusivu (`index.html`) että pelisivu (`peli.html`) jakavat samanlaisen ulkoasun ylä- ja alatunnisteille. Ylätunniste (`header`) sisältää logon sekä kirjautumispainikkeen. Alatunnisteeseen (`footer`) on lisätty kilpailijan nimi, koulu sekä tekijänoikeustiedot, merkitty "Taitaja 2024".

Varmista, että HTML- ja CSS-koodisi on kirjoitettu semanttisesti oikein ja läpäisee kaikki validointitestit ilman virheitä. Tarkista, että koodi on optimoitu, hyvin järjestetty ja saavutettavuusvaatimukset huomioitu. Koodin tulee olla laadukasta, selkeää ja kestävää. Koodin laadun tarkistamiseen käytämme Chrome Lighthouse -palvelua. Lisäksi sivu testataan myös axe DevTools -saavutettavuustyökaluilla, jotka auttavat tunnistamaan ja korjaamaan saavutettavuusongelmia, varmistaen, että sivusto on esteetön mahdollisimman monille käyttäjille.

**Moduulin lopussa sinun on toimitettava:**

- toimiva staattinen responsiivinen verkkosivusto palvelimella
- päivitetty Github-repositori (mukana luotu verkkosivun koodi) ja `README.md` tiedosto
