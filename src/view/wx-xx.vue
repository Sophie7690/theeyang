<template>
    <div>
        <demo :msg="'父组件信息'" @update="update">
            <span>emit 回传参数：{{childMsg}}</span>
        </demo>
    </div>
</template>
<script>
    import demo from '@/components/demo'
    export default{
        name: 'parent',
        data(){
            return {
                childMsg: ''
            }
        },
        components:{
            demo
        },
        methods: {
            update(msg){
                this.childMsg = msg
            }
        }
    }
</script>