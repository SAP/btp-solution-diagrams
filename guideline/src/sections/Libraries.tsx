
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link';

export default function OverviewSection(): JSX.Element {
  return (
    <section >
        <div className="container">
        <div className="libraries">
            <h2>
                <b >
                <HighlightText>What software do I need to work with  <br/> BTP Solution Diagrams? </HighlightText>
               </b>     
            </h2>
            <div className='libraries_image'>
                <img src="img/drawIO.svg" />
            </div>
            <div className="libraries_body">
            <p>Currently, editable BTP Solution Diagram templates <br/> 
            are only provided for draw.io and PowerPoint. We hope to extend the support to other editors in the future,<br/> 
            so please send us any feedback and ideas to help us in this direction.<br/> 
            </p>

            
            <div className="lib_buttons">
          <Link className="button_filled_libs" to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/shape-libraries-and-editable-presets/draw.io">draw.io
          </Link>
          <Link className="button_filled_libs_lucid" to="https://lucid.app/marketplace#/listing/8e327624-ad9a-4ccf-b74c-325bb907a0ef">Lucidchart 
          </Link>
          <Link className="button_clean_libs_ppt" to="https://dam.sap.com/mac/u/a/e7KMGSu.htm?rc=10&includeRelatedAssets=true">Powerpoint 
          </Link><br/>
            </div>
            
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

