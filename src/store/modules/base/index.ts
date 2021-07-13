import mutations from './mutations'
import actions from './actions'
const all = {
  state: {
    loading: null,
    online: true, // 登录状态，
    user: {
      name: localStorage.getItem('username')
    }, // 储存用户信息
    scroll: true,
  },
  getters: {
    online: (state: Type.Object) => {
      return state.online
    },
    user: (state: Type.Object) => {
      return state.user
    }
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
}
export default all
