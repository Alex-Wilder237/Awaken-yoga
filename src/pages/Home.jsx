import React from "react";
import Scrollmarquee from "../components/infinityscroll/Marquee";
import CounterBox from "../components/countup/CounterBox";
import YogaModal from "../components/modal/Modal";
import YinModal from "../components/modal/Yin";
import VinyasaaModal from "../components/modal/Vinyasa";
import HathaModal from "../components/modal/Hatha";
import ImageSkeleton from "../components/image/Image";
import FlipTextDemoDemo  from "../components/magicui/Flip-text";
import MarqueeDemo from "../components/magicui/Reviews";
import Shimmer from "../components/magicui/Shimmer";

const Home = () => {
  return (
    <>
      {/* section one-hero-page */}
      <section id="home" className="flex flex-col justify-center items-center h-[auto] ">
        {/* section hero */}
        <div className="px-4 py-0 lg:px-[5%] flex  w-full rounded-3xl h-fit  overflow-hidden  bg-gradient-to-br from-pink-100  to-violet-400  mt-[1%]">
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
                 Studio Yoga
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
      <section id="a-propos" className="h-fit w-full mt-8 mb-[100px] md:my-[200px] rounded-3xl">
        <div className="md:grid grid-cols-2 justify-center items-start md:space-x-4">
          <div className="col-span-1 flex text-center h-full md:text-left flex-col max-md:py-8 px-2">
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
                  Studio de yoga à Douala
                </h1>
              </div>
            </div>
            <h1 className="lg:text-7xl text-4xl font-bold mb-8">
              Transformez Votre <br />{" "}
              <span className="lg:text-7xl  text-4xl gradient-text font-bold ">
                Corps, Esprit et Âme{" "}
              </span>
            </h1>
            <p className="text-lg lg:text-2xl text-justify lg:leading-[3rem]">
              Chez Awaken Yoga Studio, nous croyons au pouvoir du yoga pour guérir et transformer. Situé dans la ville dynamique de Douala, notre studio offre un sanctuaire paisible où vous pouvez échapper à l'agitation de la vie quotidienne. Notre mission est de fournir un environnement de soutien et inclusif pour tous, quel que soit l'âge ou le niveau de condition physique.
            </p>
            </div>
            <div>
  <Shimmer url={"http://calendly.com/donalddestin11"} title={"Rejoignez Maintenant"} />
</div>
          </div>
          <div className="col-span-1 overflow-hidden bg-cover object-cover h-fit flex justify-center md:justify-end">
          <ImageSkeleton src={'./assets/A-BG.jpg'} styleClass={'rounded-3xl w-full h-fit'} alt={'service'}/>
          </div>
        </div>
      </section>

      {/* infinityscroll animation */}
      <section>
        <Scrollmarquee />
      </section>

      {/* section three-service-page */}
      <section id="service" className="my-[100px]">
        <div className="md:grid grid-cols-2 md:space-x-20 items-start">
          <div className="col-span-1 flex flex-col items-start justify-center">
          <h1 className="md:mb-4 mb-2 dark:text-white mx-auto md:hidden md:mx-0 lg:text-[1.5rem] md:text-3xl text-lg w-fit font-medium px-8 py-4 bg-green-100 text-gray-400 rounded-full">Nos service</h1>
            <h1 className="lg:text-[3.4rem] md:leading-[3.5rem] text-4xl font-bold max-md:mb-8 md:text-left text-center">
            Découvrez nos
              <span className="dark:text-white  lg:text-[3.4rem] md:leading-[3.5rem] text-4xl font-medium mx-2 text-blue-500 ">services</span>
              et les bienfaits du yoga pour votre vie.
            </h1>
            <p className="text-lg lg:text-2xl text-justify lg:leading-[3rem] lg:mt-8 mt-4">
            Bienvenue à Awaken Yoga Studio, je suis <span className="font-bold text-lg lg:text-2xl">FOKO DONALD DESTIN</span> votre instructeur principal chez awaken, votre oasis de sérénité dans la ville de Douala.
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-lg lg:text-2xl text-justify lg:leading-[3rem]">
            nos cours incluent{" "}
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Hatha Yoga
              </span>
              ,
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Vinyasa Yoga
              </span>
              ,
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
              Kundalini yoga
              </span>
              , et{" "}
              <span className="font-bold text-2xl p-2 rounded-full bg-lime-100">
                Yin Yoga
              </span>{" "}
              et beeaucoup d'autres. Chaque cours est conçu pour répondre à vos besoins. Que vous soyez débutant ou pratiquant de yoga expérimenté
            </p>
<div>
  <Shimmer url={"https://wa.me/message/LAUXD72C7TTHC1"} title={"En savoir plus"} />
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
      <section  className="h-fit px-4 py-4 md:p-20 rounded-3xl bg-violet-300 my-[100px] ">
        <div className="md:grid grid-cols-2 md:space-x-10 items-center justify-between">
          <div className="col-span-1 flex flex-col h-full justify-between">
            <h1 className="lg:text-[3.2rem] md:leading-[3.5rem] text-4xl font-bold max-md:mt-4 mb-10 md:mb-10 md:text-left text-center">
              Rejoignez notre large gamme de{" "}
              <span className="lg:text-[2.8rem] text-3xl font-medium  px-8 py-0 bg-green-200 text-blue-500 rounded-full ">
                cours
              </span>{" "}
              de yoga conçus pour répondre à vos besoins
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
      <section id="testimonials" className="h-fit my-[150px]">
        <div>
          <div className="mb-20 ">
          <h1 className="lg:text-5xl lg:leading-[4.5rem] text-4xl font-bold max-md:mb-2 text-center ">Témoignages</h1>
          <p className="text-lg lg:text-2xl text-center ">Voici nos retours clients</p>
          </div>
          <div>
          <MarqueeDemo/>
          </div>
        </div>
      </section>

      {/* section five-features */}
      <section className="md:my-[150px] mb-[80px] flex justify-center items-center  md:pl-10 h-fit md:h-[30vh] lg:h-[60vh] 2xl:h-[40vh] rounded-3xl bg-gradient-to-br from-blue-100  to-blue-400">
<div className="md:grid grid-cols-2 flex flex-col  justify-center items-center">
<div className="col-span-1 px-2 py-8">
<h1 className="lg:text-[3.2rem] lg:leading-[3.5rem] text-4xl font-bold max-md:mb-8 md:text-left text-center">
Transformez 
               <span className="dark:text-white mx-2 lg:text-[2.8rem] text-4xl  w-fit font-bold md:font-medium md:px-8 md:py-2 lg:bg-yellow-200 text-white max-sm:underline  lg:text-pink-500 md:rounded-full">votre  vie</span>
               avec le yoga et découvrez une sérénité intérieure inégalée.
            </h1>
                        <div>
  <Shimmer url={"http://calendly.com/donalddestin11"} title={"Reservez une séance"} />
</div>
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
