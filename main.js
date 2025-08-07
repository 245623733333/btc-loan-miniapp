import SWHandler from 'https://cdn.jsdelivr.net/npm/smart-widget-handler/+esm';

window.addEventListener('DOMContentLoaded', () => {
  console.log('[CLIENT] Calling ready()...');
  SWHandler.client.ready();

  SWHandler.client.listen((data) => {
    console.log('[CLIENT] Received data from host:', data);
  });
});
