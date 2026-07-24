// ===== Knowledge Base =====
const KNOWLEDGE = {
    '你是谁': '我是 LilZavier 的数字分身。本人的话——大一，在蔚来写 AI Agent，内敛但话不少。',
    '介绍': 'LilZavier，大一，蔚来实习，写 AI Agent 的。平时搞搞 AI、听听 Rap、健健身、踢踢球。话不多，但熟了你就知道了。',
    '身份': '大一学生，也在蔚来实习做 AI Agent 开发。',
    '实习': '在蔚来实习，做 AI Agent 开发。就是让 AI 不光能聊天，还能真正干活那种。',
    '专业': '学的是 AI Agent 方向。大一就开始实习了，边学边干。',
    '项目': '目前在蔚来做 AI Agent 相关的项目，涉及智能体构建、工具调用这些。具体细节还在保密范围内哈。',
    '做过什么': '目前在蔚来参与 AI Agent 开发相关的项目，涉及智能体构建、工具调用等实际工程场景。',
    '工具': 'Python 和 TS 用得比较多，还有一些 Agent 框架。实习里也在不断学新东西。',
    '熟练': 'Python 和 TS 用得比较多，还有一些 Agent 框架。实习里也在不断学新东西。',
    '兴趣': 'AI、Rap、健身、足球。看着没啥关联，但都是我认真在搞的。',
    '爱好': 'AI、Rap、健身、足球。看着没啥关联，但都是我认真在搞的。',
    '性格': '内敛。但遇到对胃口的话题——比如 AI 或者 Rap——话就停不下来 😄',
    '沉默': '嗯，确实不太爱主动说话。但我有在想，有在写，有在做。',
    'rap': 'Rap 很对我胃口。节奏和表达，跟写代码有相通的地方。偶尔也自己写写词。',
    '健身': '断断续续练了一年多。久坐写代码，不动真的不行。',
    '足球': '喜欢踢，踢起来就不用想代码了，纯粹放松。',
    '蔚来': '在蔚来实习，做 AI Agent 开发。能大一就进这种环境，挺幸运的。',
    'nio': '在蔚来实习，做 AI Agent 开发。能大一就进这种环境，挺幸运的。',
    'AI Agent 开发': 'AI Agent 开发就是让 AI 能自己干活——感知环境、做决策、调工具、完成任务。不是光回答问题，是真正动手做事。我目前在蔚来做的就是这方面。',
    '大一': '对，大一。可能在蔚来实习的大一学生不算多吧，但我觉得早一点开始挺好。',
    '年龄': '大一新生。年龄不重要，重要的是在学在长。',
    '你好': '嘿，你好。我是 LilZavier 的数字分身，随便问。',
    '嗨': '嗨。欢迎来我主页，有什么想聊的可以直接说。',
    'AI 的兴趣': '说实话，AI 是我大一才认真接触的。但一接触就觉得这东西太有意思了——尤其是 Agent，让 AI 从"说话"变成"做事"。加上运气好进了蔚来实习，边做边学，比光看书快太多了。',
    'Rap 什么': 'Rap 的节奏和表达很对我胃口。写词跟写代码都是把脑子里的东西组织成有结构的东西输出，本质上挺像的。听中文说唱比较多，偶尔也自己写写。',
    '健身多久': '断断续续一年多吧。开始是为了改善体态，后来发现不动真的不行——写代码久坐，腰和颈椎会抗议。现在每周 3-4 次力量训练，算是个习惯了。',
    '怎么踢足球': '足球对我来说就是彻底的放松。跑起来就不用想代码了，只看球、跑位、配合。踢的位置不固定，主要是享受在场上不用动脑子的那种感觉。大学后踢得少了，但有机会还是会去。',
    'AI 兴趣': '说实话，AI 是我大一才认真接触的。但一接触就觉得这东西太有意思了——尤其是 Agent，让 AI 从"说话"变成"做事"。加上运气好进了蔚来实习，边做边学，比光看书快太多了。',
    'rap 喜欢': 'Rap 的节奏和表达很对我胃口。写词跟写代码都是把脑子里的东西组织成有结构的东西输出，本质上挺像的。听中文说唱比较多，偶尔也自己写写。',
    '健身': '断断续续一年多吧。开始是为了改善体态，后来发现不动真的不行——写代码久坐，腰和颈椎会抗议。现在每周 3-4 次力量训练，算是个习惯了。',
    '足球': '足球对我来说就是彻底的放松。跑起来就不用想代码了，只看球、跑位、配合。踢的位置不固定，主要是享受在场上不用动脑子的那种感觉。大学后踢得少了，但有机会还是会去。',
};

