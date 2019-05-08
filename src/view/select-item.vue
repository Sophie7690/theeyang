<template>
<div>
    <div>{{mm}}</div>
    <item-list
        :list="list"
         @aaa="aaa"
    ></item-list>
</div>
    
</template>
 <script>
 import itemList from '@/components/item-list'
 export default {
     name: 'select-item',
     components:{
         'item-list': itemList
     },
     data() {
         return {
             list:[
                {message: '千'},
                {message: '玺'},
                {message: '的'},
                {message: '小'},
                {message: '可'},
                {message: '爱'}
            ],
            mm: ''
         }
         
     },
     methods: {
         aaa (d) {
           this.mm = d;
         }
     }
   
     
 }
 </script>
<style lang="stylus">
    
    
</style>