(this["webpackJsonpevaluacion-permanente"]=this["webpackJsonpevaluacion-permanente"]||[]).push([[0],{43:function(e,s,c){},44:function(e,s,c){},46:function(e,s,c){},47:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(16),o=c.n(a),i=c(9),l=c(2),n=(c(21),c(22),c(43),c(44),c(0));var r=function(e){return Object(n.jsx)("section",{id:"main-pets",children:Object(n.jsx)("div",{className:"pets",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row text-center",children:Object(n.jsxs)("div",{className:"col-sm-12 col-md-12 col-md-12",children:[Object(n.jsx)("h2",{children:"Tipos de mascotas"}),Object(n.jsx)("h2",{classNameName:"h2",children:"en casa"}),Object(n.jsxs)("p",{children:["Lorem ",Object(n.jsx)("span",{className:"text-color",children:"ipsum dolor"})," sit amet",Object(n.jsx)("span",{className:"text-color",children:" consectetur"})," adipisicing, elit. Saepe, ex, cum?."]})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-offset-1 col-sm-12 col-md-12 col-md-10",children:Object(n.jsx)("div",{className:"list-pets",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Perros"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})}),Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Gatos"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})}),Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Loros"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})}),Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Hamsters"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})}),Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Peces"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})}),Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-md-4",children:Object(n.jsx)("div",{className:"pets-block",children:Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("div",{className:"pets-name",children:"Tortugas"}),Object(n.jsx)("div",{className:"pets-info",children:"Lorem ipsum dolor"}),Object(n.jsx)("div",{className:"pets-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "})]})})})]})})})})]})})})},d=c(4),N=c(5),j=c(7),Q=c(6),E=function(e){Object(j.a)(c,e);var s=Object(Q.a)(c);function c(e){var t;return Object(d.a)(this,c),(t=s.call(this,e)).state={listaComida:[]},t}return Object(N.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost/servicios-web/comidaanimales.php").then((function(e){return e.json()})).then((function(s){console.log(s),e.setState({listaComida:s})}))}},{key:"dibujarTabla",value:function(e){return Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Cod"}),Object(n.jsx)("th",{children:"Para"}),Object(n.jsx)("th",{children:"Marca"})]})}),Object(n.jsx)("tbody",{children:e.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:e.idcomida}),Object(n.jsx)("th",{children:e.Para}),Object(n.jsx)("th",{children:e.Marca})]},e.idcomida)}))})]})}},{key:"render",value:function(){var e=this.dibujarTabla(this.state.listaComida);return Object(n.jsx)("section",{className0:"padded",id:"comida-mascota",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"Comida Mascota"}),Object(n.jsx)("div",{className:"col",children:e})]})})})})}}]),c}(t.Component);var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{className:"main-nav",children:Object(n.jsx)("div",{className:"text d-flex align-items-center",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-sm-8",children:[Object(n.jsxs)("h2",{children:[" Mis",Object(n.jsx)("span",{children:" Mascotas"})," "]}),Object(n.jsxs)("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit.",Object(n.jsx)("br",{})," Dolorum, provident minima tempore laboriosam sed reiciendis impedit non deleniti dicta ad"]}),Object(n.jsxs)("a",{href:"/",className:"btn btn-yo",children:[" ",Object(n.jsx)("span",{children:"Mascotas"})," "]})]})})})})}),Object(n.jsx)(r,{}),Object(n.jsx)(E,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,o=s.getLCP,i=s.getTTFB;c(e),t(e),a(e),o(e),i(e)}))};var b=function(e){return Object(n.jsx)("div",{id:"menu",className:"bg-dark",children:Object(n.jsx)("div",{className:"container-nav",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"Navegation",children:Object(n.jsxs)("div",{className:"nav navbar-nav w-100 justify-content-center ",children:[Object(n.jsx)("a",{className:"nav-item nav-link active",href:"/",children:"Inicio"}),Object(n.jsx)(i.b,{className:"nav-item nav-link",to:"/animales",children:"Mascotas"}),Object(n.jsx)(i.b,{className:"nav-item nav-link",to:"/tablamascotas",children:"TablaMascotas"}),Object(n.jsx)("a",{className:"nav-item nav-link",href:"/",children:"Nombres"}),Object(n.jsx)("a",{className:"nav-item nav-link",href:"/",children:"Adopci\xf3n"})]})})]})})})};c(46);var A=function(e){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"redes",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWgBaAMZeAFlZWVpaWldXVwMNJ1tbW0JETD5ASEJFTD5BST9CSgUOKEVHTlxcXC0xPQ0VKxAXKzo9Rjc7RDs+RwsTKiAmNR0iMwkRKV9fX0dJThIZLTM3QRIZLF1dXTQ3QggQKDs+RUZITx0jMzM3QAELJwcPKDc6RCwxPSAlNSktOhQbLSYrODA0PywwOykuOy8zPxogMhogMUZITiwwPAcQKBAXLEtMURUbLxQbLgUOJzY5Qg8XLCInNSUqN0NFS15eXkJESiYrORceMEtNUSMoNg4VKgwTKVBRVSMoNz9BSDM2QFVWWAILJxkfMBogMAIMJzAzPhwiMVRVVxcdME9QVAYPJ2JiYlhZWwoSKSAlNB0iMjc6QxcdLgAKJ1hYWNoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQECH5BAEKAH8ALAAAAABaAFoAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUiAEBAJkAXZoAl5WgoYaem12mpgACAqesmZiisI+ZrLSrtLelm7G7hqi3v5ylwKy8sZvCw8nKx8WVs8rQ0ZnNkZrR19cA1IzI2N7DuduIrbbf5sDihefrwOWm6YLs8tDi3fOc96faxfn9v7a8ULnz528frC4DCZpKeC6WQn0BCEicSBGTOQGikDE0F4BBjR8GcogQkWSkSQP2roFKKQ9AlB5YSHCZSbMmlyIE1hmM9LDLlB02g9L0wODcpgCTFAIwkkKoUw852Ul6qKSJ06dRdVYjSCDHVazzIJ3aaE7Ila9CobIr5ehhgA/+aNNmNfqOEcJ7wgIAjWtT7TpbOxO5fcDXJpG5UhcptEUFbRYkHyJ/QNKjX2BDZNkJGPGViJVO+DJ7U8TyHuerWziwEi2tVSLW6047TVGU4LO6h3qaki2UdquH4wgy4MDBhxInX5lU8UF8OAfE85D28ieEyYPrhL+OSIEd+47S36ZN74eh8Fcc0OXl9lfevNMitfutJ+9+dvx84/vFqC8USvq16hDUHn818QBeQ4QoNCCBMz1xoDkBssdgTVo8+E2E9E040w8ErYJhPgsyGANwCcJ2zX4acoEBiYMoVEMSLLAggwxo8fBEjDLImEMNLMajEAEMBGkEDl/F4AMDQAb++V9L6ph4zgBfGRCAbrR8aFsXUF4lJZXEJMhllk5tyaWHXlIJplBictlFfg+dGdQHFobFpkJu2pQmlbk5+U2dNd3Z02V/fBnllGrO1xOfNPn5EKCB6oboTIoqJJijgxYa3Fj+PMpFpGvRwqiPbVa6aCqK6XmNppzKp1ioWhLaUyOY9oOqqz1OSqeoSq0J662tLqprW/nMMuurYvWzyrC1wmrqLasIoOkHtKrKU6a4+kNJp3d1gVyvBIGiEy1EcittJfnwsMG56J77QBM9xBmNQ76cQ8AF9NZbr2otlbOLmt3uy+88GPGjm7vJiPMvhPAcjA08LcZ7cCpVMtwwv5kxSTxntpZafMgm5RCsTEIaK+bxNQOFDCyxJhdrbcrkJiMaywL/UkrAMNds880458xLIAA7",alt:""})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWgBaAMZjAFdXV1paWkJETFtbW0JFTD9CSkVHTkNGTTQ3Qj5BSTw/SAMNJx0iM0RGTl1dXTc6RBogMTM3QRYcL0dJUAELJwcPKB0jMyAlNRAXLDg7RSwxPSktOkBDS1xcXDo9RgUOKAoSKTc7RC8zPzA0Pzs+RwQNJwILJxceMBQbLhcdMA4VKx8lNCYrOC0xPSYrOSgtOg0VK0dKUSkuOxogMigsOgkRKRgeMDU5QwsTKi4yPjk8RhEYLRIZLTQ4QiMoNzE1QAgQKCswPBUbLwwTKgcQKBshMg8XLEtNUyMoNl5eXgMMJyAmNQ8WKyUqOCInNhEYLEZITxMaLTI2QQ0VKlZWVkxOVAYOKEdHRzQ0NCYqOEREREVFRS4zP1VVVV9fX1JSUllZWQAKJ1hYWNoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQECH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAH8ALAAAAABaAFoAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUiGKXYJiZl5eVnp+GAGKbopymp6agqo+ora6mpWKrs4aom6+4p7SrmLm9vpy3nbuUwMbGxJHHy8jJi8zQzc61wtHWqNOF1dfcqdl/3eGu0+Ll47vm6diz6u3equ7xvPHyn/T0YJ73+5Tb8ZlgSm3yd2zSvoOSDpoiGE6ZQn6PwDDEN8BLkiQOBkwE5mhjvBgcfERRoWLHBQUx/IEJkEtio5ajfnU7kGFKmJs4b4KQ0iAYmAZBIEiUqYuRr006XhRgaQ0MBwY5o+KUcGAABwUvKoSR4MCX0aNiAvgIsyNlNDAHdkhdGwbEChX+ORXAevUslisAADgMuWljgsdTPyWwHZzTR4MAHhUZE6UjJ9XFlwK8IEyZQRUqV74EbBUr0TEwUqJOWWoMTIESlAdLcAIkDJaYuTwTdfVDaokffnGJAhMkdWoKXTzmO/SXU+21RQ50aCVMrW/CN5hyrDWb+Y3BJbI0GMDJrpgGqJ+vpdDjwCVR3tcVwpS+VWPCFWhUHcipgfi1FXRwr97qUHtXaD2RmgkQ9MDBAAMgBsYE90mVwXJixLLRIecZE0AO4pUgAQ09KBBADEo0mFMG+0FG3X/MHYCBiBRUsJeIOGVQXIWyEDIjJkkcYAKMPOKkg3TLaLMMGDlgkIECIfb+yGIBN3Ii5GeThdGikiJWoFE0T5bWA5U9MuEAirhk+YpdClDAJYxFdIWljaWNEoBgZzbIRYnMiAlMAFvGeR8HTTrJJjMTQKWnbypMAE0pdgLzE1yDUhZEn34OAqlTTDRKmHnXrNfUAStYupYFBwAAaY2DgPlKJgookIENnubEZITWUAdNAE60GhUEPWUqKzMAKGBrXEBCQ2E0AHD6axg+GNoUqYRwcwCjnoLQwKiRNntNAAWA0CqJDQ27jIQFwDmofN0S100DOWgbJ6j8LZZIsIvFMsAEN9DgXI8QKGtNZ7LpFuE2AAVwRJT4mlUuIvD662aCBbyQZI8M5EZttZb+gAnAAA50oLEDByiQgw07UkluOY0ABCAVWxRxwQo2RKEulyBkcMBm7UqjCAG4BKRFyHpS0MRh6jgyJiY3iMslAwVcGczBXwFmSgAHFLACzyKW0IQCBzBlapCQDOVLAPTaEJ5vVkCA0sSxOVQzJg4cUUAODEigAghA1D3EExKs8AMHRyhdTyQGMLPSAB04kDGCGBvegd/3UJKwbnZJVI1A9Hjy+FzAbC3OcPrsuzSNlcMDk9MLqdPeLIE/tCyzoKQOm+q58EsLzrDX6UztNt/+Ou5FffNHJppD5LsgBlyuEOfDD2I8Xte0h2jylqBti9dLQ78IzsF/Vrr1QmPuOcUe3DdyZfbMjRK+Jxr16dL5tEgOIPLsxy///PTXv0ogADs=",alt:""})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWgBaAMZaAFpaWldXV1tbW0JFTEJETFxcXF1dXRcdMD9CSjk9RykuOyMoN0VHTiwxPRUbLzs+Ry8zPzo9RjA0Pzc7RDc6RCAmNSYrOQ0VKwsTKj1ASSMpOBQbLiEmNj5BSQkRKQILJxogMjY6REBDTCktOkBCS0NGTjQ3QgMNJ0ZITwcPKCYrOAELJy8zQBshMjU5RBIZLTI2Qi0xPR4kNBceMBkfMTM3QR0jMzk8RiktOyMoNjI2QRkgMQ0UKhAXLBwiMwcQKDw/SCcrORogMSwwPQsTKRcdL0RHTw4WKwQNJx0iM15eXkdKUSAlNQ8XLAYPKAUOJwgQKBEYLF9fXwMMJ0tNUwUOKAoSKVlZWVhYWAAKJ9oQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQECH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAH8ALAAAAABaAFoAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUiAIAV5lYWJlXAJeVoaKGnZump6ibmQJXo66PqFcBAammV5u0WLSlr72Gubm1wsOmvq+3xMnKyCjGlcrQ0ZzOkcjS18St1IunwdjfuJsD24jg5rW5meSFwd7n18jx64Lv9cK05PH2+7ZY48bW+Ank5M/XwIOmaP1zpQohwlcOHdIKMCqixWnPLh60BoBSwoAa+S2EFNIivkglL56E1TClwFwkT4GE1gmAzU8CBBTYyTPnpZulvnnTxkhZugAADEgxUoJEBiAhXOhg0WAIDgsLFnDYynWBBg04cDSAoANGiAQZMogwokSJAE7+t2amYtDoXioRQCrwcPIhi9+/gAMLHiz4AxIiO1yQkEZUUTQRCwhLnkxZsAMg+ogVhSZiR+XPoAfzyBCt8SGjAHCEXs36QIlojonlEvGEtW3QpJPd6lhOmQAWt4NT9lEg3DDThIwaoCG8+WAoS2AfchdrUwEizrMDJiG31mnjwgTU1q79BgCCwpB9151gBXntDd5CW08MgIv32i3I101/mAAdwkWBn18VFDdfIdEIAIFwJNxwBH4tGCANgtAUMIRwCQiwBAtWkEeDhLphNEg0BQSB4S0ClKBACtkVAeIyFCpTgAUnqiJABgv0JZwDLyoTYzIFaFAjLlcIAIQPO/b+mM2PxBQQWXAJxNWPCAlscBuPpTE5jJNDpnIFFSHY5oCBMCYHjQFCQjmTJyRU4B5rWNKkpTBodsnJjRboKKaSx81ZS5AnIlOACCs2F2eZI4Y4Y41XlAABds5tQCZ/ZspoopolwMADeS7qgig9FSogXAYJFIHfh8uImCiQDQjn2YARUlfdd7P4B9yAzckwqWaGyJQKLQLAgGtzGuy3ZK/L3PDmsLbFJ52fsQCABLO3hWAsr73KqsoVBUBBrW0knGfXJonoFoABVn4bmhNGaIseFuUmE4AAoqoL2ofuWqNIAHIFQ4Ke9k4WgpReFhNbMgLIEDBlR7x24MHHZbDpwoPdfZDAsxCjMhEnGThAcWAehABArcnUJS8nJbBwgAfLfjvFERqIIO6nGROT0xU3uAADDBAMoUAQWlUgQwU+tLADDQckrXQLLfgggwxbgaUAWS6EEMINOq0pTEyleXKTTz/Z1MnYZHv9dU43YYINSi25ZI8s5LLdndvmTEL3Q3a3fbc0G8Ob0d7vVAR43Qy5Ozh1vQzOWNwQ9a142zAZ83jBp5Dj6eSVz4N55vP8sbnfnYNKtzuhI7t36fG6hDo3Ka3uiEWuS3JQ7KFcXt22W9Nu0Lve6e7778AHL7wxgQAAOw==",alt:""})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWgBaAOeJAFxcXFdXV1paWl1dXVtbWw0UKiktOgILJywwO0pMUTM2QCYqOEJFTEVHTkJETDs+Rz9CSkBDTE5QVD5BSTo9Rj1ASQkRKTc6RBIZLUBCSwMNJwsTKjM3QTc7RAUOKA0VKykuOx0jMw8XLC8zPwQNJwELJxceMF5eXiAmNUpLUAcPKDk9RxUbL0NGThMaLSAlNSYrOSMoNxAXLDQ3QhEYLDI2QiYrOC8zQAcQKAsTKRQbLk9QVTI2QTA0PyMoNhcdMC0xPTY6RFJUV0ZITxEXKzc7RhshMgYOJw8WKhMZLDk8RhcdLywxPQUOJ0lLUSMpOEZIThogMiwwPTw/SAMMJwIMJxkfMR0iMxsgMTU5RB0jMg4WKx0iMhgeLwkRKCgtOw8WKzc6QyktOTo9SBkgMTE1QgYPKDAzPkZITWBgYCAlNDY5QkJESwYPJwoSKQUNJxogMR4jNBUcLiwwPB4kNS8zPjQ4RCAlNjo9RSEmNiswPTs+SD5ASB4kNBogMDs9RggQKCUqOT5BSDA1QRAYLD1BSllZWQAKJ1hYWNoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQENoQECH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAP8ALAAAAABaAFoAAAj+AP8JHEiwoMGDCBMqXMiwocOHECNKnEgRoQBDGBFp1IhRgICKIEMa9LixpMmThjyKXPkwY4CTMGMaQoSRpU2DMXPqnFnyJkueNF/qHEpTps+KRWECJYoyac+jEJcynUr0I9SFPKVS3Wr06kGuYLd6LahRKCKzYcFm1ThWYNq3Sk96nfkSLdy7JQ0dlWoXL9yZVn9u1Oq3sF6WhcMGAEqYI9uViSPHRSRSsmWlIMNi3My5s+fPm9NS3PoSQJoTCVKrXs26tWsJJ9IIGCr1cMStAiQYAPOmxKHfwIMLHz68xJEkZyQI6JtT4lC0EuYcIE69uvVDJM4kaDyY422ii1P+yLlOvjxwLgmoQixLOwER8/DJd9nBdKbD+oh2aBneBgmSAgAGKOCABBJIwnAGSKAeQ07lJMAfwuUQhgQDVGjhhRhmqCEAKSjQhnBocGdSQ1MJQUNwSewAgIhbpYQRAFB4ERwXA9D2mEJTGYJGcAekQMBbZr0kQBFl2PEjAYIER4IELG600FQEKBAcFicwhZYhZgE1xhdmHHJADGMYIsR7wLExG1MKNanRAAgEhwAAi2EpU05ZDiJcIAIAoEZwa/zIVGA4TTWAAW76SVRKF3kE1EsDmCDcB4YAIEZwChhKVEJUDeomAGflZAgBK9QQAxlLWAFDDVMQwNMJPwjnBiL+ACxAqaVDIbSVpsC92ZghLQRhxHTDkYDCCjUKoIdwd+QpK3CVUgXoQLcSmiunSkWAAnkHPNECIkXQARwLRUS67G/N5vhVptL+9uZJi02xBXwsRIDIHkV8UUYhM8U6q1iBCpruIeuaZEgFbsR3CAYZ0ETAmbCOe0i5U53r76YnteDCcC5IUUMQWYBwonBGbMtew/suSBBXuKpL7UYCgBDhChFwhkgLWXQZHA9LiVuyyW5FS/FgFTQR3BYRXHSSABVYEFwBCZdEgMMQg0fZyT5PW5IANyhZwUyECbCCcDiXpC+ztF5KNbo/ayQABsFJwXBMGTwRnBVLjU1u2TuR1aD+TikDvDIiGfj2GxVN7/Q1cIDIu5HdD+Otk95oW71RBcG5oGYFGwRXOMlk53hjz5GrXJISwcXxdk4E6BDcFGJD7XhzZ08suUakA2fE6TGlHlwFre8ccexM9R2wRhkEhwHuMGVQgOa9d84vtFWLvlEGwGLHO22H/6aC4hoxHjWaJ6u55r/D08Q2cG6bZFcEcgNHxtvevx6T3uIL/zfWSmZAV3cvGZL9bzwwSfy4AjnZSY8jQQsOGGIGEwIkbWmb49zdWoST+pHvb4gggMuCk4MgFC1RBIgAD4QWnBtkZHGum8pLJBa8CwosAqoTDgtAwIMa3MBjwzEC91DoO7MVkCj+9kMJ5gzmgh3y0Hm/++FQAOBCx6itAoSAzxIYeBJJBYcDBGDO/PrVwrS98FrXOQAMWsCY5k3QXCwcygma2BdDRCAIVhCccKjQByUwrC/eQ94W08g38skPgTdAwRJ08IM81KACRlOfGRvHMyXmJIj961SQOEIAAgCgknyJyQCTyMeYCK9GjhERT7SoyAHsCTh94mQnYQIADgTHD1WyUUyyFJMxBcdMqlylwFIQnCqkQI93wRIB+BCcNzAJfE9iii2BQwMJ/FEtsIpRcLSAwa4kcy0CC4AA8BChCQHgm+AMpzjHSU4ASEABRxAOFLgzyqkxyIkxkQAWglWA/xTonvjkREIOqIAgBSGTRExJwccMRtDgdEFBWgTKdw6VgosVtKBYSE9ZROSc+uwAAdV7KHmOwAF//vMhWzEnApJwhCoc4KQoTalKV7rSKuDABXXYwTPZMxqqRGoAWQyATnfK05761KefOkE1a1UR8XEENEhNqsxG5kOkXOap7gyJ1KDK1McJhqqey5tNqqpTrD5nRD7xKlWY45XuVFWscmlLUYwaGam0BXpoJepbQRdXRc6Vi3WN6l3JwtaxwmSvyXTiKEn5VaGsELAAfcuuEFvRvjZFr4xdqGgie5OPUvaymM2sZje7koAAADs=",alt:""})})})]})}),Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("p",{children:"Todos los derechos reservados - 2021"})})]})},O=function(e){Object(j.a)(c,e);var s=Object(Q.a)(c);function c(e){var t;return Object(d.a)(this,c),(t=s.call(this,e)).state={listaMascotas:[]},t}return Object(N.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost/servicios-web/listaanimales.php").then((function(e){return e.json()})).then((function(s){console.log(s),e.setState({listaMascotas:s})}))}},{key:"dibujarTabla",value:function(e){return Object(n.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:e.map((function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"http://localhost/servicios-web/mascotas/"+e.foto,class:"card-img-top",alt:"..."}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.descripcion}),Object(n.jsxs)("p",{className:"card-text",children:[" ",e.tipo," ",e.nombre]})]})]})},e.idempleado)}))})}},{key:"render",value:function(){var e=this.dibujarTabla(this.state.listaMascotas);return Object(n.jsx)("section",{className:"padded",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:"Mascotas"}),e]})})}}]),c}(t.Component),x=function(e){Object(j.a)(c,e);var s=Object(Q.a)(c);function c(e){var t;return Object(d.a)(this,c),(t=s.call(this,e)).mascotaInsertar=function(e){e.preventDefault();var s=new FormData;s.append("nombre",t.state.nombreAgregar),s.append("descripcion",t.state.descripcionAgregar),fetch("http://localhost/servicios-web/registrarmascotas.php",{method:"POST",body:s}).then((function(e){return e.text()})).then((function(e){console.log(e)}))},t.state={listaMascotas:[],mascotaSeleccionada:"",nombreAgregar:"",descripcionAgregar:""},t}return Object(N.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost/servicios-web/mascotas.php").then((function(e){return e.json()})).then((function(s){console.log(s),e.setState({listaMascotas:s})}))}},{key:"dibujarTabla",value:function(e){return Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Cod"}),Object(n.jsx)("th",{children:"Nombre"}),Object(n.jsx)("th",{children:"Descripci\xf3n"})]})}),Object(n.jsx)("tbody",{children:e.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:e.idmascota}),Object(n.jsx)("th",{children:e.nombre}),Object(n.jsx)("th",{children:e.descripcion})]},e.idmascota)}))})]})}},{key:"dibujarFormularioAgregar",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("button",{className:"btn btn-primary","data-bs-toggle":"collapse","data-bs-target":"#collapseExample",children:"Nueva categor\xeda"})}),Object(n.jsx)("div",{className:"collapse",id:"collapseExample",children:Object(n.jsx)("div",{className:"card card-body",children:Object(n.jsxs)("form",{onSubmit:this.mascotaInsertar,children:[Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("input",{type:"text",placeholder:"Mascota",className:"form-control",onChange:function(s){return e.setState({nombreAgregar:s.target.value})}})}),Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("input",{type:"text",placeholder:"Descripci\xf3n",className:"form-control",onChange:function(s){return e.setState({descripcionAgregar:s.target.value})}})}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("button",{type:"submit",className:"btn btn-primary","data-bs-toggle":"collapse","data-bs-target":"#collapseExample",children:"Agregar"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"collapse","data-bs-target":"#collapseExample",children:"Cerrar"})]})]})})})]})}},{key:"render",value:function(){var e=this.dibujarFormularioAgregar(),s=this.dibujarTabla(this.state.listaMascotas);return Object(n.jsx)("section",{className:"padded",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:"Mis Mascotas"}),e,s]})})}}]),c}(t.Component);o.a.render(Object(n.jsxs)(i.a,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",element:Object(n.jsx)(m,{})}),Object(n.jsx)(l.a,{path:"animales",element:Object(n.jsx)(O,{})}),Object(n.jsx)(l.a,{path:"tablamascotas",element:Object(n.jsx)(x,{})})]}),Object(n.jsx)(A,{})]}),document.getElementById("root")),h()}},[[47,1,2]]]);
//# sourceMappingURL=main.ca12fe70.chunk.js.map