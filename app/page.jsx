"use client"

// import SelectCity from "../components/SelectCity"
import SearchCity from "../components/SearchCity"


export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-100 to-blue-300 text-gray-800">
      <div className="text-center space-y-6">
        
        <h1 className="text-4xl md:text-5xl font-bold">🌦️ Welcome to ABI Weather App</h1>
        
        <p className="text-lg md:text-xl text-gray-700">
          Your simple and smart weather companion.
        </p>


        <div className="gap-4 justify-center mt-8">
          {/* <SelectCity /> // Select city from a dropdown menu. Hardcoded */}
          <SearchCity />
        </div>
      </div>
    </main>
  );
}
