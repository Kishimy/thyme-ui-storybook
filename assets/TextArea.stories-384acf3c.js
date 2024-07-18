import{a as n,j as e,F as z}from"./jsx-runtime-86dfebf6.js";import{r as c}from"./index-1b03fe98.js";import{c as P}from"./index-ac76e34c.js";import{L as q}from"./Label-6409f5f9.js";import"./Typography-03297c7c.js";const t="thuiTextArea",r=c.memo(c.forwardRef(({label:l,id:o,name:d,maxlength:a,showLength:h,rows:g,cols:y,placeholder:C,resize:u,disabled:m,invalid:f,required:b,className:N,onChange:k,value:i,...x},S)=>{const w=P(t,N,{[`${t}--invalid`]:f,[`${t}--resize-${u}`]:u,[`${t}--filled`]:!!i});return n("div",{className:w,children:[e("textarea",{ref:S,className:`${t}__textarea`,id:o,name:d,rows:g,cols:y,value:i,maxLength:a,placeholder:C,disabled:m,required:b,onChange:k,...x}),l&&e(q,{label:l,htmlFor:d,isRequired:b,className:`${t}__label`,disabled:m}),h&&n("div",{className:`${t}__length`,children:[i==null?void 0:i.toString().length,a?`/${a}`:""]})]})}));try{r.displayName="TextArea",r.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},maxlength:{defaultValue:null,description:"",name:"maxlength",required:!1,type:{name:"number"}},showLength:{defaultValue:null,description:"",name:"showLength",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},resize:{defaultValue:null,description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"both"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $={title:"Controls / TextArea",component:r},s={render:l=>{const[o,d]=c.useState(""),a=h=>{d(h.target.value)};return n(z,{children:[e("h1",{children:"Text Area"}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"TextArea"}),n("div",{className:"thuiStorybook__row",children:[e(r,{...l,label:"Label",value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,label:"Max length: 20 symbols",maxlength:20,value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,label:"Display without max length",showLength:!0,value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,label:"Display with max length",maxlength:20,showLength:!0,value:o,placeholder:"Placeholder",onChange:a})]}),n("div",{className:"thuiStorybook__row",children:[e(r,{...l,resize:"none",label:"Resize: none",value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,resize:"horizontal",label:"Resize: horizontal",value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,resize:"vertical",label:"Resize: vertical",value:o,placeholder:"Placeholder",onChange:a}),e(r,{...l,resize:"both",label:"Resize: both",value:o,placeholder:"Placeholder",onChange:a})]})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Invalid"}),e("div",{className:"thuiStorybook__row",children:e(r,{...l,label:"Invalid",value:o,placeholder:"Placeholder",invalid:!0,onChange:a})})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Required"}),e("div",{className:"thuiStorybook__row",children:e(r,{...l,label:"Required",value:o,placeholder:"Placeholder",required:!0,onChange:a})})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__row",children:e(r,{...l,label:"Disabled",value:o,placeholder:"Placeholder",disabled:!0,onChange:a})})]})]})}};var p,v,_;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (arg: TextAreaProps) => {
    const [value, setValue] = useState('');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
      setValue(e.target.value);
    };
    return <>\r
        <h1>Text Area</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">TextArea</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} label="Label" value={value} placeholder="Placeholder" onChange={onChange} />\r
\r
            <Component {...arg} label="Max length: 20 symbols" maxlength={20} value={value} placeholder="Placeholder" onChange={onChange} />\r
\r
            <Component {...arg} label="Display without max length" showLength value={value} placeholder="Placeholder" onChange={onChange} />\r
\r
            <Component {...arg} label="Display with max length" maxlength={20} showLength value={value} placeholder="Placeholder" onChange={onChange} />\r
          </div>\r
\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} resize="none" label="Resize: none" value={value} placeholder="Placeholder" onChange={onChange} />\r
            <Component {...arg} resize="horizontal" label="Resize: horizontal" value={value} placeholder="Placeholder" onChange={onChange} />\r
            <Component {...arg} resize="vertical" label="Resize: vertical" value={value} placeholder="Placeholder" onChange={onChange} />\r
            <Component {...arg} resize="both" label="Resize: both" value={value} placeholder="Placeholder" onChange={onChange} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Invalid</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} label="Invalid" value={value} placeholder="Placeholder" invalid onChange={onChange} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Required</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} label="Required" value={value} placeholder="Placeholder" required onChange={onChange} />\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} label="Disabled" value={value} placeholder="Placeholder" disabled onChange={onChange} />\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const D=["TextArea"];export{s as TextArea,D as __namedExportsOrder,$ as default};
//# sourceMappingURL=TextArea.stories-384acf3c.js.map
