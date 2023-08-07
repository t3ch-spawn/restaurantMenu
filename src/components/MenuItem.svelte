<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  // export let foodPic;
  // export let foodItem;
  // export let foodPrice;
  // export let foodIng;
  // export let foodId
   const dispatch = createEventDispatcher();
  export let food;
  import cross from "../../public/images/cross.svg";
  import OrderStore from "../Stores/orders";

  function handleAdd(newFood) {
    OrderStore.update((currentOrder) => {
      let copyFood = newFood;
      copyFood = {
        id: Math.random(),
        ...copyFood,
      };
      return [copyFood, ...currentOrder];

    });

    dispatch('add', food)
  }
</script>

<div class="flex flex-col gap-7">
  <div class="flex justify-between items-center gap-[10px]">
    <!-- left section with food icon and details -->
    <div
      class="flex justify-start items-center gap-2 xsm:flex-col xsm:items-start"
    >
      <div>
        <img class="min-w-[50px] max-h-[80px]" src={food.foodPic} alt="" />
      </div>

      <div class="flex flex-col text-2xl gap-1">
        <span>{food.foodItem}</span>

        <span class="text-base flex"
          ><p class="break-words text-font2nd">
            {food.foodIng.join(", ")}
          </p></span
        >

        <span>${food.foodPrice}</span>
      </div>
    </div>

    <!-- right section with add button -->
    <div
      on:click={() => {
        handleAdd(food);
      }}
      class="p-[8px] rounded-[50%] border-[1px] border-lineCol border-solid flex justify-center items-center cursor-pointer"
    >
      <img src={cross} alt="" />
    </div>
  </div>

  <hr class="border-none border-[1px] bg-lineCol h-[1px] w-[100%]" />
</div>

<style>
  /* your styles go here */
</style>
