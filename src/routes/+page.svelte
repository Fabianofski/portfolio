<script>
  let counter = 0;

  function incrementCount() {
    counter++;
  }
</script>

<div class="container">
  <button on:click={incrementCount}>{counter}</button>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
  }

  button {
    font-size: 5rem;

    height: 10rem;
    width: 10rem;
  }
</style>