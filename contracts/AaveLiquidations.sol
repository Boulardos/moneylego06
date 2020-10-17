pragma solidity = 0.6.6;

import "./IUniswapV2.sol";
import "./UniswapV2Library.sol";

// import "https://github.com/aave/flashloan-box/blob/Remix/contracts/aave/ILendingPool.sol";
// import "https://github.com/aave/flashloan-box/blob/Remix/contracts/aave/ILendingPoolAddressesProvider.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/Math.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/SafeERC20.sol";

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "@studydefi/money-legos/aave/contracts/ILendingPool.sol";
import "@studydefi/money-legos/aave/contracts/ILendingPoolAddressesProvider06.sol";
import "@studydefi/money-legos/onesplit/contracts/IOneSplit06.sol";


contract ExampleFlashSwap is IUniswapV2Callee, AddressStorage {
    
    using SafeMath for uint256;
    using Math for uint256;
    using SafeERC20 for IERC20;
   // using UniswapV2Library for address;
   
   event tracker ( uint received, uint required);
   
    
 //   IUniswapV1Factory immutable factoryV1;
    address immutable factory;
    IUniswapV2Factory Factory;
    IWETH WETH;
    address eth;
    address payable Myaddress;
    IUniswapV2Router02 router;
    uint amountin;
    uint amountout;
   // UniswapV2factoryinterface factory;
    ILendingPoolAddressesProvider provider;
    ILendingPool lendingPool;
    
   
    constructor() public {
   
        factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f; 
        Factory = IUniswapV2Factory(0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f);
        router = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D); 
        WETH = IWETH(router.WETH());
        eth = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
        provider = ILendingPoolAddressesProvider(0x24a42fD28C976A61Df5D00D0599C34c4f90748c8); 
     //  provider
        lendingPool = ILendingPool(provider.getLendingPool());
        Myaddress = 0xcbdbf7A101Bb22F5a26E0d7C7360210C6826b1Ac;
    }

    // needs to accept ETH from any V1 exchange and WETH. ideally this could be enforced, as in the router,
    // but it's not possible because it requires a call to the v1 factory, which takes too much gas
    receive() external payable {}
    
    function syphonerContract() external {
       msg.sender.transfer(address(this).balance);
       IERC20 dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
       dai.transfer(msg.sender, dai.balanceOf(address(this))); 
       IERC20 usdt = IERC20(0xdAC17F958D2ee523a2206206994597C13D831ec7);
       IERC20 usdc = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);
       usdc.transfer(msg.sender, usdc.balanceOf(address(this)));
       usdt.safeTransfer(msg.sender, usdt.balanceOf(address(this)));
       
    }
    
   
    
    
    function Onlyliquidation(address _target, address _loan, address _collat, uint amount) external {
        
       IERC20(_loan).safeApprove(provider.getLendingPoolCore(), amount);
     //   lendingPool.liquidationCall{value: amountETH}(_dai, eth, target, amountETH, false);
        lendingPool.liquidationCall(_collat, _loan, _target, amount, false);
    }
    
    function getuserrevedatas() external {
        address loan = 0xe22da380ee6B445bb8273C81944ADEB6E8450422; 
        address loan2 = router.WETH();
        address target = 0x50e8CfD6FBa0f9366F977E9cf4d5e8802DfDb61C; // target5
        address target2 = 0x4cEC200044Fa141eF808340cb160e7eCD653A6fA;
      // uint[] memory data = new uint[](10);
        ( uint element0, uint debt, , , , , , , , ) = lendingPool.getUserReserveData(eth, target);
        // uint d = lendingPool.getUserReserveData(loan, target)[1];
      //  emit tracker(element0, debt);
    }
    
    
     function liquideAccount(address _target, address _loan, address _collat) public {
       IUniswapV2Pair pair;  
       
       if ( _loan != eth )
    //  { pair = IUniswapV2Pair(Factory.getPair(_loan, router.WETH()));}
      { pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, _loan, router.WETH()));}
       else // {pair = IUniswapV2Pair(Factory.getPair(_collat, router.WETH()));}
           {pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, _collat, router.WETH()));}
      require(address(0) !=  address(pair), "la paire eth.. n'existe pas" ); 
     // pair = IUniswapV2Pair(0xBbB8eeA618861940FaDEf3071e79458d4c2B42e3);
        
       ( ,uint debt_to_liquide, , , , , , , , ) = lendingPool.getUserReserveData(_loan, _target);
       debt_to_liquide = debt_to_liquide.div(2) - 100;
      //  uint  debt_to_liquide = 10e18; 
       if (_loan == eth) { _loan = router.WETH();} // for uniswap interaction
       if (_collat == eth) { _collat = router.WETH();}
       uint amount0Out = _loan == pair.token0() ? debt_to_liquide : 0;
       uint amount1Out = _loan == pair.token1() ? debt_to_liquide : 0;
       bytes memory data = abi.encode(_loan, _collat, _target, debt_to_liquide);
       pair.swap(amount0Out, amount1Out, address(this), data);
       
    }
    
    
    // gets tokens/WETH via a V2 flash swap, swaps for the ETH/tokens on V1, repays V2, and keeps the rest!
    function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external override {
        (address loan, address collat, address target, uint repayAmount) = abi.decode(data,(address, address, address, uint));
        address[] memory path = new address[](2);
        uint amountToken;
        uint amountETH;
        bool isEth;
        { // scope for token{0,1}, avoids stack too deep errors
        address token0 = IUniswapV2Pair(msg.sender).token0();  // msg.sender = pair(loan, weth)
        address token1 = IUniswapV2Pair(msg.sender).token1();
        if (address(WETH) != loan && address(WETH) != collat) {isEth = false;} else { isEth = true;}
        
        require(msg.sender == UniswapV2Library.pairFor(factory, token0, token1), "paire non reconnue"); // ensure that msg.sender is actually a V2 pair
        require(amount0 == 0 || amount1 == 0, "both amounts > 0"); // this strategy is unidirectional
        require(amount0 > 0 || amount1 > 0, "no amount > 0");
        path[0] = amount0 == 0 ? token0 : token1;  // token à rembourser a uniswap
        path[1] = amount0 == 0 ? token1 : token0;  // token emprunté a uniswap
        amountToken = token0 == address(WETH) ? amount1 : amount0;
        amountETH = token0 == address(WETH) ? amount0 : amount1;
        }

       // assert(path[0] == address(WETH) || path[1] == address(WETH)); // this strategy only works with a V2 WETH pair
        address token = path[0] == address(WETH) ? path[1] : path[0]; 
       // IERC20 Token = IERC20(path[0] == address(WETH) ? path[1] : path[0]);
        IERC20 Token = IERC20(token);
        
      
        
        if (amountToken > 0 && isEth ) { // ERC20/ETH flashswap ERC20
    
         //   Token.approve(address(router), amountToken);
         //   Token.approve(provider.getLendingPoolCore(), amountToken);
            lendingPool.liquidationCall(eth, token, target, repayAmount, false);
            uint amountReceived = address(this).balance;
         //   path[0] = collat; path[1] = router.WETH();
          //  IERC20(path[0]).safeApprove(address(router), amountReceived);
          //  amountReceived = router.swapExactTokensForETH(amountReceived, 1000, path, address(this), now + 120 )[1];
           // uint amountRequired = UniswapV2Library.getAmountsIn(factory, amountToken, path)[0];
            path[0] = router.WETH(); path[1] = loan;
            uint amountRequired = router.getAmountsIn(amountToken, path)[0];
            require(amountReceived > amountRequired, "flashswap non profitable"); // fail if we didn't get enough ETH back to repay our flash loan
            WETH.deposit{value: amountRequired}();  // deposit eth and get Weth
            assert(WETH.transfer(msg.sender, amountRequired)); // return WETH to V2 pair
           // (bool success,) = 
            //sender.call{value: amountReceived - amountRequired}(new bytes(0)); // keep the rest! (ETH)
             //  require(success, "loan revert bc not profitable");
            Myaddress.transfer(address(this).balance);
        } 
        if (amountETH > 0 && isEth) { // amountETH > 0  ETH/ERC20 flashswap weth 
            WETH.withdraw(amountETH); // recupere des eth contre weth
            lendingPool.liquidationCall{value: amountETH}(address(Token), eth, target, amountETH, false);
            uint amountReceived = Token.balanceOf(address(this));
           // uint amountRequired = UniswapV2Library.getAmountsIn(factory, amountETH, path)[0];
            path[0] = collat; path[1] = router.WETH();
            uint amountRequired = router.getAmountsIn(amountETH, path)[0];
            emit tracker (amountReceived, amountRequired);
            require(amountReceived > amountRequired, " amountReceived must be superieor to amountRequired"); // fail if we didn't get enough tokens back to repay our flash loan
            require(Token.transfer(msg.sender, amountRequired), " transfer funds back to pair failed"); // return tokens to V2 pair
       // inutile ds ce cas     assert(Token.transfer(sender, amountReceived - amountRequired)); // keep the rest! (tokens)
            Token.transfer(Myaddress, Token.balanceOf(address(this)));
        }
        else { // ERC20/ERC20
            Token.safeApprove(address(router), amountToken); // Token = loan contract
            Token.safeApprove(provider.getLendingPoolCore(), amountToken);
            lendingPool.liquidationCall(collat, loan, target, repayAmount, false);
            IERC20 CollatToken = IERC20(collat);
            uint amountReceived = CollatToken.balanceOf(address(this));
            path[0] = collat; path[1] = router.WETH();
            IERC20(collat).safeApprove(address(router), amountReceived);
            amountReceived = router.swapExactTokensForETH(amountReceived, 1000, path, address(this), now + 120 )[1]; // eth rceived
            path[0] = router.WETH(); path[1] = loan;
            uint amountRequired = router.getAmountsIn(repayAmount, path)[0];
               amountReceived = address(this).balance; // for test only si on des eth  au contract
            emit tracker (amountReceived, amountRequired);
            require(amountReceived > amountRequired, "flashswap non profitable"); // fail if we didn't get enough ETH back to repay our flash loan
            WETH.deposit{value: amountRequired}();  // deposit eth and get Weth
             //   require(WETH.balanceOf(address(this)),"pas assez de weth a renvoyer a pair");
            require(WETH.transfer(msg.sender, amountRequired),"le transfer de weth à la paire a echoué"); // return WETH to V2 pair
           // (bool success,) = sender.call{value: amountReceived - amountRequired}(new bytes(0)); // keep the rest! (ETH)
          //  require(success, "loan revert bc not profitable");
            WETH.withdraw(WETH.balanceOf(address(this)));
            Myaddress.transfer(address(this).balance);
            
        }
        
    }
    
    
}