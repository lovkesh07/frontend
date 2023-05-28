// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Ourservices = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit mx-16 bg-bg_light_primary  " id="skills">


      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title text-4xl mx-6" data-aos="fade-down">
          {skills.title}
        </h2>
        <br />
        <h4 className="subtitle text-6xl font-bold mx-6 " data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br /><br /><br />


        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-6 max-w-sm rounded-md border-2 border-slate-200"
            >
             
              <div>
                <h1 className="text-4xl" >{skill.name}</h1>
                <p className="">{skill.para}</p>
                <div
                  onClick={() => {
                    // setSelectSkill(skill);
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
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