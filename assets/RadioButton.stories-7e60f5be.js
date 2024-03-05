import{a,F as s,j as r}from"./jsx-runtime-86dfebf6.js";import{R as e}from"./RadioButton-33f38344.js";import"./index-1b03fe98.js";import"./index-ac76e34c.js";const m={title:"Controls / RadioButton",component:e},t={render:o=>a(s,{children:[r("h1",{children:"Radio button"}),a("div",{className:"thuiStorybook__block",children:[r("div",{className:"thuiStorybook__label",children:"RadioButton"}),a("div",{className:"thuiStorybook__row",children:[r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,children:"Default"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,defaultChecked:!0,children:"Checked"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,disabled:!0,children:"Disabled"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,disabled:!0,defaultChecked:!0,children:"Disabled checked"})})]})]})]})};var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (arg: RadioButtonProps) => {
    return <>\r
        <h1>Radio button</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">RadioButton</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg}>Default</Component>\r
            </div>\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg} defaultChecked={true}>\r
                Checked\r
              </Component>\r
            </div>\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg} disabled>\r
                Disabled\r
              </Component>\r
            </div>\r
            <div className="thuiStorybook__switcher-wrapper">\r
              <Component {...arg} disabled defaultChecked={true}>\r
                  Disabled checked\r
              </Component>\r
            </div>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const p=["RadioButton"];export{t as RadioButton,p as __namedExportsOrder,m as default};
