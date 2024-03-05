import{j as e,a as o}from"./jsx-runtime-86dfebf6.js";import{r as i}from"./index-1b03fe98.js";import{c as p}from"./index-ac76e34c.js";const E=()=>e("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.76984 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L3.54063 7.76983C3.39625 7.91999 3.19592 8.00333 2.98764 7.9999C2.77936 7.99646 2.58189 7.90656 2.44254 7.75172L0.192536 5.25172C-0.0845584 4.94384 -0.0595996 4.46962 0.248283 4.19253C0.556165 3.91544 1.03038 3.94039 1.30748 4.24828L3.01816 6.14904L8.70938 0.230169C8.99648 -0.0684095 9.47126 -0.0777189 9.76984 0.209376Z",fill:"white"})}),c=i.memo(i.forwardRef((t,d)=>{const{onChange:l,disabled:u,className:s,isIndeterminate:h,checkedIcon:k,indeterminateIcon:n,children:r,checked:a,defaultChecked:C,...x}=t,v=i.useRef(!!a),[_,f]=i.useState(C??!!a),I=i.useMemo(()=>h?n||e("span",{className:"thuiCheckbox__indeterminateIcon"}):k||e(E,{}),[k,n,h]),w=i.useCallback(S=>{f(S.currentTarget.checked),l&&l(S)},[l]);return i.useEffect(()=>{a!==v.current&&typeof a<"u"&&(f(a),v.current=a)},[a]),o("label",{className:p("thuiCheckbox",s,{"thuiCheckbox--checked":_}),ref:d,children:[o("span",{className:"thuiCheckbox__container",children:[e("input",{...x,className:"thuiCheckbox__input",onChange:w,disabled:u,checked:_,defaultChecked:C,type:"checkbox"}),e("span",{className:p("thuiCheckbox__containerInner",{"thuiCheckbox__containerInner--indeterminate":h}),children:_&&I})]}),r&&e("span",{className:p("thuiCheckbox__text",{"thuiCheckbox__text--disabled":u}),children:r})]})}));try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{isIndeterminate:{defaultValue:null,description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const R={title:"Controls / Checkbox",component:c},m=["checkOne","checkTwo","checkThree"],b={render:t=>{const[d,l]=i.useState({checkOne:!0,checkTwo:!1,checkThree:!1}),u=n=>{l(r=>({...r,...m.reduce((a,C)=>({...a,[C]:n.target.checked}),{})}))},s=n=>{l(r=>({...r,[n.target.name]:n.target.checked}))},h=Object.entries(d).filter(([n])=>m.includes(n)).every(([n,r])=>m.includes(n)&&r),k=Object.entries(d).filter(([n])=>m.includes(n)).some(([n,r])=>m.includes(n)&&r);return o("div",{children:[e("h1",{children:"Checkbox"}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Default"}),o("div",{className:"thuiStorybook__row",children:[e(c,{...t}),e(c,{checked:!0,...t})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Indeterminate"}),o("div",{className:"thuiStorybook__row",children:[e(c,{...t,isIndeterminate:!0,children:"indeterminate"}),e(c,{...t,isIndeterminate:!0,checked:!0,children:"indeterminate"})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),o("div",{className:"thuiStorybook__row",children:[e(c,{...t,disabled:!0,children:"disabled"}),e(c,{...t,disabled:!0,checked:!0,children:"disabled"})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Form"}),o("div",{className:"thuiStorybook__row",children:[e(c,{checked:k,className:"form__field",isIndeterminate:!h&&k,name:"all",onChange:u,children:"Check All"}),o("div",{className:"form__field thuiStorybook__column",children:[e(c,{checked:d.checkOne,name:"checkOne",onChange:s,children:"Check one"}),e(c,{checked:d.checkTwo,name:"checkTwo",onChange:s,children:"Check two"}),e(c,{checked:d.checkThree,name:"checkThree",onChange:s,children:"Check three"})]})]})]})]})}};var N,y,g;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (arg: CheckboxProps) => {
    const [form, setForm] = useState<Record<string, boolean>>({
      checkOne: true,
      checkTwo: false,
      checkThree: false
    });
    const allClickHandler: ChangeEventHandler<HTMLInputElement> = e => {
      setForm(prev => ({
        ...prev,
        ...CHECKBOXES.reduce((acc, k) => ({
          ...acc,
          [k]: e.target.checked
        }), {})
      }));
    };
    const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
      setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.checked
      }));
    };
    const isAllChecked = Object.entries(form).filter(([k]) => CHECKBOXES.includes(k)).every(([k, v]) => CHECKBOXES.includes(k) && v);
    const isSomeChecked = Object.entries(form).filter(([k]) => CHECKBOXES.includes(k)).some(([k, v]) => CHECKBOXES.includes(k) && v);
    return <div>\r
        <h1>Checkbox</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Default</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} />\r
            <Component checked {...arg} />\r
          </div>\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Indeterminate</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} isIndeterminate>\r
              indeterminate\r
            </Component>\r
            <Component {...arg} isIndeterminate checked>\r
              indeterminate\r
            </Component>\r
          </div>\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} disabled>\r
              disabled\r
            </Component>\r
            <Component {...arg} disabled checked>\r
              disabled\r
            </Component>\r
          </div>\r
        </div>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Form</div>\r
          <div className="thuiStorybook__row">\r
            <Component checked={isSomeChecked} className="form__field" isIndeterminate={!isAllChecked && isSomeChecked} name="all" onChange={allClickHandler}>\r
              Check All\r
            </Component>\r
            <div className="form__field thuiStorybook__column">\r
              <Component checked={form.checkOne} name="checkOne" onChange={checkboxChangeHandler}>\r
                Check one\r
              </Component>\r
              <Component checked={form.checkTwo} name="checkTwo" onChange={checkboxChangeHandler}>\r
                Check two\r
              </Component>\r
              <Component checked={form.checkThree} name="checkThree" onChange={checkboxChangeHandler}>\r
                Check three\r
              </Component>\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(g=(y=b.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const j=["Checkbox"];export{b as Checkbox,j as __namedExportsOrder,R as default};
