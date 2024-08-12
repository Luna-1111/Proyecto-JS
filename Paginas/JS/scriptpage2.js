document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const section = document.getElementById('section').value;
    const resultDiv = document.getElementById('result');

    function displayVoteResult(section) {
        let message;
        switch (section) {
            case 'norte':
                message = "Has votado por la sección Norte.";
                break;
            case 'sur':
                message = "Has votado por la sección Sur.";
                break;
            case 'centro':
                message = "Has votado por la sección Centro.";
                break;
            default:
                message = "Por favor selecciona una sección válida.";
        }
        resultDiv.textContent = message;
    }

    displayVoteResult(section);
});
