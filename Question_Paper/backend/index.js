
const generateQuestionPaper = require('./src/questionPaperGenerator');
const sampleData = require('./data/sampleData');

const totalMarks = 100;
const distribution = { Easy: 20, Medium: 50, Hard: 30 };
const result = generateQuestionPaper(totalMarks, distribution);
console.log(result);
