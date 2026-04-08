const API_KEY = "insert-api-key-here";
const MODEL = "insert-model-here"; // select from Vercel AI Gateway available models https://vercel.com/ai-gateway/models

async function askAI(content) {
  const response = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
    method: "POST", // POST allows us to include more information we can send to the API
    headers: {
      Authorization: `Bearer ${API_KEY}`, // authorization for the API using our API Key
      "Content-Type": "application/json", // tells the API we're using JSON
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: content }], // tells the AI who said what
      stream: false, // gives you word by word output that most models use, we're turning it off
    }),
  });
  const data = await response.json();
  console.log(data.choices[0].message.content);
}

// askAI("Why is the sky blue?");
