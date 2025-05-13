
import React from 'react'
import Link from '@docusaurus/Link';
import { Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons';


export default function GuideSection(): JSX.Element {
  return (
    <section >
    <div className="container">
        <div className="guideline">
        <div className='guideline_image'>
                <img src="img/guideline@2x.png" />
            </div>
        <div className="guideline_body">
        <h2 >
                    <b >Diagram Guideline</b><br />     
            </h2>
                <p>The BTP Solution Diagram guidelines has been updated. <br />
                The version is now synchronized with the Fiori Horizon Design System <br />
                and will be continuously improved  with ongoing input received from our architect community.<br />
                Your insights as architects and solution diagram   <br />
                creators make the BTP Solution Diagram Design <br />
                Guidelines a living document that not only describes solutions but inspires new ones.<br />
                We welcome your feedback to enhance the guidelines even further.<br />                
                </p>

               <Link to="/docs/solution_diagr_intro/big_picture/">
                            <Button design="Emphasized" style={{ width: 150 }}>
                            Guideline
                            </Button>
                        </Link>
   
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

