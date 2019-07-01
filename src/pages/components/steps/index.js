import Taro from '@tarojs/taro'
import { ClButton, ClCard, ClLayout, ClStep, ClTitleBar } from 'mp-colorui'

const steps = [
  {
    title: '第一步'
  }, {
    title: '第二步'
  }, {
    title: '第三步'
  }, {
    title: '第四步'
  }
]

const customSteps = [
  {
    title: '评审',
    icon: 'edit'
  }, {
    title: '开发',
    icon: 'musicfill'
  }, {
    title: '测试',
    icon: 'settingsfill'
  }, {
    title: '上线',
    icon: 'medalfill'
  }
]
export default class Steps extends Taro.Component {
  config = {
    navigationBarTitleText: 'Steps 步骤条'
  }

  state = {
    stepShape: 0
  }

  next () {
    const stepShape = this.state.stepShape > 3 ? 0 : this.state.stepShape + 1;
    this.setState({
      stepShape
    })
  }

  render () {
    const {stepShape} = this.state;
    return (
      <ClLayout>
        <ClTitleBar title='类型' textColor='blue' type='sub-title' subTitle='type' subTitleColor='shadow' />
        <ClCard>
          <ClStep steps={steps} type='arrow' step={stepShape} activeColor='blue' />
        </ClCard>
        <ClCard>
          <ClStep steps={steps} type='line' step={stepShape} activeColor='brown' />
        </ClCard>
        <ClLayout padding='normal' paddingDirection='around'>
          <ClButton bgColor='light-blue' long onClick={this.next.bind(this)}>下一步</ClButton>
        </ClLayout>

        <ClTitleBar title='自定义图标' textColor='blue' type='sub-title' subTitle='custom' subTitleColor='shadow' />
        <ClCard>
          <ClStep steps={customSteps} type='arrow' stepIconType='custom' step={stepShape} activeColor='blue' />
        </ClCard>
        <ClCard>
          <ClStep steps={customSteps} type='line' stepIconType='custom' step={stepShape} activeColor='brown' />
        </ClCard>
        <ClCard>
          <ClStep steps={customSteps} type='arrow' stepIconType='space' step={stepShape} activeColor='blue' />
        </ClCard>
        <ClLayout padding='normal' paddingDirection='around'>
          <ClButton bgColor='light-blue' long onClick={this.next.bind(this)}>下一步</ClButton>
        </ClLayout>

        <ClTitleBar title='文字位置' textColor='blue' type='sub-title' subTitle='stepTitlePosition' subTitleColor='shadow' />
        <ClCard>
          <ClStep steps={customSteps} stepTitlePosition='bottom' type='line' stepIconType='custom' step={stepShape} activeColor='blue' />
        </ClCard>
        <ClCard>
          <ClStep steps={customSteps} stepTitlePosition='top' type='line' stepIconType='custom' step={stepShape} activeColor='blue' />
        </ClCard>
        <ClLayout padding='normal' paddingDirection='around'>
          <ClButton bgColor='light-blue' long onClick={this.next.bind(this)}>下一步</ClButton>
        </ClLayout>
      </ClLayout>
    )
  }
}