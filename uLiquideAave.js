// ganache-cli -d -f https://mainnet.infura.io/v3/1fcc1fa9808c450b96086b726df3d316 -u 0x586e32930ac05127de429bd566eaa2758fcbd9bc
// ganache-cli -f https://mainnet.infura.io/v3/1fcc1fa9808c450b96086b726df3d316


const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
//const HDWalletProvider = require('@truffle/hdwallet-provider');

// import erc20 from "@studydefi/money-legos/erc20"; /////

const erc20 = require ('@studydefi/money-legos/erc20');
// const Erc20abi = require ('./node_modules/@studydefi/money-legos/erc20/abi/ERC20.json');

const aave =  require ('@studydefi/money-legos/aave');

//const privateKey = "F2E5F7447739E5363A30C81B0F12B4DE719AB04D15304E51D541312F164A7B8D";
//const provider = new HDWalletProvider(privateKey, 'http://localhost:8545');
//const web3 = new Web3(provider);
console.log("test");

const address = "0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac";  
const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const cetherAddress = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";
const unlockAddress = "0x66c57bf505a85a74609d2c83e94aabb26d691e1f"; 

const adaiAddress = "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d";
//const wethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
const ethAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
const aEthAddress = "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04";
//const paireDaiEthAddress = "0xBbB8eeA618861940FaDEf3071e79458d4c2B42e3";
const lpAddressProviderAddress = "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8";


const lpAddressProviderabi = [
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "EthereumAddressUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "FeeProviderUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolConfiguratorUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolCoreUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolDataProviderUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolLiquidationManagerUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolManagerUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolParametersProviderUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingPoolUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "LendingRateOracleUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "PriceOracleUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "ProxyCreated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "TokenDistributorUpdated",
      "type": "event"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_key",
              "type": "bytes32"
          }
      ],
      "name": "getAddress",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPool",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_pool",
              "type": "address"
          }
      ],
      "name": "setLendingPoolImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolCore",
      "outputs": [
          {
              "internalType": "address payable",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_lendingPoolCore",
              "type": "address"
          }
      ],
      "name": "setLendingPoolCoreImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolConfigurator",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_configurator",
              "type": "address"
          }
      ],
      "name": "setLendingPoolConfiguratorImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolDataProvider",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_provider",
              "type": "address"
          }
      ],
      "name": "setLendingPoolDataProviderImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolParametersProvider",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_parametersProvider",
              "type": "address"
          }
      ],
      "name": "setLendingPoolParametersProviderImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getFeeProvider",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_feeProvider",
              "type": "address"
          }
      ],
      "name": "setFeeProviderImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolLiquidationManager",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_manager",
              "type": "address"
          }
      ],
      "name": "setLendingPoolLiquidationManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingPoolManager",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_lendingPoolManager",
              "type": "address"
          }
      ],
      "name": "setLendingPoolManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getPriceOracle",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_priceOracle",
              "type": "address"
          }
      ],
      "name": "setPriceOracle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getLendingRateOracle",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_lendingRateOracle",
              "type": "address"
          }
      ],
      "name": "setLendingRateOracle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getTokenDistributor",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_tokenDistributor",
              "type": "address"
          }
      ],
      "name": "setTokenDistributor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

const ATokenabi = [
  {
      "inputs": [
          {
              "internalType": "contract LendingPoolAddressesProvider",
              "name": "_addressesProvider",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_underlyingAsset",
              "type": "address"
          },
          {
              "internalType": "uint8",
              "name": "_underlyingAssetDecimals",
              "type": "uint8"
          },
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_toBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromIndex",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_toIndex",
              "type": "uint256"
          }
      ],
      "name": "BalanceTransfer",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromIndex",
              "type": "uint256"
          }
      ],
      "name": "BurnOnLiquidation",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
          }
      ],
      "name": "InterestRedirectionAllowanceChanged",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_redirectedBalance",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromIndex",
              "type": "uint256"
          }
      ],
      "name": "InterestStreamRedirected",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromIndex",
              "type": "uint256"
          }
      ],
      "name": "MintOnDeposit",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromIndex",
              "type": "uint256"
          }
      ],
      "name": "Redeem",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "_targetAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_targetBalanceIncrease",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_targetIndex",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_redirectedBalanceAdded",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_redirectedBalanceRemoved",
              "type": "uint256"
          }
      ],
      "name": "RedirectedBalanceUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "UINT_MAX_VALUE",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
          }
      ],
      "name": "decreaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
          }
      ],
      "name": "increaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "underlyingAssetAddress",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_to",
              "type": "address"
          }
      ],
      "name": "redirectInterestStream",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_to",
              "type": "address"
          }
      ],
      "name": "redirectInterestStreamOf",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_to",
              "type": "address"
          }
      ],
      "name": "allowInterestRedirectionTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "redeem",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_account",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "mintOnDeposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_account",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "burnOnLiquidation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "_from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "transferOnLiquidation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "principalBalanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "isTransferAllowed",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "getUserIndex",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "getInterestRedirectionAddress",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "getRedirectedBalance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }
];

