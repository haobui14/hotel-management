"use client";

import { FC } from "react";

import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;
  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-6 items-center gap-8 lg:gap-12 container mx-auto min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="flex-1 py-6 sm:py-8 lg:py-10 h-full">
        {/* Heading */}
        {heading1}

        {/* Room Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-lg sm:text-2xl">🏨</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">
              Basic Rooms
            </p>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600">
              <CountUpNumber duration={3000} endValue={120} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-rose-100 dark:bg-rose-900 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-lg sm:text-2xl">🌟</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">
              Luxury Rooms
            </p>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-600">
              <CountUpNumber duration={3000} endValue={80} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-amber-100 dark:bg-amber-900 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-lg sm:text-2xl">👑</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">
              Premium Suites
            </p>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600">
              <CountUpNumber duration={3000} endValue={60} />
            </div>
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="flex-1 w-full lg:block">{section2}</div>
    </section>
  );
};

export default ClientComponent;
