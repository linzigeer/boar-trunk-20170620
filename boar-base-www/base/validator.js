$.extend(App.validator, {
	'dir.code': {
		name: '目录英文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'en_az-09': 0
		}
	},
	'dir.name': {
		name: '目录中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'svc.code': {
		name: '服务英文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'en_az-09 .': 0
		}
	},
	'svc.name': {
		name: '服务中文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'svc.version': {
		name: '服务中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'svc.face': {
		name: '服务接口',
		check: {
			'empty': 0
		}
	},
	'svc.env': {
		name: '服务器环境',
		check: {
			'empty': 0
		}
	},
	'svc.ip': {
		name: '服务器Ip',
		check: {
			'empty': 0,
			'ip': 0
		}
	},
	'svc.group': {
		name: '服务器环境配置',
		check: {
			'empty': 0
		}
	},
	'svc.memo': {
		name: '服务备注',
		check: {
			'empty': 0
		}
	},
	'lib.name': {
		name: '库包中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09 .': 0
		}
	},
	'lib.code': {
		name: '库包英文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'en_az-09 .': 0
		}
	},
	'lib.level': {
		name: '库包优先级',
		check: {
			'empty': 0
		}
	},
	'lib.ver': {
		name: '库包版本号',
		check: {
			'empty': 0
		}
	},
	'lib.memo': {
		name: '库包MEMO定义',
		check: {
			'empty': 0
		}
	},
	'lib.type': {
		name: '库包type定义',
		check: {
			'empty': 0
		}
	},
	'lib.path': {
		name: '库路径',
		check: {
			'empty': 0
		}
	},
	'lib.pom': {
		name: '库POM定义',
		check: {
			'empty': 0
		}
	},
	'proj.code': {
		name: '系统英文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 32 },
			'en_az-09 .': 0
		}
	},
	'proj.name': {
		name: '系统中文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 32 },
			'cn_az-09 .': 0
		}
	},
	'app.code': {
		name: '应用英文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'en_az-09 .': 0
		}
	},
	'app.name': {
		name: '应用中文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'app.version': {
		name: '应用版本号',
		check: {
			'empty': 0
		}
	},
	'app.sourceRoot': {
		name: '应用源码根路径',
		check: {
			'empty': 0
		}
	},
	'app.sourcePath': {
		name: '应用源码相对路径',
		check: {
			'empty': 0
		}
	},
	'app.deployPath': {
		name: '应用部署路径',
		check: {
			'empty': 0
		}
	},
	'app.compile': {
		name: '打包构建',
		check: {
			'empty': 0
		}
	},
	'app.deploy': {
		name: '部署构建',
		check: {
			'empty': 0
		}
	},
	'app.pom': {
		name: '应用POM定义',
		check: {
			'empty': 0
		}
	},
	'app.memo': {
		name: '应用MEMO定义',
		check: {
			'empty': 0
		}
	},
	'app.type': {
		name: '应用TYPE定义',
		check: {
			'empty': 0
		}
	},
	'app.level': {
		name: '应用优先级',
		check: {
			'empty': 0
		}
	},
	'app.inst.path': {
		name: '应用优先级',
		check: {
			'empty': 0
		}
	},
	'app.inst.user': {
		name: '应用优先级',
		check: {
			'empty': 0
		}
	},
	'app.inst.port': {
		name: '应用优先级',
		check: {
			'empty': 0
		}
	},
	'face.code': {
		name: '接口英文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'en_az-09': 0
		}
	},
	'face.name': {
		name: '接口中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'face.ver': {
		name: '接口版本',
		check: {
			'empty': 0,
		}
	},
	'face.entry': {
		name: '接口方法',
		check: {
			'empty': 0,
			'len1': { min: 1, max: 32 },
			'cn_az-09': 0
		}
	},
	'server.code': {
		name: '服务器编号',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'en_az-09': 0
		}
	},
	'server.name': {
		name: '服务器中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'server.ip': {
		name: '服务器IP',
		check: {
			'empty': 0,
			'ip': 0
		}
	},
	'inst.serverId': {
		name: '服务器',
		check: {
			'empty': 0
		}
	},
	'inst.ip': {
		name: '实例IP',
		check: {
			'empty': 0,
			'ip': 0
		}
	},
	'dep.name': {
		name: '计划中文名',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'dep.code': {
		name: '计划编号',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'dep.time': {
		name: '实例time',
		check: {
			'empty': 0
		}
	},
	'dep.catalog': {
		name: '实例catalog',
		check: {
			'empty': 0
		}
	},
	'dep.memo': {
		name: '实例memo',
		check: {
			'empty': 0
		}
	},
	'source.code': {
		name: '根路径编码',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'source.path': {
		name: '根路径',
		check: {
			'empty': 0,
			'len1': { min: 2, max: 64 },
			'cn_az-09 .': 0
		}
	},
	'com.code': {
		name: '组件中文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'com.name': {
		name: '组件英文名',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 32 },
			'cn_az-09': 0
		}
	},
	'dep.sourceParent':{
		name: '源码根路径',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 64 },
			'cn_az-09': 0
		}
	},
	'dep.sourceCode':{
		name: '应用源码根路径',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 64 },
			'cn_az-09': 0
		}
	},
	'dep.sourcePath':{
		name: '源码相对路径',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 64 },
			'cn_az-09': 0
		}
	},
	'dep.exportCode':{
		name: '导出路径',
		check: {
			'empty': 0,
			'len1': { min: 4, max: 64 },
			'cn_az-09': 0
		}
	}
});