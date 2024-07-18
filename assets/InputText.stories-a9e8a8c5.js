import{j as e,a as t,F as T}from"./jsx-runtime-86dfebf6.js";import{r as u}from"./index-1b03fe98.js";import{c as $}from"./index-ac76e34c.js";import{L as M}from"./Label-6409f5f9.js";import"./Typography-03297c7c.js";const z=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:e("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})}),D=z,r="thuiInputText",n=u.memo(u.forwardRef(({id:a,name:l,label:c,size:o="md",isInvalid:v,isRequired:N=!1,className:S,disabled:h,value:b,onChange:i,error:_,clearable:w=!1,clearIcon:C=D,renderAddonLeft:x,renderAddonRight:I,...q},d)=>{const p=u.useRef(null),L=$(r,S,`${r}--${o}`,{[`${r}--invalid`]:v,[`${r}--filled`]:!!b}),V=!i?{}:{value:b,onChange:i},R=u.useCallback(()=>{var y;const s=(y=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"))==null?void 0:y.set;p.current&&s?(s.call(p.current,""),p.current.dispatchEvent(new Event("change",{bubbles:!0}))):i==null||i({target:{value:""}})},[i]),E=u.useCallback(s=>{p.current=s,typeof d=="function"?d(s):d&&(d.current=s)},[d]);return t("div",{className:L,children:[t("div",{className:`${r}__inputWrapper`,children:[x,e("input",{ref:E,id:a,name:l,className:`${r}__input`,disabled:h,...V,...q}),I,w&&b&&e("div",{className:`${r}__clear`,onClick:R,children:C})]}),c&&e(M,{label:c,htmlFor:l,isRequired:N,className:`${r}__label`,disabled:h}),_&&e("div",{className:`${r}__error`,children:_})]})}));try{n.displayName="InputText",n.__docgenInfo={description:"",displayName:"InputText",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},clearIcon:{defaultValue:null,description:"",name:"clearIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},renderAddonLeft:{defaultValue:null,description:"addon is a place where you can render any content you need",name:"renderAddonLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},renderAddonRight:{defaultValue:null,description:"addon is a place where you can render any content you need",name:"renderAddonRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},type:{defaultValue:null,description:"Type of input",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"email"'},{value:'"tel"'},{value:'"text"'},{value:'"url"'}]}},size:{defaultValue:null,description:"Size of input",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class names",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Id for input",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"name for input",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled flag",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max length of field value",name:"maxLength",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"Input value",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}},isRequired:{defaultValue:null,description:"Required flag",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Show invalid style",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}const j=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"})}),A=j,H={title:"Controls / InputText",component:n},m={render:a=>{const[l,c]=u.useState(""),o=v=>{c(v.target.value)};return t(T,{children:[e("h1",{children:"InputText"}),t("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Default"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Placeholder",value:l,onChange:o,...a})})]}),t("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Invalid"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",isInvalid:!0,value:l,onChange:o,error:"Error message",...a})})]}),t("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Required"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",isRequired:!0,value:l,onChange:o,...a})})]}),t("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",disabled:!0,value:l,onChange:o,...a})})]}),t("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Clearable"}),t("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",clearable:!0,value:l,onChange:o,...a})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom clear icon",clearable:!0,clearIcon:A,value:l,onChange:o,...a})})]})]})]})}};var f,k,g;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Clearable</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" clearable value={value} onChange={onChange} {...arg} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom clear icon" clearable clearIcon={paw} value={value} onChange={onChange} {...arg} />\r
            </div>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(g=(k=m.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const U=["InputText"];export{m as InputText,U as __namedExportsOrder,H as default};
//# sourceMappingURL=InputText.stories-a9e8a8c5.js.map
