// Filename: public/openAIWebModule.js
import {generateText} from 'backend/openAI.jsw';

window.getGeneratedText = function(prompt) {
  return generateText(prompt);
};
