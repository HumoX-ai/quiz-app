export const quiz = [
  {
    id: 1,
    topic: "Geografiya",
    topicId: "geografiya",
    level: "Oson",
    img: "/geography.svg",
    totalQuestions: 10,
    perQuestionScore: 1,
    questions: [
      {
        question:
          "Quyidagi daryolar qaysi okean ichida joylashgan: Nil, Kongo, Amazon, va Orinoko?",
        choices: [
          "Atlantika okeani",
          "Hind okeani",
          "Pasifik okeani",
          "Aral okeani",
        ],
        type: "MCQs",
        correctAnswer: "Atlantika okeani",
      },
      {
        question:
          "2018 yilgi yirik eng yuqori tog'laridan biri bo'lgan Mount Everest qaysi chotidan o'tkaziladi?",
        choices: ["Nepal", "Tibet", "Bhutan", "Hindiston"],
        type: "MCQs",
        correctAnswer: "Tibet",
      },
      {
        question: '"The Big Apple" nomi qanday shaharga berilgan?',
        choices: ["Londonda", "Parisda", "New Yorkda", "Dubai shahrida"],
        type: "MCQs",
        correctAnswer: "New Yorkda",
      },
      {
        question: "Amazon o'roq qaysi davlatlarda joylashgan?",
        choices: ["Braziliya", "Kolombiya", "Venesuela", "Ekvador"],
        type: "MCQs",
        correctAnswer: "Braziliya",
      },
      {
        question:
          "Sahara shahriga yaqin bo'lgan eng yirik darya qaysi okeanga oqibatlanadi?",
        choices: [
          "Atlantika okeani",
          "Hind okeani",
          "Qara dengiz",
          "Kasp dengizi",
        ],
        type: "MCQs",
        correctAnswer: "Atlantika okeani",
      },
      {
        question:
          "Eng yirik musiqa festivali sifatida mashhur bo'lgan va Indio, Kaliforniya shahrida o'tkaziladigan festivalning nomi nima?",
        choices: ["Coachella", "Woodstock", "Glastonbury", "Bonnaroo"],
        type: "MCQs",
        correctAnswer: "Coachella",
      },
      {
        question:
          '"Venice of the North" deyilgan shahar qaysi mamlakatda joylashgan?',
        choices: ["Shvetsiya", "Hollandiya", "Norvegiya", "Ispaniya"],
        type: "MCQs",
        correctAnswer: "Shvetsiya",
      },
      {
        question: "O'zbekiston poytaxti qaysi shahar?",
        choices: ["Samarkand", "Bukhoro", "Toshkent", "Qo'qon"],
        type: "MCQs",
        correctAnswer: "Toshkent",
      },
      {
        question:
          "Tugri viloyatli esa, qaysi maydon eng yirik teritoriyaga ega?",
        choices: ["Andijon", "Farg'ona", "Navoiy", "Xorazm"],
        type: "MCQs",
        correctAnswer: "Xorazm",
      },
      {
        question:
          "Kengashqoqlik vaqtida chiroqlar ko'rsatuvchi qanday sayohat vositasi bo'ladi?",
        choices: ["Metro", "Avtobus", "Tayyorat", "Tramvay"],
        type: "MCQs",
        correctAnswer: "Tramvay",
      },
    ],
  },
  {
    id: 2,
    topic: "Tarix",
    topicId: "tarix",
    level: "O'rta",
    img: "/history.svg",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        type: "MCQs",
        correctAnswer: "stringify()",
      },
      {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "var and let", "None of the above"],
        type: "MCQs",
        correctAnswer: "var and let",
      },
      {
        question:
          "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
          "document.write()",
          "console.log()",
          "window.alert",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        type: "MCQs",
        correctAnswer: "const",
      },
    ],
  },
];
