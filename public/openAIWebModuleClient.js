// Filename: public/openAIWebModuleClient.js
async function getGeneratedText(prompt) {
   const result = await fetch("/backend/generateText.js", {
    method: "POST",
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
