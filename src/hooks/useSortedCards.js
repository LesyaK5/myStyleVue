import { computed, ref } from "vue";

export default function useSortedCards(cards) {
    const selectedSort = ref('')
    const sortedCards = computed(() => {
        return [...cards.value].sort((card1, card2) => {
            if (selectedSort.value === "price") {
                return card1[selectedSort.value] - card2[selectedSort.value]
            }
            return card1[selectedSort.value]?.localeCompare(card2[selectedSort.value]) // для сортировки строк
        })
    })
    return {
        selectedSort, sortedCards
    }
}