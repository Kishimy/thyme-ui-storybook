import{j as e,F as fe,a as p}from"./jsx-runtime-86dfebf6.js";import{c as S}from"./index-ac76e34c.js";import{r as l}from"./index-1b03fe98.js";import{L as De}from"./Label-5e5fbcee.js";import"./Typography-c4280c0f.js";const Pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"})}),Te=Pe,Ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})}),Fe=Ue,Xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:e("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})}),Se=Xe,He=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})}),Je=He,r="thuiSelect",Be=(W,c)=>{const{id:A,name:i,options:d,defaultSelectedOption:v,value:g,label:D,placeholder:x,searchPlaceholder:s="Search...",disabled:k,multiple:E,renderOption:b,renderTag:L,emptyOptionsPlaceholder:P=e("div",{className:`${r}__empty-options`,children:"No options"}),emptySearchPlaceholder:o=e("div",{className:`${r}__empty-options`,children:"No results found"}),arrowDownIcon:h=Fe,arrowUpIcon:K=Te,clearIcon:Ce=Se,searchIcon:Ne=Je,removeTagIcon:ae=Se,size:T="md",optionsListSize:U="full",isClearable:j=!1,isSearchable:G=!1,searchFunc:Q,isInvalid:ge,isRequired:re,isInitiallyExpanded:Ve=!1,error:ie,isExpanded:Y,onExpand:$,onCollapse:q,onSelect:V,onSearch:Z}=W,Me=S(r,`${r}--${T}`,{[`${r}--invalid`]:ge,[`${r}--disabled`]:k,[`${r}--required`]:re}),f=l.useRef(null),ee=l.useRef(null),M=Y!==void 0&&$!==void 0&&q!==void 0,[ce,se]=l.useState(Ve),_=l.useMemo(()=>M?Y:ce,[M,Y,ce]),[pe,oe]=l.useState((v==null?void 0:v.value)??void 0),u=l.useMemo(()=>g??pe,[pe,g]),[m,F]=l.useState(null),X=l.useCallback(()=>F(null),[]),[Oe,Ie]=l.useState(!1),C=l.useMemo(()=>Array.isArray(u)?u.length>0:!!u,[u]),ue=t=>()=>{Ie(t)},H=Z!==void 0,[O,de]=l.useState(""),J=l.useCallback(()=>{M?$==null||$():se(!0),f.current&&(f.current.ariaExpanded="true"),u&&!Array.isArray(u)&&F(u)},[M,u,$]),y=l.useCallback(()=>{M?q==null||q():se(!1),f.current&&(f.current.ariaExpanded="false"),m&&X(),O.length>0&&de("")},[M,m,X,O.length,q]),te=l.useCallback(t=>{t.stopPropagation(),_?y():J()},[_,y,J]),I=l.useCallback(t=>()=>{V?V(t):oe(E?[...u,t]:t),E||y()},[u,y,E,V]),he=l.useCallback(()=>{C&&(V?V(void 0):oe(void 0))},[C,V]),xe=l.useCallback(t=>{j&&C?he():te(t)},[he,j,C,te]),Ee=l.useCallback(t=>{t.stopPropagation();const a=t.target.value;H?Z(a):de(a)},[H,Z]),le=l.useCallback(t=>{var a;ee.current&&!ee.current.contains(t.target)&&!((a=f.current)!=null&&a.contains(t.target))&&_&&y()},[_,y]),ne=l.useCallback(t=>{const a=f.current,w=t.code,qe=["ArrowUp","ArrowDown","Enter","Space"],ze=["ArrowUp","ArrowDown"],Re=["Escape","Tab"],Ae=["Enter","Space"];if(document.activeElement===a&&!_&&qe.includes(w))t.preventDefault(),J();else if(_){if(ze.includes(w)){t.preventDefault();const ve=d.findIndex(N=>N.value===m);if(w==="ArrowUp"){const N=m?d[ve-1]:d[d.length-1];N&&F(N.value)}if(w==="ArrowDown"){const N=m?d[ve+1]:d[0];N&&F(N.value)}}Re.includes(w)&&y(),Ae.includes(w)&&m&&(w==="Space"&&t.preventDefault(),Array.isArray(u)||!Array.isArray(u)&&m!==u?I(m)():y())}},[_,J,m,d,y,u,I]),Le=l.useMemo(()=>{if(!d.length)return P;const t=G&&!H&&O.length>0?d==null?void 0:d.filter(a=>Q?Q(O,a):a.value.toLowerCase().includes(O.toLowerCase())):d;return t!=null&&t.length?e(fe,{children:t.map(a=>e("li",{role:"option",className:S({[`${r}__option`]:!b,[`${r}__option--active`]:!b&&a.value===m}),value:a.value,onMouseEnter:X,onClick:I(a.value),children:b?b(a,a.value===m):a.label},a.value))}):o},[d,G,H,O,P,Q,o,b,m,X,I]),me=l.useCallback(t=>a=>{a.stopPropagation(),I(t)()},[I]),$e=l.useMemo(()=>{if(Array.isArray(u))return C?e("div",{className:`${r}__tags-wrapper`,children:u==null?void 0:u.map(t=>{const a=d.find(w=>w.value===t);return a?L?L(a):p("div",{className:`${r}__tag`,children:[a.label,e("div",{className:`${r}__tag-remove`,onMouseUp:me(a.value),children:ae})]},`${i}_${a.value}`):null})}):e("span",{className:`${r}__placeholder`,children:x});{const t=d.find(a=>a.value===u);return t?t==null?void 0:t.label:e("span",{className:`${r}__placeholder`,children:x})}},[u,me,C,i,d,x,ae,L]);return l.useEffect(()=>(document.addEventListener("click",le),document.addEventListener("keydown",ne),()=>{document.removeEventListener("click",le),document.removeEventListener("keydown",ne)}),[le,ne]),p("div",{className:Me,ref:c,children:[p("div",{className:`${r}__select-wrapper`,children:[e("button",{ref:f,id:A,name:i,className:`${r}__select`,disabled:k,onMouseUp:te,type:"button",role:"combobox","aria-labelledby":"select button","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",children:$e}),e("div",{className:S(`${r}__select-icon`,`${r}__select-icon--${T}`),onClick:xe,onMouseEnter:ue(!0),onMouseLeave:ue(!1),children:j&&Oe&&C?Ce:_?K:h})]}),e("div",{className:S(`${r}__options-wrapper`,{[`${r}__options-wrapper--${U}`]:typeof U!="number"}),style:{...typeof U=="number"&&{width:`${U}px`}},ref:ee,children:_&&p("ul",{role:"listbox",className:`${r}__options`,children:[G&&p("li",{className:S(`${r}__search`),children:[e("input",{className:`${r}__search-input`,placeholder:s,onChange:Ee,autoFocus:!0}),e("div",{className:S(`${r}__search-icon`,`${r}__search-icon--${T}`),children:Ne})]}),Le]})}),D&&e(De,{label:D,htmlFor:i,isRequired:re,className:`${r}__label`,disabled:k}),ie&&e("div",{className:S(`${r}__error`,`${r}__error--${T}`),children:ie})]})},n=l.memo(l.forwardRef(Be));try{n.displayName="Select",n.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},defaultSelectedOption:{defaultValue:null,description:"",name:"defaultSelectedOption",required:!1,type:{name:"CommonSelectOption"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},searchPlaceholder:{defaultValue:null,description:"",name:"searchPlaceholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'}]}},optionsListSize:{defaultValue:null,description:"",name:"optionsListSize",required:!1,type:{name:'number | "content" | "full"'}},isClearable:{defaultValue:null,description:"",name:"isClearable",required:!1,type:{name:"boolean"}},isSearchable:{defaultValue:null,description:"",name:"isSearchable",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isInitiallyExpanded:{defaultValue:null,description:"",name:"isInitiallyExpanded",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"(() => void)"}},onCollapse:{defaultValue:null,description:"",name:"onCollapse",required:!1,type:{name:"(() => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((optionValue: string) => void)"}},searchFunc:{defaultValue:null,description:"",name:"searchFunc",required:!1,type:{name:"((search: string, option: T) => boolean)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((search: string) => void)"}},renderTag:{defaultValue:null,description:"",name:"renderTag",required:!1,type:{name:"((option: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: T, isActive?: boolean) => ReactElement<any, string | JSXElementConstructor<any>>)"}},emptyOptionsPlaceholder:{defaultValue:null,description:"",name:"emptyOptionsPlaceholder",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},emptySearchPlaceholder:{defaultValue:null,description:"",name:"emptySearchPlaceholder",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},arrowDownIcon:{defaultValue:null,description:"",name:"arrowDownIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},arrowUpIcon:{defaultValue:null,description:"",name:"arrowUpIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},clearIcon:{defaultValue:null,description:"",name:"clearIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},searchIcon:{defaultValue:null,description:"",name:"searchIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},removeTagIcon:{defaultValue:null,description:"",name:"removeTagIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const We=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:e("path",{d:"M181.5 197.1l12.9 6.4c5.9 3 12.4 4.5 19.1 4.5c23.5 0 42.6-19.1 42.6-42.6V144c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v21.4c0 23.5 19.1 42.6 42.6 42.6c6.6 0 13.1-1.5 19.1-4.5l12.9-6.4 8.4-4.2L135.1 185c-4.5-3-7.1-8-7.1-13.3V168c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v3.7c0 5.3-2.7 10.3-7.1 13.3l-11.8 7.9 8.4 4.2zm-8.6 49.4L160 240l-12.9 6.4c-12.6 6.3-26.5 9.6-40.5 9.6c-3.6 0-7.1-.2-10.6-.6v.6c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V336 320c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6V240c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16v32 16 48c0 8.8 7.2 16 16 16s16-7.2 16-16V204.3c0-48.2-30.8-91-76.6-106.3l-8.5-2.8c-8-2.7-12.6-11.1-10.4-19.3s10.3-13.2 18.6-11.6l19.9 4C576 86.1 640 164.2 640 254.9l0 1.1h0c0 123.7-100.3 224-224 224h-1.1H256h-.6C132 480 32 380 32 256.6V256 216.8c-10.1-14.6-16-32.3-16-51.4V144l0-1.4C6.7 139.3 0 130.5 0 120c0-13.3 10.7-24 24-24h2.8C44.8 58.2 83.3 32 128 32h64c44.7 0 83.2 26.2 101.2 64H296c13.3 0 24 10.7 24 24c0 10.5-6.7 19.3-16 22.6l0 1.4v21.4c0 1.4 0 2.8-.1 4.3c12-6.2 25.7-9.6 40.1-9.6h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-13.3 0-24 10.7-24 24v8h56.4c-15.2 17-24.4 39.4-24.4 64H320c-42.3 0-78.2-27.4-91-65.3c-5.1 .9-10.3 1.3-15.6 1.3c-14.1 0-27.9-3.3-40.5-9.6zM96 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"})}),z=We,Ke=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"})}),R=Ke,je=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:e("path",{d:"M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3V224c0-70.7-57.3-128-128-128H392.3c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24V410c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7V456c0 13.3 10.7 24 24 24s24-10.7 24-24V405.1c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})}),be=je,Ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"})}),_e=Ge,to={title:"Controls / Select",component:n},B={render:W=>{const c=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],A=[{value:"1",label:"Option 1",icon:z,search:"otter"},{value:"2",label:"Option 2",icon:R,search:"dove"},{value:"3",label:"Option 3",icon:be,search:"kiwi"}],[i,d]=l.useState(),[v,g]=l.useState([]),[D,x]=l.useState(""),s=o=>{console.log(o?"Selected: "+o:"Cleared selection"),d(o)},k=o=>{if(o){const h=v.includes(o);console.log(h?"Deselected: "+o:"Selected: "+o),g(h?v.filter(K=>K!==o):[...v,o])}else console.log("Cleared selection"),g([])},E=o=>e("div",{className:"thuiStorybook__multiselect-tag",children:o.label},o.value),[b,L]=l.useState(200),P=o=>{x(o)};return p(fe,{children:[e("h1",{children:"Select"}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Select"}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Select (options width: full)",placeholder:"Select option",options:c,value:i,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Select (options width: content)",placeholder:"Select option",options:c,value:i,optionsListSize:"content",onSelect:o=>s(o)})}),p("div",{className:"thuiStorybook__input-wrapper",children:[e(n,{label:`Select (options width: fixed to ${b}px)`,placeholder:"Select option",options:c,value:i,optionsListSize:b,onSelect:o=>s(o)}),e("label",{htmlFor:"custom-options-width",children:"Enter options width: "}),e("input",{name:"custom-options-width",type:"number",value:b,onChange:o=>L(+o.target.value)})]})]}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom renderOption",placeholder:"Select option",options:c,renderOption:(o,h)=>e("div",{className:S("thuiStorybook__custom-option",{"thuiStorybook__custom-option--active":h}),children:o.label},o.value),value:i,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom option type",placeholder:"Select option",options:A,value:i,onSelect:o=>s(o),renderOption:(o,h)=>p("div",{className:S("thuiStorybook__iconed-option",{"thuiStorybook__iconed-option--active":h}),children:[o.icon," ",o.label]})})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Empty options",placeholder:"Select option",options:[],value:i,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom empty options placeholder",placeholder:"Select option",options:[],emptyOptionsPlaceholder:e("div",{className:"thuiStorybook__empty-options",children:"Custom empty options placeholder"}),value:i,onSelect:o=>s(o)})})]})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Sizes"}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Small",placeholder:"Select option",options:c,value:i,size:"sm",onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Medium",placeholder:"Select option",options:c,value:i,size:"md",onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Large",placeholder:"Select option",options:c,value:i,size:"lg",onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"X-large",placeholder:"Select option",options:c,value:i,size:"xl",onSelect:o=>s(o)})})]})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Clearable"}),e("div",{className:"thuiStorybook__row",children:e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,value:i,isClearable:!0,onSelect:o=>s(o)})})})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Searchable"}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,value:i,isSearchable:!0,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom placeholders",placeholder:"Select option",options:c,value:i,isSearchable:!0,searchPlaceholder:"Custom placeholder",emptySearchPlaceholder:e("div",{className:"thuiStorybook__empty-options",children:"Custom empty search placeholder"}),onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom search function",placeholder:"Select option",options:A,value:i,isSearchable:!0,searchPlaceholder:"Search by icon name",searchFunc:(o,h)=>h.search.toLowerCase().includes(o.toLowerCase()),onSelect:o=>s(o),renderOption:(o,h)=>p("div",{className:S("thuiStorybook__iconed-option",{"thuiStorybook__iconed-option--active":h}),children:[o.icon," ",o.label," (search: '",o.search,"')"]})})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom/server search",placeholder:"Select option",options:c.filter(o=>o.label.includes(D)),value:i,isSearchable:!0,onSearch:P,searchPlaceholder:"Case sensitive search by label",onSelect:o=>s(o)})})]})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Multiple"}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Multiselect",placeholder:"Select option",options:c,value:v,multiple:!0,onSelect:o=>k(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Clearable multiselect",placeholder:"Select option",options:c,value:v,multiple:!0,isClearable:!0,onSelect:o=>k(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Custom tag component",placeholder:"Select option",options:c,value:v,renderTag:E,multiple:!0,onSelect:o=>k(o)})})]})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Custom icons"}),p("div",{className:"thuiStorybook__row",children:[e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,value:i,arrowUpIcon:z,arrowDownIcon:R,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Clearable",placeholder:"Select option",options:c,value:i,isClearable:!0,arrowUpIcon:z,arrowDownIcon:R,clearIcon:be,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Searchable",placeholder:"Select option",options:c,value:i,isSearchable:!0,arrowUpIcon:z,arrowDownIcon:R,searchIcon:_e,onSelect:o=>s(o)})}),e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Multiple",placeholder:"Select option",options:c,value:v,multiple:!0,arrowUpIcon:z,arrowDownIcon:R,removeTagIcon:_e,onSelect:o=>k(o)})})]})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Invalid"}),e("div",{className:"thuiStorybook__row",children:e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,isInvalid:!0,error:"Error message",value:i,onSelect:o=>s(o)})})})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Required"}),e("div",{className:"thuiStorybook__row",children:e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,isRequired:!0,value:i,onSelect:o=>s(o)})})})]}),p("div",{className:"thuiStorybook__block",children:[e("div",{className:"thuiStorybook__label",children:"Disabled"}),e("div",{className:"thuiStorybook__row",children:e("div",{className:"thuiStorybook__input-wrapper",children:e(n,{label:"Label",placeholder:"Select option",options:c,disabled:!0,value:i,onSelect:o=>s(o)})})})]})]})}};var ye,we,ke;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: (arg: SelectProps) => {
    const options: SelectOption[] = [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }];
    type CustomSelectOption = SelectOption & {
      icon: ReactElement;
      search: string;
    };
    const customOptions: CustomSelectOption[] = [{
      value: '1',
      label: 'Option 1',
      icon: otter,
      search: 'otter'
    }, {
      value: '2',
      label: 'Option 2',
      icon: dove,
      search: 'dove'
    }, {
      value: '3',
      label: 'Option 3',
      icon: kiwi,
      search: 'kiwi'
    }];
    const [currentValue, setCurrentValue] = useState<string | undefined>();
    const [currentMultiValue, setCurrentMultiValue] = useState<string[]>([]);
    const [currentSearch, setCurrentSearch] = useState<string>('');
    const handleSelect = (optionValue: string | undefined) => {
      console.log(optionValue ? 'Selected: ' + optionValue : 'Cleared selection');
      setCurrentValue(optionValue);
    };
    const handleMultiSelect = (optionValue: string | undefined) => {
      if (optionValue) {
        const alreadySelected = currentMultiValue.includes(optionValue);
        console.log(alreadySelected ? 'Deselected: ' + optionValue : 'Selected: ' + optionValue);
        if (alreadySelected) {
          setCurrentMultiValue(currentMultiValue.filter(item => item !== optionValue));
        } else {
          setCurrentMultiValue([...currentMultiValue, optionValue]);
        }
      } else {
        console.log('Cleared selection');
        setCurrentMultiValue([]);
      }
    };
    const customRenderTag = (option: SelectOption) => {
      return <div className="thuiStorybook__multiselect-tag" key={option.value}>\r
          {option.label}\r
        </div>;
    };
    const [customOptionsWidth, setCustomOptionsWidth] = useState<number>(200);
    const handleCustomSearch = (search: string) => {
      setCurrentSearch(search);
    };
    return <>\r
        <h1>Select</h1>\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Select</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Select (options width: full)" placeholder="Select option" options={options} value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Select (options width: content)" placeholder="Select option" options={options} value={currentValue} optionsListSize="content" onSelect={option => handleSelect(option)} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label={\`Select (options width: fixed to \${customOptionsWidth}px)\`} placeholder="Select option" options={options} value={currentValue} optionsListSize={customOptionsWidth} onSelect={option => handleSelect(option)} />\r
              <label htmlFor="custom-options-width">Enter options width: </label>\r
              <input name="custom-options-width" type="number" value={customOptionsWidth} onChange={event => setCustomOptionsWidth(+event.target.value)} />\r
            </div>\r
          </div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom renderOption" placeholder="Select option" options={options} renderOption={(option, isActive) => <div className={cn('thuiStorybook__custom-option', {
              ['thuiStorybook__custom-option--active']: isActive
            })} key={option.value}>\r
                    {option.label}\r
                  </div>} value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component<CustomSelectOption> label="Custom option type" placeholder="Select option" options={customOptions} value={currentValue} onSelect={option => handleSelect(option)} renderOption={(option, isActive) => <div className={cn('thuiStorybook__iconed-option', {
              ['thuiStorybook__iconed-option--active']: isActive
            })}>\r
                    {option.icon} {option.label}\r
                  </div>} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Empty options" placeholder="Select option" options={[]} value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom empty options placeholder" placeholder="Select option" options={[]} emptyOptionsPlaceholder={<div className="thuiStorybook__empty-options">Custom empty options placeholder</div>} value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Sizes</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Small" placeholder="Select option" options={options} value={currentValue} size="sm" onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Medium" placeholder="Select option" options={options} value={currentValue} size="md" onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Large" placeholder="Select option" options={options} value={currentValue} size="lg" onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="X-large" placeholder="Select option" options={options} value={currentValue} size="xl" onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Clearable</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} value={currentValue} isClearable onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Searchable</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} value={currentValue} isSearchable onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom placeholders" placeholder="Select option" options={options} value={currentValue} isSearchable searchPlaceholder="Custom placeholder" emptySearchPlaceholder={<div className="thuiStorybook__empty-options">Custom empty search placeholder</div>} onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component<CustomSelectOption> label="Custom search function" placeholder="Select option" options={customOptions} value={currentValue} isSearchable searchPlaceholder="Search by icon name" searchFunc={(searchValue, option) => option.search.toLowerCase().includes(searchValue.toLowerCase())} onSelect={option => handleSelect(option)} renderOption={(option, isActive) => <div className={cn('thuiStorybook__iconed-option', {
              ['thuiStorybook__iconed-option--active']: isActive
            })}>\r
                    {option.icon} {option.label} (search: &#39;{option.search}&#39;)\r
                  </div>} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom/server search" placeholder="Select option" options={options.filter(option => option.label.includes(currentSearch))} value={currentValue} isSearchable onSearch={handleCustomSearch} searchPlaceholder="Case sensitive search by label" onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Multiple</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Multiselect" placeholder="Select option" options={options} value={currentMultiValue} multiple onSelect={option => handleMultiSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Clearable multiselect" placeholder="Select option" options={options} value={currentMultiValue} multiple isClearable onSelect={option => handleMultiSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Custom tag component" placeholder="Select option" options={options} value={currentMultiValue} renderTag={customRenderTag} multiple onSelect={option => handleMultiSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Custom icons</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} value={currentValue} arrowUpIcon={otter} arrowDownIcon={dove} onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Clearable" placeholder="Select option" options={options} value={currentValue} isClearable arrowUpIcon={otter} arrowDownIcon={dove} clearIcon={kiwi} onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Searchable" placeholder="Select option" options={options} value={currentValue} isSearchable arrowUpIcon={otter} arrowDownIcon={dove} searchIcon={paw} onSelect={option => handleSelect(option)} />\r
            </div>\r
\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Multiple" placeholder="Select option" options={options} value={currentMultiValue} multiple arrowUpIcon={otter} arrowDownIcon={dove} removeTagIcon={paw} onSelect={option => handleMultiSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Invalid</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} isInvalid error="Error message" value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Required</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} isRequired value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="thuiStorybook__block">\r
          <div className="thuiStorybook__label">Disabled</div>\r
          <div className="thuiStorybook__row">\r
            <div className="thuiStorybook__input-wrapper">\r
              <Component label="Label" placeholder="Select option" options={options} disabled value={currentValue} onSelect={option => handleSelect(option)} />\r
            </div>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(ke=(we=B.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};const lo=["Select"];export{B as Select,lo as __namedExportsOrder,to as default};
