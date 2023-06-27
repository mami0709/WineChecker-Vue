<template>
  <CBox 
    :bgColor="wineType === '赤ワイン' ? 'red' : wineType === '白ワイン' ? 'green.500' : 'gray.500'" 
    color="white" 
    p="1"
  >
    {{ wineType }}
  </CBox>
</template>

<script>
export default {
  props: ['wineType']
}
</script>
