
import React from 'react'
import Link from '@docusaurus/Link';
import { Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons';

export default function OverviewSection(): JSX.Element {
  return (
    <section >
         <div className="container">

        
         <div className="icons_body">
         <h2 className="icons_header">
                        <b >
                        <HighlightText>Icons</HighlightText>
                       </b>     
                    </h2>
        <div className="icons">
       
            
            <div className='icons_image_btp'>
            <Link className="button_sapicons" to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/shape-libraries-and-editable-presets/draw.io/20-02-99-sap-btp-service-icons-all">
            <Button className="button_sapicons_ui5" design="Emphasized" style={{ width: 150 }}>Get it !</Button>
            </Link>
            </div>
            
            
            <div className='icons_image_generic'>
            <Link className="button_generic" to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/shape-libraries-and-editable-presets/draw.io/20-03-generic-icons">
            <Button className="button_generic_ui5" design="Emphasized" style={{ width: 150 }}>Get it !</Button>
            </Link>
            </div>
           
            </div>
            </div>
            </div>
            
            
    </section>
  )
}
export function HighlightText(props) {
    return (
      <strong className="bolder relative z-10 box-content before:absolute before:bottom-0 before:z-[-1] before:h-3 before:w-full before:bg-[#95DAFF50] before:duration-300 before:content-[''] hover:before:w-0">
        {props.children}
      </strong>
    )
  }

