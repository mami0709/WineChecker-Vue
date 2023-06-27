<template>
  <DefaultLayout>
    <div class="container">
      <h2 class="title">投稿が完了しました</h2>
      <div class="btn-container">
        <button class="home-btn" @click="goToHomePage">トップページへ戻る</button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '../../components/DefaultLayout.vue'

export default defineComponent({
  components: {
    DefaultLayout
  },
  setup() {
    const router = useRouter()
    const goToHomePage = () => {
      router.push('/')
    }
    return { goToHomePage }
  }
})
</script>

<style scoped>
.container {
  width: 60%;
  padding: 50px 0;
}

.title {
  font-size: 2rem;
  padding-top: 50px;
  padding-bottom: 70px;
  font-weight: bold;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.home-btn {
  background-color: #f59e0b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
}

.home-btn:hover {
  background-color: white;
  color: black;
  border: 2px solid #f59e0b;
}
</style>
