<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'color-button'
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.btn {
    padding: 1rem 2rem;
    background: $siteColor;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background: white;
        color: $siteColor;
        border: 1px solid $siteColor;
    }
}
</style>