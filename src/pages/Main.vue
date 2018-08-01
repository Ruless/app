<template>
<q-page>
    <CurrencyBalance></CurrencyBalance>
</q-page>
</template>
<script>
// import CurrencyBalance from 'pages/Main/CurrencyBalance';

export default {
    components: {
        CurrencyBalance: () => import ('pages/Main/CurrencyBalance.vue'),

    }
}
</script>
