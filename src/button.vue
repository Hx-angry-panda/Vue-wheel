<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    *{margin: 0; padding: 0; box-sizing: border-box;}

    /*采用变量的写法不会造成字体不一*/
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    /*.g-button{*/
    /*    font-size: 14px; 这样写的弊端：如果 button 前有字，且字体大小不一，则不协调*/
    /*}*/
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    .g-button:hover{
        border-color: var(--border-color-hover);
    }
    .g-button:active{
        background: var(--button-active-bg);
    }
    .g-button:focus{
        outline: none;
    }
    #app{
        margin: 20px;
    }
</style>