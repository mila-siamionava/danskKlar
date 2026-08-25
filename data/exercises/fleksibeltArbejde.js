export const fleksibeltArbejde = {
  id: "fleksibelt-arbejde",
  slug: "fleksibelt-arbejde",

  title: "Flere og flere danskere har fleksibelt arbejde",

  level: "PD3",
  category: "Reading comprehension",
  type: "gap-multiple-choice",

  instructions:
    "Choose the word or expression that fits the text best.",

  content: `
Fremtidens arbejdsplads er fleksibel. Medarbejderne kommer selv til at bestemme, hvor og hvornår de er på arbejde. Sådan har arbejdsmarkedsforskere sagt i mange år. Men hvor langt er vi egentlig nået?

Internationale undersøgelser viser, at man i Danmark har en høj grad af fleksibilitet, hvad angår arbejdstid og arbejdssted. Når man sammenligner med andre lande, ligger Danmark {{1}} på førstepladsen. Typisk svarer omkring 33 procent af de adspurgte danskere nemlig, at de har et job med fuld fleksibilitet med hensyn til arbejdstid og -sted. På europæisk plan er tallet derimod kun cirka 17 procent.

Arbejdsmarkedsforsker Frede Thomassen bekræfter tendensen mod større og større fleksibilitet på arbejdsmarkedet: "Der er stigende antal danske virksomheder, hvor medarbejderne arbejder et varierende antal timer om ugen afhængigt af, hvor meget arbejdskraft virksomhederne har brug for," siger han og fortsætter: "{{2}} er der flere og flere danske arbejdspladser, hvor man kan flytte arbejdet til om aftenen eller weekenden. For eksempel hvis man har brug for tid til et sygt barn eller en privat aftale. Jeg tror derfor, at den typiske arbejdsuge, hvor arbejdstiden ligger fast fra mandag til fredag fra 8 til 16, vil {{3}} i Danmark."

Frede Thomassen tilføjer: "I Danmark er der samtidig en tendens til fleksibilitet i forhold til det {{4}} arbejdssted. Én dag arbejder man for eksempel på kontoret, den næste dag derhjemme og den tredje dag på café med en kollega. Alt tyder på, at der fremover vil være flere og flere medarbejdere, som udfører deres arbejde andre steder end på selve arbejdspladsen."

Vivi Albrechtsen er udviklingskonsulent i en stor dansk softwarevirksomhed. Hun er enig med Frede Thomassen. Hun peger på, at vi allerede har {{5}} til at give endnu flere medarbejdere et fleksibelt arbejdsliv. For eksempel har vi i dag både mobiltelefoner og bærbare computere. De gør det {{6}} at udføre mange arbejdsopgaver online. Det betyder, at medarbejderne kan lave deres arbejde når som helst og hvor som helst. Mange flere virksomheder burde {{7}} de digitale teknologier, mener hun. For det ville betyde, at mange flere danskere ville kunne få fleksibilitet på jobbet.

"Vi ved fra tidligere undersøgelser, at det især er de største virksomheder, som tilbyder fleksibilitet til medarbejderne. Derimod er der mange små og mellemstore virksomheder, som ikke er klar til at lade deres medarbejdere bestemme, hvor og hvornår de vil arbejde. Det er synd for både virksomheder og medarbejdere. For fleksible arbejdsforhold skaber glade og mere produktive medarbejdere. Den gammeldags "8-16-model" er dermed {{8}} stress," siger Vivi Albrechtsen og forklarer: "Det er hårdt for folk, når deres arbejdsopgaver skal udføres på bestemte tidspunkter."
`,

  questions: [
    {
      id: 1,

      options: [
        { id: "1a", text: "tværtimod" },
        { id: "1b", text: "desværre" },
        { id: "1c", text: "derimod" },
        { id: "1d", text: "faktisk" },
      ],

      correctOptionId: "1d",

      explanation: {
        english:
          '"Faktisk" means "actually / in fact". The sentence emphasizes that when Denmark is compared with other countries, it is in fact in first place when it comes to flexibility.',

        russian:
          '"Faktisk" означает «фактически / на самом деле». В предложении подчёркивается, что при сравнении с другими странами Дания действительно занимает первое место по степени гибкости.',

        translations: [
          {
            word: "tværtimod",
            english: "on the contrary / quite the opposite",
            russian: "наоборот / напротив",

            definitionDa:
              "bruges til at sige, at noget er det modsatte af det, der lige er blevet sagt",

            synonyms: [
              "modsat",
              "lige omvendt",
            ],

            example:
              "Det blev ikke lettere. Tværtimod blev situationen mere kompliceret.",
          },

          {
            word: "desværre",
            english: "unfortunately",
            russian: "к сожалению",

            definitionDa:
              "bruges når man fortæller om noget negativt eller beklageligt",

            synonyms: [
              "beklageligvis",
            ],

            example:
              "Desværre har ikke alle medarbejdere mulighed for at arbejde hjemme.",
          },

          {
            word: "derimod",
            english: "on the other hand / in contrast",
            russian: "напротив / с другой стороны",

            definitionDa:
              "bruges til at sammenligne to ting og vise en forskel eller kontrast",

            synonyms: [
              "til gengæld",
              "på den anden side",
            ],

            example:
              "Store virksomheder tilbyder ofte fleksibilitet. Små virksomheder er derimod mere tilbageholdende.",
          },

          {
            word: "faktisk",
            english: "actually / in fact",
            russian: "фактически / на самом деле",

            definitionDa:
              "bruges til at understrege, at noget virkelig er sådan",

            synonyms: [
              "i virkeligheden",
              "rent faktisk",
            ],

            example:
              "Danmark ligger faktisk på førstepladsen, når man sammenligner fleksibilitet på arbejdsmarkedet.",
          },
        ],
      },
    },

    {
      id: 2,

      options: [
        { id: "2a", text: "Hermed" },
        { id: "2b", text: "Desuden" },
        { id: "2c", text: "Derfor" },
        { id: "2d", text: "Alligevel" },
      ],

      correctOptionId: "2b",

      explanation: {
        english:
          '"Desuden" means "moreover / in addition". Frede Thomassen has already mentioned one form of flexibility — varying the number of working hours. He then adds another example: more workplaces allow employees to move their work to evenings or weekends.',

        russian:
          '"Desuden" означает «кроме того / к тому же». Фреде Томассен уже приводит один пример гибкости — изменение количества рабочих часов. Затем он добавляет ещё один: всё больше работодателей позволяют переносить работу на вечер или выходные.',

        translations: [
          {
            word: "Hermed",
            english: "hereby / by this",
            russian: "настоящим / посредством этого",

            definitionDa:
              "bruges især i formelt sprog om noget, der sker eller erklæres med denne handling eller besked",

            synonyms: [
              "med dette",
              "dermed",
            ],

            example:
              "Hermed sender jeg de dokumenter, du har bedt om.",
          },

          {
            word: "Desuden",
            english: "moreover / furthermore / in addition",
            russian: "кроме того / к тому же / вдобавок",

            definitionDa:
              "bruges til at tilføje endnu en oplysning eller endnu et argument",

            synonyms: [
              "derudover",
              "yderligere",
            ],

            example:
              "Desuden er der flere arbejdspladser, hvor medarbejderne kan arbejde om aftenen eller i weekenden.",
          },

          {
            word: "Derfor",
            english: "therefore / for that reason",
            russian: "поэтому / по этой причине",

            definitionDa:
              "bruges til at vise en konsekvens eller et resultat af noget",

            synonyms: [
              "af den grund",
              "dermed",
            ],

            example:
              "Arbejdet er blevet mere fleksibelt. Derfor kan medarbejderne lettere tilpasse arbejdstiden.",
          },

          {
            word: "Alligevel",
            english: "nevertheless / anyway / despite that",
            russian: "тем не менее / всё равно / несмотря на это",

            definitionDa:
              "bruges når noget sker på trods af en situation eller forventning",

            synonyms: [
              "ikke desto mindre",
              "trods det",
            ],

            example:
              "Hun havde meget travlt, men hun tog alligevel fri om eftermiddagen.",
          },
        ],
      },
    },

    {
      id: 3,

      options: [
        { id: "3a", text: "forsvinde" },
        { id: "3b", text: "prioriteres" },
        { id: "3c", text: "forblive" },
        { id: "3d", text: "fastholdes" },
      ],

      correctOptionId: "3a",

      explanation: {
        english:
          '"Forsvinde" means "to disappear". The researcher believes that the traditional working week with fixed hours from Monday to Friday will gradually disappear because work is becoming more flexible.',

        russian:
          '"Forsvinde" означает «исчезать». Исследователь считает, что традиционная рабочая неделя с фиксированным графиком с понедельника по пятницу постепенно исчезнет, поскольку работа становится более гибкой.',

        translations: [
          {
            word: "forsvinde",
            english: "to disappear / vanish",
            russian: "исчезать / пропадать",

            definitionDa:
              "at holde op med at være til stede eller eksistere",

            synonyms: [
              "blive væk",
              "ophøre",
            ],

            example:
              "Den traditionelle arbejdsuge med faste arbejdstider vil måske langsomt forsvinde.",
          },

          {
            word: "prioriteres",
            english: "to be prioritised / given priority",
            russian: "быть приоритетным / получать приоритет",

            definitionDa:
              "at blive vurderet som vigtigere end noget andet og derfor komme først",

            synonyms: [
              "sættes først",
              "gives høj prioritet",
            ],

            example:
              "Medarbejdernes trivsel bør prioriteres højt på arbejdspladsen.",
          },

          {
            word: "forblive",
            english: "to remain / stay",
            russian: "оставаться",

            definitionDa:
              "at fortsætte med at være i samme tilstand eller på samme sted",

            synonyms: [
              "blive",
              "fortsætte med at være",
            ],

            example:
              "Nogle medarbejdere foretrækker at forblive på kontoret hele arbejdsdagen.",
          },

          {
            word: "fastholdes",
            english: "to be maintained / retained / kept",
            russian: "сохраняться / удерживаться",

            definitionDa:
              "at blive bevaret eller holdt på samme niveau eller i samme situation",

            synonyms: [
              "bevares",
              "opretholdes",
            ],

            example:
              "Den nuværende arbejdstid kan fastholdes, hvis medarbejderne ønsker det.",
          },
        ],
      },
    },

    {
      id: 4,

      options: [
        { id: "4a", text: "midlertidige" },
        { id: "4b", text: "trygge" },
        { id: "4c", text: "stressende" },
        { id: "4d", text: "fysiske" },
      ],

      correctOptionId: "4d",

      explanation: {
        english:
          '"Det fysiske arbejdssted" means "the physical workplace". The paragraph is about location flexibility: employees may work in the office one day, from home the next day, and from a café on another day.',

        russian:
          '"Det fysiske arbejdssted" означает «физическое место работы». Абзац посвящён гибкости места работы: в один день сотрудник работает в офисе, в другой — дома, а в третий — например, в кафе.',

        translations: [
          {
            word: "midlertidige",
            english: "temporary",
            russian: "временные",

            definitionDa:
              "noget der kun gælder eller eksisterer i en begrænset periode",

            synonyms: [
              "kortvarige",
              "foreløbige",
            ],

            example:
              "Virksomheden har oprettet nogle midlertidige arbejdspladser under renoveringen.",
          },

          {
            word: "trygge",
            english: "safe / secure",
            russian: "безопасные / надёжные",

            definitionDa:
              "at føle sig sikker, rolig og beskyttet",

            synonyms: [
              "sikre",
              "beskyttede",
            ],

            example:
              "Medarbejderne skal føle sig trygge på deres arbejdsplads.",
          },

          {
            word: "stressende",
            english: "stressful",
            russian: "стрессовые / вызывающие стресс",

            definitionDa:
              "noget der skaber pres, uro eller stress",

            synonyms: [
              "belastende",
              "pressende",
            ],

            example:
              "Faste deadlines kan være stressende for nogle medarbejdere.",
          },

          {
            word: "fysiske",
            english: "physical",
            russian: "физические",

            definitionDa:
              "noget der eksisterer konkret og fysisk, i modsætning til noget digitalt eller virtuelt",

            synonyms: [
              "konkrete",
            ],

            example:
              "Det fysiske arbejdssted kan være et kontor, et hjem eller en café.",
          },
        ],
      },
    },

    {
      id: 5,

      options: [
        { id: "5a", text: "ideologien" },
        { id: "5b", text: "energien" },
        { id: "5c", text: "teknologien" },
        { id: "5d", text: "indsigten" },
      ],

      correctOptionId: "5c",

      explanation: {
        english:
          '"Teknologien" means "the technology". The next sentence gives examples such as mobile phones and laptops, so technology is what makes it possible to give more employees a flexible working life.',

        russian:
          '"Teknologien" означает «технология / технологии». В следующем предложении приводятся примеры — мобильные телефоны и ноутбуки, поэтому именно технологии позволяют большему количеству сотрудников работать гибко.',

        translations: [
          {
            word: "ideologien",
            english: "the ideology",
            russian: "идеология",

            definitionDa:
              "et system af idéer og holdninger om, hvordan samfundet eller verden bør være",

            synonyms: [
              "tankesættet",
              "idégrundlaget",
            ],

            example:
              "Ideologien bag virksomheden lægger vægt på frihed og ansvar.",
          },

          {
            word: "energien",
            english: "the energy",
            russian: "энергия",

            definitionDa:
              "den kraft eller det overskud man har til at udføre aktiviteter",

            synonyms: [
              "overskuddet",
              "kraften",
            ],

            example:
              "Hun har mere energi, når hun kan arbejde fleksibelt.",
          },

          {
            word: "teknologien",
            english: "the technology",
            russian: "технология / технологии",

            definitionDa:
              "tekniske løsninger, systemer og redskaber, der bruges til at løse opgaver",

            synonyms: [
              "de tekniske løsninger",
              "den digitale teknologi",
            ],

            example:
              "Teknologien gør det muligt for medarbejderne at arbejde hjemmefra.",
          },

          {
            word: "indsigten",
            english: "the insight / understanding",
            russian: "понимание / осознание / знание",

            definitionDa:
              "en dybere forståelse eller viden om et bestemt emne",

            synonyms: [
              "forståelsen",
              "erkendelsen",
            ],

            example:
              "Undersøgelsen giver ny indsigt i danskernes arbejdsvaner.",
          },
        ],
      },
    },

    {
      id: 6,

      options: [
        { id: "6a", text: "muligt" },
        { id: "6b", text: "sikkert" },
        { id: "6c", text: "vigtigt" },
        { id: "6d", text: "sjovt" },
      ],

      correctOptionId: "6a",

      explanation: {
        english:
          '"Gøre det muligt at..." is a very common Danish construction meaning "make it possible to...". Mobile phones and laptops make it possible to perform many work tasks online.',

        russian:
          '"Gøre det muligt at..." — очень распространённая датская конструкция со значением «сделать возможным / дать возможность что-либо сделать». Мобильные телефоны и ноутбуки позволяют выполнять многие рабочие задачи онлайн.',

        translations: [
          {
            word: "muligt",
            english: "possible",
            russian: "возможный / возможно",

            definitionDa:
              "noget der kan lade sig gøre",

            synonyms: [
              "gennemførligt",
              "realistisk",
            ],

            example:
              "Ny teknologi gør det muligt at arbejde hjemmefra.",
          },

          {
            word: "sikkert",
            english: "safe / certain / surely",
            russian: "безопасный / наверняка / определённо",

            definitionDa:
              "noget der er uden stor risiko, eller noget man er meget sikker på",

            synonyms: [
              "trygt",
              "uden risiko",
            ],

            example:
              "Virksomheden skal sørge for, at det er sikkert at arbejde online.",
          },

          {
            word: "vigtigt",
            english: "important",
            russian: "важный / важно",

            definitionDa:
              "noget der har stor betydning og derfor bør få opmærksomhed",

            synonyms: [
              "betydningsfuldt",
              "væsentligt",
            ],

            example:
              "Det er vigtigt at have en god balance mellem arbejde og fritid.",
          },

          {
            word: "sjovt",
            english: "fun / amusing",
            russian: "весёлый / забавный / интересно",

            definitionDa:
              "noget der er underholdende eller giver glæde",

            synonyms: [
              "morsomt",
              "underholdende",
            ],

            example:
              "Det kan være sjovt at arbejde sammen med kolleger på nye måder.",
          },
        ],
      },
    },

    {
      id: 7,

      options: [
        { id: "7a", text: "fjerne" },
        { id: "7b", text: "kontrollere" },
        { id: "7c", text: "udnytte" },
        { id: "7d", text: "genbruge" },
      ],

      correctOptionId: "7c",

      explanation: {
        english:
          '"Udnytte" means "to make use of / utilise". The consultant argues that more companies should make better use of digital technologies because they allow employees to work whenever and wherever they want.',

        russian:
          '"Udnytte" означает «использовать / эффективно использовать». Консультант считает, что большему числу компаний следует использовать цифровые технологии, поскольку они дают сотрудникам возможность работать в разное время и в разных местах.',

        translations: [
          {
            word: "fjerne",
            english: "to remove / eliminate",
            russian: "удалять / устранять",

            definitionDa:
              "at tage noget væk, så det ikke længere er der",

            synonyms: [
              "tage væk",
              "eliminere",
            ],

            example:
              "Virksomheden ønsker at fjerne unødvendige regler.",
          },

          {
            word: "kontrollere",
            english: "to control / check",
            russian: "контролировать / проверять",

            definitionDa:
              "at undersøge om noget er korrekt eller fungerer, som det skal",

            synonyms: [
              "tjekke",
              "undersøge",
            ],

            example:
              "Lederen behøver ikke hele tiden at kontrollere, hvor medarbejderne arbejder.",
          },

          {
            word: "udnytte",
            english: "to utilise / make use of / exploit",
            russian: "использовать / воспользоваться",

            definitionDa:
              "at bruge noget på en effektiv eller fordelagtig måde",

            synonyms: [
              "gøre brug af",
              "anvende",
            ],

            example:
              "Flere virksomheder burde udnytte de digitale teknologier bedre.",
          },

          {
            word: "genbruge",
            english: "to reuse / recycle",
            russian: "повторно использовать / перерабатывать",

            definitionDa:
              "at bruge noget igen i stedet for at smide det væk",

            synonyms: [
              "bruge igen",
              "genanvende",
            ],

            example:
              "Virksomheden prøver at genbruge gammelt elektronisk udstyr.",
          },
        ],
      },
    },

    {
      id: 8,

      options: [
        { id: "8a", text: "en følge af" },
        { id: "8b", text: "en årsag til" },
        { id: "8c", text: "et middel mod" },
        { id: "8d", text: "et svar på" },
      ],

      correctOptionId: "8b",

      explanation: {
        english:
          '"En årsag til" means "a cause of / a reason for". Vivi Albrechtsen argues that the traditional fixed 8-to-4 working model can cause stress because employees must perform their tasks at predetermined times.',

        russian:
          '"En årsag til" означает «причина чего-либо». Виви Альбрехтсен утверждает, что традиционная модель работы с 8 до 16 может быть причиной стресса, потому что сотрудники обязаны выполнять свои задачи в строго определённое время.',

        translations: [
          {
            word: "en følge af",
            english: "a consequence of / a result of",
            russian: "следствие / результат чего-либо",

            definitionDa:
              "noget der sker som resultat eller konsekvens af noget andet",

            synonyms: [
              "et resultat af",
              "en konsekvens af",
            ],

            example:
              "Mere hjemmearbejde kan være en følge af den teknologiske udvikling.",
          },

          {
            word: "en årsag til",
            english: "a cause of / a reason for",
            russian: "причина чего-либо",

            definitionDa:
              "noget der får noget andet til at ske",

            synonyms: [
              "en grund til",
            ],

            example:
              "Manglende fleksibilitet kan være en årsag til stress.",
          },

          {
            word: "et middel mod",
            english: "a remedy for / a means against",
            russian: "средство против / средство от",

            definitionDa:
              "noget man bruger for at reducere, forhindre eller bekæmpe et problem",

            synonyms: [
              "en løsning på",
              "et middel imod",
            ],

            example:
              "Fleksible arbejdstider kan være et middel mod stress.",
          },

          {
            word: "et svar på",
            english: "an answer to / a response to",
            russian: "ответ на / реакция на",

            definitionDa:
              "en reaktion eller løsning, der gives som følge af et spørgsmål eller problem",

            synonyms: [
              "en reaktion på",
              "en løsning på",
            ],

            example:
              "Fleksibelt arbejde kan være et svar på medarbejdernes behov for mere frihed.",
          },
        ],
      },
    },
  ],
};