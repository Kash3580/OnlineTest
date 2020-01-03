import  {Component} from "@angular/core";

@Component({
    selector:"topMenu",
    template: `
        <div class="topbar">
        <span class="logo">Online Test</span>
         <ul id="css3menu1" class="topmenu">
            	<li class="switch"><label onclick="" for="css3menu-switcher"></label></li>
            	<li class="topmenu"><a href="home" style="height:13px;line-height:13px;">Home</a></li>

            	<li class="topmenu"><a href="#" style="height:13px;line-height:13px;">Examples</a></li>
            	<li class="topmenu"><a href="#" style="height:13px;line-height:13px;">License</a></li>
            	<li class="topmenu"><a href="#" style="height:13px;line-height:13px;">Contacts</a></li>
          </ul>
        </div>
         <div></div>
    `,
    styles:[`
      li {
   float: left;
 }
 .logo{
 float: left;
 font-family:"Calibri";
 font-size:35px;
 font-weight:600;
 color:lightgray;
 }
 .logo:hover{

 color:#1C7ED1;
 }
          .topbar{
            height:80px;

  padding:15px 15px 15px 10px;background-color:none; border-bottom:1px solid gray; box-shadow:rgba(0, 0, 0, 0.1) 0 0 10px;
	*display:inline;}
  ul#css3menu1{
    float:right;
    display:inline-block;
    font-size:0;z-index:999;position:relative; zoom:1;
  }
* html ul#css3menu1 li a{
	display:inline-block;}
ul#css3menu1>li{
	margin:0 0 0 5px;}
ul#css3menu1 ul>li{
	margin:5px 0 0;}
ul#css3menu1 a:active, ul#css3menu1 a:focus{
	outline-style:none;}
ul#css3menu1 a{
	display:block;vertical-align:middle;text-align:left;text-decoration:none;font:12px Ubuntu,sans-serif;color:#000000;cursor:pointer;padding:3px;background-color:;background-repeat:repeat;border-width:0px;border-style:none;border-color:;}
ul#css3menu1 ul li{
	float:none;margin:0;}
ul#css3menu1 ul a{
	text-align:left;padding:9px 28px;background-color:#FFFFFF;border-width:1px;border-style:solid none none none;border-color:#e2e2e2;font:12px Ubuntu,sans-serif;color:#333333;text-decoration:none;}
ul#css3menu1 li:hover>a,ul#css3menu1 li a.pressed{
	border-style:none;color:#FFFFFF;text-decoration:none;}
ul#css3menu1 ul span{
	background-image:none;padding-right:9px;}
ul#css3menu1 > li.switch{
	display:none;cursor:pointer;width:25px;height:20px;padding:9px 28px;}
ul#css3menu1 > li.switch:before{
	content:"";position:absolute;display:block;height:4px;width:25px;border-radius:4px;background:#333333;-moz-box-shadow:0 8px #333333, 0 16px #333333;-webkit-box-shadow:0 8px #333333, 0 16px #333333;box-shadow:0 8px #333333, 0 16px #333333;}
ul#css3menu1 > li.switch:hover:before{
	background:#fefeff;-moz-box-shadow:0 8px #fefeff, 0 16px #fefeff;-webkit-box-shadow:0 8px #fefeff, 0 16px #fefeff;box-shadow:0 8px #fefeff, 0 16px #fefeff;}
.c3m-switch-input{
	display:none;}
ul#css3menu1 ul li:hover>a,ul#css3menu1 ul li a.pressed{
	background-color:#1C7ED1;border-style:solid none none none;border-color:#e2e2e2;color:#fefeff;text-decoration:none;}
ul#css3menu1>li>a{
	padding:9px 28px;}
ul#css3menu1 li.topmenu>a{
	    height: 32px !important;background-color:transparent;border-width:1px;border-style:solid;border-color:#d1d1d1;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;padding:9px 28px;color:#333333;}
ul#css3menu1 li.topmenu:hover>a,ul#css3menu1 li.topmenu a.pressed{
	background-color:#1C7ED1;border-style:solid;border-color:#1C7ED1;color:#fefeff;}
ul#css3menu1 li.subfirst>a{
	border-color:transparent;border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px;-webkit-border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;}
ul#css3menu1 li.subfirst:hover>a,ul#css3menu1 li.subfirst a.pressed{
	border-color:transparent;}
      `]

})

export class MenuTopBarComponent{


}
