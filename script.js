function lerDescricao(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}
