<template>
    <div v-if="cards.length > 0">
        <h3 class="titleH3">Список товаров</h3>
        <div class="cards">
            <transition-group name="card-list">
                <card-component сlass="card" v-for="card in cards" :card='card' :key="card.id"
                    @remove="$emit('remove', card)" />
            </transition-group>
        </div>
    </div>
    <div v-else>
        <h2 class="titleError">Список товаров пуст</h2>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent';
export default {
    components: {
        CardComponent,
    },
    props: {
        cards: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
    margin-bottom: 24px;
}

.titleH3 {
    color: $siteColor;
    margin-bottom: 20px;
}

.titleError {
    color: red;
}

.card-list-item {
    display: inline-block;
    margin-right: 10px;
}

.card-list-enter-active,
.card-list-leave-active {
    transition: all .5s ease;
}

.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.card-list-move {
    transition: transform 0.8s ease;
}

@media (max-width: 1024px) {
    .card {
        width: 49%;
    }
}

@media (max-width: 767px) {
    .card {
        width: 100%;
    }
}
</style>