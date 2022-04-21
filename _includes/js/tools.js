const tabsets = document.querySelectorAll('[data-do-tabs]');

if (tabsets) {
  [].forEach.call(tabsets, tabset => {

    const tabs = tabset.querySelectorAll('[data-tab]');
    const tabpanels = tabset.querySelectorAll('[data-tabpanel]');

    if (tabs) {
      [].forEach.call(tabs, tab => {
        tab.addEventListener('click', e => {
          const relatedPanel = document.getElementById(tab.getAttribute('href').substr(1));

          [].forEach.call(tabpanels, tabpanel => {
            tabpanel.setAttribute('hidden', 'true');
          });

          relatedPanel.removeAttribute('hidden');
          relatedPanel.focus();

          [].forEach.call(tabs, tab => {
            tab.removeAttribute('data-tab-current', '');
          });

          tab.setAttribute('data-tab-current', '');

          e.preventDefault();
        });
      });
    }

    tabs[0].setAttribute('data-tab-current', '');

  });
}
