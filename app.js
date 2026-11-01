/* 互联网人格测试 · 纯静态实现，无需构建 */
(function () {
  'use strict'

  // ────────────────────────────────────────────────────────────
  // 数据：8 种人格
  // ────────────────────────────────────────────────────────────
  var PERSONAS = [
    {
      id: 'lurker',
      name: '潜水员',
      en: 'THE LURKER',
      emoji: '🤿',
      color: '#2E5BFF',
      textOnColor: 'paper',
      rarity: 28,
      tagline: '你在，但你不说话。',
      intro:
        '你是互联网的深海居民。信息从你眼前流过，你几乎不搅动水面。你不是不关心，你只是觉得，看着就够了。',
      traits: [
        '每天在线两小时，主页干净得像刚注册',
        '收藏夹比朋友圈精彩一百倍',
        '能把 300 条评论从头看到尾，一个字不打'
      ],
      strength: '你是信息吸收器，情绪稳定，从不惹事。',
      weakness: '存在感约等于零，朋友一度以为你把他删了。',
      scene: '群里聊到 99+，你从头看完，确认没有需要你出面的地方，退出。',
      match: 'mayor',
      clash: 'contrarian',
      signature: '我看了，但我没说。',
      vector: [65, 8, 10, 45, 12]
    },
    {
      id: 'liker',
      name: '点赞机器',
      en: 'THE LIKER',
      emoji: '👍',
      color: '#FFD43B',
      textOnColor: 'ink',
      rarity: 22,
      tagline: '我的态度，都在那个小红心里。',
      intro:
        '你的社交货币是一颗小红心。你用点赞完成所有表达：喜欢、支持、在、看到了、我懂。你不是没态度，你是把态度压缩成了一个动作。',
      traits: [
        '点赞速度快过大脑，手指先于意识',
        '从不评论，但每条都赞，包括广告',
        '用一颗心维持“我还在”的微弱信号'
      ],
      strength: '你是零成本的社交润滑剂，谁发东西都希望有你。',
      weakness: '别人问“你怎么看”，你只会回“哈哈哈哈”。',
      scene: '朋友失恋发了条动态，你连赞三条，觉得已经安慰到位了。',
      match: 'reposter',
      clash: 'contrarian',
      signature: '已赞，勿念。',
      vector: [80, 18, 6, 30, 45]
    },
    {
      id: 'contrarian',
      name: '杠精',
      en: 'THE CONTRARIAN',
      emoji: '😤',
      color: '#FF3B30',
      textOnColor: 'paper',
      rarity: 9,
      tagline: '我不是找茬，我只是无法假装同意。',
      intro:
        '你的键盘有肌肉记忆。看到不对劲的地方，手比脑子快。你不是为了赢，你只是无法假装同意——虽然大多数时候，最后确实变成了为了赢。',
      traits: [
        '看到“只有我一个人觉得吗”，会立刻回“不止你一个”',
        '能在任何话题里精准找到反面',
        '吵完架半夜会后悔，但下次还吵'
      ],
      strength: '你是群体的刹车片，批判性思维永远在线。',
      weakness: '赢了口舌，输了朋友，还输了睡眠。',
      scene: '凌晨一点，为了一个标点符号，跟陌生人辩论了 40 楼。',
      match: 'archaeologist',
      clash: 'liker',
      signature: '先说结论：我不同意。',
      vector: [85, 92, 96, 45, 82]
    },
    {
      id: 'ghost',
      name: '失踪人口',
      en: 'THE GHOST',
      emoji: '👻',
      color: '#8E8AA8',
      textOnColor: 'paper',
      rarity: 6,
      tagline: '账号还在，人已经不在了。',
      intro:
        '你的账号是一座空房子，灯还亮着，人不在。你不是消失了，你只是把生活调成了静音。',
      traits: [
        '上一次发动态是去年，具体哪个月想不起来',
        '消息轮回，但每条都看',
        '朋友圈三天可见，而且真的没东西'
      ],
      strength: '边界感极强，不被算法牵着走。',
      weakness: '朋友以为你出事了，其实你只是不想回消息。',
      scene: '打开 App，看到 99+ 未读，关掉，继续过自己的日子。',
      match: 'lurker',
      clash: 'mayor',
      signature: '人在，勿 cue。',
      vector: [8, 5, 5, 20, 6]
    },
    {
      id: 'archaeologist',
      name: '赛博考古学家',
      en: 'THE ARCHAEOLOGIST',
      emoji: '🏺',
      color: '#B07A4A',
      textOnColor: 'paper',
      rarity: 11,
      tagline: '新内容没意思，我要挖三年前的。',
      intro:
        '别人往前刷，你往后挖。你对三年前的东西比今天的热搜更有兴趣，你的收藏夹是一座私人博物馆，门票只卖给你自己。',
      traits: [
        '专翻冷门旧帖、古早视频、停更博主',
        '收藏夹像一座私人博物馆，分门别类',
        '别人刷推荐，你刷搜索'
      ],
      strength: '信息挖掘力惊人，是行走的冷知识库。',
      weakness: '永远慢半拍，热点到你这里已经凉了。',
      scene: '凌晨三点，你在看 2016 年的贴吧神帖，还做了笔记。',
      match: 'contrarian',
      clash: 'reposter',
      signature: '这个我三年前就看过。',
      vector: [60, 30, 22, 95, 35]
    },
    {
      id: 'reposter',
      name: '转发机器',
      en: 'THE REPOSTER',
      emoji: '🔁',
      color: '#3DDC97',
      textOnColor: 'ink',
      rarity: 12,
      tagline: '我不生产内容，我只是内容的搬运工。',
      intro:
        '你不生产内容，你是内容的搬运工。你的主页像一个信息中转站，什么都有，唯独没有你自己的话。',
      traits: [
        '什么都要转一下，配文永远是“哈哈哈哈”或“救命”',
        '原创为零，但信息量巨大',
        '朋友把你当资讯源，没人记得你的观点'
      ],
      strength: '你是高效的信息中转站，朋友靠你跟上世界。',
      weakness: '被问“你自己怎么看”的时候，你会愣住。',
      scene: '一天转了 8 条，有人问你的看法，你回了一句“转需”。',
      match: 'liker',
      clash: 'archaeologist',
      signature: '转需。',
      vector: [78, 42, 18, 32, 72]
    },
    {
      id: 'mayor',
      name: '评论区区长',
      en: 'THE MAYOR',
      emoji: '🏛️',
      color: '#8B5CF6',
      textOnColor: 'paper',
      rarity: 7,
      tagline: '每条笔记下面，都有我的身影。',
      intro:
        '正文是别人的，评论区是你的。你在别人的帖子下面建起了自己的街区，熟人比主页还多。',
      traits: [
        '打开帖子先看评论，再决定要不要看正文',
        '擅长接梗、补充、总结，评论区因为你才完整',
        '在别人的帖子下面，有自己的熟人'
      ],
      strength: '你是社交枢纽，气氛发动机。',
      weakness: '自己的主页空空如也，存在感全长在别人家。',
      scene: '在一条笔记下面跟三个陌生人聊成了朋友，而笔记本身你还没看完。',
      match: 'lurker',
      clash: 'ghost',
      signature: '前排。',
      vector: [92, 78, 45, 42, 90]
    },
    {
      id: 'drifter',
      name: '赛博流浪者',
      en: 'THE DRIFTER',
      emoji: '🛸',
      color: '#4CC9F0',
      textOnColor: 'ink',
      rarity: 5,
      tagline: '哪个平台都待过，哪个都不是家。',
      intro:
        '你换过很多平台，注册过很多号，每个地方都待过，每个地方都不算家。你一直在找下一个能待久一点的地方。',
      traits: [
        '微博、豆瓣、小红书、B站、Threads，一路迁徙',
        '账号一堆，活跃的没有',
        '总在寻找“下一个地方”'
      ],
      strength: '适应力强，见过各种社区生态。',
      weakness: '没有根据地，也没有积累，每次都是从零开始。',
      scene: '新平台注册了第三个号，第五天就没再登录。',
      match: 'archaeologist',
      clash: 'mayor',
      signature: '路过。',
      vector: [55, 45, 28, 72, 22]
    }
  ]

  var PERSONA_BY_ID = {}
  PERSONAS.forEach(function (p) {
    PERSONA_BY_ID[p.id] = p
  })

  // ────────────────────────────────────────────────────────────
  // 数据：25 道题（5 个维度 × 5 题）
  // ────────────────────────────────────────────────────────────
  var QUESTIONS = [
    {
      id: 1,
      dim: 'activity',
      text: '早上睁开眼，你的第一个动作是',
      options: [
        { text: '摸到手机，先刷五分钟再说', score: 100 },
        { text: '先发会儿呆，手机还在客厅充电', score: 0 },
        { text: '看一眼时间，顺便把通知清一遍', score: 67 },
        { text: '翻个身，再睡十分钟', score: 33 }
      ]
    },
    {
      id: 2,
      dim: 'activity',
      text: '你手机里社交 App 的日均使用时长，大概是',
      options: [
        { text: '半小时以内', score: 0 },
        { text: '三小时起步', score: 100 },
        { text: '一小时左右', score: 33 },
        { text: '两小时上下', score: 67 }
      ]
    },
    {
      id: 3,
      dim: 'activity',
      text: '朋友发来一句「在吗」',
      options: [
        { text: '基本秒回', score: 100 },
        { text: '两小时后才发现', score: 0 },
        { text: '看到了，先想想要怎么回', score: 67 },
        { text: '等忙完再回，通常就忘了', score: 33 }
      ]
    },
    {
      id: 4,
      dim: 'activity',
      text: '一整天没有网络',
      options: [
        { text: '坐立难安，反复解锁屏幕', score: 100 },
        { text: '正好，清净', score: 0 },
        { text: '有点不习惯，但能忍', score: 33 },
        { text: '会找点别的事做，晚上再补', score: 67 }
      ]
    },
    {
      id: 5,
      dim: 'activity',
      text: '一个热点爆出来',
      options: [
        { text: '一周后从别人嘴里听说', score: 0 },
        { text: '当天就刷到、跟进、看完评论区', score: 100 },
        { text: '第二天刷到，大概知道怎么回事', score: 67 },
        { text: '过几天才刷到，已经凉了', score: 33 }
      ]
    },

    {
      id: 6,
      dim: 'expression',
      text: '刷到一篇特别喜欢的笔记',
      options: [
        { text: '忍不住在评论区写一段', score: 100 },
        { text: '点个赞就划走', score: 0 },
        { text: '收藏起来，想着以后再看', score: 33 },
        { text: '转发给可能感兴趣的朋友', score: 67 }
      ]
    },
    {
      id: 7,
      dim: 'expression',
      text: '你有一个不错的想法',
      options: [
        { text: '存进备忘录，自己知道就行', score: 0 },
        { text: '发出来，哪怕没人看', score: 100 },
        { text: '先跟朋友说说，看反应', score: 67 },
        { text: '发在只有自己的小号里', score: 33 }
      ]
    },
    {
      id: 8,
      dim: 'expression',
      text: '群里聊到你熟的领域',
      options: [
        { text: '忍不住出来补充两句', score: 100 },
        { text: '看别人说，心里点头', score: 0 },
        { text: '只在有人说错的时候纠正一下', score: 67 },
        { text: '私聊那个提问的人', score: 33 }
      ]
    },
    {
      id: 9,
      dim: 'expression',
      text: '朋友问「最近怎么样」',
      options: [
        { text: '「还行，就那样」', score: 0 },
        { text: '能讲十分钟', score: 100 },
        { text: '看心情，好的话多说两句', score: 67 },
        { text: '发个表情包糊弄过去', score: 33 }
      ]
    },
    {
      id: 10,
      dim: 'expression',
      text: '你的主页',
      options: [
        { text: '一片空白，或者仅展示', score: 0 },
        { text: '有内容，哪怕是转的', score: 100 },
        { text: '只有几条，很久没更新', score: 33 },
        { text: '会发，但都设了分组', score: 67 }
      ]
    },

    {
      id: 11,
      dim: 'conflict',
      text: '刷到一条明显说错的笔记',
      options: [
        { text: '手比脑子快，反驳已经打出来了', score: 100 },
        { text: '划走，眼不见为净', score: 0 },
        { text: '心里骂一句，继续刷', score: 33 },
        { text: '截图发到群里吐槽', score: 67 }
      ]
    },
    {
      id: 12,
      dim: 'conflict',
      text: '有人在你评论区抬杠',
      options: [
        { text: '删掉，或者当没看见', score: 0 },
        { text: '回怼，而且必须赢', score: 100 },
        { text: '回一句就撤，不想纠缠', score: 67 },
        { text: '让对方说，看他能说出什么', score: 33 }
      ]
    },
    {
      id: 13,
      dim: 'conflict',
      text: '群里两个人吵起来了',
      options: [
        { text: '下场站队', score: 100 },
        { text: '默默围观，顺便截图', score: 0 },
        { text: '看谁占理，偶尔帮一句', score: 67 },
        { text: '出来打圆场', score: 33 }
      ]
    },
    {
      id: 14,
      dim: 'conflict',
      text: '你被误解了',
      options: [
        { text: '算了，懂的人自然懂', score: 0 },
        { text: '必须解释清楚，不然睡不着', score: 100 },
        { text: '看对方是谁，重要的人就解释', score: 67 },
        { text: '心里不舒服，但懒得说', score: 33 }
      ]
    },
    {
      id: 15,
      dim: 'conflict',
      text: '看到「只有我一个人觉得……」',
      options: [
        { text: '回复「不止你一个」', score: 100 },
        { text: '心里同意，但懒得回', score: 0 },
        { text: '点个赞表示认同', score: 33 },
        { text: '回复一段自己的看法', score: 67 }
      ]
    },

    {
      id: 16,
      dim: 'exploration',
      text: '刷到一个很对味的博主',
      options: [
        { text: '把他所有内容翻一遍', score: 100 },
        { text: '看两条，够了', score: 0 },
        { text: '关注，慢慢看', score: 33 },
        { text: '先看最火的那几条', score: 67 }
      ]
    },
    {
      id: 17,
      dim: 'exploration',
      text: '想查一个东西',
      options: [
        { text: '看第一条就够', score: 0 },
        { text: '一路点到搜索结果的第 10 页', score: 100 },
        { text: '看前三条，对比一下', score: 67 },
        { text: '换个关键词再搜一次', score: 33 }
      ]
    },
    {
      id: 18,
      dim: 'exploration',
      text: '你的信息来源',
      options: [
        { text: '主动搜、主动订阅', score: 100 },
        { text: '全靠推荐流喂', score: 0 },
        { text: '朋友转发什么看什么', score: 33 },
        { text: '几个固定博主，偶尔刷推荐', score: 67 }
      ]
    },
    {
      id: 19,
      dim: 'exploration',
      text: '看一部老剧或老游戏',
      options: [
        { text: '会去考据幕后、原型、删减片段', score: 100 },
        { text: '看完就算', score: 0 },
        { text: '会搜一下评价和彩蛋', score: 67 },
        { text: '偶尔看看解说', score: 33 }
      ]
    },
    {
      id: 20,
      dim: 'exploration',
      text: '刷到一个冷门话题',
      options: [
        { text: '划走，下一个', score: 0 },
        { text: '顺着挖下去，越挖越深', score: 100 },
        { text: '看两眼，感兴趣就收藏', score: 67 },
        { text: '先看看评论区有没有懂哥', score: 33 }
      ]
    },

    {
      id: 21,
      dim: 'trace',
      text: '看完一篇长文',
      options: [
        { text: '收藏，或者做点笔记', score: 100 },
        { text: '看完就走，不留', score: 0 },
        { text: '收藏，但再也不看', score: 67 },
        { text: '截图存下来', score: 33 }
      ]
    },
    {
      id: 22,
      dim: 'trace',
      text: '你的收藏夹',
      options: [
        { text: '分门别类，像个小图书馆', score: 100 },
        { text: '一团乱，或者根本没有', score: 0 },
        { text: '有几个文件夹，但很少整理', score: 67 },
        { text: '全堆在一起，靠搜索找', score: 33 }
      ]
    },
    {
      id: 23,
      dim: 'trace',
      text: '用过的东西、去过的地方',
      options: [
        { text: '从不评价', score: 0 },
        { text: '会留下评价', score: 100 },
        { text: '特别满意或特别差才评', score: 67 },
        { text: '只打分，不写文字', score: 33 }
      ]
    },
    {
      id: 24,
      dim: 'trace',
      text: '你的账号历史',
      options: [
        { text: '能一路翻到很多年前', score: 100 },
        { text: '定期清空，像新号', score: 0 },
        { text: '换过号，旧号还在', score: 67 },
        { text: '不发但也不删', score: 33 }
      ]
    },
    {
      id: 25,
      dim: 'trace',
      text: '别人提起某件旧事',
      options: [
        { text: '完全不记得', score: 0 },
        { text: '能翻出当时的截图', score: 100 },
        { text: '有点印象，细节想不起来', score: 33 },
        { text: '记得大概，能说出个七八成', score: 67 }
      ]
    }
  ]

  var DIMS = ['activity', 'expression', 'conflict', 'exploration', 'trace']
  var TOTAL = QUESTIONS.length
  var KEY = 'internet-persona-v1'

  // ────────────────────────────────────────────────────────────
  // 计分
  // ────────────────────────────────────────────────────────────
  function score(picks) {
    if (picks.length !== TOTAL) return null

    var sums = { activity: 0, expression: 0, conflict: 0, exploration: 0, trace: 0 }
    var counts = { activity: 0, expression: 0, conflict: 0, exploration: 0, trace: 0 }

    QUESTIONS.forEach(function (q, i) {
      var opt = q.options[picks[i]]
      if (!opt) return
      counts[q.dim] += 1
      sums[q.dim] += opt.score
    })

    var vector = {}
    DIMS.forEach(function (dim) {
      vector[dim] = Math.round(sums[dim] / counts[dim])
    })

    var ranked = PERSONAS.map(function (persona) {
      var sum = 0
      DIMS.forEach(function (dim, i) {
        var diff = vector[dim] - persona.vector[i]
        sum += diff * diff
      })
      return { persona: persona, distance: Math.sqrt(sum / DIMS.length) / 100 }
    }).sort(function (x, y) {
      return x.distance - y.distance
    })

    return {
      persona: ranked[0].persona,
      runnerUp: ranked[1].persona,
      match: toMatch(ranked[0].distance),
      runnerUpMatch: toMatch(ranked[1].distance),
      vector: vector
    }
  }

  function toMatch(distance) {
    var value = Math.round(100 - distance * 100 * 0.62)
    return Math.max(58, Math.min(99, value))
  }

  function vectorOf(persona) {
    var v = {}
    DIMS.forEach(function (dim, i) {
      v[dim] = persona.vector[i]
    })
    return v
  }

  // ────────────────────────────────────────────────────────────
  // 状态
  // ────────────────────────────────────────────────────────────
  var app = document.getElementById('app')
  var overlayRoot = document.getElementById('overlay-root')

  var state = {
    stage: 'intro',
    index: 0,
    picks: [],
    result: null,
    poster: null,
    busy: false
  }

  var DEMO = new URLSearchParams(location.search).get('demo')

  function save() {
    if (DEMO) return
    try {
      if (state.stage === 'intro') {
        localStorage.removeItem(KEY)
      } else {
        localStorage.setItem(KEY, JSON.stringify({ stage: state.stage, picks: state.picks }))
      }
    } catch (e) {
      /* 隐私模式下忽略 */
    }
  }

  function restore() {
    if (DEMO) return
    var raw = null
    try {
      raw = localStorage.getItem(KEY)
    } catch (e) {
      return
    }
    if (!raw) return
    try {
      var data = JSON.parse(raw)
      var picks = (data.picks || []).filter(function (p) {
        return typeof p === 'number' && p >= 0 && p <= 3
      }).slice(0, TOTAL)
      if (picks.length === TOTAL) {
        var r = score(picks)
        if (r) {
          state.picks = picks
          state.result = r
          state.stage = 'result'
          return
        }
      }
      if (picks.length > 0) {
        state.picks = picks
        state.index = picks.length
        state.stage = 'quiz'
      }
    } catch (e) {
      /* 忽略损坏数据 */
    }
  }

  // ────────────────────────────────────────────────────────────
  // 渲染
  // ────────────────────────────────────────────────────────────
  function render() {
    if (state.stage === 'intro') {
      app.innerHTML = landingHTML()
    } else if (state.stage === 'quiz') {
      app.innerHTML = quizHTML()
    } else {
      app.innerHTML = resultHTML()
    }
    window.scrollTo(0, 0)
  }

  function landingHTML() {
    return (
      '<div class="page landing">' +
      '<header class="topbar"><span class="brand">互联网人格<span class="dot">.</span></span>' +
      '<span class="meta">25 题 · 约 2 分钟</span></header>' +
      '<div class="hero">' +
      '<p class="eyebrow">INTERNET PERSONA TEST</p>' +
      '<h1>你在网上，<br>到底是个<br><span class="mark">什么东西？</span></h1>' +
      '<p class="sub">25 道题，测出你藏在头像后面的那一面。<br>别想太久，第一反应最准。</p>' +
      '</div>' +
      '<button class="btn primary big" data-action="start">开始测试 <span class="arrow">→</span></button>' +
      '<section class="steps">' +
      '<div class="step"><span class="step-no">01</span><div class="step-body">' +
      '<b>25 道题，凭第一反应选</b><p>没有标准答案，越犹豫越不准</p></div></div>' +
      '<div class="step"><span class="step-no">02</span><div class="step-body">' +
      '<b>算出你的五维坐标</b><p>活跃、表达、冲突、探索、痕迹</p></div></div>' +
      '<div class="step"><span class="step-no">03</span><div class="step-body">' +
      '<b>解锁你的人格和结果海报</b></div></div>' +
      '</section>' +
      '<p class="disclaimer">本测试仅供娱乐与自我探索，不构成任何心理诊断或医疗建议。</p>' +
      '</div>'
    )
  }

  function quizHTML() {
    var q = QUESTIONS[state.index]
    var segs = QUESTIONS.map(function (_, i) {
      return '<span class="seg' + (i < state.index ? ' on' : '') + '"></span>'
    }).join('')

    return (
      '<div class="page quiz">' +
      '<header class="quiz-top">' +
      '<button class="ghost" data-action="back">' +
      (state.index === 0 ? '← 返回' : '← 上一题') +
      '</button>' +
      '<span class="counter"><b>' +
      String(state.index + 1).padStart(2, '0') +
      '</b> / ' +
      TOTAL +
      '</span></header>' +
      '<div class="progress" aria-hidden="true">' +
      segs +
      '</div>' +
      '<div class="q" key="' +
      q.id +
      '">' +
      '<p class="q-index">Q' +
      (state.index + 1) +
      '</p>' +
      '<h2 class="q-text">' +
      q.text +
      '</h2>' +
      '<div class="options">' +
      q.options
        .map(function (opt, i) {
          return (
            '<button class="option" data-action="choose" data-pick="' +
            i +
            '"><span class="letter">' +
            'ABCD'.charAt(i) +
            '</span><span class="option-text">' +
            opt.text +
            '</span></button>'
          )
        })
        .join('') +
      '</div></div>' +
      '</div>'
    )
  }

  function resultHTML() {
    var r = state.result
    var p = r.persona
    var fg = p.textOnColor === 'paper' ? '#F4EFE6' : '#111111'
    var match = PERSONA_BY_ID[p.match]
    var clash = PERSONA_BY_ID[p.clash]

    var traits = p.traits
      .map(function (t) {
        return '<li>' + t + '</li>'
      })
      .join('')

    return (
      '<div class="page result">' +
      '<header class="result-top"><span class="brand small">你的互联网人格</span>' +
      '<button class="ghost" data-action="restart">重测</button></header>' +
      '<section class="hero-card" style="background:' +
      p.color +
      ';color:' +
      fg +
      '">' +
      '<div class="hero-tags"><span>稀有度 ' +
      p.rarity +
      '%</span><span>匹配度 ' +
      r.match +
      '%</span></div>' +
      '<div class="hero-emoji">' +
      p.emoji +
      '</div>' +
      '<h2 class="hero-name">' +
      p.name +
      '</h2>' +
      '<p class="hero-en">' +
      p.en +
      '</p>' +
      '</section>' +
      '<p class="tagline">「' +
      p.tagline +
      '」</p>' +
      '<p class="intro">' +
      p.intro +
      '</p>' +
      '<div class="block"><h3>你的上网日常</h3><p>' +
      p.scene +
      '</p></div>' +
      '<div class="block"><h3>三个关键词</h3><ul class="traits">' +
      traits +
      '</ul></div>' +
      '<div class="two">' +
      '<div class="block"><h3>超能力</h3><p>' +
      p.strength +
      '</p></div>' +
      '<div class="block"><h3>赛博黑点</h3><p>' +
      p.weakness +
      '</p></div>' +
      '</div>' +
      '<div class="pair">' +
      '<div class="pair-item"><span class="pair-label">最合拍</span>' +
      '<span class="pair-name">' +
      match.emoji +
      ' ' +
      match.name +
      '</span><span class="pair-rate">' +
      r.match +
      '%</span></div>' +
      '<div class="pair-item bad"><span class="pair-label">最容易吵</span>' +
      '<span class="pair-name">' +
      clash.emoji +
      ' ' +
      clash.name +
      '</span></div></div>' +
      '<blockquote class="signature">' +
      p.signature +
      '</blockquote>' +
      '<div class="actions">' +
      '<button class="btn primary big" data-action="poster">保存结果图</button>' +
      '<button class="btn" data-action="copy">复制分享文案</button>' +
      '<button class="btn" data-action="restart">再测一次</button>' +
      '</div>' +
      '<p class="disclaimer">结果由 25 道题的五维得分匹配得出，仅供娱乐。同一套答案，结果永远一样。</p>' +
      '</div>'
    )
  }

  function renderOverlay() {
    if (!state.poster) {
      overlayRoot.innerHTML = ''
      document.body.classList.remove('locked')
      return
    }
    overlayRoot.innerHTML =
      '<div class="overlay">' +
      '<div class="overlay-inner">' +
      '<img src="' +
      state.poster +
      '" alt="我的互联网人格结果">' +
      '<p class="hint">长按图片保存到相册 · 点空白处关闭</p>' +
      '<a class="btn primary" href="' +
      state.poster +
      '" download="我的互联网人格.png">下载图片</a>' +
      '</div></div>'
    document.body.classList.add('locked')

    var overlay = overlayRoot.querySelector('.overlay')
    overlay.addEventListener('click', function (e) {
      if (e.target.closest('.overlay-inner')) return
      state.poster = null
      renderOverlay()
    })
  }

  // ────────────────────────────────────────────────────────────
  // 交互
  // ────────────────────────────────────────────────────────────
  function start() {
    state.stage = 'quiz'
    state.index = 0
    state.picks = []
    state.result = null
    save()
    render()
  }

  function choose(pick) {
    var next = state.picks.slice(0, state.index)
    next[state.index] = pick
    state.picks = next

    if (state.index >= TOTAL - 1) {
      var r = score(next)
      if (r) {
        state.result = r
        state.stage = 'result'
        save()
        render()
      }
      return
    }
    state.index += 1
    save()
    render()
  }

  function back() {
    if (state.index === 0) {
      state.stage = 'intro'
      state.picks = []
      save()
      render()
      return
    }
    state.index -= 1
    save()
    render()
  }

  function restart() {
    state.stage = 'intro'
    state.index = 0
    state.picks = []
    state.result = null
    state.poster = null
    try {
      localStorage.removeItem(KEY)
    } catch (e) {}
    renderOverlay()
    render()
  }

  function copyShare(btn) {
    var p = state.result.persona
    var text = '我的互联网人格是「' + p.name + '」：' + p.tagline + '\n你是哪种？'
    var done = function () {
      var old = btn.textContent
      btn.textContent = '已复制 ✓'
      setTimeout(function () {
        btn.textContent = old
      }, 1600)
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        fallbackCopy(text, done)
      })
    } else {
      fallbackCopy(text, done)
    }
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      done()
    } catch (e) {
      alert(text)
    }
    document.body.removeChild(ta)
  }

  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]')
    if (!el) return
    var action = el.getAttribute('data-action')

    if (action === 'start') start()
    else if (action === 'choose') choose(parseInt(el.getAttribute('data-pick'), 10))
    else if (action === 'back') back()
    else if (action === 'restart') restart()
    else if (action === 'copy') copyShare(el)
    else if (action === 'poster') openPoster(el)
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && state.poster) {
      state.poster = null
      renderOverlay()
    }
  })

  // ────────────────────────────────────────────────────────────
  // 海报
  // ────────────────────────────────────────────────────────────
  function openPoster(btn) {
    if (state.busy || !state.result) return
    state.busy = true
    var old = btn.textContent
    btn.disabled = true
    btn.textContent = '正在生成…'

    buildPoster(state.result)
      .then(function (url) {
        state.poster = url
        renderOverlay()
      })
      .catch(function () {
        alert('海报生成失败，请直接截图本页')
      })
      .then(function () {
        state.busy = false
        if (btn.isConnected) {
          btn.disabled = false
          btn.textContent = old
        }
      })
  }

  var W = 1080
  var H = 1440
  var PAPER = '#F4EFE6'
  var INK = '#111111'
  var FONT = '"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",sans-serif'

  function font(size, weight) {
    return (weight || 700) + ' ' + size + 'px ' + FONT
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  }

  function wrapText(ctx, text, maxWidth) {
    var chars = Array.from(text)
    var lines = []
    var line = ''
    for (var i = 0; i < chars.length; i++) {
      var ch = chars[i]
      if (line && ctx.measureText(line + ch).width > maxWidth) {
        lines.push(line)
        line = ch
      } else {
        line += ch
      }
    }
    if (line) lines.push(line)
    return lines
  }

  function shareUrl() {
    if (window.__SITE_URL__) return window.__SITE_URL__
    return location.href.split('#')[0]
  }

  function loadImage(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image()
      img.onload = function () {
        resolve(img)
      }
      img.onerror = reject
      img.src = url
    })
  }

  function buildPoster(result) {
    return new Promise(function (resolve, reject) {
      var canvas = document.createElement('canvas')
      canvas.width = W
      canvas.height = H
      var ctx = canvas.getContext('2d')
      if (!ctx) return reject(new Error('canvas unsupported'))

      var persona = result.persona
      var onColor = persona.textOnColor === 'paper' ? PAPER : INK

      ctx.fillStyle = PAPER
      ctx.fillRect(0, 0, W, H)

      ctx.strokeStyle = INK
      ctx.lineWidth = 8
      roundRect(ctx, 24, 24, W - 48, H - 48, 44)
      ctx.stroke()

      // 浏览器地址栏
      ctx.fillStyle = INK
      roundRect(ctx, 56, 62, W - 112, 88, 44)
      ctx.fill()
      var dots = ['#FF5F57', '#FEBC2E', '#28C840']
      dots.forEach(function (color, i) {
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(100 + i * 32, 106, 9, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.fillStyle = 'rgba(244,239,230,0.9)'
      ctx.font = font(26, 600)
      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.fillText('internet-persona.test / 你的人格', 196, 107)

      // 主色卡
      ctx.fillStyle = INK
      roundRect(ctx, 66, 192, W - 132, 556, 40)
      ctx.fill()

      ctx.fillStyle = persona.color
      roundRect(ctx, 56, 182, W - 112, 556, 40)
      ctx.fill()
      ctx.strokeStyle = INK
      ctx.lineWidth = 7
      roundRect(ctx, 56, 182, W - 112, 556, 40)
      ctx.stroke()

      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.font = font(24, 700)
      ctx.fillStyle = onColor
      ctx.globalAlpha = 0.85
      ctx.fillText('稀有度 ' + persona.rarity + '%', 96, 236)
      ctx.textAlign = 'right'
      ctx.fillText('匹配度 ' + result.match + '%', W - 96, 236)
      ctx.globalAlpha = 1

      ctx.textAlign = 'center'
      ctx.font = font(132, 400)
      ctx.fillText(persona.emoji, W / 2, 356)

      ctx.fillStyle = onColor
      ctx.font = font(116, 900)
      ctx.fillText(persona.name, W / 2, 500)

      ctx.globalAlpha = 0.72
      ctx.font = font(28, 700)
      ctx.fillText(persona.en, W / 2, 582)
      ctx.globalAlpha = 1

      ctx.fillStyle = INK
      ctx.font = font(44, 800)
      var tagLines = wrapText(ctx, persona.tagline, 860)
      var y = 800
      tagLines.forEach(function (line) {
        ctx.fillText(line, W / 2, y)
        y += 56
      })

      y += 46
      ctx.font = font(26, 500)
      ctx.fillStyle = 'rgba(17,17,17,0.78)'
      ctx.textAlign = 'left'
      persona.traits.forEach(function (trait) {
        var lines = wrapText(ctx, '· ' + trait, 760)
        lines.forEach(function (line, i) {
          ctx.fillText(i === 0 ? line : '   ' + line, 200, y)
          y += 46
        })
        y += 8
      })
      ctx.textAlign = 'center'

      y += 18
      ctx.strokeStyle = 'rgba(17,17,17,0.14)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(160, y)
      ctx.lineTo(W - 160, y)
      ctx.stroke()

      y += 66
      ctx.fillStyle = 'rgba(17,17,17,0.62)'
      ctx.font = font(32, 600)
      ctx.fillText('“' + persona.signature + '”', W / 2, y)

      y += 62
      ctx.fillStyle = 'rgba(17,17,17,0.55)'
      ctx.font = font(23, 500)
      ctx.fillText(
        '和 ' +
          PERSONA_BY_ID[persona.match].name +
          ' 最合拍 · 和 ' +
          PERSONA_BY_ID[persona.clash].name +
          ' 最容易吵',
        W / 2,
        y
      )

      // 二维码
      var qrSize = 148
      var qrX = W - 56 - qrSize
      var qrY = 1218
      var qrDone = Promise.resolve()
      if (typeof qrcode === 'function') {
        try {
          var qr = qrcode(0, 'M')
          qr.addData(shareUrl())
          qr.make()
          qrDone = loadImage(qr.createDataURL(8, 0)).then(function (img) {
            ctx.fillStyle = PAPER
            ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20)
            ctx.strokeStyle = 'rgba(17,17,17,0.16)'
            ctx.lineWidth = 2
            ctx.strokeRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20)
            ctx.drawImage(img, qrX, qrY, qrSize, qrSize)
          })
        } catch (e) {
          /* 二维码失败不影响主体 */
        }
      }

      qrDone
        .catch(function () {})
        .then(function () {
          ctx.textAlign = 'left'
          ctx.fillStyle = INK
          ctx.font = font(30, 800)
          ctx.fillText('互联网人格测试', 72, 1262)
          ctx.fillStyle = 'rgba(17,17,17,0.45)'
          ctx.font = font(17, 600)
          ctx.fillText('I N T E R N E T   P E R S O N A   T E S T', 72, 1302)

          ctx.fillStyle = 'rgba(17,17,17,0.4)'
          ctx.font = font(17, 500)
          ctx.fillText('仅供娱乐，不构成任何心理诊断或医疗建议', 72, 1372)

          resolve(canvas.toDataURL('image/png'))
        })
    })
  }

  // ────────────────────────────────────────────────────────────
  // Demo 模式（仅用于预览截图，不影响正常使用）
  // ?demo=quiz&q=6   ?demo=result&type=contrarian   ?demo=poster&type=lurker
  // ────────────────────────────────────────────────────────────
  function initDemo() {
    if (!DEMO) return false
    var params = new URLSearchParams(location.search)

    if (DEMO === 'quiz') {
      var q = parseInt(params.get('q') || '1', 10)
      state.stage = 'quiz'
      state.index = Math.max(0, Math.min(TOTAL - 1, q - 1))
      state.picks = []
      render()
      return true
    }

    if (DEMO === 'result' || DEMO === 'poster' || DEMO === 'rawposter' || PERSONA_BY_ID[DEMO]) {
      var id = PERSONA_BY_ID[DEMO] ? DEMO : params.get('type') || 'lurker'
      var persona = PERSONA_BY_ID[id] || PERSONAS[0]
      var idx = PERSONAS.indexOf(persona)
      var runner = PERSONAS[(idx + 1) % PERSONAS.length]
      state.result = {
        persona: persona,
        runnerUp: runner,
        match: 92,
        runnerUpMatch: 78,
        vector: vectorOf(persona)
      }
      state.stage = 'result'

      if (DEMO === 'rawposter') {
        buildPoster(state.result).then(function (url) {
          document.body.style.margin = '0'
          document.body.innerHTML =
            '<img src="' + url + '" style="display:block;width:1080px;height:1440px">'
        })
        return true
      }

      render()
      if (DEMO === 'poster') {
        setTimeout(function () {
          var btn = document.querySelector('[data-action="poster"]')
          if (btn) openPoster(btn)
        }, 60)
      }
      return true
    }
    return false
  }

  restore()
  if (!initDemo()) render()
})()
