<script>
    import { onMount } from 'svelte';


    onMount(async () => {
        console.log("Contact Page Loaded");
    })
</script>

<h1>Contact Us</h1>
<p>Get in touch via email at <a href="mailto:info@example.com">info@example.com</a>.</p>

<style>

    h1 {
        color: var(--primary-color);
    }

    p {
        font-size: 18px;
    }

    a:hover {
        text-decoration: underline;
    }
</style>