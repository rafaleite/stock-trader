<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price : {{stock.price}} | Quantity: {{stock.quantity}} )</small>
          <small v-if="insufficientQuantity" class="pull-right" style="color: indianred; margin-top: 5px;"> <b> Not enough</b></small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="clearfix">
          <div class="pull-left">
            <input type="number" class="form-control" :class="{danger: insufficientQuantity}" placeholder="Quantity" v-model.number="quantity">
          </div>
          <div class="pull-right">
            <button class="btn btn-success"
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions({
        sellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.sellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>
<style scoped>
  .danger{
    border: 1px solid red;
  }
</style>
