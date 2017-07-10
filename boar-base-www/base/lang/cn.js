var Msg = { status: 1 };
Msg.common = {
		param : '参数',
		app : '应用',
		deploy : '部署',
		undeploy : '部署移除',
		copy : '拷贝',
		move : '移动',
		start : '启动',
		stop : '停用',
		project : '项目',
		plan : '计划',
		'export' : '导出',
		'import' : '导入',
		read : '读取',
		flow : '流程',
		user : '用户',
		pwd : '密码',
		build : '构建',
		update : '更新',
		publish : '发布',
		status : "Status",
		code : "Code",
		name : "Name",
		type : "Type",
		desc : "Description",
		date : "Date",
		startDate : "Start date",
		endDate : "End date",
		ok : "Confirm",
		submit : "Submit",
		yes : "Yes",
		no : "No",
		save : "Save",
		next : "Next",
		add : "Add",
		del : "Delete",
		edit : "Edit",
		cancel : "Cancel",
		close : "Close",
		view : "View",
		keyword : "Keyword",
		find : "Find",
		start : "Start",
		query : "Query",
		action : "Actions",
		year: 'Year',
		month : "Month",
		day : "Day",
		loading : "Loading...",
		load : "Load",
		send : "Send",
		weekDay : [ "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ],
		months:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
		title : "Title",
		skip : "Skip",
		skipAll : "Skip All",
		saved : "Saved",
		prev : "Previous",
		agree : "Agree",
		url : "Url",
		content : "Content",
		saving: 'saving',
		lowDel: 'delete',
		lowAdd: 'add',
		lowSave: "save",
		lowChange:"change",
		count:"Count",
		stop: "Stop",
		key: "Key"
};
Msg.user = {
	info : '用户信息'
};
Msg.invitation = {
	info : '邀请信息'
};
Msg.verify = {
	code : '验证码'
};
Msg.build = {
	info : '构建信息'	
};
Msg.pack = {
	record : '包记录',
	param : '包参数',
	'package' : '打包'
};
Msg.app = {
	lib : '应用或库包信息',
	start : '应用启动',
	stop : '应用停止',
	query : '查询'
};
Msg.flow = {
	diagram : '流程预览图片',
	save : '保存流程图',
	load : '流程图加载',
	'delete' : '流程图删除',
	start : '流程启动',
	stop : '流程停止',
	url : 'URL',
	monitor : {
		list : '获取流程监听列表',
		total : '获取流程监听数量',
		tree : '获取流程监听树'
	}
};
Msg.login = {
	timeout: '会话超时，请重新登录',
	code : "用户名",
	password : "密码",
	input : "请输入用户名",
	title : "用户登录",
	submit : "登陆",
	error : "用户名或密码错误.",
	lp : "请输入密码.",
	verifyCodeError:'验证码错误.',
	verifyCodeEmpty:'请输入验证码.',
	changeVerifyCode:'更换验证码.'
};
Msg.pager = {
	page : "{0}, {1}/{2}",
	go : "转到",
	needPageno : "请输入合法的页码.",
	total: '总页数:'
};
Msg.confirm = {
	message : "你确定要操作 {0}?",
	start : "是否现在开始 {0} ?",
	alsoCreate : "是否同时创建 {0} ?"
};
Msg.info = {
	waiting : "{0}，please wait...",
	select : "Please select the record you want to {0}!",
	success : "{0} success!",
	fail : "{0} failed!",
	error : "{0} failed! Error: {1}",
	notExist :"{0} is invalid"
};
Msg.error = {
	noResponse : "Server no response.",
	unknown : "{0} 失败, 未知异常",
	inUse : "{0} failed! {1} has already been used.",
	needParam : "{0} failed! Missing parameter: {1}.",
	invalid: "{0} 不合法",
	notFound: "{0} 不存在",
	unauth: '未授权',
	duplicated: "添加信息重复"
};
Msg.validation = {
	required1 : '必填项',
	minLen1: '至少{1}位',
	maxLen1: '最多{1}位',
	len1: '长度应为{1}~{2}位',
	format1: "只允许{1}",
	url1: '必须是一个合法的URL',
	required2 : '{0}不能为空',
	minLen2: '{0}至少{1}位',
	maxLen2: '{0}最多{1}位',
	len2: '{0}长度应为{1}~{2}位',
	format2: "{0}只允许{1}",
	url1: '必须是一个合法的URL',
	pwd2: '两次输入的密码不一 致',
	exist: "{0}已存在!"
};
Msg.picker = {
	needed : "请至少选择一个 {0}"
};
Msg.region = {
	picker: 'Region picker',
	region: 'Region',
	allRegions: 'All Regions',
	add: 'Add Region',
	edit: 'Edit Region'
};
Msg.proj = {
	notFound: '找不到所属项目'
};
Msg.flowError = {
	noResponse : "服务器无应答.",
	noImpl : ' "实现" 未填写',
	noId : '节点id异常',
	noP : '节点连接状态异常',
	noCode : '"ID" 未填写',
	noName : '"名称" 未填写',
	noFaceId : '"接口" 未选择',
	moreEnd : '结束节点还有后继',
	aNumWrong : '箭头数量异常',
	noY : '成功分支异常',
	noN : '失败分支异常'
	
};