export async function GET(request) {
  return Response.json({
    success: true,
    message: "Chat endpoint is online. Use POST to communicate."
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({
      success: true,
      reply: "Thanks. Sarvam AI will be connected soon."
    });
  } catch (error) {
    return Response.json({
      success: false,
      reply: "Thanks. Sarvam AI will be connected soon."
    });
  }
}
