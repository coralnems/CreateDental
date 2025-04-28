"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type ChatPlatform = "whatsapp" | "telegram";

interface ChatWidgetProps {
  phoneNumber: string;
  telegramUsername?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  autoOpen?: boolean;
  autoOpenDelay?: number;
}

const ChatWidget = ({
  phoneNumber,
  telegramUsername = "creativesmiledental",
  message = "Hello! I&apos;d like to schedule an appointment at Creative Smile Dental.",
  position = "bottom-right",
  autoOpen = false,
  autoOpenDelay = 3000,
}: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [activePlatform, setActivePlatform] = useState<ChatPlatform>("whatsapp");

  useEffect(() => {
    if (autoOpen && !hasOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasOpened(true);
      }, autoOpenDelay);

      return () => clearTimeout(timer);
    }
  }, [autoOpen, autoOpenDelay, hasOpened]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) {
      setHasOpened(true);
    }
  };

  const handleChatClick = () => {
    if (activePlatform === "whatsapp") {
      // Format phone number (remove any non-digit characters)
      const formattedPhone = phoneNumber.replace(/\D/g, "");

      // Create WhatsApp URL with phone number and pre-filled message
      const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
    } else {
      // Create Telegram URL with username and pre-filled message
      const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

      // Open Telegram in a new tab
      window.open(telegramUrl, "_blank");
    }
  };

  const positionClass = position === "bottom-right"
    ? "bottom-6 right-6"
    : "bottom-6 left-6";

  const platformColor = activePlatform === "whatsapp" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600";
  const platformIcon = activePlatform === "whatsapp" ? (
    <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2 fill-current">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.376l-1.994 5.898 6.082-1.948C9.69 31.062 12.71 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0z" fill="#4CAF50"/>
      <path d="M25.314 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826s1.18-3.424 1.594-3.91c.414-.484 1.09-.704 1.456-.704.352 0 .704.002.994.016.352.016.826-.132 1.294 1.012.47 1.162 1.582 4.024 1.718 4.322.136.298.226.65.044.992-.178.35-.268.566-.536.888-.268.322-.566.718-.808.962-.272.272-.556.57-.24 1.118.318.546 1.416 2.332 3.042 3.77 2.104 1.874 3.878 2.46 4.424 2.728.546.27.862.226 1.18-.136.318-.364 1.354-1.582 1.72-2.124.362-.542.73-.452 1.22-.27.496.18 3.132 1.474 3.666 1.746.536.27.892.404 1.026.63.136.224.136 1.272-.248 2.368z" fill="#FAFAFA"/>
    </svg>
  ) : (
    <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2 fill-current">
      <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z" fill="#2CA5E0"/>
      <path d="M23.968 9.316c-.188-.168-.435-.198-.67-.082l-13.2 6.4c-.36.176-.526.456-.526.796 0 .34.166.62.526.796l3.816 1.85 1.334 4.064c.11.34.384.566.734.566.35 0 .624-.226.734-.566l1.334-4.064 6.536-3.168c.234-.116.384-.34.384-.596 0-.256-.15-.48-.384-.596l-6.536-3.168-3.816-1.85c-.36-.176-.526-.456-.526-.796 0-.34.166-.62.526-.796l13.2-6.4c.234-.116.48-.086.67.082.188.168.25.416.156.65l-3.784 9.492c-.094.234-.32.39-.574.39-.254 0-.48-.156-.574-.39L13.6 9.966c-.094-.234-.032-.482.156-.65.188-.168.435-.198.67-.082l8.758 4.24c.234.116.384.34.384.596 0 .256-.15.48-.384.596l-8.758 4.24c-.234.116-.48.086-.67-.082-.188-.168-.25-.416-.156-.65l3.784-9.492c.094-.234.32-.39.574-.39.254 0 .48.156.574.39l3.784 9.492c.094.234.032.482-.156.65-.188.168-.435.198-.67.082l-8.758-4.24c-.234-.116-.384-.34-.384-.596 0-.256.15-.48.384-.596l8.758-4.24c.234-.116.48-.086.67.082.188.168.25.416.156.65l-3.784 9.492c-.094.234-.32.39-.574.39-.254 0-.48-.156-.574-.39L13.6 9.966c-.094-.234-.032-.482.156-.65z" fill="#FAFAFA"/>
    </svg>
  );

  return (
    <div className={`fixed ${positionClass} z-50`}>
      {/* Chat Bubble */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {activePlatform === "whatsapp" ? (
                <div className="bg-green-500 rounded-full p-2 mr-2">
                  <MessageCircle size={20} className="text-white" />
                </div>
              ) : (
                <div className="bg-blue-500 rounded-full p-2 mr-2">
                  <Send size={20} className="text-white" />
                </div>
              )}
              <h3 className="font-semibold">
                Chat with us on {activePlatform === "whatsapp" ? "WhatsApp" : "Telegram"}
              </h3>
            </div>
            <button
              type="button"
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Platform Switcher */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
            <button
              type="button"
              onClick={() => setActivePlatform("whatsapp")}
              className={`flex-1 py-2 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                activePlatform === "whatsapp"
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 mr-1 fill-current">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.376l-1.994 5.898 6.082-1.948C9.69 31.062 12.71 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0z" fill="#4CAF50"/>
                <path d="M25.314 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826s1.18-3.424 1.594-3.91c.414-.484 1.09-.704 1.456-.704.352 0 .704.002.994.016.352.016.826-.132 1.294 1.012.47 1.162 1.582 4.024 1.718 4.322.136.298.226.65.044.992-.178.35-.268.566-.536.888-.268.322-.566.718-.808.962-.272.272-.556.57-.24 1.118.318.546 1.416 2.332 3.042 3.77 2.104 1.874 3.878 2.46 4.424 2.728.546.27.862.226 1.18-.136.318-.364 1.354-1.582 1.72-2.124.362-.542.73-.452 1.22-.27.496.18 3.132 1.474 3.666 1.746.536.27.892.404 1.026.63.136.224.136 1.272-.248 2.368z" fill="#FAFAFA"/>
              </svg>
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setActivePlatform("telegram")}
              className={`flex-1 py-2 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                activePlatform === "telegram"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 mr-1 fill-current">
                <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z" fill="#2CA5E0"/>
                <path d="M23.968 9.316c-.188-.168-.435-.198-.67-.082l-13.2 6.4c-.36.176-.526.456-.526.796 0 .34.166.62.526.796l3.816 1.85 1.334 4.064c.11.34.384.566.734.566.35 0 .624-.226.734-.566l1.334-4.064 6.536-3.168c.234-.116.384-.34.384-.596 0-.256-.15-.48-.384-.596l-6.536-3.168-3.816-1.85c-.36-.176-.526-.456-.526-.796 0-.34.166-.62.526-.796l13.2-6.4c.234-.116.48-.086.67.082.188.168.25.416.156.65l-3.784 9.492c-.094.234-.32.39-.574.39-.254 0-.48-.156-.574-.39L13.6 9.966c-.094-.234-.032-.482.156-.65.188-.168.435-.198.67-.082l8.758 4.24c.234.116.384.34.384.596 0 .256-.15.48-.384.596l-8.758 4.24c-.234.116-.48.086-.67-.082-.188-.168-.25-.416-.156-.65l3.784-9.492c.094-.234.32-.39.574-.39.254 0 .48.156.574.39l3.784 9.492c.094.234.032.482-.156.65-.188.168-.435.198-.67.082l-8.758-4.24c-.234-.116-.384-.34-.384-.596 0-.256.15-.48.384-.596l8.758-4.24c.234-.116.48-.086.67.082.188.168.25.416.156.65l-3.784 9.492c-.094.234-.32.39-.574.39-.254 0-.48-.156-.574-.39L13.6 9.966c-.094-.234-.032-.482.156-.65z" fill="#FAFAFA"/>
              </svg>
              Telegram
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            Click the button below to chat with our team on {activePlatform === "whatsapp" ? "WhatsApp" : "Telegram"}. We&apos;ll respond as soon as possible!
          </p>

          <button
            type="button"
            onClick={handleChatClick}
            className={`${platformColor} text-white w-full py-2 rounded-lg flex items-center justify-center transition-colors`}
          >
            {platformIcon}
            Start Chat
          </button>
        </div>
      )}

      {/* Chat Button */}
      <button
        type="button"
        onClick={toggleChat}
        className={`${activePlatform === "whatsapp" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse`}
        aria-label={`Chat on ${activePlatform === "whatsapp" ? "WhatsApp" : "Telegram"}`}
      >
        {activePlatform === "whatsapp" ? <MessageCircle size={28} /> : <Send size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;
