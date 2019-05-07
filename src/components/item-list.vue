<template>
<div>
    <input v-model="inputValue" @click="handleShow"/>
        <ul v-if="show" class="dec">
            <li v-for="(item,index) in list" 
                :key="index"
                @click="handleClick(item.message)"
                class="dev"
            >
                {{item.message}}
            </li>
        </ul>
</div>
    
</template>
 <script>
 import itemList from '@/components/item-list'
 export default {
    name: 'child',
    data () {
        return {
            show: false,
            inputValue: '',
            list:[
                {message: '千'},
                {message: '玺'},
                {message: '的'},
                {message: '小'},
                {message: '可'},
                {message: '爱'}
            ]
        }
    },
    methods: {
        handleClick (msg) {
            this.inputValue = msg;
        },
        handleShow () {
            this.show = true;
        }
    }
}
</script>
<style lang="stylus">
   .dev
     text-align left 
     color pink 
   .dec 
     width 100px
     margin 0 auto
</style>
