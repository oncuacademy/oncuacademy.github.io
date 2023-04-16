(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{378:function(e,t,n){"use strict";n.r(t);var l={name:"GlobalModal",props:{show:{type:Boolean,required:!0},title:{type:String,required:!0},message:{type:String,required:!0}},methods:{close:function(){this.$emit("close")}}},o=n(25),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"},[e._m(0),e._v(" "),t("div",{staticClass:"overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full"},[t("div",{staticClass:"px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4"},[t("div",{staticClass:"sm:flex sm:items-start"},[t("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{staticClass:"w-6 h-6 text-red-600",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),e._v(" "),t("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[t("h3",{staticClass:"text-lg font-medium leading-6 text-gray-900",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),t("div",{staticClass:"mt-2"},[t("p",{staticClass:"text-sm leading-5 text-gray-500",domProps:{innerHTML:e._s(e.message)}})])])])]),e._v(" "),t("div",{staticClass:"px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"},[t("span",{staticClass:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[t("button",{staticClass:"inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 sm:text-sm sm:leading-5",attrs:{type:"button"},on:{click:e.close}},[e._v("\n          "+e._s(e.$t("close"))+"\n        ")])])])])]):e._e()}),[function(){var e=this._self._c;return e("div",{staticClass:"fixed inset-0 transition-opacity"},[e("div",{staticClass:"absolute inset-0 bg-oncured-900 opacity-75"})])}],!1,null,null,null);t.default=component.exports},390:function(e,t,n){"use strict";n.r(t);var l={name:"ContactPage",components:{GlobalModal:n(378).default},data:function(){return{showModal:!1,headTitle:this.$t("contact")+" | "+this.$t("title"),headerTitle:"",headerParagraph:"",headerImage:""}},computed:{modalTitle:function(){return"en"===this.$i18n.locale?"<p>Modal Title</p>":"<p>Modal Başlık</p>"},modalMessage:function(){return"en"===this.$i18n.locale?"\n          <p>This is the message content displayed in the modal.</p>\n          <p>You can add any <span class='text-xl font-extrabold'>HTML</span> content here, such as links, images, etc.</p>\n        ":"\n          <p>Modalda görüntülenen mesaj içeriği burada yer alır.</p>\n          <p>Buraya link, resim vb. gibi her türlü <span class='text-xl font-extrabold'>HTML</span> içerik ekleyebilirsiniz.</p>\n        "}},watch:{"$i18n.locale":function(e,t){this.updateHeader()}},mounted:function(){this.updateHeader()},methods:{updateHeader:function(){var e="en"===this.$i18n.locale?"Contact us":"İletişime geçin",t="en"===this.$i18n.locale?"Please feel free to reach out if you have any questions.":"Herhangi bir sorunuz varsa, lütfen çekinmeden iletişime geçin.",n="en"===this.$i18n.locale?"/images/e.png":"/images/f.png";this.$nuxt.$emit("updateHeader",{headerTitle:e,headerParagraph:t,headerImage:n})}}},o=n(25),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",["en"===e.$i18n.locale?t("div",[t("h2",[e._v("Contact")]),e._v(" "),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio maiores, porro aut commodi quas accusantium ab voluptatum vel dicta, vitae voluptatem ullam. Totam reprehenderit similique quo ullam labore iste!")])]):e._e(),e._v(" "),"tr"===e.$i18n.locale?t("div",[t("h2",[e._v("İletişim")]),e._v(" "),t("p",[e._v("Sandalye ışık dağılımı patlıcan ona doğru salladı bilgisayarı layıkıyla un değirmeni göze çarpan mutlu oldular yazın dergi değerli olduğu için patlıcan. Sıla gülüyorum teldeki ona doğru batarya kutusu ona doğru kapının kulu dışarı çıktılar sarmal açılmadan dolayı batarya kutusu çünkü ona doğru göze çarpan gitti.")])]):e._e(),e._v(" "),t("div",[t("button",{staticClass:"px-6 py-3 mt-8 bg-oncured-300 rounded-md shadow-lg cursor-pointer",on:{click:function(t){e.showModal=!0}}},[e._v("\n      "+e._s(e.$t("openmodal"))+"\n    ")]),e._v(" "),t("GlobalModal",{attrs:{show:e.showModal,title:e.modalTitle,message:e.modalMessage},on:{close:function(t){e.showModal=!1}}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalModal:n(378).default})}}]);