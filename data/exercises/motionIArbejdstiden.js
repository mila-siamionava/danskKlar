export const motionIArbejdstiden = {
  id: "motion-i-arbejdstiden",
  slug: "motion-i-arbejdstiden",

  title: "Motion i arbejdstiden",

  level: "PD3",
  category: "Reading comprehension",
  type: "gap-multiple-choice",

  instructions:
    "Choose the word or expression that fits the text best.",

  content: `
Eva Nielsen er 52 år og arbejder som ernæringsassistent. Hun er vild med de syv minutters gymnastik, som de 30 køkkenarbejdere i Odense Kommunes Centralkøkken har dyrket hver dag i ca. halvandet år.

"Når vi laver mad, laver vi til mellem 900 og 1000 mennesker. Du kan nok forestille dig, hvor store vores gryder er, og hvor {{1}} vores skuldre og arme bliver af at løfte gryderne. Så er det godt at få rørt musklerne," forklarer Eva Nielsen, som i 22 år har lavet mad til pensionister.

Hun forklarer, at gymnastikken betyder, at hun nu ikke har så ondt i kroppen om aftenen. Den får {{2}} blodet til at rulle i de stakkels arme og skuldre og i ryggen og nakken, der skal holde til meget sådan en arbejdsdag. Og dagen efter igen.

Og noget tyder på, at gymnastik på timeløn er en god idé, også økonomisk, {{3}} antallet af sygedage er faldet i forhold til tidligere. Man ved {{4}} ikke med sikkerhed, om faldet skyldes gymnastikken. Det kan også være andre forhold, der spiller ind, som fx kommunens nye kostpolitik.

Det er ikke kun i Odense, der laves gymnastik. Flere andre steder i landet, som hos tekstilfirmaet Kvadrat A/S i Ebeltoft, er gymnastik også et {{5}} på arbejdsstedet.

"Det er mindst 15 år siden, vi startede med gymnastik for de timelønnede med hårdt fysisk arbejde, men med tiden ville funktionærerne og andre også være med," fortæller den administrerende direktør, Mette Bendix. Hun er den glade giver af to seancer gymnastik hver dag, formiddag og eftermiddag.

"I starten blev medarbejderne lidt {{6}}, når der pludselig kom gæster i virksomheden, mens de stod og lavede gymnastik. Men nu er motionen et naturligt element," forklarer direktøren.

Ikke kun medarbejderne, men også lederne {{7}} motion på arbejdspladsen. Det viser en stor undersøgelse af arbejdsgivernes holdning til sundhedsordninger på virksomhederne, som Ledernes Hovedorganisation lavede sidste år.

Ifølge den mener flere og flere arbejdsgivere, at sund mad, rygepolitik og motion spiller en rolle for medarbejdernes præstationer på jobbet. Fx siger 83 procent af lederne, at indførelsen af sundhedsordninger har øget medarbejdernes tilfredshed og måske {{8}} også deres motivation.
`,

  questions: [
    {
      id: 1,

      options: [
        { id: "1a", text: "stærke" },
        { id: "1b", text: "kraftige" },
        { id: "1c", text: "svage" },
        { id: "1d", text: "ømme" },
      ],

      correctOptionId: "1d",

      explanation: {
        english:
          '"Ømme" means "sore / aching / tender". The workers lift very large and heavy pots, so their shoulders and arms become sore.',

        russian:
          '"Ømme" означает «болящие / ноющие / чувствительные». Работники поднимают тяжёлые кастрюли, поэтому руки и плечи начинают болеть.',

        translations: [
          {
            word: "stærke",
            english: "strong",
            russian: "сильные / крепкие",
            definitionDa:
              "at have stor fysisk kraft eller være robust",
            synonyms: ["kraftige", "robuste"],
            example:
              "Efter flere måneders træning blev hendes arme stærke.",
          },
          {
            word: "kraftige",
            english: "powerful / strong / substantial",
            russian: "мощные / сильные / крепкие",
            definitionDa:
              "at være stærk, solid eller have stor styrke",
            synonyms: ["stærke", "robuste"],
            example:
              "De kraftige medarbejdere kunne løfte de tunge gryder.",
          },
          {
            word: "svage",
            english: "weak",
            russian: "слабые",
            definitionDa:
              "at have lidt styrke eller kraft",
            synonyms: ["kraftløse", "skrøbelige"],
            example:
              "Efter sygdommen følte hun sig svag i armene.",
          },
          {
            word: "ømme",
            english: "sore / aching / tender",
            russian: "болящие / ноющие / чувствительные",
            definitionDa:
              "at gøre ondt eller være følsom efter belastning",
            synonyms: ["smertende", "ømme i musklerne"],
            example:
              "Mine skuldre er ømme efter en lang arbejdsdag.",
          },
        ],
      },
    },

    {
      id: 2,

      options: [
        { id: "2a", text: "desuden" },
        { id: "2b", text: "muligvis" },
        { id: "2c", text: "sommetider" },
        { id: "2d", text: "nemlig" },
      ],

      correctOptionId: "2d",

      explanation: {
        english:
          '"Nemlig" introduces an explanation for something just mentioned.',

        russian:
          '"Nemlig" вводит объяснение предыдущей мысли.',

        translations: [
          {
            word: "desuden",
            english: "moreover / in addition / furthermore",
            russian: "кроме того / к тому же / вдобавок",
            definitionDa:
              "bruges til at tilføje endnu en oplysning",
            synonyms: ["derudover", "yderligere"],
            example:
              "Motion giver mere energi. Desuden kan den forebygge smerter.",
          },
          {
            word: "muligvis",
            english: "possibly / perhaps",
            russian: "возможно / может быть",
            definitionDa:
              "bruges når noget kan være tilfældet, men ikke er sikkert",
            synonyms: ["måske", "eventuelt"],
            example:
              "Gymnastikken kan muligvis reducere sygefraværet.",
          },
          {
            word: "sommetider",
            english: "sometimes / at times",
            russian: "иногда / временами",
            definitionDa:
              "bruges om noget der sker nogle gange, men ikke altid",
            synonyms: ["af og til", "indimellem"],
            example:
              "Jeg har sommetider ondt i ryggen efter arbejde.",
          },
          {
            word: "nemlig",
            english: "namely / you see / indeed",
            russian: "а именно / ведь / дело в том, что",
            definitionDa:
              "bruges til at forklare eller uddybe noget, der lige er blevet sagt",
            synonyms: ["for", "det skyldes at"],
            example:
              "Gymnastikken hjælper. Den får nemlig blodet til at cirkulere.",
          },
        ],
      },
    },

    {
      id: 3,

      options: [
        { id: "3a", text: "selvom" },
        { id: "3b", text: "men" },
        { id: "3c", text: "for" },
        { id: "3d", text: "så" },
      ],

      correctOptionId: "3c",

      explanation: {
        english:
          '"For" means "because / for" here and introduces the reason for the previous statement.',

        russian:
          '"For" здесь означает «потому что / ведь» и вводит объяснение.',

        translations: [
          {
            word: "selvom",
            english: "although / even though",
            russian: "хотя / несмотря на то что",
            definitionDa:
              "bruges til at vise en kontrast mellem to forhold",
            synonyms: ["skønt", "på trods af at"],
            example:
              "Selvom arbejdet er hårdt, er medarbejderne glade.",
          },
          {
            word: "men",
            english: "but",
            russian: "но",
            definitionDa:
              "bruges til at vise modsætning eller kontrast",
            synonyms: ["dog", "imidlertid"],
            example:
              "Motion tager tid, men medarbejderne synes, det er værd at gøre.",
          },
          {
            word: "for",
            english: "because / for",
            russian: "потому что / ведь",
            definitionDa:
              "bruges til at forklare årsagen til noget",
            synonyms: ["fordi", "eftersom"],
            example:
              "Gymnastik kan være en god investering, for sygefraværet er faldet.",
          },
          {
            word: "så",
            english: "so / then",
            russian: "так что / тогда",
            definitionDa:
              "bruges til at vise en følge eller et næste trin",
            synonyms: ["derfor", "derefter"],
            example:
              "Hun havde ondt i ryggen, så hun begyndte at træne.",
          },
        ],
      },
    },

    {
      id: 4,

      options: [
        { id: "4a", text: "altså" },
        { id: "4b", text: "desuden" },
        { id: "4c", text: "dog" },
        { id: "4d", text: "derfor" },
      ],

      correctOptionId: "4c",

      explanation: {
        english:
          '"Dog" means "however / though" and introduces an important reservation.',

        russian:
          '"Dog" означает «однако / всё же» и вводит оговорку.',

        translations: [
          {
            word: "altså",
            english: "thus / so / in other words",
            russian: "итак / таким образом / то есть",
            definitionDa:
              "bruges til at sammenfatte eller forklare en konklusion",
            synonyms: ["således", "med andre ord"],
            example:
              "Sygefraværet er faldet. Motionen kan altså have haft en effekt.",
          },
          {
            word: "desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же",
            definitionDa:
              "bruges til at tilføje endnu en oplysning",
            synonyms: ["derudover", "yderligere"],
            example:
              "Motion forbedrer humøret. Desuden styrker den kroppen.",
          },
          {
            word: "dog",
            english: "however / though / nevertheless",
            russian: "однако / всё же / тем не менее",
            definitionDa:
              "bruges til at vise en modsætning eller begrænsning",
            synonyms: ["imidlertid", "alligevel"],
            example:
              "Sygefraværet er faldet. Man ved dog ikke præcist hvorfor.",
          },
          {
            word: "derfor",
            english: "therefore / for that reason",
            russian: "поэтому / по этой причине",
            definitionDa:
              "bruges til at vise en konsekvens eller et resultat",
            synonyms: ["af den grund", "dermed"],
            example:
              "Hun havde ondt i skuldrene. Derfor begyndte hun at træne.",
          },
        ],
      },
    },

    {
      id: 5,

      options: [
        { id: "5a", text: "fast punkt" },
        { id: "5b", text: "nyt indslag" },
        { id: "5c", text: "usædvanligt initiativ" },
        { id: "5d", text: "kommende arrangement" },
      ],

      correctOptionId: "5a",

      explanation: {
        english:
          '"Et fast punkt" means "a regular feature / permanent part".',

        russian:
          '"Et fast punkt" означает «постоянный пункт / регулярная часть».',

        translations: [
          {
            word: "fast punkt",
            english: "regular feature / fixed item / permanent part",
            russian: "постоянный пункт / регулярная часть",
            definitionDa:
              "noget der sker regelmæssigt eller er en permanent del af noget",
            synonyms: ["fast del", "fast element"],
            example:
              "Gymnastik er blevet et fast punkt på arbejdspladsen.",
          },
          {
            word: "nyt indslag",
            english: "new feature / new element",
            russian: "новый элемент / нововведение",
            definitionDa:
              "noget nyt der bliver tilføjet til en aktivitet eller sammenhæng",
            synonyms: ["ny aktivitet", "nyt element"],
            example:
              "Den daglige gåtur er et nyt indslag i arbejdsdagen.",
          },
          {
            word: "usædvanligt initiativ",
            english: "unusual initiative",
            russian: "необычная инициатива",
            definitionDa:
              "et tiltag der ikke er almindeligt eller forventet",
            synonyms: ["særligt tiltag", "anderledes initiativ"],
            example:
              "Gratis massage på arbejdet var et usædvanligt initiativ.",
          },
          {
            word: "kommende arrangement",
            english: "upcoming event",
            russian: "предстоящее мероприятие",
            definitionDa:
              "en aktivitet eller begivenhed der skal finde sted senere",
            synonyms: ["fremtidigt arrangement", "kommende begivenhed"],
            example:
              "Medarbejderne talte om det kommende arrangement.",
          },
        ],
      },
    },

    {
      id: 6,

      options: [
        { id: "6a", text: "glade" },
        { id: "6b", text: "stolte" },
        { id: "6c", text: "generte" },
        { id: "6d", text: "bekymrede" },
      ],

      correctOptionId: "6c",

      explanation: {
        english:
          '"Generte" means "shy / embarrassed".',

        russian:
          '"Generte" означает «застенчивые / смущённые».',

        translations: [
          {
            word: "glade",
            english: "happy / pleased",
            russian: "радостные / довольные",
            definitionDa:
              "at føle glæde eller tilfredshed",
            synonyms: ["tilfredse", "fornøjede"],
            example:
              "Medarbejderne var glade for den nye motionsordning.",
          },
          {
            word: "stolte",
            english: "proud",
            russian: "гордые",
            definitionDa:
              "at føle tilfredshed med noget man selv eller andre har gjort",
            synonyms: ["tilfredse", "beærede"],
            example:
              "De var stolte af deres gode resultater.",
          },
          {
            word: "generte",
            english: "shy / embarrassed",
            russian: "застенчивые / смущённые",
            definitionDa:
              "at føle sig usikker eller flov sammen med andre",
            synonyms: ["flove", "forlegne"],
            example:
              "I starten blev medarbejderne generte, når gæster så dem lave gymnastik.",
          },
          {
            word: "bekymrede",
            english: "worried / concerned",
            russian: "обеспокоенные / встревоженные",
            definitionDa:
              "at være urolig eller nervøs for noget",
            synonyms: ["urolige", "nervøse"],
            example:
              "Nogle medarbejdere var bekymrede for deres helbred.",
          },
        ],
      },
    },

    {
      id: 7,

      options: [
        { id: "7a", text: "har brug for" },
        { id: "7b", text: "er afhængige af" },
        { id: "7c", text: "trænger til" },
        { id: "7d", text: "går ind for" },
      ],

      correctOptionId: "7d",

      explanation: {
        english:
          '"Går ind for" means "support / are in favour of".',

        russian:
          '"Går ind for" означает «поддерживать / выступать за».',

        translations: [
          {
            word: "har brug for",
            english: "need / have a need for",
            russian: "нуждаться в / иметь потребность в",
            definitionDa:
              "at have behov for noget",
            synonyms: ["behøver", "har behov for"],
            example:
              "Medarbejderne har brug for pauser i løbet af dagen.",
          },
          {
            word: "er afhængige af",
            english: "are dependent on / depend on",
            russian: "зависят от",
            definitionDa:
              "at være nødt til at have eller bruge noget for at kunne fungere",
            synonyms: ["afhænger af", "er bundet til"],
            example:
              "Mange virksomheder er afhængige af deres medarbejdere.",
          },
          {
            word: "trænger til",
            english: "need / could use / are in need of",
            russian: "нуждаются в / им необходимо",
            definitionDa:
              "at have behov for noget, ofte fordi man er træt eller belastet",
            synonyms: ["har brug for", "behøver"],
            example:
              "Efter en lang arbejdsdag trænger medarbejderne til at slappe af.",
          },
          {
            word: "går ind for",
            english: "support / are in favour of / advocate",
            russian: "поддерживают / выступают за",
            definitionDa:
              "at støtte en idé, holdning eller bestemt løsning",
            synonyms: ["støtter", "bakker op om"],
            example:
              "Mange ledere går ind for motion på arbejdspladsen.",
          },
        ],
      },
    },

    {
      id: 8,

      options: [
        { id: "8a", text: "dermed" },
        { id: "8b", text: "faktisk" },
        { id: "8c", text: "egentlig" },
        { id: "8d", text: "delvis" },
      ],

      correctOptionId: "8a",

      explanation: {
        english:
          '"Dermed" means "thereby / consequently / as a result".',

        russian:
          '"Dermed" означает «тем самым / вследствие этого / таким образом».',

        translations: [
          {
            word: "dermed",
            english: "thereby / consequently / as a result",
            russian: "тем самым / вследствие этого / таким образом",
            definitionDa:
              "bruges til at vise en konsekvens eller et resultat",
            synonyms: ["således", "på den måde"],
            example:
              "Sundhedsordningen øgede tilfredsheden og dermed også motivationen.",
          },
          {
            word: "faktisk",
            english: "actually / in fact",
            russian: "на самом деле / фактически",
            definitionDa:
              "bruges til at understrege at noget virkelig er tilfældet",
            synonyms: ["rent faktisk", "i virkeligheden"],
            example:
              "Medarbejderne blev faktisk mere produktive.",
          },
          {
            word: "egentlig",
            english: "actually / really / properly",
            russian: "собственно / вообще-то / на самом деле",
            definitionDa:
              "bruges når man spørger til eller understreger det virkelige forhold",
            synonyms: ["i virkeligheden", "faktisk"],
            example:
              "Hvorfor begyndte virksomheden egentlig med gymnastik?",
          },
          {
            word: "delvis",
            english: "partly / partially",
            russian: "частично / отчасти",
            definitionDa:
              "kun i en vis grad og ikke fuldstændigt",
            synonyms: ["til dels", "partielt"],
            example:
              "Faldet i sygefraværet skyldes måske delvis gymnastikken.",
          },
        ],
      },
    },
  ],
};