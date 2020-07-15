(() => {
    if (window.toggleFullscreenChat !== undefined) {
        window.toggleFullscreenChat();
        return;
    }
    const css = '.fullscreen-chat .live-stream-plugin-container {height:100vh !important;position:fixed;z-index:9999;width:100vw;top:0;left:0;margin:0;} .fullscreen-chat {overflow:hidden;} .dark.str-chat .long {background:darkred !important}';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.body.classList.add('fullscreen-chat');

    const charCount = document.createElement('div');
    charCount.id = 'nixta-hack-charcount';
    charCount.className = 'str-chat__tooltip';
    charCount.innerHTML = '0/280';

    document.querySelector('.rta.str-chat__textarea').appendChild(charCount);

    window.toggleFullscreenChat = () => {
        if (document.body.classList.contains('fullscreen-chat')) {
            document.body.classList.remove('fullscreen-chat');
        } else {
            document.body.classList.add('fullscreen-chat');
        }
    }
    document.body.addEventListener('click', () => {
        const checkLength = (e) => {
            document.querySelector('#nixta-hack-charcount').innerHTML = `${e.target.value.length}/280`
            if (e.target.value.length > 280) {
                document.querySelector('.str-chat textarea').classList.add('long');
            } else {
                document.querySelector('.str-chat textarea').classList.remove('long');
            }
        }
        document.querySelector('.str-chat textarea').addEventListener('keyup', checkLength)
        document.querySelector('.str-chat textarea').addEventListener('paste', checkLength)
    });
})()