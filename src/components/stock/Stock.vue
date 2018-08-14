<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price : {{stock.price}})</small>
          <small v-if="insufficientFounds" class="pull-right" style="color: indianred; margin-top: 5px;"> <b> Insufficient Founds</b></small>
        </h3>

      </div>
      <div class="panel-body">
        <div class="clearfix">
          <div class="pull-left">
            <input type="number" class="form-control"
                   :class="{danger: insufficientFounds}"
                   placeholder="Quantity" v-model.number="quantity">
          </div>
          <div class="pull-right">
            <button class="btn btn-success"
                    @click="buyStock"
                    :disabled="insufficientFounds || quantity <= 0 || !Number.isInteger(quantity)">
              Buy
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['stock'],
      data() {
        return {
          quantity: 0
        }
      },
      computed: {
        insufficientFounds() {
          return this.quantity * this.stock.price > this.founds
        },
        founds() {
          return this.$store.getters.founds
        }
      },
      methods: {
        buyStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          }
          this.$store.dispatch('buyStock', order)
          this.quantity = 0
        }
      }
    }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>t

