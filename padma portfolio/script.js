let i = 0;
const lines = [
    "Hello There !!",
    "I'm Padma.",
    "I'm a Tech Enthusiast."
];

function typeLine() {
    const element = document.getElementById("typing-effect");
    if (i < lines.length) {
        let line = lines[i];
        let j = 0;
        element.innerHTML = "";
        function typeCharacter() {
            element.innerHTML += line[j++];
            if (j < line.length) {
                setTimeout(typeCharacter, 100); // Adjust speed here
            } else {
                i++;
                setTimeout(typeLine, 1000); // Wait before typing next line
            }
        }
        typeCharacter();
    }
}

window.onload = typeLine;
