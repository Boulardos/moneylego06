// ganache-cli -d -f https://mainnet.infura.io/v3/1fcc1fa9808c450b96086b726df3d316 -i 999 -u 0x56178a0d5f301baf6cf3e1cd53d9863437345bf9

 // ganache-cli -d -f https://api.archivenode.io/i9va4kqv2nmyuxgi2asi9va4kqvzvf1f -i 999 -u 0x56178a0d5f301baf6cf3e1cd53d9863437345bf9

 // ganache-cli -d -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10920828 -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac
 
 //  ganache-cli -d -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10976070 -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac

//  ganache-cli -d -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10621257 -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac

// ganache-cli -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10921101 -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac

// ganache-cli -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10803173  -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac

//  ganache-cli -f https://sandbox.truffleteams.com/b5dd09c5-42f8-4939-a30b-a4b3917ed876@10803192  -i 999 -u 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac


const Web3 = require('web3');
// const web3 = new Web3('http://localhost:8545');
// const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey =  "F2E5F7447739E5363A30C81B0F12B4DE719AB04D15304E51D541312F164A7B8D";
const privateKey0 = "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"; // sans 0x
// const provider = new HDWalletProvider(privateKey0, 'http://localhost:8545');
// const web3 = new Web3(provider);
const web3 = new Web3('http://localhost:8545');

const erc20 = require ('@studydefi/money-legos/erc20');


const aave =  require ('@studydefi/money-legos/aave');


console.log("test");

const Myaddress = "0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac";  
const unlockAddress = "0x56178a0d5f301baf6cf3e1cd53d9863437345bf9"; 
const linkAddress = "0x514910771af9ca656af840dff83e8264ecf986ca"; 
const LendAddress = "0x80fb784b7ed66730e8b1dbd9820afd29931aab03";
const busdAddress = "0x4fabb145d64652a948d72533023f6e7a623c7c53";
const YfiAddress = "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e";
const usdcAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const usdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const tusdAddress = "0x0000000000085d4780b73119b644ae5ecd22b376";
const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const cetherAddress = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";
const adaiAddress = "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d";
//const wethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
const ethAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
const aEthAddress = "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04";
//const paireDaiEthAddress = "0xBbB8eeA618861940FaDEf3071e79458d4c2B42e3";
const lpAddressProviderAddress = "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8";
const factoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const routerAddress ="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

const MyContractAddress = "0xfFf274ccCA6f2a13678b9a01d170C072fEFa3E3D";




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
const factoryabi = [{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const routerabi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];


const MyContractabi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "received",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "required",
				"type": "uint256"
			}
		],
		"name": "tracker",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_loan",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_collat",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Onlyliquidation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getuserrevedatas",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_target",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_loan",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_collat",
				"type": "address"
			}
		],
		"name": "liquideAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "syphonerContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "uniswapV2Call",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

const busd = new web3.eth.Contract(erc20.abi, busdAddress);
const link = new web3.eth.Contract(erc20.abi, linkAddress);
const lend = new web3.eth.Contract(erc20.abi, LendAddress);
const Yfi = new web3.eth.Contract(erc20.abi, YfiAddress);
const usdc = new web3.eth.Contract(erc20.abi, usdcAddress);
const usdt = new web3.eth.Contract(erc20.abi, usdtAddress);
const tusdt = new web3.eth.Contract(erc20.abi, tusdAddress); 
const dai = new web3.eth.Contract(erc20.abi, daiAddress);
const lpAddressProvider = new web3.eth.Contract(lpAddressProviderabi, lpAddressProviderAddress);
const factory = new web3.eth.Contract(factoryabi, factoryAddress);
const router = new web3.eth.Contract(routerabi, routerAddress);
const MyContract = new web3.eth.Contract(MyContractabi, MyContractAddress);
	

