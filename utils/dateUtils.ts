import { WasteEvent, WasteSchedule } from '../types';
import { wasteData } from '../data/wasteSchedule';

// Helper to parse "DD.MM.YYYY" to Date object
export const parseDate = (dateStr: string): Date | null => {
  if (!dateStr || dateStr.trim() === '' || dateStr === 'Brak odbioru') return null;
  
  const parts = dateStr.trim().split('.');
  if (parts.length !== 3) return null;
  
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed in JS
  const year = parseInt(parts[2], 10);
  
  return new Date(year, month, day);
};

// Calculate events for a specific town
export const getUpcomingWasteEvents = (town: string, currentDate: Date = new Date()): WasteEvent[] => {
  const schedule = wasteData[town];
  if (!schedule) return [];

  const events: WasteEvent[] = [];

  // Reset time part of current date for accurate comparison
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0);

  Object.entries(schedule).forEach(([type, datesString]) => {
    // Some entries might be "Brak odbioru"
    if (datesString === "Brak odbioru") return;

    const dateStrings = datesString.split(',').map(s => s.trim());
    
    // Find the next upcoming date
    let nextDateObj: Date | null = null;
    let upcomingDateString = '';

    for (const dateStr of dateStrings) {
      const parsed = parseDate(dateStr);
      if (parsed) {
        // We look for dates today or in future
        if (parsed >= today) {
          nextDateObj = parsed;
          upcomingDateString = dateStr;
          break; // Since dates are sorted chronologically in the JSON, the first match is the soonest
        }
      }
    }

    if (nextDateObj) {
       const timeDiff = nextDateObj.getTime() - today.getTime();
       const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

       events.push({
         type,
         date: nextDateObj,
         daysRemaining,
         originalDateString: upcomingDateString
       });
    }
  });

  // Sort by soonest
  return events.sort((a, b) => a.daysRemaining - b.daysRemaining);
};
