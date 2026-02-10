"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const SEND_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SEND_TEMPLATE_ID!;
const NOTIFICATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        SEND_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          from_name: "Zuohuang Cai",
          subject: formData.subject,
          message: formData.message
        },
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        NOTIFICATION_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Zuohuang Cai"
        },
        PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getInputAnimation = (index: number) => ({
    initial: { opacity: 0, x: -30 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
    transition: { delay: 0.2 + index * 0.1, type: "spring" as const, damping: 20 }
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen w-full py-20 px-8 bg-black relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-cyan-400 text-sm font-mono tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Let&#39;s Work Together
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              Feel free to reach out. I&#39;m always open to new opportunities and interesting conversations.
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white">zc26226@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">North Holland</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I&#39;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    {error && (
                      <motion.div
                        className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {error}
                      </motion.div>
                    )}
                    <motion.div
                      {...getInputAnimation(0)}
                    >
                      <Input
                        name="name"
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        classNames={{
                          input: "bg-gray-800/50",
                          inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-purple-500 focus-within:border-purple-500"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      {...getInputAnimation(1)}
                    >
                      <Input
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        classNames={{
                          input: "bg-gray-800/50",
                          inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-purple-500 focus-within:border-purple-500"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      {...getInputAnimation(2)}
                    >
                      <Input
                        name="subject"
                        label="Subject"
                        placeholder="Project Collaboration"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        classNames={{
                          input: "bg-gray-800/50",
                          inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-purple-500 focus-within:border-purple-500"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      {...getInputAnimation(3)}
                    >
                      <Textarea
                        name="message"
                        label="Message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        minRows={4}
                        classNames={{
                          input: "bg-gray-800/50",
                          inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-purple-500 focus-within:border-purple-500"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      {...getInputAnimation(4)}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

