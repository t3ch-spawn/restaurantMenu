<script>
  export let myStyle
</script>

<div class={`${myStyle} bg-white  w-[90%] max-w-[600px] flex flex-col justify-start items-center shadow-md relative`}>
  <slot />
</div>
