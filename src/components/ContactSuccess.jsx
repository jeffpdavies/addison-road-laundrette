import React from 'react';

export default function ContactSuccess({ customerName, onReset }) {
  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-md text-center border border-gray-100">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        ✓
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h2>

      <p className="text-gray-600 mb-6">
        {customerName ? `Thanks ${customerName},` : "Thanks for reaching out,"} we have received your inquiry regarding our laundry and linen services at Addison Road Laundrette. We will get back to you shortly.
      </p>

      <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 mb-6 text-left">
        <p className="font-semibold mb-1">Need immediate assistance?</p>
        <p>Call us directly at <a href="tel:0299775793" className="text-blue-600 font-medium hover:underline">(02) 9977 5793</a>.</p>
        <p className="text-xs text-gray-500 mt-2">Open 7 days: 7:00 AM – 9:00 PM</p>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium"
      >
        Send Another Message
      </button>
    </div>
  );
}
