import { ToggleSwitchWrapper, Input, Span } from "./style";
import { useState } from "react";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ToggleSwitchWrapper $checked={checked}>
        <Input type="checkbox" onChange={() => setChecked(!checked)} />
        <Span />
      </ToggleSwitchWrapper>
    </>
  );
};

export default ToggleSwitch;
