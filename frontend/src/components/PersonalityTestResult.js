

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonalityTestResult.css';
import { useLocation, useHistory } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import './Error.css';

const PersonalityTestResult = () => {
  const location = useLocation();
  const selectedOptions = location.state ? location.state.selectedOptions : null;
  const history = useHistory();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedOptions && isLoggedIn) {
        try {
          const response = await axios.post('http://localhost:8000/api/result', {
            input_array: selectedOptions,
          });

          if (response.status === 200) {
            setResults(response.data.output_array);
          } else {
            throw new Error('Request failed');
          }
        } catch (error) {
          setError('Network request failed');
        } finally {
          setLoading(false);
        }
      } else {
        setError('Request data incomplete or user not logged in');
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedOptions, isLoggedIn]);

  const personalityTraits = results ? [
    { name: 'Extroversion', percentage: results[0] },
    { name: 'Introversion', percentage: results[1] },
    { name: 'Openness', percentage: results[2] },
    { name: 'Conscientiousness', percentage: results[3] },
    { name: 'Agreeableness', percentage: results[4] },
    { name: 'Optimism', percentage: results[5] },
    { name: 'Assertiveness', percentage: results[6] },
    { name: 'Empathy', percentage: results[7] },
    { name: 'Resilience', percentage: results[8] },
    { name: 'Curiosity', percentage: results[9] },
    { name: 'Adaptability', percentage: results[10] },
    { name: 'Realism', percentage: results[11] },
  ] : [];
  
  const data = personalityTraits.map((trait, index) => ({
    name: `Trait ${index + 1} `,
    value: trait.percentage,
  }));
  
  const barColor = '#8884d8'; // Original purple color
  


  return (
    <div className="personality-test-result">
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="errorStyle">
          <h1 className="headingStyle">Something went wrong!</h1>
          <p className="paragraphStyle">{error}</p>
          <Link to="/" className="linkStyle">Go to Home</Link>
        </div>
      )}

      {!loading && !error && results && (
         <div className="container">
         <div className="chart-traits-container">
           <div className="chart-container">
             <h1 className="chart-title">Personality Traits Chart</h1>
             <ResponsiveContainer width="100%" height={400}>
               <BarChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="value" fill={barColor} /> {/* Set the bar color to original purple */}
               </BarChart>
             </ResponsiveContainer>
           </div>
   
           <div className="traits-container">
  <h2 className="traits-title">Personality Traits</h2>
  <ul className="traits-list">
    {personalityTraits.map((trait, index) => (
      <li key={index}>
        <span className="list-number">{index + 1}.</span>
        <span className="trait-text">{trait.name}</span>
      </li>
    ))}
  </ul>

  <div className="button-container">
    <Link to="/traits">
      <button className="home-button2">
        See more..
      </button>
    </Link>
  </div>
</div>

         </div>
   
         <div className="button-container">
         <Link to="/">
<button className="home-button">
  Go to Home
</button>
</Link>
         </div>
       </div>
      )}
    </div>
  );
};

export default PersonalityTestResult;
