import React, { useRef } from "react";
import Heading from "./Heading";

function Contact() {
  // Refs for form elements
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameValue = nameRef.current.value.trim();
    const emailValue = emailRef.current.value.trim();

    // Validation
    if (nameValue === "" || !emailPattern.test(emailValue)) {
      alert("Please enter a valid name and email.");
      return; // Stop if validation fails
    }

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xpwabzqd", // Formspree endpoint
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");

        // Clear input fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";

        alert("Thank you! Your message has been sent.");
      } else {
        console.error("Form submission failed.");
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="contactme" className="relative pb-[100px]">
      <Heading first="QUICK" second="CONNECT" />
      <form className="mt-[5vw]" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p className="mb-[4px] poppins text-[16px] text-[#848484]">Name</p>
        </label>
        <input
          ref={nameRef}
          className="bg-[#353334] mb-[25px] text-[#efefef] pt-2 pb-2 pl-3 pr-3 text-[15px] poppins rounded-md w-[90%]"
          id="nameform"
          name="name"
          type="text"
          placeholder="Enter your Full Name"
          required
        />

        <label htmlFor="email">
          <p className="mb-[4px] poppins text-[16px] text-[#848484]">Email</p>
        </label>
        <input
          ref={emailRef}
          className="bg-[#353334] mb-[25px] text-[#efefef] pt-2 pb-2 pl-3 pr-3 text-[15px] poppins rounded-md w-[90%]"
          id="emailform"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />

        <label htmlFor="message">
          <p className="mb-[4px] poppins text-[16px] text-[#848484]">Message</p>
        </label>
        <textarea
          ref={messageRef}
          className="bg-[#353334] mb-[25px] h-[100px] text-[#efefef] pt-2 pb-2 pl-3 pr-3 text-[15px] poppins rounded-md w-[90%]"
          id="textarea"
          name="message"
          placeholder="Enter your message"
        ></textarea>

        <button
          className="absolute bottom-[50px] left-0 bg-gradient-to-r resume rounded-[1vw] from-[#921015] to-[#D62828]"
          type="submit"
        >
          <p className="poppins font-semibold pt-2 pb-2 pl-5 pr-5">Submit</p>
        </button>
      </form>
    </div>
  );
}

export default Contact;
