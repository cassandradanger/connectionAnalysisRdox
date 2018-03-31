 <template>
    <div v-if="show" class="curtain" tabindex="-1" ref="curtain" @click.self="close" @keyup.esc="close">
        <div class="modalDefault">
            <button class="close" @click="close">X</button>
            <slot></slot>
        </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'modal-comp',
        props: ['show'],
        methods: {
            close() {
                this.$emit('close');
            }
        },
        computed: {
            curtainClass() {
                if(this.$store && this.$store.state.uiLibrary){
                    return ((this.$store.state.uiLibrary.stack.length > 0 && this.$store.state.uiLibrary.stack[0] === this) ||
                        (this.$store.state.uiLibrary.stack.length === 0 && this.$store.state.uiLibrary.topMost === this))
                            ? 'curtain'
                            : '' ;
                }else{
                    return 'curtain'
                }
            },
            modalClass() {
                if(this.$store && this.$store.state.uiLibrary){
                    return this.$store.state.uiLibrary.topMost === this 
                        ? 'modal-topmost' 
                        : 'modal-beneath';
                }else{
                    return 'modalDefault'
                }
            },
        },
        watch: {
            show(value) {
                if(this.$store && this.$store.state.uiLibrary){
                    if (value) {
                        this.$store.commit('uiLibrary/pushModalOpen', this);
                    } else {
                        this.$store.commit('uiLibrary/popModalClosed');
                    }
                }
                setTimeout(() => {
                    if (this.show) this.$refs.curtain.focus();
                }, 500);
            },
        },
        mounted() {
            if (this.show) this.$refs.curtain.focus();
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

    .modal-topmost {
        border-radius: 10px;
        left: 50%;
        top: 50%;
        max-height: 100vh;
        min-height: 50vh;
        overflow: show;
        position: fixed;
        transform: translate(-50%, -50%);
        width: 50%;
        z-index: 0;
    }

    .modal-beneath {
        position: relative;
        width: 0px;
        height: 0px;
        left: -9999px;
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
    }

</style>