 <template>
    <div v-if="show" class="curtain" tabindex="-1" ref="curtain" @click.self="close" @keyup.esc="close">
        <div class="modalDefault">
            <button class="close" @click="close">X</button>
            <form>
                <p>Name
                    <input 
                        type ="text" 
                        id="name"
                        v-model="editConnection.connectionName"
                        :placeholder="item.connectionName"
                    />
                </p>
                <p>Communication Method
                    <label for="https">HTTPS</label>
                    <input 
                        type ="radio" 
                        id="https"
                        value="https"
                        v-model="editConnection.communicationMethod"
                        :placeholder="item.communicationMethod"
                    />
                    <label for="tcp">TCP</label>
                    <input 
                        type ="radio" 
                        id="tcp"
                        value="tcp"
                        v-model="editConnection.communicationMethod"
                        :placeholder="item.communicationMethod"
                    />
                </p>
                <div v-if="item.communicationMethod === 'https'">
                    <p>URL
                        <input 
                            type ="text" 
                            id="httpsURL"
                            v-model="editConnection.httpsURL"
                            :placeholder="item.httpsURL"
                        />
                    </p>
                    <p>Request Method
                        <label for="https">PUT</label>
                        <input 
                            type ="radio" 
                            id="put"
                            value="put"
                            v-model="editConnection.httpsRequest"
                            :placeholder="item.httpsRequest"
                        />
                        <label for="tcp">POST</label>
                        <input 
                            type ="radio" 
                            id="post"
                            value="post"
                            v-model="editConnection.httpsRequest"
                            :placeholder="item.httpsRequest"
                        />
                    </p>
                </div>

                <div v-if="item.communicationMethod === 'tcp'">
                    <p>IP Address
                        <input 
                            type ="text" 
                            id="tcpIP"
                            v-model="editConnection.tcpIP"
                            :placeholder="item.tcpIP"
                        />
                    </p>
                    <p>Port Number
                        <input 
                            type ="number" 
                            id="tcpPort"
                            v-model="editConnection.tcpPort"
                            :placeholder="item.tcpPort"
                        />
                    </p>
                </div>


                <button @click.prevent="submit(item.id)">Submit</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'modal-comp',
        props: ['show', 'item'],
        data() {
            return {
                editConnection: {
                    connectionName: '',
                    communicationMethod: '',
                    httpsURL: '',
                    httpsRequest: '',
                    tcpIP: '',
                    tcpPort: '',
                    id: 0,
                }
            }
        },
        methods: {
            refreshEditConnection(){
                this.editConnection = {
                    connectionName: '',
                    communicationMethod: '',
                    httpsURL: '',
                    httpsRequest: '',
                    tcpIP: '',
                    tcpPort: '',
                    id: 0,
                }
            },
            assignEditConnection(){
                this.editConnection.connectionName = this.editConnection.connectionName || this.item.connectionName;
                this.editConnection.communicationMethod = this.editConnection.communicationMethod || this.item.communicationMethod;
                this.editConnection.httpsURL = this.editConnection.httpsURL || this.item.httpsURL;
                this.editConnection.httpsRequest = this.editConnection.httpsRequest || this.item.httpsRequest;
                this.editConnection.tcpIP = this.editConnection.tcpIP || this.item.tcpIP;
                this.editConnection.tcpPort = this.editConnection.tcpPort || this.item.tcpPort;
                this.editConnection.id = this.item.id;
            },
            close() {
                this.$emit('close');
            },
            submit(){
                this.assignEditConnection();
                this.$store.commit('editConnection', this.editConnection);
                this.refreshEditConnection();
                this.$emit('close');
            },
        },
    };
</script>

<style scoped>

    .curtain {
        background: rgba(0,0,0, 0.7);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 0;
    }

    h2 {
        text-align: center;
        font-weight: normal;
        font-family: 'Circular Std Book';
    }

    .close {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .modalDefault {
        border-radius: 10px;
        left: 50%;
        max-height: 100vh;
        min-height: 50vh;
        overflow: auto;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        background-color: whitesmoke;
    }

</style>