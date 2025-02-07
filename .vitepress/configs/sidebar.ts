import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

// 侧边栏配置
export const sidebar: DefaultTheme.SidebarMulti = {
  '/山/': { base: '/山/', items: Side_Shan() },
  '/医/': { base: '/医/', items: Side_Yi() },
  '/命/': { base: '/命/', items: Side_Ming() },
  '/相/': { base: '/相/', items: Side_Xiang() },
  '/卜/': { base: '/卜/', items: Side_Bo() },
  '/灵宠/': { base: '/灵宠/', items: Side_Lc() },
  '/相关经典/': { base: '/相关经典/', items: Side_Jd() },
  '/': { base: '/', items: Side_Pr() }
}

// 山
export function Side_Shan(): SidebarItem[] {
  return [
    {
      // text: '山篇',
      // collapsed: true,
      base: '/山/',
      items: [
        { text: '博山篇', link: '博山篇' },
        { text: '催官篇', link: '催官篇' },
        { text: '汉书天文志', link: '汉书天文志' },
        { text: '撼龙经', link: '撼龙经' },
        { text: '黄帝阴符经', link: '黄帝阴符经' },
        { text: '金锁玉关经', link: '金锁玉关经' },
        { text: '灵宪', link: '灵宪' },
        { text: '青囊经', link: '青囊经' },
        { text: '入地眼全书', link: '入地眼全书' },
        { text: '史记天官书', link: '史记天官书' },
        { text: '水龙经', link: '水龙经' },
        { text: '天工开物', link: '天工开物' },
        { text: '雪心赋', link: '雪心赋' },
        { text: '阳宅十书', link: '阳宅十书' },
        { text: '玉尺经', link: '玉尺经' },
        { text: '葬法倒杖', link: '葬法倒杖' },
        { text: '葬经', link: '葬经' },
        { text: '葬经翼', link: '葬经翼' },
        { text: '宅经', link: '宅经' }
      ]
    }
  ]
}

