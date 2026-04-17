import { generateAIResponse } from '../libraries/ai/index.js';

export async function chatCompletion(req, res) {
  try {
    const { message, systemPrompt } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(422).json({
        success: false,
        message: 'message is required',
      });
    }

    const result = await generateAIResponse({
      message: message.trim(),
      systemPrompt:
        systemPrompt && typeof systemPrompt === 'string'
          ? systemPrompt
          : 'You are a helpful assistant.',
    });

    return res.json({
      success: true,
      provider: result.provider,
      model: result.model,
      text: result.text,
    });
  } catch (error) {
    console.error('AI chat error:', error);

    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
}