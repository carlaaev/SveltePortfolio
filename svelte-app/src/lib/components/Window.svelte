<script>
    import { createEventDispatcher } from "svelte";

    export let title = '';
    export let initialX = null;
    export let initialY = null;

    const dispatch = createEventDispatcher();

    let winEl;
    let dragging = false;
    let ox = 0, oy = 0;
    let x = initialX;
    let y = initialY;

    function onMousedown(e) {
        dragging = true;
        if (x === null) {
            // First drag from centered position
            const r = winEl.getBoundingClientReact();
            x = r.left;
            y = r.top;
        }
        ox = e.clientX - x;
        oy = e.clientY - y;
        e.preventDefault();
    }

    function onMousemove(e) {
        if (!dragging) return;
        x = e.clientX - ox;
        y = e.clientY - oy;
    }

    function onMouseup() {
        dragging = false;
    }

    $: style = x !== null
        ? 'left: ${x}px; top: ${y}px; tranform: none;'
        : '';
</script>

<svelte:window on:mousemove={onMousemove} on:mouseup={onMouseup} />

<div class="window" bind:this={winEl} style={style}>
    <div class="titlebar" on:mousedown={onMousedown} role="toolbar">
        <button class="dot dot-red" on:click={() => dispatch('close')} aria-label="Close"></button>
        <button class="dot dot-yellow" aria-label="Minimise"></button>
        <span class="title">{title}</span>
    </div>

    <div class="body">
        <slot />
    </div>
</div>

<style>
    .window {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 340px;
        background: rgba(20, 30, 26, 0.82);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(212, 160, 168, 0.25);
        border-radius: 16px;
        box-shadow: 0 32px 80px rgba(0,0,0,0.5);
        overflow: hidden;
        z-index: 50;
        animation: windowIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        user-select: none;
    }

    @keyframes windowIn {
        from { opacity: 0; scale: 0.93; }
        to { opacity: 1; scale: 1; }
    }

    .titlebar {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        background: rgba(0,0,0,0.2);
        border-bottom: 1px solid rgba(212, 160, 168, 0.15);
        cursor: grab;
    }

    .titlebar:active { cursor: grabbing; }

    .dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: opacity 0.15s;
        flex-shrink: 0;
    }

    .dot:hover { opacity: 0.7; }
    .dot-red { background: #95342f; }
    .dot-yellow { background: #ebc46f; }
    .dot-green { background: #32c247; }

    .title {
        font-size: 11px;
    }
</style>