import{a as n,F as s,j as r}from"./jsx-runtime-86dfebf6.js";import{R as e}from"./RadioButton-2f22e7c2.js";import"./index-1b03fe98.js";import"./index-ac76e34c.js";const p={title:"Controls / RadioButton",component:e},t={render:o=>n(s,{children:[r("h1",{children:"Radio button"}),n("div",{className:"thuiStorybook__block",children:[r("div",{className:"thuiStorybook__label",children:"RadioButton"}),n("div",{className:"thuiStorybook__row",children:[r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,children:"Default"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,defaultChecked:!0,children:"Checked"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,hasError:!0,children:"Error"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,disabled:!0,children:"Disabled"})}),r("div",{className:"thuiStorybook__switcher-wrapper",children:r(e,{...o,disabled:!0,defaultChecked:!0,children:"Disabled checked"})})]})]})]})};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
              <Component {...arg} hasError>\r
                Error\r
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
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const m=["RadioButton"];export{t as RadioButton,m as __namedExportsOrder,p as default};
//# sourceMappingURL=RadioButton.stories-bc87913e.js.map
