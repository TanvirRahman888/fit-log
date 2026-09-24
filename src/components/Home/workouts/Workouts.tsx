
import WorkoutsCard from '@/components/workouts/WorkoutsCard';
import { iWorkout } from '@/types/workoutType';
import React from 'react';

const getData=async():Promise<iWorkout[]>=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    console.log(data);
    return data;
}


const Workouts = async () => {
    const getWorkoutsData= await getData();
    console.log(getWorkoutsData);
    return (
        <div className="container mx-auto my-16">
            <h2 className="text-4xl font-bold mb-4">THE LIBRARY</h2>
            <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                {
                    getWorkoutsData.map(workout=><WorkoutsCard key={workout.id} workout={workout}/>)
                }
            </div>
        </div>
    );
};

export default Workouts;