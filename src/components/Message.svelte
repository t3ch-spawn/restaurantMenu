<script>

export let userName
import { slide } from "svelte/transition";
</script>

<div transition:slide class="fixed w-[90%] py-14 max-w-[500px] text-center rounded">
    <span on:click class="absolute right-3 top-2 cursor-pointer font-btn text-3xl">&times;</span>
    <p class="text-[#065F46] text-xl">Thanks, {userName}! Your order is on its way!</p>
</div>

<style>
    div{
        background: #ECFDF5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

