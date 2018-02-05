const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  process.env.MNEMONIC_WORDS,  // eg. pants banana blah blah blah ...
  process.env.CRYPTO_NETWORK_ENDPOINT,  // eg. https://rinkeby.infura.io/xxx
);

const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const trialAccountId = accounts[0];
  console.log('Attempting to deploy from account', trialAccountId);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: trialAccountId });

  console.log('Contract deployed to', result.options.address);
};
deploy();
