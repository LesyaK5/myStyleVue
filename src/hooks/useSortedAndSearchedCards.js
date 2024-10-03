import { computed, ref } from "vue";

export default function useSortedAndSearchedCards(sortedCards) {
    const searchQuery = ref('')
    const sortedAndSearchedCards = computed(() => {
        return sortedCards.value.filter(card => card.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    })
    return {
        searchQuery, sortedAndSearchedCards
    }
}