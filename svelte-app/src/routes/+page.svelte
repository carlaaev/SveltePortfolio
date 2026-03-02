<script>
    import { onMount } from 'svelte';
    import LoginWindow from '$lib/components/LoginWindow.svelte';
    import DesktopIcon from '$lib/components/DesktopIcon.svelte';
    import Taskbar from '$lib/components/Taskbar.svelte';
    import ContentWindow from '$lib/components/ContentWindow.svelte';


    onMount(async () => {
        console.log("Home Page Loaded");
    })

    let loggedIn = false;
    let showLogin = true;
    let openWindows = {};

    const desktopIcons = [
        { id: 'projects', label: 'Projects'},
        { id: 'about', label: 'About Me' },
        { id: 'contact', label: 'Contact'},
    ];

    const taskbarItems = [
        { id: ''}
    ]

   function handleTaskbar({ detail: id }) {
        if (id === 'login') {
            showLogin = true;
        } else if (id !== 'home') {
            openWindows = {...openWindows, [id]: true};
        }
   }

   function openWindow(id) {
    openWindows = {...openWindows, [id]: false };
   }

   $: activeIds = Object.entries(openWindows)
    .filter(([, v]) => v)
    .map(([k]) => k);

   $: taskbarWithActive = taskbarItems.map(t => ({
    ...t,
    active: activeIds.includes(t.id) || (t.id === 'login' && showLogin),
   }));
</script>


<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
</svelte:head>


<div class="desktop">
    <!-- Wallpaper -->
    <div class="page-bg"></div>

    <!-- Big Title -->
     <div class="title-area" aria-hidden="true">
        <span class="title-script">My</span>
        <span class="title-main">Portfolio.</span>
     </div>

     <!-- Desktop icons (right column) -->
      {#if loggedIn}
        <div class="icons-col" class:visible={loggedIn}>
            {#each desktopIcons as icons}
                <DesktopIcon label={icons.label} on:open={() => openWindow(icons.id)} />
            {/each}
        </div>
    {/if}

    <!-- Widows -->
    {#if showLogin}
        <LoginWindow on:close={() => { showLogin = false; loggedIn = true; }} />
    {/if}

    {#each desktopIcons as icon}
        {#if openWindows[icon.id]}
            <ContentWindows id={icon.id} on:close={() => closeWindow(icon.id)} />
        {/if}
    {/each}

    <!-- Taskbar -->
    {#if loggedIn}
        <Taskbar items={taskbarWithActive} on:action={handleTaskbar} />
    {/if}

</div>


<!-- <div class="page-border"></div>-->

    
<!-- Floating Flowers -->
<div class="floating-flowers">
    <div class="flower flower-1"></div>
    <div class="flower flower-2"></div>
    <div class="flower flower-3"></div>
    <div class="flower flower-4"></div>
    <div class="flower flower-5"></div>
</div>

<style>
    /* BACKGROUND */
    .page-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background-image: url("lock-screen/background.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        pointer-events: none;
    }


    /* FLOATING FLOWERS ANIMATION */
    .floating-flowers {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .flower {
        position: absolute;
        width: 30px;
        height: 30px;
        background-image: url("background-items/sparkle.png");
        background-size: contain;
        animation: float 20s linear infinite;
        opacity: 0.8;
    }

    .flower-1 {
        top: 10%;
        left: 5%;
        animation-delay: 0s;
    }

    .flower-2 {
        top:70%;
        left: 80%;
        animation-delay: -4s;
    }

    .flower-3 {
        top: 40%;
        left: 90%;
        animation-delay: -8s;
    }

    .flower-4 {
        top: 80%;
        left: 20%;
        animation-delay: -12s;
    }

    .flower-5 {
        top: 20%;
        left: 60%;
        animation-delay: -16s;
    }

    @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(20px, 15px) rotate(5deg); }
        50% { transform: translate(0, 30px) rotate(0deg); }
        75% { transform: translate(-20px, 15px) rotate(-5deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }

    /* Title */

    .title-area {
        position: absolute;
        top: 14px;
        left: 58px;
        pointer-events: none;
        user-select: none;
        line-height: 1;
    }

    .title-script {
        display: block;
        font-family: 'Dancing Script', cursive;
        font-size: clamp(80px, 1vw, 49px);
        color: var(--white);
        opacity: 0.9;
        position: relative;
        top: 35px;
        left: 2px;
    }

    .title-main {
        display: box;
        font-family: 'Playfair Display', serif;
        font-size: clamp(50px, 12vw, 140px);
        font-weight: 900;
        color: var(--primary-color);
        letter-spacing: -0.02em;
    }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    
</style>
