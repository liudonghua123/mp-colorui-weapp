import Taro from '@tarojs/taro'
import { ClLayout, ClTimeline, ClTitleBar } from 'mp-colorui'

export default class Timeline extends Taro.Component {
  config = {
    navigationBarTitleText: 'Timeline 时间轴'
  }
  render () {
    return (
      <ClLayout>
        <ClTitleBar title='时间轴' textColor='blue' type='sub-title' subTitle='timeline' subTitleColor='shadow' />
        <ClTimeline times={[
          {
            content: '我是内容，默认背景'
          }, {
            content: '我是内容，有背景',
            bgColor: 'light-blue'
          }, {
            content: '我是里程碑，我有图标',
            bgColor: 'light-red',
            icon: 'emoji'
          }, {
            content: '我是里程碑，我有图标，我图标有颜色',
            bgColor: 'red',
            icon: 'emoji',
            iconColor: 'red'
          }
        ]}
        />
      </ClLayout>
    )
  }
}
