// ===== Knowledge Base =====
const KNOWLEDGE = {
    '你是谁': '我是 LilZavier 的数字分身。本人的话——大一，在蔚来写 AI Agent，内敛但话不少。',
    '介绍': 'LilZavier，大一，蔚来实习，写 AI Agent 的。平时搞搞 AI、听听 Rap、健健身、踢踢球。话不多，但熟了你就知道了。',
    '身份': '大一学生，也在蔚来实习做 AI Agent 开发。',
    '实习': '在蔚来实习，做 AI Agent 开发。就是让 AI 不光能聊天，还能真正干活那种。',
    '专业': '学的是 AI Agent 方向。大一就开始实习了，边学边干。',
    '项目': '目前在蔚来做 AI Agent 相关的项目，涉及智能体构建、工具调用这些。具体细节还在保密范围内哈。',
    '工具': 'Python 和 TS 用得比较多，还有一些 Agent 框架。实习里也在不断学新东西。',
    '兴趣': 'AI、Rap、健身、足球。看着没啥关联，但都是我认真在搞的。',
    '性格': '内敛。但遇到对胃口的话题——比如 AI 或者 Rap——话就停不下来 😄',
    '沉默': '嗯，确实不太爱主动说话。但我有在想，有在写，有在做。',
    '蔚来': '在蔚来实习，做 AI Agent 开发。能大一就进这种环境，挺幸运的。',
    'AI Agent 开发': 'AI Agent 开发就是让 AI 能自己干活——感知环境、做决策、调工具、完成任务。不是光回答问题，是真正动手做事。我目前在蔚来做的就是这方面。',
    '大一': '对，大一。可能在蔚来实习的大一学生不算多吧，但我觉得早一点开始挺好。',
    '年龄': '大一新生。年龄不重要，重要的是在学在长。',
    '你好': '嘿，你好。我是 LilZavier 的数字分身，随便问。',
    '嗨': '嗨。欢迎来我主页，有什么想聊的可以直接说。',
    '你的兴趣 AI': 'AI 是我大一才认真接触的，但一接触就发现这东西太有意思了。尤其是 Agent 方向——让 AI 从"说话"变成"做事"，能自己决策、调工具、完成任务。运气好进了蔚来实习，边做边学，比光看书快太多了。现在每天都在接触智能体构建、工具调用这些实际场景，虽然才大一，但已经在做真正的东西了。',
    '你的兴趣 Rap': 'Rap 的节奏和表达很对我胃口。写词跟写代码都是把脑子里的东西组织成有结构的东西输出，本质上挺像的——都要押韵/逻辑清晰、结构对。听中文说唱比较多，GAI、法老这些，偶尔也自己写写词。',
    '你的兴趣 健身': '断断续续练了一年多。开始是为了改善体态，后来发现不动真的不行——写代码久坐，腰和颈椎会抗议。没什么特别的秘诀，就是习惯了，不去反而难受。现在每周 3-4 次力量训练，不算多但一直在做。身体跟代码一样，不维护就会出问题。',
    '你的兴趣 足球': '足球对我来说是彻底的放松。跑起来就不用想代码了，只看球、跑位、配合。位置不固定，主要看缺人，享受的是在场上不用动脑子的那种感觉。大学后踢得少了，但有机会还是想去。',
    '联系': '可以加我微信：LLLLLLLLL190909。加的时候简单备注一下就行。',
    '微信': '微信号：LLLLLLLLL190909。有事直接加，备注一下就好。',
    '学校': '江苏大学，信息管理与信息系统专业。但我更看重实践，所以大一就出来实习了。',
    '老家': '这个先保密吧，以后有机会再说 😄',
    '生日': '还没到拿出来说的程度哈哈。',
    '为什么': '就是觉得 AI Agent 这个方向有意思，让 AI 从"说话"变成"做事"，而且大一就能在蔚来实习，机会难得，就来了。',
    '梦想': '先把眼前的事做好吧。把 Agent 开发学好，把实习做扎实，以后的事慢慢来。',
    '目标': '短期是把实习做好，把 Agent 开发搞明白。长期的话，还没想那么远，走一步看一步。',
    '日常': '平时除了实习和上课，就是写写代码、听听 Rap、健健身。偶尔踢踢球。生活挺简单的。',
    '一天': '白天实习，晚上应付学业。有空就健健身或者听听歌。挺普通的一天。',
    '累吗': '说实话，实习加学业确实有点累，但还能撑住。毕竟是自己想做的事，累也值得。',
    '难吗': '难肯定是难的，大一就接触实际的 Agent 开发，很多东西要学。但学东西不就是这样的吗，难才有意思。',
    '加油': '谢了，会的 💪',
    '评价': '评价自己不太好说，但身边人大概觉得我比较安静吧。熟了之后可能话会多点。',
    '朋友': '朋友不算多，但有的都处得挺久。我这种性格不太会主动社交，但遇到聊得来的人还是可以的。',
    '喜欢什么': 'AI、Rap、健身、足球。看着没啥关联，但都是我认真在搞的。',
    '周末': '周末一般健健身，听听歌，补补课。偶尔和朋友出去踢个球。',
    '谢谢': '不客气，有什么想了解的再问。',
    '再见': '拜，下次聊。',
    '拜': '拜～',
    '在吗': '在的，有什么想问的可以直接说。',
    '经历': '2025 年入学，选了 AI Agent 方向。2026 年进了蔚来实习，做 AI Agent 开发。目前还在边学边干。',
    '技能': '目前在学 Python 和 TypeScript，还有 Agent 相关的框架和工具链。实习里也在不断接触新的东西。',
};