// 医
export function Side_Yi(): SidebarItem[] {
  return [
    {
      // text: '医篇',
      // collapsed: true,
      base: '/医/',
      items: [
        { text: '八段锦', link: '八段锦' },
        { text: '五脏排毒法', link: '五脏排毒法' },
        { text: '濒湖脉学', link: '濒湖脉学' },
        { text: '褚氏遗书', link: '褚氏遗书' },
        { text: '发微论', link: '发微论' },
        { text: '傅青主女科', link: '傅青主女科' },
        { text: '古方八阵', link: '古方八阵' },
        { text: '鬼门十三针', link: '鬼门十三针' },
        { text: '黄帝内经', link: '黄帝内经' },
        { text: '伤寒杂病论(共十六卷)', link: '伤寒杂病论' },
        { text: '六字诀', link: '六字诀' },
        { text: '脉象口诀歌', link: '脉象口诀歌' },
        { text: '针邪密要', link: '针邪密要' },
        {
          text: '本草纲目',
          collapsed: true,
          items: [
            { text: '本草纲目(菜部)', link: '本草纲目(菜部)' },
            { text: '本草纲目(草部)', link: '本草纲目(草部)' },
            { text: '本草纲目(虫部)', link: '本草纲目(虫部)' },
            { text: '本草纲目(谷部)', link: '本草纲目(谷部)' },
            { text: '本草纲目(果部)', link: '本草纲目(果部)' },
            { text: '本草纲目(火部)', link: '本草纲目(火部)' },
            { text: '本草纲目(介部)', link: '本草纲目(介部)' },
            { text: '本草纲目(金石部)', link: '本草纲目(金石部)' },
            { text: '本草纲目(鳞部)', link: '本草纲目(鳞部)' },
            { text: '本草纲目(木部)', link: '本草纲目(木部)' },
            { text: '本草纲目(禽部)', link: '本草纲目(禽部)' },
            { text: '本草纲目(人部)', link: '本草纲目(人部)' },
            { text: '本草纲目(兽部)', link: '本草纲目(兽部)' },
            { text: '本草纲目(水部)', link: '本草纲目(水部)' },
            { text: '本草纲目(土部)', link: '本草纲目(土部)' }
          ]
        },
        {
          text: '金匮要略',
          collapsed: true,
          items: [
            { text: '金匮要略(卷上)', link: '金匮要略(卷上)' },
            { text: '金匮要略(卷中)', link: '金匮要略(卷中)' },
            { text: '金匮要略(卷下)', link: '金匮要略(卷下)' },
            { text: '金匮要略(药方)', link: '金匮要略(药方)' }
          ]
        },
        {
          text: '景岳全书',
          collapsed: true,
          items: [
            { text: '景岳全书(一)', link: '景岳全书(一)' },
            { text: '景岳全书(二)', link: '景岳全书(二)' },
            { text: '景岳全书(三)', link: '景岳全书(三)' },
            { text: '景岳全书(四)', link: '景岳全书(四)' },
            { text: '景岳全书(五)', link: '景岳全书(五)' }
          ]
        },
        { text: '类证治裁', link: '类证治裁' },
        {
          text: '灵枢',
          collapsed: true,
          items: [
            { text: '灵枢(上)', link: '灵枢(上)' },
            { text: '灵枢(下)', link: '灵枢(下)' }
          ]
        },
        { text: '颅囟经', link: '颅囟经' },
        { text: '脉经', link: '脉经' },
        { text: '难经', link: '难经' },
        { text: '奇经八脉考', link: '奇经八脉考' },
        {
          text: '千金翼方',
          collapsed: true,
          items: [
            { text: '千金翼方(上)', link: '千金翼方(上)' },
            { text: '千金翼方(中)', link: '千金翼方(中)' },
            { text: '千金翼方(下)', link: '千金翼方(下)' }
          ]
        },
        { text: '痧胀玉衡', link: '痧胀玉衡' },
        {
          text: '神农本草经',
          collapsed: true,
          items: [
            { text: '神农本草经(上经)', link: '神农本草经(上经)' },
            { text: '神农本草经(中经)', link: '神农本草经(中经)' },
            { text: '神农本草经(下经)', link: '神农本草经(下经)' },
            { text: '神农本草经(草经佚文)', link: '神农本草经(草经佚文)' },
            {
              text: '神农本草经(附吴氏本草十二条)',
              link: '神农本草经(附吴氏本草十二条)'
            }
          ]
        },
        {
          text: '太极拳',
          collapsed: true,
          items: [
            { text: '24式太极拳', link: '24式太极拳' },
            { text: '42式太极拳', link: '42式太极拳' },
            { text: '48式太极拳', link: '48式太极拳' },
            { text: '88式太极拳', link: '88式太极拳' }
          ]
        },
        { text: '汤头歌诀', link: '汤头歌诀' },
        { text: '铜人针灸经', link: '铜人针灸经' },
        { text: '温病条辨', link: '温病条辨' },
        { text: '温热论', link: '温热论' },
        { text: '五禽戏', link: '五禽戏' },
        { text: '洗冤集录', link: '洗冤集录' },
        { text: '血澄论', link: '血澄论' },
        { text: '药性赋', link: '药性赋' },
        { text: '医方集解', link: '医方集解' },
        { text: '针邪密要', link: '针邪密要' },
        {
          text: '医学三字经',
          collapsed: true,
          items: [
            { text: '医学三字经(卷一)', link: '医学三字经(卷一)' },
            { text: '医学三字经(卷二)', link: '医学三字经(卷二)' },
            { text: '医学三字经(卷三)', link: '医学三字经(卷三)' },
            { text: '医学源流论(卷上)', link: '医学源流论(卷上)' },
            { text: '医学源流论(卷下)', link: '医学源流论(卷下)' }
          ]
        },
        { text: '易筋经', link: '易筋经' },
        {
          text: '针灸甲乙经',
          collapsed: true,
          items: [
            { text: '针灸甲乙经(卷一)', link: '针灸甲乙经(卷一)' },
            { text: '针灸甲乙经(卷二)', link: '针灸甲乙经(卷二)' },
            { text: '针灸甲乙经(卷三)', link: '针灸甲乙经(卷三)' },
            { text: '针灸甲乙经(卷四)', link: '针灸甲乙经(卷四)' },
            { text: '针灸甲乙经(卷五)', link: '针灸甲乙经(卷五)' },
            { text: '针灸甲乙经(卷六)', link: '针灸甲乙经(卷六)' },
            { text: '针灸甲乙经(卷七)', link: '针灸甲乙经(卷七)' },
            { text: '针灸甲乙经(卷八)', link: '针灸甲乙经(卷八)' },
            { text: '针灸甲乙经(卷九)', link: '针灸甲乙经(卷九)' },
            { text: '针灸甲乙经(卷十)', link: '针灸甲乙经(卷十)' },
            { text: '针灸甲乙经(卷十一)', link: '针灸甲乙经(卷十一)' },
            { text: '针灸甲乙经(卷十二)', link: '针灸甲乙经(卷十二)' }
          ]
        },
        { text: '中医内科方剂索引', link: '中医内科方剂索引' },
        { text: '周易参同契', link: '周易参同契' }
      ]
    }
  ]
}

