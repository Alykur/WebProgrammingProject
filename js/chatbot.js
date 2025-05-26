class ChatHistory {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getHistory() {
        return this.messages;
    }
}

const historyMessages = new ChatHistory();

function fetchJSON(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
        throw new Error('Empty JSON or malformed JSON');
        }
        console.log(data);
        sendMessage(data.intents);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    }) ; 
}

function sendMessage(intents){
    var messageInput = document.getElementById("user-input");
    var message = messageInput.value.trim();
    if (message === "") return;
    showMessage(message, "user");
    var botAnswer = processMessage(intents, message);
    showMessage(botAnswer, "bot");
    document.getElementById("user-input").value = "";
}

function showMessage(message, type, timestamp = null, fromSession = false) {
    const chatBox = document.getElementById("chat-box");
    const now = timestamp ? new Date(timestamp) : new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const className = fromSession ? 'session-message' : '';
    const specialTag = fromSession ? 'Restored' : '';

    chatBox.innerHTML += `
        <div class="${className}">
            <strong>${type.charAt(0).toUpperCase() + type.slice(1)}:</strong> ${message} <br>
            <small>${now.toLocaleDateString()} ${timeString} ${specialTag}</small>
        </div>`;
    if (!fromSession) {
        historyMessages.addMessage({ message: message, sender: type, time: now.toISOString() });
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

function processMessage(intents, message) {
    let response = "I'm sorry, I'm not sure I understand.";
    intents.forEach(intent => {
    intent.patterns.forEach(pattern => {
    if (message.toLowerCase().includes(pattern.toLowerCase())) {
            response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        });
    });
    return response;
}

function saveMessages() {
    console.log('Saving chat history...');
    console.log(historyMessages.getHistory());
    sessionStorage.setItem('chatHistory', JSON.stringify(historyMessages.getHistory()));
}

function loadMessages() {
    const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory'));
    if (chatHistory && chatHistory.length > 0) {
        chatHistory.forEach(message => {
            historyMessages.addMessage(message);
            showMessage(message.message, message.sender, message.time, true);
        });
    }
}

window.addEventListener('beforeunload', saveMessages);
window.addEventListener('DOMContentLoaded', loadMessages);