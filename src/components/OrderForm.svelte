<script>
  import { createEventDispatcher } from "svelte";
  import OrderStore from "../Stores/orders";
  const dispatch = createEventDispatcher();
  import Card from "./Card.svelte";
  import { slide } from "svelte/transition";

  let userName

  function handleForm() {

    OrderStore.update((cuurOrder) => {
      return [];
    });

    dispatch('pay', userName)
  }
</script>

<div transition:slide
  class="container fixed max-w-[400px] flex justify-center items-center font-btn"
>
  <Card myStyle="rounded">
    <form
      on:submit|preventDefault={handleForm}
      class="flex flex-col items-center justify-center p-8 w-[100%] gap-6"
    >
      <h1>Enter your Card details</h1>

      <div class="flex flex-col gap-3 w-[100%]">
        <input type="text" placeholder="Enter your name" required bind:value={userName}/>
        <input type="number" placeholder="Enter your card number" required />
        <input type="number" placeholder="Enter CVV" required />
      </div>

      <button on:click
        class="bg-btn py-3 px-8 rounded text-white max-w-[380px] w-[100%] text-center cursor-pointer font-btn"
        >Pay</button
      >
    </form>
  </Card>
</div>

<style>
  .container {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    border: 1.297px solid #757575;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
  }

  input:focus {
    outline: none;
  }
  button:focus {
    outline: none;
    box-shadow: 0px 3px 10px 2px grey;
  }
</style>
