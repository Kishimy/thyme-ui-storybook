import{j as e,a as o}from"./jsx-runtime-86dfebf6.js";import{r as i}from"./index-1b03fe98.js";import{c as v}from"./index-ac76e34c.js";const H=()=>e("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.76984 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L3.54063 7.76983C3.39625 7.91999 3.19592 8.00333 2.98764 7.9999C2.77936 7.99646 2.58189 7.90656 2.44254 7.75172L0.192536 5.25172C-0.0845584 4.94384 -0.0595996 4.46962 0.248283 4.19253C0.556165 3.91544 1.03038 3.94039 1.30748 4.24828L3.01816 6.14904L8.70938 0.230169C8.99648 -0.0684095 9.47126 -0.0777189 9.76984 0.209376Z",fill:"white"})}),r=i.memo(i.forwardRef(({onChange:c,disabled:a,className:m,isIndeterminate:s,checkedIcon:l,indeterminateIcon:k,children:d,checked:n,defaultChecked:t,hasError:b=!1,...C},g)=>{const p=i.useRef(!!n),[_,f]=i.useState(t??!!n),E=i.useMemo(()=>s?k||e("span",{className:"thuiCheckbox__indeterminateIcon"}):l||e(H,{}),[l,k,s]),w=i.useCallback(S=>{f(S.currentTarget.checked),c&&c(S)},[c]);return i.useEffect(()=>{n!==p.current&&typeof n<"u"&&(f(n),p.current=n)},[n]),o("label",{className:v("thuiCheckbox",m,{"thuiCheckbox--checked":_,"thuiCheckbox--error":b}),ref:g,children:[o("span",{className:"thuiCheckbox__container",children:[e("input",{...C,className:"thuiCheckbox__input",onChange:w,disabled:a,checked:_,defaultChecked:t,type:"checkbox"}),e("span",{className:v("thuiCheckbox__containerInner",{"thuiCheckbox__containerInner--indeterminate":s}),children:_&&E})]}),d&&e("span",{className:v("thuiCheckbox__text",{"thuiCheckbox__text--disabled":a}),children:d})]})}));try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{isIndeterminate:{defaultValue:null,description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},indeterminateIcon:{defaultValue:null,description:"",name:"indeterminateIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const R={title:"Controls / Checkbox",component:r},h=["checkOne","checkTwo","checkThree"],u={render:c=>{const[a,m]=i.useState({checkOne:!0,checkTwo:!1,checkThree:!1}),s=n=>{m(t=>({...t,...h.reduce((b,C)=>({...b,[C]:n.target.checked}),{})}))},l=n=>{m(t=>({...t,[n.target.name]:n.target.checked}))},k=Object.entries(a).filter(([n])=>h.includes(n)).every(([n,t])=>h.includes(n)&&t),d=Object.entries(a).filter(([n])=>h.includes(n)).some(([n,t])=>h.includes(n)&&t);return o("div",{children:[e("h1",{children:"Checkbox"}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Default"}),o("div",{className:"thuiStorybook__row",children:[e(r,{...c}),e(r,{checked:!0,...c})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Indeterminate"}),o("div",{className:"thuiStorybook__row",children:[e(r,{...c,isIndeterminate:!0,children:"indeterminate"}),e(r,{...c,isIndeterminate:!0,checked:!0,children:"indeterminate"})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Has error"}),o("div",{className:"thuiStorybook__row",children:[e(r,{...c,hasError:!0,children:"Error"}),e(r,{checked:!0,hasError:!0,...c,children:"Error"})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),o("div",{className:"thuiStorybook__row",children:[e(r,{...c,disabled:!0,children:"disabled"}),e(r,{...c,disabled:!0,checked:!0,children:"disabled"})]})]}),o("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Form"}),o("div",{className:"thuiStorybook__row",children:[e(r,{checked:d,className:"form__field",isIndeterminate:!k&&d,name:"all",onChange:s,children:"Check All"}),o("div",{className:"form__field thuiStorybook__column",children:[e(r,{checked:a.checkOne,name:"checkOne",onChange:l,children:"Check one"}),e(r,{checked:a.checkTwo,name:"checkTwo",onChange:l,children:"Check two"}),e(r,{checked:a.checkThree,name:"checkThree",onChange:l,children:"Check three"})]})]})]})]})}};var y,N,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <div className="thuiStorybook__label">Has error</div>\r
          <div className="thuiStorybook__row">\r
            <Component {...arg} hasError>\r
              Error\r
            </Component>\r
            <Component checked hasError {...arg}>\r
              Error\r
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
}`,...(x=(N=u.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const j=["Checkbox"];export{u as Checkbox,j as __namedExportsOrder,R as default};
//# sourceMappingURL=Checkbox.stories-f19c7c5d.js.map
