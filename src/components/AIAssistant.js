import React, { useState } from "react";
import { Button, Modal } from "@/components/ui";
import { AiOutlineRobot } from "react-icons/ai";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFLModal, setShowFLModal] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
      {/* AI Assistant Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        <AiOutlineRobot size={24} />
      </button>

      {/* AI Assistant Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white p-4 shadow-xl rounded-lg border">
          <h3 className="text-lg font-semibold">AI Trading Assistant</h3>
          <p className="text-sm text-gray-600 mt-2">
            Analyze your trading patterns with privacy-preserving AI.
          </p>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={() => setShowFLModal(true)}>
              Learn More
            </Button>
            <Button onClick={() => console.log("Redirect to FL-powered interface")}>Try Now</Button>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
      )}

      {/* Federated ML Explanation Modal */}
      <Modal isOpen={showFLModal} onClose={() => setShowFLModal(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold">How Federated Learning Works</h2>
          <p className="mt-3 text-gray-600">
            We use privacy-focused Federated Learning to improve AI trading insights. Your data stays on your device, and only model updates are shared.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-500">
            <li>✅ Data is processed locally</li>
            <li>✅ No raw trade data leaves your device</li>
            <li>✅ AI learns patterns collaboratively</li>
          </ul>
          <Button onClick={() => setShowFLModal(false)} className="mt-4">Got It!</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AIAssistant;
