<template>
<q-page>
    <CurrencyBalance></CurrencyBalance>
    <Table></Table>
</q-page>
</template>
<script>
// import CurrencyBalance from 'pages/Main/CurrencyBalance';

export default {
    components: {
        CurrencyBalance: () => import ('pages/Main/CurrencyBalance.vue'),
        Table: () => import ('pages/Main/Table.vue'),

    }
}
</script>
