import{a as i,j as o,F as f}from"./jsx-runtime-86dfebf6.js";import{r as d}from"./index-1b03fe98.js";import{c as m}from"./index-ac76e34c.js";import{R as O}from"./RadioButton-2f22e7c2.js";const r=d.memo(d.forwardRef(({className:l,label:a,disabled:c,options:t,direction:s="column",onChange:u,currentlySelectedOption:p},S)=>{const y=m(["thuiRadioGroup",l]),v=e=>()=>{u==null||u(e)},k=d.useCallback(e=>p?p.value===e.value:e==null?void 0:e.defaultSelected,[p]);return i("div",{className:y,ref:S,children:[o("span",{className:"thuiRadioGroup__label",children:a}),o("div",{className:m(["thuiRadioGroup__wrapper",s]),children:t.map(e=>o("div",{className:"thuiRadioGroup__item",children:o(O,{disabled:c||e.disabled,checked:k(e),defaultChecked:e.defaultSelected,onChange:v(e),children:e.label})},`option-${e.value}`))})]})}));try{r.displayName="RadioGroup",r.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: CommonRadioGroupOption) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CommonRadioGroupOption[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},currentlySelectedOption:{defaultValue:null,description:"",name:"currentlySelectedOption",required:!1,type:{name:"CommonRadioGroupOption"}}}}}catch{}const G={title:"Controls / RadioGroup",component:r},n={args:{label:"Select option",options:[{label:"Option 1",value:"1",defaultSelected:!0},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]},render:l=>{const[a,c]=d.useState(l.currentlySelectedOption),t=s=>{c(s)};return i(f,{children:[o("h1",{children:"Radio group"}),i("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Column"}),o(r,{...l,currentlySelectedOption:a,onChange:t})]}),i("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Row"}),o(r,{...l,currentlySelectedOption:a,onChange:t,direction:"row"})]}),i("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Disabled column"}),o(r,{...l,currentlySelectedOption:a,onChange:t,disabled:!0})]}),i("div",{className:"thuiStorybook__block",children:[o("div",{className:"thuiStorybook__label",children:"Disabled row"}),o(r,{...l,currentlySelectedOption:a,onChange:t,direction:"row",disabled:!0})]})]})}};var b,h,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const w=["RadioGroup"];export{n as RadioGroup,w as __namedExportsOrder,G as default};
//# sourceMappingURL=RadioGroup.stories-16eaceb2.js.map
