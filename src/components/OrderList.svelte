<script>
  import OrderStore from "../Stores/orders";

  $: TotalOrder = $OrderStore.reduce((accum, curr) => {
    return curr.foodPrice + accum;
  }, 0);

  function handleDelete(id) {
    OrderStore.update((currOrders) => {
      let newOrders = currOrders.filter((order) => id !== order.id);
      return newOrders;
    });
  }
</script>

<div class="flex flex-col justify-center items-center gap-3">
  <h3 class="text-2xl">Your Order</h3>

  <!-- food items on your order -->
  {#each $OrderStore as order}
    <div class="flex justify-between w-[100%]">
      <!-- left side of order -->
      <div class="flex justify-center items-center gap-3">
        <span class="text-xl">{order.foodItem}</span>
        <span
          on:click={() => {
            handleDelete(order.id);
          }}
          class="text-font2nd cursor-pointer text-sm font-btn">remove</span
        >
      </div>

      <!-- price of order -->
      <div>${order.foodPrice}</div>
    </div>
  {/each}
  <hr class="border-none w-[100%] bg-black h-[1px]" />

  <!-- summary of order -->
  <div class="flex justify-between w-[100%]">
    <span>Total Order</span>
    <span>${TotalOrder}</span>
  </div>

  <!-- btn to complete order -->
  <span
    on:click
    class="bg-btn py-3 px-8 rounded text-white max-w-[380px] w-[100%] text-center cursor-pointer font-btn"
  >
    Complete Order</span
  >
</div>
