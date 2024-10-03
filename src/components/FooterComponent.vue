<template>
    <footer class="footer center">
        <p class="footer__copyright">
            &copy; MyStyle, 2024
        </p>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.footer {
    background-color: $siteColor;
    min-height: 100px;
    display: flex;
    align-items: center;

    &__copyright {
        color: white;
    }
}
</style>