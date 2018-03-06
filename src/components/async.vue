<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      async: new Promise((resolve, reject) => {
        setTimeout(resolve('huxiao'), 100)
      })
    }
  }
}
</script>
