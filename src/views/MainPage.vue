<template>
    <div>
        <p class="main__title">MyStyle</p>
        <transition name="subtitle-animation">
            <div class="main__subtitle"><i class="fa-solid fa-file-invoice"></i><span>SPA-приложение состоит из 6
                    страниц:</span></div>
        </transition>
        <div class="main__box">
            <div class="main__textBox">
                <p class="main__text"><strong>"Главная"</strong> страница сайта - текущая.</p>
            </div>
            <div class="main__textBox">
                <p class="main__text">На странице <strong>"Каталог"</strong> реализован постраничный вывод карточек
                    товаров.</p>
                <p class="main__text">Есть возможность добавить товар на страницу и удалить его.</p>
                <p class="main__text">Для передачи данных между родительскими и дочерними компонентами используются
                    пропсы и эмиты.</p>
            </div>
            <div class="main__textBox">
                <p class="main__text">На странице <strong>"Store"</strong> товары автоматически подгружаются, когда
                    пользователь скроллит до конца страницы. Используется Intersection Observer API.</p>
                <p class="main__text">Отслеживание того, что элемент появляется на странице, реализовано с помощью
                    пользовательской директивы.</p>
                <p class="main__text">Для хранения данных и состояния приложения используются vueX.</p>
            </div>
            <div class="main__textBox">
                <p class="main__text">На странице <strong>"Composition API"</strong> логика получения данных с сервера,
                    поиска и сортировки товаров перенесена в хуки.</p>
            </div>
            <div class="main__textBox">
                <p class="main__text">На страницу <strong>"Продукт"</strong> можно вывести дополнительную информацию о
                    товаре.
                </p>
                <p class="main__text">Для этого используется id товара.</p>
            </div>
            <div class="main__textBox">
                <p class="main__text">Страница <strong>"О компании"</strong>.</p>
            </div>
        </div>

        <div v-enterleave="val" class="main__subtitle"><i class="fa-solid fa-magnifying-glass"></i><span>Реализован
                поиск товаров по названию, сортировка товаров по названию и цене.</span></div>
        <div class="main__subtitle"><i class="fa-solid fa-arrow-up-wide-short"></i><span>Осуществляется сортировка
                товаров по названию и цене.</span></div>
        <div class="main__subtitle"><i class="fa-solid fa-server"></i><span>Для получения данных с сервера используется
                библиотека axios.</span></div>
    </div>
</template>

<script>
export default {
    data() {
        val: '765'
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.main {
    min-width: 375px;

    &__title {
        font-family: "Dancing Script", cursive;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-size: 48px;
        color: $siteColor;
        margin-bottom: 24px;
    }

    &__subtitle {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
        margin-bottom: 24px;
        font-size: 18px;
        display: flex;
        align-items: center;

        &.element-animation {
            opacity: 0;
            transform: translateX(20px);
            transition: all 1.5s;

            &.element-show {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }

    &__box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 12px;
        margin-bottom: 24px;
        width: 100%;
    }

    &__textBox {
        width: 32%;
        border: 1px solid $siteColor;
        padding: 6px;
    }

    &__text {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;

        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
}

.fa-solid {
    color: $siteColor;
    margin-right: 12px;
    font-size: 32px;
}

.subtitle-animation-enter-active,
.subtitle-animation-leave-active {
    transition: opacity 0.5s ease;
}

.subtitle-animation-enter-from,
.subtitle-animation-leave-to {
    opacity: 0;
}

@media (max-width: 1024px) {
    .main__textBox {
        width: 49%;
    }
}

@media (max-width: 767px) {
    .main__textBox {
        width: 100%;
    }
}
</style>