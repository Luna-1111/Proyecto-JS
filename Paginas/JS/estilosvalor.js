document.getElementById('toggleFormButton').addEventListener('click', function() {
    const formContainer = document.getElementById('loginFormContainer');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
    } else {
        formContainer.classList.add('hidden');
    }
});
