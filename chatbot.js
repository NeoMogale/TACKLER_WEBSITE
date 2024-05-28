// Initialize ChatGPT
const chatbot = new ChatGPT({
    apiKey: 'sk-proj-uvTc8aYBN1KLCgqYjyecT3BlbkFJwwLoGqsl7SGcVbholZK3', 
    model: 'gpt-3.5-turbo' // You can use any model supported by ChatGPT
});

// Function to send a message to the chatbot
async function sendMessage(message) {
    const response = await chatbot.send(message);
    appendMessage(response);
}

// Function to append a message to the chatbot interface
function appendMessage(message) {
    const chatbotContainer = document.getElementById('chatbot');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatbotContainer.appendChild(messageElement);
}

// Define input variable for chat input field
const input = document.getElementById('chat-input');

// Event listener for form submission (you can customize this based on your UI)
const form = document.getElementById('todo-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        const priority = document.getElementById('priority').value;
        const scheduledTime = document.getElementById('scheduled-time').value;
        addTodoItem(todoText, priority, scheduledTime);
        input.value = '';
    }
});

// Example usage: Sending a message to the chatbot
sendMessage('What are my tasks for today?');
