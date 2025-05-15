type EmojiType = "表情类" | "动物自然类" | "人物身体类" | "食物饮料类" | "物品符号类" | "国旗类" | "角色职务类" | null;
// 定义各类Emoji的Unicode范围
const EMOJI_TYPES = {
    "表情类": [
      { start: 0x1F600, end: 0x1F64F }, // 基本表情
      { start: 0x1F910, end: 0x1F92F }, // 扩展表情
      { start: 0x1F970, end: 0x1F97F }  // 更多表情
    ],
    "动物自然类": [
      { start: 0x1F400, end: 0x1F43E }, // 哺乳动物
      { start: 0x1F490, end: 0x1F49F }, // 花卉
      { start: 0x1F300, end: 0x1F320 }, // 自然现象
      { start: 0x1F980, end: 0x1F991 }  // 其他动物
    ],
    "人物身体类": [
      { start: 0x1F466, end: 0x1F469 }, // 基础人物
      { start: 0x1F470, end: 0x1F47F }, // 神话角色
      { start: 0x1F9D0, end: 0x1F9DD }, // 扩展人物
      { start: 0x1F645, end: 0x1F64F }  // 手势
    ],
    "食物饮料类": [
      { start: 0x1F340, end: 0x1F37F }  // 食物和饮料
    ],
    "物品符号类": [
      { start: 0x1F380, end: 0x1F39F }, // 派对用品
      { start: 0x1F3A0, end: 0x1F3EF }, // 交通工具
      { start: 0x1F4F0, end: 0x1F4FF }, // 电子产品
      { start: 0x2600, end: 0x26FF },   // 杂项符号
      { start: 0x2700, end: 0x27BF }    //  dingbats
    ],
    "国旗类": [
      { start: 0x1F1E6, end: 0x1F1FF }  // 国家/地区旗帜 (区域指示符号对)
    ],
    "角色职务类": [
      { start: 0x1F468, end: 0x1F469 }, // 男人/女人
      { start: 0x1F470, end: 0x1F477 }, // 角色
      { start: 0x1F575, end: 0x1F575 }, // 艺术家
      { start: 0x1F9D1, end: 0x1F9DD }, // 职业人物
      { start: 0x1F46E, end: 0x1F46F }, // 团体职业
      { start: 0x1F527, end: 0x1F527 }  // 科学家
    ]
  };
  
  // 工具函数：生成指定范围内的随机整数
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 主函数：随机Emoji生成器
  export function randomEmoji(type?: EmojiType, sum = 1) {
    // 处理非法sum参数
    if (typeof sum !== 'number' || sum < 1 || !Number.isInteger(sum)) {
      throw new Error('sum参数必须为正整数');
    }
  
    let result = '';
    
    // 如果未指定类型，从所有类型中随机选择
    if (!type) {
      const allRanges = Object.values(EMOJI_TYPES).flat();
      
      for (let i = 0; i < sum; i++) {
        const randomRange = allRanges[getRandomInt(0, allRanges.length - 1)];
        const codePoint = getRandomInt(randomRange.start, randomRange.end);
        result += String.fromCodePoint(codePoint);
      }
      
      return result;
    }
  
    // 如果指定类型，检查类型是否存在
    const ranges = EMOJI_TYPES[type];
    if (!ranges) {
      throw new Error(`未知的Emoji类型: ${type}`);
    }
  
    // 从指定类型中随机选择Emoji
    for (let i = 0; i < sum; i++) {
      const randomRange = ranges[getRandomInt(0, ranges.length - 1)];
      const codePoint = getRandomInt(randomRange.start, randomRange.end);
      result += String.fromCodePoint(codePoint);
    }
  
    return result;
  }
  
  // 示例用法
  console.log(randomEmoji()); // 随机返回1个Emoji
  console.log(randomEmoji("表情类", 3)); // 返回3个表情类Emoji
  console.log(randomEmoji("食物饮料类", 5)); // 返回5个食物类Emoji
  console.log(randomEmoji(null, 2)); // 从所有类型中随机返回2个Emoji    