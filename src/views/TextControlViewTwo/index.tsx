import { observer } from "mobx-react-lite";
import TextControl from "../../components/TextControll";
import { TextControlViewModel } from "../../viewModels/TextControlViewModel";
import React from "react";

export const TextControlViewTwo = observer(() => {
  const VM = React.useMemo(() => new TextControlViewModel(), []);
  const onChangeText = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      VM.setText(event.target.value);
    },
    [VM]
  );

  const buttons = {
    left: [
      {
        title: "Число?",
        onClick: () => VM.numToAlert(),
      },
    ],
    right: [
      {
        title: "Алерт",
        onClick: () => VM.alertText(),
      },
    ],
  };

  return (
    <div>
      <p>Контрол с 1 кнопкой справа и 1 кнопкой слева</p>
      <TextControl
        value={VM.text}
        onChangeValue={onChangeText}
        buttons={buttons}
      />
    </div>
  );
});
