import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { BreadcrumbPages, BreadcrumbProfile } from '../Components/Breadcrumbs';
import Joiningoptions from '../Components/Joiningoptions';
import Exploremore from '../Components/Exploremore';
import { useState, useEffect } from 'react'
import Loginpage from '../Components/Loginpage.js';
import Profilepage from '../Components/Profilepage.js';
import Contentscreen from '../Components/Contentscreen.js';

function HindiFullpapers() {

  //For fetching data
  const API_hisory_paper = 'https://padhaiplanet-backend.onrender.com/v1/get-question?subject=english&medium=a&standard=10 ';

  //API data hooks
  const [que_data, setQue_data] = useState([]);


  const [data, setData] = useState([])

  //Assigning 
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.data);
    } catch (e) {
      console.log(e)
    }
  }

  const data_imp = []
  for (var j = 0; j < data['length']; j++) {
    data_imp.push(data[j])
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    topFunction();
    fetchdata(API_hisory_paper);
  }, [])


  function HandleClick(login_state, paper_no, year) {
    if (login_state === "not_logged_in") {
      document.getElementById("forms_window").classList.remove('hidden');
      document.getElementById("forms_window").classList.add('opacity-90');
    }
    else {
      document.getElementById("que_paper_screen").classList.remove('hidden');
      setQue_data(data_imp[year].papers[paper_no].question_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }


  return (

    <div>
      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>

      <div className="relative z-0">
        <div>
          <div id="home">
            <BreadcrumbPages sub={'Hindi(Full)'} />
          </div>
          <div id="profile" className="hidden">
            <BreadcrumbProfile />
          </div>
        </div>

        <div id='parent' className='relative'>
          <div id='go' className=' top-0 w-full mt-[50px]'>
            <div className='w-[50%] ml-[25%] pb-[5%] pr-[10%]'>
              <h1 className='ml-[50%] text-3xl font-bold text-white'>Hindi(Full)</h1>
              <div className='w-[50%] ml-[15%]'>

                {data_imp.map((item, index) =>
                  <div className='w-[50%] ml-[-5%] mt-[10%]'>
                    <div className='w-[100px] h-[50px] rounded-lg text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>{item.year}</div>
                    <div className='flex'>
                      {item.papers.map((item1, index1) =>
                        <div className='flex ml-[15%]'>
                          <div className='block'>
                            <button onClick={event => HandleClick("logged_in", index1, index)} type='submit' className='rounded-2xl w-[300px] text-white h-[200px] text-lg text-center font-semibold mt-[50px] bg-gradient-to-r from-[#054569] to-[#5591A9]' key={index}>{item.papers[index1]['name']} Q Paper</button>
                            <a href={item.papers[index1]['solution_url']} target='_blank' type='button' className='rounded-xl w-[300px] text-white h-[50px] text-center font-medium pt-[4%] mt-[25px] bg-[#5591A9]' key={index}>{item.papers[index1]['name']} Solution</a>
                          </div>
                        </div>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>


          <div id="forms_window" className='absolute top-0 w-full hidden pb-[20px]'>

            <Loginpage />

          </div>

          <div id="que_paper_screen" className='absolute top-0 w-full hidden pb-[20px]'>
            <Contentscreen q_data={que_data} />
          </div>
        </div>
        <div className='mt-[150px]'>
          <Joiningoptions />
        </div>
        <Profilepage />
      </div>
      <div>
        <Exploremore sub_name={'hindi_full'} />
      </div>
      <Footer />

    </div >
  )
}

export default HindiFullpapers