const depositEthBorrowDai = async () => {
    const ganacheAccounts = await web3.eth.getAccounts();
    let bal = await web3.eth.getBalance(ganacheAccounts[0]);
    console.log("bal account[0] Eth:", bal/1e18);
    console.log('myWalletAddres',ganacheAccounts[0]);
    const ethAmountinWei = web3.utils.toWei("1", "ether").toString();
    const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);
    const referralCode = '0';

    await LendingPool.methods.deposit(ethAddress, ethAmountinWei, referralCode)
        .send({from: ganacheAccounts[0], value: ethAmountinWei, gas: '2000000'})
        .catch((e) => {
        throw Error(`Erreur deposit ${e.message}`)
        })

    const useAsCollateral = true;
    await LendingPool.methods.setUserUseReserveAsCollateral(ethAddress, useAsCollateral)
        .send({from: ganacheAccounts[0], gas:'2000000'})
        .catch((e) => {
            throw Error(`Error setting user reserve as collateral in the LendingPool contract: ${e.message}`)
        })

    const interestRateMode = 2 // variable rate
    const userAccdata = await LendingPool.methods.getUserAccountData(ganacheAccounts[0]).call()
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
    daiAmount = 10e18;

    await LendingPool.methods.borrow(daiAddress, daiAmount.toString(), interestRateMode, referralCode)
       .send({from: ganacheAccounts[0], gas:'2000000'})
       .catch((e) => {
        throw Error(`Error with borrow() call from the LendingPool contract: ${e.message}`)
        })  
    const daiBal = await dai.methods.balanceOf(ganacheAccounts[0]).call();    
    console.log('account[0] dai balance', daiBal/1e18);

    console.log("done");    

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
    const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);

    const userAccdata = await LendingPool.methods.getUserAccountData(addr).call()
      .catch((e) => {
        throw Error(`Error calling getuseracccountdata()  ${e.message}`)
      })
    console.log("healthfactor",userAccdata[7]/1e18);
    const block = await  web3.eth.getBlock('latest');
    console.log('last block', block.number);

    // const EthuserReservedata = await LendingPool.methods.getUserReserveData(ethAddress, addr).call();
    // const DaiuserReservedata = await LendingPool.methods.getUserReserveData(daiAddress, addr).call();
    
    // let ratio =  userAccdata[2]/userAccdata[1];
    // console.log('borrow value in eth:',userAccdata[2]/1e18);
    // console.log('collat value in eth:',userAccdata[1]/1e18);
    // console.log('available amount to borrow',userAccdata[4]/1e18);
    // console.log("ratio:",ratio);
    // console.log('Eth borrowed(current)',EthuserReservedata[1]/1e18);
    // console.log('Eth borrowed(princ)',EthuserReservedata[2]/1e18);
    // console.log('Dai borrowed(current)',DaiuserReservedata[1]/1e18);
    // console.log('Dai borrowed(princ)',DaiuserReservedata[2]/1e18);
    // console.log('aDai balance',DaiuserReservedata[0]/1e18);
    // console.log('aEth balance',EthuserReservedata[0]/1e18);
   
    // let ethbalance = await web3.eth.getBalance(addr);
    // console.log('eth balance',ethbalance/1e18);
    
    // const Reservedata = await LendingPool.methods.getReserveData(daiAddress).call();
    // console.log('dai reserve:',Reservedata[1]/1e18);
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
    const TokenAddress = "0x4fabb145d64652a948d72533023f6e7a623c7c53";
    const Token = new web3.eth.Contract(erc20.abi, TokenAddress);
  //  const Weth = new web3.eth.Contract(ATokenabi, wethAddress);
    const aDai = new web3.eth.Contract(ATokenabi, adaiAddress);
    const aEth = new web3.eth.Contract(ATokenabi, aEthAddress);
    const link = new web3.eth.Contract(ATokenabi, aEthAddress);

    const ganacheAccounts = await web3.eth.getAccounts();
    const amount = 5e18;
    await web3.eth.sendTransaction({from: ganacheAccounts[0], to: Myaddress, value: amount.toString(), gas:'2000000' });
    
    bal = await dai.methods.balanceOf(addr).call();
    console.log("bal Dai:", bal/1e18);
    bal = await web3.eth.getBalance(addr);
    console.log("bal Eth:", bal/1e18);
    bal = await aDai.methods.balanceOf(addr).call();
    console.log("bal aDai:", bal/1e18);
    bal = await aEth.methods.balanceOf(addr).call()   
    console.log("bal aEth:", bal/1e18);
    bal = await Token.methods.balanceOf(addr).call()   
    console.log("bal Token:", bal/1e18);
    // bal = await Weth.methods.balanceOf(addr).call()   
    // console.log("bal Weth:", bal/1e18);
} 
 

