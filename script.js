//your JS code here. If required.
const agent = navigator.userAgent;
const broName = navigator.appName;
const ver = navigator.appVersion;
const ans = `You are using ${broName} version ${ver}`

const container = document.getElementsByClassName("browser-info")[0];
container.innerText = ans;