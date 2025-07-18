import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import FilterForm from './Components/FilterForm';
import ExerciseDisplayCard from './Components/ExerciseDisplayCard';
import Loader from './Components/Loader';
import QuoteBanner from './Components/QuoteBanner';
import lock from './images/lock.jpg'





const App = () => { //setting default state values, here its exercise criteria
  const [filters, setFilters] = useState({
    equipment: '',
    difficulty: '',
    muscleGroup: ''
  });

  const [exercises, setExercises] = useState([]); //empty array for exercises
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes from FilterForm
  const handleInputChange = (e) => { //updates fiter object when a criteria is selected
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Main fetch function
  const fetchExercisesAndQuote = async () => {
    setIsLoading(true);
    try { //construct URLs with filter values
      const exerciseUrl = `https://get-exercise.p.rapidapi.com/exercises?muscle=${filters.muscleGroup}&equipment=${filters.equipment}`;
      //API headers for both endpoints
      const headersExercise = {
        'x-rapidapi-host': 'get-exercise.p.rapidapi.com',
        'x-rapidapi-key': 'c3d8cb067fmshaf0c608166a8a52p15b6cejsn6091b8c1053a'
      };

      const headersQuote = {
        'x-rapidapi-host': 'motivation-quotes4.p.rapidapi.com',
        'x-rapidapi-key': 'c3d8cb067fmshaf0c608166a8a52p15b6cejsn6091b8c1053a'
      };
      //parallel fetch calls
      const [exerciseRes, quoteRes] = await Promise.all([
        fetch(exerciseUrl, { method: 'GET', headers: headersExercise }),
        fetch('https://motivation-quotes4.p.rapidapi.com/api', {
          method: 'GET',
          headers: headersQuote
        })
      ]);
      //parse JSON functions
      const exerciseData = await exerciseRes.json();
      console.log(exerciseData);
      const quoteData = await quoteRes.json();

      //update state
      setExercises(exerciseData);
      setQuote(quoteData.quote || quoteData.text || 'Push through the doubt—progress starts here!');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  // Form submission handler
  //prevents default form behavior and initiates fetching based on current filter values
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExercisesAndQuote();
  };

  //displays form, loader while fetching, quote then exercise
  return (
    <Container className="app-background py-4">
      <h2 className="text-center mb-4">Fitness App</h2>

      <FilterForm
        filters={filters}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      {isLoading && <Loader />}
      {!isLoading && quote && <QuoteBanner quote={quote} />}
      {!isLoading && (
        <ExerciseDisplayCard
          exercises={exercises}
          quote={quote}
          isLoading={false}
        />
      )}
    </Container>
  );
};

export default App;

