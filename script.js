window.addEventListener('scroll', function() {
    const scene = document.querySelector('.scene');
    const messages = document.querySelectorAll('.message_1, .message_2, .message_3, .message_4');
    
    const sceneTop = scene.getBoundingClientRect().top;

    messages.forEach((message, index) => {
        const messageTop = message.getBoundingClientRect().top;
        if (messageTop < window.innerHeight * (index + 1) / 5) {
            message.style.opacity = '1';
            message.style.transform = 'scale(1)';
        } else {
            message.style.opacity = '0';
            message.style.transform = 'scale(0.5)';
        }
    });
    if (messages[3].getBoundingClientRect().top < window.innerHeight * 1.2) {
        scene.classList.add('bg-changed');
    } else {
        scene.classList.remove('bg-changed');
    }
});
