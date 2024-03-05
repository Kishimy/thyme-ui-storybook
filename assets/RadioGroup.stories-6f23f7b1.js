import{a,j as o,F as k}from"./jsx-runtime-86dfebf6.js";import{r as d}from"./index-1b03fe98.js";import{c as m}from"./index-ac76e34c.js";import{R as f}from"./RadioButton-33f38344.js";const l=d.memo(d.forwardRef((n,r)=>{const{className:c,label:t,disabled:s,options:S,direction:y="column",onChange:u,currentlySelectedOption:p}=n,v=m(["thuiRadioGroup",c]),O=e=>()=>{u==null||u(e)},C=d.useCallback(e=>p?p.value===e.value:e==null?void 0:e.defaultSelected,[p]);return a("div",{className:v,ref:r,children:[o("span",{className:"thuiRadioGroup__label",children:t}),o("div",{className:m(["thuiRadioGroup__wrapper",y]),children:S.map(e=>o("div",{className:"thuiRadioGroup__item",children:o(f,{disabled:s||e.disabled,checked:C(e),defaultChecked:e.defaultSelected,onChange:O(e),children:e.label})},`option-${e.value}`))})]})}));try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: CommonRadioGroupOption) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CommonRadioGroupOption[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},currentlySelectedOption:{defaultValue:null,description:"",name:"currentlySelectedOption",required:!1,type:{name:"CommonRadioGroupOption"}}}}}catch{}const w={title:"Controls / RadioGroup",component:l},i={args:{label:"Select option",options:[{label:"Option 1",value:"1",defaultSelected:!0},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]},render:n=>{const[r,c]=d.useState(n.currentlySelectedOption),t=s=>{c(s)};return a(k,{children:[o("h1",{children:"Radio group"}),a("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Column"}),o(l,{...n,currentlySelectedOption:r,onChange:t})]}),a("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Row"}),o(l,{...n,currentlySelectedOption:r,onChange:t,direction:"row"})]}),a("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Disabled column"}),o(l,{...n,currentlySelectedOption:r,onChange:t,disabled:!0})]}),a("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Disabled row"}),o(l,{...n,currentlySelectedOption:r,onChange:t,direction:"row",disabled:!0})]})]})}};var b,h,_;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    options: [{
      label: 'Option 1',
      value: '1',
      defaultSelected: true
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }]
  },
  render: (arg: RadioGroupProps) => {
    const [currentlySelectedOption, setCurrentlySelectedOption] = useState(arg.currentlySelectedOption);
    const onChange = (option: RadioGroupOption) => {
      setCurrentlySelectedOption(option);
    };
    return <>\r
        <h1>Radio group</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Column</div>\r
          <Component {...arg} currentlySelectedOption={currentlySelectedOption} onChange={onChange} />\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Row</div>\r
          <Component {...arg} currentlySelectedOption={currentlySelectedOption} onChange={onChange} direction="row" />\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled column</div>\r
          <Component {...arg} currentlySelectedOption={currentlySelectedOption} onChange={onChange} disabled />\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled row</div>\r
          <Component {...arg} currentlySelectedOption={currentlySelectedOption} onChange={onChange} direction="row" disabled />\r
        </div>\r
      </>;
  }
}`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const q=["RadioGroup"];export{i as RadioGroup,q as __namedExportsOrder,w as default};
