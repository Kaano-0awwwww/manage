<script setup>
import channelEdit from './components/channelEdit.vue'
import { getArtChannelService, delChannelService } from '@/api/function'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const channelList = ref([])
const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await getArtChannelService()
  console.log(res)
  channelList.value = res.data.data
  loading.value = false
}
getChannelList()

const onAddChannel = () => {
  dialog.value.open({})
}

const onEditChannel = (row) => {
  dialog.value.open(row)
}

const onDelChannel = async (row) => {
  console.log(row)
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await delChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>

    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <channelEdit ref="dialog" @success="getArtChannelService"></channelEdit>
  </page-container>
</template>
