import{a as n,j as e,F as q}from"./jsx-runtime-86dfebf6.js";import{r as u}from"./index-1b03fe98.js";import{c as P}from"./index-ac76e34c.js";import{L as V}from"./Label-5e5fbcee.js";import"./Typography-c4280c0f.js";const t="thuiTextArea",a=u.memo(u.forwardRef((l,r)=>{const{label:d,id:o,name:s,maxlength:c,showLength:y,rows:C,cols:f,placeholder:x,resize:m,disabled:b,invalid:N,required:p,className:k,onChange:S,value:i,...w}=l,z=P(t,k,{[`${t}--invalid`]:N,[`${t}--resize-${m}`]:m,[`${t}--filled`]:!!i});return n("div",{className:z,children:[e("textarea",{ref:r,className:`${t}__textarea`,id:o,name:s,rows:C,cols:f,value:i,maxLength:c,placeholder:x,disabled:b,required:p,onChange:S,...w}),d&&e(V,{label:d,htmlFor:s,isRequired:p,className:`${t}__label`,disabled:b}),y&&n("div",{className:`${t}__length`,children:[i==null?void 0:i.toString().length,c?`/${c}`:""]})]})}));try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},maxlength:{defaultValue:null,description:"",name:"maxlength",required:!1,type:{name:"number"}},showLength:{defaultValue:null,description:"",name:"showLength",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},resize:{defaultValue:null,description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Controls / TextArea",component:a},h={render:l=>{const[r,d]=u.useState(""),o=s=>{d(s.target.value)};return n(q,{children:[e("h1",{children:"Text Area"}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"TextArea"}),n("div",{className:"thuiStorybook__row",children:[e(a,{...l,label:"Label",value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,label:"Max length: 20 symbols",maxlength:20,value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,label:"Display without max length",showLength:!0,value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,label:"Display with max length",maxlength:20,showLength:!0,value:r,placeholder:"Placeholder",onChange:o})]}),n("div",{className:"thuiStorybook__row",children:[e(a,{...l,resize:"none",label:"Resize: none",value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,resize:"horizontal",label:"Resize: horizontal",value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,resize:"vertical",label:"Resize: vertical",value:r,placeholder:"Placeholder",onChange:o}),e(a,{...l,resize:"both",label:"Resize: both",value:r,placeholder:"Placeholder",onChange:o})]})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Invalid"}),e("div",{className:"thuiStorybook__row",children:e(a,{...l,label:"Invalid",value:r,placeholder:"Placeholder",invalid:!0,onChange:o})})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Required"}),e("div",{className:"thuiStorybook__row",children:e(a,{...l,label:"Required",value:r,placeholder:"Placeholder",required:!0,onChange:o})})]}),n("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__row",children:e(a,{...l,label:"Disabled",value:r,placeholder:"Placeholder",disabled:!0,onChange:o})})]})]})}};var v,_,g;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(_=h.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const I=["TextArea"];export{h as TextArea,I as __namedExportsOrder,D as default};
