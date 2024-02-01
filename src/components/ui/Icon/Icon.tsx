import React from 'react'




const Icon = ({name, color, width, height, backgroundColor, borderRadius,marginTop, align}: any) => {
  return (
    <span className="material-icons" style={{color: color, width: width, height: height, backgroundColor:backgroundColor, borderRadius:borderRadius, marginTop: marginTop, justifyContent:align}}>{name}</span>
  );
};

export default Icon;