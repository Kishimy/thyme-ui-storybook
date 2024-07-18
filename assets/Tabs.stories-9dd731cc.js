import{j as e,a as r,F as L}from"./jsx-runtime-86dfebf6.js";import{r as i}from"./index-1b03fe98.js";import{c as f}from"./index-ac76e34c.js";const j=()=>{const[n,l]=i.useState("");return i.useEffect(()=>{l(`thui-tabs-${Math.round(Math.random()*1e5)}`)},[]),n},D=i.createContext({prefix:"",activeTab:"",onTabChange:()=>{}}),z=({children:n,value:l})=>{const d=j();return e(D.Provider,{value:{...l,prefix:d},children:n})},q=()=>i.useContext(D),R=(n,l)=>`${n}-tab-${l}`,M=(n,l)=>`${n}-panel-${l}`;try{z.displayName="TabsContext",z.__docgenInfo={description:"",displayName:"TabsContext",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TabContextValue"}}}}}catch{}const V="thuiTab",k=({value:n,label:l=n,size:d="md",inactive:v=!1,className:T,renderTab:h})=>{const{prefix:p,activeTab:s,onTabChange:S}=q(),m=i.useMemo(()=>n===s,[n,s]),P=f(V,{[`${V}__selected`]:m},`${V}--${d}`,T);return e("button",{role:"tab",id:R(p,n),tabIndex:m?0:-1,disabled:v,"aria-disabled":v,"aria-selected":m,"aria-controls":M(p,n),onClick:()=>S(n),className:P,children:h?h():l})};try{k.displayName="Tab",k.__docgenInfo={description:"",displayName:"Tab",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},renderTab:{defaultValue:null,description:"",name:"renderTab",required:!1,type:{name:"(() => string | ReactElement<any, string | JSXElementConstructor<any>>)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},inactive:{defaultValue:{value:"false"},description:"",name:"inactive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _="thuiTabList",w=({direction:n="horizontal",size:l="md",disabled:d=!1,className:v,children:T})=>{const h=f(_,`${_}--${n}`,`${_}--${l}`,v),{activeTab:p}=q(),[s,S]=i.useState({left:0,top:0,width:0,height:0}),m=i.useRef(null),P=i.useMemo(()=>n==="horizontal"?"ArrowLeft":"ArrowUp",[n]),g=i.useMemo(()=>n==="horizontal"?"ArrowRight":"ArrowDown",[n]),A=i.useMemo(()=>i.Children.map(T,t=>!i.isValidElement(t)||t.type!==k?null:i.cloneElement(t,{...t.props,...d&&{inactive:!0,ariaDisabled:!0},size:l})),[T,d,l]);i.useEffect(()=>{var o;const t=(o=m.current)==null?void 0:o.querySelector('[aria-selected="true"]');S({left:(t==null?void 0:t.offsetLeft)??0,top:(t==null?void 0:t.offsetTop)??0,width:(t==null?void 0:t.offsetWidth)??0,height:(t==null?void 0:t.offsetHeight)??0})},[p]);const y=t=>{let o;const c=m.current;return c?(t===c.firstElementChild?o=c.lastElementChild:o=t==null?void 0:t.previousElementSibling,(o==null?void 0:o.ariaDisabled)==="true"?y(o):o):null},N=t=>{let o;const c=m.current;return c?(t===c.lastElementChild?o=c.firstElementChild:o=t==null?void 0:t.nextElementSibling,(o==null?void 0:o.ariaDisabled)==="true"?N(o):o):null};return r(L,{children:[e("div",{ref:m,className:h,role:"tablist","aria-orientation":n,onKeyDown:t=>{var Y,$;(t.key===P||t.key===g)&&t.preventDefault();const o=document.activeElement,c=m.current,H=o==null?void 0:o.getAttribute("role");if(!o||H!=="tab"||!(c!=null&&c.contains(o)))return null;switch(t.key){case P:{(Y=y(o))==null||Y.focus();break}case g:{($=N(o))==null||$.focus();break}}},children:A}),e("div",{className:f(`${_}__line`,`${_}__line--${n}`),children:e("div",{className:f(`${_}__indicator`,`${_}__indicator--${n}`),style:{...n==="horizontal"?{left:s==null?void 0:s.left,width:s==null?void 0:s.width}:{top:s==null?void 0:s.top,height:s==null?void 0:s.height}}})})]})};try{w.displayName="TabList",w.__docgenInfo={description:"",displayName:"TabList",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K="thuiTabs",b=i.memo(i.forwardRef(({tabs:n,value:l,defaultValue:d,renderTab:v,direction:T="horizontal",size:h="md",disabled:p=!1,onChange:s,className:S,children:m},P)=>{const g=f(K,S),A=i.useMemo(()=>e(w,{initialValue:l,direction:T,size:h,disabled:p,children:n.map(c=>e(k,{renderTab:v?()=>v(c):void 0,...c},c.value))}),[l,T,h,p,n,v]),[y,N]=i.useState(d??l??n[0].value),x=i.useMemo(()=>l!=null,[l]),t=i.useCallback(c=>{!x&&N(c),s==null||s(c)},[x,s]),o=i.useMemo(()=>({activeTab:l??y,onTabChange:t}),[l,y,t]);return e(z,{value:o,children:r("div",{ref:P,className:g,children:[A,m]})})}));try{b.displayName="Tabs",b.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},renderTab:{defaultValue:null,description:"",name:"renderTab",required:!1,type:{name:"((tab: Tab) => string | ReactElement<any, string | JSXElementConstructor<any>>)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const W="thuiTabPanel",a=({children:n,value:l,className:d})=>{const v=f(W,d),{activeTab:T,prefix:h}=q();return e("div",{id:M(h,l),className:v,role:"tabpanel",tabIndex:0,"aria-labelledby":R(h,l),hidden:T!==l,children:n})};try{a.displayName="TabPanel",a.__docgenInfo={description:"",displayName:"TabPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Controls / Tabs",component:b},u=[{value:"1",label:"Tab 1"},{value:"2",label:"Tab 2"},{value:"3",label:"Tab 3"},{value:"4",label:"Tab 4"}],J="2",U=[{value:"1",label:"Tab 1"},{value:"2",label:"Tab 2"},{value:"3",label:"Tab 3",inactive:!0},{value:"4",label:"Tab 4"}],C={render:()=>{const[n,l]=i.useState(u[0].value);return r(L,{children:[e("h1",{children:"Tabs"}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Controlled and uncontrolled"}),r("div",{className:"thuiStorybook__column",children:[r(b,{tabs:u,defaultValue:J,children:[e(a,{value:"1",children:"Tab 2 has important content and is set as initial"}),e(a,{value:"2",children:"This is uncontrolled..."}),e(a,{value:"3",children:"...tabs component..."}),e(a,{value:"4",children:"...with initial state"})]}),r(b,{tabs:u,value:n,onChange:d=>{console.log(`Changed to tab ${d}`),l(d)},children:[e(a,{value:"1",children:"This is controlled..."}),e(a,{value:"2",children:"...tabs component..."}),e(a,{value:"3",children:"...with initial state"}),e(a,{value:"4",children:"Blah blah"})]})]})]}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Horizontal"}),r("div",{className:"thuiStorybook__column",children:[r(b,{tabs:u,size:"xs",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"sm",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"md",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"lg",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]})]}),e("div",{className:"thuiStorybook__row",children:r(b,{tabs:u,size:"xl",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]})})]}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Vertical"}),r("div",{className:"thuiStorybook__row",children:[r(b,{tabs:u,size:"xs",direction:"vertical",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"sm",direction:"vertical",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"md",direction:"vertical",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"lg",direction:"vertical",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]}),r(b,{tabs:u,size:"xl",direction:"vertical",children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]})]})]}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Custom renderTab function"}),e("div",{className:"thuiStorybook__row",children:r(b,{tabs:u,renderTab:d=>r("span",{children:["Tab ",e("b",{children:d.value})," ",e("i",{children:"custom render func"})]}),children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]})})]}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__row",children:r(b,{tabs:u,disabled:!0,children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"3",children:"Some tab content again"}),e(a,{value:"4",children:"And some more"})]})})]}),r("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Inactive tab"}),e("div",{className:"thuiStorybook__row",children:r(b,{tabs:U,children:[e(a,{value:"1",children:"Tab content"}),e(a,{value:"2",children:"Yet another tab content"}),e(a,{value:"4",children:"Some tab content again"})]})})]})]})}};var B,I,E;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState(TABS[0].value);
    return <>\r
        <h1>Tabs</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Controlled and uncontrolled</div>\r
          <div className="thuiStorybook__column">\r
            <Component tabs={TABS} defaultValue={INITIAL_TAB}>\r
              <TabPanel value="1">Tab 2 has important content and is set as initial</TabPanel>\r
              <TabPanel value="2">This is uncontrolled...</TabPanel>\r
              <TabPanel value="3">...tabs component...</TabPanel>\r
              <TabPanel value="4">...with initial state</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} value={activeTab} onChange={value => {
            // eslint-disable-next-line no-console
            console.log(\`Changed to tab \${value}\`);
            setActiveTab(value);
          }}>\r
              <TabPanel value="1">This is controlled...</TabPanel>\r
              <TabPanel value="2">...tabs component...</TabPanel>\r
              <TabPanel value="3">...with initial state</TabPanel>\r
              <TabPanel value="4">Blah blah</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Horizontal</div>\r
          <div className="thuiStorybook__column">\r
            <Component tabs={TABS} size="xs">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="sm">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="md">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="lg">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
          </div>\r
\r
          <div className="thuiStorybook__row">\r
            <Component tabs={TABS} size="xl">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Vertical</div>\r
          <div className="thuiStorybook__row">\r
            <Component tabs={TABS} size="xs" direction="vertical">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="sm" direction="vertical">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="md" direction="vertical">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="lg" direction="vertical">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
\r
            <Component tabs={TABS} size="xl" direction="vertical">\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Custom renderTab function</div>\r
          <div className="thuiStorybook__row">\r
            <Component tabs={TABS} renderTab={tab => <span>\r
                  Tab <b>{tab.value}</b> <i>custom render func</i>\r
                </span>}>\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled</div>\r
          <div className="thuiStorybook__row">\r
            <Component tabs={TABS} disabled>\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="3">Some tab content again</TabPanel>\r
              <TabPanel value="4">And some more</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Inactive tab</div>\r
          <div className="thuiStorybook__row">\r
            <Component tabs={TABS_WITH_INACTIVE}>\r
              <TabPanel value="1">Tab content</TabPanel>\r
              <TabPanel value="2">Yet another tab content</TabPanel>\r
              <TabPanel value="4">Some tab content again</TabPanel>\r
            </Component>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(E=(I=C.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Z=["Tabs"];export{C as Tabs,Z as __namedExportsOrder,Q as default};
//# sourceMappingURL=Tabs.stories-9dd731cc.js.map
