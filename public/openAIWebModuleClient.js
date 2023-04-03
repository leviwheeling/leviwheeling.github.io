// Filename: public/openAIWebModuleClient.js
async function getGeneratedText(prompt) {
  const result = await fetch("https://openapi-jdnxe03jj-leviwheeling.vercel.app/api.js", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

    if (result.ok) {
        const data = await result.json();
        return data.generatedText;
    } else {
        console.error("Failed to fetch generated text:", result.statusText);
        return "error";
    }
}

window.getGeneratedText = getGeneratedText;
