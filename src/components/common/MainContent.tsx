'use client'

import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h2), { ssr: false });

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { 
        duration: 1,
        ease: "easeOut"
    }
};

const staggerChildren = {
    initial: {},
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3
        }
    }
};

const MainContent = ({ lang, locale }: { lang: string; locale: any }) => {
    return (
        <main className="w-full bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <MotionDiv
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] via-white to-[#F5F5F5]"
                >
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <MotionDiv 
                            className="max-w-3xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        >
                            <h1 className="text-6xl md:text-7xl font-serif text-[#333333] mb-8 tracking-tight">
                                {locale.hero.heading}
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-[#666666] mb-8 font-light tracking-wide">
                                {locale.hero.subheading}
                            </h2>
                            <p className="text-lg md:text-xl text-[#666666] mb-12 font-light leading-relaxed">
                                {locale.hero.description}
                            </p>
                            <MotionButton
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    // 平滑滚动到 collection 区域
                                    document.getElementById('collection')?.scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                                className="px-12 py-4 bg-[#333333] text-white 
                                        hover:bg-black
                                        transition-all duration-300 text-sm tracking-widest uppercase"
                            >
                                {locale.hero.cta}
                            </MotionButton>
                        </MotionDiv>
                    </div>
                </MotionDiv>
            </section>

            {/* Brand Story */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerChildren}
                        className="max-w-4xl mx-auto"
                    >
                        <MotionH2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-serif text-center mb-16 tracking-wide text-[#333333]"
                        >
                            {locale.brand.title}
                        </MotionH2>
                        <MotionP
                            variants={fadeInUp}
                            className="text-lg leading-relaxed text-[#666666] mb-12 font-light"
                        >
                            {locale.brand.description}
                        </MotionP>
                        <MotionP
                            variants={fadeInUp}
                            className="text-lg leading-relaxed text-[#666666] font-light"
                        >
                            {locale.brand.vision}
                        </MotionP>
                    </MotionDiv>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-[#F5F5F5]">
                <div className="container mx-auto px-4">
                    <MotionH2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-center mb-24 tracking-wide text-[#333333]"
                    >
                        {locale.features.title}
                    </MotionH2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {locale.features.items.map((feature: any, index: number) => (
                            <MotionDiv
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white p-8 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl font-serif mb-6 tracking-wide text-[#333333]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#666666] font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collection */}
            <section id="collection" className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="text-center mb-24"
                    >
                        <MotionH2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-serif mb-8 tracking-wide text-[#333333]"
                        >
                            {locale.collection.title}
                        </MotionH2>
                        <MotionH2
                            variants={fadeInUp}
                            className="text-lg text-[#666666] font-light"
                        >
                            {locale.collection.description}
                        </MotionH2>
                    </MotionDiv>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {locale.collection.categories.map((category: string, index: number) => (
                            <MotionDiv
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="aspect-square bg-[#F5F5F5] 
                                         flex items-center justify-center text-lg font-serif cursor-pointer
                                         transition-all duration-300 hover:bg-[#EEEEEE]"
                            >
                                <span className="tracking-widest text-[#333333]">{category}</span>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-32 bg-[#F5F5F5]">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <MotionH2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-serif mb-12 tracking-wide text-[#333333]"
                        >
                            {locale.mission.title}
                        </MotionH2>
                        <MotionP 
                            variants={fadeInUp}
                            className="text-lg leading-relaxed mb-8 font-light text-[#666666]"
                        >
                            {locale.mission.description}
                        </MotionP>
                        <MotionP
                            variants={fadeInUp}
                            className="text-lg leading-relaxed italic font-light text-[#666666]"
                        >
                            {locale.mission.vision}
                        </MotionP>
                    </MotionDiv>
                </div>
            </section>
        </main>
    );
};

export default MainContent;