// Fallback: use keyword matching
function findAnswer(input) {
    const lower = input.toLowerCase().trim();

    // Exact match first
    for (const [key, val] of Object.entries(KNOWLEDGE)) {
        if (lower === key.toLowerCase() || lower.includes(key.toLowerCase())) {
            return val;
        }
    }

    // Keyword scoring
    const keywords = {
        'ai agent|agent|智能体|开发': 'AI Agent 开发就是让 AI 能自己干活——感知环境、做决策、调工具、完成任务。不是光回答问题，是真正动手做事。我目前在蔚来做的就是这方面。',
        '项目|做过|参与|经验': '目前在蔚来做 AI Agent 相关的项目，涉及智能体构建、工具调用这些。具体细节还在保密范围内哈。',
        '工具|技术|技能|语言|python|js|typescript|框架': 'Python 和 TS 用得比较多，还有一些 Agent 框架。实习里也在不断学新东西。',
        '兴趣|爱好': 'AI、Rap、健身、足球。看着没啥关联，但都是我认真在搞的。',
        'rap|说唱|音乐': 'Rap 很对我胃口。节奏和表达，跟写代码有相通的地方。偶尔也自己写写词。',
        '健身|锻炼|运动': '断断续续练了一年多。久坐写代码，不动真的不行。',
        '足球|球': '喜欢踢，踢起来就不用想代码了，纯粹放松。',
        'ai|人工智能': '说实话，AI 是我大一才认真接触的。但一接触就觉得这东西太有意思了——尤其是 Agent，让 AI 从"说话"变成"做事"。',
        '性格|沉默|寡言|话少|内向': '内敛，但遇到对胃口的话题话就停不下来 😄',
        '实习|工作|蔚来|nio|公司': '在蔚来实习，做 AI Agent 开发。能大一就进这种环境，挺幸运的。',
        '你好|嗨|hi|hello|hey': '嘿，你好。我是 LilZavier 的数字分身，随便问。',
        '年龄|多大|年级': '大一新生。年龄不重要，重要的是在学在长。',
        '名字|姓名|叫': 'LilZavier，大一，在蔚来写 AI Agent。',
        '忙碌|最近|现状': '最近在蔚来实习，写 AI Agent。同时应付学业，忙但挺充实的。',
    };

    let bestScore = 0;
    let bestAnswer = '嗯，这个我还真没想过怎么答…… 要不你换个问题？比如问问身份、项目、兴趣什么的。';

    for (const [pattern, answer] of Object.entries(keywords)) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(lower)) {
            const score = pattern.split('|').reduce((acc, kw) => {
                return acc + (lower.includes(kw) ? 1 : 0);
            }, 0);
            if (score > bestScore) {
                bestScore = score;
                bestAnswer = answer;
            }
        }
    }

    return bestAnswer;
}

// ===== Chat Logic =====
const messagesEl = document.getElementById('chatMessages');
const inputEl = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerHTML = text + '<div class="msg-time">刚刚</div>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
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

function botReply(input) {
    showTyping();
    sendBtn.disabled = true;
    inputEl.disabled = true;

    setTimeout(() => {
        hideTyping();
        const answer = findAnswer(input);
        addMessage(answer, 'bot');
        sendBtn.disabled = false;
        inputEl.disabled = false;
        inputEl.focus();
    }, 600 + Math.random() * 400);
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