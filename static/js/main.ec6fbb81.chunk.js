(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),i=n.n(o),c=(n(80),n(2)),s=n.n(c),l=n(18),u=n(61),d=n(62),m=n(72),p=n(63),v=n(73),w=n(64),E=n.n(w),h=(n(82),n(131)),g={getAddress:function(){return new Promise(function(e){window.addEventListener("ICONEX_RELAY_RESPONSE",function t(n){var r=n.detail,a=r.type,o=r.payload;"RESPONSE_ADDRESS"===a&&e(o),window.removeEventListener("ICONEX_RELAY_RESPONSE",t)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_ADDRESS"}}))})},sendTransaction:function(e){return new Promise(function(t){window.addEventListener("ICONEX_RELAY_RESPONSE",function e(n){var r=n.detail,a=r.type,o=r.payload;"RESPONSE_JSON-RPC"===a&&t(o.result),window.removeEventListener("ICONEX_RELAY_RESPONSE",e)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_JSON-RPC",payload:e}}))})}},f=n(11),S=n.n(f),N=new f.HttpProvider(window.PROVIDER_URL),C=new S.a(N),_=f.IconBuilder.CallBuilder,x=f.IconBuilder.CallTransactionBuilder,R=f.IconBuilder.IcxTransactionBuilder,A={iconService:C,callBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.from,n=e.methodName,r=e.to,a=e.params,o=void 0===a?{}:a;return(new _).from(t).to(r).method(n).params(o).build()},sendTxBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.from,n=e.to,r=e.methodName,a=e.params,o=void 0===a?{}:a,i=e.networkId,c=void 0===i?window.NID:i,s=e.stepLimit,l=void 0===s?"0x493e0":s,u=e.value,d=void 0===u?"0x0":u;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new x).nid(c).from(t).to(n).stepLimit(l).value(d).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).method(r).params(o).version("0x3").build(),id:1}},sendTxBuild2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.from,n=e.to,r=e.networkId,a=void 0===r?window.NID:r,o=e.stepLimit,i=void 0===o?"0x493e0":o,c=e.value,s=void 0===c?"0x0":c;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new R).nid(a).from(t).to(n).stepLimit(i).value(s).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).version("0x3").build(),id:1}}},T=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).blocktimer=null,n.state={curBlockHeight:0,endBlockHeight:0,login:!1,myAddress:"",curWinnerCnt:0,curWinner:"",myCnt:0},n.funcLogin=function(){var e=Object(l.a)(s.a.mark(function e(t){var r,a,o,i,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.getCurBlockHeight(),e.next=3,g.getAddress();case 3:return r=e.sent,e.next=6,A.iconService.call(A.callBuild({methodName:"get_last_block_of_this_game",params:{},to:window.CONTRACT_ADDRESS})).execute();case 6:return a=e.sent,e.next=9,A.iconService.call(A.callBuild({methodName:"get_bestcounting",params:{},to:window.CONTRACT_ADDRESS})).execute();case 9:return o=e.sent,console.log("curWinnerCnt",o),e.next=13,A.iconService.call(A.callBuild({methodName:"get_bestcounting_address",params:{},to:window.CONTRACT_ADDRESS})).execute();case 13:return i=e.sent,e.next=16,A.iconService.call(A.callBuild({from:r,methodName:"get_mycounting",params:{},to:window.CONTRACT_ADDRESS})).execute();case 16:c=e.sent,n.setState({myAddress:r,login:!0,endBlockHeight:Number(Math.floor(a/1e8)),curWinnerCnt:Number(o),curWinner:i,myCnt:Number(c)});case 18:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.funcModule=function(){var e=Object(l.a)(s.a.mark(function e(t){var r,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A.sendTxBuild2,console.log("+++++++++++++\xdf"),e.next=4,A.iconService.call(A.callBuild({methodName:"get_bestcounting",params:{},to:window.CONTRACT_ADDRESS})).execute();case 4:return r=e.sent,e.next=7,A.iconService.call(A.callBuild({from:n.state.myAddress,methodName:"get_mycounting",params:{},to:window.CONTRACT_ADDRESS})).execute();case 7:return a=e.sent,console.log("get_mycounting",a),e.next=11,A.iconService.call(A.callBuild({methodName:"get_bestcounting_address",params:{},to:window.CONTRACT_ADDRESS})).execute();case 11:o=e.sent,console.log("curWinner",o),console.log("SET,",Number(r),Number(a)),n.setState({curWinnerCnt:Number(r),curWinner:o,myCnt:Number(a)});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.funcPlay=Object(l.a)(s.a.mark(function e(){var t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.sendTxBuild2,console.log("================"),console.log("ADDRESS",n.state.myAddress),r=t({from:n.state.myAddress,to:window.CONTRACT_ADDRESS}),e.next=6,g.sendTransaction(r);case 6:e.sent,setTimeout(n.funcModule,3e3);case 8:case"end":return e.stop()}},e)})),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"getCurBlockHeight",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.blockTimer=setInterval(Object(l.a)(s.a.mark(function e(){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.iconService.getLastBlock().execute();case 2:n=e.sent,r=n.height,console.log(r),t.setState({curBlockHeight:r});case 6:case"end":return e.stop()}},e)})),2e3);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.blockTimer)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},this.state.login?a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"\uc6b0\uc2b9\uc790 \uc120\uc815\uae4c\uc9c0 \ub0a8\uc740 \ube14\ub85d \uc218\ub294 ",this.state.endBlockHeight-this.state.curBlockHeight,"\uc785\ub2c8\ub2e4."),a.a.createElement("p",null,"\uc6b0\uc2b9\uc0c1\uae08\uc740 100000000 ICX \uc785\ub2c8\ub2e4. \ud604\uc7ac\uae4c\uc9c0 ",this.state.myCnt,"\ubc88 \ucc38\uc5ec\ud558\uc600\uc2b5\ub2c8\ub2e4. "),a.a.createElement("p",null,"\ud604\uc7ac\uae4c\uc9c0 1\ub4f1: ",this.state.curWinner," \ub2d8 /   ",this.state.curWinnerCnt,"\ubc88 \ucc38\uc5ec"),a.a.createElement("p",null,"\ub2f9\uc2e0\ub3c4 \uc6b0\uc2b9\uc790\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud074\ub9ad\ud558\uc5ec \uac8c\uc784\uc5d0 \ucc38\uc5ec\ud558\uc138\uc694."),a.a.createElement("a",{style:{fontSize:30},className:"App-link",target:"_blank",rel:"noopener noreferrer",onClick:this.funcPlay},"click")):a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.funcLogin},"\uac8c\uc784 \ucc38\uc5ec\ud558\uae30"))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,n){e.exports=n.p+"static/media/coin.651b35e3.svg"},75:function(e,t,n){e.exports=n(129)},80:function(e,t,n){},82:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.ec6fbb81.chunk.js.map