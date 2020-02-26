import React from "react";
import LogProps from "../LogProps/LogProps";

const ForwardRefs = React.forwardRef((props, ref) => (
   <input type="text" ref={ref} />
   )
)

export default ForwardRefs;
