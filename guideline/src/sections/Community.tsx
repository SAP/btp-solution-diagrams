
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link';


export default function CommunitySection(): JSX.Element {
  return (
    <section >
    <div className="container">
    <div className="community">
            
            <div className="community_body">
            <h2>
                <b >
                Connect with the Community
               </b>     
            </h2>
            <p>
            Are you an architect, or someone in a similar role, with experience <br />
            creating solution diagrams? Would you like to dive deeper into the subject<br /> 
            or get involved enhancing the BTP Solution Diagram Design Guideline? <br /> 
            Why not share your expertise with us and enjoy the opportunity to interact<br /> 
            with a wider network of architects and like-minded individuals across<br /> 
            numerous platforms? Here's how you can initiate and build on these connections.</p>
                    <b >Visit the communities to help us help each other!</b><br /> 
                    <br />     
            
            <div className="community_buttons">
            
            <Link className="button_clean_community" to="https://community.sap.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&q=SAP%20BTP%20Solution%20Diagrams">Community  
            </Link>
            
            </div>
                <div className='community_image'>
                <img src="img/community.svg" />
                </div>
            </div> 
            
            </div>
            </div>
            <div className="footer_div">
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

