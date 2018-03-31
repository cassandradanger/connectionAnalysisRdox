<template>
  <div class="mainPage">
    <button class="link" @click="newConnection">+ New Connection</button>
    <div class="list">
      <ul v-for="item in $store.state.connections" v-bind="Math.random()">
        <li>{{item}}</li>
        <button class="edit" @click="edit(item)">Edit</button>
      </ul>
    </div>
    <new-connection-modal :show="show" @close="newConnection"></new-connection-modal>
    <edit-connection-modal :show="editShow" :item="item" @close="closeEdit"></edit-connection-modal>
  </div>
</template>

<script>
import NewConnectionModal from './NewConnectionModal';
import EditConnectionModal from './EditConnectionModal';

export default {
  name: 'mainPage',
  components: {
    NewConnectionModal,
    EditConnectionModal,
  },
  data() {
    return {
      show: false,
      editShow: false,
      item: {},
    }
  },
  methods: {
    newConnection(){
      this.show = !this.show;
    },
    edit(item){
      this.editShow = !this.editShow;
      this.item = item;
    },
    closeEdit(){
      this.editShow = !this.editShow;
    }
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
