 <template>
    <div v-if="show" class="curtain" tabindex="-1" ref="curtain" @click.self="close" @keyup.esc="close">
        <div class="modalDefault">
            <button class="close" @click="close">X</button>
            <form>
                <p>Name
                    <input 
                        type ="text" 
                        id="name"
                        v-model="connection.connectionName"
                    />
                </p>
                <p>Communication Method
                    <label for="https">HTTPS</label>
                    <input 
                        type ="radio" 
                        id="https"
                        value="https"
                        v-model="connection.communicationMethod"
                    />
                    <label for="tcp">TCP</label>
                    <input 
                        type ="radio" 
                        id="tcp"
                        value="tcp"
                        v-model="connection.communicationMethod"
                    />
                </p>
                <div v-if="connection.communicationMethod === 'https'">
                    <p>URL
                        <input 
                            type ="text" 
                            id="httpsURL"
                            v-model="connection.httpsURL"
                        />
                    </p>
                    <p>Request Method
                        <label for="https">PUT</label>
                        <input 
                            type ="radio" 
                            id="put"
                            value="put"
                            v-model="connection.httpsRequest"
                        />
                        <label for="tcp">POST</label>
                        <input 
                            type ="radio" 
                            id="post"
                            value="post"
                            v-model="connection.httpsRequest"
                        />
                    </p>
                </div>

                <div v-if="connection.communicationMethod === 'tcp'">
                    <p>IP Address
                        <input 
                            type ="text" 
                            id="tcpIP"
                            v-model="connection.tcpIP"
                        />
                    </p>
                    <p>Port Number
                        <input 
                            type ="number" 
                            id="tcpPort"
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
                }
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            submit(){
                /* eslint-disable */
                console.log('this is more', this.connection);
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