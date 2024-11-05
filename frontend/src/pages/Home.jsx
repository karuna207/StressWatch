import React from 'react' 

const sampleData = {
    averageStressLevel: 2.5,
    stressDistribution: {
        low: 20,
        normal: 30,
        medium: 25,
        high: 25,
    },
    userStats: [
        { id: 'User1', avgStress: 2.0, avgHeartRate: 70, nightsTracked: 10 },
        { id: 'User2', avgStress: 3.0, avgHeartRate: 75, nightsTracked: 8 },
        // Add more user stats as needed
    ],
    sleepPatterns: [
        { date: '2024-11-01', hours: 6, stress: 2 },
        { date: '2024-11-02', hours: 7, stress: 3 },
        { date: '2024-11-03', hours: 5, stress: 4 },
        // Add more sleep data as needed
    ],
};

const Home = () => { 
    const { averageStressLevel, stressDistribution, userStats, sleepPatterns } = sampleData;

    // Calculate total nights tracked and overall stress levels
    const totalNightsTracked = userStats.reduce((acc, user) => acc + user.nightsTracked, 0);
    const stressCategories = Object.entries(stressDistribution); 

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Stress Detection Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Average Stress Level</h2>
                    <div className="text-2xl font-bold">{averageStressLevel.toFixed(2)}</div>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Stress Level Distribution</h2>
                    {stressCategories.map(([level, percentage]) => (
                        <div key={level} className="flex justify-between">
                            <span>{level}</span>
                            <span>{percentage}%</span>
                        </div>
                    ))}
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Total Nights Tracked</h2>
                    <div className="text-2xl font-bold">{totalNightsTracked}</div>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
                <h2 className="text-lg font-semibold">User Insights</h2>
                <table className="min-w-full mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4">User ID</th>
                            <th className="py-2 px-4">Avg Stress</th>
                            <th className="py-2 px-4">Avg Heart Rate</th>
                            <th className="py-2 px-4">Nights Tracked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userStats.map(user => (
                            <tr key={user.id} className="border-b">
                                <td className="py-2 px-4">{user.id}</td>
                                <td className="py-2 px-4">{user.avgStress}</td>
                                <td className="py-2 px-4">{user.avgHeartRate}</td>
                                <td className="py-2 px-4">{user.nightsTracked}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
                <h2 className="text-lg font-semibold">Sleep Patterns</h2>
                <table className="min-w-full mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Hours of Sleep</th>
                            <th className="py-2 px-4">Stress Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sleepPatterns.map(data => (
                            <tr key={data.date} className="border-b">
                                <td className="py-2 px-4">{data.date}</td>
                                <td className="py-2 px-4">{data.hours}</td>
                                <td className="py-2 px-4">{data.stress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
 


// import React from 'react';

// // Sample data (you'll replace this with real data from your model)


// const Dashboard = () => {
//     const { averageStressLevel, stressDistribution, userStats, sleepPatterns } = sampleData;

//     // Calculate total nights tracked and overall stress levels
//     const totalNightsTracked = userStats.reduce((acc, user) => acc + user.nightsTracked, 0);
//     const stressCategories = Object.entries(stressDistribution);

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             <h1 className="text-2xl font-bold mb-6">Stress Detection Analytics Dashboard</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-semibold">Average Stress Level</h2>
//                     <div className="text-2xl font-bold">{averageStressLevel.toFixed(2)}</div>
//                 </div>
                
//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-semibold">Stress Level Distribution</h2>
//                     {stressCategories.map(([level, percentage]) => (
//                         <div key={level} className="flex justify-between">
//                             <span>{level}</span>
//                             <span>{percentage}%</span>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-semibold">Total Nights Tracked</h2>
//                     <div className="text-2xl font-bold">{totalNightsTracked}</div>
//                 </div>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
//                 <h2 className="text-lg font-semibold">User Insights</h2>
//                 <table className="min-w-full mt-4">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="py-2 px-4">User ID</th>
//                             <th className="py-2 px-4">Avg Stress</th>
//                             <th className="py-2 px-4">Avg Heart Rate</th>
//                             <th className="py-2 px-4">Nights Tracked</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userStats.map(user => (
//                             <tr key={user.id} className="border-b">
//                                 <td className="py-2 px-4">{user.id}</td>
//                                 <td className="py-2 px-4">{user.avgStress}</td>
//                                 <td className="py-2 px-4">{user.avgHeartRate}</td>
//                                 <td className="py-2 px-4">{user.nightsTracked}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
//                 <h2 className="text-lg font-semibold">Sleep Patterns</h2>
//                 <table className="min-w-full mt-4">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="py-2 px-4">Date</th>
//                             <th className="py-2 px-4">Hours of Sleep</th>
//                             <th className="py-2 px-4">Stress Level</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {sleepPatterns.map(data => (
//                             <tr key={data.date} className="border-b">
//                                 <td className="py-2 px-4">{data.date}</td>
//                                 <td className="py-2 px-4">{data.hours}</td>
//                                 <td className="py-2 px-4">{data.stress}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
