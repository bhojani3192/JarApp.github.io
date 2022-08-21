<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>
<span class="text-transparent" on:click={increment}>{count} </span>

