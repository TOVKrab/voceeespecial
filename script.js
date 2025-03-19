const mensagens = [
    "O mundo é melhor com você nele! 💕🥰",
    "Sorria! Hoje é um novo dia cheio de oportunidade e motivo para brilhar! ☀️✨😊",
    "Amizade igual à sua é raridade, e eu tenho a sorte de ter você! 🥰✨",
    "Se eu pudesse, colocaria um pedacinho de felicidade no seu bolso para usar sempre que precisar! 🎀😊",
    "Você merece tudo de bom nesse mundo, e eu estarei sempre torcendo por você! 🌍💙",
    "Amizade de verdade é como abraço apertado: aquece o coração e deixa a vida mais leve! 🤗💕",
    "Se o mundo tivesse mais pessoas como você, ele seria um lugar muito mais bonito! 🌎✨",
    "Mesmo longe, sempre perto! Nossa amizade é forte e especial! 💫💞",
    "Você é luz na vida de quem tem o privilégio de te conhecer! ✨💖",
    "Nossa conexão é única! Você é minha melhor amiga, minha paz e, sem querer, o meu sentimento mais bonito. 💖✨"
];

function mostrarMensagem() {
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem").textContent = mensagem;
}