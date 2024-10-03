<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.btn {
    padding: 1rem 2rem;
    background: white;
    color: $siteColor;
    border: 1px solid $siteColor;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background: $siteColor;
        color: white;
        border: 1px solid white;
    }
}
</style>