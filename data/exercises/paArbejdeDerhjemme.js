export const paArbejdeDerhjemme = {
  id: "pa-arbejde-derhjemme",
  slug: "pa-arbejde-derhjemme",

  title: "På arbejde derhjemme",

  level: "PD3",
  category: "Reading comprehension",
  type: "gap-multiple-choice",

  instructions:
    "Choose the word or expression that fits the text best.",

  content: `
En ny undersøgelse viser, at mere end hver fjerde dansker i dag arbejder hjemme mindst én gang om måneden. Antallet er steget de sidste fem år. Og alt tyder på, at det bliver ved med at stige.

Der kan være mange årsager til, at så mange danskere vælger at tage en hjemmearbejdsdag. En {{1}} forklaring kan være, at de fleste i dag har adgang til internettet derhjemme. For der er mange, der har et arbejde, som kan klares hjemmefra. De skal bare have en computer og en telefon. {{2}} oplever mange samtidig, at det er mindre stressende at arbejde hjemme. De synes, at det er nemmere at planlægge arbejdsdagen, så familielivet også fungerer godt.

Arbejdsgiverne er også glade for, at medarbejderne kan arbejde hjemme. Der er {{3}} flere undersøgelser, der viser, at folk arbejder mere effektivt derhjemme end på arbejdspladsen.

Det er dog ikke altid en fordel at arbejde hjemme, hvis hjemmet er den primære arbejdsplads. Nogle medarbejdere kommer til at arbejde for meget, og det kan {{4}} familien, fordi man ikke har tid til at tage sig af sin ægtefælle og sine børn. Nogle medarbejdere vil nemlig gerne yde en ekstra indsats, {{5}} den frihed og tillid arbejdsgiveren viser dem.

Det er heller ikke en fordel at arbejde hjemme, hvis det sociale samvær med kollegerne betyder meget for én. Så kan det være svært at {{6}} den daglige kontakt med kollegerne på arbejdspladsen.

Men selv om der er nogle ulemper ved at arbejde hjemme, er hjemmearbejdspladsen nok kommet for at blive. Det er ikke længere normen, at arbejde er noget, der skal foregå på en arbejdsplads mellem 8 og 16. Nu handler arbejdslivet i stedet om {{7}}. Vi vil f.eks. gerne selv bestemme, hvor og hvornår vi arbejder. Og det går fint, hvis bare vi {{8}} de aftaler, der er indgået med arbejdsgiveren.
`,

  questions: [
    {
      id: 1,

      options: [
        { id: "1a", text: "anden" },
        { id: "1b", text: "væsentlig" },
        { id: "1c", text: "foreløbig" },
        { id: "1d", text: "lignende" },
      ],

      correctOptionId: "1b",

      explanation: {
        english:
          '"Væsentlig" means "significant / important". The text introduces one important explanation for why many Danes work from home.',

        russian:
          '"Væsentlig" означает «существенный / важный». В тексте приводится одна из важных причин работы из дома.',

        translations: [
          {
            word: "anden",
            english: "another / other",
            russian: "другой / ещё один",
            definitionDa:
              "en anden person, ting eller mulighed end den allerede nævnte",
            synonyms: ["en anden", "alternativ"],
            example:
              "En anden forklaring kan være, at medarbejderne sparer transporttid.",
          },
          {
            word: "væsentlig",
            english: "significant / important / essential",
            russian: "существенный / важный / значительный",
            definitionDa:
              "noget der har stor betydning eller er vigtigt",
            synonyms: ["vigtig", "betydningsfuld"],
            example:
              "En væsentlig fordel ved hjemmearbejde er større fleksibilitet.",
          },
          {
            word: "foreløbig",
            english: "preliminary / temporary / for the time being",
            russian: "предварительный / временный / пока что",
            definitionDa:
              "noget der gælder indtil videre, men kan ændres senere",
            synonyms: ["midlertidig", "indtil videre"],
            example:
              "Den foreløbige plan er, at medarbejderne arbejder hjemme to dage om ugen.",
          },
          {
            word: "lignende",
            english: "similar / comparable",
            russian: "похожий / подобный",
            definitionDa:
              "noget der minder om noget andet",
            synonyms: ["tilsvarende", "beslægtet"],
            example:
              "Andre virksomheder har indført lignende ordninger.",
          },
        ],
      },
    },

    {
      id: 2,

      options: [
        { id: "2a", text: "Alligevel" },
        { id: "2b", text: "Imidlertid" },
        { id: "2c", text: "Desuden" },
        { id: "2d", text: "Ellers" },
      ],

      correctOptionId: "2c",

      explanation: {
        english:
          '"Desuden" means "moreover / in addition". It adds another advantage of working from home.',

        russian:
          '"Desuden" означает «кроме того / к тому же» и добавляет ещё одно преимущество.',

        translations: [
          {
            word: "alligevel",
            english: "nevertheless / anyway / despite that",
            russian: "тем не менее / всё равно / несмотря на это",
            definitionDa:
              "bruges når noget sker på trods af en situation eller forventning",
            synonyms: ["ikke desto mindre", "trods det"],
            example:
              "Hun havde travlt, men arbejdede alligevel hjemme.",
          },
          {
            word: "imidlertid",
            english: "however / nevertheless / meanwhile",
            russian: "однако / тем не менее / между тем",
            definitionDa:
              "bruges til at vise kontrast mellem to oplysninger",
            synonyms: ["dog", "ikke desto mindre"],
            example:
              "Hjemmearbejde har mange fordele. Imidlertid kan det også være ensomt.",
          },
          {
            word: "desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же / вдобавок",
            definitionDa:
              "bruges til at tilføje endnu en oplysning",
            synonyms: ["derudover", "yderligere"],
            example:
              "Man sparer transporttid. Desuden oplever mange mindre stress.",
          },
          {
            word: "ellers",
            english: "otherwise / else",
            russian: "иначе / в противном случае",
            definitionDa:
              "bruges til at beskrive hvad der sker, hvis noget andet ikke sker",
            synonyms: ["i modsat fald", "ellers"],
            example:
              "Du skal overholde aftalen, ellers kan ordningen blive ændret.",
          },
        ],
      },
    },

    {
      id: 3,

      options: [
        { id: "3a", text: "nemlig" },
        { id: "3b", text: "dog" },
        { id: "3c", text: "omvendt" },
        { id: "3d", text: "dermed" },
      ],

      correctOptionId: "3a",

      explanation: {
        english:
          '"Nemlig" introduces an explanation for why employers like home working.',

        russian:
          '"Nemlig" вводит объяснение того, почему работодателям нравится удалённая работа.',

        translations: [
          {
            word: "nemlig",
            english: "namely / you see / indeed / because",
            russian: "а именно / ведь / дело в том, что",
            definitionDa:
              "bruges til at forklare eller begrunde noget",
            synonyms: ["for", "det skyldes at"],
            example:
              "Arbejdsgiverne er positive. Der er nemlig undersøgelser, der viser højere effektivitet.",
          },
          {
            word: "dog",
            english: "however / though / nevertheless",
            russian: "однако / всё же / тем не менее",
            definitionDa:
              "bruges til at vise en modsætning eller begrænsning",
            synonyms: ["imidlertid", "alligevel"],
            example:
              "Hjemmearbejde er populært. Det passer dog ikke til alle.",
          },
          {
            word: "omvendt",
            english: "conversely / the other way around",
            russian: "наоборот / напротив / обратным образом",
            definitionDa:
              "bruges når forholdet er modsat af det tidligere nævnte",
            synonyms: ["modsat", "tværtimod"],
            example:
              "Nogle arbejder bedre hjemme. Andre oplever omvendt flere forstyrrelser.",
          },
          {
            word: "dermed",
            english: "thereby / thus / consequently",
            russian: "тем самым / таким образом / вследствие этого",
            definitionDa:
              "bruges til at vise en følge eller konsekvens",
            synonyms: ["således", "på den måde"],
            example:
              "Transporttiden forsvinder, og medarbejderne får dermed mere fritid.",
          },
        ],
      },
    },

    {
      id: 4,

      options: [
        { id: "4a", text: "aflaste" },
        { id: "4b", text: "støtte" },
        { id: "4c", text: "belaste" },
        { id: "4d", text: "styrke" },
      ],

      correctOptionId: "4c",

      explanation: {
        english:
          '"Belaste" means "to burden / put strain on". Working too much can put pressure on the family.',

        russian:
          '"Belaste" означает «нагружать / обременять / создавать нагрузку».',

        translations: [
          {
            word: "aflaste",
            english: "to relieve / ease the burden on",
            russian: "разгружать / облегчать нагрузку",
            definitionDa:
              "at gøre en belastning mindre for en person eller situation",
            synonyms: ["lette", "hjælpe"],
            example:
              "Fleksible arbejdstider kan aflaste familien.",
          },
          {
            word: "støtte",
            english: "to support",
            russian: "поддерживать",
            definitionDa:
              "at hjælpe eller bakke nogen eller noget op",
            synonyms: ["hjælpe", "bakke op"],
            example:
              "Arbejdsgiveren kan støtte medarbejderen med gode arbejdsredskaber.",
          },
          {
            word: "belaste",
            english: "to burden / strain / put pressure on",
            russian: "нагружать / обременять / создавать нагрузку",
            definitionDa:
              "at skabe pres eller gøre noget mere krævende",
            synonyms: ["påvirke negativt", "lægge pres på"],
            example:
              "For meget arbejde kan belaste familien.",
          },
          {
            word: "styrke",
            english: "to strengthen / reinforce",
            russian: "укреплять / усиливать",
            definitionDa:
              "at gøre noget stærkere eller bedre",
            synonyms: ["forbedre", "forstærke"],
            example:
              "Fleksibilitet kan styrke medarbejdernes motivation.",
          },
        ],
      },
    },

    {
      id: 5,

      options: [
        { id: "5a", text: "på trods af" },
        { id: "5b", text: "til gengæld for" },
        { id: "5c", text: "i stedet for" },
        { id: "5d", text: "som betingelse for" },
      ],

      correctOptionId: "5b",

      explanation: {
        english:
          '"Til gengæld for" means "in return for / in exchange for".',

        russian:
          '"Til gengæld for" означает «в обмен на / взамен».',

        translations: [
          {
            word: "på trods af",
            english: "despite / in spite of",
            russian: "несмотря на",
            definitionDa:
              "bruges når noget sker selv om der er en hindring eller et problem",
            synonyms: ["trods", "selv om"],
            example:
              "På trods af travlhed valgte hun at arbejde hjemme.",
          },
          {
            word: "til gengæld for",
            english: "in return for / in exchange for",
            russian: "в обмен на / взамен",
            definitionDa:
              "bruges om noget man giver eller gør som modydelse for noget andet",
            synonyms: ["i bytte for", "som modydelse for"],
            example:
              "Medarbejderne yder en ekstra indsats til gengæld for større frihed.",
          },
          {
            word: "i stedet for",
            english: "instead of",
            russian: "вместо",
            definitionDa:
              "bruges når noget erstatter noget andet",
            synonyms: ["frem for", "som erstatning for"],
            example:
              "Hun arbejdede hjemme i stedet for at tage på kontoret.",
          },
          {
            word: "som betingelse for",
            english: "as a condition for",
            russian: "как условие для / при условии",
            definitionDa:
              "bruges om noget der skal være opfyldt før noget andet kan ske",
            synonyms: ["under forudsætning af", "som krav for"],
            example:
              "Medarbejderen skal overholde aftaler som betingelse for hjemmearbejde.",
          },
        ],
      },
    },

    {
      id: 6,

      options: [
        { id: "6a", text: "håndtere" },
        { id: "6b", text: "overkomme" },
        { id: "6c", text: "værdsætte" },
        { id: "6d", text: "undvære" },
      ],

      correctOptionId: "6d",

      explanation: {
        english:
          '"Undvære" means "to do without / be without".',

        russian:
          '"Undvære" означает «обходиться без / быть без».',

        translations: [
          {
            word: "håndtere",
            english: "to handle / deal with / manage",
            russian: "справляться с / обращаться с / управлять",
            definitionDa:
              "at klare eller behandle en situation eller opgave",
            synonyms: ["klare", "takle"],
            example:
              "Det kan være svært at håndtere mange arbejdsopgaver hjemme.",
          },
          {
            word: "overkomme",
            english: "to manage / cope with / overcome",
            russian: "справляться / осиливать / преодолевать",
            definitionDa:
              "at have kræfter eller mulighed for at klare noget",
            synonyms: ["klare", "magte"],
            example:
              "Hun kunne ikke overkomme både arbejde og alle opgaver derhjemme.",
          },
          {
            word: "værdsætte",
            english: "to appreciate / value",
            russian: "ценить / высоко оценивать",
            definitionDa:
              "at synes at noget eller nogen har stor værdi",
            synonyms: ["sætte pris på", "påskønne"],
            example:
              "Mange medarbejdere værdsætter kontakten med deres kolleger.",
          },
          {
            word: "undvære",
            english: "to do without / be without",
            russian: "обходиться без / быть без",
            definitionDa:
              "at klare sig uden noget eller nogen",
            synonyms: ["være uden", "klare sig uden"],
            example:
              "Nogle medarbejdere har svært ved at undvære den daglige kontakt med kolleger.",
          },
        ],
      },
    },

    {
      id: 7,

      options: [
        { id: "7a", text: "motivation" },
        { id: "7b", text: "fleksibilitet" },
        { id: "7c", text: "solidaritet" },
        { id: "7d", text: "effektivitet" },
      ],

      correctOptionId: "7b",

      explanation: {
        english:
          '"Fleksibilitet" means "flexibility". Being able to choose where and when to work is an example of flexibility.',

        russian:
          '"Fleksibilitet" означает «гибкость». Возможность выбирать место и время работы является примером гибкости.',

        translations: [
          {
            word: "motivation",
            english: "motivation",
            russian: "мотивация",
            definitionDa:
              "lyst og drivkraft til at gøre eller opnå noget",
            synonyms: ["drivkraft", "arbejdslyst"],
            example:
              "Frihed i arbejdet kan øge medarbejdernes motivation.",
          },
          {
            word: "fleksibilitet",
            english: "flexibility",
            russian: "гибкость",
            definitionDa:
              "muligheden for at tilpasse eller ændre noget efter behov",
            synonyms: ["smidighed", "tilpasningsevne"],
            example:
              "Fleksibilitet gør det muligt at vælge, hvor og hvornår man arbejder.",
          },
          {
            word: "solidaritet",
            english: "solidarity",
            russian: "солидарность",
            definitionDa:
              "følelse af fællesskab og støtte mellem mennesker",
            synonyms: ["sammenhold", "fællesskab"],
            example:
              "God solidaritet mellem kolleger kan skabe et stærkt team.",
          },
          {
            word: "effektivitet",
            english: "efficiency / effectiveness",
            russian: "эффективность / результативность",
            definitionDa:
              "evnen til at opnå et godt resultat med mindst mulig tid eller indsats",
            synonyms: ["produktivitet", "virkningsgrad"],
            example:
              "Mange oplever højere effektivitet, når de arbejder hjemme.",
          },
        ],
      },
    },

    {
      id: 8,

      options: [
        { id: "8a", text: "ændrer" },
        { id: "8b", text: "udvider" },
        { id: "8c", text: "dropper" },
        { id: "8d", text: "overholder" },
      ],

      correctOptionId: "8d",

      explanation: {
        english:
          '"Overholder" means "complies with / keeps / observes". "Overholde en aftale" means to keep an agreement.',

        russian:
          '"Overholder" означает «соблюдает / выполняет». "Overholde en aftale" — соблюдать договорённость.',

        translations: [
          {
            word: "ændrer",
            english: "changes / alters",
            russian: "изменяет / меняет",
            definitionDa:
              "at gøre noget anderledes end det var før",
            synonyms: ["forandrer", "modificerer"],
            example:
              "Virksomheden ændrer reglerne for hjemmearbejde.",
          },
          {
            word: "udvider",
            english: "expands / extends",
            russian: "расширяет / увеличивает",
            definitionDa:
              "at gøre noget større eller mere omfattende",
            synonyms: ["forøger", "forlænger"],
            example:
              "Virksomheden udvider muligheden for at arbejde hjemme.",
          },
          {
            word: "dropper",
            english: "drops / gives up / abandons",
            russian: "отказывается от / бросает / отменяет",
            definitionDa:
              "at vælge ikke at fortsætte med noget",
            synonyms: ["opgiver", "aflyser"],
            example:
              "Virksomheden dropper den gamle regel om faste kontordage.",
          },
          {
            word: "overholder",
            english: "complies with / observes / keeps",
            russian: "соблюдает / выполняет",
            definitionDa:
              "at følge en regel, aftale eller forpligtelse",
            synonyms: ["følger", "respekterer"],
            example:
              "Ordningen fungerer godt, hvis medarbejderne overholder deres aftaler.",
          },
        ],
      },
    },
  ],
};