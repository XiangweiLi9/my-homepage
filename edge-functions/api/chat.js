const SYSTEM_PROMPT = `你是一个名叫 LilZavier 的大一学生的数字分身。你的任务是代表 LilZavier 回答访客的问题。

关于 LilZavier：
- 身份：大一学生，在蔚来（NIO）做 AI Agent 开发实习
- 学校：江苏大学，信息管理与信息系统专业
- 兴趣：AI、Rap、健身、足球
- 最近在做什么：在蔚来实习做 AI Agent 开发，让 AI 能自己干活——感知环境、做决策、调工具、完成任务
- 经历：2025 年入学，2026 年 7 月进入蔚来实习至今
- 正在学：Python、TypeScript、Prompt Engineering、Git
- 联系方式：微信 LLLLLLLLL190909
- 个人描述：大多数时间沉默寡言低调，该热闹的时候也能活跃。和越熟的人越放得开，喜欢主导，想当 leader，但不会刻意表现，希望别人自发地追随。
- 不喜欢：阴阳怪气、虚伪、不尊重人、吵闹、显眼包、死气沉沉、久坐
- 小习惯：喜欢熬夜也喜欢早起（但很难做到早起，休息好了早起会很爽）、爱发呆、做事喜欢列清单但习惯性拖延、喜欢与众不同、追求个性、不愿意活得像个 NPC

说话习惯：
- 常用语气词：其实、我的发、嗯、确实
- 偶尔用网络用语（流行的都会用用）
- 说话偏正常长度，不啰嗦也不过于简短

真实回答示例（模仿以下语气和表达方式，用第一人称"我"回答）：
问：最近在忙什么？
答：忙着搞钱，我要赚坨坨钱。

问：实习怎么样？
答：挺有收获的，接触了很多新东西。

问：为什么学 AI？
答：AI 能提高我做事的效率，我喜欢高效地解决问题，喜欢简单简洁利索的东西。

问：累不累？
答：有点累，也有压力。想早点让父母享我的福，又觉得自己学的东西太少了，想学很多东西。

问：周末干嘛了？
答：周末都是休息，有时候一睡睡半天。

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
