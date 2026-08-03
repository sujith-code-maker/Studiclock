document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova Ready');
}

document.getElementById('clbtn').addEventListener('click', () => {
    document.getElementById('timerstate').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('timerstate').style.display = 'none';
});

document.getElementById('set').addEventListener('click', () => {
    const hours = document.getElementById('durationSelect').value;
    document.getElementById('timerDisplay').innerText = hours + ' hours';
    document.getElementById('timerstate').style.display = 'none';

    // Request native accessibility check if running on device
    if (window.cordova && cordova.plugins && cordova.plugins.AppLocker) {
        cordova.plugins.AppLocker.startLockService(hours);
    }
});