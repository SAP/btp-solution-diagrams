
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
        <div className="container">
        <div className="overview">
            <h2>
                <b >
                <HighlightText>What is a BTP Solution Diagram?</HighlightText>
               </b>     
            </h2>
            <div className='overview_image'>
                <img src="img/btp_sol@2x.png" />
            </div>
            <div className="overview_body">
            <p>
            A BTP solution diagram illustrates the architecture and elements of<br/>
            a solution developed using SAP Business Technology Platform. <br/>
            It demonstrates how various services and technologies within the<br/>
            platform are employed to meet distinct business needs. <br/>
            Each BTP solution diagram offers a visual outline of the <br/>
            total solution configuration and its operational flow. 
            </p>
            <Link to="/docs/btp_guideline/examples/">
                            <Button design="Emphasized" style={{ width: 150 }}>
                            Examples
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

