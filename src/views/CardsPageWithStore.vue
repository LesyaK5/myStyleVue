<template>
    <div>
        <h1 class="titleH1">Каталог товаров (store)</h1>
        <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..."
            class="search" />
        <div class="app__buttons button_margin">
            <my-button @click="showDialog">Добавить товар</my-button>
            <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <CardFormComponent @create="createCard"></CardFormComponent>
        </my-dialog>
        <card-list :cards="sortedAndSearchedCards" @remove="removeCard" v-if="!isCardsLoading" />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMoreProducts" class="observer"></div>
    </div>
</template>

<script>
import CardFormComponent from '@/components/CardFormComponent';
import CardList from '@/components/CardList';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    components: {
        CardFormComponent, CardList
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'products/setPage',
            setSearchQuery: 'products/setSearchQuery',
            setSelectedSort: 'products/setSelectedSort'
        }),
        ...mapActions({
            fetchProducts: 'products/fetchProducts',
            loadMoreProducts: 'products/loadMoreProducts',
        }),
        createCard(card) {
            this.cards.push(card);
            this.dialogVisible = false;
        },
        removeCard(card) {
            this.cards = this.cards.filter(item => item.id !== card.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchProducts();
    },
    computed: {
        ...mapState({
            cards: state => state.products.cards,
            isCardsLoading: state => state.products.isCardsLoading,
            page: state => state.products.page,
            cardsLimit: state => state.products.cardsLimit,
            totalPages: state => state.products.totalPages,
            searchQuery: state => state.products.searchQuery,
            selectedSort: state => state.products.selectedSort,
            sortOptions: state => state.products.sortOptions
        }),
        ...mapGetters({
            sortedCards: 'products/sortedCards',
            sortedAndSearchedCards: 'products/sortedAndSearchedCards',
        })
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;

    &__buttons {
        display: flex;
        justify-content: space-between;
    }
}

.titleH1,
.search {
    color: $siteColor;
    margin-bottom: 12px;
}

.button_margin {
    margin-bottom: 24px;
}

.page__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 12px;
}

.page {
    border: 1px solid $siteColor;
    padding: 10px;
}

.current-page {
    background-color: $siteColor;
    color: white;
}
</style>
