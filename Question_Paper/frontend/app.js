function generateQuestionPaper() {
    const totalMarks = document.getElementById('totalMarks').value;
    const easyPercentage = document.getElementById('easyPercentage').value;
    const mediumPercentage = document.getElementById('mediumPercentage').value;
    const hardPercentage = document.getElementById('hardPercentage').value;

    fetch('http://localhost:3000/generate-question-paper', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            totalMarks: totalMarks,
            distribution: {
                Easy: easyPercentage,
                Medium: mediumPercentage,
                Hard: hardPercentage,
            },
        }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
