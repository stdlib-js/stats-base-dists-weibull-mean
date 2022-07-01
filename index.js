// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n=function(r){return r!=r},t=Math.floor,e=t,u=function(r){return e(r)===r},f=Number.NEGATIVE_INFINITY,i=f,o=function(r){return 0===r&&1/r===i},c=function(r){return Math.abs(r)},a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),y=Object.prototype.toString,l=y,p=function(r){return l.call(r)},v=Object.prototype.hasOwnProperty,w=function(r,n){return null!=r&&v.call(r,n)},A="function"==typeof Symbol?Symbol.toStringTag:"",s=w,b=A,h=y,d=p,m=function(r){var n,t,e;if(null==r)return h.call(r);t=r[b],n=s(r,b);try{r[b]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[b]=t:delete r[b],e},N=a&&"symbol"==typeof Symbol.toStringTag?m:d,U=N,I="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,F=function(r){return I&&r instanceof Uint32Array||"[object Uint32Array]"===U(r)},S=g,H=function(){var r,n;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),r=F(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},O="function"==typeof Uint32Array?Uint32Array:void 0,T=function(){throw new Error("not implemented")},j=H()?O:T,E=N,G="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,L=function(r){return G&&r instanceof Float64Array||"[object Float64Array]"===E(r)},W=M,x=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),r=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},P="function"==typeof Float64Array?Float64Array:void 0,V=function(){throw new Error("not implemented")},Y=x()?P:V,_=N,k="function"==typeof Uint8Array,q="function"==typeof Uint8Array?Uint8Array:null,z=function(r){return k&&r instanceof Uint8Array||"[object Uint8Array]"===_(r)},B=q,C=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,256,257]),r=z(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},D="function"==typeof Uint8Array?Uint8Array:void 0,J=function(){throw new Error("not implemented")},K=C()?D:J,Q=N,R="function"==typeof Uint16Array,X="function"==typeof Uint16Array?Uint16Array:null,Z=function(r){return R&&r instanceof Uint16Array||"[object Uint16Array]"===Q(r)},$=X,rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,65536,65537]),r=Z(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},nr="function"==typeof Uint16Array?Uint16Array:void 0,tr=function(){throw new Error("not implemented")},er={uint16:rr()?nr:tr,uint8:K};(r=new er.uint16(1))[0]=4660;var ur,fr,ir=52===new er.uint8(r.buffer)[0],or=j,cr=!0===ir?1:0,ar=new Y(1),yr=new or(ar.buffer),lr=function(r){return ar[0]=r,yr[cr]},pr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},vr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},wr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*pr(f),e+=u*u*vr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Ar=-.16666666666666632,sr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Ar+u*t):r-(u*(.5*n-e*t)-n-e*Ar)},br=j,hr=!0===ir?0:1,dr=new Y(1),mr=new br(dr.buffer),Nr=function(r){return dr[0]=r,mr[hr]};!0===ir?(ur=1,fr=0):(ur=0,fr=1);var Ur,Ir,gr=j,Fr={HIGH:ur,LOW:fr},Sr=new Y(1),Hr=new gr(Sr.buffer),Or=Fr.HIGH,Tr=Fr.LOW,jr=function(r,n){return Hr[Or]=r,Hr[Tr]=n,Sr[0]},Er=jr,Gr=Number.POSITIVE_INFINITY,Mr=Gr,Lr=f,Wr=function(r){return r===Mr||r===Lr};!0===ir?(Ur=1,Ir=0):(Ur=0,Ir=1);var xr=j,Pr={HIGH:Ur,LOW:Ir},Vr=new Y(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,kr=Pr.LOW,qr=function(r,n){return Vr[0]=n,r[0]=Yr[_r],r[1]=Yr[kr],r},zr=function(r,n){return 1===arguments.length?qr([0,0],r):qr(r,n)},Br=zr,Cr=Br,Dr=lr,Jr=Er,Kr=[0,0],Qr=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])},Rr=Wr,Xr=n,Zr=c,$r=function(r,n){return Xr(n)||Rr(n)?(r[0]=n,r[1]=0,r):0!==n&&Zr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},rn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},nn=lr,tn=function(r){var n=nn(r);return(n=(2146435072&n)>>>20)-1023|0},en=Gr,un=f,fn=n,on=Wr,cn=Qr,an=rn,yn=tn,ln=Br,pn=Er,vn=[0,0],wn=[0,0],An=function(r,n){var t,e;return 0===n||0===r||fn(r)||on(r)?r:(an(vn,r),n+=vn[1],(n+=yn(r=vn[0]))<-1074?cn(0,r):n>1023?r<0?un:en:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(wn,r),t=wn[0],t&=2148532223,e*pn(t|=n+1023<<20,wn[1])))},sn=An,bn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},hn=t,dn=sn,mn=function(r){return bn(0,r)},Nn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Un=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],In=16777216,gn=5.960464477539063e-8,Fn=mn(20),Sn=mn(20),Hn=mn(20),On=mn(20);function Tn(r,n,t,e,u,f,i,o,c){var a,y,l,p,v,w,A,s,b;for(p=f,b=e[t],s=t,v=0;s>0;v++)y=gn*b|0,On[v]=b-In*y|0,b=e[s-1]+y,s-=1;if(b=dn(b,u),b-=8*hn(.125*b),b-=A=0|b,l=0,u>0?(A+=v=On[t-1]>>24-u,On[t-1]-=v<<24-u,l=On[t-1]>>23-u):0===u?l=On[t-1]>>23:b>=.5&&(l=2),l>0){for(A+=1,a=0,v=0;v<t;v++)s=On[v],0===a?0!==s&&(a=1,On[v]=16777216-s):On[v]=16777215-s;if(u>0)switch(u){case 1:On[t-1]&=8388607;break;case 2:On[t-1]&=4194303}2===l&&(b=1-b,0!==a&&(b-=dn(1,u)))}if(0===b){for(s=0,v=t-1;v>=f;v--)s|=On[v];if(0===s){for(w=1;0===On[f-w];w++);for(v=t+1;v<=t+w;v++){for(c[o+v]=Nn[i+v],y=0,s=0;s<=o;s++)y+=r[s]*c[o+(v-s)];e[v]=y}return Tn(r,n,t+=w,e,u,f,i,o,c)}}if(0===b)for(t-=1,u-=24;0===On[t];)t-=1,u-=24;else(b=dn(b,-u))>=In?(y=gn*b|0,On[t]=b-In*y|0,u+=24,On[t+=1]=y):On[t]=0|b;for(y=dn(1,u),v=t;v>=0;v--)e[v]=y*On[v],y*=gn;for(v=t;v>=0;v--){for(y=0,w=0;w<=p&&w<=t-v;w++)y+=Un[w]*e[v+w];Hn[t-v]=y}for(y=0,v=t;v>=0;v--)y+=Hn[v];for(n[0]=0===l?y:-y,y=Hn[0]-y,v=1;v<=t;v++)y+=Hn[v];return n[1]=0===l?y:-y,7&A}var jn=function(r,n,t,e){var u,f,i,o,c,a,y;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),a=f-(i=e-1),y=i+4,c=0;c<=y;c++)Fn[c]=a<0?0:Nn[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=i;a++)u+=r[a]*Fn[i+(c-a)];Sn[c]=u}return Tn(r,n,4,Sn,o,4,f,i,Fn)},En=Math.round,Gn=lr,Mn=lr,Ln=Nr,Wn=Er,xn=jn,Pn=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=En(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(Gn(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(Gn(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},Vn=1.5707963267341256,Yn=6077100506506192e-26,_n=2*Yn,kn=3*Yn,qn=4*Yn,zn=[0,0,0],Bn=[0,0],Cn=function(r,n){var t,e,u,f,i,o,c;if((u=2147483647&Mn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pn(r,u,n):u<=1073928572?r>0?(c=r-Vn,n[0]=c-Yn,n[1]=c-n[0]-Yn,1):(c=r+Vn,n[0]=c+Yn,n[1]=c-n[0]+Yn,-1):r>0?(c=r-2*Vn,n[0]=c-_n,n[1]=c-n[0]-_n,2):(c=r+2*Vn,n[0]=c+_n,n[1]=c-n[0]+_n,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pn(r,u,n):r>0?(c=r-3*Vn,n[0]=c-kn,n[1]=c-n[0]-kn,3):(c=r+3*Vn,n[0]=c+kn,n[1]=c-n[0]+kn,-3):1075388923===u?Pn(r,u,n):r>0?(c=r-4*Vn,n[0]=c-qn,n[1]=c-n[0]-qn,4):(c=r+4*Vn,n[0]=c+qn,n[1]=c-n[0]+qn,-4);if(u<1094263291)return Pn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Ln(r),c=Wn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)zn[i]=0|c,c=16777216*(c-zn[i]);for(zn[2]=c,f=3;0===zn[f-1];)f-=1;return o=xn(zn,Bn,e,f),r<0?(n[0]=-Bn[0],n[1]=-Bn[1],-o):(n[0]=Bn[0],n[1]=Bn[1],o)},Dn=lr,Jn=wr,Kn=sr,Qn=Cn,Rn=[0,0],Xn=function(r){var n;if(n=Dn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Kn(r,0);if(n>=2146435072)return NaN;switch(3&Qn(r,Rn)){case 0:return Kn(Rn[0],Rn[1]);case 1:return Jn(Rn[0],Rn[1]);case 2:return-Kn(Rn[0],Rn[1]);default:return-Jn(Rn[0],Rn[1])}},Zn=u,$n=function(r){return Zn(r/2)},rt=function(r){return $n(r>0?r-1:r+1)},nt=Math.sqrt,tt=j,et=!0===ir?0:1,ut=new Y(1),ft=new tt(ut.buffer),it=function(r,n){return ut[0]=r,ft[et]=n>>>0,ut[0]},ot=it,ct=function(r){return 0|r},at=rt,yt=Qr,lt=f,pt=Gr,vt=function(r,n){return n===lt?pt:n===pt?0:n>0?at(n)?r:0:at(n)?yt(pt,r):pt},wt=lr,At=function(r,n){return(2147483647&wt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},st=c,bt=Gr,ht=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:st(r)<1==(n===bt)?0:bt},dt=j,mt=!0===ir?1:0,Nt=new Y(1),Ut=new dt(Nt.buffer),It=function(r,n){return Nt[0]=r,Ut[mt]=n>>>0,Nt[0]},gt=lr,Ft=ot,St=It,Ht=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ot=1048576,Tt=[1,1.5],jt=[0,.5849624872207642],Et=[0,1.350039202129749e-8],Gt=ot,Mt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Lt=lr,Wt=It,xt=ot,Pt=ct,Vt=sn,Yt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},_t=2147483647,kt=1048575,qt=1048576,zt=n,Bt=rt,Ct=Wr,Dt=u,Jt=nt,Kt=c,Qt=Br,Rt=ot,Xt=ct,Zt=f,$t=Gr,re=vt,ne=At,te=ht,ee=function(r,n,t){var e,u,f,i,o,c,a,y,l,p,v,w,A,s,b,h,d,m,N,U;return m=0,t<Ot&&(m-=53,t=gt(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?U=0:N<767610?U=1:(U=0,m+=1,t-=Ot),e=524288+(t>>1|536870912),o=(d=1/((n=St(n,t))+(a=Tt[U])))*((h=n-a)-(i=Ft(u=h*d,0))*(c=St(0,e+=U<<18))-i*(n-(c-a))),b=(f=u*u)*f*Ht(f),c=Ft(c=3+(f=i*i)+(b+=o*(i+u)),0),A=(v=-7.028461650952758e-9*(l=Ft(l=(h=i*c)+(d=o*c+(b-(c-3-f))*u),0))+.9617966939259756*(d-(l-h))+Et[U])-((w=Ft(w=(p=.9617967009544373*l)+v+(y=jt[U])+(s=m),0))-s-y-p),r[0]=w,r[1]=A,r},ue=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*Mt(u)*1.4426950408889634)-((e=Gt(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},fe=function(r,n,t){var e,u,f,i,o,c,a,y,l;return l=((y=r&_t|0)>>20)-1023|0,a=0,y>1071644672&&(u=Wt(0,((a=r+(qt>>l+1)>>>0)&~(kt>>(l=((a&_t)>>20)-1023|0)))>>>0),a=(a&kt|qt)>>20-l>>>0,r<0&&(a=-a),n-=u),o=(i=.6931471805599453*(t-((u=xt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(f=.6931471824645996*u)+i)-f),e=c-(u=c*c)*Yt(u),r=Lt(c=1-(c*e/(e-2)-(o+c*o)-c)),r=Pt(r),c=(r+=a<<20>>>0)>>20<=0?Vt(c,a):Wt(c,r)},ie=2147483647,oe=1083179008,ce=1e300,ae=1e-300,ye=[0,0],le=[0,0],pe=function r(n,t){var e,u,f,i,o,c,a,y,l,p,v,w,A,s;if(zt(n)||zt(t))return NaN;if(Qt(ye,t),o=ye[0],0===ye[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Jt(n);if(-.5===t)return 1/Jt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Ct(t))return te(n,t)}if(Qt(ye,n),i=ye[0],0===ye[1]){if(0===i)return re(n,t);if(1===n)return 1;if(-1===n&&Bt(t))return-1;if(Ct(n))return n===Zt?r(-0,-t):t<0?0:$t}if(n<0&&!1===Dt(t))return(n-n)/(n-n);if(f=Kt(n),e=i&ie|0,u=o&ie|0,a=o>>>31|0,c=(c=i>>>31|0)&&Bt(t)?-1:1,u>1105199104){if(u>1139802112)return ne(n,t);if(e<1072693247)return 1===a?c*ce*ce:c*ae*ae;if(e>1072693248)return 0===a?c*ce*ce:c*ae*ae;v=ue(le,f)}else v=ee(le,f,e);if(p=(t-(y=Rt(t,0)))*v[0]+t*v[1],l=y*v[0],Qt(ye,w=p+l),A=Xt(ye[0]),s=Xt(ye[1]),A>=oe){if(0!=(A-oe|s))return c*ce*ce;if(p+8008566259537294e-32>w-l)return c*ce*ce}else if((A&ie)>=1083231232){if(0!=(A-3230714880|s))return c*ae*ae;if(p<=w-l)return c*ae*ae}return c*(w=fe(A,l,p))},ve=pe,we=Math.ceil,Ae=t,se=we,be=sn,he=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},de=n,me=function(r){return r<0?se(r):Ae(r)},Ne=f,Ue=Gr,Ie=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*he(u),be(1-(n-e*f/(2-f)-r),t)},ge=1.4426950408889634,Fe=1/(1<<28),Se=ve,He=function(r){var n;return de(r)||r===Ue?r:r===Ne?0:r>709.782712893384?Ue:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Fe?1+r:(n=me(r<0?ge*r-.5:ge*r+.5),Ie(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Oe=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))},Te=n,je=u,Ee=o,Ge=c,Me=t,Le=Xn,We=Gr,xe=f,Pe=3.141592653589793,Ve=function(r){var n,t,e;return n=1+(n=1/r)*Oe(n),t=He(r),2.5066282746310007*(t=r>143.01608?(e=Se(r,.5*r-.25))*(e/t):Se(r,r-.5)/t)*n},Ye=function(r,n){return n/((1+.5772156649015329*r)*r)},_e=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)},ke=function(r){var n,t,e,u;if(je(r)&&r<0||r===xe||Te(r))return NaN;if(0===r)return Ee(r)?xe:We;if(r>171.61447887182297)return We;if(r<-170.5674972726612)return 0;if((t=Ge(r))>33)return r>=0?Ve(r):(n=0==(1&(e=Me(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Le(Pe*u),n*Pe/(Ge(u)*Ve(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ye(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ye(r,u);u/=r,r+=1}return 2===r?u:u*_e(r-=2)};return function(r,t){return n(r)||n(t)||r<=0||t<=0?NaN:t*ke(1+1/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mean=n();
//# sourceMappingURL=index.js.map
