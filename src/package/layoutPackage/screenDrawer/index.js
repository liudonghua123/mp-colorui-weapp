import React, { useState } from "react";
import { ClButton, ClCard, ClLayout, ClScreenDrawer } from "mp-colorui";
import { View } from "@tarojs/components";

export default function ScreenDrawer() {
  const [show, setShow] = useState(false);
  const mainPage = (
    <View>
      <ClCard>
        <ClButton
          shape="round"
          long
          onClick={() => {
            setShow(true);
          }}
        >
          点我打开全屏抽屉
        </ClButton>
      </ClCard>
    </View>
  );
  const mainContent = (
    <ClLayout>
      <ClCard>我是内容</ClCard>
    </ClLayout>
  );
  return (
    <ClScreenDrawer
      show={show}
      renderPage={mainPage}
      renderDrawer={mainContent}
      onHide={() => {
        setShow(false);
      }}
    />
  );
}

