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