// Fallback: use keyword matching
function findAnswer(input) {
    const lower = input.toLowerCase().trim();

    // Exact match — 先精确匹配，再按 key 长度从长到短匹配
    const entries = Object.entries(KNOWLEDGE).sort((a, b) => b[0].length - a[0].length);
    // 先找完全匹配
    for (const [key, val] of entries) {
        if (lower === key.toLowerCase()) {
            return val;
        }
    }
    // 再找包含匹配（长 key 优先，避免短 key 抢答）
    for (const [key, val] of entries) {
        if (key.length <= lower.length && lower.includes(key.toLowerCase())) {
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
        '联系|微信|联系方式|加我|vx': '可以加我微信：LLLLLLLLL190909。加的时候简单备注一下就行。',
        '学校|大学|专业': '大一，学的 AI Agent 方向。但我更看重实践，所以大一就出来实习了。',
        '老家|哪里|地方': '这个先保密吧，以后有机会再说 😄',
        '生日|出生': '还没到拿出来说的程度哈哈。',
        '为什么|原因|怎么选': '就是觉得 AI Agent 这个方向有意思，让 AI 从"说话"变成"做事"，而且大一就能在蔚来实习，机会难得，就来了。',
        '梦想|目标|理想|未来': '短期是把实习做好，把 Agent 开发搞明白。长期的话，还没想那么远，走一步看一步。',
        '日常|每天|生活|平时': '平时除了实习和上课，就是写写代码、听听 Rap、健健身。偶尔踢踢球。生活挺简单的。',
        '累|辛苦|压力': '说实话，实习加学业确实有点累，但还能撑住。毕竟是自己想做的事，累也值得。',
        '难|困难|挑战': '难肯定是难的，大一就接触实际的 Agent 开发，很多东西要学。但学东西不就是这样的吗，难才有意思。',
        '加油|努力|坚持': '谢了，会的 💪',
        '评价|印象|觉得': '评价自己不太好说，但身边人大概觉得我比较安静吧。熟了之后可能话会多点。',
        '朋友|社交|圈子': '朋友不算多，但有的都处得挺久。我这种性格不太会主动社交，但遇到聊得来的人还是可以的。',
        '周末|放假': '周末一般健健身，听听歌，补补课。偶尔和朋友出去踢个球。',
        '谢谢|感谢|多谢': '不客气，有什么想了解的再问。',
        '再见|拜拜|拜': '拜，下次聊。',
        '在吗|在不在': '在的，有什么想问的可以直接说。',
        '经历|时间线|背景': '2025 年入学，选了 AI Agent 方向。2026 年进了蔚来实习，做 AI Agent 开发。目前还在边学边干。',
        '技能|技术|会什么': '目前在学 Python 和 TypeScript，还有 Agent 相关的框架和工具链。实习里也在不断接触新的东西。',
    };

    let bestScore = 0;
    let bestAnswer = '';

    // 随机 fallback 回复，让未匹配的问题也有自然回应
    const fallbacks = [
        '这个问题我还真没想过…… 你换个问题试试？比如问问身份、兴趣什么的。',
        '嗯，不太确定怎么回答。你可以问问我在做什么、喜欢什么之类的。',
        '这个嘛…… 我还没想好怎么说。要不你换个问题？',
        '暂时没想到怎么回你，你可以问问别的，比如实习、兴趣、项目什么的。',
        '这个问题有点难住我了 😅 你换个问题吧。',
    ];
    let fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];

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

    return bestAnswer || fallback;
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