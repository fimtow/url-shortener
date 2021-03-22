var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n){t.value=null==n?"":n}let h;function m(t){h=t}const $=[],b=[],g=[],y=[],_=Promise.resolve();let v=!1;function x(t){g.push(t)}let k=!1;const E=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),L(n.$$)}for(m(null),$.length=0;b.length;)b.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];E.has(n)||(E.add(n),n())}g.length=0}while($.length);for(;y.length;)y.pop()();v=!1,k=!1,E.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const T=new Set;function j(t,n){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,_.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(r,c,i,l,u,f,p=[-1]){const d=h;m(r);const $=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:p,skip_bound:!1};let b=!1;if($.ctx=i?i(r,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&j(r,t)),n})):[],$.update(),b=!0,o($.before_update),$.fragment=!!l&&l($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();c.intro&&((g=r.$$.fragment)&&g.i&&(T.delete(g),g.i(y))),function(t,e,r,c){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),c||x((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(x)}(r,c.target,c.anchor,c.customElement),w()}var g,y;m(d)}function C(n){let e,s,r,h,m,$,b,g,y,_,v,x,k,E,w,L,T;return{c(){e=l("link"),s=u(),r=l("div"),h=l("div"),m=l("h1"),m.textContent="URL shortener",$=u(),b=l("div"),g=l("p"),y=l("input"),_=u(),v=l("span"),v.innerHTML='<i class="fas fa-link"></i>',x=u(),k=l("button"),k.innerHTML='<span class="icon"><i class="fas fa-compress-alt"></i></span> \n\t\t\t<span>Shrink</span>',E=u(),w=l("button"),w.innerHTML='<span class="icon"><i class="far fa-copy"></i></span> \n\t\t\t<span>Copy</span>',p(e,"rel","stylesheet"),p(e,"href","https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"),p(m,"class","title is-1"),p(y,"class","input is-normal is-primary"),p(y,"type","text"),p(y,"placeholder","Enter URL"),p(v,"class","icon is-small is-left"),p(g,"class","control has-icons-left"),p(b,"class","field"),p(k,"class","button is-primary"),p(k,"type","button"),p(w,"class","button is-primary is-light"),p(w,"type","button"),p(h,"class","column is-half"),p(r,"class","columns is-centered")},m(t,o){i(t,e,o),i(t,s,o),i(t,r,o),c(r,h),c(h,m),c(h,$),c(h,b),c(b,g),c(g,y),d(y,n[0]),c(g,_),c(g,v),c(h,x),c(h,k),c(h,E),c(h,w),L||(T=[f(y,"input",n[3]),f(k,"click",n[1]),f(w,"click",n[2])],L=!0)},p(t,[n]){1&n&&y.value!==t[0]&&d(y,t[0])},i:t,o:t,d(t){t&&a(e),t&&a(s),t&&a(r),L=!1,o(T)}}}function O(t,n,e){let o;return[o,async function(){o.startsWith("http://")||o.startsWith("https://")||e(0,o="http://"+o),(new FormData).append("long_url",o),fetch("https://api-ssl.bitly.com/v4/shorten",{method:"POST",headers:{Authorization:"Bearer edbc38b1ef9b02f03ebc1fdd9637cccce4c46ffa","Content-Type":"application/json"},body:JSON.stringify({long_url:o})}).then((t=>t.json())).then((t=>e(0,o=t.link)))},()=>{navigator.clipboard.writeText(o)},function(){o=this.value,e(0,o)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,O,C,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
