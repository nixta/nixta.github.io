(() => {
    if (window.toggleFullscreenChat !== undefined) {
        window.toggleFullscreenChat();
        return;
    }
    const css = '.fullscreen-chat .chat-container {height: 100vh !important; max-width: 100vw !important; position: fixed; z-index: 9999; width: 100vw; top: 0; left: 0; margin: 0; padding: 0 !important} .fullscreen-chat {overflow:hidden;} .fullscreen-chat .team-chat-container {height: 100vh !important}';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.body.classList.add('fullscreen-chat');

    window.toggleFullscreenChat = () => {
        if (document.body.classList.contains('fullscreen-chat')) {
            document.body.classList.remove('fullscreen-chat');
        } else {
            document.body.classList.add('fullscreen-chat');
        }
    }
})()
