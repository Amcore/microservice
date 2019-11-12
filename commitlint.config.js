module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'upd', // 更新某功能（不是 feat, 不是 fix）
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'revert', // 还原
        'test', // 添加测试
        'chore' // 构建过程或辅助工具的变动
      ]
    ]
  }
}