// 命
export function Side_Ming(): SidebarItem[] {
  return [
    {
      // text: '命篇',
      // collapsed: true,
      base: '/命/',
      items: [
        { text: '生辰八字', link: '生辰八字' },
        { text: '流年星宿', link: '流年星宿' },
        { text: '八字基础知识', link: '八字基础知识' },
        { text: '八字案例分析', link: '八字案例分析' },
        { text: '八字理论进阶版', link: '八字理论进阶版' },
        { text: '八字如何看健康与疾病', link: '八字如何看健康与疾病' },
        { text: '神煞章', link: '神煞章' },
        { text: '神煞大全', link: '神煞大全' },
        { text: '五行大义', link: '五行大义' },
        {
          text: '五行精纪',
          collapsed: true,
          items: [
            { text: '五行精纪(上)', link: '五行精纪(上)' },
            { text: '五行精纪(下)', link: '五行精纪(下)' }
          ]
        },
        { text: '神锋通考', link: '神锋通考' },
        { text: '星平会海', link: '星平会海' },
        { text: '星学大成', link: '星学大成' },
        { text: '玉照定真经', link: '玉照定真经' },
        { text: '滴天髓­', link: '滴天髓­' },
        { text: '斗数发微轮', link: '斗数发微轮' },
        { text: '斗数骨髓赋', link: '斗数骨髓赋' },
        { text: '女命骨髓赋', link: '女命骨髓赋' },
        { text: '观命经验谈', link: '观命经验谈' },
        {
          text: '滴天髓阐微',
          collapsed: true,
          items: [
            { text: '滴天髓阐微(六亲论)', link: '滴天髓阐微(六亲论)' },
            { text: '滴天髓阐微(通神论)', link: '滴天髓阐微(通神论)' }
          ]
        },
        { text: '命理约言', link: '命理约言' },
        { text: '十喻歌', link: '十喻歌' },
        { text: '星学大成-杂诗', link: '星学大成-杂诗' },
        { text: '玄微论', link: '玄微论' },
        { text: '造化元钥(评注)', link: '造化元钥(评注)' },
        { text: '增补太微赋', link: '增补太微赋' },
        { text: '重补斗数彀率', link: '重补斗数彀率' },
        { text: '格局章', link: '格局章' },
        { text: '鬼谷遗文', link: '鬼谷遗文' },
        { text: '李虚中命书', link: '李虚中命书' },
        { text: '命理探源', link: '命理探源' },
        { text: '千里命稿', link: '千里命稿' },
        { text: '情色命理', link: '情色命理' },
        { text: '穷通宝鉴', link: '穷通宝鉴' },
        {
          text: '三命通会',
          collapsed: true,
          items: [
            { text: '三命通会(卷一)', link: '三命通会(卷一)' },
            { text: '三命通会(卷二)', link: '三命通会(卷二)' },
            { text: '三命通会(卷三)', link: '三命通会(卷三)' },
            { text: '三命通会(卷四)', link: '三命通会(卷四)' },
            { text: '三命通会(卷五)', link: '三命通会(卷五)' },
            { text: '三命通会(卷六)', link: '三命通会(卷六)' },
            { text: '三命通会(卷七)', link: '三命通会(卷七)' },
            { text: '三命通会(卷八)', link: '三命通会(卷八)' },
            { text: '三命通会(卷九)', link: '三命通会(卷九)' },
            { text: '三命通会(卷十)', link: '三命通会(卷十)' }
          ]
        },
        { text: '邵子全书·皇极经世', link: '邵子全书·皇极经世' },
        { text: '子平管见', link: '子平管见' },
        {
          text: '子平真诠',
          collapsed: true,
          items: [
            { text: '子平真诠(上)', link: '子平真诠(上)' },
            { text: '子平真诠(下)', link: '子平真诠(下)' },
            { text: '子平真诠(研究)', link: '子平真诠(研究)' }
          ]
        },
        { text: '御定子平', link: '御定子平' },
        {
          text: '子平真诠',
          collapsed: true,
          items: [
            { text: '渊海子平', link: '渊海子平' },
            { text: '渊海子平(赋论)', link: '渊海子平(赋论)' },
            { text: '渊海子平(格局篇)', link: '渊海子平(格局篇)' },
            { text: '渊海子平(基础篇)', link: '渊海子平(基础篇)' },
            { text: '渊海子平(六亲篇)', link: '渊海子平(六亲篇)' },
            { text: '渊海子平(女命篇)', link: '渊海子平(女命篇)' },
            { text: '渊海子平(神煞篇)', link: '渊海子平(神煞篇)' },
            { text: '渊海子平(十神篇)', link: '渊海子平(十神篇)' }
          ]
        }
      ]
    }
  ]
}
// --------------------------相篇--------------------------
export function Side_Xiang(): SidebarItem[] {
  return [
    {
      // text: '相篇',
      // collapsed: true,
      base: '/相/',
      items: [
        { text: '冰鉴', link: '冰鉴' },
        { text: '公笃相法', link: '公笃相法' },
        { text: '柳庄神相', link: '柳庄神相' },
        { text: '观人于微', link: '观人于微' },
        { text: '麻衣神相', link: '麻衣神相' },
        { text: '神相金较剪', link: '神相金较剪' },
        { text: '神相全编', link: '神相全编' },
        { text: '神相铁关刀', link: '神相铁关刀' },
        { text: '太清神鉴', link: '太清神鉴' }
      ]
    }
  ]
}

