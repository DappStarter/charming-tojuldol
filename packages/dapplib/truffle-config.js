require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind mistake heavy problem boil taxi'; 
let testAccounts = [
"0xf58dc54289749297002878d247f3be460b6984cb8b563f3fff69b5cf9281c37a",
"0xdeb345367883c22983679a7d44b581246b396f2c5d0237cd0496f68f18c51e63",
"0xeec40019ccc9f501018d9003dc04a943078d46ac427a3cd8a6e5df9de7e14005",
"0x27c2fd7b221ffce202714efb3acce0ada059aa91ccd63308a4fa5c8bce9659ee",
"0xb61ec8e7dc0597ea17dc50f438cb89b6fb1fb791a5fde4d2847d8b742b240e50",
"0xda9ed78b2bd7793aa9b139998dd18a562e23e0a1e6b3c8ee154edfd132b910dd",
"0x13f69401ff97dfdf1335d529a04b64875235f9a201806b20755988c7b95f95d9",
"0x350c485f02e17f2688e925d9daa6f246a6297cd28027879f5dada30e652e0ea5",
"0xccd4ba0512b86111b819e37e07ecba36962209b3f4909c8d3ca0633afd06aec3",
"0x00cbe8a49ca87ca1c05a53eaa635f400c24b3cfb7df1013e3a50712ee88d1075"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
