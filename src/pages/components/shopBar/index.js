import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClShopBar, ClTitleBar } from 'mp-colorui'

const tabs = [
  {
    icon: 'emoji'
  }, {
    icon: 'shop'
  }
]

const buttons = [
  {
    text: '放入购物车',
    bgColor: 'orange'
  }, {
    text: '立即购买'
  }
]

const tabsBorder = [
  {
    icon: 'emoji',
    badge: false
  }, {
    icon: 'shop',
    badge: 99
  }, {
    icon: 'newfill'
  }
]

const tabsBorderButton = [
  {
    text: '立即购买',
    bgColor: 'light-blue'
  }
]

const bottom = [
  {
    text: '固定底部',
    bgColor: 'light-blue'
  }
]

export default class ShopBar extends Taro.Component {
  config = {
    navigationBarTitleText: 'ShopBar 购物栏'
  }

  clickIcon (index) {
    Taro.showToast({
      title: `您点击了第${index + 1}个图标`,
      icon: 'none'
    })
  }

  clickButton (index) {
    Taro.showToast({
      title: `您点击了第${index + 1}个按钮`,
      icon: 'none'
    })
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='背景色' textColor='blue' subTitleColor='shadow' type='icon' subTitle='bgColor' />
        <ClCard>
          <ClShopBar onClickTab={(index) => {this.clickIcon(index)}}
            onClickButton={(index) => {this.clickButton(index)}} bgColor='gray' tabs={tabs} buttons={buttons}
          />
        </ClCard>
        <ClCard>
          <ClShopBar onClickTab={(index) => {this.clickIcon(index)}}
            onClickButton={(index) => {this.clickButton(index)}} bgColor='light-blue' tabs={tabs}
            buttons={buttons}
          />
        </ClCard>
        <ClCard>
          <ClShopBar onClickTab={(index) => {this.clickIcon(index)}}
            onClickButton={(index) => {this.clickButton(index)}} bgColor='gradualGreen' tabs={tabs}
            buttons={buttons}
          />
        </ClCard>

        <ClTitleBar title='分割线' textColor='blue' subTitleColor='shadow' type='icon' subTitle='border' />
        <ClCard>
          <ClShopBar onClickTab={(index) => {this.clickIcon(index)}}
            onClickButton={(index) => {this.clickButton(index)}} bgColor='gray' tabs={tabs} border
            buttons={buttons}
          />
        </ClCard>

        <ClTitleBar title='角标' textColor='blue' subTitleColor='shadow' type='icon' subTitle='badge' />
        <ClCard>
          <ClShopBar onClickTab={(index) => {this.clickIcon(index)}}
            onClickButton={(index) => {this.clickButton(index)}} bgColor='gray' tabs={tabsBorder} border
            buttons={tabsBorderButton}
          />
        </ClCard>

        <ClShopBar onClickTab={(index) => {this.clickIcon(index)}} onClickButton={(index) => {this.clickButton(index)}}
          bgColor='gray' fix tabs={tabsBorder} border buttons={bottom}
        />
      </ClLayout>
    )
  }
}
