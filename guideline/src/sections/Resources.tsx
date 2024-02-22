
import React from 'react'
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'


export default function HeroSection(): JSX.Element {
  return (
    <section >
    <div className="section">
<h2>Further Resources</h2>
<p>...</p>
<div className="template-preview">Template draw.io Preview</div>
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

