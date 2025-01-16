import React from 'react';
import { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
  weather: WeatherData;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{weather.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-600">{weather.weather[0].description}</p>
        </div>
        <div className="text-right">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="inline-block"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Feels like</p>
          <p className="font-semibold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="text-gray-600">Humidity</p>
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};