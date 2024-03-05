import{a as i,j as e,F as q}from"./jsx-runtime-86dfebf6.js";import{r as d}from"./index-1b03fe98.js";import{c as x}from"./index-ac76e34c.js";import{L as C}from"./Label-5e5fbcee.js";import"./Typography-c4280c0f.js";const r="thuiInputText",n=d.memo(d.forwardRef((a,t)=>{const{id:u,name:l,label:o,size:y="md",isInvalid:f,isRequired:g=!1,className:N,disabled:c,value:p,onChange:m,error:b,...k}=a,S=x(r,N,`${r}--${y}`,{[`${r}--invalid`]:f,[`${r}--filled`]:!!p}),I=!m?{}:{value:p,onChange:m};return i("div",{className:S,children:[e("input",{ref:t,id:u,name:l,className:`${r}__input`,disabled:c,...I,...k}),o&&e(C,{label:o,htmlFor:l,isRequired:g,className:`${r}__label`,disabled:c}),b&&e("div",{className:`${r}__error`,children:b})]})}));try{n.displayName="InputText",n.__docgenInfo={description:"",displayName:"InputText",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},type:{defaultValue:null,description:"Type of input",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}},disabled:{defaultValue:null,description:"Disabled flag",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max length of field value",name:"maxLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"name for input",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size of input",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'}]}},value:{defaultValue:null,description:"Input value",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}},className:{defaultValue:null,description:"Custom class names",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Id for input",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Required flag",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Show invalid style",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Controls / InputText",component:n},s={render:a=>{const[t,u]=d.useState(""),l=o=>{u(o.target.value)};return i(q,{children:[e("h1",{children:"InputText"}),i("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Default"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Placeholder",value:t,onChange:l,...a})})]}),i("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Invalid"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",isInvalid:!0,value:t,onChange:l,error:"Error message",...a})})]}),i("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Required"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",isRequired:!0,value:t,onChange:l,...a})})]}),i("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",disabled:!0,value:t,onChange:l,...a})})]})]})}};var v,h,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (arg: InputProps) => {
    const [value, setValue] = useState('');
    const onChange = (e: InputTextChangeEvent) => {
      setValue(e.target.value);
    };
    return <>\r
        <h1>InputText</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Default</div>\r
          <div className="thuiStorybook__input-wrapper">\r
            <Component label="Label" placeholder="Placeholder" value={value} onChange={onChange} {...arg} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Invalid</div>\r
          <div className="thuiStorybook__input-wrapper">\r
            <Component label="Label" isInvalid value={value} onChange={onChange} error="Error message" {...arg} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Required</div>\r
          <div className="thuiStorybook__input-wrapper">\r
            <Component label="Label" isRequired value={value} onChange={onChange} {...arg} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled</div>\r
          <div className="thuiStorybook__input-wrapper">\r
            <Component label="Label" disabled value={value} onChange={onChange} {...arg} />\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const D=["InputText"];export{s as InputText,D as __namedExportsOrder,E as default};
