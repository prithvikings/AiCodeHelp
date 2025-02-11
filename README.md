# AI-Powered Code Review Tool

This project is an AI-powered code review tool that leverages the Gemini API to provide developers with insightful and actionable feedback on their code. It analyzes code snippets for potential issues related to correctness, efficiency, readability, maintainability, security, style, and adherence to best practices.  The tool aims to help developers write cleaner, more robust, and higher-quality code.

## Key Features

* **AI-Driven Analysis:** Utilizes the Gemini API to perform in-depth code analysis, identifying potential bugs, performance bottlenecks, security vulnerabilities, and style inconsistencies.
* **Multi-Language Support (Future):**  Currently supports Javascript.
* **Detailed Feedback:** Provides comprehensive feedback, including specific suggestions for improvement, code examples, and explanations of the reasoning behind the recommendations.
* **Structured Output:** Presents feedback in a clear and organized format, categorized by severity and type of issue, making it easy for developers to prioritize and address the most critical problems.

## Technologies Used

This project is built using the following technologies:

**Frontend:**

* **React:** A JavaScript library for building user interfaces.
* **Axios:** A promise-based HTTP client for making API requests.
* **react-markdown:** A library for rendering Markdown content in React applications.
* **react-simple-code-editor:** A simple and customizable code editor component for React.
* **prismjs:** A syntax highlighting library.
* **rehype-highlight:** A plugin for `react-markdown` to enable syntax highlighting.

**Backend:**

* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **cors:**  Enables Cross-Origin Resource Sharing.
* **dotenv:**  Loads environment variables from a `.env` file.
