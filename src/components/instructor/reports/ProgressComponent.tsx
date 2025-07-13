import React, { useState } from 'react';

const ProgressComponent = ({ currentStep, steps = [] }) => {
  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const getStepClasses = (status) => {
    const baseClasses = 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 relative z-10';
    
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-orange-500 text-white`;
      case 'current':
        return `${baseClasses} bg-orange-500 text-white shadow-lg`;
      case 'pending':
        return `${baseClasses} bg-gray-200 text-gray-500`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      {/* Progress Steps */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
        <div 
          className="absolute top-4 left-0 h-0.5 bg-orange-500 z-0 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {/* Steps */}
        <div className="flex justify-between items-center relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={getStepClasses(getStepStatus(step.id))}>
                {getStepStatus(step.id) === 'completed' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-medium ${
                  getStepStatus(step.id) === 'current' ? 'text-orange-600' : 'text-gray-600'
                }`}>
                  {step.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// // Example usage component
// const ExampleUsage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
  
//   const steps = [
//     { id: 1, label: 'Basic Details' },
//     { id: 2, label: 'About Session' },
//     { id: 3, label: 'Feedback' }
//   ];

//   return (
//     <div>
//       <ProgressComponent currentStep={currentStep} steps={steps} />
      
//       {/* External buttons */}
//       <div className="flex justify-center space-x-4 mt-8">
//         <button
//           onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
//           disabled={currentStep === 1}
//           className={`px-4 py-2 rounded-md font-medium transition-colors ${
//             currentStep === 1
//               ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//               : 'bg-gray-600 text-white hover:bg-gray-700'
//           }`}
//         >
//           Previous
//         </button>
        
//         <button
//           onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
//           className="px-4 py-2 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExampleUsage;

export default ProgressComponent;