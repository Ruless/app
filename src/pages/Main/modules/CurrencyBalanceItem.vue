<template>
<div class='currency'>
    <div class="currency_left">
        <img class='currency_left__img' src="https://back.arbex.com/uploads/c_usdIcon.png" alt="">
        <div class="currency_left__name">
            Bitcoin
        </div>
    </div>
    <div class="currency_right">
        <div class="currency_right__total">
            0.3458
        </div>
        <div class="currency_right__compare_currency">
            $2849
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.currency {
    font-family: Roboto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: linear-gradient(180deg, rgba(219, 148, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-blend-mode: soft-light;
    border: 2px solid #F8B832;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px;
    margin: 5px 0;
    &:first-child {
        margin-top: 0;
    }
    &_left {
        display: flex;
        align-items: center;
        &__name {
            margin-left: 5px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            line-height: normal;
            font-size: 12px;
            color: #FFFFFF;
        }
        &__img {
            width: 30px;
        }
    }
    &_right {
        display: flex;
        flex-direction: column;
        &__total  {
            font-size: 14px;
            text-align: right;
        }
        &__compare_currency {
            font-size: 12px;
            text-align: right;
            color: #6D6D74;
        }

    }
}
</style>