const sellEthforToken = async() => {
    let block = await  web3.eth.getBlock('latest');
    console.log('latest block', block.number);
    const wethAddress = await router.methods.WETH().call();
    const tokenAddress = "0x4fabb145d64652a948d72533023f6e7a623c7c53";
    Token = new web3.eth.Contract(erc20.abi, tokenAddress);
    const amountEth = 0.1e18;
    var path = [wethAddress, tokenAddress];
    let sellDeadline = block.timestamp + 300; // adding 5 min(300) - unix time,

    await router.methods.swapExactETHForTokens(1000, path, Myaddress, sellDeadline)
          .send({from: Myaddress, value: amountEth.toString(), gas: '2000000'})
          .catch((e) => { throw Error(`Error appel swapexacteth...: ${e.message}`) })
    
    const TokenAmount = await Token.methods.balanceOf(Myaddress).call();
    console.log('amount token receive', TokenAmount);      
    
    block = await  web3.eth.getBlock('latest');
    console.log('latest block', block.number);
    console.log(" done");      

}

const Trigger = async() => {
  //  const target = "0x13623CfC024D5c4865728e30b7C3b4E98733adbc";  // busd/eth  block-1: 10920828
  //  const target = "0x39ecba7d254eb593e748cdb7c3d409647a65724e"; // usdc/Yfi  block-1: 10976070
 //   const target ="0xcf33d7b576d355070c72c6d8281f8e0f8ea28ac9";  // link/usdc block-1: 106212157
 //   const target = "0x09208b7ba6105a509f1ff370a612441525877acb"; // tusd/eth  block-1: 10921101
 // const target = "0x3a8fa4f2b677b3a6d37489911e8e722ff4da10c2";        // Yfi/eth block-1: 10941756
 // const target = "0x25e80691c89cc8f25bb832a3ff2d656b071f70eb";         // usdt/eth
 const target = "0x1c494f1919c1512ebe74a5dcc17dac9a64069023";      //  usdc/lend block-1: 10803192


    const debtAddress = usdcAddress;
    const collatAddress = LendAddress;
    const debtAmount = 500e6; 
    const ganacheAccounts = await web3.eth.getAccounts();

    let bal = await web3.eth.getBalance(Myaddress);
    console.log("mybalance",bal/1e18);

    let block = await  web3.eth.getBlock('latest');
    console.log('block number', block.number);

    const lpCoreAddress = await lpAddressProvider.methods.getLendingPoolCore().call();
    const lpAddress = await lpAddressProvider.methods.getLendingPool().call();
    const LendingPool = new web3.eth.Contract(aave.LendingPool.abi, lpAddress);

    const userAccdata = await LendingPool.methods.getUserAccountData(target).call()
      .catch((e) => { throw Error(`Error calling getuseracccountdata()  ${e.message}`) })
    console.log("healthfactor",userAccdata[7]/1e18);

    // await MyContract.methods.liquideAccount(target, debtAddress, collatAddress)
    //     .send({from: ganacheAccounts[1], gas: '2000000'})
    //     .catch((e) => { throw Error(`Erreur calling liquideAccount  ${e.message}`) });

    // await MyContract.methods.Onlyliquidation(target, debtAddress, collatAddress, debtAmount.toString())
    //     .send({from: Myaddress, gas:'2000000'})
    //     .catch((e) => { throw Error(`Erreur calling Onlyliquidation  ${e.message}`) });

    await LendingPool.methods.liquidationCall(collatAddress, debtAddress, target, debtAmount.toString(), false)
            .send({from: ganacheAccounts[0], gas:'2000000'});    

    let profit = await web3.eth.getBalance(Myaddress);
    profit = profit - bal;
    console.log( 'my balance after', profit/1e18);

      
  
    console.log('Liquidation done');
}

const getTx = async()=> {
    let block = await  web3.eth.getBlock('latest');
    console.log('block ', block.number);
    let tx = await web3.eth.getTransactionFromBlock(block.hash, 0);
   // console.log(tx);
    console.log(tx.hash);
}

 //  depositDaiBorrowMaxEth();
 //  depositEthBorrowDai();
// getOracle();
 //getHealth("0x6fa988d4cdb93f44021d9434fe6562ee2b716efe");
 // getBalances(Myaddress);
 // testforking();
 //  test();

 // getHealth("0x13623CfC024D5c4865728e30b7C3b4E98733adbc");
 // sellEthforToken();
 // Trigger();
  getTx();


// web3.eth.getBalance(address)
//     .then( (res) => { console.log('My eth balance',res/1e18)})

    

