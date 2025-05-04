<script>
    // Import components
    import { Header, Footer } from "$lib";

</script>

<!-- Header -->
<Header />

<!-- Page Content -->
 <main>
    <slot />
 </main>

 <!-- Footer -->
<Footer />

<style>

    main {
        padding: 2rem;
        text-align: center;
    }

</style>