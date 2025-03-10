window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("portfolio_service","portfolio_form", this)
            .then(() => {
                console.log('SUCCESS!');
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}
