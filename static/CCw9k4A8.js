import{_ as E}from"./D0q_yTTw.js";import{_ as z,o as x,c as S,a as C,n as T,r as P,s as V,q as A,u as q,v as I,g as J,x as U,y as W,z as G,A as N,m as Q,B as X,C as Y,D as B,E as Z,F as tt,G as et,H as st,I as rt,J as nt,K as at,t as ot,b as $}from"./DYdLsu83.js";const H=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function it(r,n){n?n={...H,...n}:n=H;const s=R(n);return s.dispatch(r),s.toString()}const ct=Object.freeze(["prototype","__proto__","constructor"]);function R(r){let n="",s=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const d=a.length;d<10?o="unknown:["+a+"]":o=a.slice(8,d-1),o=o.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let u=Object.keys(t);r.unorderedObjects&&(u=u.sort());let i=[];r.respectType!==!1&&!j(t)&&(i=ct),r.excludeKeys&&(u=u.filter(l=>!r.excludeKeys(l)),i=i.filter(l=>!r.excludeKeys(l))),e("object:"+(u.length+i.length)+":");const y=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)y(l);for(const l of i)y(l)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,d=t.map(c=>{const u=R(r);u.dispatch(c);for(const[i,y]of u.getContext())o.set(i,y);return u.toString()});return s=o,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),j(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const K="[native code] }",lt=K.length;function j(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-lt)===K}class w{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||ut).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const ut={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},ft={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|a<<8|o;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(n.charAt(d>>>6*(3-c)&63))}return s.join("")}},dt={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,n)}},ht={parse(r){return dt.parse(unescape(encodeURIComponent(r)))}};class pt{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=ht.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new w(s,a)}}class yt extends pt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const L=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],_t=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class gt extends yt{constructor(){super(...arguments),this._hash=new w([...L])}reset(){super.reset(),this._hash=new w([...L])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],d=e[3],c=e[4],u=e[5],i=e[6],y=e[7];for(let l=0;l<64;l++){if(l<16)v[l]=n[s+l]|0;else{const g=v[l-15],k=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,p=v[l-2],O=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;v[l]=k+v[l-7]+O+v[l-16]}const b=c&u^~c&i,D=t&a^t&o^a&o,h=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),_=y+m+b+_t[l]+v[l],f=h+D;y=i,i=u,u=c,c=d+_|0,d=o,o=a,a=t,t=_+f|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+d|0,e[4]=e[4]+c|0,e[5]=e[5]+u|0,e[6]=e[6]+i|0,e[7]=e[7]+y|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function mt(r){return new gt().finalize(r).toString(ft)}function wt(r,n={}){const s=typeof r=="string"?r:it(r,n);return mt(s).slice(0,10)}const bt={props:{},setup(r){}},vt={class:"container"},Bt=C("h3",null,"Header Component",-1),Dt=[Bt];function xt(r,n,s,e,t,a){return x(),S("div",vt,Dt)}const St=z(bt,[["render",xt]]),Ct=r=>r==="defer"||r===!1;function $t(...r){var D;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=W(),o=e,d=()=>null,c=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];t.server=t.server??!0,t.default=t.default??d,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??T.deep,t.dedupe=t.dedupe??"cancel";const u=()=>t.getCachedData(s,a)!=null;if(!a._asyncData[s]||!t.immediate){(D=a.payload._errors)[s]??(D[s]=null);const h=t.deep?P:V;a._asyncData[s]={data:h(t.getCachedData(s,a)??t.default()),pending:P(!u()),error:A(a.payload._errors,s),status:P("idle")}}const i={...a._asyncData[s]};i.refresh=i.execute=(h={})=>{if(a._asyncDataPromises[s]){if(Ct(h.dedupe??t.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((h._initial||a.isHydrating&&h._initial!==!1)&&u())return Promise.resolve(t.getCachedData(s,a));i.pending.value=!0,i.status.value="pending";const m=new Promise((_,f)=>{try{_(o(a))}catch(g){f(g)}}).then(async _=>{if(m.cancelled)return a._asyncDataPromises[s];let f=_;t.transform&&(f=await t.transform(_)),t.pick&&(f=Pt(f,t.pick)),a.payload.data[s]=f,i.data.value=f,i.error.value=null,i.status.value="success"}).catch(_=>{if(m.cancelled)return a._asyncDataPromises[s];i.error.value=G(_),i.data.value=N(t.default()),i.status.value="error"}).finally(()=>{m.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=m,a._asyncDataPromises[s]},i.clear=()=>kt(a,s);const y=()=>i.refresh({_initial:!0}),l=t.server!==!1&&a.payload.serverRendered;{const h=Q();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const f=h._nuxtOnBeforeMountCbs;q(()=>{f.forEach(g=>{g()}),f.splice(0,f.length)}),I(()=>f.splice(0,f.length))}l&&a.isHydrating&&(i.error.value||u())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):h&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(y):t.immediate&&y();const m=X();if(t.watch){const f=J(t.watch,()=>i.refresh());m&&U(f)}const _=a.hook("app:data:refresh",async f=>{(!f||f.includes(s))&&await i.refresh()});m&&U(_)}const b=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(b,i),b}function kt(r,n){n in r.payload.data&&(r.payload.data[n]=void 0),n in r.payload._errors&&(r.payload._errors[n]=null),r._asyncData[n]&&(r._asyncData[n].data.value=void 0,r._asyncData[n].error.value=null,r._asyncData[n].pending.value=!1,r._asyncData[n].status.value="idle"),n in r._asyncDataPromises&&(r._asyncDataPromises[n].cancelled=!0,r._asyncDataPromises[n]=void 0)}function Pt(r,n){const s={};for(const e of n)s[e]=r[e];return s}function zt(r,n,s){const[e={},t]=[{},n],a=Y(()=>B(r)),o=e.key||wt([t,typeof a.value=="string"?a.value:"",...Ot(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);const d=o===t?"$f"+o:o;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:u,default:i,transform:y,pick:l,watch:b,immediate:D,getCachedData:h,deep:m,dedupe:_,...f}=e,g=Z({...tt,...f,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:c,lazy:u,default:i,transform:y,pick:l,immediate:D,getCachedData:h,deep:m,dedupe:_,watch:b===!1?[]:[g,a,...b||[]]};let p;return $t(d,()=>{var M;(M=p==null?void 0:p.abort)==null||M.call(p),p=typeof AbortController<"u"?new AbortController:{};const F=B(e.timeout);return F&&setTimeout(()=>p.abort(),F),(e.$fetch||globalThis.$fetch)(a.value,{signal:p.signal,...g})},k)}function Ot(r){var s;const n=[((s=B(r.method))==null?void 0:s.toUpperCase())||"GET",B(r.baseURL)];for(const e of[r.params||r.query]){const t=B(e);if(!t)continue;const a={};for(const[o,d]of Object.entries(t))a[B(o)]=B(d);n.push(a)}return n}const Ft={class:"main-container"},Mt=C("h3",null,"Main Component",-1),Ut=["onUpdate:modelValue"],Ht={__name:"Main",async setup(r){let n,s;const{data:e}=([n,s]=et(()=>zt("/api/todo","$cDy7UMukGa")),n=await n,s(),n);return(t,a)=>(x(),S("div",Ft,[Mt,(x(!0),S(st,null,rt(N(e).data,o=>(x(),S("div",{class:"main-list",key:o.id},[nt(C("input",{type:"checkbox","onUpdate:modelValue":d=>o.completed=d},null,8,Ut),[[at,o.completed]]),C("strong",null,ot(o.title),1)]))),128))]))}},jt={props:{},setup(r){}},Lt={class:"container"},Nt=C("h3",null,"Footer Component",-1),Rt=[Nt];function Kt(r,n,s,e,t,a){return x(),S("div",Lt,Rt)}const Et=z(jt,[["render",Kt]]),Tt={layout:!1,props:{},setup(r){}},Vt={class:"container"};function At(r,n,s,e,t,a){const o=E,d=St,c=Ht,u=Et;return x(),S("div",Vt,[$(o,{name:"home"}),$(d),$(c),$(u)])}const Wt=z(Tt,[["render",At]]);export{Wt as default};
