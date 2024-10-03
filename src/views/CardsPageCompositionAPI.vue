<template>
    <div>
        <h1 class="titleH1">Каталог товаров (Composition API)</h1>
        <my-input v-focus v-model="searchQuery" placeholder="Поиск..." class="search" />
        <div class="app__buttons button_margin">
            <my-button @click="showDialog">Добавить товар</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <CardFormComponent @create="createCard"></CardFormComponent>
        </my-dialog>
        <card-list :cards="sortedAndSearchedCards" @remove="removeCard" v-if="!isCardsLoading" />
        <div v-else>Идет загрузка...</div>

    </div>
</template>

<script>
import CardFormComponent from '@/components/CardFormComponent';
import CardList from '@/components/CardList';
import { useCards } from '@/hooks/useCards';
import useSortedAndSearchedCards from '@/hooks/useSortedAndSearchedCards';
import useSortedCards from '@/hooks/useSortedCards';

export default {
    components: {
        CardFormComponent, CardList
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'price', name: 'По цене' },
            ]
        }
    },
    methods: {
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
    setup(props) {
        const { cards, totalPages, isCardsLoading } = useCards(9);
        const { selectedSort, sortedCards } = useSortedCards(cards);
        const { searchQuery, sortedAndSearchedCards } = useSortedAndSearchedCards(sortedCards);

        return {
            cards,
            totalPages,
            isCardsLoading,
            selectedSort,
            sortedCards,
            searchQuery,
            sortedAndSearchedCards
        }
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
