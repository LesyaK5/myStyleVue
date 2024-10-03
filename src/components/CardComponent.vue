<template>
    <div class="card">
        <div class="card__info">
            <div class="card__imgBox">
                <img :src="card.image" alt="product image" class="card__img" onerror="this.src='../assets/logo.png'">
            </div>
            <p>арт. {{ card.id }}</p>
            <h2 class="card__title">{{ card.title }}</h2>
            <p class="card__desc">{{ card.description }}</p>
            <p class="card__price"><span class="card__price_color">{{ card.price }} </span> руб.</p>
        </div>
        <div class="card__buttons">
            <my-button class="card__button" @click="$router.push(`/products/${card.id}`)">
                Подробнее
            </my-button>
            <my-button class="card__button" @click="$emit('remove', card)">
                Удалить
            </my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.card {
    width: 31%;
    border: 2px solid $siteColor;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__imgBox {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    &__img {
        max-width: 300px;
    }

    &__title {
        color: $siteColor;
    }

    &__desc {
        text-align: justify;
    }

    &__price {
        margin-top: 1.5rem;

        &_color {
            color: $siteColor;
        }
    }

    &__buttons {
        align-self: center;
        margin-top: 12px;
    }

    &__button:not(last-child) {
        margin-right: 8px;
    }
}
</style>