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
            label="Authors"
            prop="authors">
          </el-table-column>
          <el-table-column
            label="Year"
            prop="year">
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
      width="40%"
      :closed="handleClose" @open="diaOpen">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Title
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ ptitle }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Authors
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ pauthors }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Type
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ ptype }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Publication
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ ppublication }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Volume
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ pvolume }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Pages
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ ppages }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            Year
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ pyear }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            DOI
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            {{ pdoi }}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            URL
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <a :href="purl" target="_blank">{{ purl }}</a>
          </div>
        </el-col>
      </el-row>
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
      tableData: [],
      search: '',
      dialogVisible: false,
      diaTitle: 'Dialog Title',
      ptitle: '',
      pauthors: '',
      ptype: '',
      ppublication: '',
      pvolume: '',
      ppages: '',
      pyear: '',
      pdoi: '',
      purl: ''
    }
  },
  mounted() {
    this.getAlgs()
  },
  methods: {
    getAlgs: function() {
      this.$axios.get('/static/algorithms.json').then((res) => {
        this.tableData = res.data.algorithmdatas
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.diaTitle = row.alg;
      this.ptitle = row.title
      this.ptype = row.algtype
      this.ppublication = row.publication
      this.pauthors = row.authors
      this.pvolume = row.volume
      this.ppages = row.pages
      this.pyear = row.year
      this.pdoi = row.doi
      this.purl = row.url
    },
    diaOpen: function () {
      console.log("I am dialog, I am opened!");
    },
    handleClose: function() {
      this.clearDialog()
    },
    clearDialog: function() {
      this.ptitle = ''
      this.ptype = ''
      this.ppublication = ''
      this.pauthors = ''
      this.pvolume = ''
      this.ppages = ''
      this.pyear = ''
      this.pdoi = ''
      this.purl = ''
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


.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  word-wrap: break-word;
  word-break: normal;
  height: 40px;
  padding-top: 10px;
  font-size: 12pt;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
