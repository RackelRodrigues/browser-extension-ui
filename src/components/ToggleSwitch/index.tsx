import { ToggleSwitchWrpper, Input, Span } from "./style";
import { useState } from "react";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ToggleSwitchWrpper $checked={checked}>
        <Input type="checkbox" onChange={() => setChecked(!checked)} />
        <Span />
      </ToggleSwitchWrpper>
    </>
  );
};

export default ToggleSwitch;
