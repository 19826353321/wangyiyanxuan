import{Q as z,T as G,U as F,V as B,W as K,R as C,X as N,Y as M,Z as X,s as T,p,b as L,r as m,d as x,j as d,L as R,E as V,F as H,f as Y,G as Z,c as A}from"./index.d897f267.js";function w(s,r){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},w(s,r)}const J=()=>s=>Promise.all([z()]).then(([r])=>{s(te(r))}),ee=s=>r=>{r(se(s))},te=s=>({type:G,data:s}),se=s=>({type:F,data:s}),ne=()=>s=>{B().then(r=>{s(re(r))})},re=s=>({type:K,data:s});function Q(s,r){s.prototype=Object.create(r.prototype),s.prototype.constructor=s,w(s,r)}function ae(s,r){return s.classList?!!r&&s.classList.contains(r):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+r+" ")!==-1}function ie(s,r){s.classList?s.classList.add(r):ae(s,r)||(typeof s.className=="string"?s.className=s.className+" "+r:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+r))}function I(s,r){return s.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function oe(s,r){s.classList?s.classList.remove(r):typeof s.className=="string"?s.className=I(s.className,r):s.setAttribute("class",I(s.className&&s.className.baseVal||"",r))}var P={disabled:!1},q=C.createContext(null),U=function(r){return r.scrollTop},b="unmounted",E="exited",g="entering",y="entered",D="exiting",v=function(s){Q(r,s);function r(e,n){var t;t=s.call(this,e,n)||this;var i=n,a=i&&!i.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?a?(o=E,t.appearStatus=g):o=y:e.unmountOnExit||e.mountOnEnter?o=b:o=E,t.state={status:o},t.nextCallback=null,t}r.getDerivedStateFromProps=function(n,t){var i=n.in;return i&&t.status===b?{status:E}:null};var c=r.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(n){var t=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==g&&i!==y&&(t=g):(i===g||i===y)&&(t=D)}this.updateStatus(!1,t)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var n=this.props.timeout,t,i,a;return t=i=a=n,n!=null&&typeof n!="number"&&(t=n.exit,i=n.enter,a=n.appear!==void 0?n.appear:i),{exit:t,enter:i,appear:a}},c.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);i&&U(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:b})},c.performEnter=function(n){var t=this,i=this.props.enter,a=this.context?this.context.isMounting:n,o=this.props.nodeRef?[a]:[N.findDOMNode(this),a],l=o[0],f=o[1],u=this.getTimeouts(),h=a?u.appear:u.enter;if(!n&&!i||P.disabled){this.safeSetState({status:y},function(){t.props.onEntered(l)});return}this.props.onEnter(l,f),this.safeSetState({status:g},function(){t.props.onEntering(l,f),t.onTransitionEnd(h,function(){t.safeSetState({status:y},function(){t.props.onEntered(l,f)})})})},c.performExit=function(){var n=this,t=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:N.findDOMNode(this);if(!t||P.disabled){this.safeSetState({status:E},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:D},function(){n.props.onExiting(a),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(a)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},c.setNextCallback=function(n){var t=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,t.nextCallback=null,n(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},c.onTransitionEnd=function(n,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=o[0],f=o[1];this.props.addEndListener(l,f)}n!=null&&setTimeout(this.nextCallback,n)},c.render=function(){var n=this.state.status;if(n===b)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=M(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return C.createElement(q.Provider,{value:null},typeof i=="function"?i(n,a):C.cloneElement(C.Children.only(i),a))},r}(C.Component);v.contextType=q;v.propTypes={};function S(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S};v.UNMOUNTED=b;v.EXITED=E;v.ENTERING=g;v.ENTERED=y;v.EXITING=D;var ce=v,le=function(r,c){return r&&c&&c.split(" ").forEach(function(e){return ie(r,e)})},O=function(r,c){return r&&c&&c.split(" ").forEach(function(e){return oe(r,e)})},_=function(s){Q(r,s);function r(){for(var e,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return e=s.call.apply(s,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(a,o){var l=e.resolveArguments(a,o),f=l[0],u=l[1];e.removeClasses(f,"exit"),e.addClass(f,u?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(a,o)},e.onEntering=function(a,o){var l=e.resolveArguments(a,o),f=l[0],u=l[1],h=u?"appear":"enter";e.addClass(f,h,"active"),e.props.onEntering&&e.props.onEntering(a,o)},e.onEntered=function(a,o){var l=e.resolveArguments(a,o),f=l[0],u=l[1],h=u?"appear":"enter";e.removeClasses(f,h),e.addClass(f,h,"done"),e.props.onEntered&&e.props.onEntered(a,o)},e.onExit=function(a){var o=e.resolveArguments(a),l=o[0];e.removeClasses(l,"appear"),e.removeClasses(l,"enter"),e.addClass(l,"exit","base"),e.props.onExit&&e.props.onExit(a)},e.onExiting=function(a){var o=e.resolveArguments(a),l=o[0];e.addClass(l,"exit","active"),e.props.onExiting&&e.props.onExiting(a)},e.onExited=function(a){var o=e.resolveArguments(a),l=o[0];e.removeClasses(l,"exit"),e.addClass(l,"exit","done"),e.props.onExited&&e.props.onExited(a)},e.resolveArguments=function(a,o){return e.props.nodeRef?[e.props.nodeRef.current,a]:[a,o]},e.getClassNames=function(a){var o=e.props.classNames,l=typeof o=="string",f=l&&o?o+"-":"",u=l?""+f+a:o[a],h=l?u+"-active":o[a+"Active"],$=l?u+"-done":o[a+"Done"];return{baseClassName:u,activeClassName:h,doneClassName:$}},e}var c=r.prototype;return c.addClass=function(n,t,i){var a=this.getClassNames(t)[i+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;t==="appear"&&i==="done"&&l&&(a+=" "+l),i==="active"&&n&&U(n),a&&(this.appliedClasses[t][i]=a,le(n,a))},c.removeClasses=function(n,t){var i=this.appliedClasses[t],a=i.base,o=i.active,l=i.done;this.appliedClasses[t]={},a&&O(n,a),o&&O(n,o),l&&O(n,l)},c.render=function(){var n=this.props;n.classNames;var t=M(n,["classNames"]);return C.createElement(ce,X({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(C.Component);_.defaultProps={classNames:""};_.propTypes={};var de=_;const pe=T.div`
  
   position:fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   /* width: 100%; */
	overflow-y: overlay;
	/* overflow-x:overlay ; */

   /* width: 15rem; */
   padding:0  ${p(10)};
    /* top: 0;
    left:0;
    right:0;
    bottom:0; */
    width: 100%;
    z-index: 1;
    overflow: hidden;
    /* background: #f2f3f4; */
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
   &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .position-box{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        left: ${p(0)};
        top: ${p(50)};
    }
    .search-item-box{
        z-index: 101;
    }
    .search-body-box{
        z-index: 100;
    }
    /* .none{
        display: none;
    } */
   
`,ue=(s,r)=>{let c;return function(...e){c&&clearTimeout(c),c=setTimeout(()=>{s.apply(this,e),clearTimeout(c)},r)}},fe=T.div`
    display:flex;
    align-items: center;
    height: ${p(44)};
    border-bottom: ${p(1)} solid black;
    font-size: ${L["font-size-m"]};
    .search-box{
        padding:  ${p(5)} 0;
        flex:1;
        display: flex;
        justify-content: space-between;
        background-color: #ededed;
        border-radius: ${p(17)};     
        .icon-sousuo{
            font-size: ${p(16)};
            margin-left: ${p(5)};
        }
        &>input{
            flex:1;
            border:0;
            padding: 0 ${p(5)};
            border-radius: ${p(17)};
            font-size: ${L["font-size-l"]};
            background-color: #ededed;
        }
        .icon-quxiao{
            padding-right: ${p(10)};
        }                 
    }
   .back{
        margin-left:${p(10)};
    }   
`,he=s=>{const{newQuery:r}=s,{handleQuery:c,back:e}=s,n=m.exports.useRef(),[t,i]=m.exports.useState("");let a=m.exports.useMemo(()=>ue(c,500),[c]);return m.exports.useEffect(()=>{n.current.focus()},[]),m.exports.useEffect(()=>{a(t)},[t]),m.exports.useEffect(()=>{let u=t;r!==t&&(u=r,n.current.value=r),i(u)},[r]),x(fe,{children:[x("div",{className:"search-box",children:[d("i",{className:"iconfont icon-sousuo"}),d("input",{type:"text",placeholder:"\u641C\u7D22\u5185\u5BB9",ref:n,onChange:u=>{let h=u.currentTarget.value;i(h)}}),d("i",{className:"iconfont icon-quxiao",style:t?{display:"block"}:{display:"none"},onClick:()=>{i(""),n.current.value="",n.current.focus()}})]}),d("div",{className:"back",onClick:()=>e(),children:"\u53D6\u6D88"})]})},me=T.div`
  .search-item{
    padding:${p(10)} 0;
    border-bottom: ${p(1)} solid black;
    .query-word{
      color:red;
    }
  }

`,ve=s=>{const{query:r,searchList:c,keywords:e,addOldSearchList:n}=s;return d(me,{children:e.map((t,i)=>d(R,{to:{pathname:`/searchDetail/${i}`},children:new RegExp("^.*"+r+".*$").test(t)?x("div",{onClick:()=>{n(t)},className:"search-item",children:[t.split(r)[0],d("span",{className:"query-word",children:r}),t.split(r)[1]]}):d(V,{})},i))})},W=T.div`
    color:${L["font-color-dark"]};
    .old-search-header{
        margin: ${p(10)};
        .old-search-title{
            font-weight: 700;
        }
    }
   .old-search-body{
    display: flex;
    flex-wrap: wrap;
        .old-search-body-item{
            padding: ${p(5)} ${p(10)};
            margin-right: ${p(20)};
            margin-bottom: ${p(10)};
            border-radius: ${p(15.5)};
            background-color: #f4f4f4;

        }
   }
`,xe=s=>{const{oldSearchList:r,keywords:c}=s;return x(W,{children:[x(H,{className:"old-search-header",children:[d("div",{className:"old-search-title",children:"\u5386\u53F2\u8BB0\u5F55"}),d("i",{children:"1"})]}),d("div",{className:"old-search-body",children:r.map((e,n)=>d(R,{to:{pathname:`/searchDetail/${c.indexOf(e)}`},children:d("div",{className:"old-search-body-item",children:e})},n))})]})},Ee=s=>{const{keywords:r}=s;return x(W,{children:[d("div",{className:"old-search-header",children:d("div",{className:"old-search-title",children:"\u63A8\u8350\u641C\u7D22"})}),d("div",{className:"old-search-body",children:r.map((c,e)=>d(R,{to:{pathname:`/searchDetail/${e}`},children:d("span",{className:"old-search-body-item",children:c},e)},e))})]})},ge=s=>{const{searchList:r,keywords:c,oldSearchList:e}=s,{getSearchListDispatch:n,getKeywordsDispatch:t,setOldSearchDispatch:i}=s,a=Z(),[o,l]=m.exports.useState(""),[f,u]=m.exports.useState(!1);m.exports.useEffect(()=>{u(!0),t()},[]);const h=()=>{u(!1)},$=k=>{l(k)},j=k=>{i(k)};return d(de,{in:f,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{a(-1)},children:x(pe,{children:[d(he,{back:h,newQuery:o,handleQuery:$}),x("div",{className:A("position-box","search-body-box"),children:[d(xe,{oldSearchList:e,keywords:c}),d(Ee,{keywords:c})]}),d("div",{className:A("position-box",{"search-item-box":o}),children:d(ve,{searchList:r,keywords:c,query:o,addOldSearchList:j})})]})})},Ce=s=>({searchList:s.search.searchList,keywords:s.home.keywords,oldSearchList:s.search.oldSearchList}),Se=s=>({getSearchListDispatch(){s(J())},getKeywordsDispatch(){s(ne())},setOldSearchDispatch(r){s(ee(r))}});var be=m.exports.memo(Y(Ce,Se)(ge));export{be as default};
