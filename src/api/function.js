import request from '@/utils/request'

// user
export const useRegisterService = async ({ username, password, repassword }) => {
  request.post('/api/reg', { username, password, repassword })
}

export const useLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

export const getUserDataService = () => request.get('/my/userinfo')

// article
export const getArtChannelService = () => request.get('/my/cate/list')

export const addChannelService = (data) => request.post('/my/cate/add', data)

export const editChannelService = (data) => request.put('/my/cate/info', data)

export const delChannelService = (id) => request.delete('/my/cate/del', { params: { id } })
