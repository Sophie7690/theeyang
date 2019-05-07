<template>
    <div>
        <base-layout>
          <template slot="header">
            <h1>header</h1>
          </template>
          <p>content</p>
          <template slot="footer">
            <p>footer</p>
          </template>
        </base-layout>
       
    </div>
    
</template>
<script>
import baseLayout from '@/components/base-layout'

export default {
    components: {
        baseLayout
    },
    name: 'parent',
    data() {
        return{
            
        }
    }
}
</script>
<style lang="">
    
</style>