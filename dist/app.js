!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=23)}([function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},function(e,n,t){var r=t(16),a=t(17);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?a(e):n}},function(e,n,t){var r=t(18);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},function(e,n,t){var r=t(19),a=t(20),i=t(21);e.exports=function(e){return r(e)||a(e)||i()}},function(e,n,t){var r=t(22);function a(n,t,i){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=a=Reflect.get:e.exports=a=function(e,n,t){var a=r(e,n);if(a){var i=Object.getOwnPropertyDescriptor(a,n);return i.get?i.get.call(t):i.value}},a(n,t,i||n)}e.exports=a},function(e){e.exports=JSON.parse('{"posts":[{"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/man-in-forest.jpg"],"description":"Постоянно манящие в даль путешествия открывают безграничные возможности для самопознания.","tags":["#forest","#travel","#journey","#holiday"]},"comments":[{"user":{"name":"Anna","family":"Dell","image":"img/avatars/02.png"},"content":"Красиво. "},{"user":{"name":"Aleksey","family":"Sidorov","image":"img/avatars/06.jpg"},"content":"Согласен, очень круто "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"Давно уехал? "}]},{"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/girl-pc.jpg"],"description":"Кодить - это просто)","tags":["#js","#jsnative","#fanny","#holiday"]},"comments":[{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"ха-ха-ха "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"тоже так думаю) "},{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":" Html за час и норм"}]},{"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/second.jpg"],"description":"Лето самое лучшее время)","tags":["#summer","#smile","#hat"]},"comments":[{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":"А мне зима больше нравится "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"Зимой тоже хорошо) "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"я за осень"}]},{"user":{"name":"Alex","family":"Smith","image":"img/avatars/01.png"},"content":{"image":["img/posts/js-carousel/00.jpg","img/posts/js-carousel/01.jpg","img/posts/js-carousel/02.jpg","img/posts/js-carousel/03.jpg"],"description":"Немного снипетов js","tags":["#summer","#smile","#hat"]},"comments":[{"user":{"name":"Masha","family":"Ford","image":"img/avatars/05.png"},"content":" больше снипетов "},{"user":{"name":"Mark","family":"Link","image":"img/avatars/04.png"},"content":"круто) "},{"user":{"name":"Sasha","family":"Sorova","image":"img/avatars/03.png"},"content":"хорошо"}]}]}')},function(e,n){e.exports='<div class="header">\r\n    <div class="container">\r\n        <div class="header__row">\r\n            <a href="index.html" class="header__logo">\r\n                <i class="fab fa-dev"></i>\r\n            </a>\r\n\r\n            <div class="header__search">\r\n                <div class="search">\r\n                    <input type="text" placeholder="Поиск">\r\n                    <div class="search__cancel search__cancel--active">\r\n                        <i class="fas fa-times-circle"></i>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class="header__links">\r\n                <a href="#" class="header__link">\r\n                    <i class="fas fa-user"></i>\r\n                </a>\r\n                <a href="#" class="header__link">\r\n                    <i class="fas fa-paper-plane"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},function(e,n){e.exports='<div class="container"></div>'},function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},function(e,n){e.exports='<div class="post">\r\n\r\n    <div class="post__header">\r\n\r\n        <div class="post__user">\r\n            <div class="user">\r\n                <a href="#" class="user__avatar">\r\n                    <img src="{{user.image}}" alt="">\r\n                </a>\r\n                <a href="#" class="user__name">\r\n                   {{user.name}} {{user.family}}\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="post__links">\r\n            <a href="#" class="edit-link">\r\n                <i class="far fa-trash-alt"></i>\r\n                Delete\r\n            </a>\r\n\r\n\r\n            <a href="edit.html" class="edit-link">\r\n                <i class="fas fa-pencil-alt"></i>\r\n                Edit\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class="post__img">\r\n        <img src="{{content.image}}" alt="Photo">\r\n    </div>\r\n\r\n    \x3c!-- post__data  --\x3e\r\n    <div class="post__data">\r\n\r\n        <div class="post__description">\r\n            {{content.description}}\r\n        </div>\r\n\r\n        <div class="post__hashtags">\r\n            <a href="#">{{content.tags}}</a>\r\n            \r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>'},function(e,n){e.exports='  \r\n<div class="post__comments">\r\n    \r\n</div>'},function(e,n){e.exports='<div class="post-comment">\r\n    <a href="#" class="post-comment__avatar">\r\n        <img src="{{image}}" alt="">\r\n    </a>\r\n    <div class="post-comment__text">\r\n        <a href="#" class="post-comment__name">{{name}} {{family}}</a> \r\n        {{content}}\r\n    </div>\r\n</div>'},function(e,n){e.exports='<div class="post__comment-form">\r\n    <div class="comment-form">\r\n        <textarea class="comment-form__textarea" placeholder="Добавить комментарий"></textarea>\r\n        <button disabled class="comment-form__button">Опубликовать</button>\r\n    </div>\r\n</div>'},function(e,n){e.exports='<div class="post">\r\n\r\n    <div class="post__header">\r\n\r\n        <div class="post__user">\r\n            <div class="user">\r\n                <a href="#" class="user__avatar">\r\n                    <img src="{{user.image}}" alt="">\r\n                </a>\r\n                <a href="#" class="user__name">\r\n                   {{user.name}} {{user.family}}\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="post__links">\r\n            <a href="#" class="edit-link">\r\n                <i class="far fa-trash-alt"></i>\r\n                Delete\r\n            </a>\r\n\r\n\r\n            <a href="edit.html" class="edit-link">\r\n                <i class="fas fa-pencil-alt"></i>\r\n                Edit\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class="post__img">\r\n        <div class="slider owl-theme">\r\n            {{content.image}}\r\n        </div>\r\n    </div>\r\n    \r\n\r\n    \x3c!-- post__data  --\x3e\r\n    <div class="post__data">\r\n\r\n        <div class="post__description">\r\n            {{content.description}}\r\n        </div>\r\n\r\n        <div class="post__hashtags">\r\n            <a href="#">{{content.tags}}</a>\r\n            \r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>'},function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},function(e,n){e.exports=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},function(e,n){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,n,t){var r=t(2);e.exports=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=r(e)););return e}},function(e,n,t){"use strict";t.r(n);var r=t(7),a=t(0),i=t.n(a),o=t(1),s=t.n(o),c=function(){function e(){i()(this,e),this.page=null,this.pages=[]}return s()(e,[{key:"add",value:function(e){this.pages.push(e)}},{key:"update",value:function(){var e=!0,n=!1,t=void 0;try{for(var r,a=this.pages[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var i=r.value;location.pathname.match(i.path)&&(this.page=i)}}catch(e){n=!0,t=e}finally{try{e||null==a.return||a.return()}finally{if(n)throw t}}}}]),e}(),l=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this,e),this.root=n.root,this.router=new c}return s()(e,[{key:"update",value:function(){this.router.update(),this.root.innerHTML="",this.root.append(this.router.page.fragment)}}]),e}(),u=t(3),m=t.n(u),p=t(2),f=t.n(p),d=t(4),g=t.n(d),v=function(){function e(n){i()(this,e),this.type=n}return s()(e,[{key:"getHtmlElement",value:function(){return HtmlTemplate}},{key:"render",value:function(){var e=document.createElement("div");return e.innerHTML=this.getHtmlElement(),e.firstElementChild}}]),e}(),h=t(8),y=t.n(h),_=function(e){function n(){return i()(this,n),m()(this,f()(n).call(this,"header"))}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return y.a}}]),n}(v),b=t(5),x=t.n(b),j=t(6),O=t.n(j),k=t(9),w=t.n(k),S=function(e){function n(){var e;return i()(this,n),(e=m()(this,f()(n).call(this,"container"))).components=[],e}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return w.a}},{key:"add",value:function(e){this.components.push(e)}},{key:"render",value:function(){var e=O()(f()(n.prototype),"render",this).call(this);return e.append.apply(e,x()(this.components.map((function(e){return e.render()})))),e}}]),n}(v),P=t(10),E=t.n(P),H=t(11),M=t.n(H),A=t(12),D=t.n(A),T=t(13),C=t.n(T),L=function(e){function n(e){var t;return i()(this,n),(t=m()(this,f()(n).call(this,"comment"))).comment=e,t}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return C.a.replace(/{{name}}/g,this.comment.user.name).replace(/{{family}}/g,this.comment.user.family).replace(/{{image}}/g,this.comment.user.image).replace(/{{content}}/g,this.comment.content)}}]),n}(v),F=function(e){function n(e){var t;return i()(this,n),(t=m()(this,f()(n).call(this,"wrapComment"))).comments=e,t}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return D.a}},{key:"render",value:function(){var e=O()(f()(n.prototype),"render",this).call(this);return e.append.apply(e,x()(this.comments.map((function(e){return new L(e).render()})))),e}}]),n}(v),N=t(14),R=t.n(N),q=function(e){function n(){return i()(this,n),m()(this,f()(n).call(this,"addComment"))}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return R.a}}]),n}(v);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var J=function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this,n),e=m()(this,f()(n).call(this,"post"));var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({user:{name:"NoName",family:"NoFamily",image:"Oops"},content:{description:"",image:[],tags:[]},comments:[]},t);return e.user={name:r.user.name,family:r.user.family,image:r.user.image},e.content={image:r.content.image,description:r.content.description,tags:r.content.tags},e.comments=r.comments.map((function(e){return{user:{name:e.user.name,family:e.user.family,image:e.user.image},content:e.content}})),e}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return M.a.replace(/{{user.name}}/g,this.user.name).replace(/{{user.family}}/g,this.user.family).replace(/{{user.image}}/g,this.user.image).replace(/{{content.image}}/g,this.content.image).replace(/{{content.description}}/g,this.content.description).replace(/{{content.tags}}/g,this.content.tags.join(" "))}},{key:"render",value:function(){var e=new F(this.comments),t=new q,r=O()(f()(n.prototype),"render",this).call(this);return r.append(e.render()),r.append(t.render()),r}}]),n}(v),z=t(15),B=t.n(z),G=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i()(this,n),m()(this,f()(n).call(this,e))}return g()(n,e),s()(n,[{key:"getHtmlElement",value:function(){return this.createCarousel(),B.a.replace(/{{user.name}}/g,this.user.name).replace(/{{user.family}}/g,this.user.family).replace(/{{user.image}}/g,this.user.image).replace(/{{content.image}}/g,this.createCarousel()).replace(/{{content.description}}/g,this.content.description).replace(/{{content.tags}}/g,this.content.tags.join(" "))}},{key:"createCarousel",value:function(){var e=[],n=!0,t=!1,r=void 0;try{for(var a,i=this.content.image[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value,s=document.createElement("img");s.setAttribute("src",o),e.push(s.outerHTML)}}catch(e){t=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}return e.join(" ")}}]),n}(J),K=new S,Q=!0,U=!1,V=void 0;try{for(var W,X=r.posts[Symbol.iterator]();!(Q=(W=X.next()).done);Q=!0){var Y=W.value;Y.content.image.length<=1?K.add(new J(Y)):K.add(new G(Y))}}catch(e){U=!0,V=e}finally{try{Q||null==X.return||X.return()}finally{if(U)throw V}}var Z=new l({root:document.querySelector("#app")});Z.router.add(new function e(n,t){var r;i()(this,e),this.path=n,this.fragment=document.createDocumentFragment(),(r=this.fragment).append.apply(r,x()(t.map((function(e){return e.render()}))))}("/",[new _,K])),Z.update()}]);