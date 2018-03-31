<template>
  <div class="mainPage">
    <button class="link" @click="newConnection">+ New Connection</button>
    <new-connection-modal :show="show" @close="newConnection"></new-connection-modal>
  </div>
</template>

<script>
import NewConnectionModal from './NewConnectionModal';

export default {
  name: 'mainPage',
  components: {
    NewConnectionModal,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    newConnection(){
      this.show = !this.show;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .link{
    background-color: none;
    border: none;
    color: purple;
  }
</style>
