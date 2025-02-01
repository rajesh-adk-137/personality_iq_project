import React from 'react';
import { useHistory } from 'react-router-dom';
import './TraitsDescription.css'; 

const traits = [
  {
    id: 1,
    name: 'Extroversion',
    description:
      'Energized by social interactions, they thrive in the company of others, drawing energy and enthusiasm from engaging with a diverse array of people and experiences.',
  },
  {
    id: 2,
    name: 'Introversion',
    description:
      'Finding solace in quiet contemplation, they derive energy from within, valuing deep introspection and selective, meaningful connections with a close-knit circle.',
  },
  {
    id: 3,
    name: 'Openness',
    description:
      'Embracing novelty and diversity, they approach life with open-mindedness, readily exploring new ideas and experiences with a sense of adventure.',
  },
  {
    id: 4,
    name: 'Conscientiousness',
    description:
      'Methodical and responsible, they excel in planning and executing tasks with precision, valuing order, and striving for high-quality outcomes.',
  },
  {
    id: 5,
    name: 'Agreeableness',
    description:
      'Harboring a compassionate and cooperative nature, they prioritize harmonious interactions, seeking to understand and support others in their pursuits.',
  },
  {
    id: 6,
    name: 'Optimism',
    description:
      'Maintaining a positive outlook, they face challenges with hope, exuding infectious enthusiasm and seeking solutions even in difficult situations.',
  },
  {
    id: 7,
    name: 'Assertiveness',
    description:
      'Confident and decisive, they take charge of situations, expressing opinions and desires clearly, with a strong sense of self-assurance.',
  },
  {
    id: 8,
    name: 'Empathy',
    description:
      'Understanding and sharing the feelings of others, they exhibit a deep compassion and sensitivity towards the emotions and experiences of those around them.',
  },
  {
    id: 9,
    name: 'Resilience',
    description:
      'Adapting and bouncing back in the face of adversity, they display strength in overcoming challenges, persisting and thriving amidst difficult circumstances.',
  },
  {
    id: 10,
    name: 'Curiosity',
    description:
      'Driven by an insatiable thirst for knowledge, they eagerly explore new ideas, perspectives, and experiences, continuously seeking to broaden their understanding.',
  },
  {
    id: 11,
    name: 'Adaptability',
    description:
      'Readily adjusting to changing circumstances, they embrace and thrive in new environments, demonstrating flexibility and ease in navigating transitions.',
  },
  {
    "id": 12,
    name: "Realism",
    description: "Practical and grounded in reality, individuals with this trait take a pragmatic approach to situations, focusing on practical solutions and having a clear understanding of what is achievable."
}

];

const TraitsDescription = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <div className="personality-traits-container">
      <button className="back-button" onClick={navigateBack}>
        Go Back
      </button>
      <div className="personality-traits">
        {traits.map((trait) => (
          <div key={trait.id} className="trait-card">
            <h3>{trait.name}</h3>
            <p>{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraitsDescription;
