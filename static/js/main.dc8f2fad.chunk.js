(this.webpackJsonpcropsfarmersnft=this.webpackJsonpcropsfarmersnft||[]).push([[0],{213:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract ERC721Enumerable","name":"_nft","type":"address"},{"internalType":"contract N2DRewards","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[1]","name":"info","type":"uint256[1]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"}]')},291:function(e,t,n){},458:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_paytoken","type":"address"},{"internalType":"uint256","name":"_costvalue","type":"uint256"}],"name":"addCurrency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"mintpid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllowedCrypto","outputs":[{"internalType":"contract IERC20","name":"paytoken","type":"address"},{"internalType":"uint256","name":"costvalue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getCryptotoken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getNFTCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]')},459:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},492:function(e,t,n){},520:function(e,t){},522:function(e,t){},524:function(e,t){},528:function(e,t){},551:function(e,t){},553:function(e,t){},567:function(e,t){},569:function(e,t){},595:function(e,t){},597:function(e,t){},614:function(e,t){},615:function(e,t){},687:function(e,t){},688:function(e,t){},786:function(e,t){},908:function(e,t){},921:function(e,t){},996:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n.n(a),i=n(456),r=n.n(i),l=(n(492),n(287),n(2)),c=n(7),p=n(10),o=n(11),d=n(21),u=n(22),y=(n(291),n(173),n(292),n(170)),b=n.n(y),m=(n(458),n(213)),j=(n(459),n(225)),x="0xb8C7990A2Ee1A120B7E4894fD7f8b0fEaAd6b9b9",h="0xC055bD6B13812306a77Ac1C7e9E18AD64b64a9Cc",f="https://deep-index.moralis.io/api/v2/",O="https://ipfs.io/ipfs/QmY5rGD6F2ZH38d3Dk39dZxNDYtxi2ihPe2iiV7rGkRDCW/",v=(Object(j.a)("https://polygon-mumbai.g.alchemy.com/v2/rFAvR7xiSW3_LnoNi-K6bCqe0nmPmczv"),n(217)),T=n.n(v),w=n(224),g=n(218),k=n.n(g),M=n(149),S=n.n(M),C=n(0),N=(Object(j.a)("https://eth-rinkeby.alchemyapi.io/v2/8AX5AP2TU6G45ctsOXNt8K4Fz_BkhhZG"),{binancechainwallet:{package:!0},walletconnect:{package:w.a,options:{infuraId:"3cf2d8833a2143b795b7796087fff369"}},walletlink:{package:k.a,options:{appName:"Net2Dev NFT Minter",infuraId:"3cf2d8833a2143b795b7796087fff369",rpc:"",chainId:4,appLogoUrl:null,darkMode:!0}}}),I=(new T.a({network:"rinkeby",theme:"dark",cacheProvider:!0,providerOptions:N}),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={balance:[],rawearn:[]},e}return Object(o.a)(n,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"handleNFT",value:function(e){this.setState({outvalue:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(c.a)(Object(l.a)().mark((function e(){var t,n=this;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api-testnet.polygonscan.com/api"+"?module=stats&action=tokensupply&contractaddress=".concat(x,"&apikey=").concat("DBQX5JUSAVUZRK8CC4IN2UZF9N2HA63P4U")).then((function(e){n.setState({balance:e.data}),console.log(e.data)}));case 2:return t={"X-API-Key":"2VBV4vaCLiuGu6Vu7epXKlFItGe3jSPON8WV4CrXKYaNBEazEUrf1xwHxbrIo1oM",accept:"application/json"},e.next=5,b.a.get(f+"/nft/".concat(x,"/owners?chain=mumbai&format=decimal"),{headers:t}).then((function(e){var t=e.data.result;n.setState({nftdata:t}),console.log(e.data)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.balance,this.state.outvalue;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{class:"container-fluid",children:Object(C.jsxs)("div",{class:"row",style:{margin:"auto",padding:"2px",textAlign:"center"},children:[Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Home"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"NFT Stake"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Marketplace"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Farms"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"NFT List"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Bridge"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Telegram"})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("a",{class:"nav-link active","aria-current":"page",href:"./",children:"Twitter"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{id:"connectbtn",type:"button",class:"connectbutton",style:{fontFamily:"SF Pro Display"},value:"Connect Your Wallet"})})]})}),Object(C.jsx)("section",{id:"hero",style:{height:"fitContent"},children:Object(C.jsx)("div",{class:"container",style:{widht:"100%",marginTop:"80px",padding:"25px"},children:Object(C.jsx)("div",{class:"row px-4 pt-2",style:{width:"auto"},children:Object(C.jsxs)("div",{class:"header",children:[Object(C.jsx)("div",{style:{borderRadius:"14px",fontWeight:"300",textAlign:"center"},children:Object(C.jsx)("h1",{children:"CROPS NFT Staking Pool Active Rewards"})}),Object(C.jsxs)("table",{class:"table px-3 table-bordered table-dark",style:{textAlign:"center"},children:[Object(C.jsx)("thead",{class:"thead-light",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"Collection"}),Object(C.jsx)("th",{scope:"col",children:"Rewards Per Day"}),Object(C.jsx)("th",{scope:"col",children:"Exchangeable Items"})]})}),Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Crops Bronze Collection"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ads",children:[Object(C.jsx)("span",{class:"amount",children:"0.50"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Crops"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"2"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"NFTs/M"})]})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Crops Silver Collection"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ac",children:[Object(C.jsx)("span",{class:"amount",children:"2.50"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Crops"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"10"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"NFTs/M"})]})]}),Object(C.jsxs)("tr",{class:"stakegoldeffect",children:[Object(C.jsx)("td",{children:"Crops Gold Collection"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-one-time",children:[Object(C.jsx)("span",{class:"amount",children:"1"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Crops+"})]}),Object(C.jsxs)("td",{class:"exchange",children:[Object(C.jsx)("span",{class:"amount",children:"25 NFTs/M or "}),Object(C.jsx)("span",{class:"currency",children:"100 Crops/M"})]})]})]})]}),Object(C.jsxs)("div",{class:"header",children:[Object(C.jsx)("div",{style:{borderRadius:"14px",fontWeight:"300",textAlign:"center"},children:Object(C.jsx)("h1",{children:"CROPS Token Stake Farms"})}),Object(C.jsxs)("table",{class:"table table-bordered table-dark",style:{borderRadius:"14px"},children:[Object(C.jsx)("thead",{class:"thead-light",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"Farm Pools"}),Object(C.jsx)("th",{scope:"col",children:"Harvest Daily Earnings"})]})}),Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Stake CROPS to Earn CROPS"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ads",children:[Object(C.jsx)("span",{class:"amount",children:"0.01"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Per CROPS"})]})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Stake CROPS to Earn CROPS+"}),Object(C.jsxs)("td",{class:"amount","data-test-id":"rewards-summary-ac",children:[Object(C.jsx)("span",{class:"amount",children:"0.005"}),"\xa0",Object(C.jsx)("span",{class:"currency",children:"Per CROPS"})]})]})]})]})]})]})})})}),Object(C.jsxs)("section",{id:"main",style:{height:"fitContent"},children:[Object(C.jsx)("div",{className:"container",style:{display:"flex",height:"500px",marginTop:"100px"},children:Object(C.jsxs)("div",{className:"mainRow1",children:[Object(C.jsx)("div",{class:"nftminter",children:Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{class:"row pt-3",children:[Object(C.jsx)("div",{children:Object(C.jsxs)("h1",{class:"pt-2",style:{fontWeight:30},children:[" ","NFT Minter"]})}),Object(C.jsx)("h3",{children:"4/1000"}),Object(C.jsx)("h6",{children:"Your Wallet Address"}),Object(C.jsx)("div",{class:"pb-3",id:"wallet-address",style:{color:"rgb(57, 255, 20)",fontWeight:"400",textShadow:"black, 1px 1px 1px"},children:Object(C.jsx)("label",{for:"floatingInput",children:"Please Connect Wallet"})})]}),Object(C.jsx)("div",{children:Object(C.jsx)("label",{style:{fontWeight:"300",fontSize:"18px"},children:"Select NFT Quantity"})}),Object(C.jsxs)("div",{"aria-label":"First group",name:"amount",role:"group",class:"btn-group btn-group-lg",children:[Object(C.jsx)("button",{value:"1",type:"button",class:"btn btn-primary",children:"1"}),Object(C.jsx)("button",{value:"2",type:"button",class:"btn btn-primary",children:"2"}),Object(C.jsx)("button",{value:"3",type:"button",class:"btn btn-primary",children:"3"}),Object(C.jsx)("button",{value:"4",type:"button",class:"btn btn-primary",children:"4"}),Object(C.jsx)("button",{value:"5",type:"button",class:"btn btn-primary",children:"5"})]}),Object(C.jsxs)("h6",{class:"pt-2",style:{fontFamily:"SF Pro Display",fontWeight:"300",fontSize:"18px"},children:[" ","Buy with your preferred crypto!"]}),Object(C.jsxs)("div",{class:"row px-2 pb-2 row-style",children:[Object(C.jsx)("div",{class:"col ",children:Object(C.jsx)("button",{type:"button",class:"button-style btn btn-primary",style:{border:"0.2px",borderRadius:"14px"},children:Object(C.jsx)("img",{src:"n2dr-logo.png",width:"100%"})})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("button",{type:"button",class:"button-style btn btn-primary",style:{border:"0.2px",borderRadius:"14px"},children:Object(C.jsx)("img",{src:"usdt.png",width:"70%"})})}),Object(C.jsx)("div",{class:"col",children:Object(C.jsx)("button",{type:"button",class:"button-style btn btn-primary",style:{border:"0.2px",borderRadius:"14px"},children:Object(C.jsx)("img",{src:"matic.png",width:"70%"})})}),Object(C.jsx)("div",{children:Object(C.jsx)("label",{id:"txout",style:{color:" rgb(57, 255, 20)",marginTop:"5px",fontSize:"20px",fontWeight:"500",textShadow:"rgb(0, 0, 0); 1px 1px 2px",paddingBottom:"10px"},children:Object(C.jsx)("p",{style:{fontSize:"20px"},children:"Transfer Status"})})})]})]})}),Object(C.jsx)("div",{className:"flexcontainer",children:Object(C.jsxs)("ul",{class:"flex-container",children:[Object(C.jsx)("li",{class:"flex-item",children:"Initial Deposit"}),Object(C.jsx)("li",{class:"flex-item",children:"Total Deposit"}),Object(C.jsx)("li",{class:"flex-item",children:"Withdrawn"}),Object(C.jsx)("li",{class:"flex-item",children:"Contract Balance"}),Object(C.jsx)("li",{class:"flex-item",children:"Referrals"}),Object(C.jsx)("li",{class:"flex-item",children:"Total Farmers"})]})})]})}),Object(C.jsxs)("div",{class:"container",style:{height:"500px",marginTop:"100px",display:"flex"},children:[Object(C.jsx)("div",{class:"vault",style:{margin:"25p"},children:Object(C.jsxs)("div",{class:"flex",style:{},children:[Object(C.jsx)("h5",{style:{color:"rgb(255, 255, 255)",fontWeight:"300"},children:"Your Vault Activity"}),Object(C.jsx)("h6",{style:{color:"rgb(255, 255, 255)"},children:"Verify Staked Amount"}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",style:{backgroundColor:"rgba(255, 255, 255, 0.063)",boxShadow:"rgb(0, 0, 0) 1px 1px 5px"},children:"Verify"}),Object(C.jsx)("table",{class:"table mt-3 px-3",children:Object(C.jsxs)("tbody",{children:[Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"19px"},children:["Your Staked NFTs:",Object(C.jsx)("span",{id:"yournfts",style:{backgroundColor:"rgba(255, 255, 255, 0)",fontSize:"21px",color:"rgb(57, 255, 20)",fontWeight:"500",textShadow:"rgb(0, 0, 0) 1px 1px 2px"}})]})}),Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"15px"},children:["Total Staked NFTs:",Object(C.jsx)("span",{id:"stakedbalance",style:{backgroundColor:"rgba(255, 255, 255, 0)",fontSize:"21px",color:"rgb(57, 255, 20)",fontWeight:"500",textShadow:"rgb(0, 0, 0) 1px 1px 2px"}})]})}),Object(C.jsx)("tr",{children:Object(C.jsxs)("td",{style:{fontSize:"19px"},children:["Unstake All Staked NFTs",Object(C.jsxs)("button",{type:"button",class:"mb-3 btn btn-primary",style:{backgroundColor:"rgba(255, 255, 255, 0.063)",boxShadow:"rgb(0, 0, 0) 1px 1px 5px"},children:[" ","Unstake All"]})]})})]})})]})}),Object(C.jsx)("div",{class:"stakeRewards",children:Object(C.jsxs)("div",{class:"container",style:{},children:[Object(C.jsx)("img",{class:"col-lg-4",src:"http://localhost:3001/jeet.jpg",style:{}}),Object(C.jsx)("div",{class:"container",style:{}}),Object(C.jsx)("h5",{style:{color:"rgb(255, 255, 255)",fontWeight:"300"},children:"Staking Rewards"}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",style:{backgroundColor:"rgba(255, 255, 255, 0.063)",boxShadow:"rgb(0, 0, 0) 1px 1px 5px"},children:"Earned N2D Rewards"}),Object(C.jsx)("div",{id:"earned",style:{color:"rgb(57, 255, 20)",marginTop:"5px",fontSize:"25px",fontWeight:"500",textShadow:"rgb(0, 0, 0) 1px 1px 2px"},children:Object(C.jsx)("p",{style:{fontSize:"20px"},children:" Earned Tokens"})}),Object(C.jsxs)("div",{class:"col-12 mt-2",style:{},children:[Object(C.jsx)("div",{style:{color:"white"},children:"Claim Rewards"}),Object(C.jsx)("button",{type:"button",class:"mb-2 btn btn-primary",style:{backgroundColor:"rgba(255, 255, 255, 0.063)",boxShadow:"rgb(0, 0, 0) 1px 1px 5px"},children:"Claim"})]})]})})]})]}),Object(C.jsx)("div",{class:"row nftportal mt-3",children:Object(C.jsx)("div",{class:"col mt-4 ml-3 d-flex",children:Object(C.jsx)("div",{class:"col d-flex justify-content-center",children:Object(C.jsxs)("div",{class:"portalBox",children:[Object(C.jsx)("h1",{class:"n2dtitlestyle mt-3",children:"Your NFT Portal"}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",style:{backgroundColor:"rgb(0, 0, 0)",marginLeft:"15px",height:"40px",alignSelf:"center",borderRadius:"20px",boxShadow:"rgb(0, 0, 0) 1px 1px 5px"},children:"Refresh NFT Portal"})]})})})})]})}}]),n}(a.Component)),F=I;var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1004)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))},R=n(1003),P=n(72),E=n(1002),W=null,_=null,B=null,D="2VBV4vaCLiuGu6Vu7epXKlFItGe3jSPON8WV4CrXKYaNBEazEUrf1xwHxbrIo1oM",U={binancechainwallet:{package:!0},walletconnect:{package:w.a,options:{infuraId:"3cf2d8833a2143b795b7796087fff369"}},walletlink:{package:k.a,options:{appName:"Net2Dev NFT Minter",infuraId:"3cf2d8833a2143b795b7796087fff369",rpc:"",chainId:4,appLogoUrl:null,darkMode:!0}}},z=new T.a({network:"rinkeby",theme:"dark",cacheProvider:!0,providerOptions:U});function V(){var e=Object(a.useState)([]),t=Object(P.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),r=Object(P.a)(i,2),p=r[0],o=r[1],d=Object(a.useState)("not-loaded"),u=Object(P.a)(d,2),y=u[0],j=u[1];function v(){return v=Object(c.a)(Object(l.a)().mark((function e(){var t,n,a,i,r,p,d;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.connect();case 2:return t=e.sent,W=new S.a(t),e.next=6,t.send("eth_requestAccounts");case 6:return e.next=8,W.eth.getAccounts();case 8:return n=e.sent,_=n[0],B=new W.eth.Contract(m,h),a={"X-API-Key":D,accept:"application/json"},e.next=14,b.a.get(f+"/nft/".concat(x,"/owners?chain=mumbai&format=decimal"),{headers:a}).then((function(e){return e.data.result}));case 14:return i=e.sent,e.next=17,Promise.all(i.map(function(){var e=Object(c.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={tokenId:t.token_id,holder:t.owner_of,wallet:_},e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:return r=e.sent,e.next=20,B.methods.tokensOfOwner(_).call().then((function(e){return e}));case 20:return p=e.sent,e.next=23,Promise.all(p.map(function(){var e=Object(c.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={tokenId:t},e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 23:d=e.sent,s(r),o(d),console.log(r),j("loaded");case 28:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return Object(a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),"loaded"!==y||n.length?Object(C.jsx)("div",{className:"nftportal mb-4",children:Object(C.jsx)("div",{className:"container col-lg-11",children:Object(C.jsx)("div",{className:"row items px-3 pt-3",children:Object(C.jsxs)("div",{className:"ml-3 mr-3",style:{display:"inline-grid",gridTemplateColumns:"repeat(4, 5fr)",columnGap:"20px"},children:[n.map((function(e,t){if(-1!==e.wallet.toLowerCase().indexOf(e.holder)){var n=function(){var t=Object(c.a)(Object(l.a)().mark((function t(){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B.methods.stake([e.tokenId]).send({from:_});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"card nft-card mt-3 mb-3",children:[Object(C.jsx)("div",{className:"image-over",children:Object(C.jsx)("img",{className:"card-img-top",src:O+e.tokenId+".png",alt:""})}),Object(C.jsx)("div",{className:"card-caption col-12 p-0",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsxs)("h5",{className:"mb-0",children:["Net2Dev Collection NFT #",e.tokenId]}),Object(C.jsxs)("h5",{className:"mb-0 mt-2",children:["Status",Object(C.jsx)("p",{style:{color:"#39FF14",fontWeight:"bold",textShadow:"1px 1px 2px #000000"},children:"Ready to Stake"})]}),Object(C.jsxs)("div",{className:"card-bottom d-flex justify-content-between",children:[Object(C.jsx)("input",{type:"hidden",id:"stakeid",value:e.tokenId},t),Object(C.jsx)(E.a,{style:{marginLeft:"2px",backgroundColor:"#ffffff10"},onClick:n,children:"Stake it"})]})]})})]},t)}})),p.map((function(e,t){function n(){return(n=Object(c.a)(Object(l.a)().mark((function t(){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B.methods.unstake([e.tokenId]).send({from:_});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"card stakedcard mt-3 mb-3",children:[Object(C.jsxs)("div",{className:"image-over",children:[Object(C.jsx)("img",{style:{position:"absolute",top:"0.05rem",width:"90px"},src:"stakeicon.png"}),Object(C.jsx)("img",{className:"card-img-top",src:O+e.tokenId+".png",alt:""})]}),Object(C.jsx)("div",{className:"card-caption col-12 p-0",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsxs)("h5",{className:"mb-0",children:["Net2Dev Collection NFT #",e.tokenId]}),Object(C.jsxs)("h5",{className:"mb-0 mt-2",children:["Status",Object(C.jsx)("p",{style:{color:"#15F4EE",fontWeight:"bold",textShadow:"1px 1px 2px #000000"},children:"Currently Staked"})]}),Object(C.jsxs)("div",{className:"card-bottom d-flex justify-content-between",children:[Object(C.jsx)("input",{type:"hidden",id:"stakeid",value:e.tokenId},t),Object(C.jsx)(E.a,{style:{marginLeft:"2px",backgroundColor:"#ffffff10"},onClick:function(){return n.apply(this,arguments)},children:"Unstake it"})]})]})})]},t)})}))]})})})}):Object(C.jsx)("h1",{className:"text-3xl",children:"Wallet Not Connected"})}R.b,R.a,r.a.createRoot(document.getElementById("root")).render(Object(C.jsxs)(s.a.StrictMode,{children:[Object(C.jsx)(F,{}),Object(C.jsx)(V,{})]})),A()}},[[996,1,2]]]);
//# sourceMappingURL=main.dc8f2fad.chunk.js.map