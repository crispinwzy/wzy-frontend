export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      home: 'HOME',
      posts: 'STORIES',
      'about me': 'ABOUT ME',
      lang: 'EN',
      'all posts': 'ALL POSTS',
      categories: 'CATEGORIES',
      more: 'MORE',
      bio: "Web developer, going to Nordic to pursue master's degree",
      resume: {
        name: 'ZHEYUN WU',
        title: 'WEB FRONT-END / BACK-END DEV.',
        email: 'wuzheyun@gmail.com',
        location: 'Quanzhou / Shanghai, China',
        profile: 'PROFILE',
        'profile-content':
          "Hi! I'm enthusiastic about ICT, currently working as a web developer. I am familiar with Git and Agile dev. Planning to pursue master's degree in fall 2020.",

        skills: 'SKILLS',

        interests: 'INTERESTS',
        'interests-content': [
          'Music',
          'Design',
          'Photography',
          'Nordic',
          'Magic',
          'Swimming'
        ],

        languages: 'LANGUAGES',
        'languages-contents': [
          'Chinese Mandarin',
          'Chinese Hokkien Dialect',
          'English (IELTS 7)'
        ],

        edu: {
          title: 'EDUCATION EXPERIENCE',
          items: [
            {
              heading:
                '[Expected] EIT Digital Master School | Staring Aug 2020',
              degree: '(MSc) Cloud and Network Infrastructures',
              details: [
                'Entry School: Aalto University, Finland',
                'Exit School: KTH Royal Institute of Technology, Sweden',
                'Exit School Specialisation: Networked Intelligence'
              ]
            },
            {
              heading: 'Stockholm University | Sweden | Jan 2019 - Jun 2019',
              degree:
                '(Exchange Student) DSV, Department of Computer and Systems Sciences'
            },
            {
              heading: 'Tamkang University | Taiwan | 2015 - 2019',
              degree: '(BBA) Information Management',
              details: [
                'GPA: 3.959/4.0, Dept. Ranking: 1/206',
                'Core Courses: Calculus, Statistic, C Lang, Programming and Data Structures, Algorithms, Network and Communication, Database Design, Advanced OOP (design patterns), Asp.net Web Programming, Operation Systems, System Analysis and Design, Network Security, Cryptology, Economics, Management, Accounting',
                'Achievements: Excellent Graduation System Design (2018), Excellent Academic Performance & Scholarship, TKU (Twice), Excellent Academic Performance, College (Four Times), Ching-sheng Scholarship (Twice)'
              ]
            }
          ]
        },

        work_experience: {
          title: 'WORK EXPERIENCE',
          items: [
            {
              heading:
                'Siqian Software Studio | Taiwan (remotely) | Jan 2020 - Present',
              position: 'Frontend / Backend',
              details: [
                'Bioinfo system development of OurGene Biotech Inc.',
                'Bioinfo system development of TGIA Biotech Inc.',
                'Frontend development (Vue)',
                'Backend development (Flask/Postgres)',
                'Report generating (Reportlab)',
                'Storage management (Minio)'
              ]
            },
            {
              heading:
                'Chunghwa Telecom Laboratories | Taiwan | Sep 2018 - Jan 2019',
              position:
                'Intern at the Department of Data Science, Project KYCheck CRRM System',
              details: [
                'Web crawler module development using Scrapy',
                "Data cleaning and quality verification for project's data"
              ]
            },
            {
              heading:
                'E-Commerce Platform www.huilipin.cn | Taiwan | Apr 2019 - May 2019',
              position: 'Frontend',
              details: ['Vue development']
            },
            {
              heading:
                'Caring Donation Platform | Taiwan | Jul 2018 - Sep 2018',
              position: 'Backend',
              details: ['ThinkPHP5/MySQL development']
            }
          ]
        }
      }
    })
  })
}
