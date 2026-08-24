export const klarTilHund = {
  id: "klar-til-hund",
  slug: "klar-til-hund",

  title: "Klar til hund?",

  level: "PD3",
  category: "Reading comprehension",
  type: "gap-multiple-choice",

  instructions:
    "Choose the word or expression that fits the text best.",

  content: `
Flere og flere danskere får hund, men der er mange hundekøb, der ender med, at ejeren skiller sig af med hunden igen. For mange hundeejere viser det sig nemlig at være for krævende at have hund.

Et hundekøb er en investering, der kræver omtanke og grundig forberedelse. {{1}} er det ikke alle, der tænker sig lige godt om, før de bliver hundeejere, og mange bliver derfor overraskede over, hvor meget arbejde der følger med. Hunde har nemlig brug for motion og aktivering hver dag året rundt for at trives, og det bliver for meget for mange hundeejere. {{2}} beslutter de sig for at komme af med hunden. Det kan selvfølgelig være en {{3}} beslutning at tage, især hvis der er børn i familien, der har knyttet sig til hunden, men ikke desto mindre sker det meget ofte.

Line Frahm, der er leder af Dyrenes Beskyttelses dyreinternat på Fyn, kender problematikken fra sit daglige arbejde. Hun synes, der er alt for mange, der skiller sig af med deres hunde, og {{4}} er ikke kun, at der er meget arbejde ved at have en hund. Nye hundeejere opdager også, at det kan være et problem at holde ferie, fordi hunden har brug for pasning. Så afleverer de hunden på Line Frahms dyreinternat, men denne {{5}} er hun kritisk overfor:

"Der er for meget køb-og-smid-væk-kultur i Danmark, det ser vi her hver eneste dag. For eksempel er det tankevækkende, hvor mange der kommer og skiller sig af med deres hund lige op til sommerferien", siger hun.

Det er imidlertid ikke alle de uønskede hunde, der får en ny chance på et dyreinternat, for hvert år bliver op til 12.000 raske hunde aflivet hos dyrlægen. For at {{6}} det tal lancerede Fødevarestyrelsen i 2014 i partnerskab med en række organisationer kampagnen "Klar til hund?". Kampagnens formål er ikke at diktere, hvordan folk skal leve. Derimod tilbyder man på kampagnens hjemmeside blandt andet en test, hvor folk kan finde ud af, om de har forudsætninger for at købe hund. Da kampagnen blev lanceret, var daværende fødevareminister Dan Jørgensen blandt dem, der afprøvede testen. {{7}} testen var en beslutning om, at han ikke skulle have hund foreløbig:

"Jeg har selv taget testen for at se, om jeg kunne være egnet til at have hund. Det vil jeg nemlig meget gerne. Men den fraråder mig at få hund, fordi jeg er for lidt hjemme, bor i lejlighed og er ude at rejse tit", siger Dan Jørgensen.

Kampagnen "Klar til hund?" skal få flere til at {{8}} deres livsstil og sikre sig, at de reelt har plads til en hund i deres liv, før de beslutter sig for at købe én. Så vil færre hunde forhåbentlig komme på dyreinternat eller ende livet hos dyrlægen, og så har Fødevarestyrelsen opnået sit mål med kampagnen.
  `,

  questions: [
    {
      id: 1,

      options: [
        { id: "1a", text: "imidlertid" },
        { id: "1b", text: "derudover" },
        { id: "1c", text: "ligeledes" },
        { id: "1d", text: "dermed" },
      ],

      correctOptionId: "1a",

      explanation: {
        english:
          '"Imidlertid" means "however / nevertheless". It introduces a contrast. The text first says that buying a dog requires careful thought and preparation. Then it contrasts this with the fact that not everyone actually thinks carefully before becoming a dog owner.',

        russian:
          '"Imidlertid" означает «однако / тем не менее». Здесь слово вводит противопоставление. Сначала говорится, что покупка собаки требует обдуманного решения и хорошей подготовки, а затем этому противопоставляется тот факт, что далеко не все хорошо всё обдумывают перед тем, как завести собаку.',

        translations: [
          {
            word: "imidlertid",
            english: "however / nevertheless",
            russian: "однако / тем не менее",
          },
          {
            word: "derudover",
            english: "in addition / besides that / furthermore",
            russian: "кроме того / вдобавок / помимо этого",
          },
          {
            word: "ligeledes",
            english: "likewise / similarly / also",
            russian: "также / подобным образом / аналогично",
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
      id: 2,

      options: [
        { id: "2a", text: "Derfor" },
        { id: "2b", text: "Alligevel" },
        { id: "2c", text: "Desuden" },
        { id: "2d", text: "Derimod" },
      ],

      correctOptionId: "2a",

      explanation: {
        english:
          '"Derfor" means "therefore / for that reason". The previous sentence says that the daily work involved in having a dog becomes too much for many owners. The next sentence gives the consequence: therefore, they decide to get rid of the dog.',

        russian:
          '"Derfor" означает «поэтому / по этой причине». В предыдущем предложении говорится, что ежедневная забота о собаке становится слишком обременительной для многих владельцев. Следующее предложение показывает следствие: поэтому они решают избавиться от собаки.',

        translations: [
          {
            word: "Derfor",
            english: "therefore / for that reason / consequently",
            russian: "поэтому / по этой причине / вследствие этого",
          },
          {
            word: "Alligevel",
            english: "nevertheless / anyway / despite that",
            russian: "тем не менее / всё равно / несмотря на это",
          },
          {
            word: "Desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же / вдобавок",
          },
          {
            word: "Derimod",
            english: "on the other hand / in contrast",
            russian: "напротив / с другой стороны",
          },
        ],
      },
    },

    {
      id: 3,

      options: [
        { id: "3a", text: "rigtig" },
        { id: "3b", text: "vanskelig" },
        { id: "3c", text: "nødvendig" },
        { id: "3d", text: "god" },
      ],

      correctOptionId: "3b",

      explanation: {
        english:
          '"Vanskelig" means "difficult / challenging". Deciding to give up a dog can be emotionally difficult, especially if children in the family have become attached to it.',

        russian:
          '"Vanskelig" означает «трудный / сложный». Решение отказаться от собаки может быть эмоционально тяжёлым, особенно если дети в семье уже привязались к ней.',

        translations: [
          {
            word: "rigtig",
            english: "correct / right / real",
            russian: "правильный / верный / настоящий",
          },
          {
            word: "vanskelig",
            english: "difficult / challenging",
            russian: "трудный / сложный",
          },
          {
            word: "nødvendig",
            english: "necessary / required",
            russian: "необходимый / требуемый",
          },
          {
            word: "god",
            english: "good",
            russian: "хороший",
          },
        ],
      },
    },

    {
      id: 4,

      options: [
        { id: "4a", text: "formålet" },
        { id: "4b", text: "hensigten" },
        { id: "4c", text: "årsagen" },
        { id: "4d", text: "resultatet" },
      ],

      correctOptionId: "4c",

      explanation: {
        english:
          '"Årsagen" means "the reason / cause". The sentence explains why people give up their dogs. The reason is not only the amount of work involved; holidays and dog care can also become a problem.',

        russian:
          '"Årsagen" означает «причина». В предложении объясняется, почему люди отказываются от своих собак. Причиной является не только большой объём работы: отпуск и необходимость найти присмотр за собакой тоже могут стать проблемой.',

        translations: [
          {
            word: "formålet",
            english: "the purpose / objective",
            russian: "цель / назначение",
          },
          {
            word: "hensigten",
            english: "the intention / purpose",
            russian: "намерение / цель",
          },
          {
            word: "årsagen",
            english: "the reason / cause",
            russian: "причина",
          },
          {
            word: "resultatet",
            english: "the result / outcome",
            russian: "результат / итог",
          },
        ],
      },
    },

    {
      id: 5,

      options: [
        { id: "5a", text: "Aftale" },
        { id: "5b", text: "forklaring" },
        { id: "5c", text: "information" },
        { id: "5d", text: "løsning" },
      ],

      correctOptionId: "5d",

      explanation: {
        english:
          '"Løsning" means "solution". Some owners solve their problem by taking the dog to an animal shelter, but Line Frahm is critical of this solution.',

        russian:
          '"Løsning" означает «решение». Некоторые владельцы решают свою проблему, отдавая собаку в приют, однако Лине Фрам критически относится к такому способу решения проблемы.',

        translations: [
          {
            word: "aftale",
            english: "agreement / arrangement / appointment",
            russian: "договорённость / соглашение / назначенная встреча",
          },
          {
            word: "forklaring",
            english: "explanation",
            russian: "объяснение",
          },
          {
            word: "information",
            english: "information",
            russian: "информация",
          },
          {
            word: "løsning",
            english: "solution",
            russian: "решение",
          },
        ],
      },
    },

    {
      id: 6,

      options: [
        { id: "6a", text: "undersøge" },
        { id: "6b", text: "reducere" },
        { id: "6c", text: "analysere" },
        { id: "6d", text: "dokumentere" },
      ],

      correctOptionId: "6b",

      explanation: {
        english:
          '"Reducere" means "to reduce / decrease". The previous sentence mentions that up to 12,000 healthy dogs are put down every year. The campaign was launched in order to reduce that number.',

        russian:
          '"Reducere" означает «уменьшать / сокращать». В предыдущем предложении говорится, что ежегодно усыпляют до 12 000 здоровых собак. Кампания была запущена, чтобы сократить это число.',

        translations: [
          {
            word: "undersøge",
            english: "to examine / investigate / study",
            russian: "исследовать / проверять / изучать",
          },
          {
            word: "reducere",
            english: "to reduce / decrease",
            russian: "уменьшать / сокращать",
          },
          {
            word: "analysere",
            english: "to analyse",
            russian: "анализировать",
          },
          {
            word: "dokumentere",
            english: "to document / demonstrate / provide evidence",
            russian: "документировать / подтверждать / предоставлять доказательства",
          },
        ],
      },
    },

    {
      id: 7,

      options: [
        { id: "7a", text: "Konsekvensen af" },
        { id: "7b", text: "Baggrunden for" },
        { id: "7c", text: "Meningen med" },
        { id: "7d", text: "Forudsætningen for" },
      ],

      correctOptionId: "7a",

      explanation: {
        english:
          '"Konsekvensen af" means "the consequence of / the result of". Dan Jørgensen took the test, and the result was that he decided he should not get a dog for the time being.',

        russian:
          '"Konsekvensen af" означает «последствие / результат чего-либо». Дан Йёргенсен прошёл тест, и результатом стало решение пока не заводить собаку.',

        translations: [
          {
            word: "Konsekvensen af",
            english: "the consequence of / the result of",
            russian: "последствие / результат чего-либо",
          },
          {
            word: "Baggrunden for",
            english: "the background to / the reason behind",
            russian: "предыстория / причина / то, что лежит в основе",
          },
          {
            word: "Meningen med",
            english: "the purpose of / the point of / the meaning of",
            russian: "смысл / цель чего-либо",
          },
          {
            word: "Forudsætningen for",
            english: "the prerequisite for / the condition for",
            russian: "предпосылка / необходимое условие для",
          },
        ],
      },
    },

    {
      id: 8,

      options: [
        { id: "8a", text: "ændre" },
        { id: "8b", text: "acceptere" },
        { id: "8c", text: "planlægge" },
        { id: "8d", text: "overveje" },
      ],

      correctOptionId: "8d",

      explanation: {
        english:
          '"Overveje" means "to consider / think carefully about". The purpose of the campaign is to make people think carefully about their lifestyle before deciding whether a dog really fits into their life.',

        russian:
          '"Overveje" означает «обдумывать / рассматривать / взвешивать». Цель кампании — заставить людей внимательно обдумать свой образ жизни, прежде чем решать, действительно ли собака вписывается в их жизнь.',

        translations: [
          {
            word: "ændre",
            english: "to change / alter",
            russian: "изменять / менять",
          },
          {
            word: "acceptere",
            english: "to accept",
            russian: "принимать / соглашаться",
          },
          {
            word: "planlægge",
            english: "to plan",
            russian: "планировать",
          },
          {
            word: "overveje",
            english: "to consider / think over / weigh up",
            russian: "обдумывать / рассматривать / взвешивать",
          },
        ],
      },
    },
  ],
};