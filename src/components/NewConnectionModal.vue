 <template>
    <div v-if="show" class="curtain" tabindex="-1" ref="curtain" @click.self="close" @keyup.esc="close">
        <div class="modalDefault">
            <button class="close" @click="close">X</button>
            <form>
                <p>Connection Name: 
                    <input
                        class="textInput"
                        type ="text"
                        v-model="connection.connectionName"
                    />
                </p>
                <p>Communication Method: 
                    <label for="https">HTTPS</label>
                    <input 
                        type ="radio" 
                        id="https"
                        value="HTTPS"
                        v-model="connection.communicationMethod"
                    />
                    <label for="tcp">TCP</label>
                    <input 
                        type ="radio" 
                        id="tcp"
                        value="TCP"
                        v-model="connection.communicationMethod"
                    />
                </p>
                <p>Status: 
                    <label for="put">Running</label>
                    <input 
                        type="radio" 
                        id="running"
                        value="RUNNING"
                        v-model="connection.status"
                    />
                    <label for="post">Paused</label>
                    <input 
                        type="radio" 
                        id="paused"
                        value="PAUSED"
                        v-model="connection.status"
                    />
                    <label for="post">Stopped</label>
                    <input 
                        type="radio" 
                        id="stopped"
                        value="STOPPED"
                        v-model="connection.status"
                    />
                </p>
                <div v-if="connection.communicationMethod === 'HTTPS'">
                    <p>URL: 
                        <input
                            class="textInput"
                            type ="text"
                            v-model="connection.httpsURL"
                        />
                    </p>
                    <p>Request Method: 
                        <label for="put">PUT</label>
                        <input 
                            type="radio" 
                            id="put"
                            value="PUT"
                            v-model="connection.httpsRequest"
                        />
                        <label for="post">POST</label>
                        <input 
                            type="radio" 
                            id="post"
                            value="POST"
                            v-model="connection.httpsRequest"
                        />
                    </p>
                </div>
                <div v-if="connection.communicationMethod === 'TCP'">
                    <p>IP Address: 
                        <input
                            class="textInput"
                            type ="text"
                            v-model="connection.tcpIP"
                        />
                    </p>
                    <p>Port Number: 
                        <input
                            class="textInput"
                            type ="number"
                            v-model="connection.tcpPort"
                        />
                    </p>
                </div>
                <button class="submit" @click.prevent="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'modal-comp',
        props: ['show'],
        data() {
            return {
                connection: {
                    connectionName: '',
                    communicationMethod: '',
                    httpsURL: '',
                    httpsRequest: '',
                    tcpIP: '',
                    tcpPort: '',
                    id: 0,
                    status: '',
                }
            }
        },
        methods: {
            refreshConnection(){
                this.connection = {
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
            close() {
                this.refreshConnection();
                this.$emit('close');
            },
            submit(){
                this.connection.id = Math.floor((Math.random() * 10000) + 1);
                this.$store.commit('addConnection', this.connection);
                this.$emit('close');
                this.refreshConnection();
            },
        },
    };
</script>

<style scoped>

    .textInput{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #20cb9a;
        width: 80%;
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
        max-height: 80vh;
        min-height: 50vh;
        overflow: auto;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        background-color: whitesmoke;
        padding: 20px;
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

</style>