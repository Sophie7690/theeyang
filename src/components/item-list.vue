<template>
<div>
    <input v-model="inputValue" @click="handleShow"  />
        <ul v-if="show" class="dec">
            <li v-for="(item,index) in list" 
                :key="index"
                @click="handleClick(item)"
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
    props:['list'],
    data () {
        return {
            show: false,
            inputValue: ''
        }
    },
    methods: {
        handleClick (item) {
            this.inputValue = item.message;
            this.$emit("aaa" , this.inputValue)
            // this.inputValue = msg;
            // this.$emit("hand" , this.inputValue);
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
