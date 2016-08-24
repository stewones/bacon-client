!function(){"use strict";angular.module("home",[])}(),function(){"use strict";angular.module("home").controller("HomeCtrl",["$page","$state","setting",function(t,o,e){function a(){}t.title(o.current.title+" "+e.titleSeparator+e.name),a()}])}(),function(){"use strict";angular.module("home").config(["$stateProvider",function(t){t.state("app.home",{url:"/",title:"Home",views:{content:{templateUrl:"app/modules/home/home.html",controller:"HomeCtrl",controllerAs:"vm"}},resolve:{}})}])}(),angular.module("appfy.setting",[]).constant("setting",{name:"bacon",slug:"bacon",email:"hi@st1s.io",logo:"/assets/images/logo.png",version:"0.0.1",title:"bacon",locale:"en_US",baseUrl:"http://www.bacon.com",titleSeparator:" — ",description:"bacon",keywords:"",icon:"/assets/favicon.png",copyright:"",ogLocale:"en_US",ogSiteName:"bacon",ogTitle:"bacon",ogDescription:"bacon",ogUrl:"http://www.bacon.com",ogImage:"",articleSection:"",articleTag:"",session:1800,firebase:{apiKey:"",authDomain:"",databaseURL:"",storageBucket:""},wiki:{git:"https://github.com/user/bacon.wiki.git",basePath:"/docs/"},facebook:{},google:{}}),angular.module("appfy.enviroment",[]).constant("enviroment","production").constant("api",{url:"https://bacon-server.herokuapp.com"}),function(){"use strict";angular.module("bacon",["appfy.core","appfy.module","appfy.error"])}(),function(){"use strict";angular.module("bacon").run(function(){})}(),function(){"use strict";angular.module("bacon").config(["$logProvider","$translateProvider","setting","enviroment",function(t,o,e,a){}])}(),/**
 * Appfy is a JavaScript toolkit that saves your time to build Single Page Applications. It totally modular and based on MEAN stack concept.
 * 
 * Software licensed under MIT, maintained by Appfy Co and its contributors. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in https://github.com/Appfy
 *
 * Copyright © 2016 Appfy Co <help@appfy.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/
function(){"use strict";angular.module("appfy.module",["home"])}(),angular.module("bacon").run(["$templateCache",function(t){t.put("app/modules/home/home.html","<div id=home><img src=/assets/images/logo.svg><div class=errors><a ui-sref=app.401>401</a> | <a ui-sref=app.404>404</a> | <a ui-sref=app.500>500</a></div></div><style>body {\n        margin-bottom: -18px;\n    }</style>"),t.put("app/themes/default/layout.html",'<!-- Github --> <a href=https://github.com/Appfy class=github-corner><svg width=80 height=80 viewBox="0 0 250 250" style="fill:#c33d3e; color:#fff; position: absolute; top: 0; border: 0; right: 0"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill=currentColor style="transform-origin: 130px 106px" class=octo-arm></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill=currentColor class=octo-body></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style><!-- /Github --><!-- Route --><div ui-view=content></div><!-- /Route -->')}]);