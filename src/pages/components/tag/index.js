import Taro from '@tarojs/taro'
import { ClCard, ClFlex, ClLayout, ClTag, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../components/generateCode'
import { clickCode, shapeCode, sizeCode, tagsCode } from './code'

const tags = [
  {
    text: '文明',
    color: 'light-blue'
  }, {
    text: '和谐',
    color: 'brown'
  }, {
    text: '民主',
    color: 'brown',
    plain: true
  }
]

export default class Tag extends Taro.Component {
  config = {
    navigationBarTitleText: 'Tag 标签'
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='形状' textColor='black' type='icon' subTitle='shape' />
        <ClCard>
          <ClFlex justify='between'>
            <ClTag tags={tags.slice(0, 1)} shape='radius' />
            <ClTag tags={tags.slice(0, 1)} shape='normal' />
            <ClTag tags={tags.slice(0, 1)} shape='round' />
          </ClFlex>
        </ClCard>
        <GenerateCode code={shapeCode} />

        <ClTitleBar title='大小' textColor='black' type='icon' subTitle='size' />
        <ClCard>
          <ClFlex justify='around'>
            <ClTag tags={tags.slice(0, 1)} shape='radius' size='small' />
            <ClTag tags={tags.slice(0, 1)} shape='radius' size='normal' />
          </ClFlex>
        </ClCard>
        <GenerateCode code={sizeCode} />

        <ClTitleBar title='Tag 数组' textColor='black' type='icon' subTitle='array' />
        <ClCard>
          <ClLayout padding='normal' paddingDirection='bottom'>
            <ClFlex justify='center'>
              <ClTag tags={tags} shape='radius' size='normal' />
            </ClFlex>
          </ClLayout>
          <ClLayout padding='normal' paddingDirection='bottom'>
            <ClFlex justify='center'>
              <ClTag tags={tags} shape='normal' size='normal' />
            </ClFlex>
          </ClLayout>
          <ClFlex justify='center'>
            <ClTag tags={tags} shape='round' size='normal' />
          </ClFlex>
        </ClCard>
        <GenerateCode code={tagsCode} />

        <ClTitleBar title='点击事件' textColor='black' type='icon' subTitle='array' />
        <ClCard>
          <ClFlex justify='center' align='center'>
            <ClTag
              tags={tags}
              shape='round'
              size='normal'
              onClick={(index) => {
                Taro.showToast({
                  title: tags[index].text,
                  icon: 'none'
                })
              }}
            />
          </ClFlex>
        </ClCard>
        <GenerateCode code={clickCode} />
      </ClLayout>
    )
  }
}
