import { promises as fs } from 'fs';

function countWords(text) {
    const wordsArray = text.trim().split(/\s+/);
    return wordsArray.length;
}

async function readFileAndCountWords() {
    try {
        const data = await fs.readFile('data.txt', 'utf8');
        const wordCount = countWords(data);
        console.log('Total word count:', wordCount);
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}

readFileAndCountWords();