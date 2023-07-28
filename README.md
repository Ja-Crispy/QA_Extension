# QA Extension

Make your research easier with QA Extension's intuitive webpage summarization and question-answer feature!

QA (Question-Answering) browser extension  leverages the OpenAI API to summarize the current active webpage, and provides a chatbot feature for interactive Q&A using the webpage contents as context.

This extension aims to enhance the user's browsing experience by quickly summarizing the content of the page and allowing them to engage in real-time conversations with a chatbot.

## Features

1. Webpage Summarization: The extension will use the OpenAI API to generate a concise summary of the content present on the active webpage. Users can access this feature through a user-friendly interface.

2. Chatbot Integration: The extension will include an interactive chatbot that can answer user questions based on the webpage's summarized content. Users can ask questions related to the page content, and the chatbot will provide relevant answers using the context it gained from the summarization.

3. Real-time Interaction: The chatbot will operate in real-time, allowing users to have dynamic conversations while browsing the page. As users ask questions, the chatbot will use the summarized content to respond promptly.

## Installation

## Dev mode

Run the following commands to install the extension in dev mode:

```bash
npm install
npm run dev
```

Then, enable "Developer mode" in "chrome://extensions/" and click "Load unpacked" and select the "dist" folder in the project directory.
Voila! The extension should now be installed and ready to use.

## Build

Run the following command to build the extension in production mode:

```bash
npm run build
```

Then load the "dist" folder as an unpacked extension, similar to how it's done for Dev mode.

## Disclaimer

The chatbot's responses heavily rely on the quality of the webpage summarization provided by the OpenAI API. While the extension has been made to  provide accurate and helpful answers, its effectiveness may vary depending on the webpage's content and the accuracy of the summarization.
Please use this extension responsibly and verify critical information from reliable sources.
