export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      home: '首页',
      posts: '故事',
      'about me': '关于我',
      lang: '简体中文',
      'all posts': '全部贴文',
      categories: '分类',
      more: '更多',
      bio: '台湾本科，目前从事Web开发，计划2020赴北欧读研',
      resume: {
        name: '吴哲耘',
        title: 'WEB前端 / 后端 开发',
        email: 'wuzheyun@126.com',
        location: '泉州 / 上海',
        profile: '介绍',
        'profile-content':
          '嗨！我来自福建泉州，热爱ICT行业，目前主要从事Web开发。熟悉git、敏捷开发等团队协作模式。有点强迫症。计划2020秋季读研。',

        skills: '技能',

        interests: '兴趣',
        'interests-content': ['音乐', '设计', '摄影', '北欧', '游泳', '魔术'],

        languages: '语言',
        'languages-contents': ['中文', '闽南语', '英语（雅思7）'],

        edu: {
          title: '教育经历',
          items: [
            {
              heading:
                '[预期] 欧洲创新与技术研究院 硕士项目 (EIT Digital Master School) | 2020.08 开始',
              degree: '(硕士) 云计算与网络基础设施',
              details: [
                '入口校：芬兰阿尔托大学',
                '出口校：瑞典皇家理工学院',
                '出口校专业方向：网络智能'
              ]
            },
            {
              heading: '斯德哥尔摩大学 | 瑞典 | 2019.01 - 2019.06',
              degree: '(交换生) 计算机与系统科学系(DSV)'
            },
            {
              heading: '淡江大学 | 台湾 | 2015 - 2019',
              degree: '(本科) 信息管理',
              details: [
                'GPA: 3.959/4.0, 系组排名: 1/206',
                '主要课程: 微积分, 统计学, C, 程式设计与数据结构, 算法, 网络与通讯, 数据库设计, 进阶OOP(设计模式), Asp.net网页设计, 操作系统, 系统分析与设计, 网络安全, 密码学, 经济学, 管理学, 会计学',
                '奖项: 毕业设计佳作（2018）, 校级学业优异奖学金（2016-2017）, 院级学业优异奖（2015-2017）, 惊声奖学金（2017-2018）'
              ]
            }
          ]
        },

        work_experience: {
          title: '工作经历',
          items: [
            {
              heading: '思谦软件工作室 | 台湾 (远程) | 2020.01 - 现今',
              position: '前端/后端',
              details: [
                '奥基生物技术有限公司信息系统',
                '台基盟生物技术有限公司信息系统',
                '前端开发(Vue)',
                '服务端开发(Flask/Postgres)',
                '报表自动化生产(Reportlab)',
                '存储管理(Minio)'
              ]
            },
            {
              heading: '中华电信研究院 | 台湾 | 2018.09 - 2019.01',
              position: 'KYCheck CRRM项目 数据科学部实习生',
              details: ['Scrapy爬虫模组开发', '数据清洗、数据品质验证测试工作']
            },
            {
              heading: '惠礼品电商平台 www.huilipin.cn | 2019.04 - 2019.05',
              position: '前端',
              details: ['Vue开发']
            },
            {
              heading: 'Caring捐赠平台 | 2018.07 - 2018.09',
              position: '后端',
              details: ['ThinkPHP5开发']
            }
          ]
        }
      }
    })
  })
}
