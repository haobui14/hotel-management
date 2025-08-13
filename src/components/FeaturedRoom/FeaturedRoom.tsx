import { FC } from "react";
import Image from "next/image";

import { Room } from "@/models/room";
import Link from "next/link";

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = (props) => {
  const { featuredRoom } = props;

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Featured Room
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-16">
        {/* Images Section */}
        <div className="flex-1 space-y-6">
          <div className="rounded-3xl overflow-hidden h-80 shadow-2xl group">
            <Image
              src={featuredRoom.coverImage.url}
              alt={`${featuredRoom.name} - Featured luxury hotel room`}
              width={600}
              height={400}
              className="img scale-animation group-hover:scale-110"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 h-48">
            {featuredRoom.images.slice(1, 3).map((image) => (
              <div
                key={image._key}
                className="rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={image.url}
                  alt={image._key}
                  width={300}
                  height={200}
                  className="img scale-animation group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {featuredRoom.name}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              {featuredRoom.description}
            </p>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Starting From
                </p>
                <p className="text-3xl md:text-4xl font-bold text-rose-600">
                  ${featuredRoom.price}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  per night
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  You Save
                </p>
                <p className="text-3xl md:text-4xl font-bold text-emerald-600">
                  ${featuredRoom.discount}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  discount
                </p>
              </div>
            </div>

            <Link
              href={`/rooms/${featuredRoom.slug.current}`}
              className="block w-full text-center bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Details & Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
