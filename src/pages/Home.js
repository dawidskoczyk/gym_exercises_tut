import React,{useEffect, useState} from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(['all'])
  console.log(bodyPart);
  useEffect(() => {
    console.log("Exercises state updated:", exercises);
  }, [exercises]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} 
      />
      <Exercises 
      exercises={exercises} 
      setExercises={setExercises}
      bodyPart={bodyPart}
      
      />
    </Box>
  )
}

export default Home