const PriceOracleabi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "AssetPriceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "EthPriceUpdated",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setAssetPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setEthUsdPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			}
		],
		"name": "getAssetPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getEthUsdPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const IPriceOracleabi = [
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			}
		],
		"name": "getAssetPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setAssetPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


const dai = new web3.eth.Contract(erc20.abi, daiAddress);
const lpAddressProvider = new web3.eth.Contract(lpAddressProviderabi, lpAddressProviderAddress);
// const lptest = new web3.eth.Contract(LendingPoolAddessProvider.abi, lpAddressProviderAddress);	

const depositEthBorrowMaxDai = async () => {
    const ganacheAccounts = await web3.eth.getAccounts();
    const myWalletAddress = ganacheAccounts[0];
    let bal = await web3.eth.getBalance(myWalletAddress);
    console.log("bal mywallet address Eth:", bal/1e18);
    console.log('myWalletAddres',myWalletAddress);
    const ethAmountinWei = web3.utils.toWei("1", "ether").toString();
    const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);
    const referralCode = '0';
    await LendingPool.methods.deposit(ethAddress, ethAmountinWei, referralCode)
     .send({from: myWalletAddress, value: ethAmountinWei})
        .catch((e) => {
        throw Error(`Erreur deposit ${e.message}`)
        })
    const useAsCollateral = true;
    await LendingPool.methods.setUserUseReserveAsCollateral(ethAddress, useAsCollateral)
     .send({from: myWalletAddress})
        .catch((e) => {
            throw Error(`Error setting user reserve as collateral in the LendingPool contract: ${e.message}`)
        })
    const interestRateMode = 2 // variable rate
    const userAccdata = await LendingPool.methods.getUserAccountData(myWalletAddress).call()
        .catch((e) => {
        throw Error(`Error avec getuseraccountdata...: ${e.message}`)
        })    
    const availableBorrowsETH = userAccdata[4]; // in ETH
    console.log('eth available',availableBorrowsETH);
    const priceOracleAddress = await lpAddressProvider.methods.getPriceOracle().call();
    const priceOracle = new web3.eth.Contract(IPriceOracleabi, priceOracleAddress);
    let daiPrice = await priceOracle.methods.getAssetPrice(daiAddress).call() 
    console.log('amount dai to borrow',availableBorrowsETH/daiPrice);   
    var daiAmount = availableBorrowsETH/daiPrice*1e18 - 1000;
    daiAmount = 1e18;
    await LendingPool.methods.borrow(daiAddress, daiAmount.toString(), interestRateMode, referralCode)
    .send({from: myWalletAddress})
        .catch((e) => {
        throw Error(`Error with borrow() call from the LendingPool contract: ${e.message}`)
        })    

}

const depositDaiBorrowMaxEth = async () => {
    const daiAmountinWei = web3.utils.toWei("200", "ether").toString();
    const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);
    const referralCode = '0';
    await dai.methods.approve( lpCoreAddress, daiAmountinWei).send({from: address, gas: '2000000'})
      .catch((e) => {
        throw Error(`Error approving DAI allowance: ${e.message}`)
       })
    
    await LendingPool.methods.deposit( daiAddress, daiAmountinWei, referralCode).send({from: address, gas: '2000000'})
      .catch((e) => {
        throw Error(`Error depositing to the LendingPool contract: ${e.message}`)
      })

    const useAsCollateral = true;
    // await LendingPool.methods.setUserUseReserveAsCollateral(daiAddress, useAsCollateral).send({from: address, gas:'2000000'})
    //     .catch((e) => {
    //         throw Error(`Error setting user reserve as collateral in the LendingPool contract: ${e.message}`)
    //     })
    const interestRateMode = 2 // variable rate
    const userAccdata = await LendingPool.methods.getUserAccountData(address).call();
    const availableBorrowsETH = userAccdata[4];
    await LendingPool.methods.borrow(ethAddress, availableBorrowsETH.toString(), interestRateMode, referralCode).send({from: address, gas:'2000000'})
        .catch((e) => {
        throw Error(`Error with borrow() call to the LendingPool contract: ${e.message}`)
        })    

}



