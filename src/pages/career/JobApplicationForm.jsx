import React, { useState } from "react";
import { Upload, AlertCircle } from "lucide-react";
import "./JobApplicationForm.css";
const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    experience: "",
    position: "",
    securityCode: "62345",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            experience: "",
            position: "",
            securityCode: "62345",
            resume: null,
          });
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      experience: "",
      position: "",
      securityCode: "62345",
      resume: null,
    });
    setErrors({});
  };

  return (
    <div className="form-container-extra">
      <div className="form-header-extra">
        <h1>Fill the Form</h1>
        <p>
          At Ambispine Technologies Inc., we are having a lot of exciting IT
          career opportunities in various relevant sectors. Being an IT
          aspirant, we hope our well-reputable and fast-evolving IT Company is
          the right workplace for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-grid">
          <div className="form-field-extra full-width">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <span className="error-message">
                <AlertCircle size={16} /> {errors.firstName}
              </span>
            )}
          </div>

          <div className="form-field-extra">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <span className="error-message">
                <AlertCircle size={16} /> {errors.lastName}
              </span>
            )}
          </div>

          <div className="form-field-extra">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">
                <AlertCircle size={16} /> {errors.email}
              </span>
            )}
          </div>

          <div className="form-field-extra">
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact number"
              className={errors.contact ? "error" : ""}
            />
            {errors.contact && (
              <span className="error-message">
                <AlertCircle size={16} /> {errors.contact}
              </span>
            )}
          </div>

          <div className="form-field-extra">
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Years Of Experience"
            />
          </div>

          <div className="form-field-extra full-width">
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Applied for the Post"
              className={errors.position ? "error" : ""}
            />
            {errors.position && (
              <span className="error-message">
                <AlertCircle size={16} /> {errors.position}
              </span>
            )}
          </div>

          <div className="form-field-extra">
            <input
              type="text"
              value={formData.securityCode}
              readOnly
              className="security-code"
            />
            <label>Type Security Code</label>
          </div>

          <div className="form-field-extra">
            <div className="file-upload">
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="resume" className="file-label">
                <Upload size={20} />
                {formData.resume ? formData.resume.name : "Choose Resume/CV"}
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions-extra">
          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? "loading" : ""} ${
              submitSuccess ? "success" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : submitSuccess
              ? "Submitted!"
              : "Submit"}
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
