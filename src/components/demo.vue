<template>
<div>
    <div>
        <slot></slot>
    </div>
    <div>
        <input  v-model="input"/>
        <button @click="change">切换</button>
        <button @click="send">发送</button>
    </div>
    <div>
        <div v-if="showDefault">message2</div>
        <div v-else>{{msg}}</div>
    </div>
</div>
</template>

<script>
    
export default {
    name: 'demo',
    props:{
        msg: {type: String}
    },
    data(){
        return {
           input: '',
           showDefault: true
        }
    },
    methods:{
        change(){
            this.showDefault= !this.showDefault
        },
        send(){
            this.$emit('update', this.input)
        }
    }
}
</script>