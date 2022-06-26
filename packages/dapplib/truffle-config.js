require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth night exchange grace nation force gas'; 
let testAccounts = [
"0x10d551ef8e3b83c981db2e4af4bdb7ea0b883eca1eb725475bae8ab023269641",
"0x88ddb2624f6e9af01b3857262d4c00104a7bbbc44351ec266704151915d15bda",
"0x6f2739be44c82a7ce00fd39cd8d63e5d79c5a2c1b2cb02a3fc3f706625630f6f",
"0x425daf95cade15b266563a5de71b5ecd8ead6c27e358d4346a72ca18063bac8c",
"0x2af976d0b39edabaff70b484c0c75ce5d1becc473819969a575331ebe1abed86",
"0xf125298c4f0d02863696ef8f321b84fd9767ceb9b1cb921619e62bcc7ac7f52b",
"0x95119f73aacb06d661dbeadcd12643a49a117fc9053c22a4b6a0a7bd5edbf18e",
"0xeb99fd3ebbe6da099d1cbb763e83af844e5598c84c9226187c3f2647c6968c09",
"0x9411aa62ae5433a78c9020d4b87afb6532c1f1089e62c801182cb516c59bc6d1",
"0xdd51987857bcfe4284d8e7c131fad6e1308a416f98597fb4d0a46d6c597379ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

