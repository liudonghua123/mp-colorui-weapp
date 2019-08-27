export const updateList = [
  {
    node: '2019-08'
  },
  {
    title: '0.4.5',
    time: '2019-08-28',
    bgColor: 'olive',
    iconColor: 'olive',
    content: [
      '🐞BUG',
      '修复 Input 组件 align 失效问题',
      '修复 Input 组件无法输入问题',
      '修复 Checkbox 组件在 H5 下 onChange 事件参数错误问题'
    ]
  },
  {
    title: '0.4.4',
    time: '2019-08-28',
    bgColor: 'olive',
    iconColor: 'olive',
    content: [
      '🎉FEATURE',
      '组件 Input 新增 titleWidth、align、pattern 属性',
      '🐞BUG',
      '修复 Form 组件校验的一些问题',
      '修复 FormItem required属性，红点显示的位置',
      '取消 Message 组件的阴影',
      '修复 Button 组件 disabled 下仍然有点击效果的问题',
      '修复 Button 组件 disabled 下的颜色一直为白色问题'
    ]
  },
  {
    title: '0.4.2',
    time: '2019-08-27',
    bgColor: 'olive',
    iconColor: 'olive',
    content: [
      'FEATURE',
      '组件 Avatar 可自定义大小',
      '组件 Flex 新增属性 direction，用于控制浮动布局的方向',
      'BUG',
      '修复 MenuList 组件 list 属性下的 disabled 属性声明为必输项问题',
      '修复无法自定义主题颜色问题',
      '修复组件 Form,FormItem 不设置规则直接会出现err问题',
      '修复组件 FormItem 初始化时就进行数据校验问题'
    ]
  },
  {
    title: '0.4.1',
    time: '2019-08-22',
    bgColor: 'olive',
    iconColor: 'olive',
    content: [
      'FEATURE',
      'Icon 组件支持第三方图标'
    ]
  },
  {
    title: '0.4.0',
    time: '2019-08-22',
    bgColor: 'gradualBlue',
    iconColor: 'blue',
    content: [
      'FEATURE',
      '🎉🎉新增 Tip 组件',
      'BUG',
      '修复 Text 组件不换行问题',
      '修复 Area 类型声明错误',
      '修复 Accordion 组件在某些情况下（父级属性 color 为 white）标题颜色为白色问题'
    ]
  },
  {
    title: '0.3.7',
    time: '2019-08-15',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'ADAPTATION',
      '- Select mode=region 模块重构，并且适配 H5，H5 能直接选择地址'
    ]
  },,
  {
    title: '0.3.6',
    time: '2019-08-06',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'ADAPTATION',
      '- Swiper Card 模式 H5 适配',
      '- 祝大家明天七夕快乐~'
    ]
  },
  {
    title: '0.3.5',
    time: '2019-08-04',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'ADAPTATION',
      '- VerticalTab 组件 H5 适配'
    ]
  },
  {
    title: '0.3.4',
    time: '2019-08-03',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'BUG',
      '- 修复 FloatButton 不展开仍然有阴影 bug'
    ]
  },
  {
    node: '2019-07'
  },
  {
    title: '0.3.3',
    time: '2019-07-31',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'BUG',
      '- 修复H5 Switch color 为红色不显示问题',
      '- 修复小程序 Switch 引入报错问题'
    ]
  },
  {
    title: '0.3.2',
    time: '2019-07-31',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'ADAPTATION',
      '- Switch H5 适配'
    ]
  },
  {
    title: '0.3.1',
    time: '2019-07-30',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'ADAPTATION',
      '- Checkbox H5 适配'
    ]
  },
  {
    title: '0.3.0',
    time: '2019-07-28',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 Form, FormItem 组件',
      'API',
      '- 新增内置校验函数',
      'BUG',
      '- 修复 Message 代码不提示问题',
      '- 修复文档引入组件错误',
      '- 修复 Input 组件 H5 下由于 value 绑定而无法输入的 bug（Taro 的 bug）'
    ]
  },
  {
    title: '0.2.7',
    time: '2019-07-23',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 Divider 分割线组件',
      'BUG',
      '- 修复 Timeline H5 适配问题',
      '- 修复 Timeline node 节点展示不正确问题'
    ]
  },
  {
    title: '0.2.6',
    time: '2019-07-19',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'API',
      '- Card 组件新增 shadow 属性',
      'BUG',
      '- 修复 Message 的一些小问题'
    ]
  },
  {
    title: '0.2.5',
    time: '2019-07-18',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'BUG',
      '- 修复 Message 重复提示文字消失问题',
      '- 补全 Message 代码提示'
    ]
  },
  {
    title: '0.2.4',
    time: '2019-07-18',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 Message 消息提示组件',
      'API',
      '- 新增 Animation 组件 duration 属性',
      'BUG',
      '- 修复 FloatButton 组件拖动穿透事件，拖动卡顿问题，提升动画速度，并新增收拢动画'
    ]
  },
  {
    title: '0.2.3',
    time: '2019-07-15',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 FloatButton 浮动按钮组件'
    ]
  },
  {
    title: '0.2.2',
    time: '2019-07-13',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 Accordion 手风琴组件'
    ]
  },
  {
    title: '0.2.1',
    time: '2019-07-11',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'API',
      '- Animation 组件',
      '- - 新增 onAnimationStart、onAnimationEnd 事件',
      '- Tabs 组件',
      '- - 新增 tabs 属性下的 id 属性',
      '- - 新增 touchMove 可滑动属性',
      '- VerticalTab 组件',
      '- - 新增 backTop 属性',
      'BUG',
      '- Card 组件',
      '- - 修复插入 children 内容时的异常提醒（不影响使用）'
    ]
  },
  {
    title: '0.2.0',
    time: '2019-07-09',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 ClVertivalTab, ClVerticalTabCell 组件'
    ]
  },
  {
    title: '0.1.7',
    time: '2019-07-07',
    bgColor: 'grey',
    iconColor: 'grey',
    content: [
      'API',
      '- 新增 titleBar 组件 renderRight 属性',
      'BUG',
      '- 解决 浅色 light-pink 失效问题'
    ]
  },
  {
    title: '0.1.6',
    time: '2019-07-05',
    iconColor: 'grey',
    bgColor: 'grey',
    content: [
      'API',
      '- 新增 MenuList list 下 disabled 属性',
      'BUG',
      '- MenuList 点击失效问题'
    ]
  },
  {
    title: '0.1.5',
    time: '2019-07-05',
    iconColor: 'grey',
    bgColor: 'grey',
    content: [
      'API',
      '- 新增 Radio 组件 type 属性下的 list 属性'
    ]
  },
  {
    title: '0.1.4',
    iconColor: 'grey',
    time: '2019-07-04',
    bgColor: 'grey',
    content: [
      'COMPONENT',
      '- 新增 Animation 动画组件',
      'API',
      '- 修改 Timeline 组件 times 属性下 content 格式(String --> String[])',
      '- 新增 Timeline 组件 times 属性下 title 属性(String)',
      '- 新增 Timeline 组件 times 属性下 node 属性(String)'
    ]
  },
  {
    title: '0.1.3',
    iconColor: 'grey',
    time: '2019-07-02',
    bgColor: 'grey',
    content: [
      'BUG',
      '- 修复 H5 Button 无动效问题',
      '- 修复 H5 Timeline 线条过细问题',
      '- 修复 H5 Swiper 未铺满问题',
      '- 修复 H5 MenuList 图片过大问题'
    ]
  },
  {
    title: '0.1.1',
    iconColor: 'grey',
    time: '2019-07-01',
    bgColor: 'grey',
    content: ['BUG', '- 修复 H5 适配的部分问题', '- 修复 H5 Radio 样式问题']
  },
  {
    node: '2019-06'
  },
  {
    title: '0.1.0',
    iconColor: 'grey',
    time: '2019-06-25',
    bgColor: 'grey',
    content: ['FATURE', '- MP ColorUI 测试版上线']
  }
]

export default {
  updateList
}
