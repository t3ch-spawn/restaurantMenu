<script>
  import Card from "./components/Card.svelte";
  import Header from "./components/Header.svelte";
  import OrderForm from "./components/OrderForm.svelte";
  import MenuItem from "./components/MenuItem.svelte";
  import OrderList from "./components/OrderList.svelte";
  import pizza from "../public/images/pizza.png";
  import beer from "../public/images/beer.png";
  import burger from "../public/images/burger.png";
  import sprite from "../public/images/sprite.png";
  import OrderStore from "./Stores/orders";
  import Message from "./components/Message.svelte";

  let foodDetails = [
    {
      foodPic: pizza,
      foodItem: "Pizza",
      foodIng: ["pepperoni", "mushrom", "mozarella"],
      foodPrice: 14,
    },
    {
      foodPic: burger,
      foodItem: "Burger",
      foodIng: ["beef", "cheese", "lettuce"],
      foodPrice: 12,
    },
    {
      foodPic: beer,
      foodItem: "Beer",
      foodIng: ["grain", "hops", "yeast", "water"],
      foodPrice: 12,
    },

    {
      foodPic: sprite,
      foodItem: "Sprite",
      foodIng: ["sugar", "lemon", "steroids", "water"],
      foodPrice: 10,
    },
  ];

  let isFormVisible = false;
  $: storeVisible = $OrderStore.length >= 1 ? true : false;
  let messageVisible = false;
    let userName
  function handlePay(e){
    userName = e.detail
    messageVisible = true
  }

</script>

<main
  class="flex w-[100%] justify-center items-center min-h-[100vh] font-body py-20 px-[6px]"
>
  <Card myStyle="">
    <Header />
    <div class="flex flex-col gap-7 w-[100%] p-8">
      {#each foodDetails as food}
        <MenuItem
          {food}
          on:add={() => {
            isFormVisible = false;
          }}
        />
      {/each}

      {#if storeVisible}
        <OrderList
          on:click={() => {
            isFormVisible = true;
          }}
        />
      {/if}

      {#if isFormVisible && storeVisible}
        <div class="overlay" />
        <OrderForm on:pay={handlePay} />
      {/if}
    </div>

  {#if messageVisible}
     <Message {userName} on:click={()=>{
      messageVisible = false;
     }} />
  {/if}
  </Card>
</main>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(131, 129, 129, 0.5);
  }
</style>
