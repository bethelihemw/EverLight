import React from 'react';
import '../index.css';

function Programs() {
  const pathways = [
    {
      id: 1,
      step: "01",
      age: "Ages 3 - 4 Years",
      title: "Nursery Playgroup",
      subtitle: "Foundational Socialization & Creative Expression",
      description: "A highly interactive environment focusing on language arts, sensory immersion, and building core social confidence. Children learn to share, communicate, and explore safely through daily structured play themes.",
      highlights: ["✨ Sensory Art & Textures", "🎨 Gross Motor Play", "🗣️ Early Phonics Sounds"],
      color: "#ff6b00",
      isReversed: false
    },
    {
      id: 2,
      step: "02",
      age: "Ages 4 - 5 Years",
      title: "Junior Kindergarten",
      subtitle: "Introduction to Structured Academic Discovery",
      description: "Moving into more focused cognitive tracking. Here, our educators introduce basic mathematical logic puzzles, alphabet writing paths, and group collaborative story projects to foster peer teamwork.",
      highlights: ["🧩 Basic Math Foundations", "📝 Guided Writing Tracks", "🎭 Storytelling & Drama"],
      color: "#0a2540",
      isReversed: true
    },
    {
      id: 3,
      step: "03",
      age: "Ages 5 - 6 Years",
      title: "Senior Kindergarten",
      subtitle: "Advanced Graduation & Primary School Preparation",
      description: "Our capstone stream focused heavily on establishing analytical and reading independence. Children engage with introductory tech play, elementary scientific experiments, and advanced vocabulary structures.",
      highlights: ["🚀 Primary School Readiness", "🔬 STEM Activity Labs", "📚 Independent Reading Skills"],
      color: "#9333ea",
      isReversed: false
    }
  ];

  return (
    <section id="programs" className="programs-flow-section">
      {/* Structural Accent Lines in Background */}
      <div className="flow-bg-axis"></div>

      <div className="programs-flow-header">
        <span className="flow-badge">LEARNING PATHWAYS</span>
        <h2 className="flow-title">Our Three Pillars of Growth</h2>
        <p className="flow-subtitle">
          Moving away from rigid blocks, our pathways adapt seamlessly to your child's age group milestones.
        </p>
      </div>
      <div className="playful-shape shape-blob-orange"></div>
      <div className="playful-shape shape-blob-purple"></div>
      <div className="pathways-flow-stack">
        {pathways.map((path) => (
          <div 
            key={path.id} 
            className={`flow-row ${path.isReversed ? 'row-reversed' : ''}`}
            style={{ '--deep-blue': '--deep-blue' }}
          >
            {/* Visual Step Column */}
            <div className="flow-meta-side">
              <div className="step-number-pill">{path.step}</div>
              <span className="flow-age-text">{path.age}</span>
            </div>

            {/* Central Node Indicator */}
            <div className="flow-timeline-node">
              <div className="node-dot"></div>
            </div>

            {/* Narrative Content Column */}
            <div className="flow-content-side">
              <h3 className="flow-item-title">{path.title}</h3>
              <h4 className="flow-item-subtitle">{path.subtitle}</h4>
              <p className="flow-item-desc">{path.description}</p>
              
              <div className="flow-highlights-list">
                {path.highlights.map((item, idx) => (
                  <span key={idx} className="flow-tag">{item}</span>
                ))}
              </div>
              
              <a href="#contact" className="flow-action-link">
                Request Enrollment Guide <span className="arrow">→</span>
              </a>
            </div>
            <div className="playful-shape shape-blob-orange1"></div>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Programs;