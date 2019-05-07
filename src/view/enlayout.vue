<template>
    <div>
        <headerer></headerer>
        <div>
            <asider></asider>
            <mainer></mainer>
        </div>
        <footerer></footerer>
    </div>
</template>
<script>
import headerer from '@/components/headerer'
import asider from '@/components/asider'
import mainer from '@/components/mainer'
import footerer from '@/components/footerer'
export default {
    name: '',
    components:{
        headerer,
        asider,
        mainer,
        footerer
    },
    data () {
        return {

        }
    }
}
</script>
<style lang="">
    
</style>

