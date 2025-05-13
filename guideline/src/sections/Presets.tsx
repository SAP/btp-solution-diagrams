
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
        
        <div className="presets">
        <div className="container">
            <h2>
                            <b >
                            <HighlightText>Latest Presets and Templates</HighlightText>
                           </b>     
                        </h2>
                        
                        
                    
                        <div className="architectures_examples">
                          <div className='presets_sd01'>
                            <img src="img/drawIO.svg" />
                              <div className="presets_sd01_ui5-button">
                             <Link to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits" target="_blank">
                                        <Button design="Emphasized" style={{ width: 75 }}>Open</Button>
                                        </Link>
                              </div>
                              <div className="presets_sd01_text">
                              <h4>
                                <b >
                                  <HighlightText>NEW: Cloud Identity Services Preset</HighlightText>
                                </b>     
                              </h4>
                              </div>
                              </div>
                             
                              
                        
                        
                        <div className='presets_sd02'>
                            <img src="img/drawIO.svg" />
                            
                            <div className="presets_sd02_ui5-button">
                            <Link to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits" target="_blank">
                                        <Button design="Emphasized" style={{ width: 75 }}>Open</Button>
                                        </Link>
                                        </div>
                                        <div className="presets_sd02_text">
                              <h4>
                                <b >
                                  <HighlightText>SAP Build Work Zone</HighlightText>
                                </b>     
                              </h4>
                              </div>
                                        </div>   

                        <div className='presets_sd03'>
                            <img src="img/drawIO.svg" />
                           
                            <div className="presets_sd03_ui5-button">
                            <Link to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits" target="_blank">
                                        <Button design="Emphasized" style={{ width: 75 }}>Open</Button>
                                        </Link>
                                        </div>
                                        <div className="presets_sd03_text">
                              <h4>
                                <b >
                                  <HighlightText>Solution Diagram Legend</HighlightText>
                                </b>     
                              </h4>
                              </div>
                                        </div> 


                        <div className='presets_sd04'>
                            <img src="img/drawIO.svg" />
                           
                            <div className="presets_sd04_ui5-button">
                            <Link to="https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits" target="_blank">
                                        <Button design="Emphasized" style={{ width: 75 }}>Open</Button>
                                        </Link>
                                        </div>
                                        <div className="presets_sd04_text">
                              <h4>
                                <b >
                                  <HighlightText>Another architecture</HighlightText>
                                </b>     
                              </h4>
                              </div>
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

