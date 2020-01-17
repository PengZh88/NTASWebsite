<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <el-image style="width: 100%; height: 300px" :fit="fill" :src="picaboutusbg"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div style="margin-top: 20px;">
          <span class="jstitle">项目介绍</span>
          <el-divider></el-divider>
          <div class="jscontent">
            随着网络技术的不断发展，互联网已经深度融合到社会活动中。伴随着接入互联网的设备、服务、信息系统不断增多，针对互联网的攻击也越发频发。为了保障网络安全，及时发现网络流量异常。随着我国IPv6的飞速发展，针对IPv6的攻击也愈发频繁，对IPv6进行流量分析并进行异常检测已经是当务之急。因此，研究并设计实现一套在IPv6环境下的网络流量分析平台是非常有必要的。本项目的研究目标在于构建一套基于时间序列模式的IPv6网络环境下的网络流量分析系统，该系统的技术核心算法基于时间序列数据挖掘相关研究。本项目的研究从IPv6网络流量的采集、清洗与存储出发，将网络流量数据与时间序列特征相融合，研究基于时间序列的网络流量流数据的降维表示、相似性计算、异常发现等核心算法，提升核心算法的执行效率和精度，并将其整合到系统功能中，并利用时间序列可视化技术将相关结果展示出来。
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div style="margin-top: 20px;">
          <span class="jstitle">研究内容</span>
          <el-divider></el-divider>
          <div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="jscontent">
                  本项目通过将采集到的网络流量数据转换成时间序列模型，研究并利用时间序列数据挖掘相关算法，对IPv6网络流量数据进行挖掘分析。
                </div>
                <div class="jscontent">
                  主要涉及到数据降维表示、相似性检索、异常检测以及数据可视化的相关研究内容。
                </div>
              </el-col>
              <el-col :span="16">
                <el-image style="width: 100%; height: 300px" :fit="fill" :src="picpicyjnr"></el-image>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import aboutusbg from '../assets/aboutusbg.png'
  import picyjnr from '../assets/yjnr.png'
  export default {
    name: "AboutUs",
    data: function () {
      return {
        picaboutusbg: aboutusbg,
        picpicyjnr: picyjnr
      }
    }
  }
</script>

<style scoped>
  .jstitle {
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 20px;
  }
  .jscontent {
    line-height: 30px;
    text-align: justify;
    text-indent: 2em;
  }
</style>
