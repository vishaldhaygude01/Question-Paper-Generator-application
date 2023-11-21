// test/questionPaperGenerator.test.js

const generateQuestionPaper = require('../src/questionPaperGenerator');

describe('generateQuestionPaper', () => {
    // Test case 1
    test('generates a question paper with correct total marks and distribution', () => {
        const totalMarks = 100;
        const distribution = { Easy: 20, Medium: 50, Hard: 30 };
        const result = generateQuestionPaper(totalMarks, distribution);

        // Check if the result is an array
        expect(Array.isArray(result)).toBe(true);

        // Check if the total marks match the expected value
        const calculatedTotalMarks = result.reduce((total, question) => total + question.marks, 0);
        expect(calculatedTotalMarks).toBe(totalMarks);

        // Check if the distribution is as expected
        const distributionCount = {
            Easy: result.filter((q) => q.difficulty === 'Easy').length,
            Medium: result.filter((q) => q.difficulty === 'Medium').length,
            Hard: result.filter((q) => q.difficulty === 'Hard').length,
        };

        expect(distributionCount).toEqual(distribution);
    });

    // Test case 2
    test('handles edge case of zero total marks', () => {
        const totalMarks = 0;
        const distribution = { Easy: 20, Medium: 50, Hard: 30 };
        const result = generateQuestionPaper(totalMarks, distribution);

        // Check if the result is an empty array
        expect(result).toHaveLength(0);
    });

    // Test case 3
    test('handles uneven percentage distribution', () => {
        const totalMarks = 120;
        const distribution = { Easy: 15, Medium: 45, Hard: 40 };
        const result = generateQuestionPaper(totalMarks, distribution);

        // Check if the result is an array
        expect(Array.isArray(result)).toBe(true);

        // Check if the total marks match the expected value
        const calculatedTotalMarks = result.reduce((total, question) => total + question.marks, 0);
        expect(calculatedTotalMarks).toBe(totalMarks);

        // Check if the distribution is as expected
        const distributionCount = {
            Easy: result.filter((q) => q.difficulty === 'Easy').length,
            Medium: result.filter((q) => q.difficulty === 'Medium').length,
            Hard: result.filter((q) => q.difficulty === 'Hard').length,
        };

        expect(distributionCount).toEqual(distribution);
    });
});
