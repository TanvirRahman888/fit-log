import WorkoutsCard from '@/components/workouts/WorkoutsCard';
import { iWorkout } from '@/types/workoutType';
import React from 'react';
const getData=async():Promise<iWorkout[]>=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    console.log(data);
    return data;
}
const WorkoutsPage = async() => {
    const getWorkoutsData= await getData();
    console.log(getWorkoutsData);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    getWorkoutsData.map(workout=><WorkoutsCard key={workout.id} workout={workout}/>)
                }
            </div>
        </div>
    );
};

export default WorkoutsPage;