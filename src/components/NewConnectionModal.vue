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
                <button @click.prevent="submit">Submit</button>
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
                }
            },
            close() {
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
        max-height: 100vh;
        min-height: 50vh;
        overflow: auto;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 20px;
        background-color: whitesmoke;
        padding: 20px;
    }

</style>