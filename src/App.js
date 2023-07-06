export default function App() {
  return (
    <div>

      <div className="ml-32 h-[4.5rem] flex items-center space-x-36">

        <div className="text-violet-500 text-xl font-black tracking-widest flex items-center">
          <img src="logo.png" alt="logo" className="h-16"/>
          <div>PREPAIR MENTORS</div>
        </div>

        <div className="text-violet-300 font-semibold tracking-wide flex space-x-24">
          <div className="text-black">Home</div>
          <div>About Us</div>
          <div>Mentors</div>
          <div>Events</div>
          <div>More</div>
        </div>

      </div>

      <div className="w-full relative">
        
        <img src="crowd-background.jpg" alt="crowd background" className="z-[-4] absolute object-cover h-full w-full" />

        <div className="z-[-3] absolute h-full w-full bg-violet-300 opacity-25"></div>

        <div className="pt-24 pl-72 font-black">
          <div className="text-white text-[7rem] leading-none tracking-widest">PREPAIR<br />MENTORS</div>
          <div className="text-violet-200 text-6xl tracking-widest">building better students.</div>
        </div>

        <div className="mt-36 h-80 flex justify-center">

          <div className="w-7/12 bg-beige flex flex-col justify-center items-center">
            <div className="px-24 w-[42rem] text-center text-sm font-light space-y-5">
              <div className="text-violet-200 text-4xl font-black tracking-wider">OUR MISSION</div>
              <div className="leading-relaxed">PrePAIR Mentors is a student-led organization that aims to impact the lives of highschool students by introducing various mentors to share their valuable experiences through group bonding, activities personal lectures, and interactive training.</div>
              <div>Our 3 A's of Mentorship: Available, Analytical, Active Listener</div>
              {/* eslint-disable-next-line */}
              <div><a href="" className="underline">Read more</a></div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-center">
            
            <img src="delivery.jpg" alt="delivery" className="z-[-2] absolute object-cover h-80 w-1/3" />

            <div className="z-[-1] absolute h-80 w-1/3 bg-violet-400 opacity-80"></div>

            <div className="mt-16 w-60 flex flex-col items-center space-y-8">
              <div className="text-center text-4xl text-white font-black tracking-widest">HAVE A QUESTION ?</div>
              <div className="rounded-full py-2 px-8 w-fit bg-white text-violet-800">CONTACT US</div>
            </div>

          </div>

        </div>

      </div>

      <div className="h-[30rem] text-center text-white font-light flex justify-center">

        <div className="w-7/12 bg-violet-100 flex flex-col justify-center items-center">
          <div className="px-24 w-[42rem] text-sm space-y-5">
            <div className="text-4xl font-black tracking-wider">LATEST NEWS</div>
            <div className="leading-relaxed">Looking for information about our meeting topics and events? Look no further! Click below to check out our PrePAIR Blog for our monthly meeting recaps and information about our past events!</div>
            {/* eslint-disable-next-line */}
            <div><a href="" className="underline">Read more</a></div>
          </div>
        </div>

        <div className="w-1/3 bg-violet-200 flex flex-col items-center">
          <div className="mt-16 w-60">
            <div className="text-4xl font-black tracking-wider">START YOUR OWN CHAPTER!</div>
            <div className="mt-8 leading-loose">Get your own PrePAIR Chapter Packet!</div>
            <input type="text" placeholder="Enter your email here*" className="py-3 px-5 border-b border-white bg-transparent placeholder:text-inherit" />
            <div className="mt-5 font-medium">Join</div>
          </div>
        </div>

      </div>

      <div className="py-16 w-full bg-beige flex flex-col items-center space-y-16">
        
        <div className="text-violet-300 text-6xl font-black tracking-widest">OUR EVENTS</div>

        <div className="border-[6px] border-violet-300 w-7/12 flex">

          <div className="pt-3 pb-5 w-1/2 bg-white text-center font-light flex flex-col items-center space-y-8">

            <div className="text-5xl font-black leading-snug tracking-[.25em]">PREPAIR JANUARY MEETING</div>

            <div className="flex flex-col items-center space-y-2">
              <div>When</div>
              <div className="h-px w-6 bg-black" />
              <div>Jan 25, 4:30 PM</div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div>Where</div>
              <div className="h-px w-6 bg-black" />
              <div>Centennial High School: Room A213,<br />6901 Coit Rd, Frisco, TX 75035, USA</div>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="py-3 px-12 bg-violet-200 text-white">Details</div>
              <div className="flex justify-center items-center space-x-10">

                <svg viewBox="0 0 9 16" className="h-4" >
                  <path d="M5.39324257,16 L5.39324257,8.70173788 L7.84309113,8.70173788 L8.20960391,5.85761755 L5.39324257,5.85761755 L5.39324257,4.04152086 C5.39324257,3.21816097 5.62190137,2.65686476 6.80283471,2.65686476 L8.30887758,2.65639427 L8.30887758,0.112447437 C8.04822537,0.077631076 7.15429176,0 6.11450584,0 C3.94271768,0 2.45596495,1.32584468 2.45596495,3.75969653 L2.45596495,5.85761755 L-1.0658141e-13,5.85761755 L-1.0658141e-13,8.70173788 L2.45596495,8.70173788 L2.45596495,16 L5.39324257,16 Z" />
                </svg>

                <svg viewBox="0 0 18 14" className="h-3.5">
                  <path d="M50.0768084,18.6572894 C49.4120716,18.9383915 48.6969358,19.1284894 47.9467859,19.2134267 C48.7133818,18.7761005 49.3011937,18.0839623 49.5775926,17.2588567 C48.8603348,17.6638258 48.0677436,17.9575674 47.2215703,18.1158138 C46.5467537,17.4287314 45.5817448,17 44.5148767,17 C42.4676148,17 40.8070991,18.5824636 40.8070991,20.5340002 C40.8070991,20.8115633 40.8389301,21.0805316 40.902592,21.3388827 C37.8208235,21.1912535 35.0886652,19.7852371 33.2583844,17.6456249 C32.9390136,18.1694052 32.7565161,18.7761005 32.7565161,19.4242534 C32.7565161,20.6487667 33.411173,21.7312123 34.4064214,22.3657145 C33.7984499,22.3480192 33.2260229,22.187245 32.7257461,21.9243436 L32.7257461,21.9678235 C32.7257461,23.6807266 34.0037596,25.1094941 35.7014114,25.4330649 C35.3899984,25.5159799 35.0626699,25.5574374 34.7242006,25.5574374 C34.4849378,25.5574374 34.2520412,25.5362031 34.0265718,25.4947456 C34.4982007,26.8987397 35.867463,27.9210213 37.490312,27.9483226 C36.2213173,28.8967896 34.621811,29.4615218 32.884901,29.4615218 C32.5851593,29.4615218 32.2896618,29.4458488 32,29.4124806 C33.6414171,30.414539 35.5905335,31 37.6850114,31 C44.5074495,31 48.2364477,25.6155791 48.2364477,20.9440251 C48.2364477,20.7908346 48.2332646,20.637644 48.2268984,20.4869813 C48.9515835,19.98848 49.5813062,19.3656062 50.0768084,18.6572894" transform="translate(-32 -17)" />
                </svg>

                <svg viewBox="0 0 19 16" className="h-4">
                  <path d="M2.30367607,0.025974026 C3.49850532,0.025974026 4.46947897,0.885212121 4.46947897,1.94130736 C4.46947897,2.99987879 3.49850532,3.85911688 2.30367607,3.85911688 C1.10464953,3.85911688 0.13647407,2.99987879 0.13647407,1.94130736 C0.13647407,0.885212121 1.10464953,0.025974026 2.30367607,0.025974026 L2.30367607,0.025974026 Z M0.433082736,15.9491169 L4.17287031,15.9491169 L4.17287031,5.31387879 L0.433082736,5.31387879 L0.433082736,15.9491169 Z M6.51467968,5.31325974 L10.0963692,5.31325974 L10.0963692,6.76554545 L10.1467367,6.76554545 C10.6448154,5.92983117 11.8634294,5.04830736 13.680857,5.04830736 C17.4612184,5.04830736 18.159368,7.25087879 18.159368,10.1158312 L18.159368,15.9484978 L14.427975,15.9484978 L14.427975,10.776974 C14.427975,9.54259307 14.4013922,7.95659307 12.4874268,7.95659307 C10.5426813,7.95659307 10.2460727,9.29992641 10.2460727,10.6865931 L10.2460727,15.9484978 L6.51467968,15.9484978 L6.51467968,5.31325974 Z" />
                </svg>

              </div>
            </div>

          </div>

          <img src="lecture.jpg" alt="lecture" className="object-cover" />

        </div>

      </div>

      <div className="flex justify-center">
        <div className="h-44 w-11/12 relative flex flex-col justify-center">

          <img src="children-running.jpg" alt="children running" className="z-[-2] absolute object-cover h-full w-full" />

          <div className="z-[-1] absolute h-full w-full bg-indigo-500 opacity-60"></div>

          <div className="flex items-center justify-center space-x-48">
            
            <div className="text-white text-2xl font-black tracking-wider">
              <div>WANT TO GET INVOLVED?</div>
              <div>BECOME A MENTOR TODAY!</div>
            </div>

            <div className="rounded-full py-3 px-10 w-fit bg-white text-violet-200 font-medium">Become a Mentor</div>
          
          </div>

        </div>
      </div>

      <div className="h-36 flex items-center justify-evenly">

        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-28" />
          <div className="text-3xl">PrePAIR Mentors</div>
        </div>

        <div className="flex items-center space-x-2">
          <img src="mail.png" alt="mail" className="h-10" />
          <img src="instagram.png" alt="instagram" className="h-10" />
          <img src="twitter.png" alt="twitter" className="h-10" />
          <img src="linkedin.png" alt="linkedin" className="h-10" />
        </div>

      </div>

      <div className="py-2 h-10 w-full bg-violet-700 text-center text-white text-sm font-light">© 2022 PrePAIR Mentors. All rights reserved. </div>

    </div>
)}