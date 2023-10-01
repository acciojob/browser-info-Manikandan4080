const agent = navigator.userAgent;
const broName = navigator.appName;
const ver = navigator.appVersion;
const ans = `You are using ${broName} version ${ver}`

const container = document.getElementById("browser-info");
container.innerText = ans;