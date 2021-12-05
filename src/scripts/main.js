// Imports
  // TrezorConnect is injected as inline script in html, therefore get reference from the window object
let { TrezorConnect } = window
let log = document.getElementById('log')
let btn1 = document.getElementById('get-pubkey')
let btn2 = document.getElementById('get-address')
let btn3 = document.getElementById('sign-tx')
let inp1 = document.getElementById('inp-amount')
let inp2 = document.getElementById('inp-target')
let currency = document.getElementById('coin')

// Event Listeners -- Graphics
currency.addEventListener('change',() => {
  sheen.classList.toggle('active')
  setTimeout(() => sheen.classList.toggle('active'),1000)
})

// Helper Functions
function printLog(data) {
  log.value = JSON.stringify(data)
}

// Initialize TrezorConnect
TrezorConnect.on('DEVICE_EVENT',event => printLog(event))
TrezorConnect.init({
  webusb: false,
  debug: false,   // See whats going on inside iframe
  lazyLoad: true, // Set to "false" (default) if you want to start communication with bridge on application start (and detect connected device right away)
  manifest: {
    email: 'ArcaneCorporations@protonmail.com',
    appUrl: 'neutralino-trezor-interface',
  }
}).then(()      => printLog('Trezor is Ready'))
  .catch(error  => printLog(`Trezor Connection Error: ${error}`))

// Trezor Methods Implementation
  // Get Public Key
btn1.onclick = () => {
  let params = paths.find(x => x.coin === currency.value)
  TrezorConnect.getPublicKey(params).then(res => printLog(res.payload.publicKey))
}

  // Get Address
btn2.onclick = () => {
  let params = paths.find(x => x.coin === currency.value); params.path += "/0/1"
  switch (currency.value) {
    case 'btc':
    case 'bch':
      
      break
    case 'eth':
      
      break
    case 'ltc':
      
      break
    case 'xrp':
      
      break
    default: printLog('ERROR: Currency not Supported')
  }
}

  // Sign Transaction
btn3.onclick = (txvalue,destAddress) => {
  txvalue = Number(inp1.value)
  destAddress = inp2.value
  switch (currency.value) {
    case 'btc':
    case 'bch':
    case 'dgc':
    case 'ltc':
    default: printLog('ERROR: Currency not Supported')
  }
}