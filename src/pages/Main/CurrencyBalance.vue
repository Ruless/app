<template>
<div>
    <CurrencyBalanceItem
        v-for='item in items'
        :key='item.id'
    />
</div>
</template>

<script>
export default {
    data () {
        return {
            items: [1,2,3]
        }
    },
    components: {
        CurrencyBalanceItem: () => import('./modules/CurrencyBalanceItem.vue')
    }
}
</script>
