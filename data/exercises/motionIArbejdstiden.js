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
          '"Ømme" means "sore / aching / tender". The workers lift very large and heavy pots, so their shoulders and arms become sore. "Ømme skuldre" and "ømme arme" are common Danish expressions for muscles or body parts that hurt after physical work.',

        russian:
          '"Ømme" означает «болящие / ноющие / чувствительные». Работники поднимают очень большие и тяжёлые кастрюли, поэтому руки и плечи у них начинают болеть. Выражения "ømme skuldre" и "ømme arme" естественно употребляются по-датски, когда мышцы болят после физической нагрузки.',

        translations: [
          {
            word: "stærke",
            english: "strong",
            russian: "сильные / крепкие",
          },
          {
            word: "kraftige",
            english: "powerful / strong / substantial",
            russian: "мощные / сильные / крепкие",
          },
          {
            word: "svage",
            english: "weak",
            russian: "слабые",
          },
          {
            word: "ømme",
            english: "sore / aching / tender",
            russian: "болящие / ноющие / чувствительные",
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
          '"Nemlig" means roughly "you see / namely / indeed" and is often used to introduce an explanation for something just mentioned. Eva says that the exercise makes her body hurt less in the evening, and the next sentence explains why: it gets the blood circulating.',

        russian:
          '"Nemlig" можно перевести как «ведь / дело в том, что / а именно». Это слово часто вводит объяснение предыдущей мысли. Ева говорит, что после гимнастики у неё меньше болит тело вечером, а следующее предложение объясняет почему: упражнения улучшают кровообращение.',

        translations: [
          {
            word: "desuden",
            english: "moreover / in addition / furthermore",
            russian: "кроме того / к тому же / вдобавок",
          },
          {
            word: "muligvis",
            english: "possibly / perhaps",
            russian: "возможно / может быть",
          },
          {
            word: "sommetider",
            english: "sometimes / at times",
            russian: "иногда / временами",
          },
          {
            word: "nemlig",
            english: "namely / you see / indeed",
            russian: "а именно / ведь / дело в том, что",
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
          '"For" is used here in the sense of "because / for". The statement that exercise may also be economically beneficial is supported by the fact that the number of sick days has decreased. The second clause therefore explains the first.',

        russian:
          '"For" здесь означает «потому что / ведь». Утверждение о том, что гимнастика может быть выгодной и с экономической точки зрения, объясняется тем, что количество дней отсутствия по болезни снизилось.',

        translations: [
          {
            word: "selvom",
            english: "although / even though",
            russian: "хотя / несмотря на то что",
          },
          {
            word: "men",
            english: "but",
            russian: "но",
          },
          {
            word: "for",
            english: "because / for",
            russian: "потому что / ведь",
          },
          {
            word: "så",
            english: "so / then",
            russian: "так что / тогда",
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
          '"Dog" means "however / though". The text has just said that the number of sick days has fallen, but then adds an important reservation: it is not known for certain whether the exercise caused the decrease.',

        russian:
          '"Dog" означает «однако / всё же». Перед этим говорится, что количество больничных дней уменьшилось, но затем автор делает важную оговорку: точно неизвестно, связано ли это снижение именно с гимнастикой.',

        translations: [
          {
            word: "altså",
            english: "thus / so / in other words",
            russian: "итак / таким образом / то есть",
          },
          {
            word: "desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же",
          },
          {
            word: "dog",
            english: "however / though / nevertheless",
            russian: "однако / всё же / тем не менее",
          },
          {
            word: "derfor",
            english: "therefore / for that reason",
            russian: "поэтому / по этой причине",
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
          '"Et fast punkt" means "a regular feature / a fixed part". At Kvadrat, workplace exercise has existed for at least 15 years, so it is not something new or unusual. It has become a regular part of working life.',

        russian:
          '"Et fast punkt" означает «постоянный пункт / регулярная часть чего-либо». В компании Kvadrat гимнастикой занимаются уже как минимум 15 лет, поэтому это не новое и не необычное мероприятие, а постоянная часть рабочего дня.',

        translations: [
          {
            word: "fast punkt",
            english: "regular feature / fixed item / permanent part",
            russian: "постоянный пункт / регулярная часть",
          },
          {
            word: "nyt indslag",
            english: "new feature / new element",
            russian: "новый элемент / нововведение",
          },
          {
            word: "usædvanligt initiativ",
            english: "unusual initiative",
            russian: "необычная инициатива",
          },
          {
            word: "kommende arrangement",
            english: "upcoming event",
            russian: "предстоящее мероприятие",
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
          '"Generte" means "shy / embarrassed". At first, employees felt a little embarrassed when visitors unexpectedly saw them doing gymnastics at work. The following sentence contrasts this with the present: now exercise feels completely natural.',

        russian:
          '"Generte" означает «застенчивые / смущённые». Сначала сотрудники немного смущались, когда посетители неожиданно видели их за гимнастикой. Следующее предложение показывает контраст: теперь физические упражнения воспринимаются как совершенно естественная часть работы.',

        translations: [
          {
            word: "glade",
            english: "happy / pleased",
            russian: "радостные / довольные",
          },
          {
            word: "stolte",
            english: "proud",
            russian: "гордые",
          },
          {
            word: "generte",
            english: "shy / embarrassed",
            russian: "застенчивые / смущённые",
          },
          {
            word: "bekymrede",
            english: "worried / concerned",
            russian: "обеспокоенные / встревоженные",
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
          '"Går ind for" means "support / are in favour of". The following sentences describe a survey showing that managers increasingly believe that healthy food, smoking policies and exercise are beneficial at work. Therefore, the leaders support workplace exercise.',

        russian:
          '"Går ind for" означает «поддерживать / выступать за». Далее описывается исследование, согласно которому руководители всё чаще считают здоровое питание, политику в отношении курения и физическую активность полезными для работы. Поэтому речь идёт о том, что руководители поддерживают физические упражнения на рабочем месте.',

        translations: [
          {
            word: "har brug for",
            english: "need / have a need for",
            russian: "нуждаться в / иметь потребность в",
          },
          {
            word: "er afhængige af",
            english: "are dependent on / depend on",
            russian: "зависят от",
          },
          {
            word: "trænger til",
            english: "need / could use / are in need of",
            russian: "нуждаются в / им необходимо",
          },
          {
            word: "går ind for",
            english: "support / are in favour of / advocate",
            russian: "поддерживают / выступают за",
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
          '"Dermed" means "thereby / consequently / as a result". The health programmes have increased employee satisfaction and may, as a consequence of that, also have increased their motivation. The word expresses a result or consequence.',

        russian:
          '"Dermed" означает «тем самым / вследствие этого / таким образом». Программы по укреплению здоровья повысили удовлетворённость сотрудников и, как следствие, возможно, также повысили их мотивацию. Слово выражает результат или следствие.',

        translations: [
          {
            word: "dermed",
            english: "thereby / consequently / as a result",
            russian: "тем самым / вследствие этого / таким образом",
          },
          {
            word: "faktisk",
            english: "actually / in fact",
            russian: "на самом деле / фактически",
          },
          {
            word: "egentlig",
            english: "actually / really / properly",
            russian: "собственно / вообще-то / на самом деле",
          },
          {
            word: "delvis",
            english: "partly / partially",
            russian: "частично / отчасти",
          },
        ],
      },
    },
  ],
};