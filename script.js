const gradient = document.querySelector('.cursor-gradient');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    gradient.style.setProperty('--x', x + '%');
    gradient.style.setProperty('--y', y + '%');
});