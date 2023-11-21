
// Sample data for questions
const questionStore = [
    { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 }
];

// Function to generate a question paper
function generateQuestionPaper(totalMarks, distribution) {
    const questionPaper = [];
    for (const [difficulty, percentage] of Object.entries(distribution)) {
        const difficultyQuestions = questionStore.filter((q) => q.difficulty === difficulty);
        const count = Math.floor((percentage / 100) * totalMarks);
        questionPaper.push(...difficultyQuestions.slice(0, count));
    }
    return questionPaper;
}

module.exports = generateQuestionPaper;
