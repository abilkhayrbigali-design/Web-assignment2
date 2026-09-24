// These student demo forms validate locally and never send or store personal data.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = form.querySelector('[role="status"]');
        status.textContent = form.dataset.demoForm === 'newsletter'
            ? 'Email format checked. This demo does not create a subscription.'
            : 'Your message is ready. This demo does not send or store it.';
    });
});
