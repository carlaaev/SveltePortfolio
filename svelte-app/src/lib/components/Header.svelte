<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>

<header>
    <!-- Logo -->
     <div class="logo">
        <a href="/">
            <img src="icons/logo.png" alt="Website Logo">
        </a>
        <span>Portfolio</span>
     </div>

     <!-- Navigation -->
      <Navigation />
</header>

<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-color);
        padding: 1rem;
        border-bottom: 1px solid rgba(93, 73, 84, 0.2);
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 130px;
        margin: 10px;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
        }

        .logo {
            justify-content: center;
        }
    }
</style>