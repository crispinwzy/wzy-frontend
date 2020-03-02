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
      bio:
        '嗨，这个网站由Nuxt+Flask搭建，纯属兴趣<br>还未完成，利用空余时间来完善，所以有些内容还是测试用的。',
      resume: {
        name: '吴哲耘',
        title: 'WEB / 后端 / 爬虫 开发',
        location: '上海',
        profile: '介绍',
        'profile-content':
          '嗨！我来自福建泉州，非常热爱IT，目前主要研究WEB和后端开发。熟悉git、敏捷开发等团队协作模式。有点强迫症。计划2020年9月读研，感兴趣网络通讯、SDN/NFV方向。',

        skills: '技能',

        interests: '兴趣',
        'interests-content': '音乐<br>设计<br>摄影<br>北欧<br>游泳<br>魔术',

        languages: '语言',
        'languages-contents':
          '中文<br>闽南语<br>英语（雅思7 / 听:7, 读:6.5, 写:6.5, 说:7）',

        education: '教育经历',
        'education1-heading': '淡江大学 | 台湾 | 2015 - 2019',
        'education1-degree': '本科 - 信息管理',
        'education1-detail':
          'GPA: 3.959/4.0, 系组排名: 1/206<br>毕业设计佳作（2018）<br>校级学业优异奖学金（2016-2017）<br>院级学业优异奖（2015-2017）<br>惊声奖学金（2017-2018）',
        'education2-heading': '斯德哥尔摩大学 | 瑞典 | 2019.01 - 2019.06',
        'education2-degree': '交换生 - 计算机与系统科学系(DSV)',
        'education-courses':
          '<b>主要课程: </b>微积分, 统计学, C, 程式设计与数据结构, 算法, 网络与通讯, 数据库设计, 进阶OOP(设计模式), Asp.net网页设计, 操作系统, 系统分析与设计, 网络安全, 密码学',

        internship: '实习经历',
        'internship1-heading': '中华电信研究院 | 台湾 | 2018.09 - 2019.01',
        'internship1-position': 'KYCheck CRRM系统 数据科学部',
        'internship1-detail':
          '负责工作:<ul><li>自动化爬虫模组开发(Scrapy)</li><li>数据清洗、数据品质验证测试工作</li></ul>',

        project: '项目经历',
        'project1-heading':
          '台湾奥基生技有限公司 生物信息系统 | 2020.01 - 现今',
        'project1-position': '后端',
        'project1-detail':
          '负责工作: <ul><li>服务端开发(Flask/Postgres)</li><li>报表自动化生产(Reportlab)</li><li>报表存储管理(Minio)</li></ul>',

        'project2-heading': '惠礼品电商网 www.huilipin.cn | 2019.04 - 2019.05',
        'project2-position': '前端',
        'project2-detail': '负责工作: <ul><li>前端开发(Vue)</li></ul>',

        'project3-heading': 'Caring捐赠平台 | 2018.07 - 2018.09',
        'project3-position': '后端',
        'project3-detail':
          '负责工作: <ul><li>后端开发(ThinkPHP5/MySQL)</li></ul>'
      }
    })
  })
}
