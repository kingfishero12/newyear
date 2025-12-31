let lines = [];
let index = 0;
let text;

// 🔥 CUSTOM THEMES (sirf selected log)
const themes = {
  "lucif_erlisa": [
    "Dhadkanon mein meri sirf tumhara hi naam hai",
    "Yeh saal tumhare saath guzaarna hi mera kaam hai.",
    "Pichla saal toh bas ek 'trailer' tha, mere humsafar.",
    "Yeh poori 'film' toh abhi baaki hai, yehi mera naya paigham hai",
    "Happy New Year ✨"
  ],

  "khushii.jain03": [
    "Khushi, this isn’t random.",
    "Your kindness shows in small ways.",
    "Never lose that softness.",
    "Happy New Year 🌙"
  ],

  "suhaniii_yadav": [
    "Suhani, pause for a second.",
    "You’ve grown stronger than you think.",
    "This year will feel lighter.",
    "Happy New Year ✨"
  ],

  "twilight__zx": [
    "Some people evolve silently.",
    "You’re one of them.",
    "Keep becoming.",
    "Happy New Year 🌌"
  ],

  "arpita_jain83": [
    "This moment is yours.",
    "You balance strength with grace.",
    "Let the new year reward that.",
    "Happy New Year 🤍"
  ],

  "shourya_goyal_7": [
    "Naye saal mein sudhar ja, bas yahi dua hai meri",
    "Zyada shararat na karna, yahi salah hai meri.",
    "Khush rehna, aabaad rehna, aur thoda kaam bhi kar lena",
    "Varna belt abhi bhi nikal sakti hai, yaad rakhna baat yeh meri!",
    "Happy New Year 🔥"
  ],

  "nimit6713": [
    "Dosti ka rishta hai, isliye tang kheenchta hai.",
    "Warna tu toh khud ek chalta-firta mazak lagta hai.",
    "Naye saal mein thoda 'smart' ho jaa, mere dost-e-azeez.",
    "Par chinta mat kar, tu jaisa hai, waisa hi achha lagta hai!",
    "Happy New Year ✨"
  ],

  "mukul801152": [
    "Kitaabon se nikal kar, ab zara duniya bhi dekh,",
    "Har exam mein top karna hi, kya bas ek dharam hai?.",
    "Naya saal Mubarak ho, mere gyaani bhaijaan",
    "Bass thoda social ho ja, yehi naya 'syllabus' hai",
    "Happy New Year 🌠"
  ],

  "aeshana_jain29": [
    "Dua hai naye saal mein, tu thodi 'shareef' ho jaaye.",
    "Sirf party maangna chhod, ab 'treat' bhi de jaaye..",
    "Khushiyan milein tujhe, yeh meri 'dil se' tamanna hai.",
    "Par is baar party teri taraf se ho, yeh 'deal' pakki ho jaaye!",
    "Happy New Year 🌸"
  ],

  "nishiii1003": [
    "Dukh-dard sunne wali, bin-paisa 'therapist' ho tum,.",
    "Meri mushkilon ki jaise koi 'master-key' ho tum.",
    "Naya saal Mubarak ho, meri sabse khaas dost.",
    "ass 'bill' mat bhejna kabhi, tum mere liye anmol ho tum!",
    "Happy New Year ✨"
  ],

  "love.luna.010": [
    "Attitude toh UP wala, dosti mein dum rakhti ho.",
    "Baton se toh lagta hai jaise, pura 'system' hila sakti ho.",
    "Naya saal Mubarak, meri 'Dabang' dost.",
    "Bas khushiyan manao, kyunki tum rock karti ho",
    "Happy New Year 🌙"
  ],

  "anzskz._.19": [
    "Duniya mein tumhari tarah, dil rakhne waale kam hain.",
    "Dosti ki raahon mein, tum har mushkil mein marham ho..",
    "Naye saal mein tumhari har dua qubool ho.",
    "Khush raho hamesha, tum sabse khoobsurat insaan ho!}",
    "Happy New Year ✨"
  ],

  "harshit_x_jain": [
    "Roommate, naya saal aa gaya, par tumhari neend wahi purani hai;.",
    "Tum toh itne aalsi ho ki, saans lena bhi tumhari meherbani hai!.",
    "Happy New Year! Aaj toh bed se uth kar wish kar do, zara! 😉",
    "Happy New Year 🔥"
  ],

  "j.pratichi": [
    "Rishta apna dosti se zyada, par jhagdon se kam hai,.",
    "Har mushkil mein tum saath ho, yeh mera sabse bada dum hai.",
    "Thanks yaar, meri life ko happy rakhne ke liye!",
    "Happy New Year! Tu sabse best hai!"
  ],

  "sheesh_kritika": [
    "Tumhari khamoshi mein woh dum hai jo kisi shor mein nahi milta,.",
    "Attitude tumhara kaabil-e-tareef hai, yeh level kisi aur ka nahi hilta.",
    "Happy New Year! Aur haan, hum jaison ko yaad rakhna. 😉.",
    "Happy New Year 🌙"
  ]
};

// 🟢 DEFAULT THEME (baaki sabke liye — unchanged)
const defaultTheme = [
  "This moment was made for you.",
  "You made it through more than you admit.",
  "Not every battle was loud.",
  "Still, you’re here.",
  "Happy New Year ✨"
];

function startExperience() {
  const input = document.getElementById("username").value.trim();
  if (!input) {
    alert("please enter your instagram id");
    return;
  }

  const user = input.replace("@", "").toLowerCase();

  document.getElementById("input-screen").style.display = "none";
  document.getElementById("experience-screen").style.display = "block";

  text = document.getElementById("text");
  index = 0;

  // 🔥 DECISION POINT
  if (themes[user]) {
    lines = themes[user];
  } else {
    lines = defaultTheme;
  }

  text.innerText = lines[0];
}

// Click to continue
document.body.addEventListener("click", () => {
  if (!text || index >= lines.length - 1) return;

  text.classList.add("fade");

  setTimeout(() => {
    index++;
    text.innerText = lines[index];
    text.classList.remove("fade");
  }, 800);
});
