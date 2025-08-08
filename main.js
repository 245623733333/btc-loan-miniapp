import SWHandler from 'https://cdn.jsdelivr.net/npm/smart-widget-handler/+esm';

window.addEventListener('DOMContentLoaded', async () => {
  console.log('[CLIENT] Calling ready()...');
  await SWHandler.client.ready();

  SWHandler.client.listen((data) => {
    console.log('[CLIENT] Received data from host:', data);
  });
});
