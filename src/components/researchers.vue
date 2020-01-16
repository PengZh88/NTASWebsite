<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div style="float: right">
          <el-image style="width: 180px; height: 251px" :fit="fill" :src="piczp"></el-image>
        </div>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Peng Zhan (Ph.D Candidate)</span>
          </div>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">School/Department:</div>
            </el-col>
            <el-col :span="16">
              <div>School of Software, Shandong University</div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">Degree:</div>
            </el-col>
            <el-col :span="16">
              <div>Master Degree in Software Engineering</div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">Major:</div>
            </el-col>
            <el-col :span="16">
              <div>Computer Science and Technology</div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">Work Experience:</div>
            </el-col>
            <el-col :span="16">
              <div>Engineer in Informatization Office, Shandong Unvieristy</div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">Research Interest:</div>
            </el-col>
            <el-col :span="16">
              <div>Data Mining, Machine Learning</div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="fontbold">Email:</div>
            </el-col>
            <el-col :span="16">
              <div><a href=mailto:zhanpeng@sdu.edu.cn>zhanpeng@sdu.edu.cn</a></div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <div style="float: right">
          <el-image style="width: 180px; height: 251px" :fit="fill" :src="piczp"></el-image>
        </div>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Haoran Xu (Ph.D Candidate)</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import zhanpeng from '../assets/authors/zhanpeng.jpg'
    export default {
        name: "researchers",
      data: function () {
        return {
          piczp: zhanpeng
        }
      }
    }
</script>

<style scoped>
  .box-card {
    width: 600px;
    text-align: left;
  }
  .fontbold {
    font-weight: bold;
  }
</style>
