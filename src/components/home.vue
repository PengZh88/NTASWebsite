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
          <el-menu-item index="/datasets">Data sets</el-menu-item>
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
            <el-col :span="16" :offset="4">
              <el-carousel trigger="click" height="600px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <el-image
                    style="width: 100%"
                    :src="meimgs"
                    :fit="fit"></el-image>
                </el-carousel-item>
              </el-carousel>
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
        meimgs: meimgs
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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
