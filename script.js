function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("confirmation").style.display = "block";
  document.getElementById("contactForm").reset();
}

// 💌 Contact form success
function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("confirmation").style.display = "block";
  document.getElementById("contactForm").reset();
}

//  Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide "Back to Top" button
window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

//  Hide loader after page loads
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// 💌 Contact Form
function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("confirmation").style.display = "block";
  document.getElementById("contactForm").reset();
}

// ⬆ Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide Back to Top
window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }

  // ✨ Fade-in section animation
  const faders = document.querySelectorAll(".fade-in");
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
};

// ✍ Typing Hero Effect
const phrases = [
  "Welcome to Vision by Joy...",
  "Where your memories shine...",
  "Photo. Video. Magic ✨"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.getElementById("typedText").innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loop, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (150 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();

// 🎨 Random Edit Suggestion
function suggestEdit() {
  const ideas = [
    "✨ Add fairy dust overlays to your portraits!",
    "🌸 Try a dreamy pink tone with glowing highlights.",
    "💫 Use bokeh sparkles for a magical feel.",
    "🎞 Combine a vintage film look with pastel filters.",
    "🌈 Play with rainbow gradients and glitter effects!",
    "💖 Add soft blur + heart light leaks for romance edits.",
    "🧁 Make it sweet! Add cupcake tones and candy pinks.",
    "🎬 Do a dramatic black & white with one color pop!"
  ];

  const pick = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("suggestionText").innerText = pick;
}

// 💖 Mini Personality Quiz
function showResult(type) {
  let result = "";

  if (type === "dreamy") {
    result = "You're a Dreamy Queen! You love soft pink tones, glowing skin, and sparkle overlays ✨💅";
  } else if (type === "bold") {
    result = "Bold & Moody! You slay with contrast, deep shadows, and fierce vibes 🔥💃";
  } else if (type === "vintage") {
    result = "Retro Royalty! You adore film grain, faded colors, and timeless cool 🎞👑";
  }

  document.getElementById("quizResult").innerText = result;
}

// 🎁 Joy Jar
function openJoyJar() {
  const quotes = [
    "You are the sparkle in someone’s day ✨",
    "Keep editing, your magic is showing 💖",
    "Your work makes memories unforgettable 🌈",
    "You’re creating beauty — one click at a time 💅",
    "Someone’s smile will shine because of you 🫶",
    "You’re not just editing — you’re storytelling 🎬",
    "Your creativity is a gift. Share it proudly 🎁"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("jarQuote").innerText = randomQuote;
}
