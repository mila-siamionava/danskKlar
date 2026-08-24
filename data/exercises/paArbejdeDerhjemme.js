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
          '"Væsentlig" means "significant / important". The phrase "en væsentlig forklaring" means an important or significant explanation. The text is introducing one important reason why many Danes choose to work from home.',

        russian:
          '"Væsentlig" означает «существенный / важный». Выражение "en væsentlig forklaring" означает «важное / существенное объяснение». В тексте приводится одна из важных причин, почему многие датчане выбирают работу из дома.',

        translations: [
          {
            word: "anden",
            english: "another / other",
            russian: "другой / ещё один",
          },
          {
            word: "væsentlig",
            english: "significant / important / essential",
            russian: "существенный / важный / значительный",
          },
          {
            word: "foreløbig",
            english: "preliminary / temporary / for the time being",
            russian: "предварительный / временный / пока что",
          },
          {
            word: "lignende",
            english: "similar / comparable",
            russian: "похожий / подобный",
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
          '"Desuden" means "moreover / in addition". The previous sentences explain that many people can work from home because they only need a computer and a phone. The next sentence adds another advantage: many people also find working from home less stressful.',

        russian:
          '"Desuden" означает «кроме того / к тому же». В предыдущих предложениях говорится, что многие могут работать из дома, потому что им достаточно компьютера и телефона. Затем добавляется ещё одно преимущество: многие также считают работу из дома менее стрессовой.',

        translations: [
          {
            word: "Alligevel",
            english: "nevertheless / anyway / despite that",
            russian: "тем не менее / всё равно / несмотря на это",
          },
          {
            word: "Imidlertid",
            english: "however / nevertheless / meanwhile",
            russian: "однако / тем не менее / между тем",
          },
          {
            word: "Desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же / вдобавок",
          },
          {
            word: "Ellers",
            english: "otherwise / else",
            russian: "иначе / в противном случае",
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
          '"Nemlig" introduces an explanation or supporting information. The text first says that employers are also happy that employees can work from home. It then explains why: there are studies showing that people work more efficiently at home.',

        russian:
          '"Nemlig" вводит объяснение или уточнение предыдущего утверждения. Сначала говорится, что работодатели тоже довольны возможностью сотрудников работать из дома. Затем объясняется почему: существуют исследования, показывающие, что дома люди работают эффективнее.',

        translations: [
          {
            word: "nemlig",
            english: "namely / you see / indeed / because",
            russian: "а именно / ведь / дело в том, что",
          },
          {
            word: "dog",
            english: "however / though / nevertheless",
            russian: "однако / всё же / тем не менее",
          },
          {
            word: "omvendt",
            english: "conversely / the other way around",
            russian: "наоборот / напротив / обратным образом",
          },
          {
            word: "dermed",
            english: "thereby / thus / consequently",
            russian: "тем самым / таким образом / вследствие этого",
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
          '"Belaste" means "to burden / put strain on". The text says that some employees work too much when working from home, which can put pressure on their family because they have less time for their spouse and children.',

        russian:
          '"Belaste" означает «нагружать / обременять / создавать нагрузку». В тексте говорится, что некоторые сотрудники дома начинают работать слишком много, и это может создавать нагрузку на семью, потому что у них остаётся меньше времени на супруга и детей.',

        translations: [
          {
            word: "aflaste",
            english: "to relieve / ease the burden on",
            russian: "разгружать / облегчать нагрузку",
          },
          {
            word: "støtte",
            english: "to support",
            russian: "поддерживать",
          },
          {
            word: "belaste",
            english: "to burden / strain / put pressure on",
            russian: "нагружать / обременять / создавать нагрузку",
          },
          {
            word: "styrke",
            english: "to strengthen / reinforce",
            russian: "укреплять / усиливать",
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
          '"Til gengæld for" means "in return for / in exchange for". The employees are willing to make an extra effort in return for the freedom and trust that their employer gives them.',

        russian:
          '"Til gengæld for" означает «в обмен на / взамен». Сотрудники готовы прикладывать дополнительные усилия в обмен на свободу и доверие, которые им предоставляет работодатель.',

        translations: [
          {
            word: "på trods af",
            english: "despite / in spite of",
            russian: "несмотря на",
          },
          {
            word: "til gengæld for",
            english: "in return for / in exchange for",
            russian: "в обмен на / взамен",
          },
          {
            word: "i stedet for",
            english: "instead of",
            russian: "вместо",
          },
          {
            word: "som betingelse for",
            english: "as a condition for",
            russian: "как условие для / при условии",
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
          '"Undvære" means "to do without / be without". The sentence says that if social contact with colleagues is important to someone, it can be difficult to do without the daily contact they normally have at the workplace.',

        russian:
          '"Undvære" означает «обходиться без / быть без чего-либо». В предложении говорится, что если человеку важно общение с коллегами, ему может быть трудно обходиться без ежедневного контакта с ними на рабочем месте.',

        translations: [
          {
            word: "håndtere",
            english: "to handle / deal with / manage",
            russian: "справляться с / обращаться с / управлять",
          },
          {
            word: "overkomme",
            english: "to manage / cope with / overcome",
            russian: "справляться / осиливать / преодолевать",
          },
          {
            word: "værdsætte",
            english: "to appreciate / value",
            russian: "ценить / высоко оценивать",
          },
          {
            word: "undvære",
            english: "to do without / be without",
            russian: "обходиться без / быть без",
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
          '"Fleksibilitet" means "flexibility". This is confirmed by the following sentence: people would like to decide for themselves where and when they work. Being able to choose the place and time of work is an example of flexibility.',

        russian:
          '"Fleksibilitet" означает «гибкость». Это подтверждается следующим предложением: люди хотят сами решать, где и когда им работать. Возможность выбирать место и время работы является примером гибкости.',

        translations: [
          {
            word: "motivation",
            english: "motivation",
            russian: "мотивация",
          },
          {
            word: "fleksibilitet",
            english: "flexibility",
            russian: "гибкость",
          },
          {
            word: "solidaritet",
            english: "solidarity",
            russian: "солидарность",
          },
          {
            word: "effektivitet",
            english: "efficiency / effectiveness",
            russian: "эффективность / результативность",
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
          '"Overholder" means "comply with / keep / observe". The fixed expression "overholde en aftale" means to keep or comply with an agreement. The idea is that flexible working arrangements work well as long as employees respect the agreements made with their employer.',

        russian:
          '"Overholder" означает «соблюдает / выполняет». Устойчивое выражение "overholde en aftale" означает «соблюдать / выполнять договорённость». Смысл предложения в том, что гибкая работа хорошо функционирует, если сотрудники соблюдают договорённости с работодателем.',

        translations: [
          {
            word: "ændrer",
            english: "changes / alters",
            russian: "изменяет / меняет",
          },
          {
            word: "udvider",
            english: "expands / extends",
            russian: "расширяет / увеличивает",
          },
          {
            word: "dropper",
            english: "drops / gives up / abandons",
            russian: "отказывается от / бросает / отменяет",
          },
          {
            word: "overholder",
            english: "complies with / observes / keeps",
            russian: "соблюдает / выполняет",
          },
        ],
      },
    },
  ],
};