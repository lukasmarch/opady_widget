import React from 'react';
import { Sun, Cloud, Wind, ArrowRight, MapPin, Video } from 'lucide-react';

export const WeatherWidget = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-bold text-gray-900 text-sm">Pogoda i Woda</h3>
      <span className="text-xs text-gray-400">Rybno</span>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-900">22°C</div>
        <div className="text-sm text-gray-500">Słonecznie</div>
      </div>
      <Sun className="text-yellow-400" size={48} />
    </div>
    <div className="flex gap-2 mt-4">
      <div className="bg-blue-50 p-2 rounded w-full text-center">
        <div className="text-[10px] text-blue-400 font-bold uppercase">Wilgotność</div>
        <div className="text-sm font-bold text-blue-700">45%</div>
      </div>
       <div className="bg-teal-50 p-2 rounded w-full text-center">
        <div className="text-[10px] text-teal-400 font-bold uppercase">Wiatr</div>
        <div className="text-sm font-bold text-teal-700">12 km/h</div>
      </div>
    </div>
  </div>
);

export const TrafficWidget = () => (
  <div className="bg-slate-900 text-white rounded-xl shadow-sm border border-slate-800 p-5 mt-4">
    <div className="flex justify-between items-center mb-4">
       <div>
         <h3 className="font-bold text-sm">Rybno Traffic</h3>
         <div className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            MONITORING AKTYWNY
         </div>
       </div>
       <Video size={16} className="text-slate-500" />
    </div>

    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
        <div className="flex justify-between mb-1">
            <span className="text-xs font-bold">Rybno -> Działdowo (DW538)</span>
            <span className="text-xs font-bold text-green-400">25 min</span>
        </div>
        <div className="text-[10px] text-slate-400">Płynnie • Brak utrudnień</div>
      </div>
      <div className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
        <div className="flex justify-between mb-1">
            <span className="text-xs font-bold">Rybno -> Iława</span>
            <span className="text-xs font-bold text-green-400">50 min</span>
        </div>
        <div className="text-[10px] text-slate-400">Płynnie • Dobra widoczność</div>
      </div>
    </div>
  </div>
);

export const NewsWidget = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mt-4">
     <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-gray-900 text-sm">Najnowsze Wiadomości</h3>
      <a href="#" className="text-xs text-blue-600 flex items-center gap-1 hover:underline">
        Wszystkie <ArrowRight size={12} />
      </a>
    </div>

    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/100/100?random=1)'}}></div>
        <div>
          <div className="text-[10px] text-blue-600 font-bold mb-0.5">GMINA RYBNO</div>
          <h4 className="text-sm font-bold text-gray-900 leading-snug hover:text-blue-600 cursor-pointer">Nowa inwestycja drogowa w gminie Rybno zakończona sukcesem.</h4>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/100/100?random=2)'}}></div>
        <div>
          <div className="text-[10px] text-blue-600 font-bold mb-0.5">DZIAŁDOWO</div>
          <h4 className="text-sm font-bold text-gray-900 leading-snug hover:text-blue-600 cursor-pointer">Dni Działdowa 2026 - ogłoszono gwiazdy wieczoru.</h4>
        </div>
      </div>
    </div>
  </div>
);
