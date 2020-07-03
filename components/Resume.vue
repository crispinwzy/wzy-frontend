<template>
  <b-container fluid class="resume">
    <!-- 上面一行 -->
    <b-row no-gutters class="py-5" style="border-bottom:1px solid #222222;">
      <b-col
        cols="12"
        md="2"
        class="d-flex justify-content-center align-items-center"
      >
        <section class="avatar ">
          <div class="avatar-container">
            <img
              src="@/assets/images/avatar.jpg"
              style="width:100%; height:100%;"
              alt="profile-photo"
            />
          </div>
        </section>
      </b-col>

      <b-col cols="12" md="6" class="text-center text-md-left py-3">
        <section class="name">
          <h1>{{ $t('resume.name') }}</h1>
          <p>{{ $t('resume.title') }}</p>
        </section>
      </b-col>

      <b-col cols="12" md="4" class="d-flex justify-content-center ">
        <section class="contact">
          <div>
            <img src="@/assets/icons/earth-globe.svg" />
            <span>wuzheyun.cn</span>
          </div>
          <div>
            <img src="@/assets/icons/gmail.svg" />
            <span>{{ $t('resume.email') }}</span>
          </div>
          <div>
            <img src="@/assets/icons/smartphone.svg" />
            <span>+86 17359582108</span>
          </div>
          <div>
            <img src="@/assets/icons/placeholder.svg" />
            <span>{{ $t('resume.location') }}</span>
          </div>
        </section>
      </b-col>
    </b-row>

    <!-- 下面一行  -->
    <b-row no-gutters class="py-4">
      <b-col cols="12" sm="4" class="left-col d-flex flex-column px-4 py-2">
        <!-- profile -->
        <section class="py-3 px-2 mb-3">
          <div class="title">{{ $t('resume.profile') }}</div>
          <div class="content">
            <p>{{ $t('resume.profile-content') }}</p>
          </div>
        </section>
        <!-- skills -->
        <section class="py-3 px-2 mb-3">
          <div class="title">{{ $t('resume.skills') }}</div>
          <div class="content">
            <p>
              Python / Flask / Scrapy <br />
              JavaScript / Vue / Nuxt <br />
              HTML / CSS / Bootstrap4 / ElementUI <br />
              Linux / Docker / SQL <br />
              PHP / Java / C / Excel
            </p>
          </div>
        </section>
        <!-- langugaes -->
        <section class="py-3 px-2 mb-3">
          <div class="title">{{ $t('resume.languages') }}</div>
          <div class="content">
            <ul class="list-unstyled">
              <li v-for="item in $t('resume.languages-contents')" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </section>
        <!-- interests -->
        <section class="py-3 px-2">
          <div class="title">{{ $t('resume.interests') }}</div>
          <div class="content">
            <ul class="list-unstyled">
              <li v-for="item in $t('resume.interests-content')" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </section>
      </b-col>

      <b-col cols="12" sm="8" class="right-col d-flex flex-column px-4 py-2">
        <!-- 教育 -->
        <section class="py-3 px-2 mb-3">
          <div class="title">{{ $t('resume.edu.title') }}</div>
          <div class="content">
            <div v-for="item in $t('resume.edu.items')" :key="item.index">
              <h6 class="heading">{{ item.heading }}</h6>
              <p class="degree">
                <i>{{ item.degree }}</i>
              </p>
              <ul>
                <li v-for="v in item.details" :key="v" class="details">
                  {{ v }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!-- 工作经验 -->
        <section class="py-3 px-2">
          <div class="title">{{ $t('resume.work_experience.title') }}</div>
          <div class="content">
            <div
              v-for="item in $t('resume.work_experience.items')"
              :key="item.index"
            >
              <h6 class="heading">{{ item.heading }}</h6>
              <p class="position">
                <i>{{ item.position }}</i>
              </p>
              <ul>
                <li v-for="v in item.details" :key="v" class="details">
                  {{ v }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Resume - ZHEYUN WU',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: '描述',
          name: '吴哲耘',
          content: '吴哲耘的简历'
        },
        {
          hid: 'description',
          name: 'wuzheyun',
          content: "ZHEYUN WU's Resume"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.resume {
  padding: 0 30px;
  text-align: left;
  background-color: #eeeeee;
  .avatar {
    .avatar-container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
  }

  .name {
    font-family: 'Montserrat', 'PingFang SC', sans-serif;
    letter-spacing: 4px;
    h1 {
      font-weight: 600;
      font-size: 50px;
      margin-bottom: 20px;
    }
  }

  .contact {
    font-family: 'Noto Sans', sans-serif;
    div {
      padding: 7px 0;
      img {
        width: 25px;
        margin-right: 15px;
      }
    }
  }

  .title {
    font-family: 'Montserrat', 'PingFang SC', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  .content {
    font-family: 'Noto Sans', 'Noto Sans SC', sans-serif;
    .heading {
      font-weight: 700;
    }
  }
  .left-col {
    section:not(:last-child) {
      border-bottom: 1px solid #222222;
    }
  }
  @media (max-width: 575px) {
    .left-col {
      border-bottom: 1px solid #222222;
    }
  }
  @media (min-width: 576px) {
    .left-col {
      border-right: 1px solid #222222;
    }
  }
  .right-col {
    section:not(:last-child) {
      border-bottom: 1px solid #222222;
    }
  }
}
</style>
