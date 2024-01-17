import React from 'react'
import '../index.css';


//React pdf Viewer

import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { RenderCurrentScaleProps } from '@react-pdf-viewer/zoom';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

function Contentscreen(props) {

  // const zoomPluginInstance = zoomPlugin();
  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  

  function closeQueWindow() {
    document.getElementById("que_paper_screen").classList.add('hidden');

  }

  


  return (
    <>
      <div className='h-[5%] xl:mr-[23%] lg:mr-[23%] md:mr-[10%] sm:mr-[9%] mr-[8%] float-right'><button className='bg-white rounded-full scale-130 hover:scale-150 duration-300' onClick={closeQueWindow}><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply" /></button></div>
      <div>
        <div>

          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div

              className='max-w-[50%] mt-[5%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'
            >

              <Viewer className='' fileUrl={'https://padhai-planet.s3.ap-south-1.amazonaws.com/10/question_paper.pdf'} plugins={[zoomPluginInstance]} />
            </div>
          </Worker>
        </div>
      </div>
    </>
  )

}

export default Contentscreen