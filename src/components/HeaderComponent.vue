<template>
    <div class="header center">
        <div class="header__logo " @click="$router.push('/')">
            <p class="dancing-script-logo">MyStyle</p>
        </div>
        <div class="header__navbar">
            <color-button @click="$router.push('/products')" class="header__button">Каталог</color-button>
            <color-button @click="$router.push('/store')" class="header__button">Store</color-button>
            <color-button @click="$router.push('/composition')" class="header__button">Composition API</color-button>
            <color-button @click="$router.push('/about')" class="header__button">О компании</color-button>
        </div>
        <details class="burger-menu">
            <summary>
                <i class="fa-solid fa-bars"></i>
            </summary>
            <div class="burger-menu__content" @click="close">
                <a class="burger-menu__link" @click="$router.push('/products')">Каталог</a>
                <a class="burger-menu__link" @click="$router.push('/store')">Store</a>
                <a class="burger-menu__link" @click="$router.push('/composition')">Composition API</a>
                <a class="burger-menu__link" @click="$router.push('/about')">О компании</a>
            </div>
        </details>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            const menu = document.querySelector('.burger-menu');
            menu.removeAttribute('open');
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/css/style.scss';

.header {
    min-height: 150px;
    background-color: $siteColor;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__navbar {
        display: flex;
        gap: 8px;
    }

}

.dancing-script-logo {
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    color: white;
    cursor: pointer;
    padding: 24px 0;

    &:hover {
        color: rgb(163, 163, 163);
    }
}

.burger-menu {
    display: none;
    position: relative;
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

    &__content {
        position: absolute;
        background-color: #fff;
        border: 1px solid $siteColor;
        right: 0;
    }

    &__link {
        display: block;
        padding: 8px 12px;
        white-space: nowrap;

        &:hover {
            background-color: $siteColor;
            border: 1px solid $siteColor;
            color: white;
        }
    }
}

summary {
    list-style-type: none;
    /* Firefox */
}

summary::-webkit-details-marker {
    display: none;
    /* Chrome */
}

@media (max-width: 767px) {
    .burger-menu {
        display: block;
    }

    .header__navbar {
        display: none;
    }
}
</style>