const getHealth = async (addr) => {
    //const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);
    const userAccdata = await LendingPool.methods.getUserAccountData(addr).call()
      .catch((e) => {
        throw Error(`Error with getuseracccountdata() call from the LendingPool contract: ${e.message}`)
      })
    const EthuserReservedata = await LendingPool.methods.getUserReserveData(ethAddress, addr).call();
    const DaiuserReservedata = await LendingPool.methods.getUserReserveData(daiAddress, addr).call();
    console.log("healthfactor",userAccdata[7]/1e18); 
    let ratio =  userAccdata[2]/userAccdata[1];
    console.log('borrow value in eth:',userAccdata[2]/1e18);
    console.log('collat value in eth:',userAccdata[1]/1e18);
    console.log('available amount to borrow',userAccdata[4]/1e18);
    console.log("ratio:",ratio);
    console.log('Eth borrowed(current)',EthuserReservedata[1]/1e18);
    console.log('Eth borrowed(princ)',EthuserReservedata[2]/1e18);
    console.log('Dai borrowed(current)',DaiuserReservedata[1]/1e18);
    console.log('Dai borrowed(princ)',DaiuserReservedata[2]/1e18);
    console.log('aDai balance',DaiuserReservedata[0]/1e18);
    console.log('aEth balance',EthuserReservedata[0]/1e18);
   
    let ethbalance = await web3.eth.getBalance(addr);
    console.log('eth balance',ethbalance/1e18);
    
    const Reservedata = await LendingPool.methods.getReserveData(daiAddress).call();
    console.log('dai reserve:',Reservedata[1]/1e18);
}


const getOracle = async () => {
    const priceOracleAddress = await lpAddressProvider.methods.getPriceOracle().call()
      .catch((e) => {
        throw Error(`Error getting priceOracle address: ${e.message}`)
      })
    console.log('oracleprice address', priceOracleAddress);
   // oracleNewAddress = "0xae4344E5Ad22c86328192FF32cdC273cfD40Fd18";
    const priceOracle = new web3.eth.Contract(IPriceOracleabi, priceOracleAddress);
    let price = await priceOracle.methods.getAssetPrice(daiAddress).call()
      .catch((e) => {
        throw Error(`Error getting priceOracle price: ${e.message}`)
      })    
    console.log('dai price in eth:',price, price/1e18 );
   
}

const getBalances = async (addr) => {
    console.log('target:',addr);
    console.log('daiaddress:',daiAddress);
    const Dai = new web3.eth.Contract(ATokenabi, daiAddress);
   // const Weth = new web3.eth.Contract(ATokenabi, wethAddress);
    const aDai = new web3.eth.Contract(ATokenabi, adaiAddress);
    const aEth = new web3.eth.Contract(ATokenabi, aEthAddress);
    bal = await Dai.methods.balanceOf(addr).call();
    console.log("bal Dai:", bal/1e18);
   // bal = await web3.eth.getBalance(addr);
    console.log("bal Eth:", bal/1e18);
    bal = await aDai.methods.balanceOf(addr).call();
    console.log("bal aDai:", bal/1e18);
    bal = await aEth.methods.balanceOf(addr).call()   
    console.log("bal aEth:", bal/1e18);
  //  bal = await Weth.methods.balanceOf(addr).call()   
    console.log("bal Weth:", bal/1e18);
} 

 
 //depositDaiBorrowMaxEth();
 depositEthBorrowMaxDai();
 //getOracle();
 // getHealth(address1);
//getHealth("0x6fa988d4cdb93f44021d9434fe6562ee2b716efe");
 //getBalances(address);

// web3.eth.accounts.create();

web3.eth.getBalance(address)
    .then( (res) => { console.log('My eth balance',res/1e18)})
