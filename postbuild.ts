import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Validate required environment variables
  const crawlerId = process.env.ALGOLIA_CRAWLER_ID
  const crawlerUserId = process.env.ALGOLIA_CRAWLER_USER_ID
  const crawlerApiKey = process.env.ALGOLIA_CRAWLER_API_KEY

  if (!crawlerId || !crawlerUserId || !crawlerApiKey) {
    return res.status(500).json({ 
      error: 'Missing Algolia configuration' 
    })
  }

  // Create Base64 encoded credentials
  const credentials = Buffer.from(`${crawlerUserId}:${crawlerApiKey}`).toString('base64')

  try {
    const response = await fetch(
      `https://crawler.algolia.com/api/1/crawlers/${crawlerId}/reindex`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        }
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(`Reindex failed: ${errorBody}`)
    }

    const result = await response.json()

    res.status(200).json({ 
      message: 'Reindex triggered successfully',
      details: result 
    })
  } catch (error) {
    console.error('Reindex error:', error)
    res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Reindex failed' 
    })
  }
}