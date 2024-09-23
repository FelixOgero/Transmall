(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9873],{62540:function(e,t,a){Promise.resolve().then(a.bind(a,85510))},51618:function(e){"use strict";let t=new Set(["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED","HOSTNAME_MISMATCH"]);e.exports=e=>!t.has(e&&e.code)},16463:function(e,t,a){"use strict";var r=a(71169);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}}),a.o(r,"useServerInsertedHTML")&&a.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},85510:function(e,t,a){"use strict";a.r(t);var r=a(57437),s=a(2265),n=a(11444),c=a(16463),o=a(87138),d=a(89733),i=a(77209),u=a(70402),l=a(71976),p=a(47019),g=a(75733),f=a(79340),y=a(15988);t.default=()=>{let{user:e,loading:t,error:a,success:m}=(0,n.v9)(e=>e.auth),[h,w]=(0,s.useState)({message:null}),[x,C]=(0,s.useState)({emailOrUsername:"",password:""}),[E,N]=(0,s.useState)(!1),[v,b]=(0,s.useState)(!1),{emailOrUsername:_,password:Z}=x,R=(0,n.I0)(),T=(0,c.useRouter)();(0,s.useEffect)(()=>{m&&e&&(T.replace("/dashboard"),R((0,y.mc)()))},[e,m,T,R]);let S=e=>{C(t=>({...t,[e.target.name]:e.target.value}))};return v?(0,r.jsx)("div",{className:"flex h-screen w-screen flex-col bg-gray-50 p-4",children:(0,r.jsxs)("div",{className:"flex flex-1",children:[(0,r.jsxs)("div",{className:"hidden lg:block w-20 bg-gray-200 animate-pulse h-full p-4 space-y-4",children:[(0,r.jsx)("div",{className:"h-8 w-full bg-gray-300 rounded"}),(0,r.jsx)("div",{className:"h-6 w-3/4 bg-gray-300 rounded"}),(0,r.jsx)("div",{className:"h-6 w-2/3 bg-gray-300 rounded"}),(0,r.jsx)("div",{className:"h-6 w-1/2 bg-gray-300 rounded"}),(0,r.jsx)("div",{className:"h-6 w-3/4 bg-gray-300 rounded"}),(0,r.jsx)("div",{className:"h-6 w-2/3 bg-gray-300 rounded"})]}),(0,r.jsxs)("div",{className:"flex-1 bg-gray-100 p-6 space-y-4",children:[(0,r.jsx)("div",{className:"h-8 w-3/4 bg-gray-300 animate-pulse rounded"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"}),(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"}),(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"}),(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"})]}),(0,r.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse rounded"})]})]})}):(0,r.jsx)("div",{className:"flex h-screen w-screen flex-col items-center justify-center bg-gray-50",children:(0,r.jsxs)("div",{className:"mx-auto flex w-full max-w-md flex-col justify-center space-y-6 bg-white p-8 shadow-lg rounded-lg",children:[(0,r.jsx)("div",{className:"flex flex-col space-y-2 text-center",children:(0,r.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Welcome Back"})}),(0,r.jsx)("p",{className:"text-sm text-center text-gray-500",children:(0,r.jsxs)(o.default,{className:(0,d.d)({variant:"link",className:"gap-1.5"}),href:"/signup",children:["Don't have an account? Sign Up",(0,r.jsx)(l.Z,{className:"h-4 w-4"})]})}),a&&"generic"===a.field&&(0,r.jsx)("p",{className:"text-red-500 mt-4 text-xs italic",children:h.message}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t={password:Z,client:"web",.../\S+@\S+\.\S+/.test(_)?{email:_}:{username:_}};R((0,f.x4)(t))},method:"POST",className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(u._,{htmlFor:"emailOrUsername",className:"block text-sm font-medium text-gray-700",children:"Email/Username"}),(0,r.jsx)(i.I,{id:"emailOrUsername",type:"text",name:"emailOrUsername",value:_,onChange:S,className:"mt-1 block w-full ".concat(a&&"username"===a.field?"border-red-500":""),placeholder:"email or username"}),a&&("username"===a.field||"password"===a.field)&&(0,r.jsx)("p",{className:"mt-1 text-xs text-red-500",children:a.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u._,{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,r.jsxs)("div",{className:"relative mt-1",children:[(0,r.jsx)(i.I,{id:"password",type:E?"text":"password",name:"password",value:Z,onChange:S,className:"block w-full pr-10 ".concat(a&&"password"===a.field?"border-red-500":""),placeholder:"••••••••"}),(0,r.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center pr-3",onClick:()=>N(!E),children:E?(0,r.jsx)(p.Z,{className:"h-5 w-5 text-gray-400"}):(0,r.jsx)(g.Z,{className:"h-5 w-5 text-gray-400"})})]}),a&&("password"===a.field||"password"===a.field)&&(0,r.jsx)("p",{className:"mt-1 text-xs text-red-500",children:a.message})]}),(0,r.jsx)(d.z,{type:"submit",className:"w-full",disabled:t,children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{role:"status",className:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5651 82.6026 25.8716C85.1192 29.2578 87.1381 33.017 88.5575 37.0228C89.3583 39.3815 91.5422 40.7455 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Logging in..."]}):"Sign in"})]}),(0,r.jsx)("div",{className:"text-center text-sm",children:(0,r.jsxs)(o.default,{href:"/forgot",className:"font-medium text-blue-600 hover:text-blue-500",children:["Forgot Password ? Click here"," ",(0,r.jsx)(l.Z,{className:"inline h-4 w-5"})]})})]})})}},89733:function(e,t,a){"use strict";a.d(t,{d:function(){return d},z:function(){return i}});var r=a(57437),s=a(2265),n=a(92974),c=a(12218),o=a(49354);let d=(0,c.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:a,variant:s,size:c,asChild:i=!1,...u}=e,l=i?n.g7:"button";return(0,r.jsx)(l,{className:(0,o.cn)(d({variant:s,size:c,className:a})),ref:t,...u})});i.displayName="Button"},77209:function(e,t,a){"use strict";a.d(t,{I:function(){return c}});var r=a(57437),s=a(2265),n=a(49354);let c=s.forwardRef((e,t)=>{let{className:a,type:s,...c}=e;return(0,r.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...c})});c.displayName="Input"},70402:function(e,t,a){"use strict";a.d(t,{_:function(){return i}});var r=a(57437),s=a(2265),n=a(57200),c=a(12218),o=a(49354);let d=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.f,{ref:t,className:(0,o.cn)(d(),a),...s})});i.displayName=n.f.displayName},33628:function(e,t,a){"use strict";a.d(t,{app:function(){return r}});let r={APP_NAME:"Transmall",APP_ENV:"prod",BACKEND_URL:"https://dev.api.transmall.app/api/v1",RECAPTCHA_SITE_KEY:"6LeyifghAAAAAOt4Mmxwm2Zb5AbKTzBEpKNUnGIN",RECAPTCHA_SECRET_KEY:"6LeyifghAAAAAHta2NfzzZGhKCQuB2s80JNqDws0",ANALYTICS_ID:"G-WV2KDP3H48"}},49354:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var r=a(44839),s=a(96164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}},79340:function(e,t,a){"use strict";a.d(t,{Cp:function(){return g},OU:function(){return i},T:function(){return u},Z3:function(){return l},f6:function(){return d},kS:function(){return p},x4:function(){return c},z2:function(){return o}});var r=a(66862),s=a(64721),n=a(31887);let c=(0,r.hg)("auth/login",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.login(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),o=(0,r.hg)("auth/register",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.register(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),d=(0,r.hg)("auth/forgot",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.forgot(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),i=(0,r.hg)("auth/passwordReset",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.passwordReset(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),u=(0,r.hg)("auth/verify",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.verify(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),l=(0,r.hg)("auth/sendCode",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.sendCode(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}}),p=(0,r.hg)("auth/logout",async(e,t)=>{let{dispatch:a}=t;n.t.purge("user"),a(authSlice.actions.reset())}),g=(0,r.hg)("auth/password/change",async(e,t)=>{let{rejectWithValue:a}=t;try{return await s.ON.changePassword(e)}catch(e){if(e.response&&e.response.data)return a(e.response.data.errors[0]);return a(e.message)}})},15337:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r,s=a(38472),n=a(26389),c=a(31887),o=a(82692),d=a(33628);let{BACKEND_URL:i}=d.app,u=async e=>{if(e.response&&(401===e.response.status||403===e.response.status&&"Expired token"===e.response.data.errors[0].message)){let t=JSON.parse(c.t.get("user"));try{let{user:a,token:r,refreshToken:n}=(await s.Z.post("".concat(i,"/identity/auth/refresh"),{refreshToken:t.refreshToken})).data.data;c.t.set("user",JSON.stringify({user:a,token:r,refreshToken:n}));let{url:o,method:d,data:u}=e.config,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}};if("get"===d)return await s.Z.get(o,l);if("post"===d)return await s.Z.post(o,u,l);if("put"===d)return await s.Z.put(o,u,l);if("delete"===d)return await s.Z.delete(o,l)}catch(e){if(400===e.response.status)return window.location.href="/login",o.Z.logout();return Promise.reject(e)}}return Promise.reject(e)};var l=((r=(()=>{let e=s.Z.create({baseURL:d.app.BACKEND_URL,headers:{"Content-Type":"application/json"}});return(0,n.ZP)(e,{retries:3}),e})()).interceptors.request.use(e=>{let{token:t}=JSON.parse(c.t.get("user"));return e.headers.Authorization="Bearer ".concat(t),e},e=>Promise.reject(e)),r.interceptors.response.use(e=>e,u),r)},82692:function(e,t,a){"use strict";var r=a(38472),s=a(31887),n=a(33628),c=a(15337);let{BACKEND_URL:o}=n.app,d=async e=>{let t=await r.Z.post("".concat(o,"/identity/auth/login"),e);if(t.data){let{user:e,token:a,refreshToken:r}=t.data.data;s.t.set("user",JSON.stringify({user:e,token:a,refreshToken:r}))}return t.data.data},i=async e=>(await r.Z.post("".concat(o,"/identity/auth/register"),e)).data.data,u=async e=>(await r.Z.post("".concat(o,"/identity/auth/password/forgot"),e)).data.data,l=async e=>(await r.Z.post("".concat(o,"/identity/auth/password/reset"),e)).data.data,p=async e=>(await r.Z.post("".concat(o,"/identity/auth/verifyCode"),e)).data.data,g=async e=>(await r.Z.post("".concat(o,"/identity/auth/password/send/code"),e)).data.data,f=async e=>(await c.Z.post("".concat(o,"/identity/auth/password/change"),e)).data.data;t.Z={login:d,register:i,forgot:u,passwordReset:l,verify:p,sendCode:g,logout:()=>{s.t.purge("user"),s.t.purge("business")},changePassword:f}},64721:function(e,t,a){"use strict";a.d(t,{ON:function(){return r.Z},ug:function(){return y},CK:function(){return l},LZ:function(){return E},jl:function(){return h},_7:function(){return g},a:function(){return x},Tn:function(){return i},W4:function(){return o}});var r=a(82692),s=a(33628),n=a(15337);let{BACKEND_URL:c}=s.app;var o={getUser:async e=>(await n.Z.get("".concat(c,"/identity/users/").concat(e))).data.data,getUsers:async()=>(await n.Z.get("".concat(c,"/identity/users"))).data.data,createUser:async e=>(await n.Z.post("".concat(c,"/identity/users"),e,{headers:{"Content-Type":"multipart/form-data"}})).data.data,updateUser:async(e,t)=>(await n.Z.post("".concat(c,"/identity/users/").concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data.data,deleteUser:async e=>(await n.Z.delete("".concat(c,"/identity/users/").concat(e))).data.data,getRoles:async()=>(await n.Z.get("".concat(c,"/identity/roles"))).data.data,bulkDelete:async e=>(await n.Z.post("".concat(c,"/identity/users/bulk-delete"),e)).data.data,updateProfile:async e=>(await n.Z.post("".concat(c,"/identity/users/profile"),e,{headers:{"Content-Type":"multipart/form-data"}})).data.data};let{BACKEND_URL:d}=s.app;var i={getStore:async e=>(await n.Z.get("".concat(d,"/identity/stores/").concat(e))).data.data,getStores:async()=>(await n.Z.get("".concat(d,"/identity/stores"))).data.data,createStore:async e=>(await n.Z.post("".concat(d,"/identity/stores"),e)).data.data,updateStore:async(e,t)=>(await n.Z.put("".concat(d,"/identity/stores/").concat(e),t)).data.data,deleteStore:async e=>(await n.Z.delete("".concat(d,"/identity/stores/").concat(e))).data.data,bulkDelete:async e=>(await n.Z.post("".concat(d,"/identity/stores/bulk-delete"),e)).data.data};let{BACKEND_URL:u}=s.app;var l={getCustomer:async e=>(await n.Z.get("".concat(u,"/identity/customers/").concat(e))).data.data,getCustomers:async()=>(await n.Z.get("".concat(u,"/identity/customers"))).data.data,createCustomer:async e=>(await n.Z.post("".concat(u,"/identity/customers"),e)).data.data,updateCustomer:async(e,t)=>(await n.Z.put("".concat(u,"/identity/customers/").concat(e),t)).data.data,deleteCustomer:async e=>(await n.Z.delete("".concat(u,"/identity/customers/").concat(e))).data.data,bulkDelete:async e=>(await n.Z.post("".concat(u,"/identity/customers/bulk-delete"),e)).data.data};let{BACKEND_URL:p}=s.app;var g={getProduct:async e=>(await n.Z.get("".concat(p,"/core/products/").concat(e))).data.data,getProducts:async()=>(await n.Z.get("".concat(p,"/core/products"))).data.data,createProduct:async e=>(await n.Z.post("".concat(p,"/core/products"),e,{headers:{"Content-Type":"multipart/form-data"}})).data.data,updateProduct:async(e,t)=>(console.log(t),(await n.Z.post("".concat(p,"/core/products/").concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data.data),deleteProduct:async e=>(await n.Z.delete("".concat(p,"/core/products/").concat(e))).data.data,bulkDelete:async e=>(await n.Z.post("".concat(p,"/core/products/bulk-delete"),e)).data.data,getProductCategories:async()=>(await n.Z.get("".concat(p,"/core/products/categories?perPage=50"))).data.data,updateProductCategory:async(e,t)=>(await n.Z.put("".concat(p,"/core/products/categories/").concat(e),t)).data.data,getProductManufacturers:async()=>(await n.Z.get("".concat(p,"/core/products/manufacturers"))).data.data,createProductManufacturer:async e=>(await n.Z.post("".concat(p,"/core/products/manufacturers"),e)).data.data,updateProductManufacturer:async(e,t)=>(await n.Z.put("".concat(p,"/core/products/manufacturers/").concat(e),t)).data.data,deleteProductManufacturer:async e=>(await n.Z.delete("".concat(p,"/core/products/").concat(e))).data.data,getProductSubCategories:async e=>(await n.Z.get("".concat(p,"/core/products/subcategories?perPage=").concat(e))).data.data,getProductSubCategory:async e=>(await n.Z.get("".concat(p,"/core/products/subcategories/").concat(e))).data.data,createProductSubCategory:async e=>(await n.Z.post("".concat(p,"/core/products/subcategories"),e)).data.data,updateProductSubCategory:async(e,t)=>(await n.Z.put("".concat(p,"/core/products/subcategories/").concat(e),t)).data.data,deleteProductSubCategory:async e=>(await n.Z.delete("".concat(p,"/core/products/subcategories/").concat(e))).data.data,getProductBrand:async e=>(await n.Z.get("".concat(p,"/core/products/brands/").concat(e))).data.data,getProductBrands:async()=>(await n.Z.get("".concat(p,"/core/products/brands?perPage=200"))).data.data,createProductBrand:async e=>(await n.Z.post("".concat(p,"/core/products/brands"),e,{headers:{"Content-Type":"multipart/form-data"}})).data.data,updateProductBrand:async(e,t)=>(await n.Z.put("".concat(p,"/core/products/brands/").concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data.data,deleteProductBrand:async e=>(await n.Z.delete("".concat(p,"/core/products/brands/").concat(e))).data.data,getProductSupplier:async e=>(await n.Z.get("".concat(p,"/core/products/suppliers/").concat(e))).data.data,getProductSuppliers:async()=>(await n.Z.get("".concat(p,"/core/products/suppliers"))).data.data,createProductSupplier:async e=>(await n.Z.post("".concat(p,"/core/products/suppliers"),e)).data.data,updateProductSupplier:async(e,t)=>(await n.Z.put("".concat(p,"/core/products/suppliers/").concat(e),t)).data.data,deleteProductSupplier:async e=>(await n.Z.delete("".concat(p,"/core/products/suppliers/").concat(e))).data.data,getProductUnits:async()=>(await n.Z.get("".concat(p,"/core/products/units?perPage=50"))).data.data,getTaxCategories:async()=>(await n.Z.get("".concat(p,"/core/taxes/categories"))).data.data};let{BACKEND_URL:f}=s.app;var y={updateBusiness:async(e,t)=>(await n.Z.post("".concat(f,"/identity/business/").concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data.data,getBusiness:async e=>(await n.Z.get("".concat(f,"/identity/business/").concat(e))).data.data,getBusinesses:async()=>(await n.Z.get("".concat(f,"/identity/business"))).data.data,createBusiness:async e=>(await n.Z.post("".concat(f,"/identity/business"),e)).data.data,deleteBusiness:async e=>(await n.Z.delete("".concat(f,"/identity/business/").concat(e))).data.data,getBusinessTypes:async e=>(await n.Z.get("".concat(f,"/identity/business/types?perPage=50"))).data.data};let{BACKEND_URL:m}=s.app;var h={getInventory:async e=>(await n.Z.get("".concat(m,"/core/inventories/").concat(e))).data.data,getInventories:async()=>(await n.Z.get("".concat(m,"/core/inventories"))).data.data,createInventory:async e=>(await n.Z.post("".concat(m,"/core/inventories"),e)).data.data};let{BACKEND_URL:w}=s.app;var x={getSale:async e=>(await n.Z.get("".concat(w,"/core/sales/").concat(e))).data.data,getSales:async()=>(await n.Z.get("".concat(w,"/core/sales"))).data.data,createSale:async e=>(await n.Z.post("".concat(w,"/core/sales"),e)).data.data,updateSale:async(e,t)=>(await n.Z.put("".concat(w,"/core/sales/").concat(e),t)).data.data,deleteSale:async e=>(await n.Z.delete("".concat(w,"/core/sales/").concat(e))).data.data};let{BACKEND_URL:C}=s.app;var E={getExpense:async e=>(await n.Z.get("".concat(C,"/core/expenses/").concat(e))).data.data,getExpenses:async()=>(await n.Z.get("".concat(C,"/core/expenses"))).data.data,createExpense:async e=>(await n.Z.post("".concat(C,"/core/expenses"),e,{headers:{"Content-Type":"multipart/form-data"}})).data.data,updateExpense:async(e,t)=>(await n.Z.post("".concat(C,"/core/expenses/").concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data.data,deleteExpense:async e=>(await n.Z.delete("".concat(C,"/core/expenses/").concat(e))).data.data,bulkDelete:async e=>(await n.Z.post("".concat(C,"/core/expenses/bulk-delete"),e)).data.data,getExpenseCategories:async()=>(await n.Z.get("".concat(C,"/core/expenses/categories"))).data.data}},15988:function(e,t,a){"use strict";a.d(t,{mc:function(){return d}});var r=a(66862),s=a(31887),n=a(79340);let c={user:null,error:null,success:!1,resetSuccess:!1,loading:!1,userInfo:null,password:!1,verified:!1,updated:!1,deleted:!1,resending:!1,resent:!1};{let e=JSON.parse(s.t.get("user"));e&&(c.user=e)}let o=(0,r.oM)({name:"auth",initialState:c,reducers:{reset:e=>c},extraReducers:e=>{e.addCase(n.x4.pending,e=>{e.loading=!0}).addCase(n.x4.fulfilled,(e,t)=>{e.loading=!1,e.success=!0,e.user=t.payload}).addCase(n.x4.rejected,(e,t)=>{e.loading=!1,e.error=t.payload,e.user=null}).addCase(n.z2.pending,e=>{e.loading=!0}).addCase(n.z2.fulfilled,(e,t)=>{e.loading=!1,e.success=!0,e.userInfo=t.payload}).addCase(n.z2.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(n.f6.pending,e=>{e.loading=!0}).addCase(n.f6.fulfilled,(e,t)=>{e.loading=!1,e.success=!0,e.userInfo=t.payload}).addCase(n.f6.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(n.OU.pending,e=>{e.loading=!0}).addCase(n.OU.fulfilled,(e,t)=>{e.loading=!1,e.resetSuccess=!0,e.userInfo=t.payload}).addCase(n.OU.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(n.T.pending,e=>{e.loading=!0}).addCase(n.T.fulfilled,(e,t)=>{e.loading=!1,e.verified=!0,e.userInfo=t.payload}).addCase(n.T.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(n.Z3.pending,e=>{e.resending=!0}).addCase(n.Z3.fulfilled,(e,t)=>{e.resending=!1,e.resent=!0,e.userInfo=t.payload}).addCase(n.Z3.rejected,(e,t)=>{e.resending=!1,e.error=t.payload}).addCase(n.kS.pending,e=>{e.loading=!0}).addCase(n.kS.fulfilled,e=>{e.loading=!1,e.success=!0,e.user=null}).addCase(n.kS.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(n.Cp.pending,e=>{e.loading=!0}).addCase(n.Cp.fulfilled,(e,t)=>{e.loading=!1,e.success=!0,e.password=!0,e.userInfo=t.payload}).addCase(n.Cp.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})}}),{reset:d}=o.actions;t.ZP=o.reducer},31887:function(e,t,a){"use strict";a.d(t,{t:function(){return n}});var r=a(33628);let s="transmall:".concat(r.app.APP_ENV),n={get(e){try{return window.localStorage.getItem("".concat(s,":").concat(e))}catch(e){return console.error(e),null}},set(e,t){try{window.localStorage.setItem("".concat(s,":").concat(e),t)}catch(e){console.error(e)}},purge(e){try{window.localStorage.removeItem("".concat(s,":").concat(e))}catch(e){console.error(e)}}}},26389:function(e,t,a){"use strict";var r=a(51618);let s="axios-retry";function n(e){return!(e.response||!e.code||["ERR_CANCELED","ECONNABORTED"].includes(e.code))&&r(e)}let c=["get","head","options"],o=c.concat(["put","delete"]);function d(e){return"ECONNABORTED"!==e.code&&(!e.response||429===e.response.status||e.response.status>=500&&e.response.status<=599)}function i(e){return!!e.config?.method&&d(e)&&-1!==o.indexOf(e.config.method)}function u(e){return n(e)||i(e)}function l(e){let t=e?.response?.headers["retry-after"];if(!t)return 0;let a=1e3*(Number(t)||0);return 0===a&&(a=(new Date(t).valueOf()||0)-Date.now()),Math.max(0,a)}let p={retries:3,retryCondition:u,retryDelay:function(e=0,t){return Math.max(0,l(t))},shouldResetTimeout:!1,onRetry:()=>{},onMaxRetryTimesExceeded:()=>{},validateResponse:null};function g(e,t,a=!1){var r;let n=(r=t||{},{...p,...r,...e[s]});return n.retryCount=n.retryCount||0,(!n.lastRequestTime||a)&&(n.lastRequestTime=Date.now()),e[s]=n,n}async function f(e,t){let{retries:a,retryCondition:r}=e,s=(e.retryCount||0)<a&&r(t);if("object"==typeof s)try{let e=await s;return!1!==e}catch(e){return!1}return s}async function y(e,t,a,r){t.retryCount+=1;let{retryDelay:s,shouldResetTimeout:n,onRetry:c}=t,o=s(t.retryCount,a);if(e.defaults.agent===r.agent&&delete r.agent,e.defaults.httpAgent===r.httpAgent&&delete r.httpAgent,e.defaults.httpsAgent===r.httpsAgent&&delete r.httpsAgent,!n&&r.timeout&&t.lastRequestTime){let e=Date.now()-t.lastRequestTime,s=r.timeout-e-o;if(s<=0)return Promise.reject(a);r.timeout=s}return(r.transformRequest=[e=>e],await c(t.retryCount,a,r),r.signal?.aborted)?Promise.resolve(e(r)):new Promise(t=>{let a=()=>{clearTimeout(s),t(e(r))},s=setTimeout(()=>{t(e(r)),r.signal?.removeEventListener&&r.signal.removeEventListener("abort",a)},o);r.signal?.addEventListener&&r.signal.addEventListener("abort",a,{once:!0})})}async function m(e,t){e.retryCount>=e.retries&&await e.onMaxRetryTimesExceeded(t,e.retryCount)}let h=(e,t)=>({requestInterceptorId:e.interceptors.request.use(e=>(g(e,t,!0),e[s]?.validateResponse&&(e.validateStatus=()=>!1),e)),responseInterceptorId:e.interceptors.response.use(null,async a=>{let{config:r}=a;if(!r)return Promise.reject(a);let s=g(r,t);return a.response&&s.validateResponse?.(a.response)?a.response:await f(s,a)?y(e,s,a,r):(await m(s,a),Promise.reject(a))})});h.isNetworkError=n,h.isSafeRequestError=function(e){return!!e.config?.method&&d(e)&&-1!==c.indexOf(e.config.method)},h.isIdempotentRequestError=i,h.isNetworkOrIdempotentRequestError=u,h.exponentialDelay=function(e=0,t,a=100){let r=Math.max(2**e*a,l(t));return r+.2*r*Math.random()},h.linearDelay=function(e=100){return(t=0,a)=>Math.max(t*e,l(a))},h.isRetryableError=d,t.ZP=h}},function(e){e.O(0,[8472,231,1444,6862,8334,2971,7023,1744],function(){return e(e.s=62540)}),_N_E=e.O()}]);