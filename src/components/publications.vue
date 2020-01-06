<template>
  <div class="block">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in pubs"
            :key="index"
            :timestamp="activity.date" placement="top">
            <el-card>
              <h4>{{activity.title}}</h4>
              <p>{{activity.info}}</p>
              <p>{{activity.authors}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "publications",
    data() {
      return {
        pubs: []
      }
    },
    mounted() {
      this.getPubs()
    },
    methods: {
      getPubs() {
          this.$axios.get('http://localhost:8080/static/publications.json').then((res) => {
            this.pubs = res.data.pubs
          })
      }
    }
  }
</script>

<style scoped>
  .kanwu {
    font-weight: bold;
    font-style: italic;
  }
</style>
