/* import React from 'react'




const Icon = ({name, color, width, height, backgroundColor, borderRadius,marginTop, align}: any) => {
  return (
    <span className="material-icons" style={{color: color, width: width, height: height, backgroundColor:backgroundColor, borderRadius:borderRadius, marginTop: marginTop, justifyContent:"center"}}>{name}</span>
  );
};

export default Icon; */



const Icon = ({ iconName, size = "24px", color ="white" }: any) => {
  return (
    <span
      className="material-icons"
      style={{ fontSize: size, color:color }}>
      {iconName}
    </span>
  );
};

export default Icon;