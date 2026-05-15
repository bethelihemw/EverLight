import React from 'react';
import '../index.css';

function Programs() {
  const programData = [
    {
      id: 1,
      age: "Infant & Toddler",
      title: "Seedlings Program",
      description: "A warm, nurturing space focusing on sensory exploration, motor development, and secure emotional attachments.",
      duration: "Full-time / Part-time",
      icon: "🌱"
    },
    {
      id: 2,
      age: "3 - 4 Years",
      title: "Sprouts Kindergarten",
      description: "Fostering initial social communication, foundational language arts, numbers, and creative expression through structured play.",
      duration: "8:30 AM - 12:30 PM",
      icon: "🌿"
    },
    {
      id: 3,
      age: "4 - 5 Years",
      title: "Everlight Preschool",
      description: "Advanced preparation for primary school. Focuses on early literacy, math logic, science experiments, and collaborative team play.",
      duration: "8:30 AM - 3:30 PM",
      icon: "☀️"
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="programs-header">
        <span className="programs-badge">OUR PROGRAMS</span>
        <h2 className="programs-title">Explore Our Learning Pathways</h2>
        <p className="programs-subtitle">
          Tailored curriculums designed to respect individual developmental paces while inspiring academic and creative brilliance.
        </p>
      </div>

      <div className="programs-grid">
        {programData.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-icon-wrapper">
              <span className="program-card-icon">{program.icon}</span>
            </div>
            
            <span className="program-age-tag">{program.age}</span>
            <h3 className="program-card-title">{program.title}</h3>
            <p className="program-card-desc">{program.description}</p>
            
            <div className="program-footer">
              <span className="program-schedule">🕒 {program.duration}</span>
              <button className="program-learn-btn">Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;