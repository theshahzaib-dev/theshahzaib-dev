export async function sendToGemini(message: string) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(
      typeof result.reply === "string" ? result.reply : "Failed to contact AI."
    );
  }

  return result;
}