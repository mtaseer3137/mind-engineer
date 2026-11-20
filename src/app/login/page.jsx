'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Logo } from '../../components/common/Logo';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to log in. Please check your credentials.');
      }

      setSuccessMessage(`Welcome back, ${data.user?.name || ''}!`);
      router.push('/');
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#292D29] flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#879B83]/30 selection:text-[#354B3B]">
      {/* Background Organic Ambient Blurs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#E8E2D5]/70 rounded-full blur-3xl pointer-events-none -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#879B83]/15 rounded-full blur-3xl pointer-events-none -ml-36 -mb-24" />

      {/* Top Header Navigation */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="group focus:outline-none">
          <Logo size="md" showTagline={true} />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#5A615A] hover:text-[#354B3B] px-3.5 py-2 rounded-xl bg-[#E8E2D5]/60 hover:bg-[#E8E2D5] border border-[#879B83]/30 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Authentication Card */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#FFFFFF] border border-[#879B83]/30 rounded-3xl p-7 sm:p-10 shadow-organic-lg">
            
            {/* Academic Demonstration Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8E2D5]/80 border border-[#A78B6A]/30 text-[11px] font-sans font-medium text-[#8D7252] w-fit mx-auto mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A78B6A]" />
              <span>Academic Demonstration Portal</span>
            </div>

            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl font-bold text-[#354B3B] tracking-tight mb-2">
                Welcome Back
              </h1>
              <p className="font-sans text-xs sm:text-sm text-[#5A615A] leading-relaxed">
                Log in to access your Mind Engineer cognitive curricula, progress journals, and seminar notes.
              </p>
            </div>

            {/* Error Notification */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Success Notification */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 rounded-xl bg-[#879B83]/20 border border-[#879B83]/40 text-[#354B3B] text-xs flex items-center gap-2.5 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#354B3B] shrink-0" />
                <span>{successMessage}</span>
              </motion.div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#879B83]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83]/70 text-sm focus:outline-none focus:border-[#354B3B] focus:ring-1 focus:ring-[#354B3B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#879B83]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83]/70 text-sm focus:outline-none focus:border-[#354B3B] focus:ring-1 focus:ring-[#354B3B] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#879B83] hover:text-[#354B3B] transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 rounded-xl text-sm font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-all shadow-md shadow-[#354B3B]/15 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Toggle to Sign Up */}
            <div className="mt-7 pt-6 border-t border-[#879B83]/20 text-center">
              <p className="text-xs sm:text-sm text-[#5A615A]">
                Don't have an academic account yet?{' '}
                <Link
                  href="/signup"
                  className="font-semibold text-[#354B3B] hover:text-[#2B3E31] underline decoration-[#879B83] underline-offset-4"
                >
                  Create an Account
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Subtle Footer */}
      <footer className="relative z-10 py-5 text-center text-xs text-[#879B83] font-sans">
        Mind Engineer Academic Demonstration &copy; {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
}
