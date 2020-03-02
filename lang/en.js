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
      bio:
        "Hi, this site is built with Nuxt + Flask for interest.<br>It's still being developed, so that some contents are for test now.",
      resume: {
        name: 'ZHEYUN WU',
        title: 'WEB / BACK-END / CRAWLER DEV.',
        location: 'Shanghai, China',
        profile: 'PROFILE',
        'profile-content':
          "Hi! I'm enthusiastic about IT, currently work mainly in web/backend development. I am familiar with Git and Agile that helps me get into teamwork quickly. Planning to attend master school in 2020, interested in the field of network & communication and SDN/NFV.",

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

        'project3-heading': 'Caring Donation Platform | Jul 2018 - Sep 2018',
        'project3-position': 'Back-end',
        'project3-detail':
          'Responsibilities:<ul><li>Backend development (ThinkPHP5/MySQL)</li></ul>'
      }
    })
  })
}
