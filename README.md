AI Chatbot Backend
A professional backend service for an AI-powered chatbot, utilizing the Groq API for high-speed inference.

 Getting Started
Follow these instructions to set up the project on your local machine.

1. Prerequisites
Before you begin, ensure you have the following installed:

Node.js: Download and install it from nodejs.org.

Groq Account: Sign up at Groq Cloud to obtain your unique API key.

2. Installation
Run the following commands in your terminal to clone and install the project:

Bash
# Clone the repository
git clone https://github.com/iqrabatool1/AI_CHAT_BOT.git

# Move into the backend folder
cd chatbot-backend

# Install necessary dependencies
 Security Configuration
Important: For your safety, the .env file containing your API credentials must not be uploaded to GitHub.

How to set up your environment:
Navigate to the chatbot-backend directory.

Create a new file named .env.

Add your API key using this exact format:
GROQ_API_KEY=your_groq_api_key_here

Note: Ensure your .gitignore file includes .env. This prevents your credentials from being accidentally pushed to the repository.

 Running the Application
Once the setup is complete, start the backend server with:

Bash
npm start
