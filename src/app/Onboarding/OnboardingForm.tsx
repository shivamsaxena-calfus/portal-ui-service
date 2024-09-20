"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const formFields = [
  {
    id: "first-name",
    name: "first-name",
    label: "First name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    id: "last-name",
    name: "last-name",
    label: "Last name",
    type: "text",
    autoComplete: "family-name",
  },
  {
    id: "company-name",
    name: "company-name",
    label: "Company Name",
    type: "text",
    autoComplete: "organization",
  },
  {
    id: "url",
    name: "url",
    label: "URL",
    type: "text",
    autoComplete: "url",
  },
  {
    id: "email",
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
  },
];

const OnboardingForm = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    router.push("/History");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-1/3 bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Onboarding
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Company information
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {formFields.map((field) => (
                  <div key={field.id} className="sm:col-span-3">
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {field.label}
                    </label>
                    <div className="mt-2">
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="sm:col-span-4">
                <button
                  type="submit"
                  className="mt-6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
