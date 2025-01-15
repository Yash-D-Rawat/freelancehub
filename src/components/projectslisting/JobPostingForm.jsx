import React, { useState } from 'react';

function JobPostingForm({ isOpen, onClose }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [paymentType, setPaymentType] = useState('hourly'); // New field for payment type
  const [projectDuration, setProjectDuration] = useState('');
  const [workType, setWorkType] = useState('remote'); // New field for work type (remote/on-site)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    alert('Freelance Job Posted!');
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg overflow-auto max-h-[80vh] sm:max-h-[90vh]">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Post a Freelance Job</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Title */}
          <div>
            <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
              placeholder="Enter job title"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
              placeholder="Enter company name (optional)"
            />
          </div>

          {/* Job Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
              Job Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
              placeholder="Provide a brief job description"
              rows="4"
              required
            />
          </div>

          {/* Job Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location (Remote/On-Site)
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
            >
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
            </select>
          </div>

          {/* Payment Type */}
          <div>
            <label htmlFor="paymentType" className="block text-gray-700 font-semibold mb-2">
              Payment Type
            </label>
            <select
              id="paymentType"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
            >
              <option value="hourly">Hourly</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>

          {/* Salary Range */}
          {paymentType === 'hourly' ? (
            <div>
              <label htmlFor="salary" className="block text-gray-700 font-semibold mb-2">
                Hourly Rate
              </label>
              <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Enter hourly rate"
                required
              />
            </div>
          ) : (
            <div>
              <label htmlFor="salary" className="block text-gray-700 font-semibold mb-2">
                Fixed Payment Amount
              </label>
              <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Enter fixed payment amount"
                required
              />
            </div>
          )}

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">
              Minimum Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
              placeholder="Enter required experience"
              required
            />
          </div>

          {/* Project Duration */}
          <div>
            <label htmlFor="projectDuration" className="block text-gray-700 font-semibold mb-2">
              Project Duration (in weeks)
            </label>
            <input
              type="number"
              id="projectDuration"
              value={projectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
              placeholder="Enter project duration"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-500 transition duration-300"
            >
              Post Job
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobPostingForm;