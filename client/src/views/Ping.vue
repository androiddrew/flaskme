<template>
    <h1>{{ message }}</h1>
</template>

<script>
import appService from '../app.service'

export default {
  name: 'Ping',
  data () {
    return {
      message: ''
    }
  },
  created () {
    appService.getPing()
      .then(data => {
        this.message = data.ping
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
