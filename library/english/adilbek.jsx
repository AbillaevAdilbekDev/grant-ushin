import React from 'react';
import '../index.css'
const Container = ({ children }) => {

  return (
    <div className='container'>
      {children}
    </div>
  );
};
const LinkButton = ({children,href,color}) => {
  return(
    <a href={href} className={`btn btn-${color}`}>
      {children}
    </a>
  )
}
const H1 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h1 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h1>
  )
}
const H2 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h2 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h2>
  )
}
const H3 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h3 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h3>
  )
}
const H4 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h4 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h4>
  )
}
const H5 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h5 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h5>
  )
}
const H6 = ({children,color,fontSize,textCenter}) => {
  const isTextCenter = textCenter ? 'text-center':""
  return (
    <h6 className={`text-${color} fs-${fontSize} ${isTextCenter}`}>
      {children}
    </h6>
  )
}
const Button = ({children,color,onClick}) => {
  return (
    <button className={`btn btn-${color}`} onClick={()=> onClick()}>
      {children}
    </button>
  )
}
export {Container,LinkButton,H1,H2,H3,H4,H5,H6,Button};