webpackJsonp([0xb42d5c5b2498],{244:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data;if(t.allMarkdownRemark){var a=t.allMarkdownRemark.edges;return o.default.createElement("div",{className:"project-posts"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return o.default.createElement("div",{className:"project-post",key:t.id},o.default.createElement("div",{className:"project-post-preview",onClick:function(){return(0,c.navigateTo)(t.frontmatter.path)},style:{backgroundImage:"url("+t.frontmatter.cover+")"}}),o.default.createElement("h2",{className:"post-title-container"},o.default.createElement("span",{className:"post-title",onClick:function(){return(0,c.navigateTo)(t.frontmatter.path)}},t.frontmatter.title)))}))}return o.default.createElement("div",{className:"general-content"},"Popup")}t.__esModule=!0,t.pageQuery=void 0,t.default=n;var l=a(1),o=r(l),c=a(10);a(22);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-popup-js-8c194c2a1ba1b6790aae.js.map