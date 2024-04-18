'use client'
import Head from "next/head";
import Image from "next/image";
import icoArr from "../../img/faqacc/icon-arrow-down.svg";
import womanIlluMov from "../../img/faqacc/illustration-woman-online-mobile.svg";
import womanIlluDesk from "../../img/faqacc/illustration-woman-online-desktop.svg";
import boxIlluMov from "../../img/faqacc/bg-pattern-mobile.svg";
import illustrationBox from "../../img/faqacc/illustration-box-desktop.svg";
import boxIlluDesk from "../../img/faqacc/bg-pattern-desktop.svg";

//bg-pattern-mobile.svg
import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";

export default function FAQAccordion() {
  const content = [
    {
      button: "What is HiredInn?",
      panel:
        "HiredInn is a specialized hospitality hiring platform connecting employers with top talent in the hospitality industry, streamlining the recruitment process.",
      uuid: "id1",
    },
    {
      button: "How does HiredInn work?",
      panel:
        "Employers post job listings detailing their requirements, and prospective candidates create profiles showcasing their skills and experience, enabling seamless matchmaking.",
      uuid: "id2",
    },
    {
      button: "What sets HiredInn apart?",
      panel:
        "HiredInn utilizes advanced algorithms to match employers with candidates who best fit their needs, saving time and ensuring quality hires in the competitive hospitality sector.",
      uuid: "id3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index: number) => {
    if (activeIndex === -1) setActiveIndex(index);
    else if (activeIndex !== index) setActiveIndex(index);
    else setActiveIndex(-1);
  };
  return (
    <>
      <main className=" relative px-[24px] xl:px-[50px] font-personal h-full flex justify-center pb-[100px]">
        <div className="shadow-[0px_26px_47px_-7px_rgba(0,0,0,0.45)] relative xl:overflow-hidden xl:flex xl:items-end h-[670px] xl:h-[510px] mt-[105px] xl:mt-[100px]  flex flex-col items-center bg-white w-full px-[25px] rounded-3xl">
          <div className="xl:w-[600px] xl:mr-[70px] w-full">
            <h1 className="text-4xl text-center xl:text-left xl:text-5xl text-[#4A4B5E] font-bold mb-[20px] xl:mb-[10px] mt-[135px] xl:mt-[72px]">
              If you want to know anything, ask us
            </h1>
            <Accordion
              allowZeroExpanded
              className="overflow-hidden pb-[48px] xl:pb-0 w-full"
              preExpanded={["id2"]}
            >
              {content.map((contenido, indx) => (
                <AccordionItem
                  key={indx}
                  id={contenido.uuid}
                  uuid={contenido.uuid}
                  className="border-b-[1px] py-[15.7px]"
                >
                  <AccordionItemHeading
                    className=" "
                    onClick={() => handleClick(indx)}
                  >
                    <AccordionItemButton className="flex justify-between items-center">
                      <h1
                        className={
                          "text-[#4A4B5E] text-lg hover:text-dark-purple " +
                          `${
                            activeIndex === indx ? "font-bold" : "font-normal"
                          }`
                        }
                      >
                        {contenido.button}
                      </h1>
                      <Image
                        src={icoArr}
                        alt="ico"
                        className={
                          "w-[10px] h-[7px] " +
                          `${activeIndex === indx ? "rotate-180" : "rotate-0"}`
                        }
                      ></Image>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="pt-[5px] ">
                    <p className="text-[#787887]">{contenido.panel}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <h3 className="-mt-5 xl:mt-5">Still have questions? <span className="text-dark-purple font-medium"><Link href="/bookademo">Get in touch</Link></span></h3>
          </div>
          <Image
            src={boxIlluDesk}
            alt="box"
            className="absolute top-[-290px] left-[-530px] z-0 hidden xl:block"
          ></Image>
        </div>
        <Image
          src='https://ik.imagekit.io/7guc79cmq/faq-video-bg.jpg?updatedAt=1713367491464'
          alt="faq"
          className="absolute top-[150px] left-[150px] z-10 hidden xl:block rounded-xl"
          width={400}
          height={200}
        ></Image>
        <Image
          src='https://ik.imagekit.io/7guc79cmq/faq-video-bg.jpg?updatedAt=1713367491464'
          alt="faq"
          className="absolute top-[40px] z-20 xl:hidden rounded-xl"
          width={150}
          height={200}
        ></Image>
      </main>
    </>
  );
}