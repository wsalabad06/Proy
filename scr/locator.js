document.addEventListener('DOMContentLoaded', async () => {
  await customElements.whenDefined('gmpx-store-locator');
  const locator = document.querySelector('gmpx-store-locator');
  locator.configureFromQuickBuilder(CONFIGURATION);
});