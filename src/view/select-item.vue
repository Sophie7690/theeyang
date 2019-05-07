<template>
<div>
    <item-list></item-list>
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
             
         }
     }
 }
 </script>
<style lang="stylus">
    
    
</style>