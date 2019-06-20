import Taro, { useState } from '@tarojs/taro'
import { ClCard, ClLayout, ClLoading, ClSwitch, ClTitleBar } from 'mp-colorui'

export default function Loading () {
  const [barLoading, setBarLoading] = useState(false)
  const [lineLoading, setLineLoading] = useState(false)
  const [lineLoadingErr, setLineLoadingErr] = useState(false)
  const [lineLoadingEnd, setLineLoadingEnd] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  return (
    <ClLayout>
      <ClTitleBar title='bar加载' textColor='blue' type='sub-title' subTitle='bar' subTitleColor='shadow' />
      <ClCard>
        <ClSwitch title='bar加载' type='form' onChange={(falg) => {
          setBarLoading(falg)
        }}
        />
      </ClCard>
      <ClLoading type='bar' show={barLoading} />

      <ClTitleBar title='line加载' textColor='blue' type='sub-title' subTitle='line' subTitleColor='shadow' />
      <ClLoading type='line' show={lineLoading} loadingError={lineLoadingErr} noMore={lineLoadingEnd} />

      <ClCard>
        <ClSwitch title='line加载' type='form' checked={lineLoading} onChange={(flag) => {
          setLineLoading(flag)
          if (!flag) {
            setLineLoadingErr(false)
            setLineLoadingEnd(false)
          }
        }}
        />
        <ClSwitch title='line加载出错' type='form' checked={lineLoadingErr} onChange={(flag) => {
          if (flag) setLineLoadingEnd(false)
          setLineLoadingErr(flag)
        }}
        />
        <ClSwitch title='line加载没有更多了' type='form' checked={lineLoadingEnd} onChange={(flag) => {
          if (flag) setLineLoadingErr(false)
          setLineLoadingEnd(flag)
        }}
        />
      </ClCard>

      <ClTitleBar title='modal加载' textColor='blue' type='sub-title' subTitle='modal' subTitleColor='shadow' />
      <ClLoading type='modal'  show={modalLoading} imgUrl='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif' />
      <ClCard>
        <ClSwitch title='modal加载' type='form' checked={modalLoading} onChange={(flag) => {
          setModalLoading(flag)
          setTimeout(() => {
            setModalLoading(false)
          }, 3000)
        }}
        />
      </ClCard>

      <ClTitleBar title='image加载' textColor='blue' type='sub-title' subTitle='image' subTitleColor='shadow' />
      <ClLoading type='image'  show={imageLoading} imgUrl='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif' />
      <ClCard>
        <ClSwitch title='image加载' type='form' checked={imageLoading} onChange={(flag) => {
          setImageLoading(flag)
          setTimeout(() => {
            setImageLoading(false)
          }, 3000)
        }}
        />
      </ClCard>

    </ClLayout>
  )
}

Loading.config = {
  navigationBarTitleText: 'Loading 加载'
}
