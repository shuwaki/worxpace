document.getElementById('contactfrm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send('service_n95fu6p', 'template_myovb6h', {
        from_name: document.getElementById('name').value,
        to_name: "Admin",
        message: document.getElementById('comments').value,
        reply_to: document.getElementById('email').value,
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message.');
        });
});
