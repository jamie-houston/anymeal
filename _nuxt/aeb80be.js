(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(e,t,n){var content=n(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("e510ae4e",content,!0,{sourceMap:!1})},291:function(e,t,n){var content=n(305);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("3b8c6356",content,!0,{sourceMap:!1})},301:function(e,t,n){"use strict";n(22),n(23),n(15),n(67);var r=n(11),o=n(24),c=n(34),l=n(35),f=n(20),d=n(5),_=n(44),h=n(13);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y,v=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},k=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e){Object(c.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"style",get:function(){return"background-color: ".concat(this.tag.color.rgb,";")}}]),n}(_.e);v([Object(_.c)(),k("design:type","function"==typeof(y=void 0!==h.a&&h.a)?y:Object)],j.prototype,"tag",void 0),v([Object(_.c)(),k("design:type",Boolean)],j.prototype,"showName",void 0);var w=j=v([_.a],j),O=(n(302),n(25)),component=Object(O.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-3 py-1 rounded-full inline-block",style:e.style},[n("span",{staticClass:"tag-icon"},[e._v("\n    "+e._s(e.tag.icon)+"\n  ")]),e._v(" "),e.showName?[n("span",{staticClass:"text-xs"},[e._v("\n      "+e._s(e.tag.name)+"\n    ")])]:e._e()],2)}),[],!1,null,"7f20f38e",null);t.a=component.exports},302:function(e,t,n){"use strict";n(290)},303:function(e,t,n){(t=n(50)(!1)).push([e.i,".tag-icon[data-v-7f20f38e]{text-shadow:1px 1px 2px #000}",""]),e.exports=t},304:function(e,t,n){"use strict";n(291)},305:function(e,t,n){(t=n(50)(!1)).push([e.i,".delete-icon[data-v-cd760b84]{top:50%;transform:translateY(-50%);right:8px}",""]),e.exports=t},310:function(e,t,n){"use strict";n(22),n(23),n(15),n(67);var r=n(11),o=n(24),c=n(34),l=n(35),f=n(20),d=n(5),_=n(44);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},y=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e){Object(c.a)(n,e);var t=h(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).searchTerm="",e}return Object(o.a)(n,[{key:"getFilterPredicate",value:function(e){throw new Error("Not implemented")}},{key:"displayableItems",get:function(){return this.items.filter(this.getFilterPredicate(this.searchTerm))}}]),n}(_.e);m([Object(_.c)({default:[]}),y("design:type",Array)],v.prototype,"items",void 0),m([Object(_.d)(),y("design:type",Object)],v.prototype,"searchTerm",void 0);var k=v,j=(n(304),n(25)),component=Object(j.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex-0"},[n("label",{staticClass:"mb-2",attrs:{for:"search"}},[n("span",{staticClass:"font-bold"},[e._v(e._s(e.$t("search.title")))]),e._v(" "),n("span",{staticClass:"text-xs"},[e._v("("+e._s(e.$t("search.hint"))+")")])]),e._v(" "),n("div",{staticClass:"relative mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"search",type:"text"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),e._v(" "),e.searchTerm&&e.searchTerm.length>0?n("font-awesome-icon",{staticClass:"right-0 top-0.5 absolute cursor-pointer delete-icon",attrs:{icon:["fas","times"]},on:{click:function(t){e.searchTerm=""}}}):e._e()],1),e._v(" "),n("p",{staticClass:"text-xs mb-2"},[e._v("\n      "+e._s(e.$t("search.showingXofY",{x:e.displayableItems?e.displayableItems.length:0,y:e.items.length}))+"\n    ")])]),e._v(" "),e._t("default",null,{items:e.displayableItems})],2)}),[],!1,null,"cd760b84",null);t.a=component.exports},326:function(e,t,n){"use strict";n(22),n(23),n(15),n(67);var r=n(11),o=n(24),c=n(34),l=n(35),f=n(20),d=n(5),_=n(44),h=n(68),m=n(93),y=n(137);n(109);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},j=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e){Object(c.a)(n,e);var t=v(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).editingEntity=null,e}return Object(o.a)(n,[{key:"createNew",value:function(){var e=this;this.createNewEntityFunction(),this.$nextTick((function(){e.editingEntity=e.items[e.items.length-1],e.$nextTick((function(){e.$refs.editModal.show()}))}))}},{key:"edit",value:function(e){var t=this;this.editingEntity=e,this.$nextTick((function(){t.$refs.editModal.show()}))}},{key:"deleteEntity",value:function(e){this.$refs.editModal.hide(),this.deleteEntityFunction(e)}}]),n}(_.e);k([Object(_.c)(),j("design:type",Function)],w.prototype,"createNewEntityFunction",void 0),k([Object(_.c)(),j("design:type",Function)],w.prototype,"deleteEntityFunction",void 0),k([Object(_.c)(),j("design:type",Array)],w.prototype,"items",void 0),k([Object(_.c)(),j("design:type",String)],w.prototype,"translationKey",void 0),k([Object(_.d)(),j("design:type",Object)],w.prototype,"editingEntity",void 0);var O=w=k([Object(_.a)({components:{FButton:m.a,FModal:y.a,FontAwesomeIcon:h.a}})],w),x=n(25),component=Object(x.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-3xl"},[e._v("\n    "+e._s(e.$t(e.translationKey+".title"))+"\n  ")]),e._v(" "),n("p",{staticClass:"mb-4"},[e._v("\n    "+e._s(e.$t(e.translationKey+".introduction"))+"\n  ")]),e._v(" "),n("f-button",{staticClass:"mb-4 create-new-button",on:{click:e.createNew}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","plus"]}}),e._v("\n    "+e._s(e.$t(e.translationKey+".edit.new"))+"\n  ")],1),e._v(" "),e._t("searchableList",null,{editFunction:e.edit}),e._v(" "),e.editingEntity?n("f-modal",{ref:"editModal"},[n("div",{staticClass:"flex my-4"},[n("h2",{staticClass:"text-xl flex-1"},[e._v("\n        "+e._s(e.$t(e.translationKey+".edit.modalTitle"))+"\n      ")]),e._v(" "),n("div",[n("f-button",{staticClass:"flex-0",on:{click:function(t){return e.deleteEntity(e.editingEntity)}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","trash"]}}),e._v("\n          "+e._s(e.$t(e.translationKey+".edit.delete"))+"\n        ")],1)],1)]),e._v(" "),e._t("editModalForm",null,{editingEntity:e.editingEntity}),e._v(" "),n("f-button",{staticClass:"w-full mb-2",on:{click:function(t){return e.$refs.editModal.hide()}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","check"]}}),e._v("\n      "+e._s(e.$t(e.translationKey+".edit.save"))+"\n    ")],1)],2):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},367:function(e,t,n){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist-module/",t(t.s=3)}([function(e,t,n){var a=n(4)(n(1),n(5),null,null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));t.default={props:{search:{type:String,required:!1,default:""},emojiTable:{type:Object,required:!1,default:function(){return r.default}}},data:function(){return{display:{x:0,y:0,visible:!1}}},computed:{emojis:function(){if(this.search){var e={};for(var t in this.emojiTable){for(var n in e[t]={},this.emojiTable[t])new RegExp(".*"+this.search+".*").test(n)&&(e[t][n]=this.emojiTable[t][n]);0===Object.keys(e[t]).length&&delete e[t]}return e}return this.emojiTable}},methods:{insert:function(e){this.$emit("emoji",e)},toggle:function(e){this.display.visible=!this.display.visible,this.display.x=e.clientX,this.display.y=e.clientY},hide:function(){this.display.visible=!1},escape:function(e){!0===this.display.visible&&27===e.keyCode&&(this.display.visible=!1)}},directives:{"click-outside":{bind:function(e,t,n){if("function"==typeof t.value){var a=t.modifiers.bubble,r=function(n){(a||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=r,document.addEventListener("click",r)}},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},mounted:function(){document.addEventListener("keyup",this.escape)},destroyed:function(){document.removeEventListener("keyup",this.escape)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"Frequently used":{thumbs_up:"👍","-1":"👎",sob:"😭",confused:"😕",neutral_face:"😐",blush:"😊",heart_eyes:"😍"},People:{smile:"😄",smiley:"😃",grinning:"😀",blush:"😊",wink:"😉",heart_eyes:"😍",kissing_heart:"😘",kissing_closed_eyes:"😚",kissing:"😗",kissing_smiling_eyes:"😙",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",flushed:"😳",grin:"😁",pensive:"😔",relieved:"😌",unamused:"😒",disappointed:"😞",persevere:"😣",cry:"😢",joy:"😂",sob:"😭",sleepy:"😪",disappointed_relieved:"😥",cold_sweat:"😰",sweat_smile:"😅",sweat:"😓",weary:"😩",tired_face:"😫",fearful:"😨",scream:"😱",angry:"😠",rage:"😡",triumph:"😤",confounded:"😖",laughing:"😆",yum:"😋",mask:"😷",sunglasses:"😎",sleeping:"😴",dizzy_face:"😵",astonished:"😲",worried:"😟",frowning:"😦",anguished:"😧",imp:"👿",open_mouth:"😮",grimacing:"😬",neutral_face:"😐",confused:"😕",hushed:"😯",smirk:"😏",expressionless:"😑",man_with_gua_pi_mao:"👲",man_with_turban:"👳",cop:"👮",construction_worker:"👷",guardsman:"💂",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",older_man:"👴",older_woman:"👵",person_with_blond_hair:"👱",angel:"👼",princess:"👸",smiley_cat:"😺",smile_cat:"😸",heart_eyes_cat:"😻",kissing_cat:"😽",smirk_cat:"😼",scream_cat:"🙀",crying_cat_face:"😿",joy_cat:"😹",pouting_cat:"😾",japanese_ogre:"👹",japanese_goblin:"👺",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",skull:"💀",alien:"👽",hankey:"💩",fire:"🔥",sparkles:"✨",star2:"🌟",dizzy:"💫",boom:"💥",anger:"💢",sweat_drops:"💦",droplet:"💧",zzz:"💤",dash:"💨",ear:"👂",eyes:"👀",nose:"👃",tongue:"👅",lips:"👄",thumbs_up:"👍","-1":"👎",ok_hand:"👌",facepunch:"👊",fist:"✊",wave:"👋",hand:"✋",open_hands:"👐",point_up_2:"👆",point_down:"👇",point_right:"👉",point_left:"👈",raised_hands:"🙌",pray:"🙏",clap:"👏",muscle:"💪",walking:"🚶",runner:"🏃",dancer:"💃",couple:"👫",family:"👪",couplekiss:"💏",couple_with_heart:"💑",dancers:"👯",ok_woman:"🙆",no_good:"🙅",information_desk_person:"💁",raising_hand:"🙋",massage:"💆",haircut:"💇",nail_care:"💅",bride_with_veil:"👰",person_with_pouting_face:"🙎",person_frowning:"🙍",bow:"🙇",tophat:"🎩",crown:"👑",womans_hat:"👒",athletic_shoe:"👟",mans_shoe:"👞",sandal:"👡",high_heel:"👠",boot:"👢",shirt:"👕",necktie:"👔",womans_clothes:"👚",dress:"👗",running_shirt_with_sash:"🎽",jeans:"👖",kimono:"👘",bikini:"👙",briefcase:"💼",handbag:"👜",pouch:"👝",purse:"👛",eyeglasses:"👓",ribbon:"🎀",closed_umbrella:"🌂",lipstick:"💄",yellow_heart:"💛",blue_heart:"💙",purple_heart:"💜",green_heart:"💚",broken_heart:"💔",heartpulse:"💗",heartbeat:"💓",two_hearts:"💕",sparkling_heart:"💖",revolving_hearts:"💞",cupid:"💘",love_letter:"💌",kiss:"💋",ring:"💍",gem:"💎",bust_in_silhouette:"👤",speech_balloon:"💬",footprints:"👣"},Nature:{dog:"🐶",wolf:"🐺",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",frog:"🐸",tiger:"🐯",koala:"🐨",bear:"🐻",pig:"🐷",pig_nose:"🐽",cow:"🐮",boar:"🐗",monkey_face:"🐵",monkey:"🐒",horse:"🐴",sheep:"🐑",elephant:"🐘",panda_face:"🐼",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatched_chick:"🐥",hatching_chick:"🐣",chicken:"🐔",snake:"🐍",turtle:"🐢",bug:"🐛",bee:"🐝",ant:"🐜",beetle:"🐞",snail:"🐌",octopus:"🐙",shell:"🐚",tropical_fish:"🐠",fish:"🐟",dolphin:"🐬",whale:"🐳",racehorse:"🐎",dragon_face:"🐲",blowfish:"🐡",camel:"🐫",poodle:"🐩",feet:"🐾",bouquet:"💐",cherry_blossom:"🌸",tulip:"🌷",four_leaf_clover:"🍀",rose:"🌹",sunflower:"🌻",hibiscus:"🌺",maple_leaf:"🍁",leaves:"🍃",fallen_leaf:"🍂",herb:"🌿",ear_of_rice:"🌾",mushroom:"🍄",cactus:"🌵",palm_tree:"🌴",chestnut:"🌰",seedling:"🌱",blossom:"🌼",new_moon:"🌑",first_quarter_moon:"🌓",moon:"🌔",full_moon:"🌕",first_quarter_moon_with_face:"🌛",crescent_moon:"🌙",earth_asia:"🌏",volcano:"🌋",milky_way:"🌌",stars:"🌠",partly_sunny:"⛅",snowman:"⛄",cyclone:"🌀",foggy:"🌁",rainbow:"🌈",ocean:"🌊"},Objects:{bamboo:"🎍",gift_heart:"💝",dolls:"🎎",school_satchel:"🎒",mortar_board:"🎓",flags:"🎏",fireworks:"🎆",sparkler:"🎇",wind_chime:"🎐",rice_scene:"🎑",jack_o_lantern:"🎃",ghost:"👻",santa:"🎅",christmas_tree:"🎄",gift:"🎁",tanabata_tree:"🎋",tada:"🎉",confetti_ball:"🎊",balloon:"🎈",crossed_flags:"🎌",crystal_ball:"🔮",movie_camera:"🎥",camera:"📷",video_camera:"📹",vhs:"📼",cd:"💿",dvd:"📀",minidisc:"💽",floppy_disk:"💾",computer:"💻",iphone:"📱",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite:"📡",tv:"📺",radio:"📻",loud_sound:"🔊",bell:"🔔",loudspeaker:"📢",mega:"📣",hourglass_flowing_sand:"⏳",hourglass:"⌛",alarm_clock:"⏰",watch:"⌚",unlock:"🔓",lock:"🔒",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",mag_right:"🔎",bulb:"💡",flashlight:"🔦",electric_plug:"🔌",battery:"🔋",mag:"🔍",bath:"🛀",toilet:"🚽",wrench:"🔧",nut_and_bolt:"🔩",hammer:"🔨",door:"🚪",smoking:"🚬",bomb:"💣",gun:"🔫",hocho:"🔪",pill:"💊",syringe:"💉",moneybag:"💰",yen:"💴",dollar:"💵",credit_card:"💳",money_with_wings:"💸",calling:"📲","e-mail":"📧",inbox_tray:"📥",outbox_tray:"📤",envelope_with_arrow:"📩",incoming_envelope:"📨",mailbox:"📫",mailbox_closed:"📪",postbox:"📮",package:"📦",memo:"📝",page_facing_up:"📄",page_with_curl:"📃",bookmark_tabs:"📑",bar_chart:"📊",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",scroll:"📜",clipboard:"📋",date:"📅",calendar:"📆",card_index:"📇",file_folder:"📁",open_file_folder:"📂",pushpin:"📌",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",closed_book:"📕",green_book:"📗",blue_book:"📘",orange_book:"📙",notebook:"📓",notebook_with_decorative_cover:"📔",ledger:"📒",books:"📚",book:"📖",bookmark:"🔖",name_badge:"📛",newspaper:"📰",art:"🎨",clapper:"🎬",microphone:"🎤",headphones:"🎧",musical_score:"🎼",musical_note:"🎵",notes:"🎶",musical_keyboard:"🎹",violin:"🎻",trumpet:"🎺",saxophone:"🎷",guitar:"🎸",space_invader:"👾",video_game:"🎮",black_joker:"🃏",flower_playing_cards:"🎴",mahjong:"🀄",game_die:"🎲",dart:"🎯",football:"🏈",basketball:"🏀",soccer:"⚽",baseball:"⚾",tennis:"🎾","8ball":"🎱",bowling:"🎳",golf:"⛳",checkered_flag:"🏁",trophy:"🏆",ski:"🎿",snowboarder:"🏂",swimmer:"🏊",surfer:"🏄",fishing_pole_and_fish:"🎣",tea:"🍵",sake:"🍶",beer:"🍺",beers:"🍻",cocktail:"🍸",tropical_drink:"🍹",wine_glass:"🍷",fork_and_knife:"🍴",pizza:"🍕",hamburger:"🍔",fries:"🍟",poultry_leg:"🍗",meat_on_bone:"🍖",spaghetti:"🍝",curry:"🍛",fried_shrimp:"🍤",bento:"🍱",sushi:"🍣",fish_cake:"🍥",rice_ball:"🍙",rice_cracker:"🍘",rice:"🍚",ramen:"🍜",stew:"🍲",oden:"🍢",dango:"🍡",egg:"🍳",bread:"🍞",doughnut:"🍩",custard:"🍮",icecream:"🍦",ice_cream:"🍨",shaved_ice:"🍧",birthday:"🎂",cake:"🍰",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",honey_pot:"🍯",apple:"🍎",green_apple:"🍏",tangerine:"🍊",cherries:"🍒",grapes:"🍇",watermelon:"🍉",strawberry:"🍓",peach:"🍑",melon:"🍈",banana:"🍌",pineapple:"🍍",sweet_potato:"🍠",eggplant:"🍆",tomato:"🍅",corn:"🌽"},Places:{house:"🏠",house_with_garden:"🏡",school:"🏫",office:"🏢",post_office:"🏣",hospital:"🏥",bank:"🏦",convenience_store:"🏪",love_hotel:"🏩",hotel:"🏨",wedding:"💒",church:"⛪",department_store:"🏬",city_sunrise:"🌇",city_sunset:"🌆",japanese_castle:"🏯",european_castle:"🏰",tent:"⛺",factory:"🏭",tokyo_tower:"🗼",japan:"🗾",mount_fuji:"🗻",sunrise_over_mountains:"🌄",sunrise:"🌅",night_with_stars:"🌃",statue_of_liberty:"🗽",bridge_at_night:"🌉",carousel_horse:"🎠",ferris_wheel:"🎡",fountain:"⛲",roller_coaster:"🎢",ship:"🚢",boat:"⛵",speedboat:"🚤",rocket:"🚀",seat:"💺",station:"🚉",bullettrain_side:"🚄",bullettrain_front:"🚅",metro:"🚇",railway_car:"🚃",bus:"🚌",blue_car:"🚙",car:"🚗",taxi:"🚕",truck:"🚚",rotating_light:"🚨",police_car:"🚓",fire_engine:"🚒",ambulance:"🚑",bike:"🚲",barber:"💈",busstop:"🚏",ticket:"🎫",traffic_light:"🚥",construction:"🚧",beginner:"🔰",fuelpump:"⛽",izakaya_lantern:"🏮",slot_machine:"🎰",moyai:"🗿",circus_tent:"🎪",performing_arts:"🎭",round_pushpin:"📍",triangular_flag_on_post:"🚩"},Symbols:{keycap_ten:"🔟",1234:"🔢",symbols:"🔣",capital_abcd:"🔠",abcd:"🔡",abc:"🔤",arrow_up_small:"🔼",arrow_down_small:"🔽",rewind:"⏪",fast_forward:"⏩",arrow_double_up:"⏫",arrow_double_down:"⏬",ok:"🆗",new:"🆕",up:"🆙",cool:"🆒",free:"🆓",ng:"🆖",signal_strength:"📶",cinema:"🎦",koko:"🈁",u6307:"🈯",u7a7a:"🈳",u6e80:"🈵",u5408:"🈴",u7981:"🈲",ideograph_advantage:"🉐",u5272:"🈹",u55b6:"🈺",u6709:"🈶",u7121:"🈚",restroom:"🚻",mens:"🚹",womens:"🚺",baby_symbol:"🚼",wc:"🚾",no_smoking:"🚭",u7533:"🈸",accept:"🉑",cl:"🆑",sos:"🆘",id:"🆔",no_entry_sign:"🚫",underage:"🔞",no_entry:"⛔",negative_squared_cross_mark:"❎",white_check_mark:"✅",heart_decoration:"💟",vs:"🆚",vibration_mode:"📳",mobile_phone_off:"📴",ab:"🆎",diamond_shape_with_a_dot_inside:"💠",ophiuchus:"⛎",six_pointed_star:"🔯",atm:"🏧",chart:"💹",heavy_dollar_sign:"💲",currency_exchange:"💱",x:"❌",exclamation:"❗",question:"❓",grey_exclamation:"❕",grey_question:"❔",o:"⭕",top:"🔝",end:"🔚",back:"🔙",on:"🔛",soon:"🔜",arrows_clockwise:"🔃",clock12:"🕛",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",white_flower:"💮",100:"💯",radio_button:"🔘",link:"🔗",curly_loop:"➰",trident:"🔱",small_red_triangle:"🔺",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",small_red_triangle_down:"🔻",white_large_square:"⬜",black_large_square:"⬛",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmojiPickerPlugin=t.EmojiPicker=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),i={install:function(e){e.component("emoji-picker",r.default)}};"undefined"!=typeof window&&(window.EmojiPicker=i),t.EmojiPicker=r.default,t.EmojiPickerPlugin=i,t.default=r.default},function(e,t){e.exports=function(e,t,n,a,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var c,l="function"==typeof o?o.options:o;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),a&&(l._scopeId=a),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=n),c){var f=l.functional,u=f?l.render:l.beforeCreate;f?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:i,exports:o,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("emoji-invoker",null,{events:{click:function(t){return e.toggle(t)}}}),e._v(" "),e.display.visible?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}]},[e._t("emoji-picker",null,{emojis:e.emojis,insert:e.insert,display:e.display})],2):e._e()],2)},staticRenderFns:[]}}])},368:function(e,t,n){var content=n(436);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("0a9b43f5",content,!0,{sourceMap:!1})},435:function(e,t,n){"use strict";n(368)},436:function(e,t,n){(t=n(50)(!1)).push([e.i,".emoji-picker[data-v-68e6c626]{max-height:300px;width:300px;max-width:300px;overflow:auto}",""]),e.exports=t},690:function(e,t,n){"use strict";n.r(t);n(22),n(23),n(15),n(67);var r=n(11),o=n(24),c=n(34),l=n(35),f=n(20),d=n(5),_=n(44),h=(n(29),n(60),n(61),n(72),n(310)),m=n(13);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},k=function(e){Object(c.a)(n,e);var t=y(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getFilterPredicate",value:function(e){var t=e.split(",").map((function(s){return s.trim()}));return function(e){return t.some((function(t){return t.split("&").map((function(s){return s.trim()})).every((function(t){return e.name.toLowerCase().includes(t.toLowerCase())}))}))}}}]),n}(h.a),j=k=v([_.a],k),w=n(326),O=n(16),x=n(301),main=(n(139),n(367)),R=n.n(main),C=n(68),E=n(93);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var $,T=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},S=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(e){Object(c.a)(n,e);var t=P(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).search="",e}return Object(o.a)(n,[{key:"selectEmoji",value:function(e){this.$emit("input",e)}}]),n}(_.e);T([Object(_.c)(),S("design:type",String)],D.prototype,"value",void 0),T([Object(_.c)(),S("design:type","function"==typeof($=void 0!==O.a&&O.a)?$:Object)],D.prototype,"color",void 0),T([Object(_.d)(),S("design:type",Object)],D.prototype,"search",void 0);var F=D=T([Object(_.a)({components:{FButton:E.a,EmojiPicker:R.a,FontAwesomeIcon:C.a}})],D),M=(n(435),n(25)),N=Object(M.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("emoji-picker",{staticClass:"emoji-selector",attrs:{search:e.search},on:{emoji:e.selectEmoji},scopedSlots:e._u([{key:"emoji-invoker",fn:function(t){var r=t.events;return n("div",e._g({staticClass:"emoji-invoker"},r),[n("div",{staticClass:"flex"},[n("div",{staticClass:"border-2 border-black text-2xl mr-4 px-2 emoji-selector-value",style:"background-color: "+e.color.rgb},[e._v("\n        "+e._s(e.value)+"\n      ")]),e._v(" "),n("f-button",{staticClass:"emoji-selector-open-trigger"},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","icons"]}}),e._v("\n        "+e._s(e.$t("emoji.open"))+"\n      ")],1)],1)])}},{key:"emoji-picker",fn:function(t){var r=t.emojis,o=t.insert;return n("div",{staticClass:"emoji-picker p-3 m-6 shadow-lg border border-gray-200"},[n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{type:"text"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),n("div",e._l(r,(function(t,r){return n("div",{key:r,staticClass:"emoji-category"},[n("h5",{staticClass:"pb-2 pt-4 font-bold"},[e._v("\n            "+e._s(e.$t("emoji."+r.toLowerCase().replace(" ","")))+"\n          ")]),e._v(" "),n("div",{staticClass:"flex flex-wrap justify-between"},e._l(t,(function(t,r){return n("span",{key:r,staticClass:"cursor-pointer p-2 text-lg",attrs:{title:r},on:{click:function(e){return o(t)}}},[e._v("\n              "+e._s(t)+"\n            ")])})),0)])})),0)])])}}])})}),[],!1,null,"68e6c626",null).exports;function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var L,z=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},A=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},K=function(e){Object(c.a)(n,e);var t=I(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"setColor",value:function(e){var t=e.target.value;this.$emit("input",new O.a(parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)))}}]),n}(_.e);z([Object(_.c)(),A("design:type","function"==typeof(L=void 0!==O.a&&O.a)?L:Object)],K.prototype,"value",void 0);var B=K=z([Object(_.a)({components:{FButton:E.a,EmojiPicker:R.a}})],K),X=Object(M.a)(B,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("input",{attrs:{type:"color"},domProps:{value:this.value.hex},on:{input:this.setColor}})])}),[],!1,null,null,null).exports;function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var G=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},U=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},J=function(e){Object(c.a)(n,e);var t=Y(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).emojiSearch="",e}return Object(o.a)(n,[{key:"createNew",value:function(){var e=new m.a("",new O.a(255,255,255),"");this.$store.commit("SET_TAG",{index:this.items.length,tag:e})}},{key:"deleteItem",value:function(e){this.$store.commit("DELETE_TAG",{tag:e})}},{key:"items",get:function(){var e=this,t={get:function(t,n){return"object"!==Object(d.a)(t[n])||null===t[n]?t[n]:new Proxy(t[n],{get:function(e,t){return e[t]},set:function(t,r,o){return e.$store.commit("UPDATE_TAG_PROPERTY",{tag:t,index:n,key:r,value:o}),!0}})}};return new Proxy(this.$store.state.tags,t)}}]),n}(_.e);G([Object(_.d)(),U("design:type",Object)],J.prototype,"emojiSearch",void 0);var V=J=G([Object(_.a)({components:{TagPill:x.a,SearchableTagList:j,EditPage:w.a,EmojiSelector:N,ColorSelector:X},head:function(){return{title:this.$t("tags.title")}}})],J),H=Object(M.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("edit-page",{attrs:{"create-new-entity-function":e.createNew,"delete-entity-function":e.deleteItem,items:e.items,"translation-key":"tags"},scopedSlots:e._u([{key:"searchableList",fn:function(t){var r=t.editFunction;return[n("searchable-tag-list",{attrs:{items:e.items},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.items;return[n("ul",e._l(o,(function(e,t){return n("li",{key:t,staticClass:"mb-4",on:{click:function(t){return r(e)}}},[n("tag-pill",{staticClass:"cursor-pointer",attrs:{tag:e,"show-name":!0}})],1)})),0)]}}],null,!0)})]}},{key:"editModalForm",fn:function(t){var r=t.editingEntity;return[r?n("div",[n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editTitle"}},[e._v("\n          "+e._s(e.$t("tags.edit.name"))+"\n        ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"editingEntity.name"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editTitle",type:"text"},domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold"},[e._v("\n          "+e._s(e.$t("tags.edit.color"))+"\n        ")]),e._v(" "),n("color-selector",{model:{value:r.color,callback:function(t){e.$set(r,"color",t)},expression:"editingEntity.color"}})],1),e._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold"},[e._v("\n          "+e._s(e.$t("tags.edit.icon"))+"\n        ")]),e._v(" "),n("emoji-selector",{attrs:{color:r.color},model:{value:r.icon,callback:function(t){e.$set(r,"icon",t)},expression:"editingEntity.icon"}})],1)]):e._e()]}}])})}),[],!1,null,null,null);t.default=H.exports}}]);