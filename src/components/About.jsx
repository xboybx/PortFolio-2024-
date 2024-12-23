import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';

function About() {
  const skills = [
    'Html',
    'Css',
    'JavaScript',
    'React',
    'MongoDB',
    'Sql',
    'Python',
    'express.js',
  ];

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="blur-dot w-[500px] h-[500px] left-0 top-0" />
      <div className="blur-dot-secondary w-[500px] h-[500px] right-0 bottom-0" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-[var(--text)] mb-6">
              I'm a forward-thinking software developer with expertise in HTML,
              CSS, JavaScript, Python, and React, complemented by knowledge of
              SQL and MongoDB. I've also explored backend development with
              Express.js and successfully built projects like a user login and
              registration system using Passport.js. Recently, I've been
              leveraging AI tools to accelerate my development process,
              including creating a comprehensive student attendance system.
              While I'm on my journey to mastering full-stack development, I'm
              driven by a passion for learning and creating impactful solutions.
              Let's turn ideas into reality!
            </p>
            <p className="text-[var(--text)] mb-6">
              When I'm not coding, you can find me exploring new technologies,
              and also exploring my Passions, one of them is making Music
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;