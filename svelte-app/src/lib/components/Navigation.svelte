<script>
    let isOpen = false; // Menu state (open/closed)
</script>


<!-- Navigation Container-->
<nav class="nav">
    <!-- Burger Menu Button (Visible on Small Screens) -->
     <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle Navigation"> ☰ </button>

     <!-- Navigation Links -->
    <ul class:open={isOpen}>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
    </ul>
</nav>

<style>
    /* Base Navigation Styling */
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 40px;
        position: relative;
        z-index: 9999;
    }

    nav ul li {
        margin: 0 15px;
    }

    nav ul li a {
        text-decoration: none;
        color: var(--link-hover-color);
        position: relative;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }

    nav ul li a:hover {
        color: var(---primary-color);
    }

    nav ul li a:after {
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: var(--primary-color);
        transition: width 0.3s ease;
    }

    nav ul li a:hover:after {
        width: 100%;
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-color);
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #feeff3;
            text-align: left;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 9999;
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
            background: #feeff3;
        }
    }
</style>