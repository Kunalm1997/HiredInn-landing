import Image from "next/image";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

export default function FeaturesOne() {
  const box = [
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/augmented-reality.gif?updatedAt=1713463046511',
      heading: 'Industry Specific',
      description: 'Experience groundbreaking AI hiring solutions tailored for the hospitality industry, exclusively in India',
    },
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/website.gif?updatedAt=1713463046543',
      heading: 'Automated Pre Screening',
      description: 'Accelerate hiring processes with AI-driven pre-screening, cutting down on time and resources',
    },
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/consultation.gif?updatedAt=1713463046639',
      heading: 'Talent Acquisition',
      description: 'Access top-tier talent through our industry-specific platform, optimizing your candidate pool',
    },
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/user.gif?updatedAt=1713463046577',
      heading: 'Applicant Tracking',
      description: 'Streamline hiring workflows by centralizing data and tracking every stage seamlessly',
    },
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/chat.gif?updatedAt=1713463046493',
      heading: 'Smart Interview Scheduling',
      description: 'Effortlessly manage interview schedules with built-in scheduling features for efficient coordination',
    },
    {
      icon: 'https://ik.imagekit.io/7guc79cmq/GIF/ai.gif?updatedAt=1713463046691',
      heading: 'AI-Powered Hiring',
      description: 'Let AI revolutionize your hiring journey, from job posting to final selection, enhancing efficiency and precision',
    },
  ]

	return (
    <section className="p-20 bg-dark-purple">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-4xl text-center">Skip the Hassle, Find the Perfect People With HiredInn</h2>
        <div className="flex flex-col sm:flex-row items-center justify-evenly mt-10">
          {
            box.slice(0, 3).map((item, index) => {
              return (
                <div className="bg-white w-full sm:w-1/3 flex flex-col items-start justify-evenly p-12 m-4 rounded-xl" key={index}>
                  <div>
                    <Image src={item.icon} alt="icon" width={50} height={50} />
                  </div>
                  <h3 className="text-xl font-semibold my-5">{item.heading}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-evenly mt-10">
          {
            box.slice(3, 6).map((item, index) => {
              return (
                <div className="bg-white w-full sm:w-1/3 flex flex-col items-start justify-evenly p-12 m-4 rounded-xl" key={index}>
                  <div>
                    <Image src={item.icon} alt="icon" width={50} height={50} />
                  </div>
                  <h3 className="text-xl font-semibold my-5">{item.heading}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
		// <section className="our-best-features-wrapper section-padding" style={{backgroundColor: '#6E27C6'}}>
		// 	<div className="container">
		// 		<div className="col-xl-8 offset-xl-2 text-center">
		// 			<div className="block-contents">
		// 				<div className="text-4xl">
		// 					<h2 style={{color: 'white'}}>Skip the Hassle, Find the Perfect People With HiredInn</h2>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="flex">
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon1">
		// 						<BiLockAlt />
		// 					</div>
		// 					<h3>Industry Specific</h3>
		// 					<p>Experience groundbreaking AI hiring solutions tailored for the hospitality industry, exclusively in India</p>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon2">
		// 						<AiOutlineBarChart />
		// 					</div>
		// 					<h3>Automated Pre Screening</h3>
		// 					<p>Accelerate hiring processes with AI-driven pre-screening, cutting down on time and resources</p>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon3">
		// 						<FiSend />
		// 					</div>
		// 					<h3>Talent Acquisition</h3>
		// 					<p>Access top-tier talent through our industry-specific platform, optimizing your candidate pool</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="row">
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon1">
		// 						<BiLockAlt />
		// 					</div>
		// 					<h3>Applicant Tracking</h3>
		// 					<p>Streamline hiring workflows by centralizing data and tracking every stage seamlessly</p>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon2">
		// 						<AiOutlineBarChart />
		// 					</div>
		// 					<h3>Smart Interview Scheduling</h3>
		// 					<p>Effortlessly manage interview schedules with built-in scheduling features for efficient coordination</p>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4 col-md-6 col-12">
		// 				<div className="features-card-item style-1">
		// 					<div className="icon icon3">
		// 						<FiSend />
		// 					</div>
		// 					<h3>AI-Powered Hiring</h3>
		// 					<p>Let AI revolutionize your hiring journey, from job posting to final selection, enhancing efficiency and precision</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
}
