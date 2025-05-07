<script>
    import Sidebar from "$lib/Sidebar.svelte";
    //import { base } from '$app/paths';
  
    const pages = [
      { name: "Home", path: "/" },
    ];
</script>
  
<main>
    <Sidebar {pages} />
    <div class="content">
        <slot />
    </div>
</main>
  
<style>
    main {
        display: flex;
        justify-content: center;
    }
    .content {
        padding: 20px;
    }

    @media (max-width: 800px) {
        main {
        flex-direction: column;  /* Stack the sidebar and content vertically */
        align-items: center;     /* Center the items vertically */
        }

        .content {
        width: 100%;             /* Allow content to take up full width */
        min-width: 100%;         /* Ensure content area doesn't get too small */
        max-width: 100%;
        }
    }
</style>