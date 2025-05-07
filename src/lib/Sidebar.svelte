<script>
  export let pages = [];
  //import { base } from '$app/paths';
</script>

<nav class="sidebar">
  <br>
  <img src="/logo.png" title="Empyrean Defense" alt="Empyrean Defense" width="100%">
  <br>
  <div class="logo_text"><b>WIKI</b></div>
  <hr>
  {#each pages as page}
    <a href={page.path}>{page.name}</a>
  {/each}
</nav>

<style>
  .sidebar {
    width: 200px;
    min-width: 200px;
    background: #0d1117;
    padding: 20px;
    border-radius: 10px;
  }
  a {
    display: block;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
    color: #f0f6fc;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
  }
  a:hover {
    background: #f9b043;
    color: #0d1117;
  }
  .logo_text {
    color: #ffffff;
    text-align: center;
    font-size: larger;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
  }

  @media (max-width: 800px) {
    .sidebar {
      width: 100%;
      min-width: 100%;
    }
  }
</style>