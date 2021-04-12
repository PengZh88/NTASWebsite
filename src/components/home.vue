<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" background-color="#19788F"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router
                 @select="handleSelect">
          <el-menu-item index="0" disabled>IPV6 Network Traffic Analysis</el-menu-item>
          <el-menu-item index="/index">
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/datasets">Datasets</el-menu-item>
          <el-menu-item index="/algorithms">Algorithms</el-menu-item>
          <el-menu-item index="/researchers">Researchers</el-menu-item>
          <el-menu-item index="/publications">Publications</el-menu-item>
          <el-menu-item index="/aboutus">
            <span slot="title">About Us</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div v-if="isHome">
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-carousel trigger="click" height="450px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <el-image
                    style="width: 100%; height: 100%; "
                    :src="meimgs"
                    :fit="fit"></el-image>
                </el-carousel-item>
              </el-carousel>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-card class="box-card" shadow="hover">
                <div slot="header" class="card-header">
                  <span>Works and Papers</span>
                </div>
                <div class="card-content">
                  <p>This website is an ongoing project to develop a comprehensive system for research into analysis of IPv6 network traffic data based on time series data mining (CERNET Innovation Project NGII20190109). We are in the process of updating the codes of this system.</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-card class="box-card" shadow="hover">
                <div slot="header" class="card-header">
                  <span>Codes</span>
                </div>
                <div class="card-content">
                  <p>There are two code repositories associated with this website.</p>
                  <ul>
                    <li>
                      Frontend Code: <a :href="frontend" target="_blank">{{ frontend }}</a>
                    </li>
                    <li>
                      Backend Code: <a :href="backend" target="_blank">{{ backend }}</a>
                    </li>
                  </ul>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-card class="box-card" shadow="hover">
                <div slot="header" class="card-header">
                  <span>Datasets</span>
                </div>
                <div class="card-content">
                  <p>For details, please refer to <a :href="datasetsurl">Datasets</a>.</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <router-view/>
      </el-main>
      <el-footer>
        Copyright &copy; 2020 Informationzation Office, Shandong University. All Rights Reserved
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import meimgs from '../assets/MSPARAD.png'
  export default {
    name: 'Home',
    data() {
      return {
        msg: '',
        activeIndex: '/index',
        isHome: true,
        meimgs: meimgs,
        frontend: 'https://github.com/PengZh88/cernet-web',
        backend: 'https://github.com/PengZh88/cernet-back',
        datasetsurl: '/datasets'
      }
    },
    created() {
      var currentPath = this.$route.path;
      this.isHome = currentPath === '/' || currentPath === '/index';
      this.activeIndex = currentPath;
    },
    methods: {
      handleSelect(key, keyPath) {
        this.isHome = key === '/' || key === '/index';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    text-align: center;
    padding: 0;
  }

  .el-footer {
    background-color: #19788F;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-carousel__item {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .card-header {
    text-align: left;
    color: #2e6da4;
    font-size: 16pt;
  }

  .card-content {
    font-size: 14pt;
    margin: 0 auto;
    text-align: left;
  }

  .card-content > p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }

  ul > li {
    margin-top: 12px;
  }
</style>
