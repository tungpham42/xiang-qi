(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da7b746"],{2221:function(e,a,t){"use strict";var i=t("8429"),s=t.n(i);s.a},"2de6":function(e,a,t){"use strict";var i=t("6064"),s=t.n(i);s.a},6064:function(e,a,t){},"7d36":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"game",style:e.styleObject},[t("xq-message-box-link",{attrs:{"mb-target":"game-information"}}),t("xq-message-box-link",{attrs:{"mb-target":"game-error"}}),t("div",{staticClass:"game__heading"},[t("xq-head-bar",[t("xq-game-status")],1)],1),t("mq-layout",{staticClass:"game__hud",attrs:{mq:["tiny","mobile"]}},[t("xq-game-status")],1),e.gameHasLoaded?[t("div",{staticClass:"game__info game__info--black"},[t("xq-captured-pieces",{attrs:{playerColor:0}})],1),t("div",{staticClass:"game__info game__info--red"},[t("xq-captured-pieces",{attrs:{playerColor:1}})],1)]:e._e(),t("div",{staticClass:"game__board-area",style:e.boardAreaDimensionsStyleObject},[t("xq-board",{staticClass:"game__board"})],1)],2)},s=[],r=t("2f62"),c=t("6ffa"),n=t("91ea"),o=t("6832"),d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"captured-pieces",class:e.classObject},[e._l(16,function(a,i){return[t("div",{key:"cp-"+i+"-"+e.playerColor,staticClass:"captured-pieces__piece"},[t("div",{staticClass:"captured-pieces__text"},[i<e.playerCapturedPieces.length?t("span",[e._v("\n          "+e._s(e.characterArray[e.playerCapturedPieces[i]-1])+"\n        ")]):e._e()])]),7==i?t("div",{staticClass:"captured-pieces__break"}):e._e()]})],2)},l=[],h={name:"captured-pieces",props:["playerColor"],computed:{...Object(r["c"])(["characterArray","capturedPieces"]),classObject(){return{"captured-pieces--black":0==this.playerColor,"captured-pieces--red":1==this.playerColor}},playerCapturedPieces(){return this.capturedPieces[this.playerColor]}}},p=h,u=(t("2de6"),t("2877")),m=Object(u["a"])(p,d,l,!1,null,null,null),w=m.exports,g=t("1f8e"),b=t("36c9"),_={name:"game",components:{xqHeadBar:c["a"],xqBoard:n["a"],xqGameStatus:o["a"],xqCapturedPieces:w,xqMessageBoxLink:g["a"],xqMessageBoxContainer:b["a"]},methods:{...Object(r["b"])(["resetGameState","loadGame","setMenuType"]),initializeGame(){this.resetGameState();var e=this.$route.params.playerID,a=this.$route.params.isNewGame;a||this.loadGame(e)}},mounted(){this.$nextTick(()=>{this.setMenuType("game")}),this.initializeGame()},computed:{...Object(r["c"])(["gameHasLoaded","windowWidth","windowHeight","currentGameID"]),styleObject(){var e;return e=this.windowWidth>=this.windowHeight?{"grid-template-columns":"minmax(auto, calc(var(--vw) * 30)) minmax(calc(var(--vh) * 80), auto) minmax(auto, calc(var(--vw) * 30))","grid-template-areas":"'header header header' 'info-black board-area info-red'"}:{"grid-template-rows":"calc(var(--vh) * 10) auto 1fr 1fr 1fr","grid-template-areas":"'header' 'status' 'board-area' 'info-red' 'info-black'","align-items":"center"},e},boardAreaDimensionsStyleObject(){var e;return e=this.windowWidth>=this.windowHeight?{height:.8*this.windowHeight+"px",width:.8*this.windowHeight+"px"}:this.windowHeight<=1.4*this.windowWidth?{height:.6*this.windowHeight+"px",width:.6*this.windowHeight+"px"}:{height:this.windowWidth+"px",width:this.windowWidth+"px"},e}},watch:{$route(){this.initializeGame()}}},x=_,f=(t("2221"),Object(u["a"])(x,i,s,!1,null,null,null));a["default"]=f.exports},8429:function(e,a,t){}}]);
//# sourceMappingURL=chunk-0da7b746.bb65d36a.js.map