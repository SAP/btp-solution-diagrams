
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link';
import { Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons';


export default function HeroSection(): JSX.Element {
  return (
    <section >
       <br />
        <div className='hero_banner'>        
        <div className="container">
        
        <div className="welcome">
            <h1>
                <b className="header_text" >
                   BTP Solution Diagram <br /> Repository
               </b>     
            </h1>
            <div className="header_body">
                <p className="header_body_p">Welcome to the single source of truth for BTP Architects.<br />
                The repository includes latest updates and ready-to-use templates<br />to develop high quality diagrams of architectural landscapes.
                 </p>
            </div> 
            <Link to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits" target="_blank">
            <Button style={{ width: 150 }}>Get Starter Kit</Button>
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



