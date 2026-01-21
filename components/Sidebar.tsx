import React from 'react';
import { LayoutDashboard, Newspaper, Calendar, CloudRain, Car, BarChart2, Zap } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0F172A] text-white flex-col hidden md:flex h-screen sticky top-0 left-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 p-1.5 rounded-md">
            <span className="font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">DziałdowoLive</h1>
            <span className="text-xs text-gray-400">Centrum Operacyjne</span>
          </div>
        </div>

        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium">
            <LayoutDashboard size={18} />
            Panel Główny
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <Newspaper size={18} />
            Wiadomości
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <Calendar size={18} />
            Wydarzenia
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <CloudRain size={18} />
            Pogoda i Jeziora
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <Car size={18} />
            Ruch Drogowy
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <BarChart2 size={18} />
            Statystyki GUS
          </a>
           <a href="#" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 hover:bg-slate-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            <Zap size={18} />
            Strefa Premium
          </a>
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-700">
         <p className="text-xs text-slate-500">© 2026 DziałdowoLive</p>
      </div>
    </div>
  );
};

export default Sidebar;
