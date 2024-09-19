document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {

        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.game-image').style.display = '';
            c.querySelector('.game-content').style.display = 'none';
        });


        this.classList.add('expanded');
        this.querySelector('.game-image').style.display = 'none';


        var gameContent = this.querySelector('.game-content');
        gameContent.style.display = 'block';

        
        var iframe = this.querySelector('iframe');
        var gamePath = this.getAttribute('data-game'); 
        if (iframe.src !== gamePath) {
            iframe.src = gamePath;
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var styleSwitcher = document.getElementById('styleSwitcher');

    styleSwitcher.addEventListener('click', function() {
        var isBasicStyle = document.body.classList.toggle('basic-style');
        this.textContent = isBasicStyle ? 'Switch to Fancy Style' : 'Switch to Basic Style';
    });
});

