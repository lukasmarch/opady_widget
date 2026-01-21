import React, { useState } from 'react';
import WasteWidget from './components/WasteWidget';
import { wasteData } from './data/wasteSchedule';
import { getUpcomingWasteEvents } from './utils/dateUtils';

const availableTowns = Object.keys(wasteData);

// Ustawiamy datę symulacji na styczeń 2026, aby dane były widoczne
const SIMULATION_START_DATE = new Date(2026, 0, 5); 

function App() {
  const [selectedTown, setSelectedTown] = useState<string>("Żabiny");
  
  // Obliczamy nadchodzące wydarzenia dla wybranej miejscowości
  const upcomingEvents = getUpcomingWasteEvents(selectedTown, SIMULATION_START_DATE);

  const handleTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Wybór miejscowości (niezbędny do podglądu działania widgetu) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold text-gray-700">Wybierz miejscowość do podglądu:</span>
            </div>
            <select 
                value={selectedTown} 
                onChange={handleTownChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5 outline-none"
            >
                {availableTowns.map(town => (
                <option key={town} value={town}>{town}</option>
                ))}
            </select>
        </div>

        {/* Sam Widget Odbioru Odpadów */}
        <WasteWidget events={upcomingEvents} town={selectedTown} />

      </div>
    </div>
  );
}

export default App;