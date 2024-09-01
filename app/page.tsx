"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen ">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800  shadow-2xl">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant={"outline"} className="bg-slate-50 text-black flex items-center space-x-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"
                alt="User Icon"
                width={20}
                height={20}
              />
              
              <Link href="/dashboard">
                <span>Dashboard</span>
              </Link>
              {/* <span>
                Signup
              </span> */}
            </Button>
          </Link>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="text-center py-20 from-slate-100 via-slate-200 to-gray-300 mb-10 mt-6">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          IdeaFlow <span className="text-teal-600">AI</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 ml-2 mr-2">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>

        <Link href="/dashboard">
          <Button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-teal-700">
            Get Started
          </Button>
        </Link>

        {/* <Button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-teal-700">
            <SignIn /> Get Started
          </Button> */}
      </section>


      {/* Features Section */}
      <div>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10 bg-slate-100">
          <div className="text-center hover:bg-gray-200 p-4 rounded">
            <Image src="/ai-assistant.png" alt="logo" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">AI-Powered Content Creation</h3>
            <p className="text-gray-600">Generate niche-specific content instantly with our advanced AI tools.</p>
          </div>
          <div className="text-center hover:bg-gray-200 p-4 rounded">
            <Image src="/data-validation.png" alt="logo" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Seamless Chatgpt Integration</h3>
            <p className="text-gray-600">Create and edit content directly in our integrated code editor.</p>
          </div>
          <div className="text-center hover:bg-gray-200 p-4 rounded">
            <Image src="/user.png" alt="logo" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Personalized Data Management</h3>
            <p className="text-gray-600">Easily store and access your prompts, outputs, and profile data.</p>
          </div>
          <div className="text-center hover:bg-gray-200 p-4 rounded">
            <Image src="/shared-folder.png" alt="logo" width={60} height={60} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Download & Share with Ease</h3>
            <p className="text-gray-600">Quickly download or share your content in polished Word format.</p>
          </div>
        </section>
      </div>


     {/* Section#3 */}
    <section className="flex items-center justify-center min-h-screen p-10 bg-slate-100">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col justify-center p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
          AI that speaks your niche language
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Fast and minimal. Collect Ideas without distractions.
          </p>
          <Link href="/dashboard">
            <button className="bg-emerald-900 text-white py-3 px-6 rounded-lg">
              Try on Windows
            </button>
          </Link> 
        </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex items-center justify-center p-4">
            <Image 
              src="/dashboard.png" 
              alt="Notion App Screenshot" 
              layout="responsive"
              width={1200} 
              height={800} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <div>
      {/* Website Features */}
        <section className="flex flex-col items-center bg-slate-100 py-10 px-4 sm:px-10">
          {/* Container to hold both divs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* First Div */}
            <div className="flex flex-col justify-start items-start p-6 md:p-8 bg-gray-200 rounded-md shadow-lg w-full">
              <Image src="https://cdn-icons-png.flaticon.com/128/12625/12625038.png" alt="Icon" width={27} height={27} className="mb-3" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">Domain Specification</h3>
              <p className="text-gray-600 text-left mb-4">
                Now you can get the result of your Prompt according to your niche which you have selected. Get Specific answer to your domain.
              </p>
              <Image src="/Prompt.png" alt="Feature 1" width={600} height={600} className="mb-5" />
              <Image src="/Sectionniche.png" alt="Feature 1" width={600} height={600} className="mb-5" />
              <div className="flex items-center">
                <Image 
                  src="https://cdn-icons-png.flaticon.com/128/6894/6894621.png" 
                  alt="Icon" 
                  width={24} 
                  height={24} 
                  className="mr-2" 
                />
                <p className="text-gray-600 text-left">
                  From Multiple Templates based on niche you can select any of it.
                </p>
              </div>
            </div>

            {/* Second Div */}
            <div className="flex flex-col justify-start items-start p-6 md:p-8 bg-gray-200 rounded-md shadow-lg w-full">
              <Image src="https://cdn-icons-png.flaticon.com/128/732/732101.png" alt="Icon" width={27} height={27} className="mb-3" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-left">Prompt to Word Document</h3>
              <p className="text-gray-600 text-left mb-4">
                Here, you can brainstorm your ideas and get the result of your prompt directly into Word Text Editor.
              </p>
              <Image src="/Editingword.png" alt="Feature 1" width={600} height={600} className="mb-5" />
            </div>
          </div>
        </section>

        {/* From Author */}
        <section className="py-6 md:py-12 text-center mt-10 md:mt-20 px-4 bg-slate-100"> 
          {/* Quote Section */}
          <blockquote className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">
            “IdeaFlow AI helps you collect ideas specific to your niche.”
          </blockquote>
          <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-8">
            {/* Icon */}
            <Image 
              src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png" 
              alt="Author Icon" 
              width={40} 
              height={40} 
              className="mb-2 md:mb-0 md:mr-4"
            />
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-800">
                <a href="https://zakirmatloob.netlify.app/" className="text-emerald-800 hover:underline">Zakir Matloob</a>
              </p>
              <p className="text-gray-600">Developer of Product</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-6 md:mb-8 mt-10 md:mt-24">
            <Image 
              src="/notion.webp" 
              alt="Illustration" 
              width={300} 
              height={75} 
              className="mx-auto"
            />
          </div>

          {/* Heading and Subheading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Try <span className="text-emerald-800">IdeaFlow AI</span> on any Device
          </h2>

          <p className="text-gray-600">
            A faster, more focused experience awaits.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-slate-300 text-black py-2 px-6 rounded-lg flex items-center mt-3">
              <Image 
                src="https://cdn-icons-png.flaticon.com/128/17676/17676395.png" 
                alt="Illustration" 
                width={20} 
                height={20} 
                className="mr-2"
              />
              Try on Phone
            </button>
          </div>
        </section>
      </div>

        {/* footer Section */}
        <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Navbar, Hero Section, Features Section, etc. */}

      {/* Footer Section */}
      <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Navbar, Hero Section, Features Section, etc. */}
      
      {/* Main content area */}
      <main className="flex-grow">
        {/* Put all your content sections here */}
        {/* Example: */}
        {/* <HeroSection /> */}
        {/* <FeaturesSection /> */}
      </main>


          {/* last Section */}  

            <section className="flex items-center justify-center min-h-screen p-10 bg-slate-100">
              <div className="flex flex-col md:flex-row w-full max-w-7xl">
                {/* Left Side: Text Content */}
                <div className="flex-1 flex flex-col justify-center p-10">
                <h1 className="text-5xl md:text-3xl font-bold text-teal-900 mb-6">
                Get Started in Seconds
                <span className="text-sm md:text-md text-gray-500 px-6"> Deplpoyed on Vercel</span>
                </h1>

                
                  <p className="text-md md:text-xl text-gray-500 mb-6 mt-20">
                  React.js for a dynamic frontend and ShadCN for seamless component integration.
                  </p>

                  <p className="text-md md:text-xl text-gray-500 mb-6">
                  Used Next.js for fast, optimized server-side rendering and static site generation.
                  </p>

                  <p className="text-md md:text-xl text-gray-500 mb-6">
                  Used Clerk for seamless and secure authentication management.
                  </p>
                  <Link href="https://vercel.com/code-architects">
                    <button className="bg-emerald-900 text-white py-3 px-6 rounded-lg">
                      Deployed on Vercel
                    </button>
                  </Link> 
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 flex items-center justify-center p-4">
                  <Image 
                    src="/Nextjs.png" 
                    alt="Notion App Screenshot" 
                    layout="responsive"
                    width={1200} 
                    height={800} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>


              </div>
            </section>


      {/* Footer Section */}
              <footer className="bg-teal-800 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center text-center md:text-left">
                <img src="/logo.svg" alt="IdeaFlow AI Logo" className="h-13 w-11 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">IdeaFlow AI</h3>
                  {/* <p className="text-sm mt-2">
                    Revolutionizing content creation with advanced AI tools.
                  </p> */}
                </div>
              </div>
              <div className="flex space-x-8">
  <div className="text-sm">
    <h4 className="font-semibold">Product</h4>
    <ul className="mt-2 space-y-1">
      <li><Link href="/product/overview" className="hover:underline">Overview</Link></li>
      <li><Link href="/product/features" className="hover:underline">Features</Link></li>
      <li><Link href="/product/pricing" className="hover:underline">Pricing</Link></li>
    </ul>
  </div>
  
  <div className="text-sm">
    <h4 className="font-semibold">Services</h4>
    <ul className="mt-2 space-y-1">
      <li><Link href="/services/consulting" className="hover:underline">Chatgpt</Link></li>
      <li><Link href="/services/support" className="hover:underline">Text Editor</Link></li>
      <li><Link href="/services/integration" className="hover:underline">Word</Link></li>
    </ul>
  </div>

  <div className="text-sm">
    <h4 className="font-semibold">Privacy</h4>
    <ul className="mt-2 space-y-1">
      <li><Link href="/privacy-policy/data" className="hover:underline">Authentication</Link></li>
      <li><Link href="/privacy-policy/cookies" className="hover:underline">Cookies</Link></li>
      <li><Link href="/privacy-policy/security" className="hover:underline">Security</Link></li>
    </ul>
  </div>

  {/* <div className="text-sm">
    <h4 className="font-semibold">Terms of Service</h4>
    <ul className="mt-2 space-y-1">
      <li><Link href="/terms-of-service/usage" className="hover:underline">Usage</Link></li>
      <li><Link href="/terms-of-service/disclaimer" className="hover:underline">Disclaimer</Link></li>
      <li><Link href="/terms-of-service/liability" className="hover:underline">Liability</Link></li>
    </ul>
  </div> */}
</div>

            </div>
            <div className="text-left mt-6">
              <p className="text-sm">&copy; 2024 IdeaFlow AI. All rights reserved.</p>
            </div>
          </div>
        </footer>

    </div>



      
    </div>


          </div>
        );
      }
