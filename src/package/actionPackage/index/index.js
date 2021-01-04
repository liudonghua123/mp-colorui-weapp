import Taro from "@tarojs/taro";
import React from "react";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "mp-colorui";
import MenuNavigate from "../../../components/menuNavigate";
import { actionList } from "../../../constant/menu";

export default function Action() {
  return (
    <View>
      <ClTitleBar
        title="操作反馈"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={actionList} name="action" />
      </ClLayout>
    </View>
  );
}


