import React, { useState } from 'react';

const NewProposalModal = ({ isOpen, onClose }) => {
  const [budgetCurrency, setBudgetCurrency] = useState('$');
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] max-h-[80vh] overflow-y-auto p-8 shadow-xl transition-all transform scale-95 hover:scale-100 duration-300 ease-in-out">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#0f4c14]">Create New Proposal</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-3xl transition-colors">
            &times;
          </button>
        </div>

        {/* Form Content */}
        <form className='no-scrollbar'>
          {/* Adjusted Grid Layout */}
          <div className="grid grid-cols-1 gap-8">
            {/* Project Title Field */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Project Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter project title (e.g., Website Development Proposal)"
              />
            </div>

            {/* Client Name Field */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Client Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter client name (optional)"
              />
            </div>

            {/* Budget Estimate Field */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Budget Estimate</label>
              <div className="flex items-center border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all h-12">
                <select
                  value={budgetCurrency}
                  onChange={(e) => setBudgetCurrency(e.target.value)}
                  className="border-none bg-transparent text-black mr-2 font-medium h-full"
                >
                  <option value="$">USD ($)</option>
                  <option value="₹">INR (₹)</option>
                  <option value="€">EUR (€)</option>
                </select>
                <input
                  type="number"
                  min="0"
                  className="w-full border-none bg-transparent text-black p-3 focus:outline-none h-full"
                  placeholder={`Enter estimated budget (e.g., ${budgetCurrency} 50000)`}
                />
              </div>
            </div>

            {/* Delivery Timeline Field */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Delivery Timeline</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all h-12"
              />
            </div>

            {/* Proposal Description */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Proposal Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter proposal description"
                style={{ minHeight: '150px' }}
              />
            </div>

            {/* Attachment Section */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#0f4c14' }}>Attachment</label>
              <div className="flex items-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {file && <span className="ml-2 text-gray-600">{file.name}</span>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-[#0f4c14] text-white py-3 px-8 rounded-md hover:bg-gradient-to-r hover:from-green-700 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition-all duration-300"
            >
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProposalModal;