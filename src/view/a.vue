<template>
<div>
    <input v-model="inputValue" @click="handleClick" />
    <div v-if="show" class="dec">
        <ul>
           <li @click="handleShow" class="dev">{{content}}</li>
        </ul>
    </div>
</div>
    
</template>
 <script>
 import itemList from '@/components/item-list'
 export default {
     name: 'select-item',
     components:{
         "item-list": itemList
     },
     data() {
         return {
             inputValue: '',
             list:[
                { message: '千' },
                { message: '玺' },
                { message: '的' },
                { message: '小' },
                { message: '可' },
                { message: '爱' }
            ],
            show: false,
         }
     },
     methods:{
         handleClick() {
           this.show=true
         },
         handleShow(content) {
             console.log(content);
             this.inputValue=content;
         },
         handleShow(){
             
         }
     }
 }
 </script>
<style lang="stylus">
    .dec 
      width 100px
      margin 0 auto
    
</style>