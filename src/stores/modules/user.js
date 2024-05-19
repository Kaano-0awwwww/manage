import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserDataService } from '@/api/function'
// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('') // 定义 token
    const setToken = (t) => (token.value = t) // 设置 token

    // 用户信息
    const userData = ref({})

    const getUserData = async () => {
      const res = await getUserDataService()
      console.log(res)
      userData.value = res.data.data
    }
    const removeUser = () => {
      userData.value = {}
      token.value = ''
    }
    return { token, setToken, userData, getUserData, removeUser }
  },
  {
    persist: true // 持久化
  }
)
