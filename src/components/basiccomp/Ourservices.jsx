// import content
import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import { MdArrowForward } from "react-icons/md";

Modal.setAppElement("#root");

const Ourservices = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-gray-200  " id="skills">


      {/* content */}
      <div className="md:container px-5 mx-16 py-14">
        <h2 className="title text-4xl mx-6" data-aos="fade-down">
          {skills.title}
        </h2>
        <br />
        <h4 className="subtitle text-6xl font-bold mx-6 " data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br /><br /><br />


        <div className="flex flex-wrap gap-2 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-[700px] h-[350px] flex items-center
                gap-5 p-6 max-w-sm rounded-md border-2 border-slate-200"
            >
             
              <div>
                <h1 className="text-4xl" >{skill.name}</h1>
                <br/>
                <p className="">{skill.para}</p>
                <div className="text-xl absolute bottom-4 right-16 flex"> 
                <a href="/">
                 Learn More 
                </a><MdArrowForward/>
              
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;