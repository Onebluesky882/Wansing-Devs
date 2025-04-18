import { ModeToggle } from "@/components/switchTheme";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  ">
      <ModeToggle />
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl text-primary sm:text-6xl font-bold mb-4">
          Hi, I'm Wansing{" "}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          FullStack Developer | UI/UX Enthusiast
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a passionate developer with a love for building interactive web
          experiences. I specialize in React, Next.js, and Tailwind CSS. My goal
          is to craft seamless and beautiful user interfaces.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white p-5 shadow-md rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">
                A short description of what the project is and what tech you
                used.
              </p>
              <a
                href="https://github.com/your/project"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                View Code →
              </a>
            </div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "React",
            "Next.js",
            "Tailwind",
            "Supabase",
            "Framer Motion",
            "Node.js",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Interested in working together? Let’s connect!
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Say Hello 👋
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
