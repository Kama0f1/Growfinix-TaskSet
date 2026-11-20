export default function handler(_request, response) {
  const tips = [
    { topic: 'Focus', tip: 'Try one 25-minute study block, then take a short break.' },
    { topic: 'Recall', tip: 'Close your notes and write down what you remember.' },
    { topic: 'Practice', tip: 'Work through one example before reading the solution.' },
    { topic: 'Review', tip: 'Explain today’s idea in your own words.' },
    { topic: 'Plan', tip: 'Choose one small task to finish before starting another.' }
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.status(200).json({ ...tip, generatedAt: new Date().toISOString(), service: 'serverless-study-tip' });
}
