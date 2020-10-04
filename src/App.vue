<template>
	<v-main>
		<router-view></router-view>
	</v-main>   
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
@font-face {
  font-family: "Ubuntu-Regular";
  src: local("Ubuntu-Regular"),   
  url(./fonts/Ubuntu-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Ubuntu-Bold";
  src: local("Ubuntu-Bold"),   
  url(./fonts/Ubuntu-Bold.ttf) format("truetype");
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	font-family: 'Ubuntu-Regular', Helvetica, Arial;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html{
	overflow:hidden;
}
body {
	line-height: 1;
	background: url('assets/RoverBackground.jpeg') no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height:100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1{
	font-size:42px;
}
h2{
	font-size:36px;
}
h3{
	font-size:30px
}
h4{
	font-size:24px;
}
h4{
	font-size:18px;
}
p,span,a{
	font-size:16px;
}
.v-main{
	height:100%;
}
.v-btn__content{
	text-transform: none;
}
.container{
	height:100%;
	display:flex;
	align-items: center;
}
.content-wrapper{
	position:relative;
	z-index:3;
}
.overlay-bg{
	background-color:transparent;
	overflow:hidden;
	position:relative;
	border-radius: 14px;
	width:100%;
	padding: 24px;
	-webkit-box-shadow: 0 0 3px 0 rgba(0,0,0,.25);
	-moz-box-shadow: 0 0 3px 0 rgba(0,0,0,.25);
	box-shadow: 0 0 15px 0 rgba(0,0,0,.25);
}
.overlay-bg:before{
	background-color:white;
	content:'';
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	position: absolute;
	opacity:0.5;
	z-index:2;
}
input::-webkit-input-placeholder,textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: black!important;
}
input::-moz-placeholder,textarea::-moz-placeholder { /* Firefox 19+ */
  color: black!important;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder { /* IE 10+ */
  color: black!important;
}
input:-moz-placeholder, textarea:-moz-placeholder { /* Firefox 18- */
  color: black!important;
}
.v-text-field .v-label--active{
	transform: translateY(-18px) scale(1);
	font-size: 12px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.space-between{
	justify-content: space-between;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
@media(max-width:576px){
	h1{
		font-size:32px;
	}
	h2{
		font-size:28px;
	}
	h3{
		font-size:24px;
	}
	h4{
		font-size:20px;
	}
	h5{
		font-size:16px;
	}

}
@media(max-width:960px){
	.overlay-bg{
		margin: 0 12px;
	}
}
</style>