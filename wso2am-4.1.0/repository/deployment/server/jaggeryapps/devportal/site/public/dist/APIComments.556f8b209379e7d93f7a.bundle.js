(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{3709:function(e,t,a){"use strict";var n=a(1063),i=a(1064);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(2)),s=(0,n(a(1065)).default)(o.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=s},3710:function(e,t,a){"use strict";var n=a(1064),i=a(1063);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=i(a(1185)),s=i(a(1115)),l=n(a(2)),r=(i(a(17)),i(a(1060))),m=i(a(1223)),c=(i(a(3711)),i(a(3712)),[0,1,2,3,4,5,6,7,8,9,10]),d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var h=function(e){return(0,s.default)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};d.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?(0,s.default)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))};t.styles=h;var u=l.forwardRef((function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,i=e.alignItems,m=void 0===i?"stretch":i,c=e.classes,d=e.className,p=e.component,h=void 0===p?"div":p,u=e.container,g=void 0!==u&&u,C=e.direction,f=void 0===C?"row":C,b=e.item,y=void 0!==b&&b,x=e.justify,E=e.justifyContent,w=void 0===E?"flex-start":E,v=e.lg,k=void 0!==v&&v,T=e.md,A=void 0!==T&&T,R=e.sm,O=void 0!==R&&R,S=e.spacing,M=void 0===S?0:S,D=e.wrap,I=void 0===D?"wrap":D,N=e.xl,j=void 0!==N&&N,W=e.xs,L=void 0!==W&&W,q=e.zeroMinWidth,U=void 0!==q&&q,B=(0,o.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=(0,r.default)(c.root,d,g&&[c.container,0!==M&&c["spacing-xs-".concat(String(M))]],y&&c.item,U&&c.zeroMinWidth,"row"!==f&&c["direction-xs-".concat(String(f))],"wrap"!==I&&c["wrap-xs-".concat(String(I))],"stretch"!==m&&c["align-items-xs-".concat(String(m))],"stretch"!==n&&c["align-content-xs-".concat(String(n))],"flex-start"!==(x||w)&&c["justify-content-xs-".concat(String(x||w))],!1!==L&&c["grid-xs-".concat(String(L))],!1!==O&&c["grid-sm-".concat(String(O))],!1!==A&&c["grid-md-".concat(String(A))],!1!==k&&c["grid-lg-".concat(String(k))],!1!==j&&c["grid-xl-".concat(String(j))]);return l.createElement(h,(0,s.default)({className:P,ref:t},B))})),g=(0,m.default)(h,{name:"MuiGrid"})(u);t.default=g},3711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){return null};return function(t){return function(a,n,i,o,s){var l=s||n;return void 0===a[n]||a[t]?null:new Error("The prop `".concat(l,"` of ")+"`".concat(e,"` must be used on `").concat(t,"`."))}}}},3712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(){return null};return function(e,a,n,i,o){var s=n||"<<anonymous>>",l=o||a;return void 0!==e[a]?new Error("The ".concat(i," `").concat(l,"` of ")+"`".concat(s,"` is deprecated. ").concat(t)):null}}},3880:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(17),s=a.n(o),l=a(1061),r=a(1630),m=a(1619),c=a(3710),d=a.n(c),p=a(1662),h=a(3948),u=a(1618),g=a(343),C=a(1089),f=a.n(C),b=a(3938),y=a(1124),x=a(1339),E=a(3709),w=a.n(E),v=a(1635),k=a(3951),T=a(1665),A=a(3946),R=a(1707),O=a.n(R),S=a(1708),M=a.n(S),D=a(1072),I=a(1340),N=a(1448),j=a(1449),W=a(1450),L=a(1451);class q extends i.a.Component{handleRequestClose(e){const{callback:t}=this.props;e===q.Action.OK?t(!0):t(!1)}render(){const{title:e,message:t,labelCancel:a,labelOk:n,open:o,classes:s}=this.props;return i.a.createElement(I.a,{role:"alertdialog",open:o,onClose:this.handleRequestClose,className:s.dialogWrapper},i.a.createElement(N.a,null,e||i.a.createElement(u.a,{id:"Shared.ConfirmDialog.please.confirm",defaultMessage:"Please Confirm"})),i.a.createElement(j.a,null,i.a.createElement(W.a,null,t||i.a.createElement(u.a,{id:"Shared.ConfirmDialog.please.confirm.sure",defaultMessage:"Are you sure?"}))),i.a.createElement(L.a,null,i.a.createElement(p.a,{onClick:()=>this.handleRequestClose(q.Action.CANCEL),color:"primary"},a||i.a.createElement(u.a,{id:"Shared.ConfirmDialog.cancel",defaultMessage:"Cancel"})),i.a.createElement(p.a,{onClick:()=>this.handleRequestClose(q.Action.OK),color:"primary",variant:"contained",className:s.deleteConformButton},n||i.a.createElement(u.a,{id:"Shared.ConfirmDialog.ok",defaultMessage:"OK"}))))}}q.propTypes={title:s.a.string.isRequired,message:s.a.string.isRequired,labelCancel:s.a.string.isRequired,labelOk:s.a.string.isRequired,callback:s.a.func.isRequired,open:s.a.bool.isRequired},q.Action={OK:"ok",CANCEL:"cancel"};var U=Object(l.a)(e=>({dialogWrapper:{"& span, & h5, & label, & td, & li, & div, & p":{color:e.palette.getContrastText(e.palette.background.paper)}},deleteConformButton:{"& span.MuiButton-label":{color:e.palette.getContrastText(e.palette.primary.main)}}}))(q),B=a(334),P=a(1623),z=a(1624),F=a(1633),_=a(2012);class G extends i.a.Component{constructor(e){super(e),this.state={commentText:"",category:"",currentLength:0},this.inputChange=this.inputChange.bind(this),this.handleCategoryChange=this.handleCategoryChange.bind(this),this.handleClickUpdateComment=this.handleClickUpdateComment.bind(this),this.handleClickCancel=this.handleClickCancel.bind(this),this.filterCommentToUpdate=this.filterCommentToUpdate.bind(this),this.filterCommentToUpdateReply=this.filterCommentToUpdateReply.bind(this)}componentDidMount(){const{comment:e}=this.props;this.setState({commentText:e.commentText,category:e.category,currentLength:e.commentText.length})}inputChange(e){let{target:t}=e;this.setState({commentText:t.value,currentLength:t.value.length})}handleClickCancel(){const{toggleShowEdit:e,commentsUpdate:t,allComments:a}=this.props;e(),t(a)}handleCategoryChange(e){this.setState({category:e.target.value})}filterCommentToUpdate(e){const{comment:t}=this.props;return e.commentId===t.commentId}filterCommentToUpdateReply(e){const{comment:t}=this.props;return e.commentId===t.parentCommentId}handleClickUpdateComment(){const{apiId:e,comment:t,allComments:a,toggleShowEdit:n,commentsUpdate:i,intl:o}=this.props,{category:s,commentText:l}=this.state,r=new B.a,m=t;m.commentText=l.trim(),m.category=s,t.commentText.replace(/\s/g,"").length?r.updateComment(e,m.commentId,m).then(e=>{const t=e.body;if(void 0===m.parentCommentId){const e=a.findIndex(this.filterCommentToUpdate);a[e].category=t.category,a[e].commentText=t.commentText}else{const e=a.findIndex(this.filterCommentToUpdateReply),n=a[e].replies.findIndex(this.filterCommentToUpdate);a[e].replies[n]=t}n(),i(a)}).catch(e=>{console.error(e),e.response?D.a.error(e.response.body.message):D.a.error(o.formatMessage({defaultMessage:"Something went wrong while adding the comment",id:"Apis.Details.Comments.CommentEdit.something.went.wrong"}))}):D.a.error(o.formatMessage({defaultMessage:"You cannot enter a blank comment",id:"Apis.Details.Comments.CommentEdit.blank.comment.error"}))}render(){const{classes:e,theme:t,intl:a}=this.props,{category:n,commentText:o,currentLength:s}=this.state;return i.a.createElement("div",null,i.a.createElement(z.a,{className:e.category},i.a.createElement(_.a,{value:n,onChange:this.handleCategoryChange},i.a.createElement(F.a,{value:"General"},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentEdit.general",defaultMessage:"General"})),i.a.createElement(F.a,{value:"Feature Request"},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentEdit.feature.request",defaultMessage:"Feature Request"})),i.a.createElement(F.a,{value:"Bug Report"},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentEdit.bug.report",defaultMessage:"Bug Report"})))),i.a.createElement(P.a,{id:"multiline-static",autoFocus:!0,multiline:!0,className:e.textField,margin:"normal",placeholder:a.formatMessage({defaultMessage:"Write a comment",id:"Apis.Details.Comments.CommentEdit.write.a.comment"}),inputProps:{maxLength:t.custom.maxCommentLength},value:o,onChange:this.inputChange}),i.a.createElement(m.a,{className:e.commentText,align:"right"},s+"/"+t.custom.maxCommentLength),i.a.createElement(T.a,{container:!0,spacing:1},i.a.createElement(T.a,{item:!0},i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:()=>this.handleClickUpdateComment()},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentEdit.btn.save",defaultMessage:"Save"}))),i.a.createElement(T.a,{item:!0},i.a.createElement(p.a,{onClick:()=>this.handleClickCancel(),className:e.button},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentEdit.btn.cancel",defaultMessage:"Cancel"})))))}}G.defaultProps={commentsUpdate:null},G.propTypes={classes:s.a.instanceOf(Object).isRequired,apiId:s.a.string.isRequired,allComments:s.a.instanceOf(Array).isRequired,commentsUpdate:s.a.func,toggleShowEdit:s.a.func.isRequired,comment:s.a.instanceOf(Object).isRequired,intl:s.a.shape({formatMessage:s.a.func}).isRequired};var K=Object(g.c)(Object(l.a)(e=>({textField:{marginTop:0,width:"87.5%"},contentWrapper:{maxWidth:e.custom.contentAreaWidth,paddingLeft:e.spacing(2),paddingTop:e.spacing.unig,marginTop:e.spacing(2)},category:{width:"12%",marginRight:"0.5%"}}),{withTheme:!0})(G)),Y=a(42);class J extends i.a.Component{constructor(e){super(e),this.state={},this.showAddComment=this.showAddComment.bind(this),this.showEditComment=this.showEditComment.bind(this),this.handleClickOpen=this.handleClickOpen.bind(this)}showAddComment(e){const{showAddComment:t}=this.props;t(e)}showEditComment(e){const{editIndex:t,showEditComment:a}=this.props;-1===t&&a(e)}handleClickOpen(e){const{editIndex:t,handleClickOpen:a}=this.props;-1===t&&a(e)}displayDate(e){const t=new Date(e);return t.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})+" "+t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}render(){const{classes:e,comment:t,editIndex:a,index:n,theme:o}=this.props,s=Y.a.getUser(),l=s&&s.name,r=t.createdBy===l||s&&s.isAdmin();return i.a.createElement(T.a,{container:!0,className:e.verticalSpace,key:t.id},r&&[i.a.createElement(T.a,{item:!0,key:"key-delete"},i.a.createElement(p.a,{size:"small",className:-1===a?e.link:e.disable,onClick:()=>this.handleClickOpen(t),color:"primary","aria-label":"Delete comment "+t.content},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentOptions.delete",defaultMessage:"Delete"})))],null===t.parentCommentId&&Y.a.getUser()&&[i.a.createElement(T.a,{item:!0,key:"key-reply"},i.a.createElement(p.a,{size:"small",className:e.link,onClick:()=>this.showAddComment(t.id),color:"primary","aria-label":"Reply to comment "+t.content},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentOptions.reply",defaultMessage:"Reply"})))])}}J.defaultProps={showAddComment:null},J.propTypes={classes:s.a.instanceOf(Object).isRequired,editIndex:s.a.number.isRequired,index:s.a.number.isRequired,comment:s.a.instanceOf(Object).isRequired,handleClickOpen:s.a.func.isRequired,showEditComment:s.a.func.isRequired,showAddComment:s.a.func};var H=Object(l.a)(e=>({link:{color:e.palette.getContrastText(e.palette.primary.main),"& span.MuiButton-label":{color:e.palette.primary.main,fontWeight:"400"},cursor:"pointer"},time:{color:e.palette.getContrastText(e.palette.background.default),marginTop:e.spacing(.3)},verticalSpace:{display:"flex",alignItems:"center"},disable:{color:e.palette.grey[200]},commentIcon:{color:e.palette.getContrastText(e.palette.background.default)},commentText:{color:e.palette.getContrastText(e.palette.background.default),marginTop:e.spacing.unig,width:"100%",whiteSpace:"pre-wrap",overflowWrap:"break-word"},root:{marginTop:e.spacing(2.5)},contentWrapper:{maxWidth:e.custom.contentAreaWidth,paddingLeft:e.spacing(2),paddingTop:e.spacing.unig}}),{withTheme:!0})(J),V=a(2014);class $ extends i.a.Component{constructor(e){var t,a,n;super(e),n=()=>{const{cancelCallback:e}=this.props;e?e():this.handleClickCancel(-1)},(a="handleCancel")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,this.state={content:"",currentLength:0},this.inputChange=this.inputChange.bind(this),this.handleClickAddComment=this.handleClickAddComment.bind(this),this.handleClickCancel=this.handleClickCancel.bind(this),this.filterCommentToAddReply=this.filterCommentToAddReply.bind(this)}inputChange(e){let{target:t}=e;this.setState({content:t.value,currentLength:t.value.length})}handleClickCancel(){this.setState({content:""});const{handleShowReply:e}=this.props;e(-1)}filterCommentToAddReply(e){const{replyTo:t}=this.props;return e.id===t}handleClickAddComment(){const{apiId:e,intl:t,replyTo:a,handleShowReply:n,addComment:i,addReply:o}=this.props,{content:s}=this.state,l=new B.a,r={content:s.trim(),category:"general"};r.content.replace(/\s/g,"").length?l.addComment(e,r,a).then(e=>{this.setState({content:""}),null===a?i&&i(e.body):o&&o(e.body)}).catch(e=>{console.error(e),e.response&&e.response.body&&e.response.body.message?D.a.error(e.response.body.message):D.a.error(t.formatMessage({defaultMessage:"Something went wrong while adding the comment",id:"Apis.Details.Comments.CommentAdd.something.went.wrong"}))}):D.a.error(t.formatMessage({defaultMessage:"You cannot enter a blank comment",id:"Apis.Details.Comments.CommentAdd.error.blank.comment"})),this.setState({currentLength:0}),null!==a&&n()}render(){const{classes:e,cancelButton:t,theme:a,intl:n}=this.props,{content:o,currentLength:s}=this.state;return i.a.createElement(T.a,{container:!0,spacing:1,className:e.contentWrapper},i.a.createElement(T.a,{item:!0,xs:!0,zeroMinWidth:!0},i.a.createElement("div",{className:e.commentAddWrapper},i.a.createElement(V.a,{htmlFor:"standard-multiline-flexible"},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentAdd.write.comment.label",defaultMessage:"Write a comment"})),i.a.createElement(P.a,{id:"standard-multiline-flexible",autoFocus:!0,multiline:!0,rows:"4",className:e.textField,margin:"normal",placeholder:n.formatMessage({defaultMessage:"Write a comment",id:"Apis.Details.Comments.CommentAdd.write.comment.help"}),inputProps:{maxLength:a.custom.maxCommentLength},value:o,onChange:this.inputChange,variant:"outlined"}),i.a.createElement(m.a,{className:e.content,align:"right"},s+"/"+a.custom.maxCommentLength)),i.a.createElement(T.a,{container:!0,spacing:1},i.a.createElement(T.a,{item:!0},i.a.createElement(p.a,{variant:"contained",color:"primary",disabled:0===s,onClick:()=>this.handleClickAddComment(),className:e.commentAddButton},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentAdd.btn.add.comment",defaultMessage:"Comment"}))),t&&i.a.createElement(T.a,{item:!0},i.a.createElement(p.a,{onClick:this.handleCancel,className:e.button},i.a.createElement(u.a,{id:"Apis.Details.Comments.CommentAdd.btn.cancel",defaultMessage:"Cancel"}))))))}}$.defaultProps={replyTo:null,handleShowReply:null,commentsUpdate:null,cancelCallback:null},$.propTypes={classes:s.a.instanceOf(Object).isRequired,cancelButton:s.a.bool.isRequired,apiId:s.a.string.isRequired,replyTo:s.a.string,handleShowReply:s.a.func,commentsUpdate:s.a.func,allComments:s.a.instanceOf(Array).isRequired,intl:s.a.shape({formatMessage:s.a.func}).isRequired,cancelCallback:s.a.func};var Q=Object(g.c)(Object(l.a)(e=>({commentIcon:{color:e.palette.getContrastText(e.palette.background.default)},content:{color:e.palette.getContrastText(e.palette.background.default)},contentWrapper:{maxWidth:e.custom.contentAreaWidth,paddingLeft:e.spacing(2),paddingTop:e.spacing(1),marginTop:e.spacing(2)},textField:{marginTop:0,marginRight:5,width:"100%"},commentAddWrapper:{display:"flex",alignItems:"top",flexFlow:"column","& label":{marginBottom:e.spacing(1)}},commentAddButton:{"& span.MuiButton-label":{color:e.palette.getContrastText(e.palette.primary.main)}}}),{withTheme:!0})($));function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){ee(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}O.a.extend(M.a);class te extends i.a.Component{constructor(e){super(e),this.state={openDialog:!1,replyId:-1,editIndex:-1,deleteComment:null},this.handleClickDeleteComment=this.handleClickDeleteComment.bind(this),this.handleShowEdit=this.handleShowEdit.bind(this),this.handleShowReply=this.handleShowReply.bind(this),this.handleClickOpen=this.handleClickOpen.bind(this),this.showAddComment=this.showAddComment.bind(this),this.showEditComment=this.showEditComment.bind(this),this.handleConfirmDialog=this.handleConfirmDialog.bind(this),this.handleClose=this.handleClose.bind(this),this.filterRemainingComments=this.filterRemainingComments.bind(this),this.filterCommentToDelete=this.filterCommentToDelete.bind(this),this.handleLoadMoreReplies=this.handleLoadMoreReplies.bind(this),this.handleAddReply=this.handleAddReply.bind(this),this.handleDeleteReply=this.handleDeleteReply.bind(this)}filterRemainingComments(e){const{deleteComment:t}=this.state;return e.id!==t.id}filterCommentToDelete(e){const{deleteComment:t}=this.state;return e.id===t.parentCommentId}showAddComment(e){this.setState({replyId:e})}showEditComment(e){const{editIndex:t}=this.state;-1===t&&this.setState({editIndex:e})}handleShowEdit(){this.setState({editIndex:-1})}handleShowReply(){this.setState({replyId:-1})}handleClickOpen(e){const{editIndex:t}=this.state;-1===t&&this.setState({deleteComment:e,openDialog:!0})}handleClose(){this.setState({openDialog:!1})}handleConfirmDialog(e){e?this.handleClickDeleteComment():this.handleClose()}handleClickDeleteComment(){const e=new B.a,{deleteComment:t}=this.state,{apiId:a,intl:n,onDeleteComment:i}=this.props,o=t.id,s=t.parentCommentId;this.handleClose(),e.deleteComment(a,o).then(()=>{null===s?(i&&i(o),D.a.info(n.formatMessage({defaultMessage:"Comment has been successfully deleted",id:"Apis.Details.Comments.Comment.comment.deleted"}))):(this.handleDeleteReply(s,o),D.a.info(n.formatMessage({defaultMessage:"Reply comment has been successfully deleted",id:"Apis.Details.Comments.Comment.reply.comment.deleted"})))}).catch(e=>{console.error(e),e.response?D.a.error(e.response.body.message):D.a.error(n.formatMessage({defaultMessage:"Something went wrong while deleting comment",id:"Apis.Details.Comments.Comment.something.went.wrong"})+" - "+o)})}handleLoadMoreReplies(e){const{apiId:t,comments:a,updateComment:n}=this.props,{id:i,replies:{count:o,list:s}}=e;(new B.a).getAllCommentReplies(t,i,3,o).then(e=>{if(e.body){const{list:t,count:l}=e.body,r=a.find(e=>e.id===i),m=s.concat(t),c=o+l,d=c<=3?3:c,p=Z(Z({},r),{},{replies:{count:c,list:m,pagination:Z(Z({},r.replies.pagination),{},{limit:d})}});n&&n(p)}}).catch(e=>{0})}handleDeleteReply(e,t){const{comments:a,updateComment:n,apiId:i}=this.props,o=a.find(t=>t.id===e),{replies:s}=o,l=s.list.filter(e=>e.id!==t),r=s.pagination.total-1,m=s.pagination.limit>r?r:s.pagination.limit,c=s.count-1;if(r>c){(new B.a).getAllCommentReplies(i,e,1,m-1).then(e=>{if(e.body){const t=Z(Z({},o),{},{replies:Z(Z({},s),{},{list:[...l,...e.body.list],pagination:Z(Z({},s.pagination),{},{total:r})})});n&&n(t)}}).catch(e=>{0})}else{const e=Z(Z({},o),{},{replies:Z(Z({},s),{},{count:c,list:l,pagination:Z(Z({},s.pagination),{},{limit:m,total:r})})});n&&n(e)}}handleAddReply(e){const{comments:t,updateComment:a}=this.props,{parentCommentId:n}=e,i=t.find(e=>e.id===n),{replies:o}=i,s=(o.count||0)+1,l=s<=3?3:s,r=Z(Z({},i),{},{replies:Z(Z({},o),{},{count:s,list:[...o.list,e],pagination:Z(Z({},o.pagination),{},{limit:l,offset:o.pagination.offset||0,total:o.pagination.total+1})})});a&&a(r)}render(){const{classes:e,comments:t,apiId:a,allComments:n,isOverview:o,isCrossTenantUser:s}=this.props,{editIndex:l,openDialog:r,replyId:c}=this.state;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:f()({[e.paper]:!o&&t.length>0},{[e.cleanBack]:o})},t&&t.slice(0).map((t,r)=>i.a.createElement("div",{key:t.id+"-"+r,className:f()({[e.contentWrapper]:!o},{[e.contentWrapperOverview]:o})},0!==r&&i.a.createElement(A.a,{className:e.divider}),i.a.createElement(T.a,{md:8,container:!0,spacing:1,className:f()({[e.root]:!o})},i.a.createElement(T.a,{item:!0},i.a.createElement(k.a,{className:e.commentIcon},"account_circle")),i.a.createElement(T.a,{item:!0,xs:!0,zeroMinWidth:!0},i.a.createElement(m.a,{noWrap:!0,className:e.commentText},t.commenterInfo&&t.commenterInfo.firstName?t.commenterInfo.firstName+t.commenterInfo.lastName:t.createdBy),i.a.createElement(v.a,{title:t.createdTime,"aria-label":t.createdTime},i.a.createElement(m.a,{noWrap:!0,className:e.commentText,variant:"caption"},O()(t.createdTime).fromNow())),i.a.createElement(m.a,{className:e.commentText},t.content),!s&&i.a.createElement(H,{comment:t,editIndex:l,index:r,showAddComment:this.showAddComment,handleClickOpen:this.handleClickOpen,showEditComment:this.showEditComment}),t.id===c&&i.a.createElement(h.a,{ml:6,mb:2},i.a.createElement(Q,{apiId:a,replyTo:t.id,allComments:n,handleShowReply:this.handleShowReply,cancelButton:!0,addReply:this.handleAddReply})),t.replies&&t.replies.list.map((n,o)=>i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{ml:8},0!==o&&i.a.createElement(A.a,{className:e.divider}),i.a.createElement(T.a,{container:!0,spacing:1,className:e.root},i.a.createElement(T.a,{item:!0},i.a.createElement(k.a,{className:e.commentIcon},"account_circle")),i.a.createElement(T.a,{item:!0,xs:!0,zeroMinWidth:!0},i.a.createElement(m.a,{noWrap:!0,className:e.commentText},n.commenterInfo&&n.commenterInfo.fullName?n.commenterInfo.fullName:n.createdBy),i.a.createElement(v.a,{title:t.createdTime,"aria-label":t.createdTime},i.a.createElement(m.a,{noWrap:!0,className:e.commentText,variant:"caption"},O()(n.createdTime).fromNow())),o!==l&&i.a.createElement(m.a,{className:e.commentText},n.content),o===l&&i.a.createElement(K,{apiId:a,allComments:n,comment:n,toggleShowEdit:this.handleShowEdit}),!s&&i.a.createElement(H,{comment:n,editIndex:l,index:o,showAddComment:this.showAddComment,handleClickOpen:this.handleClickOpen,showEditComment:this.showEditComment})))))),t.replies&&t.replies.count<t.replies.pagination.total&&i.a.createElement("div",{className:e.contentWrapper},i.a.createElement(T.a,{container:!0,spacing:4,className:e.root},i.a.createElement(T.a,{item:!0},i.a.createElement(m.a,{className:e.verticalSpace,variant:"body1"},i.a.createElement("a",{className:e.link+" "+e.loadMoreLink,onClick:()=>this.handleLoadMoreReplies(t),onKeyDown:()=>this.handleLoadMoreReplies(t)},i.a.createElement(u.a,{id:"Apis.Details.Comments.Comment.load.more.replies",defaultMessage:"Show More Replies"})))),i.a.createElement(T.a,{item:!0},i.a.createElement(m.a,{className:e.verticalSpace,zvariant:"body1"},"("+t.replies.count+" of "+t.replies.pagination.total+")"))))))))),i.a.createElement(U,{key:"key-dialog",labelCancel:i.a.createElement(u.a,{id:"Apis.Details.Comments.Comment.delete.dialog.label.cancel",defaultMessage:"Cancel"}),title:i.a.createElement(u.a,{id:"Apis.Details.Comments.Comment.delete.dialog.title",defaultMessage:"Confirm Delete"}),message:i.a.createElement(u.a,{id:"Apis.Details.Comments.Comment.delete.dialog.message",defaultMessage:"Are you sure you want to delete this comment?"}),labelOk:i.a.createElement(u.a,{id:"Apis.Details.Comments.Comment.delete.dialog.label.ok",defaultMessage:"Yes"}),callback:this.handleConfirmDialog,open:r}))}}te.defaultProps={isOverview:!1},te.propTypes={classes:s.a.shape({}).isRequired,apiId:s.a.string.isRequired,allComments:s.a.instanceOf(Array).isRequired,comments:s.a.instanceOf(Array).isRequired,isOverview:s.a.bool,isCrossTenantUser:s.a.bool.isRequired,updateComment:s.a.func.isRequired};var ae=Object(g.c)(Object(l.a)(e=>({link:{color:e.palette.getContrastText(e.palette.background.default),cursor:"pointer"},commentIcon:{color:e.palette.getContrastText(e.palette.background.default)},commentText:{color:e.palette.getContrastText(e.palette.background.default),marginTop:0,width:"99%",whiteSpace:"pre-wrap",overflowWrap:"break-word",wordBreak:"break-all"},root:{marginTop:e.spacing(1)},contentWrapper:{paddingLeft:e.spacing(2),paddingTop:e.spacing(1)},contentWrapperOverview:{background:"transparent",width:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"60%"},paper:{margin:0,marginTop:e.spacing(1),marginRight:e.spacing(3),paddingBottom:e.spacing(3)},cleanBack:{background:"transparent",width:"100%",boxShadow:"none"}}))(te)),ne=a(1084);class ie extends n.Component{constructor(e){super(e),this.state={expanded:!0,allComments:null,comments:[],totalComments:0,apiId:null,showCommentAdd:!1},this.handleExpandClick=this.handleExpandClick.bind(this),this.handleLoadMoreComments=this.handleLoadMoreComments.bind(this),this.toggleCommentAdd=this.toggleCommentAdd.bind(this),this.addComment=this.addComment.bind(this),this.updateComment=this.updateComment.bind(this),this.onDeleteComment=this.onDeleteComment.bind(this),this.isCrossTenant=this.isCrossTenant.bind(this)}componentDidMount(){let{apiId:e,theme:t,match:a,intl:n,isOverview:i,setCount:o}=this.props;a&&(e=a.params.apiUuid),this.setState({apiId:e});const s=new B.a,l=t.custom.commentsLimit;s.getAllComments(e,l,0).then(e=>{let t=e.body.list;i&&(o(t.length),t.length>2&&(t=t.slice(t.length-3,t.length))),this.setState({allComments:t,comments:t,totalComments:e.body.pagination.total})}).catch(e=>{0})}handleLoadMoreComments(){const{allComments:e,apiId:t,comments:a}=this.state,{theme:n}=this.props,i=new B.a,o=n.custom.commentsLimit,s=a.length;i.getAllComments(t,o,s).then(t=>{const a=e.concat(t.body.list);this.setState({allComments:a,comments:a})}).catch(e=>{0})}handleExpandClick(){const{expanded:e}=this.state;this.setState({expanded:!e})}addComment(e){const{totalComments:t,allComments:a}=this.state,{theme:{custom:{commentsLimit:n}}}=this.props,i=t+1;this.setState({allComments:[e,...a],totalComments:i,comments:[e,...a]})}updateComment(e){const{comments:t}=this.state,a=t.reduce((t,a)=>{let n=a;return a.id===e.id&&(n=e),[...t,n]},[]);this.setState({allComments:a,comments:a})}onDeleteComment(e){const{apiId:t,comments:a,totalComments:n}=this.state,i=a.filter(t=>t.id!==e),o=n-1;if(o>i.length){(new B.a).getAllComments(t,1,i.length).then(e=>{e.body&&this.setState({totalComments:o,comments:[...i,...e.body.list],allComments:[...i,...e.body.list]})}).catch(e=>{0})}else this.setState({totalComments:o,comments:i,allComments:i})}isCrossTenant(e,t){if(!t)return!1;let a=null;const n=e.name;if(n.includes("@")){const e=n.split("@");a=e[e.length-1]}else a="carbon.super";return t!==a}toggleCommentAdd(){this.setState(e=>({showCommentAdd:!e.showCommentAdd}))}render(){const{classes:e,isOverview:t,tenantDomain:a}=this.props,{comments:n,allComments:o,totalComments:s,showCommentAdd:l}=this.state,c=Y.a.getUser()&&this.isCrossTenant(Y.a.getUser(),a);return i.a.createElement(ne.a.Consumer,null,a=>{let{api:g}=a;return i.a.createElement("div",{className:f()({[e.contentWrapper]:!t},{[e.contentWrapperOverview]:t})},!t&&i.a.createElement("div",{className:e.root},i.a.createElement(m.a,{variant:"h4",component:"h2",className:e.titleSub},s+" ",i.a.createElement(u.a,{id:"Apis.Details.Comments.title",defaultMessage:"Comments"}))),!c&&Y.a.getUser()&&i.a.createElement(h.a,{mt:2,ml:1},!l&&i.a.createElement(p.a,{color:"primary",size:"small",className:e.button,startIcon:i.a.createElement(w.a,null),onClick:this.toggleCommentAdd},i.a.createElement(u.a,{id:"Apis.Details.Comments.write.a.new.comment",defaultMessage:"Write a New Comment"})),l&&i.a.createElement(Q,{apiId:g.id,commentsUpdate:this.addComment,addComment:this.addComment,allComments:o,replyTo:null,cancelCallback:this.toggleCommentAdd,cancelButton:!0})),!o&&i.a.createElement(r.a,{className:e.paperProgress},i.a.createElement(b.a,{size:24})),o&&0===s&&i.a.createElement(h.a,{mt:2,mb:2,ml:1},i.a.createElement(y.a,{type:"info",title:i.a.createElement(u.a,{id:"Apis.Details.Comments.no.comments",defaultMessage:"No Comments Yet"})},i.a.createElement(m.a,{component:"p"},i.a.createElement(u.a,{id:"Apis.Details.Comments.no.comments.content",defaultMessage:"No comments available for this API yet"})))),i.a.createElement(ae,{comments:n,isCrossTenantUser:c,apiId:g.id,allComments:o,onDeleteComment:this.onDeleteComment,updateComment:this.updateComment}),s>n.length&&i.a.createElement("div",{className:e.contentWrapper},i.a.createElement(d.a,{container:!0,spacing:4,className:e.root},i.a.createElement(d.a,{item:!0},i.a.createElement(m.a,{className:e.verticalSpace,variant:"body1"},i.a.createElement("a",{className:e.link+" "+e.loadMoreLink,onClick:this.handleLoadMoreComments},i.a.createElement(u.a,{id:"Apis.Details.Comments.load.previous.comments",defaultMessage:"Show More"})))),i.a.createElement(d.a,{item:!0},i.a.createElement(m.a,{className:e.verticalSpace,variant:"body1"},"("+n.length+" of "+s+")")))))})}}var oe,se,le;oe=ie,se="contextType",le=ne.a,se in oe?Object.defineProperty(oe,se,{value:le,enumerable:!0,configurable:!0,writable:!0}):oe[se]=le,ie.defaultProps={setCount:()=>{}},ie.propTypes={classes:s.a.instanceOf(Object).isRequired,setCount:s.a.func};t.default=Object(g.c)(Object(l.a)(e=>({root:{display:"flex",alignItems:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},paper:{marginRight:e.spacing(3),paddingBottom:e.spacing(3),paddingRight:e.spacing(2),"& span, & h5, & label, & td, & li, & div, & input":{color:e.palette.getContrastText(e.palette.background.paper)}},contentWrapper:{paddingLeft:e.spacing(3),marginTop:e.spacing(1)},contentWrapperOverview:{padding:0,width:"100%",boxShadow:"none"},titleSub:{cursor:"pointer",color:e.palette.getContrastText(e.palette.background.default)},link:{color:e.palette.getContrastText(e.palette.background.default),cursor:"pointer"},verticalSpace:{marginTop:e.spacing(.2)},loadMoreLink:{textDecoration:"none"},genericMessageWrapper:{marginTop:e.spacing(2),marginBottom:e.spacing(2),marginRight:e.spacing(3)},paperProgress:{padding:e.spacing(3),marginTop:e.spacing(2)},button:{textTransform:"capitalize"}}),{withTheme:!0})(Object(x.a)(ie)))}}]);
//# sourceMappingURL=APIComments.556f8b209379e7d93f7a.bundle.js.map