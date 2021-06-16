import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Youtube from "react-youtube";
import {CSSTransition} from 'react-transition-group';

import courses from "../../constraints.js/api/courses";
import formatThousand from "../helpers/formatThousand";

import Header from "../../parts/Header";
import Feature from "../../parts/Details/feature";

import IconStudentMenu from "../../../public/images/logo-student-menu.svg";
import IconVideoMenu from '../../../public/images/logo-video-menu.svg';
import IconSertificateMenu from '../../../public/images/logo-sertifikat-menu.svg';
import Footer from "../../parts/Footer";
import ImageCourse from "../../parts/Details/ImageCourse";
import RenderView from "../../parts/Details/RenderView";
import Mentor from "../../parts/Details/Mentor";
import HappyStudent from "../../parts/Details/HappyStudent";

function DetailsCourse({ data }) {

  const footer = useRef(null);
  
  const [isSticky, setIsSticky] = useState(() => true);
  
  useEffect(() => {
    // ambil tinggi batas footer
      const stickyOffsetTop = footer.current.getBoundingClientRect().top;
      
      const stickyMetaToggler = () => {
        // setIsSticcky
        setIsSticky(stickyOffsetTop > window.pageYOffset + window.innerHeight);
      }

      
      // buat eventListener ketika scroll
      window.addEventListener('scroll', stickyMetaToggler);;

      return () => {
        window.removeEventListener('scroll', stickyMetaToggler);
      }
      
      
    }, []);
  
  return (
    <div>
      <Head>
        <title>Detail Course - {data?.name}</title>
      </Head>

      <section
        className="relative px-4 pt-10 overflow-hidden h-screen"
        style={{height: 660}}
      >
        {data?.thumbnail && (
          <div className="min-h-screen z-0 inset-0 absolute">
            <img className="absolute inset-0 w-full h-full object-cover" src={data?.thumbnail} alt="" />
          </div>
        )}

        <div className="absolute inset-0 bg-black opacity-75 w-full h-full z-0"></div>
        <div className="absolute w-full inset-0 object-fill z-10 flex justify-center items-center flex-column">
          <div className="text-center">
            <p className="text-white mb-5">Kelas Onilne:</p>
            <h1 className="text-3xl md:text-6xl font-semibold" style={{ color: "#36C2CF" }}>
              {data?.name}
            </h1>
          </div>
        </div>
        <div className="container relative mx-auto z-20">
          <Header onDark login></Header>
        </div>
      </section>

      <section className="mx-auto">
        <section className="w-full transform lg:-translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-wrap justify-between">
              <Feature
                title="STUDENT"
                icon={<IconStudentMenu style={{height: 40, width: 40}}></IconStudentMenu>}
                data={formatThousand(data?.total_students)}
              ></Feature>
              <Feature
                title="VIDEOS"
                icon={<IconVideoMenu></IconVideoMenu>}
                data={formatThousand(data?.total_videos)}
              ></Feature>
              <Feature
                title="CERTIFICATE"
                icon={<IconSertificateMenu></IconSertificateMenu>}
                data={data?.certificate === 1 ? 'TERSEDIA' : 'TIDAK'}
              ></Feature>
            </div>
          </div>
        </section>
      </section>
    
      <section className="w-full mt-10 px-0 md:px-4">
        <div className="w-3/4 mx-auto">
          <div className="container w-full md:w-3/4">
            <h1 className="text-xl" style={{color: '#132B50'}}>About <span style={{ color: "#36C2CF" }}>Course</span></h1>
            <h3 className="mt-3 leading-relaxed text-justify text-md  text-gray-400">{data?.description}</h3>
          </div>
        </div>
      </section>

      <section className="mt-10 w-full px-0 md:px-4">
        <div className="w-3/4 mx-auto">
          <div className="container w-3/4">
            <h1 className="text-xl" style={{color: '#132B50'}}>Images <span style={{ color: "#36C2CF" }}>Course</span></h1>
          </div>
          <div className="w-full md:w-3/4 mt-5 flex justify-between flex-wrap items-center">
            {
              data?.image_course?.length > 0 ?
              data.image_course.map((item, index) => {
                return (
                  <ImageCourse data={item.image} key={index}></ImageCourse>
                )
              }) : <div className="w-full md:w-3/4 text-center text-md text-gray-400">No Images Yet</div>
            }
          </div>
        </div>
      </section>

      <section className="w-full mt-10 px-0 md:px-4">
        <div className="w-3/4 mx-auto">
          <div className="container w-3/4">
            <h1 className="text-xl" style={{color: '#132B50'}}>You Will <span style={{ color: "#36C2CF" }}>Learn</span></h1>
          </div>
          <div className="mt-5 w-full md:w-3/4">
            <div className="w-full md:w-3/4">
              {
                data.chapter.length > 0 ? (
                  <RenderView previews={data.chapter}></RenderView>
                ) : (<div className="w-full text-center text-md text-gray-400">No Chapter Found</div>)
              }
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10 px-0 md:px-4">
        <div className="w-3/4 mx-auto">
          <div className="container w-3/4">
            <h1 className="text-xl" style={{color: '#132B50'}}>Our <span style={{ color: "#36C2CF" }}>Instructor</span></h1>
          </div>
          <div className="mt-5 w-full md:w-3/4">
            <Mentor data={data.mentor}></Mentor>
          </div>
        </div>
      </section>

      <section className="w-full mt-10 px-0 md:px-4">
        <div className="w-3/4 mx-auto">
          <div className="container w-3/4">
            <h1 className="text-xl" style={{color: '#132B50'}}>Happy <span style={{ color: "#36C2CF" }}>Students</span></h1>
          </div>
          <div className="mt-5 w-full md:w-3/4">
            {
              data?.reviews?.length > 0 ? 
              data.reviews.map((item, index) => {
                return (
                  <HappyStudent key={index} data={item}></HappyStudent>
                )
              }) : <div className="w-full md:w-3/4 text-center text-md text-gray-400">No Review Yet</div>
            }
          </div>
        </div>
      </section>

      <section>
          <CSSTransition in={isSticky} timeout={300} unmountOnExit classNames="meta-price">
            <div className="w-full left-0 bottom-0 fixed bg-white transition-all duration-300 border-t border-gray-200">
              <div className="w-full md:w-3/4 mx-auto px-4 pt-3 pb-3">
                <div className="flex justify-between items-center">
                  <div className=" md:block">
                    <h1 className="text-xs text-gray-400">Nama Kelas</h1>  
                    <h1 className="text-sm md:text-2xl" style={{color: '#132B50'}}>{data?.name}</h1>
                  </div>
                  <div className="flex items-center">
                    <h1 className="mr-3 text-xs md:text-xl" style={{ color: "#36C2CF" }}>{data?.type === 'free' ? 'Free' : <span>Rp. {formatThousand(data?.price)}</span> }</h1>  
                    <a href={`http://localhost:3030/joined/${data?.id}`} target="_blank" rel="noopener noreferrer" className="button-form px-6 py-3 text-white">Enrol Now</a>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
      </section>

      <section className="mx-auto mt-24" ref={footer}>
        <Footer></Footer>
      </section>
    </div>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);

    return { data: data };
  } catch (err) {}
};

export default DetailsCourse;
