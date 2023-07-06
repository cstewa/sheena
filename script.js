async function getRandomWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        const data = await response.json();
        document.getElementById('randomWord').innerHTML = data[0];
    } catch (error) {
        console.error('Error:', error);
    }
}
