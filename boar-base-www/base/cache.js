var C = {
	DIR : 0,
	APP : 1,
	FLOW : 2,
	COM : 3,
	FILE : 4,
	CORP : 5,
	DEPT : 6,
	FACE : 7,
	LIB : 8,
	PROJ : 9,
	SVC : 10
}
var Cache = {};
Cache.base = {
	user : {
		status : [ '停用', '启用' ],
		type : [ '个人账户', '员工账户', '管理员' ]
	},
	dir : {
		icons : [ null, 'app.png', 'flow.png', 'com.png', 'file.png',
				'corp.png', 'dept.png', 'face.png', 'lib.png', 'proj.png',
				'svc.png' ],
		types : [ 'dir', 'app', 'flow', 'com', 'file', 'corp', 'dept', 'face',
				'lib', 'proj', 'svc' ],
		moves: {
			0: [C.CORP, C.DEPT, C.DIR, C.PROJ],
			1: [C.DIR, C.PROJ],
			2: [C.DIR, C.PROJ],
			3: [C.APP, C.PROJ, C.LIB], 
			4: [C.APP, C.PROJ, C.LIB], 
			5: [C.CORP],
			6: [C.CORP, C.DEPT], 
			7: [C.APP, C.PROJ, C.LIB],
			8: [C.DIR, C.PROJ], 
			9: [C.CORP, C.DEPT, C.DIR, C.PROJ],
			10: [C.APP, C.PROJ, C.LIB]
		}
	},
	corp : {
		status : [ '停用', '启用' ]
	},
	dept : {
		status : [ '停用', '启用' ]
	},
	app : {
		inst : {
			status : [ '已关闭', '运行中' ]
		},
		status : [ '停用', '启用' ],
		type : [ 'JAVA应用', 'JAR包' ]
	},
	lib : {
		status : [ '停用', '启用' ],
		type : [ 'jar包', 'war包' ]
	},
	face : {
		status : [ '停用', '启用' ],
		type : [ '通用接口', '处理接口', '判定接口', '多路分支接口', '输入接口', '输出接口' ]
	},
	svc : {
		status : [ '停用', '启用' ]
	},
	flow : {
		node : [ {
			code : 'arrow',
			name : '箭头'
		}, {
			code : 'subflow',
			name : '子流程'
		}, {
			code : 'process',
			name : '处理节点'
		}, {
			code : 'judge',
			name : '判定节点'
		}, {
			code : 'start',
			name : '开始'
		}, {
			code : 'end',
			name : '结束'
		}, {
			code : 'input',
			name : '输入节点'
		}, {
			code : 'switch',
			name : '多路分支节点'
		}, {
			code : 'output',
			name : '输出节点'
		}, {
			code : 'try',
			name : 'try开始'
		}, {
			code : 'catch',
			name : 'catch'
		}, {
			code : 'finally',
			name : 'finally'
		}, {
			code : 'yrt',
			name : 'try结束'
		}, {
			code : 'beginTx',
			name : '开启事务'
		}, {
			code : 'commitTx',
			name : '提交事务'
		}, {
			code : 'fork',
			name : '并行分支'
		}, {
			code : 'join',
			name : '合并计算'
		}, {
			code : 'suspend',
			name : '挂起节点'
		} ],
		tran : [ '', 'REQUIRED', 'REQUIRES_NEW' ]
	},
	com : {
		status : [ '停用', '启用' ]
	},
	env : [ 'ALL', 'CIT', 'SIT', 'UATA', 'UATB', 'PFM', 'PRE', 'PRD' ],
	inputEnv : [ 'CIT', 'SIT', 'UATA', 'UATB', 'PFM', 'PRE', 'PRD' ],
	depEnv : [ 'CIT', 'SIT', 'UAT', 'PFM', 'PRE', 'PRD' ],
	server : {
		status : [ '已停机', '运行中' ]
	},
	java : {
		type : [ 'java.lang.String', 'float', 'double', 'short', 'int', 'long',
				'java.lang.Float', 'java.lang.Double', 'java.math.BigDecimal',
				'java.lang.Short', 'java.lang.Integer', 'java.lang.Long',
				'java.lang.Object', 'java.util.Map', 'java.util.List' ]
	}
};