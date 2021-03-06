/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("pluginhost-config",function(C){var B=C.Plugin.Host,A=C.Lang;B.prototype._initConfigPlugins=function(E){var G=(this._getClasses)?this._getClasses():[this.constructor],D=[],H={},F,I,K,L,J;for(I=G.length-1;I>=0;I--){F=G[I];L=F._UNPLUG;if(L){C.mix(H,L,true);}K=F._PLUG;if(K){C.mix(D,K,true);}}for(J in D){if(D.hasOwnProperty(J)){if(!H[J]){this.plug(D[J]);}}}if(E&&E.plugins){this.plug(E.plugins);}};B.plug=function(E,I,G){var J,H,D,F;if(E!==C.Base){E._PLUG=E._PLUG||{};if(!A.isArray(I)){if(G){I={fn:I,cfg:G};}I=[I];}for(H=0,D=I.length;H<D;H++){J=I[H];F=J.NAME||J.fn.NAME;E._PLUG[F]=J;}}};B.unplug=function(E,H){var I,G,D,F;if(E!==C.Base){E._UNPLUG=E._UNPLUG||{};if(!A.isArray(H)){H=[H];}for(G=0,D=H.length;G<D;G++){I=H[G];F=I.NAME;if(!E._PLUG[F]){E._UNPLUG[F]=I;}else{delete E._PLUG[F];}}}};},"3.3.0",{requires:["pluginhost-base"]});