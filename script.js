const greetings = {
  kk: {
    title: '🎂 Туған күніңмен, Үміт! 🎉',
    sub: 'Саған ең жарқын эмоциялар мен бақытты сәттер тілеймін! 😊',
    extra: '🌸 Арманың орындалсын!',
    text: 'Достығымыз мәңгі болсын 💖 Жымиып жүре бер 😊'
  },
  en: {
    title: '🎂 Happy Birthday, Umit! 🎉',
    sub: 'Wishing you bright emotions and happy moments! 😊',
    extra: '🌸 May all your dreams come true!',
    text: 'Our friendship forever 💖 Keep smiling 😊'
  }
};

function switchLang(lang) {
  document.getElementById('greeting-text').textContent = greetings[lang].title;
  document.getElementById('sub-text').textContent = greetings[lang].sub;
  document.getElementById('extra-title').textContent = greetings[lang].extra;
  document.getElementById('extra-text').textContent = greetings[lang].text;
}

function throwEmojis() {
  const container = document.getElementById("emoji-container");
  const emojis = ['🎉','🎂','💖','🥳','✨','🎁','🌸','😊','😻','💫','💐','😍'];

  for (let i = 0; i < 60; i++) {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'absolute';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = Math.random() * -20 + 'vh';
    emoji.style.fontSize = Math.random() * 30 + 20 + 'px';
    emoji.style.animation = 'floatDown 4s ease-out forwards';
    emoji.style.zIndex = 1000;
    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 4000);
  }
}
