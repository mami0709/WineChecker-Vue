<template>
  <DefaultLayout>
    <div class="container">
      <h2 class="title">おすすめのワインを投稿</h2>
      <form @submit.prevent="handleSubmit">
        <div v-for="(label, key) in customLabels" :key="key" class="form-item">
          <label :for="key" class="form-label">{{ label }}</label>
          <input
            :id="key"
            :value="wineInfo?.[key]"
            @input="handleChange(key, $event.target.value)"
            class="form-input"
          />
          <div v-if="errors[key]" class="error-message">{{ errors[key] }}</div>
        </div>
        <button type="submit" class="submit-button">投稿する</button>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import DefaultLayout from '../../components/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  setup() {
    const router = useRouter()
    const wineInfo = reactive({
      wine_name: '',
      english_wine_name: '',
      winery: '',
      wine_country: '',
      wine_type: '',
      wine_image: '',
      years: '',
      producer: '',
      wine_url: '',
      one_word: '',
      breed: '',
      capacity: '',
      comment: ''
    })
    const errors = reactive({})
    const customLabels = {
      comment: '詳細コメント',
      wine_name: 'ワイン名*',
      winery: 'ワイナリー*',
      wine_type: 'ワインの種類*(赤ワイン、白ワインetc)',
      wine_image: 'ワイン画像のURL*',
      wine_country: '産地*',
      wine_url: 'ワインのURL*',
      one_word: 'おすすめワード',
      english_wine_name: 'ワイン名(英名)',
      years: '生産年',
      producer: '製造者',
      breed: 'ぶどうの種類*',
      capacity: '容量'
    }

    function handleChange(name, value) {
      wineInfo[name] = value
    }

    async function handleSubmit() {
      try {
        const response = await axios.post('http://localhost:18888/api/newPost', wineInfo, {
          validateStatus: function (status) {
            return status < 500 // Reject only if the status code is greater than or equal to 500
          }
        })
        if (response.data.errors) {
          // サーバーからの応答にエラーが含まれていれば、そのエラーメッセージをstateとして設定
          Object.assign(errors, response.data.errors)
        } else {
          // エラーがなければ成功メッセージをアラートとして表示し、ユーザーを「/newPost/PostComplete」ページにリダイレクト
          alert(response.data.message)
          router.push('/recommend/PostComplete')
        }
      } catch (error) {
        console.error(`Error: ${error}`)
      }
    }

    return { wineInfo, errors, customLabels, handleChange, handleSubmit }
  }
}
</script>

<style scoped>
.container {
  /* apply your CSS styles here */
  max-width: 60%;
  padding-top: 50px;
}

.title {
  /* apply your CSS styles here */
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.error-message {
  /* apply your CSS styles here */
  color: red;
}

.submit-button {
  /* apply your CSS styles here */
  color: white;
  background-color: yellow;
  font-size: 1rem;
  font-weight: bold;
}
</style>
