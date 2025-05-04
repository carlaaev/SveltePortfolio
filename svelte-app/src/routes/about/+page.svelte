<script>
    import { onMount } from 'svelte';


    onMount(async () => {
        console.log("About Page Loaded");
    })
</script>

<h1>About Us</h1>
<p>We are passionate about building modern web applications using SvelteKit</p>

<style>
    h1 {
        color: var(--primary-color);
    }

    p {
        font-size: 18px;
    }
</style>