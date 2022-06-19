const dn = document.querySelector('.btn-dn')
const dk = document.querySelector('.btn-dk')

dn.onclick = () => {
    dn.src = './img/2_dn_active.png'
    dk.src = './img/1_dk_off.png'
    dk.classList.add('active')
    dn.classList.add('active')

    document.querySelector('.confirm-pass').classList.add('hide')
    document.querySelector('.nhanngay').src = './img/Button dangnhap.png'

}
dk.onclick = () => {
    dn.src = './img/2_dangnhao_off.png'
    dk.src = './img/1_dk_active.png'
    dk.classList.remove('active')
    dn.classList.remove('active')
    document.querySelector('.confirm-pass').classList.remove('hide')
    document.querySelector('.nhanngay').src = './img/Button nahn 100k.png'

}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    console.log(userAgent);
    if (/android/i.test(userAgent)) {
        document.querySelector('.download-mobile img').src = '.img/Button down Google Play_.png'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.querySelector('.download-mobile img').src = './img/Button down ios.png'
    }

    return "unknown";
}
window.onload = () => {
    getMobileOperatingSystem()

}