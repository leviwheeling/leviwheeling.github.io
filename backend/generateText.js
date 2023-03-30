import {generateText} from 'backend/openAI.jsw';

export async function post_generateText(request) {
    const { prompt } = await request.body.json();

    try {
        const generatedText = await generateText(prompt);
        return {
            body: {
                success: true,
                generatedText: generatedText
            },
            status: 200
        };
    } catch (error) {
        console.error('Error in generateText function:', error);
        return {
            body: {
                success: false,
                error: error.message
            },
            status: 500
        };
    }
}
