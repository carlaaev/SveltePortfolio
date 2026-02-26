<script>
    import { createEventDispatcher } from 'svelte';
    import Window from './Window.svelte';

    const dispatch = createEventDispatcher();

    function tryLogin() {
        dispatch('close');
    }
</script>

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
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .avatar {
        background-image: url("lock-screen/pfp.png");
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 2px solid rgba(212, 160, 168, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        padding: 8px;
    }

    .name {
        font-family: 'DM Sans', sans-serif;
        font-size: 11px;
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
        font-size: 12px;
        font-weight: 600;
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        letter-spacing: 0.06em;
        border-radius: 30px;
        margin: 2px;
        transition: background 0.2s, transform 0.1s;
        flex-shrink: 0;
    }

    .login-btn:hover { background: #e8c4ca; }
    .login-btn:active { transform: scale(0.97); }
</style>
