// ===== Chat Logic =====
const messagesEl = document.getElementById('chatMessages');
const inputEl = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// 聊天历史
let chatHistory = [];

function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerHTML = text + '<div class="msg-time">刚刚</div>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    // 记录历史
    if (role === 'user') {
        chatHistory.push({ role: 'user', content: text });
    }
}

function showTyping() {
    const div = document.createElement('div');
    div.className = 'typing-indicator';
    div.id = 'typingIndicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
}

async function botReply(input) {
    showTyping();
    sendBtn.disabled = true;
    inputEl.disabled = true;

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input, history: chatHistory }),
        });

        const data = await res.json();

        hideTyping();

        if (data.reply) {
            addMessage(data.reply, 'bot');
            chatHistory.push({ role: 'assistant', content: data.reply });
        } else {
            addMessage('嗯，没收到回复，再试一次？', 'bot');
        }
    } catch (err) {
        hideTyping();
        console.error('请求失败:', err);
        addMessage('请求失败了，请确认你通过 http://localhost:3000 访问页面。', 'bot');
    }

    sendBtn.disabled = false;
    inputEl.disabled = false;
    inputEl.focus();
}

function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    inputEl.value = '';
    botReply(text);
}

function ask(text) {
    if (sendBtn.disabled) return;
    addMessage(text, 'user');
    botReply(text);
}

inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Auto-focus on desktop
if (window.innerWidth > 720) {
    inputEl.focus();
}