define("@widget/LAYOUT/bs-FlyoutMenu-Component-266b929e.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-Toggle","~/c/bs-index2"],(function(e,o,t,p){"use strict";var a={toggleId:(global.PropTypes||guac["prop-types"]).string.isRequired,activeProps:(global.PropTypes||guac["prop-types"]).object,label:(global.PropTypes||guac["prop-types"]).string.isRequired,renderCustomIcon:(global.PropTypes||guac["prop-types"]).object,renderCustomContent:(global.PropTypes||guac["prop-types"]).oneOfType([(global.PropTypes||guac["prop-types"]).bool,(global.PropTypes||guac["prop-types"]).element,(global.PropTypes||guac["prop-types"]).node]),id:(global.PropTypes||guac["prop-types"]).string,isActive:(global.PropTypes||guac["prop-types"]).bool,enableNoOverlapDropdown:(global.PropTypes||guac["prop-types"]).bool,widgetId:(global.PropTypes||guac["prop-types"]).string,overrideIconStyle:(global.PropTypes||guac["prop-types"]).object,dataAid:(global.PropTypes||guac["prop-types"]).string,hasHover:(global.PropTypes||guac["prop-types"]).bool,navBarId:(global.PropTypes||guac["prop-types"]).string,parentId:(global.PropTypes||guac["prop-types"]).string,customToggleStyles:(global.PropTypes||guac["prop-types"]).object,renderMode:(global.PropTypes||guac["prop-types"]).string};class s extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={open:!1}}handleChange(){this.setState({open:!this.state.open})}componentDidUpdate(e,o){let{open:t}=o;const{enableNoOverlapDropdown:p,customToggleStyles:a}=this.props;if(t!==this.state.open){const{toggleId:o}=e,t=document.getElementById(o);t&&(p&&(t.style.top=`${this.handleDropdownOffsetChange()}px`),a?(global._||guac.lodash).merge(t.style,a[this.state.open?"open":"close"]):t.style.display=this.state.open?"block":"none")}}handleDropdownOffsetChange(){const{navBarId:e,parentId:o}=this.props,t=document.getElementById(e).getBoundingClientRect(),a=document.getElementById(o).getElementsByTagName("li")[0].getBoundingClientRect(),s=p.g();return t&&a?(t.height-(a.top-t.top))/s:0}render(){const{label:e,renderCustomIcon:p,id:a,isActive:n,overrideIconStyle:r,dataAid:l,hasHover:g,renderCustomContent:i}=this.props,{open:c}=this.state,d=(global._||guac.lodash).omit(this.props,Object.keys(s.propTypes).concat(["Component","renderMode"])),u=c?"180":"0",y={position:"relative",color:"inherit",...r},b=e?(global.React||guac.react).createElement("span",{style:{marginRight:"4px"}},e):null;return(global.React||guac.react).createElement(t.T,o.a({"data-aid":l,onChange:this.handleChange,isActive:n},d,c&&this.props.activeProps,{"data-edit-interactive":!0,"aria-haspopup":"menu"}),i||(global.React||guac.react).createElement("div",{style:{pointerEvents:g?"auto":"none",display:"flex",alignItems:"center"},"data-aid":l},b,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{id:a,icon:p.name||"chevronDown",size:p.size||"small",minTarget:p.minTarget||!1,rotate:p.name?"":u,style:y})))}}s.propTypes=a,s.defaultProps={activeProps:{},label:"",renderCustomIcon:{},renderCustomContent:!1,hasHover:!1,dataAid:"NAV_DROPDOWN"},e.default=s,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-FlyoutMenu-Component-266b929e.js.map