// --------------------------卜篇--------------------------
export function Side_Bo(): SidebarItem[] {
  return [
    {
      // text: '卜篇',
      // collapsed: true,
      base: '/卜/',
      items: [
        { text: '毕法赋', link: '毕法赋' },
        {
          text: '卜筮全书',
          collapsed: true,
          items: [
            { text: '卜筮全书(卷一)', link: '卜筮全书(卷一)' },
            { text: '卜筮全书(卷二)', link: '卜筮全书(卷二)' },
            { text: '卜筮全书(卷三)', link: '卜筮全书(卷三)' },
            { text: '卜筮全书(卷四)', link: '卜筮全书(卷四)' },
            { text: '卜筮全书(卷五)', link: '卜筮全书(卷五)' },
            { text: '卜筮全书(卷六)', link: '卜筮全书(卷六)' },
            { text: '卜筮全书(卷七)', link: '卜筮全书(卷七)' },
            { text: '卜筮全书(卷八)', link: '卜筮全书(卷八)' },
            { text: '卜筮全书(卷九)', link: '卜筮全书(卷九)' },
            { text: '卜筮全书(卷十)', link: '卜筮全书(卷十)' },
            { text: '卜筮全书(卷十一)', link: '卜筮全书(卷十一)' },
            { text: '卜筮全书(卷十二)', link: '卜筮全书(卷十二)' },
            { text: '卜筮全书(卷十三)', link: '卜筮全书(卷十三)' },
            { text: '卜筮全书(卷十四)', link: '卜筮全书(卷十四)' }
          ]
        },
        {
          text: '卜筮正宗',
          collapsed: true,
          items: [
            { text: '卜筮正宗', link: '卜筮正宗' },
            { text: '卜筮正宗(黄金策)', link: '卜筮正宗(黄金策)' },
            {
              text: '卜筮正宗(十八问答附占验)',
              link: '卜筮正宗(十八问答附占验)'
            }
          ]
        },
        {
          text: '大六壬断案',
          collapsed: true,
          items: [
            { text: '大六壬断案(元集)', link: '大六壬断案(元集)' },
            { text: '大六壬断案(亨集)', link: '大六壬断案(亨集)' },
            { text: '大六壬断案(利集)', link: '大六壬断案(利集)' },
            { text: '大六壬断案(贞集)', link: '大六壬断案(贞集)' }
          ]
        },
        {
          text: '大六壬探原',
          collapsed: true,
          items: [
            { text: '大六壬探原(推演篇)', link: '大六壬探原(推演篇)' },
            { text: '大六壬探原(论断篇)', link: '大六壬探原(论断篇)' },
            { text: '大六壬探原(集说篇)', link: '大六壬探原(集说篇)' }
          ]
        },
        { text: '大六壬心境', link: '大六壬心境' },
        { text: '洞林秘诀', link: '洞林秘诀' },
        {
          text: '断易天机',
          collapsed: true,
          items: [
            { text: '断易天机(卷一)', link: '断易天机(卷一)' },
            { text: '断易天机(卷二)', link: '断易天机(卷二)' },
            { text: '断易天机(卷三卷四)', link: '断易天机(卷三卷四)' },
            { text: '断易天机(卷五)', link: '断易天机(卷五)' },
            { text: '断易天机(卷六)', link: '断易天机(卷六)' }
          ]
        },
        { text: '六壬粹言', link: '六壬粹言' },
        {
          text: '六壬大全',
          collapsed: true,
          items: [
            { text: '六壬大全(卷一)', link: '六壬大全(卷一)' },
            { text: '六壬大全(卷二)', link: '六壬大全(卷二)' },
            { text: '六壬大全(卷三)', link: '六壬大全(卷三)' },
            { text: '六壬大全(卷四)', link: '六壬大全(卷四)' },
            { text: '六壬大全(卷五)', link: '六壬大全(卷五)' },
            { text: '六壬大全(卷六)', link: '六壬大全(卷六)' },
            { text: '六壬大全(卷七)', link: '六壬大全(卷七)' },
            { text: '六壬大全(卷八)', link: '六壬大全(卷八)' },
            { text: '六壬大全(卷九)', link: '六壬大全(卷九)' },
            { text: '六壬大全(卷十)', link: '六壬大全(卷十)' }
          ]
        },
        { text: '六壬基本知识', link: '六壬基本知识' },
        {
          text: '梅花易数',
          collapsed: true,
          items: [
            { text: '梅花易数(卷一)', link: '梅花易数(卷一)' },
            { text: '梅花易数(卷二)', link: '梅花易数(卷二)' },
            { text: '梅花易数(卷三)', link: '梅花易数(卷三)' }
          ]
        },
        {
          text: '奇门遁甲秘笈大全',
          collapsed: true,
          items: [
            { text: '奇门遁甲秘笈大全(上)', link: '奇门遁甲秘笈大全(上)' },
            { text: '奇门遁甲秘笈大全(中)', link: '奇门遁甲秘笈大全(中)' },
            { text: '奇门遁甲秘笈大全(下)', link: '奇门遁甲秘笈大全(下)' }
          ]
        },
        { text: '奇门遁甲入门基础', link: '奇门遁甲入门基础' },
        { text: '奇门遁甲统宗大全', link: '奇门遁甲统宗大全' },
        { text: '奇门遁甲元灵经', link: '奇门遁甲元灵经' },
        { text: '奇门遁甲专业知识', link: '奇门遁甲专业知识' },
        { text: '奇门法窍', link: '奇门法窍' },
        { text: '壬归', link: '壬归' },
        { text: '壬学锁记', link: '壬学锁记' },
        { text: '烧饼歌', link: '烧饼歌' },
        { text: '筮学指要', link: '筮学指要' },
        { text: '推背图', link: '推背图' },
        { text: '小六壬', link: '小六壬' },
        {
          text: '易林补遗',
          collapsed: true,
          items: [
            { text: '易林补遗(卷一)', link: '易林补遗(卷一)' },
            { text: '易林补遗(卷二)', link: '易林补遗(卷二)' },
            { text: '易林补遗(卷三)', link: '易林补遗(卷三)' },
            { text: '易林补遗(卷四)', link: '易林补遗(卷四)' },
            { text: '易林补遗(卷五)', link: '易林补遗(卷五)' },
            { text: '易林补遗(卷六)', link: '易林补遗(卷六)' },
            { text: '易林补遗(卷七)', link: '易林补遗(卷七)' },
            { text: '易林补遗(卷八)', link: '易林补遗(卷八)' }
          ]
        },
        {
          text: '易冒',
          collapsed: true,
          items: [
            { text: '易冒(上)', link: '易冒(上)' },
            { text: '易冒(下)', link: '易冒(下)' }
          ]
        },
        {
          text: '易隐',
          collapsed: true,
          items: [
            { text: '易隐(卷首)', link: '易隐(卷首)' },
            { text: '易隐(卷一)', link: '易隐(卷一)' },
            { text: '易隐(卷二)', link: '易隐(卷二)' },
            { text: '易隐(卷三)', link: '易隐(卷三)' },
            { text: '易隐(卷四)', link: '易隐(卷四)' },
            { text: '易隐(卷五)', link: '易隐(卷五)' },
            { text: '易隐(卷六)', link: '易隐(卷六)' },
            { text: '易隐(卷七)', link: '易隐(卷七)' },
            { text: '易隐(卷八)', link: '易隐(卷八)' }
          ]
        },
        { text: '御定奇门宝鉴', link: '御定奇门宝鉴' },
        {
          text: '增删卜易',
          collapsed: true,
          items: [
            { text: '增删卜易(卷一)', link: '增删卜易(卷一)' },
            { text: '增删卜易(卷二)', link: '增删卜易(卷二)' },
            { text: '增删卜易(卷三)', link: '增删卜易(卷三)' },
            { text: '增删卜易(卷四)', link: '增删卜易(卷四)' }
          ]
        },
        {
          text: '注解大六壬指南',
          collapsed: true,
          items: [
            { text: '注解大六壬指南(卷一)', link: '注解大六壬指南(卷一)' },
            { text: '注解大六壬指南(卷二)', link: '注解大六壬指南(卷二)' },
            { text: '注解大六壬指南(卷三)', link: '注解大六壬指南(卷三)' },
            { text: '注解大六壬指南(卷四)', link: '注解大六壬指南(卷四)' }
          ]
        }
      ]
    }
  ]
}
// 相关经典
export function Side_Jd(): SidebarItem[] {
  return [
    {
      // text: '相关经典',
      // collapsed: true,
      base: '/相关经典/',
      items: [
        { text: '道德经(帛书版)', link: '道德经' },
        { text: '了凡四训', link: '了凡四训' },
        { text: '周易六十四卦', link: '周易六十四卦' },
        { text: '三字经', link: '三字经' },
        { text: '太上清静经', link: '太上清静经' },
        { text: '道教八大神咒', link: '道教八大神咒' },
        { text: '淮南子', link: '淮南子' },
        { text: '黄庭内景经', link: '黄庭内景经' },
        { text: '黄庭外景经', link: '黄庭外景经' },
        { text: '太上皇庭中景经', link: '太上皇庭中景经' },
        { text: '下清宫', link: '下清宫' }
      ]
    }
  ]
}
// 提交书籍与纠错
export function Side_Pr(): SidebarItem[] {
  return [
    {
      // text: '提交书籍与纠错',
      // collapsed: true,
      base: '/',
      items: [{ text: '提交书籍与纠错', link: '提交书籍与纠错' }]
    }
  ]
}
// 灵宠
export function Side_Lc(): SidebarItem[] {
  return [
    {
      // text: '灵宠',
      // collapsed: true,
      base: '/灵宠/',
      items: [
        { text: '宠物篇', link: '宠物篇' },
        { text: '植物篇', link: '植物篇' }
      ]
    }
  ]
}
