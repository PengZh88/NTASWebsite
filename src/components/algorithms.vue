<template>
  <div>
    <el-container>
      <el-header>
        <div style="float: left; margin-left: 30px; margin-top: 10px; color: #2e6da4; font-size: 20px;">
          Algorithms
        </div>
        <div style="clear: left;"></div>
        <div style="float: left; margin-left: 30px;">
          Select an algorithm to view more information about it.
        </div>
      </el-header>
      <el-main class="mainalgs">

        <el-table
          :data="tableData.filter(data => !search || data.alg.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="Algorithm"
            prop="alg">
          </el-table-column>
          <el-table-column
            label="Type"
            prop="algtype">
          </el-table-column>
          <el-table-column
            label="Year"
            prop="algyear">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Key words"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">View
              </el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-main>
    </el-container>

    <el-dialog
      :title="diaTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose" @open="diaOpen">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "algorithms",
  data() {
    return {
      tableData: [{
        alg: 'MSPAR-AD',
        algtype: 'Distance Based',
        algyear: '2020'
      }, {
        alg: 'KTPC-AD',
        algtype: 'Clipped Distance Based',
        algyear: '2020'
      }, {
        alg: 'EMR',
        algtype: 'Multi-resolution',
        algyear: '2020'
      }, {
        alg: 'EST',
        algtype: 'Shapelets Based',
        algyear: '2020'
      }, {
        alg: 'TORRENT',
        algtype: 'Deep Learning',
        algyear: '2020'
      }, {
        alg: 'FCAD',
        algtype: 'Clipped Distance Based',
        algyear: '2020'
      }],
      search: '',
      dialogVisible: false,
      diaTitle: 'Dialog Title'
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.diaTitle = row.alg;
    },
    diaOpen: function() {
      console.log("I am dialog, I am opened!");
    }
  }
}
</script>

<style scoped>

.el-header, .el-footer {
  background-color: rgb(240, 248, 255);
  color: #333;
  text-align: center;
  width: 80%;
  margin: auto;
}

body > .el-container {
  margin-bottom: 40px;
}

.mainalgs {
  background-color: rgb(240, 248, 255);
  width: 80%;
  margin: auto;
}
</style>
