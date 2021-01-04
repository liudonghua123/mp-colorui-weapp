import React from "react";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "mp-colorui";
import MenuNavigate from "../../../components/menuNavigate";
import { formList } from "../../../constant/menu";

export default function Form() {
  return (
    <View>
      <ClTitleBar
        title="表单"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={formList} name="form" />
      </ClLayout>
    </View>
  );
}

