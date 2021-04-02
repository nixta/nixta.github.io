(() => {
    if (window.toggleFullscreenChat !== undefined) {
        window.toggleFullscreenChat();
        return;
    }
    const css = '.fullscreen-chat .chat-container {height: 80vh !important; max-width: 100vh !important; position: fixed; z-index: 9999; width: 100vw; top: 250px; left: 0; margin: 0;} .fullscreen-chat {overflow:hidden;} .fullscreen-chat .team-chat-container {height: 80vh !important}';
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
