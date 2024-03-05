import{a,j as e,F as k}from"./jsx-runtime-86dfebf6.js";import{r as c}from"./index-1b03fe98.js";import{c as s}from"./index-ac76e34c.js";const t=c.memo(c.forwardRef((r,u)=>{const{checked:m,initialState:p=!1,disabled:n,onSwitch:_=()=>null,className:S,children:o}=r,w=s(["thuiSwitcher",S]);return a("div",{className:w,ref:u,children:[a("label",{className:"thuiSwitcher__wrapper",children:[e("input",{className:"thuiSwitcher__input",checked:m,onChange:b=>{_(b.target.checked)},defaultChecked:p,type:"checkbox",disabled:n}),e("span",{className:"thuiSwitcher__slider"})]}),o&&e("span",{className:s("thuiSwitcher__text",{"thuiSwitcher__text--disabled":n}),children:o})]})}));try{t.displayName="Switcher",t.__docgenInfo={description:"",displayName:"Switcher",props:{onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!1,type:{name:"((value: boolean) => void)"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C={title:"Controls / Switcher",component:t},i={render:r=>a(k,{children:[e("h1",{children:"Switcher"}),a("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Checkbox"}),a("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,children:"Default"})}),e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,initialState:!0,children:"Checked"})}),e("div",{className:"thuiStorybook__switcher-wrapper",children:e(t,{...r,disabled:!0,children:"Disabled"})})]})]})]})};var l,d,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const g=["Switcher"];export{i as Switcher,g as __namedExportsOrder,C as default};
