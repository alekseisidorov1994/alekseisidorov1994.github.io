(function(t){function a(a){for(var s,i,o=a[0],c=a[1],l=a[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(a);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var m=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"02b1":function(t,a,e){"use strict";var s=e("7f46"),n=e.n(s);n.a},3278:function(t){t.exports=JSON.parse('{"posts":[{"id":0,"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/man-in-forest.jpg"],"description":"Постоянно манящие в даль путешествия открывают безграничные возможности для самопознания.","tags":["#forest","#travel","#journey","#holiday"]},"comments":[{"user":{"name":"Anna","family":"Dell","image":"img/avatars/02.png"},"content":"Красиво. "},{"user":{"name":"Aleksey","family":"Sidorov","image":"img/avatars/06.jpg"},"content":"Согласен, очень круто "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"Давно уехал? "}]},{"id":1,"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/girl-pc.jpg"],"description":"Кодить - это просто)","tags":["#js","#jsnative","#fanny","#holiday"]},"comments":[{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"ха-ха-ха "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"тоже так думаю) "},{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":" Html за час и норм"}]},{"id":2,"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/second.jpg"],"description":"Лето самое лучшее время)","tags":["#summer","#smile","#hat"]},"comments":[{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":"А мне зима больше нравится "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"Зимой тоже хорошо) "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"я за осень"}]},{"id":3,"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/js-carousel/00.jpg","img/posts/js-carousel/01.jpg","img/posts/js-carousel/02.jpg","img/posts/js-carousel/03.jpg"],"description":"Лето самое лучшее время)","tags":["#summer","#smile","#hat"]},"comments":[{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":"А мне зима больше нравится "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"Зимой тоже хорошо) "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"я за осень"}]}]}')},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"container"},t._l(t.data.posts,(function(a){return e("Post",{key:a.id,attrs:{post:a},on:{remove:t.removePost}})})),1)],1)},r=[],i=(e("4de4"),e("3278")),o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__row"},[e("a",{staticClass:"header__logo",attrs:{href:"index.html"}},[e("i",{staticClass:"fab fa-dev"})]),e("div",{staticClass:"header__search"},[e("div",{staticClass:"search"},[e("input",{attrs:{type:"text",placeholder:"Поиск"}}),e("div",{staticClass:"search__cancel search__cancel--active"},[e("i",{staticClass:"fas fa-times-circle"})])])]),e("div",{staticClass:"header__links"},[e("a",{staticClass:"header__link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-user"})]),e("a",{staticClass:"header__link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-paper-plane"})])])])])])}],l=(e("8baf"),e("2877")),m={},u=Object(l["a"])(m,o,c,!1,null,null,null),p=u.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post"},[e("div",{staticClass:"post__header"},[e("div",{staticClass:"post__user"},[e("div",{staticClass:"user"},[e("a",{staticClass:"user__avatar",attrs:{href:"#"}},[e("img",{attrs:{src:t.user.image,alt:""}})]),e("a",{staticClass:"user__name",style:{color:"green"},attrs:{href:"#"}},[t._v(" "+t._s(t.user.name)+" "+t._s(t.user.family)+" ")])])]),e("div",{staticClass:"post__links"},[e("a",{staticClass:"edit-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$emit("remove",t.post.id)}}},[e("i",{staticClass:"far fa-trash-alt"}),t._v(" Delete ")]),t._m(0)])]),e("div",{staticClass:"post__img"},[1==t.content.image.length?e("img",{attrs:{src:t.content.image,alt:"Photo"}}):e("div",{staticClass:"slider owl-theme"},t._l(t.content.image,(function(t,a){return e("img",{key:a,attrs:{src:t,alt:"Photo"}})})),0)]),e("div",{staticClass:"post__data"},[e("div",{staticClass:"post__description"},[t._v(" "+t._s(t.content.description)+" ")]),e("div",{staticClass:"post__hashtags"},t._l(t.content.tags,(function(a,s){return e("a",{key:s,attrs:{href:"#"}},[t._v(" "+t._s(a)+" ")])})),0)]),t._l(t.comments,(function(t,a){return e("Comment",{key:a,attrs:{comment:t}})})),t._m(1)],2)},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"edit-link",attrs:{href:"edit.html"}},[e("i",{staticClass:"fas fa-pencil-alt"}),t._v(" Edit ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post__comment-form"},[e("div",{staticClass:"comment-form"},[e("textarea",{staticClass:"comment-form__textarea",attrs:{placeholder:"Добавить комментарий"}}),e("button",{staticClass:"comment-form__button",attrs:{disabled:""}},[t._v("Опубликовать")])])])}],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post__comments"},[e("div",{staticClass:"post-comment"},[e("a",{staticClass:"post-comment__avatar",attrs:{href:"#"}},[e("img",{attrs:{src:t.comment.user.image,alt:""}})]),e("div",{staticClass:"post-comment__text"},[e("a",{staticClass:"post-comment__name",attrs:{href:"#"}},[t._v(t._s(t.comment.user.name)+" "+t._s(t.comment.user.family))]),t._v(" "+t._s(t.comment.content)+" ")])])])},_=[],v={props:["comment"]},h=v,y=Object(l["a"])(h,g,_,!1,null,null,null),C=y.exports,b={props:["post"],data:function(){return{user:this.post.user,content:this.post.content,comments:this.post.comments}},components:{Comment:C},filters:{}},j=b,k=(e("02b1"),Object(l["a"])(j,f,d,!1,null,null,null)),x=k.exports,S={name:"app",components:{Header:p,Post:x},data:function(){return{data:i}},methods:{removePost:function(t){this.data.posts=this.data.posts.filter((function(a){return a.id!==t}))}}},O=S,w=Object(l["a"])(O,n,r,!1,null,null,null),P=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)}}).$mount("#app")},6860:function(t,a,e){},"7f46":function(t,a,e){},"8baf":function(t,a,e){"use strict";var s=e("6860"),n=e.n(s);n.a}});
//# sourceMappingURL=app.e9be9bd3.js.map