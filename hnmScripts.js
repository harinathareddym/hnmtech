document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector('.animated-text');
    text.innerHTML = text.textContent.split('').map(char => `<span>${char}</span>`).join('');
});
