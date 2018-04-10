 <template>
    <div v-if="show" class="curtain" tamodelex="-1" ref="curtain" @click.self="close" @keyup.esc="close">
        <div class="modalDefault">
            <button class="close" @click="close">X</button>
            <form>
                <p>Name: 
                    <input
                        class="textInput"
                        type ="text"
                        v-model="testingThing.connectionName"
                        :placeholder="testingThing.connectionName"
                        :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                    />
                </p>
                <p>Communication Method:
                    <div class="https">
                        <label for="https">HTTPS</label>
                        <input 
                            type ="radio" 
                            id="https"
                            value="HTTPS"
                            v-model="testingThing.communicationMethod"
                            :placeholder="testingThing.communicationMethod"
                            :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                        />
                        <p>URL: 
                            <input
                                class="textInput"
                                type ="text"
                                v-model="testingThing.httpsURL"
                                :placeholder="testingThing.httpsURL"
                                :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                            />
                        </p>
                        <p>Request Method: 
                            <label for="put">PUT</label>
                            <input
                                type ="radio"
                                id="put"
                                value="PUT"
                                v-model="testingThing.httpsRequest"
                                :placeholder="testingThing.httpsRequest"
                                :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                            />
                            <label for="post">POST</label>
                            <input
                                type ="radio"
                                id="post"
                                value="POST"
                                v-model="testingThing.httpsRequest"
                                :placeholder="testingThing.httpsRequest"
                                :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                            />
                        </p>
                    </div>
                    <div class="tcp">
                        <label for="tcp">TCP</label>
                        <input 
                            type ="radio" 
                            id="tcp"
                            value="TCP"
                            v-model="testingThing.communicationMethod"
                            :placeholder="testingThing.communicationMethod"
                            :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                        />
                        <p>IP Address: 
                            <input
                                class="textInput"
                                type ="text"
                                v-model="testingThing.tcpIP"
                                :placeholder="testingThing.tcpIP"
                                :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                            />
                        </p>
                        <p>Port Number: 
                            <input
                                class="textInput"
                                type ="number"
                                v-model="testingThing.tcpPort"
                                :placeholder="testingThing.tcpPort"
                                :disabled="testingThing.status === 'RUNNING' || testingThing.status === 'PAUSED'"
                            />
                        </p>
                    </div>
                </p>
                <p>Status: 
                    <label for="put">Running</label>
                    <input 
                        type="radio" 
                        id="running"
                        value="RUNNING"
                        v-model="testingThing.status"
                        v-bind:checked="testingThing.status === 'RUNNING'"
                    />
                    <label for="post">Paused</label>
                    <input 
                        type="radio" 
                        id="paused"
                        value="PAUSED"
                        v-model="testingThing.status"
                        v-bind:checked="testingThing.status === 'PAUSED'"
                    />
                    <label for="post">Stopped</label>
                    <input 
                        type="radio" 
                        id="stopped"
                        value="STOPPED"
                        v-model="testingThing.status"
                        v-bind:checked="testingThing.status === 'STOPPED'"
                    />
                </p>
                <button class="submit" @click.prevent="submit(editConnection.id)">Submit</button>
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
                    id: '',
                    status: '',
                }
            }
        },
        created(){
        },
        computed: {
            testingThing(){
                return this.$store.state.connection;
            },
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
                    status: '',
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
                this.editConnection.status = this.editConnection.status || this.item.status;
            },
            close() {
                this.$emit('close');
                this.refreshEditConnection();
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
    p{
        font-weight: 500;
        color: #1b2b3a;
    }

    .textInput{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #20cb9a;
        width: 100%;
        display: block;
    }

    .curtain {
        background: rgba(0,0,0, 0.7);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 0;
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
        width: 40%;
        background-color: whitesmoke;
        padding: 20px 40px;
    }

    .submit{
        padding: 3px 10px;
        border-radius: 4px;
        background-color: #20cb9a;
        color: white;
        cursor: pointer;
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .submit:hover{
        color: #1b2b3a;
    }

    .tcp, .https{
        border: 1px solid #1b2b3a;
        margin-bottom: 10px;
    }
</style>