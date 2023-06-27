<template>
  <div style="min-height: 100vh; background-color: rgb(245, 245, 245)">
    <div style="background-color: rgb(139, 0, 139); color: white">
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div style="display: flex; font-size: 1.5rem">
          <router-link to="/">
            <div class="nav-item no-hover" style="font-size: 3rem; padding: 5px 15px">
              Wine Checker
            </div>
          </router-link>
        </div>
        <div style="display: flex; align-items: center; font-weight: bold">
          <router-link to="/recommend/newPost">
            <div class="nav-item">ワインを投稿</div>
          </router-link>
          <router-link to="/recommend">
            <div class="nav-item">おすすめ一覧</div>
          </router-link>
          <router-link to="/login/Signup">
            <div class="nav-item">ユーザー登録</div>
          </router-link>
          <router-link to="/login">
            <div class="nav-item">ログイン</div>
          </router-link>
          <router-link to="/">
            <button
              class="nav-item"
              style="
                color: inherit;
                background: linear-gradient(170deg, #659de6, #5abab8);
                font-weight: bold;
                margin-right: 20px;
                padding: 7px 17px;
                border-radius: 5px;
              "
            >
              診断する
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div style="text-align: center; margin: 0 auto; margin: auto; width: 100; height: 100%">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.nav-item {
  cursor: pointer;
  padding: 0 20px;
  font-size: 1.2rem;
}
.nav-item:hover {
  opacity: 0.5;
}
.no-hover:hover {
  opacity: 1;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import AppTab from './AppTab.vue'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const store = useStore()
    const value = ref(0)
    const isAuthenticated = ref(false)

    const handleChange = (newValue: number) => {
      value.value = newValue
    }

    // ログイン状態かを確認
    // onMounted(() => {
    //   const token = localStorage.getItem('token')
    //   isAuthenticated.value = !!token
    // })

    return {
      value,
      isAuthenticated,
      handleChange
    }
  }
})
</script>
