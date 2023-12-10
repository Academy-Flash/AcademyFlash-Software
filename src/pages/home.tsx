import { Group } from "@/components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { SearchDecks } from "@/components/_ui/SearchDecks";
import logo from "/img/Ricardinho.png";


import React from 'react';
import Header from '@/components/_ui/HomePage/Header';
import Footer from '@/components/_ui/HomePage/Footer';
import FirstSection from "@/components/_ui/HomePage/FirstSection";
import SecondSection from "@/components/_ui/HomePage/SecondSection";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans w-[100%] h-[100%]">
    <Header />
    <main className="w-[100%] h-full p-6 overflow-y-auto">
      <FirstSection />
      <SecondSection />
      
    </main>
    <Footer />
  </div>
  );
};

export default HomePage;