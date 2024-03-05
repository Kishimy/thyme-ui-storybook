import{a as l,F as i,j as e}from"./jsx-runtime-86dfebf6.js";import{L as a}from"./Label-5e5fbcee.js";import"./index-1b03fe98.js";import"./index-ac76e34c.js";import"./Typography-c4280c0f.js";const p={title:"Controls / Label",component:a},r={render:o=>l(i,{children:[e("h1",{children:"Label"}),l("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Label"}),l("div",{className:"thuiStorybook__column",children:[e(a,{...o,label:"Default"}),e(a,{disabled:!0,...o,label:"Disabled"}),e(a,{isRequired:!0,...o,label:"Required"})]})]})]})};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (arg: LabelProps) => {
    return <>\r
        <h1>Label</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Label</div>\r
          <div className="thuiStorybook__column">\r
            <Component {...arg} label="Default" />\r
            <Component disabled {...arg} label="Disabled" />\r
            <Component isRequired {...arg} label="Required" />\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const h=["Label"];export{r as Label,h as __namedExportsOrder,p as default};
