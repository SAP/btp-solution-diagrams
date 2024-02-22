
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link';


export default function GuideSection(): JSX.Element {
  return (
    <section >
    <div className="container">
        <div className="guideline">
           
        
        <div className="guideline_body">
        <h2 >
                    <b >Diagram Guideline</b><br />     
            </h2>
                <p>The BTP Solution Diagram guidelines has been updated. <br />
                The 2023 version is now synchronized with the Fiori Horizon Design System <br />
                and will be continuously improved  with ongoing input received from our architect community. Your insights as architects and solution diagram   <br />
                creators make the BTP Solution Diagram Design <br />
                Guidelines a living document that not only describes solutions but inspires new ones. We welcome your feedback to enhance the guidelines even further.<br />
                  <br />
                  
                </p>

                
                <b >
                Guideline Version 1.1<br />
               </b> 
               <br />   
               
            <div className="guideline_buttons">
            <Link
            className="button_filled_guideline"
            to="/docs/solution_diagr_intro/intro/">Open Guideline
          </Link>
            <a href="https://d.dam.sap.com/a/UbBJrVh/SAP-BTP-solution-diagram-design-guideline-v1-public.pdf?rc=10" target="_blank" className="button_clean_guideline" download>Download PDF</a>
            </div>
            <div className='guideline_image'>
                <img src="img/guideline@2x.png" />
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

