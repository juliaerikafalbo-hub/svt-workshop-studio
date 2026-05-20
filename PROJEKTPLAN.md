# SVT Workshop Studio — Vad vi bygger och varför

*Sammanfattning av allt vi kommit överens om. Sparas också i projektmappen.*

---

## Vem är det här för?

**Julia Falbo**, ledar- och teamutvecklare på SVT. Julia leder workshops och utbildningsinsatser för chefer och team. Hennes styrka är att vara förberedd men inte rigid — hon litar på sin kompetens i rummet och kan hantera det som händer. Det hon vill slippa är allt arbetet runtomkring: formgivning, administration, att hitta nytt material, att bygga om samma sak från scratch varje gång.

På sikt kan fler kollegor på SVT använda verktyget — det byggs med det i åtanke.

---

## Problemet vi löser

Julias arbete följer ett återkommande mönster:

1. **Uppstartsmöte** med en chef som beställer en insats (behov, utmaningar, mål)
2. **Tidsplanering** — ungefärligt upplägg med block (teori, reflektion, upplevelse, pauser)
3. **Innehållsbygge** — PowerPoint med teori, reflektionsfrågor, instruktioner
4. **Leverans** — workshopen eller utbildningen
5. **Efterarbete** — dokumentation till deltagare, utvärdering, uppföljning

**Tre bekräftade luckor idag:**

- **Deltagarna är dåligt förberedda.** Chefen skickar en kortfattad kallelse. Julia har ingen kontroll över deltagarnas förväntningar eller mentala förberedelse.
- **Ingen uppföljning.** Forskning visar att utan strukturerat stöd efter en insats ger träning nästan ingen bestående effekt — bara 10–20% av lärande leder till faktisk beteendeförändring.
- **Inga mönster synliga.** Julia kan inte se vad som återkommer i behovsanalyserna, vilka övningar som fungerar bäst, eller hur SVT som organisation mår.

---

## Vad vi bygger

Appen heter **SVT Workshop Studio**. Den stöttar hela cykeln kring en workshop-leverans.

### Fas 1 — Planering och produktion *(bygger vi idag)*

**Dashboard**
En startsida med alla Julias leveranser. Varje uppdrag visas som ett kort med beställare, grupp, datum och status. Knapp för att skapa nytt uppdrag.

**Uppdragsvy — fyra flikar per leverans:**

*Behovsanalys*
Anteckningar från uppstartsmötet: beställare, grupp, datum, syfte, mål, utmaningar, antal deltagare.

*Tidsplan*
En visuell lista med tidsblock som läggs in i ordning. Varje block har en typ (Teori, Reflektion, Grupparbete, Upplevelseövning, Paus), en titel, och en längd i minuter. Appen summerar tid löpande och visar balansen mellan blocktyper visuellt.

*Övningsbank*
Sökbar lista med övningar. Varje övning har namn, syfte, tidsåtgång, typ och instruktion. Förladdat med ~12 av Julias favoritövningar. Julia kan lägga till egna och markera favoriter. Klicka på en övning → lägg till direkt i tidsplanen.

*PowerPoint-export*
En knapp som genererar en färdig .pptx-fil baserad på upplägget. SVT-stiliserad mall (färger, typografi, logotyp-plats). Innehåller: agendabild, en bild per block, reflektionsfrågor, avslutning. Laddas ner direkt i webbläsaren.

---

### Fas 2 — Före och efter workshopen *(nästa steg)*

**Deltagarförberedelse**
Baserat på behovsanalysen genereras automatiskt en deltagaranpassad sida (en länk, ingen inloggning) med:
- Vad workshopen handlar om
- Vad de ska tänka på beforehand
- En kort fråga: "Vilken situation vill du helst kunna hantera annorlunda?"

Dessutom: ett automatiskt förslag på ett mejl till chefen med en guide för deras pre-brief med medarbetarna.

**Transfer of Training — uppföljningssystem**

Baserat på forskning (Baldwin & Ford, Blume m.fl.) som visar att timing och struktur är avgörande:

| Tidpunkt | Vad som skickas | Syfte |
|---|---|---|
| Dag 1 | Reflektionsprompt: "Vad tar du med dig? Vad ska du prova?" | Konsoliderar inlärning innan glömskekurvan tar över |
| Vecka 1 | Tre korta frågor om vad de provat + hinder | Uppföljning + identifiera vad som bromsar |
| Vecka 2–4 | 3–5 mikrolärande-nudgar (scenario + en fråga) | Spaced repetition av koncept |
| Månad 1 | Automatisk chefsprompt med samtalsstartare | Chefsinvolvering = starkaste enskilda faktorn för transfer |
| Månad 2 | Peer check-in-guide | Social accountability |
| Månad 3 | Kort beteendeselfskattning | Mäta om förändring faktiskt skett |

Allt sker via länk — inga e-poster sparas. Anonymt och GDPR-säkert. Julia styr vad som skickas när.

---

### Fas 3 — Mönster och organisationshälsa *(framtid)*

- Vilka utmaningar återkommer i behovsanalyserna?
- Vilka övningar får bäst respons?
- Vilka grupper och chefer investerar återkommande i sin grupp?
- En aggregerad bild av hur SVT-organisationen mår
- Möjlighet att dela övningar och mallar med kollegor på SVT

---

## Säkerhet och GDPR

- **Inga deltagaruppgifter sparas.** All uppföljning sker via anonyma länkar.
- **Inloggning via Magic Link** (Julia anger sin e-post, får en länk — inget lösenord).
- **Data lagras i EU** (Supabase, region Frankfurt).
- **Row Level Security** — varje användare ser bara sina egna uppdrag.
- **Krypterat i vila och under transport** (standard i Supabase + HTTPS via Vercel).
- **Byggd för att skalas** — fler SVT-användare kan läggas till utan att koden behöver skrivas om.

---

## Teknik

- **HTML, CSS och JavaScript** — inga ramverk, inget byggsteg, öppnas direkt i webbläsaren
- **Supabase** — databas och inloggning
- **Vercel** — publicering (appen finns live på en URL)
- **GitHub** — koden sparas online så den inte försvinner
- **PptxGenJS** — bibliotek för PowerPoint-generering, laddas via CDN

---

## Vad vi gör härnäst

1. Julia väljer design-känsla: **Ren och modern** / **Varm och personlig** / **Proffssig och stram**
2. Jag sätter upp Supabase (EU-region, tabeller, inloggning)
3. Jag bygger appen
4. Jag integrerar PowerPoint-exportfunktionen
5. Jag förladdar övningsbanken med ~12 övningar
6. Vi testar i webbläsaren
7. Jag sparar koden på GitHub
8. Jag publicerar appen via Vercel
9. Vi testar live — även på telefon
