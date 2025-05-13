
import React from 'react'
import Link from '@docusaurus/Link';
import { Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons';

export default function OverviewSection(): JSX.Element {
  return (
    <section >
        <div className="container">
        <div className="libraries">
            
            
            <div className="libraries_body">
            <h2>
                <b >
                <HighlightText>What software do I need to work with  <br/> BTP Solution Diagrams? </HighlightText>
               </b>     
            </h2>
            <p>Currently, editable BTP Solution Diagram templates <br/> 
            are only provided for draw.io and PowerPoint. <br/> 
            We hope to extend the support to other editors in the future,<br/> 
            so please send us any feedback and ideas to help us in this direction.<br/> 
            </p>

            <Link className="button_drawio" to="http://localhost:3000/btp-solution-diagrams/docs/solution_diagr_intro/intro/">
            <Button className="button_drawio2" design="Emphasized" style={{ width: 150 }}>draw.io</Button>
            </Link>

            <Link className="button_lucid" to="https://lucid.app/marketplace#/listing/8e327624-ad9a-4ccf-b74c-325bb907a0ef">
            <Button className="button_lucid2" design="Emphasized" style={{ width: 150 }}>Lucidchart</Button>
            </Link>

            <Link className="button_ppt" to="https://dam.sap.com/mac/u/a/e7KMGSu.htm?rc=10&includeRelatedAssets=true">
            <Button design="Emphasized" style={{ width: 150 }}>Powerpoint</Button>
            </Link>
     
                    </div> 
           
            <div className='libraries_image'>
                <img src="img/drawIO.svg" />
            </div>
            </div>
            <div className="footer_div">
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

