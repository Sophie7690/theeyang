<template>
    <div>
        <div>
            <input v-model="inputValue"/>
            <button @click="send">提交</button>
        </div>
        <ul>
            <todo-item
            v-for="(item,index) of list"
            :key="index"
            :content="item"
            ></todo-item>
        </ul>
    </div>
</template>
<script>
export default {
    name:"todoItem",
    data () {
        return {
            inputValue: '',
            list:[]
        }
    },
    methods: {
        send() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    }
}
</script>
<style lang="">
    
</style>
