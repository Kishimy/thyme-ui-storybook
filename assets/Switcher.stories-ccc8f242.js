import{a,j as e,F as b}from"./jsx-runtime-86dfebf6.js";import{r as c}from"./index-1b03fe98.js";import{c as s}from"./index-ac76e34c.js";const t=c.memo(c.forwardRef(({checked:r,initialState:u=!1,disabled:n,onSwitch:p=()=>null,className:m,children:o},_)=>{const S=s(["thuiSwitcher",m]);return a("div",{className:S,ref:_,children:[a("label",{className:"thuiSwitcher__wrapper",children:[e("input",{className:"thuiSwitcher__input",checked:r,onChange:w=>{p(w.target.checked)},defaultChecked:u,type:"checkbox",disabled:n}),e("span",{className:"thuiSwitcher__slider"})]}),o&&e("span",{className:s("thuiSwitcher__text",{"thuiSwitcher__text--disabled":n}),children:o})]})}));try{t.displayName="Switcher",t.__docgenInfo={description:"",displayName:"Switcher",props:{onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!1,type:{name:"((value: boolean) => void)"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Controls / Switcher",component:t},i={render:r=>a(b,{children:[e("h1",{children:"Switcher"}),a("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Checkbox"}),a("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,children:"Default"})}),e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,initialState:!0,children:"Checked"})}),e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,disabled:!0,children:"Disabled"})})]})]})]})};var l,d,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (arg: SwitcherProps) => {
    return <>\r
        <h1>Switcher</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Checkbox</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg}>Default</Component>\r
            </div>\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg} initialState={true}>\r
                Checked\r
              </Component>\r
            </div>\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg} disabled>\r
                Disabled\r
              </Component>\r
            </div>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const C=["Switcher"];export{i as Switcher,C as __namedExportsOrder,f as default};
//# sourceMappingURL=Switcher.stories-ccc8f242.js.map
