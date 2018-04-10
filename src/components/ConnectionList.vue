<template>
  <div class="connectionList">
    <button class="link" @click="newConnection">+ New Connection</button>
    <div class="list">
      <ul>
        <li class="connectionItem" v-for="item in connectionsArray" v-bind:key="item.id">
          <p>Connection Name:<br/><span class="connectionLI">{{item.connectionName}}</span></p>
          <p>Communication Method:<br/><span class="connectionLI">{{item.communicationMethod}}</span></p> 
          <p>Status:<br/><span class="connectionLI">{{item.status}}</span></p> 
          <p v-if="item.communicationMethod === 'HTTPS'">URL:<br/><span class="connectionLI">{{item.httpsURL}}</span></p> 
          <p v-if="item.communicationMethod === 'HTTPS'">Request Method:<br/><span class="connectionLI">{{item.httpsRequest}}</span></p> 
          <p v-if="item.communicationMethod === 'TCP'">IP Address:<br/><span class="connectionLI">{{item.tcpIP}}</span></p> 
          <p v-if="item.communicationMethod === 'TCP'">Port Number:<br/><span class="connectionLI">{{item.tcpPort}}</span></p> 
          <button class="edit" @click="edit(item)">Edit</button>
        </li>
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
  name: 'connectionList',
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
  computed: {
    connectionsArray(){
        return this.$store.state.connections;
    },
  },
  methods: {
    newConnection(){
      this.show = !this.show;
    },
    edit(item){
      this.editShow = !this.editShow;
      this.item = item;
      this.$store.commit('currentConnection', item);
    },
    closeEdit(){
      this.editShow = !this.editShow;
    }
  },
}
</script>

<style scoped>

  p{
    font-weight: 600;
    color: #1b2b3a;
  }

  .connectionList{
    margin-top: 100px;
  }

  .connectionLI{
    font-weight: 100;
  }

  .connectionItem{
    font-family: 'Helvetica';
    list-style: none;
    border: 1px solid #20cb9a;
    border-radius: 4px;
    padding: 5px 15px;
    width: 300px;
    height: 300px;
    overflow: auto;
    word-wrap: break-word;
    display: inline-block;
    margin: 20px;
    clear: both;
    vertical-align: top;
    position: relative;
  }

  .link{
    background-color: none;
    border: none;
    color: #20cb9a;
    cursor: pointer;
    font-size: 14pt;
    margin: 20px 30px 0 50px;
  }

  .edit{
    padding: 3px 10px;
    border-radius: 4px;
    background-color: #20cb9a;
    color: white;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  .edit:hover{
    color: #1b2b3a;
  }
</style>
