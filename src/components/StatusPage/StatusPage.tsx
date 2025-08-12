"use client";

import { ReactNode } from "react";
import { MdHome, MdRefresh } from "react-icons/md";
import Link from "next/link";

interface StatusPageProps {
  icon: ReactNode;
  title: string;
  description: string;
  statusCode?: string;
  actionButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  helpfulLinks?: Array<{
    text: string;
    href: string;
  }>;
}

const StatusPage = ({
  icon,
  title,
  description,
  statusCode,
  actionButton,
  secondaryButton,
  helpfulLinks,
}: StatusPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Status Icon */}
        <div className="mx-auto mb-8">
          <div className="h-24 w-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            {icon}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
          {/* Status Code */}
          {statusCode && (
            <div className="mb-6">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                {statusCode}
              </h1>
            </div>
          )}

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {description}
          </p>

          {/* Action Buttons */}
          {(actionButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              {actionButton && (
                <>
                  {actionButton.href ? (
                    <Link
                      href={actionButton.href}
                      className={`flex items-center px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-4 transform hover:scale-105 transition-all duration-300 shadow-lg ${
                        actionButton.variant === "secondary"
                          ? "border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:ring-amber-500/50"
                          : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 focus:ring-amber-500/50"
                      }`}
                    >
                      {actionButton.text}
                    </Link>
                  ) : (
                    <button
                      onClick={actionButton.onClick}
                      className={`flex items-center px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-4 transform hover:scale-105 transition-all duration-300 shadow-lg ${
                        actionButton.variant === "secondary"
                          ? "border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:ring-amber-500/50"
                          : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 focus:ring-amber-500/50"
                      }`}
                    >
                      {actionButton.text}
                    </button>
                  )}
                </>
              )}

              {secondaryButton && (
                <>
                  {secondaryButton.href ? (
                    <Link
                      href={secondaryButton.href}
                      className="flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                      {secondaryButton.text}
                    </Link>
                  ) : (
                    <button
                      onClick={secondaryButton.onClick}
                      className="flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                      {secondaryButton.text}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Helpful Links */}
        {helpfulLinks && helpfulLinks.length > 0 && (
          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Popular destinations:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {helpfulLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
