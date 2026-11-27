const channelData = [
  { name: 'Paid social', spend: 38, installs: 32 },
  { name: 'Search ads', spend: 27, installs: 36 },
  { name: 'Ad networks', spend: 20, installs: 19 },
  { name: 'Creators', spend: 15, installs: 13 },
];

const channelList = document.querySelector('#channelList');
const viewToggle = document.querySelector('#viewToggle');
const periodSelect = document.querySelector('#periodSelect');
let showInstalls = false;

function renderChannels() {
  const max = Math.max(...channelData.map((item) => item[showInstalls ? 'installs' : 'spend']));
  channelList.innerHTML = channelData.map((item) => {
    const primary = item[showInstalls ? 'installs' : 'spend'];
    const secondary = item[showInstalls ? 'spend' : 'installs'];
    return `<div class="channel-row">
      <span class="channel-name">${item.name}</span>
      <div class="bar-pair" aria-label="${item.name}: ${primary}% ${showInstalls ? 'installs' : 'spend'}, ${secondary}% ${showInstalls ? 'spend' : 'installs'}">
        <div class="bar-track"><div class="bar ${showInstalls ? 'installs' : 'spend'}" style="width:${(primary / max) * 100}%"></div></div>
        <div class="bar-track"><div class="bar ${showInstalls ? 'spend' : 'installs'}" style="width:${(secondary / max) * 100}%"></div></div>
      </div>
      <span class="channel-value">${primary}%</span>
      <span class="channel-value">${secondary}%</span>
    </div>`;
  }).join('');
}

viewToggle.addEventListener('click', () => {
  showInstalls = !showInstalls;
  viewToggle.innerHTML = `${showInstalls ? 'Show spend' : 'Show installs'} <span>↗</span>`;
  renderChannels();
});

periodSelect.addEventListener('change', () => {
  const days = Number(periodSelect.value);
  const scale = days / 30;
  document.querySelector('#spendValue').textContent = `$${Math.round(48290 * scale).toLocaleString('en-US')}`;
  document.querySelector('#installValue').textContent = Math.round(18640 * scale).toLocaleString('en-US');
  document.querySelector('#cpiValue').textContent = '$2.59';
  document.querySelector('#retentionValue').textContent = '24.6%';
});

renderChannels();
