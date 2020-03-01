import env from 'dotenv'
env.config()
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'wuzheyun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Serif&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { proxy: true },
  proxy: {
    '/api/': {
      target: process.env.API_URL,
      // target: 'http://api.wuzheyun.cn/v1',
      pathRewrite: {
        '^/api/': '/'
      }
    }
  },
  /*
   ** fontawesome config
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },
  /*
   ** i18n config
   */
  i18n: {
    locales: ['en', 'zh-cn'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          home: 'HOME',
          posts: 'STORIES',
          'about me': 'ABOUT ME',
          lang: 'EN',
          more: 'MORE',
          bio:
            "Hi, this site is built with Nuxt + Flask for interest.<br>It's still being developed now, and thus some contents are for test.",
          resume: {
            name: 'ZHEYUN WU',
            title: 'WEB / BACK-END / CRAWLER DEV.',
            location: 'Shanghai, China',
            profile: 'PROFILE',
            'profile-content':
              "Hi! I'm enthusiastic about IT and design thing, currently work mainly in web/backend development. I am familiar with Git and Agile that helps me get into teamwork quickly. Planning to attend master school in 2020, interested in network & communication and SDN/NFV.",

            skills: 'SKILLS',

            interests: 'INTERESTS',
            'interests-content':
              'Music<br>Design<br>Photography<br>Nordic<br>Magic<br>Swimming',

            languages: 'LANGUAGES',
            'languages-contents':
              'Chinese Mandarin<br>Chinese Hokkien Dialect<br>English (IELTS 7 / L:7, R:6.5, W:6.5, S:7)',

            education: 'EDUCATION EXPERIENCE',
            'education1-heading': 'Tamkang University | Taiwan | 2015 - 2019',
            'education1-degree': 'Bachelor in Information Management',
            'education1-detail':
              'GPA: 3.959/4.0, Dept Ranking: 1/206<br>Excellent Graduation System Design (2018)<br>Excellent Academic Performance & Scholarship, TKU (Twice)<br>Excellent Academic Performance, College (Four Times)<br>Ching-sheng Scholarship (Twice)',
            'education2-heading':
              'Stockholm University | Sweden | Jan 2019 - Jun 2019 ',
            'education2-degree':
              'Exchange Student in DSV, Department of Computer and Systems Sciences',
            'education-courses':
              '<b>Core Courses: </b>Calculus, Statistic, C Lang, Programming and Data Structures, Algorithms, Network and Communication, Database Design, Advanced OOP (design patterns), Asp.net Web Programming, Operation Systems, System Analysis and Design, Network Security, Cryptology',

            internship: 'INTERNSHIP EXPERIENCE',
            'internship1-heading':
              'Chunghwa Telecom Laboratories | Taiwan | Sep 2018 - Jan 2019',
            'internship1-position':
              'KYCheck CRRM System, Department of Data Science',
            'internship1-detail':
              "Responsibilities:<ul><li>Development of automated web crawler modules (Scrapy)</li><li>Cleaning and quality verification test for project's data</li></ul>",

            project: 'PROJECT EXPERIENCE',
            'project1-heading':
              'Bioinformation System of Taiwan OurGene Biotech Inc. | Jan 2020 - Now',
            'project1-position': 'Back-end',
            'project1-detail':
              'Responsibilities: <ul><li>Backend development (Flask/Postgres)</li><li>Automated generating of reports (Reportlab)</li><li>Storage management of reports (Minio)</ul>',

            'project2-heading':
              'E-Commerce Website www.huilipin.cn | Apr 2019 - May 2019',
            'project2-position': 'Front-end',
            'project2-detail':
              'Responsibilities: <ul><li>Frontend development (Vue)</li></ul>',

            'project3-heading':
              'Caring Donation Platform | Jul 2018 - Sep 2018',
            'project3-position': 'Back-end',
            'project3-detail':
              'Responsibilities:<ul><li>Backend development (ThinkPHP5/MySQL)</li></ul>'
          }
        },
        'zh-cn': {
          home: '首页',
          posts: '故事',
          'about me': '关于我',
          lang: '中文',
          more: '更多',
          bio:
            'Hi，这个站点由Nuxt+Flask搭建，纯属兴趣<br>还未完成，有空就来完善，所以有很多内容是测试的。',
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

            'project2-heading':
              '惠礼品电商网 www.huilipin.cn | 2019.04 - 2019.05',
            'project2-position': '前端',
            'project2-detail': '负责工作: <ul><li>前端开发(Vue)</li></ul>',

            'project3-heading': 'Caring捐赠平台 | 2018.07 - 2018.09',
            'project3-position': '后端',
            'project3-detail':
              '负责工作: <ul><li>后端开发(ThinkPHP5/MySQL)</li></ul>'
          }
        }
      },
      detectBrowserLanguage: {
        // If enabled, a cookie is set once a user has been redirected to his
        // preferred language to prevent subsequent redirections
        // Set to false to redirect every time
        useCookie: true,
        // Set to override the default domain of the cookie. Defaults to host of the site.
        cookieDomain: null,
        // Cookie name
        cookieKey: 'i18n_redirected',
        // Set to always redirect to value stored in the cookie, not just once
        alwaysRedirect: false,
        // If no locale for the browsers locale is a match, use this one as a fallback
        fallbackLocale: null
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
