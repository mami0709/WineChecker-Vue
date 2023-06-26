<template>
  <div>
    <c-box minH="100vh" bg="rgb(245,245,245)">
      <c-app-bar color="rgb(139,0,139)">
        <c-toolbar>
          <router-link to="/">
            <c-text fontSize="3xl" cursor="pointer"> Wine Checker </c-text>
          </router-link>
          <AppTab :value="value" :change="handleChange" label="ワインを投稿" to="/newPost" />
          <AppTab
            :value="value"
            :change="handleChange"
            label="おすすめ一覧"
            to="/shindan/recommend"
          />
          <div v-if="isAuthenticated">
            <AppTab :value="value" :change="handleChange" label="マイページ" to="/login/userInfo" />
            <!-- <ActionTab
              :value="value"
              :change="handleChange"
              label="ログアウト"
              @click="handleLogout"
            /> -->
          </div>
          <div v-else>
            <AppTab :value="value" :change="handleChange" label="ユーザー登録" to="/login/Signup" />
            <AppTab :value="value" :change="handleChange" label="ログイン" to="/login" />
          </div>
          <router-link to="/">
            <c-button
              color="inherit"
              :hover="{ opacity: 0.9 }"
              :_hover="{ bg: 'linear-gradient(170deg, #659de6, #5abab8)' }"
            >
              診断する
            </c-button>
          </router-link>
        </c-toolbar>
      </c-app-bar>
      <c-box textAlign="center" mx="auto" w="100" h="100">
        <!-- <slot /> -->
      </c-box>
    </c-box>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { CBox, CAppBar, CToolbar, CText, CButton } from '@chakra-ui/vue-next'
import { useStore } from 'vuex'
import axios from 'axios'
import AppTab from './AppTab.vue'
import ActionTab from './ActionTab.vue'

export default defineComponent({
  components: {
    CBox,
    CAppBar,
    CToolbar,
    CText,
    CButton,
    AppTab,
    ActionTab
  },
  setup() {
    const store = useStore()
    const value = ref(0)
    const isAuthenticated = ref(false)

    const handleChange = (newValue: number) => {
      value.value = newValue
    }

    // ログイン状態かを確認
    onMounted(() => {
      const token = localStorage.getItem('token')
      isAuthenticated.value = !!token
    })

    // const handleLogout = async () => {
    //   const token = localStorage.getItem('token')

    //   // バックエンドにログアウト要求を送信する
    //   try {
    //     const response = await axios.post(
    //       'http://localhost:18888/api/logout',
    //       {},
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       }
    //     )
    //     console.log(response.data)
    //   } catch (err) {
    //     if (err.response) {
    //       console.error(err.response.data)
    //     } else {
    //       console.error(err)
    //     }
    //   }

    //   // トークンを削除し、認証状態を更新する
    //   localStorage.removeItem('token')
    //   isAuthenticated.value = false

    //   alert('ログアウトしました。')
    //   window.location.replace('/')
    // }

    return {
      value,
      isAuthenticated,
      handleChange
      // handleLogout
    }
  }
})
</script>
