<script>
    // Import components
    import { Header, Footer } from "$lib";
	import LoginWindow from "$lib/components/LoginWindow.svelte";

</script>

<!-- Header 
<Header />-->

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