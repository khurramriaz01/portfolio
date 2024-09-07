import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';


export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans text-white bg-black relative">
      {/* Background dots */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(100)].map((_, i) => (
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
      
      <main className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg lg:col-span-1">
            <h1 className="text-4xl font-bold mb-4">Khurram Bhutto</h1>
            <p className="text-lg text-gray-400 mb-4">
              AI Enthusiast | Python Programmer | Bachelor's Student in Artificial Intelligence
            </p>
            <p className="text-gray-500 mb-4">
              National University of Technology (NUTECH)
            </p>
            <p className="text-gray-500 mb-4">
              Currently exploring AI applications in real-world scenarios
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/khurrambhutto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="https://github.com/khurrambhutto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/khurram-bhutto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">What have I been up to?</h2>
            <p className="text-gray-300 mb-4">
              As I approach the end of my third year in Artificial Intelligence at NUTECH, I've been deeply involved in cutting-edge AI projects. I'm currently working on developing a machine learning model that can predict and optimize energy consumption in smart homes, combining my passion for AI with practical, real-world applications.
            </p>
            <p className="text-gray-300 mb-4">
              I've also been collaborating with a team on an exciting natural language processing project, aiming to improve sentiment analysis in multiple languages. This project has not only enhanced my technical skills but also my ability to work in a diverse, cross-functional team.
            </p>
            <p className="text-gray-300">
              If you're interested in AI, machine learning, or just want to chat about the latest tech trends, feel free to reach out. I'm always excited to connect with fellow enthusiasts and professionals in the field!
            </p>
            <p className="text-gray-500 mt-4 text-sm">Last updated: 15th June 2023</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Smart Home Energy Optimization</h3>
            <p className="text-gray-400 mb-4">
              Developed a machine learning model to predict and optimize energy consumption in smart homes. The project uses IoT sensor data and weather forecasts to provide real-time energy-saving recommendations.
            </p>
            <p className="text-gray-500">Technologies: Python, TensorFlow, IoT, Time Series Analysis</p>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Multilingual Sentiment Analysis</h3>
            <p className="text-gray-400 mb-4">
              Created a natural language processing model capable of performing sentiment analysis across multiple languages. The model uses transfer learning techniques to adapt to new languages with minimal training data.
            </p>
            <p className="text-gray-500">Technologies: Python, PyTorch, Transformers, NLP</p>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Chess Opponent</h3>
            <p className="text-gray-400 mb-4">
              Implemented a chess AI using reinforcement learning techniques. The AI can play at various difficulty levels and adapts its strategy based on the opponent's playing style.
            </p>
            <p className="text-gray-500">Technologies: Python, TensorFlow, Reinforcement Learning</p>
          </div>
          <div className="bg-[rgb(26,26,26)] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Automated Essay Grading System</h3>
            <p className="text-gray-400 mb-4">
              Developed an AI-based system for automatically grading essays. The system evaluates various aspects such as grammar, coherence, and relevance to the topic using natural language processing techniques.
            </p>
            <p className="text-gray-500">Technologies: Python, NLTK, Scikit-learn, NLP</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:khurram.bhutto@example.com" className="text-gray-400 hover:text-white transition-colors">
              <MailIcon className="w-8 h-8" />
            </a>
            <a href="https://github.com/khurrambhutto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/khurram-bhutto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[rgb(26,26,26)] py-6 mt-16 relative z-10">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© 2023 Khurram Bhutto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
