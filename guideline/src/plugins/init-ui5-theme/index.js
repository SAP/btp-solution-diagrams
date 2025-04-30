const callInitTheme = `(function() {
    const configScript = document.createElement('script');
    configScript.type = 'application/json';
    configScript.setAttribute('data-ui5-config', '');
    
    // assumes docusaurus's default mode is set to 'light'
    let theme = 'sap_horizon';
    try {
        if (window['localStorage'].getItem('theme') === 'dark') theme = 'sap_horizon_dark';
    } catch {}
    
    configScript.innerHTML = JSON.stringify({ theme: theme });
    document.head.appendChild(configScript);
})();`;

// init ui5 theme inline in script tag to prevent dark mode FOUC (Flash of Unstyled Content)
export default () => {
    return {
        name: 'init-ui5-theme',
        injectHtmlTags() {
            return {
                headTags: [
                    {
                        tagName: 'script',
                        innerHTML: callInitTheme,
                    },
                ],
            };
        },
    };
};
