import React from 'react'
import '../index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function Contentscreen(props) {

  function closeQueWindow() {
    document.getElementById("que_paper_screen").classList.add('hidden');
  }

  return (
    <>
      <div className='w-100% h-[5%] xl:mr-[23%] lg:mr-[23%] md:mr-[10%] sm:mr-[9%] mr-[8%] float-right'><button className='bg-white rounded-full scale-130 hover:scale-150 duration-300' onClick={closeQueWindow}><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply"/></button></div>
      {/* <div className='bg-orange-400 w-[50%] mt-[5%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'> */}
      <div>
        {/* <div><object className='xl:w-[50%] xl:h-[1250px] lg:w-[45%] lg:h-[1000px] md:w-[75%] md:h-[900px] sm:w-[75%] sm:h-[900px] w-[80%] h-[600px] inset-0 m-auto xl:mt-[5%] lg:mt-[5%] md:mt-[5%] sm:mt-[5%] mt-[10%] z-20' src={props.q_data+"#toolbar=0"} /> */}
        {/* </div> */}
        <div>
        <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px', 'width': '50%' }}>
         
         <Inject services={[ Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView,TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
        </div>
      </div>
    </>
  )
}

export default Contentscreen
