<template>
    <div class="detail">
    <detailhead></detailhead>
     <detailcontent></detailcontent>        
    <detailfoot></detailfoot>        
    </div>
</template>
<script>
import detailhead from './detailhead'
import detailcontent from './detailcontent'
import detailfoot from './detailfoot'
export default {
    components:{
        detailfoot,detailhead,detailcontent
    },
}
</script>

