import React from "react";
import Scrollmarquee from "../components/infinityscroll/Marquee";
import CounterBox from "../components/countup/CounterBox";
import YogaModal from "../components/modal/Modal";
import YinModal from "../components/modal/Yin";
import VinyasaaModal from "../components/modal/Vinyasa";
import HathaModal from "../components/modal/Hatha";
import ImageSkeleton from "../components/image/Image";
import WordRotateDemo  from "../components/magicui/WordRotate";
import FlipTextDemoDemo  from "../components/magicui/Flip-text";
import MarqueeDemo from "../components/magicui/Reviews";
import Shimmer from "../components/magicui/Shimmer";





const Home = () => {
  return (
    <>
      {/* section one-hero-page */}
      <section className="flex flex-col justify-center items-center h-[auto] ">
        {/* section hero */}
        <div className="px-4 py-0 lg:px-[5%] flex  w-full rounded-3xl h-fit  overflow-hidden  bg-gradient-to-br from-pink-100  to-violet-400 mt-[20%] lg:mt-[1%]">
          <div class="flex items-center justify-center w-full h-[50vh] lg:h-[96vh]">
            <div class="relative w-full">
              <div class="absolute inset-0 flex items-center justify-center">
                <FlipTextDemoDemo words={"AWAKEN YOGA"} classStyle={"text-center text-[3rem] md:text-[8rem] leading-[4rem] font-extrabold text-white"}/>
              </div>
              <div class=" absolute inset-0 bottom-0 flex items-center justify-center mt-[15%] md:mt-[3.5%]">
                <img
                  className="lg:w-[85vh] md:w-[80%] w-[80vh] bottom-0"
                  src="./assets/awaken.png"
                  alt="awaken yoga studio"
                />
              </div>
              <div class="absolute  inset-0 flex items-center justify-center mt-[20%] md:mt-[10%] lg:mt-[1%]">
                <div class="w-fit h-fit mt-[22%] mr-[8%] ">
                  <img
                    className="lg:w-[30vh] w-[20vw]  "
                    src="./assets/box1.png"
                    alt="awaken yoga studio"
                  />
                </div>
                <div class="w-fit h-fit bg-green-200 rounded-full px-4 py-2 mt-[20%] lg:mt-[20%]">
                  <h1 className="text-lg font-bold text-blue-500">
                    Inscris Toi!
                  </h1>
                </div>
                <div class="w-fit h-fit mt-[28%] ml-[8%] ">
                  <img
                    className="lg:w-[30vh] w-[20vw] "
                    src="./assets/box2.png"
                    alt="awaken yoga studio"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section two-about-page */}
      <section className="h-fit w-full mt-8 mb-28 md:my-[100px] rounded-3xl">
        <div className="md:grid grid-cols-2 justify-center items-start md:space-x-4">
          <div className="col-span-1 flex text-center h-full justify-between md:text-left flex-col max-md:py-8 px-2">
            <div>
            <div className="flex max-md:justify-center items-center lg:mb-8">
              <div className="w-fit flex gap-3 items-center bg-pink-200 px-8 py-4  rounded-full animate__animated animate__fadeInLeft">
                <img
                  className="object-cover w-[19px] lg:w-[2vw] 2xl:w-[1vw] rounded-full "
                  src="./assets/logo6.png"
                  alt="Aerial yoga experience"
                />
                <h1 className=" text-[10px] lg:text-lg max-lg:hidden">
                  Awaken yoga
                </h1>
              </div>
              <div className="w-fit flex gap-3 items-center bg-green-200 px-8 py-4  rounded-full animate__animated animate__fadeInLeft">
                <img
                  className="object-cover w-[19px] lg:w-[2vw] 2xl:w-[1vw] rounded-full "
                  src="./assets/logo5.png"
                  alt="Aerial yoga experience"
                />
                <h1 className=" text-[10px] lg:text-lg max-lg:hidden">
                  Yoga studio in Douala
                </h1>
              </div>
            </div>
            <h1 className="lg:text-6xl text-4xl font-bold mb-8">
              Transforming Your <br />{" "}
              <span className="lg:text-6xl  text-4xl gradient-text font-bold ">
                Body, Mind, and Spirit{" "}
              </span>
            </h1>
            <p className="text-lg lg:text-2xl text-justify lg:leading-[3rem]">
              At Awaken Yoga Studio, we believe in the power of yoga to heal and
              transform. Located in the vibrant city of Douala, our studio
              offers a peaceful sanctuary where you can escape the hustle and
              bustle of everyday life. Our mission is to provide a supportive
              and inclusive environment for everyone, regardless of age or
              fitness level.
            </p>
            </div>
            <div>
  <Shimmer url={"/"} title={"Button"} />
</div>
          </div>
          <div className="col-span-1 overflow-hidden bg-cover object-cover h-fit">
          <ImageSkeleton src={'./assets/A-BG.jpg'} styleClass={'bg-contain object-cover w-[100vw] h-[40vh] lg:h-fit rounded-3xl'} alt={'service'}/>
          </div>
        </div>
      </section>

      {/* infinityscroll animation */}
      <section>
        <Scrollmarquee />
      </section>

      {/* section three-service-page */}
      <section className="pt-[100px]">
        <div className="md:grid grid-cols-2 md:space-x-4">
          <div className="col-span-1">
            <h1 className="lg:text-6xl lg:hidden leading-[2.8rem] text-4xl font-bold max-md:mb-8 text-center md:text-left">
            Experience the
              <span className="dark:text-white  lg:text-5xl text-3xl w-fit font-medium px-8 py-2 bg-pink-200 text-blue-500 rounded-full">Benefits</span>
              of yoga and enhanced mental clarity.
            </h1>
            <div className=" flex gap-2 flex-wrap max-lg:hidden">
              
             <div className="lg:text-6xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-8 text-center md:text-left">Experience the</div>
             <div><WordRotateDemo classStyle={"dark:text-white lg:text-5xl text-3xl w-fit font-medium px-8 py-2 bg-pink-200 text-blue-500 rounded-full"} words={["Benefits" , "Goodness"]} /></div>
               <div className="lg:text-6xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-8 text-center md:text-left">of yoga and enhanced mental clarity.</div>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-lg lg:text-2xl text-justify lg:leading-[3rem]">
              Our offerings include{" "}
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Hatha Yoga
              </span>
              ,
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Vinyasa Flow
              </span>
              , and{" "}
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Yin Yoga
              </span>{" "}
              among others. Each class designed to meet your
              needs. Whether you’re a beginner or an experienced yoga
            </p>
<div>
  <Shimmer url={"/"} title={"Join Now"} />
</div>


          </div>
        </div>

        {/* Counter */}
        <div className="">
          {" "}
          <CounterBox />
        </div>
      </section>

      {/* infinityscroll animation */}
      <section>
        <Scrollmarquee />
      </section>

      {/* section four-booking-yoga */}
      <section className="h-fit px-2 py-4 md:p-10 rounded-3xl bg-violet-300 my-20 md:my-[100px] ">
        <div className="md:grid grid-cols-2 md:space-x-8 items-center justify-between">
          <div className="col-span-1 flex flex-col h-full justify-between">
            <h1 className="lg:text-6xl text-4xl font-bold max-md:mt-4 mb-10 md:mb-10 text-center md:text-left">
              Join our diverse range of yoga{" "}
              <span className="lg:text-5xl text-3xl font-medium lg:leading-relaxed px-8 py-0 bg-green-200 text-blue-500 rounded-full ">
                classes
              </span>{" "}
              designed to meet your needs
            </h1>
            
            <div className="grid grid-cols-2  items-start justify-around mt-8">
              <div className="col-span-1 ">
                <VinyasaaModal />
              </div>
              <div className="col-span-1 ">
                <YinModal />
              </div>
              <div className="col-span-1 ">
                <HathaModal />
              </div>
              <div className="col-span-1 ">
                <YogaModal />
              </div>
            </div>
          </div>
          <div className="col-span-1 max-md:mt-8 overflow-hidden bg-cover object-cover h-fit">
          <ImageSkeleton src={'./assets/service.jpg'} styleClass={'bg-contain object-cover w-[100vw] h-[40vh] lg:h-[75vh] rounded-3xl'} alt={'service'}/>
          </div>
        </div>
      </section>

      {/* marquee testtimonials */}
      <section className="h-fit">
        <div>
          <div className="mb-8 ">
          <h1 className="lg:text-6xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-2 text-center ">Testimonials</h1>
          <p className="text-lg lg:text-2xl text-center ">Voici nos retours clients</p>
          </div>
          <div>
          <MarqueeDemo/>
          </div>
        </div>
      </section>

      {/* section five-features */}
      <section className="my-[100px]  flex justify-center items-center md:pl-10 h-fit md:h-[20vh] lg:h-[50vh] rounded-3xl bg-gradient-to-br from-blue-100  to-blue-400">
<div className="md:grid grid-cols-2  justify-center items-center">
<div className="col-span-1 px-2 py-8">
<h1 className="lg:text-6xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-8 text-center md:text-left">
            Experience the 
               <span className="dark:text-white mx-2 lg:text-5xl text-3xl w-fit font-medium px-8 py-2 bg-pink-200 text-blue-500 rounded-full">Benefits</span>
               of yoga and enhanced mental clarity.
            </h1>
</div>

<div className="col-span-1 flex justify-end">
          <ImageSkeleton src={'./assets/features.png'} styleClass={' w-full h-full lg:h-full'} alt={'service'}/>
          </div>
</div>
      </section>

    </>
  );
};

export default Home;
