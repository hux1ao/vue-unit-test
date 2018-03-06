<template>
  <div>
    <button @click="add"></button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num += 1
    }
  }
}
</script>
