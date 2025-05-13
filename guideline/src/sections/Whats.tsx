
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link';
import { Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/AllIcons';


export default function OverviewSection(): JSX.Element {
  return (
    <section >
        <br />
                
                <div className="container">
                <div className='whats_banner'>        
                
                    <div className="whats_body">
                    <p className="whats_body_p">+++ Recent Updates +++  Draw.io libraries have been updated. Check out where to find our new content <Link to="https://github.com/SAP/btp-solution-diagrams/releases" target="_blank">here </Link>!<br /></p>
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

