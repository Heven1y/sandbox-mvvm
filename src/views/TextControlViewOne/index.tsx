import { observer } from "mobx-react-lite";
import TextControl from "../../components/TextControll";
import { TextControlViewModel } from "../../viewModels/TextControlViewModel";
import React from "react";

export const TextControlViewOne = observer(() => {
  const VM = React.useMemo(() => new TextControlViewModel(), []);
  const onChangeText = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      VM.setText(event.target.value);
    },
    [VM]
  );

  const buttons = {
    left: [],
    right: [
      {
        title: "Очистить",
        onClick: () => VM.clearText(),
      },
      {
        title: "Hello world!",
        onClick: () => VM.replaceHelloWorld(),
      },
    ],
  };

  return (
    <div>
      <p>Контрол с 2 кнопками справа</p>
      <TextControl
        value={VM.text}
        onChangeValue={onChangeText}
        buttons={buttons}
      />
    </div>
  );
});
