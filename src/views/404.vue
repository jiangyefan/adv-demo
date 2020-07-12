<template>
    <a-result status="404" title="404" sub-title="Sorry, 有点小问题~~~~~~">
        <template #extra>
            <a-button type="primary">
               <router-link to="/">返回首页</router-link>
            </a-button>
        </template>
    </a-result>
</template>
<script>
    export default {
        data() {
            return {};
        },
    };
</script>