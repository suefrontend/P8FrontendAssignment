import { useState } from "react";
import Radio from "./Radio";

function RadioList({ label }) {
  const [selected, setSelected] = useState("20");

  return (
    <div className="flex flex-col gap-3">
      <span className="calculator__label">{label}</span>
      <Radio
        value="20"
        selected={selected}
        text="20 Years"
        onChange={setSelected}
      />
      <Radio
        value="25"
        selected={selected}
        text="25 Years"
        onChange={setSelected}
      />
      <Radio
        value="30"
        selected={selected}
        text="30 Years"
        onChange={setSelected}
      />
    </div>
  );
}

export default RadioList;
