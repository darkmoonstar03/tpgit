import { Ollama } from 'ollama';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const ollama = new Ollama({
      host: "https://ollama.com",
      headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
      },
    });

    const response = await ollama.chat({
      model: "gpt-oss:120b",
      messages: messages,
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const part of response) {
          controller.enqueue(new TextEncoder().encode(part.message.content));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
