<script>
    import { createEventDispatcher } from 'svelte';
    import Window from './Window.svelte';

    const dispatch = createEventDispatcher();

    function tryLogin() {
        dispatch('close');
    }
</script>

<div class="page-border"></div>

<!-- <Window title="Login" on:close={() =>
dispatch('close')}> -->
    <div class="body">
        <!-- Profile picture -->
         <div class="avatar"></div>

         <p class="name">Placeholder</p>

        <div class="input-row">
            <button class="login-btn" on:click= {tryLogin}>log in</button>
        </div>
    </div>
<!-- </Window> -->

<style>

        .page-border {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            background-image: url("background-items/border.PNG");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            pointer-events: none;
        }

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-top: 200px;
    }

    .avatar {
        background-image: url("lock-screen/pfp.png");
        background-size: contain;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        border: 1px solid rgba(212, 160, 168, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 3px;
    }

    .name {
        font-family: 'DM Sans', sans-serif;
        font-size: 19px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--white);
        margin: 0;
    }

    .input-row {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .login-btn {
        padding: 9px 18px;
        background: var(--primary-color);
        color: var(--white);
        font-size: 16px;
        font-weight: 600;
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        letter-spacing: 0.06em;
        border-radius: 30px;
        margin: 2px;
        transition: background 0.2s, transform 0.1s;
        flex-shrink: 0;
    }

    .login-btn:hover { background: #c2899a; }
    .login-btn:active { transform: scale(0.97); }


    /* Mobile */
    @media (max-width: 768px) {
        .avatar {
            width: 180px;
            height: 180px;
        }

        .body {
            margin-top: 220px;
        }

        .name {
            font-size: 16px;
        }

        .login-btn {
            font-size: 13px;
        }       
    }
</style>
