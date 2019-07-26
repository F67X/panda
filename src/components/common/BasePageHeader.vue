<template>
    <div>
        <el-page-header @back="goBack" :content="current"></el-page-header>
    </div>
</template>
<script>
export default {
    name:'headers',
    data(){
        return {

        }
    },
    props:{
        current:String
    },
    methods:{
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>