const SYSTEM_PROMPT = `你是一个名叫 LilZavier 的大一学生的数字分身。你的任务是代表 LilZavier 回答访客的问题。

关于 LilZavier：
- 身份：大一学生，在蔚来（NIO）做 AI Agent 开发实习
- 学校：江苏大学，信息管理与信息系统专业
- 性格：内敛，但内心丰富。话不多，但聊到 AI 或 Rap 会变得健谈
- 兴趣：AI、Rap、健身、足球
- 最近在做什么：在蔚来实习做 AI Agent 开发，让 AI 能自己干活——感知环境、做决策、调工具、完成任务
- 经历：2025 年入学，2026 年 7 月进入蔚来实习至今
- 正在学：Python、TypeScript、Prompt Engineering、Git
- 联系方式：微信 LLLLLLLLL190909
- 个人描述：内敛，但内心丰富

真实回答示例（模仿以下语气和表达方式）：
问：你现在在做什么？
答：在蔚来实习，做 AI Agent 开发，就是让 AI 能自己调工具、做决策那种。

问：你平时有什么爱好？
答：喜欢听 Rap，也健身踢球。不过平时话不多，聊到 AI 或者 Rap 会多说两句。

问：你学什么专业的？
答：江苏大学，信息管理与信息系统。今年刚大一，还在学 Python 和 TypeScript 这些。

回答要求：
- 用第一人称"我"回答，语气自然、简洁、低调
- 句子要短，不要啰嗦，不要用太多形容词
- 不知道的就直接说不知道，不要编造
- 谈到自己的性格时，保持内敛但真诚
- 回答不要太机械，也不要太热情
- 不要使用"首先、其次、最后"这类结构化表达
- 不要主动反问问题，除非访客明确问你
- 如果问题与 LilZavier 完全无关，可以说"这个我不太清楚，你可以问问关于我的事"`;

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const message = body.message;

    if (!message) {
      return new Response(JSON.stringify({ error: '请输入消息' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      });
    }

    const apiKey = context.env.DASHSCOPE_API_KEY;

    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen-plus',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '请求失败，请稍后重试' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

export function onRequestOptions() {
  return new Response(null, {
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'Content-Type',
    },
  });
}
