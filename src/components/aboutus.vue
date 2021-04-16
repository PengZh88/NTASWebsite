<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div style="margin-top: 20px;">
          <span class="jstitle">Research and Application of IPv6 Network Traffic Analysis System</span>
          <span class="jstitle-small">CERNET Innovation Project</span>
          <el-divider></el-divider>
          <div class="jscontent">
            With the continuous development of network technology, the Internet has been deeply integrated into social activities. With the increasing number of devices, services, and information systems connected to the Internet, attacks against the Internet are more frequent. With the rapid development of IPv6 in our country, attacks against IPv6 have also become more frequent. It is urgent to analyze IPv6 traffic and perform anomaly detection. Therefore, it is very necessary to study and design a network traffic analysis platform in the IPv6 environment. The goal of this project is to build a network traffic analysis system based on time series data mining in IPv6 network environment. The core algorithms of this system are based on the research of time series data mining. This project starts from the collection, cleaning and storage of IPv6 network traffic, and integrates network traffic data with time series features, and studies core algorithms such as time series-based network traffic flow data's dimensionality reduction, similarity retrieval, and anomaly detection.
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div style="margin-top: 20px;">
          <span class="jstitle">Main Research and Contributions</span>
          <el-divider></el-divider>
          <div>
            <el-row>
              <el-col :span="24">
                <div class="jscontent" style="margin-bottom: 20px;">
                  In this project, we first collect the IPv6 traffic data of the core network equipment in Colleges and Universities, and then the raw traffic data is transformed into time series model with timestamps after data cleaning. Finally, we use time series data mining approaches to study network traffic data. The main research and contributions involve time series dimensionality reduction and representation, anomaly detection, similarity retrieval, and data visualization.
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
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
    font-size: 18pt;
    display: block;
  }
  .jstitle-small {
    font-weight: bold;
    font-size: 14pt;
    display: block;
  }
  .jscontent {
    line-height: 20px;
    text-align: start;
    font-size: 12pt;
    word-break: normal;
    word-wrap: normal;
  }
</style>
