// pages/api/proxy.js
export default async function handler(req, res) {
  const response = await fetch('https://app.mostly.ai/api/v2/models/LANGUAGE', {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-MOSTLY-API-KEY': process.env.MOSTLY_AI_API_KEY,
    },
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
