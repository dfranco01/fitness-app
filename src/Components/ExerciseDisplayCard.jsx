import React from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
/*exercises: an array of exercise objects fetched from API
    quote: a string representing motivational quote
    isLoading: Indicates if API call is in progress (used to conditionally show loader) */

const ExerciseDisplayCard = ({ exercises, quote, isLoading }) => {
  return (
    
    <Card className="mt-4 p-3 shadow-sm">
      {isLoading ? (
        <div className="text-center">
            {/*If isLoading is true, show a BootStrap spinner and loading msg */}
          <Spinner animation="border" variant="primary" />
          <Card.Text className="mt-2">Loading your workout...</Card.Text>
        </div>
      ) : exercises.length === 0 ? ( 
        /**If exercise.length == 0, display only welcome msg, else display exercise names */
        <Card.Text>Welcome to Fitness App, let's get to work </Card.Text>
      ) : (
        <>
          <Card.Text className="fst-italic text-success">“{quote}”</Card.Text>
          {Array.isArray(exercises) && exercises.length > 0 ? (
            exercises.map((exercise, index) => (
                <Button key={index} className="m-1" variant="outline-dark">
                {exercise.name || "unnamed Exercise"}
                </Button>
          ))
            ) : (
                    <Card.Text>No exercises found. Try different filters.</Card.Text>
                )
            }
        </>
      )}
    </Card>
  );
};

export default ExerciseDisplayCard;
