import Taro from "@tarojs/taro";
import { ClCard, ClCheckbox, ClLayout, ClTitleBar } from "mp-colorui";
import GenerateCode from "../../../components/generateCode";
import { colorCode, positionCode, shapeCode, typeCode } from "./code";

const checkboxGroup = [
  {
    checked: false,
    key: "凯尔",
    value: "ker"
  },
  {
    checked: true,
    key: "莫甘娜",
    value: "mgn"
  }
];

export default function Checkbox() {
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClCheckbox type="normal" checkboxGroup={checkboxGroup} />
      </ClCard>
      <ClCard>
        <ClCheckbox title="选一个" type="form" checkboxGroup={checkboxGroup} />
      </ClCard>
      <GenerateCode code={typeCode} />

      <ClTitleBar
        title="方向"
        textColor="black"
        type="icon"
        subTitle="direction"
      />
      <ClCard>
        <ClCheckbox
          title="选一个"
          type="form"
          checkboxGroup={checkboxGroup}
          direction="vertical"
        />
      </ClCard>
      <ClCard>
        <ClCheckbox
          title="选一个"
          type="form"
          checkboxGroup={checkboxGroup}
          direction="horizontal"
        />
      </ClCard>
      <GenerateCode code={positionCode} />

      <ClTitleBar title="颜色" textColor="black" type="icon" subTitle="color" />
      <ClCard>
        <ClCheckbox
          type="normal"
          checkboxGroup={checkboxGroup}
          color="red"
          direction="horizontal"
        />
      </ClCard>
      <ClCard>
        <ClCheckbox
          title="选一个"
          type="form"
          checkboxGroup={checkboxGroup}
          color="yellow"
          direction="horizontal"
        />
      </ClCard>
      <GenerateCode code={colorCode} />

      <ClTitleBar title="形状" textColor="black" type="icon" subTitle="shape" />
      <ClCard>
        <ClCheckbox
          shape="normal"
          type="normal"
          checkboxGroup={checkboxGroup}
          color="red"
          direction="horizontal"
        />
      </ClCard>
      <ClCard>
        <ClCheckbox
          shape="round"
          title="选一个"
          type="form"
          checkboxGroup={checkboxGroup}
          color="yellow"
          direction="horizontal"
        />
      </ClCard>
      <GenerateCode code={shapeCode} />
    </ClLayout>
  );
}

Checkbox.config = {
  navigationBarTitleText: "Checkbox 多选按钮"
};
