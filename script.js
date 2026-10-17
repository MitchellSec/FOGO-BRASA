// Lógica e Interatividade da Steakhouse
document.addEventListener('DOMContentLoaded', () => {
    console.log("Fogo & Brasa Steakhouse — Sistema Inicializado com Sucesso!");

    // Simulação de envio do formulário de reserva rápida
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Sua consulta de mesa foi enviada! Entraremos em contato em breve para confirmar.");
        });
    }

    // Simulação de envio da Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Obrigado por se inscrever na nossa newsletter! Fique atento às novidades.");
            newsletterForm.reset();
        });
    }
});