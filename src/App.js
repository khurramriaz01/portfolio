import React from 'react'

const Link = ({ href, children, className }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function Portfolio() {
  const skills = ["Python", "C++", "Java", "SQL", "JavaScript", "Prompt Engineering"]

  return (
    <div className="min-h-screen font-sans text-white bg-black relative p-8">
      {/* Background dots */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <main className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg lg:col-span-1 flex flex-col justify-between relative">
            <div className="flex items-center space-x-2 text-sm mb-8">
              <Link href="https://www.linkedin.com/in/khurram-bhutto" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                <span>LinkedIn</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="https://github.com/khurramriaz01" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                <span>Github</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="https://x.com/khurram_bhutto" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                <span>X</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center flex-grow">
              <h1 className="text-4xl font-bold mb-4">Khurram Bhutto</h1>
            </div>
            <div className="flex flex-col items-start mt-4">
              <p className="text-lg text-gray-400 mb-2">
                BS AI @ <Link href="https://nutech.edu.pk/" className="text-gray-400 hover:text-white transition-colors duration-300">NUTECH</Link>
              </p>
              <p className="text-gray-500">
                Currently delving into the world of AI.
              </p>
            </div>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg lg:col-span-2 relative">
            <h2 className="text-3xl font-bold mb-4">What have I been up to?</h2>
            <p className="text-gray-300 mb-4">
              As a third-semester student in my second year majoring in Artificial Intelligence at NUTECH, I've been diving into the fascinating world of AI. Currently, I'm honing my skills in prompt engineering and working hard to understand the backend of AI by exploring machine learning and deep learning concepts. Alongside this, I'm working on cool Python projects and learning data structures and algorithms (DSA) to build a strong foundation in computer science. Outside of academics, I enjoy playing table tennis, chess, and I'm an avid reader in my free time.
            </p>
            <p className="text-gray-300">
              Feel free to reach out if you're into AI, machine learning, or just want to discuss some interesting tech trends. I'd love to connect with like-minded individuals!
            </p>
            <p className="text-gray-500 mt-4 text-sm absolute bottom-4 right-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[rgb(26,26,26)] px-6 py-3 rounded-full text-base font-bold">
              {skill}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Hotel Management System</h3>
            <p className="text-gray-400 mb-4">
              We developed a fully functional hotel management system integrated with a database, applying object-oriented programming concepts to create an efficient and scalable system.
            </p>
            <p className="text-gray-500">Technologies: Java, SQL</p>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Car Game</h3>
            <p className="text-gray-400 mb-4">
              A game where the car dodges obstacles coming from above, built using C++.
            </p>
            <p className="text-gray-500">Technologies: C++</p>
          </div>
        </div>
      </main>
    </div>
  )
}