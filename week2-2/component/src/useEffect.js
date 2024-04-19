import React from "react";

const One = () => {
useEffect(() => {
    if(is_loaded){
      window.alert("hi! im ready! ٩(๑•̀o•́๑)و");
    }
    return () => {
      window.alert("bye!");
    }
  }, [is_loaded]);
}

export default One;