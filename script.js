document.addEventListener('DOMContentLoaded', function() {
    function animateOnScroll() {
        const cards=document.querySelectorAll('.card, .item');
        const screenPosition=window.innerHeight / 1.2;
        
        cards.forEach(card => {
            const cardPosition=card.getBoundingClientRect().top;
            if (cardPosition<screenPosition) {
                card.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll',animateOnScroll);
    animateOnScroll();

    const yearElement=document.querySelector('footer p');
    if (yearElement) {
        yearElement.textContent=yearElement.textContent.replace('2025', new Date().getFullYear());
    }
});