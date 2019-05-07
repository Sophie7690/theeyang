<template>
  <div style="text-align:left">
    <!-- <div class="nav">
      <span>商品</span>&lt;
      <span>SKU</span>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="formInline.user" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="SUP编码">
        <el-input v-model="formInline.user" placeholder="请输入SUP编码"></el-input>
      </el-form-item>
      <el-form-item label="商品编号">
        <el-input v-model="formInline.user" placeholder="请输入商品编号"></el-input>
      </el-form-item>
      <el-form-item label="外卖属性">
        <el-select v-model="formInline.region" placeholder="请输入外卖属性">
          <el-option label="预售" value="P"></el-option>
          <el-option label="及时达" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自提专享">
        <el-select v-model="formInline.region" placeholder="请选择自提专享">
          <el-option label="是" value="Y"></el-option>
          <el-option label="否" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="拼团">
        <el-select v-model="formInline.region" placeholder="请选择拼团">
          <el-option label="是" value="Y"></el-option>
          <el-option label="否" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="formInline.region" placeholder="请选择发布状态">
          <el-option label="已发布" value="FINISH"></el-option>
          <el-option label="待发布" value="OPEN"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架状态">
        <el-select v-model="formInline.region" placeholder="请选择上架状态">
          <el-option label="已上架" value="UP"></el-option>
          <el-option label="已下架" value="DOWN"></el-option>
          <el-option label="未上架" value="NOREL"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="心享价">
        <el-select v-model="formInline.regiona">
          <el-option label="心享价" value="心享价"></el-option>
          <el-option label="是" value="Y"></el-option>
          <el-option label="否" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="不可用券">
        <el-select v-model="formInline.region" placeholder="请选择不可用券">
          <el-option label="是" value="Y"></el-option>
          <el-option label="否" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row>
        <el-button type="primary" disabled>新增SKU</el-button>
        <el-button type="primary" disabled>发布SKU</el-button>
        <el-button type="primary" disabled>标签管理</el-button>
        <el-button type="primary" disabled>设置不可用券商品</el-button>
        <el-button type="primary" disabled>取消不可用券商品</el-button>
    </el-row>
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="商品ID"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="spuNumber"
      label="SPU编码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="info"
      label="商品信息"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="spuNumber"
      label="售价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="info"
      label="心享价"
      show-overflow-tooltip>
    </el-table-column>
  </el-table> -->
  </div>
</template>

<script>
// export default {
//   name: "sku",
//   data() {
//     return {
//       scope: '',
//       handleSelectionChange: true,
//       formInline: {
//         user: "",
//         region: "",
//         regiona: "心享价"
//       },
//       tableData3: []
//     };
//   },
//   methods: {
//     onSubmit() {

//     }
//   }
// };
</script>
