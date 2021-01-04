import React from "react";
import { ClVerticalTab, ClVerticalTabCell } from "mp-colorui";
import { View } from "@tarojs/components";

export default function VerticalTab() {
  const tabs = [...Array(50)].map((key, index) => ({
    name: "tab-" + index,
    id: "id-" + index
  }));
  return (
    <View>
      <ClVerticalTab tabs={tabs} height="full">
        <View>
          {tabs.map(item => (
            <View id={item.id} key={item.name}>
              <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
            </View>
          ))}
        </View>
      </ClVerticalTab>
    </View>
  );
}

