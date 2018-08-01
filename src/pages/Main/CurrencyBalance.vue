<template>
<div>
    <CurrencyBalanceItem></CurrencyBalanceItem>
</div>
</template>

<script>
export default {
    components: {
        CurrencyBalanceItem: () => import('./modules/CurrencyBalanceItem.vue')
    }
}
</script>
