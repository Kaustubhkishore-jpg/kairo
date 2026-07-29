import { Link } from "react-router-dom";
import { ArrowRight, Bot, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Sparkles } from "lucide-react";
import {LayoutDashboard} from "lucide-react";
import { Upload, ScanSearch, WandSparkles, Download } from "lucide-react";
import { ShieldCheck, TriangleAlert } from "lucide-react";
import { MessageSquareQuote } from "lucide-react";
import { HelpCircle, ChevronDown } from "lucide-react";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const checks = [
  "ATS Compatibility Score",
  "Keyword Optimization",
  "Formatting Analysis",
  "Readability Insights",
];

export default function Features() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-50">
        {/* Animated Background */}
{/* Animated Background */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

  <div
    className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-indigo-500/30 blur-[180px] animate-gradient-slow"
  />

  <div
    className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-cyan-400/30 blur-[180px] animate-gradient-slow"
    style={{ animationDelay: "-8s" }}
  />

  <div
    className="absolute bottom-[-250px] left-1/3 w-[750px] h-[750px] rounded-full bg-purple-500/30 blur-[200px] animate-gradient-slow"
    style={{ animationDelay: "-16s" }}
  />
   {/* Dot Grid */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(circle, #6366f1 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

</div>

      {/* Hero */}
     <section
  id="features"
  className="relative z-10 py-24 px-6 overflow-hidden"
>
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium"
          >
            <Bot size={18} />
            AI Resume Intelligence
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
          >
            Powerful Features
            <br />
            Built for Better Resumes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600"
          >
            KAIRO combines AI-powered resume analysis, ATS optimization,
            job matching and personalized recommendations to help you land
            more interviews.
          </motion.p>
        </motion.div>
      </section>
      {/* Job Match Analysis */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    {/* Left Content */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <Target size={18} />
        Job Match Analysis
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Compare Your Resume Against Any Job Description
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO analyzes your resume alongside a job description to calculate
        your match score, identify missing keywords, highlight skill gaps,
        and provide actionable recommendations to improve your chances of
        landing interviews.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Resume Match Score",
          "Missing Keywords",
          "Skill Gap Detection",
          "Role-Based Recommendations",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Right Dashboard */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Job Match Score</p>

          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-indigo-600 mt-2"
          >
            87%
          </motion.h3>
        </div>

        <Target className="w-12 h-12 text-indigo-600" />
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-sm mb-2">
          <span>Overall Match</span>
          <span>87%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "87%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full bg-indigo-600 rounded-full"
          />
        </div>
      </div>

      <div className="mt-10">
        <h4 className="font-semibold text-slate-900 mb-4">
          Missing Skills
        </h4>

        <div className="flex flex-wrap gap-3">
          {["Docker", "AWS", "REST APIs", "Leadership"].map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-full bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-600"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <h4 className="font-semibold text-slate-900 mt-8 mb-4">
          Strong Matches
        </h4>

        <div className="flex flex-wrap gap-3">
          {["React", "TypeScript", "Communication", "Problem Solving"].map(
            (skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-600"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
</section>

      {/* ATS */}
      <section className="relative z-10 py-24 bg-transparent">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
              <BarChart3 size={18} />
              ATS Score Analysis
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Optimize Your Resume for Applicant Tracking Systems
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              KAIRO evaluates your resume using ATS-inspired criteria and
              highlights opportunities to improve formatting, keywords and
              readability.
            </p>

            <motion.ul
              variants={stagger}
              className="mt-8 space-y-4"
            >
              {checks.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-8 border-indigo-600"
            >
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl font-bold text-indigo-600"
                >
                  92%
                </motion.p>
                <p className="text-slate-500">ATS Score</p>
              </div>
            </motion.div>

            <div className="mt-10 space-y-5">
              {[
                ["Keywords",95],
                ["Formatting",90],
                ["Readability",93],
              ].map(([label,val])=>(
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span>{val}%</span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-indigo-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

{/* Skill Gap Analysis */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    {/* Left Dashboard */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Skill Gap Analysis
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            6 Skills Missing
          </h3>
        </div>

        <GraduationCap className="w-12 h-12 text-indigo-600" />
      </div>

      <div className="mt-10 space-y-4">

        {[
          ["Docker", "High Priority"],
          ["AWS", "High Priority"],
          ["REST APIs", "Medium"],
          ["Leadership", "Medium"],
          ["CI/CD", "Low"],
          ["System Design", "Low"],
        ].map(([skill, priority]) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >
            <span className="font-medium">{skill}</span>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
              {priority}
            </span>
          </motion.div>
        ))}

      </div>
    </motion.div>

    {/* Right Content */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <GraduationCap size={18} />
        Skill Gap Analysis
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Discover Which Skills You Need to Land the Job
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO compares your resume with the target job description and
        highlights the missing technical and professional skills that
        recruiters are looking for.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Missing Technical Skills",
          "Priority Ranking",
          "Learning Recommendations",
          "Industry-Specific Suggestions",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
</section> 
          {/* AI Resume Suggestions */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    {/* Left Content */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <Sparkles size={18} />
        AI Resume Suggestions
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Receive AI-Powered Resume Improvements
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO rewrites weak resume content into professional,
        ATS-friendly, and impact-focused statements while
        maintaining your original experience.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Rewrite Resume Bullet Points",
          "Improve Professional Summary",
          "Optimize Skills Section",
          "Enhance Project Descriptions",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Right Side */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2">

        {/* Before */}
        <div className="p-6 border-r border-slate-200">
          <p className="text-sm font-semibold text-red-500 mb-4">
            Before
          </p>

          <div className="rounded-xl bg-slate-100 p-4 text-sm text-slate-600 leading-7">
            Worked on several web development projects and
            helped improve company website.
          </div>
        </div>

        {/* After */}
        <div className="p-6">
          <p className="text-sm font-semibold text-green-600 mb-4">
            After
          </p>

          <div className="rounded-xl bg-green-50 p-4 text-sm leading-7 text-slate-700">
            Developed responsive web applications using React
            and TypeScript, improving website performance by
            35% while enhancing user experience and code
            maintainability.
          </div>
        </div>

      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-500">
          AI Confidence
        </p>

        <div className="mt-3 h-3 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-indigo-600"
          />
        </div>

        <p className="mt-2 text-sm font-medium text-indigo-600">
          96% Confidence
        </p>
      </div>
    </motion.div>
  </motion.div>
</section>

           {/* Resume Insights Dashboard */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    {/* Dashboard */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-xl p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900">
          Resume Insights
        </h3>

        <LayoutDashboard className="w-8 h-8 text-indigo-600" />
      </div>

      <div className="grid grid-cols-2 gap-5 mt-8">

        {[
          ["Resume Health", "94%"],
          ["Keyword Density", "91%"],
          ["Readability", "96%"],
          ["Recruiter Readiness", "89%"],
        ].map(([title, value]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h4 className="mt-3 text-3xl font-bold text-indigo-600">
              {value}
            </h4>
          </motion.div>
        ))}

      </div>

      <div className="mt-8 rounded-2xl bg-indigo-50 p-6">
        <p className="text-sm text-slate-500">
          Overall Resume Score
        </p>

        <div className="mt-3 h-3 rounded-full bg-indigo-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "94%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-indigo-600"
          />
        </div>

        <p className="mt-3 text-xl font-semibold text-indigo-700">
          Excellent
        </p>
      </div>
    </motion.div>

    {/* Content */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <LayoutDashboard size={18} />
        Resume Insights Dashboard
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Track Every Important Resume Metric
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO generates a comprehensive dashboard that helps you
        understand your resume's strengths and weaknesses using
        AI-driven insights and recruiter-focused metrics.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Resume Health Score",
          "Keyword Density",
          "Readability Analysis",
          "Recruiter Readiness",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
</section>

          {/* Strengths & Weaknesses */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={stagger}
  >
    {/* Left */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <ShieldCheck size={18} />
        Resume Strengths & Weaknesses
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Understand What Makes Your Resume Stand Out
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO automatically identifies the strongest parts of your resume
        while highlighting weaknesses that may reduce your interview
        opportunities.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Identify Resume Strengths",
          "Highlight Weak Sections",
          "Priority-Based Improvements",
          "Actionable AI Recommendations",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Right */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-white border border-slate-200 shadow-xl p-8"
    >
      <div className="grid gap-6">

        {/* Strengths */}
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-green-600" />
            <h3 className="font-bold text-green-700">
              Strengths
            </h3>
          </div>

          <ul className="space-y-3 text-slate-700">
            <li>Strong technical skills section</li>
            <li>Well-structured work experience</li>
            <li>Relevant certifications included</li>
            <li>Clear project descriptions</li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <TriangleAlert className="text-amber-600" />
            <h3 className="font-bold text-amber-700">
              Areas to Improve
            </h3>
          </div>

          <ul className="space-y-3 text-slate-700">
            <li>Missing measurable achievements</li>
            <li>Low keyword coverage</li>
            <li>Professional summary is too long</li>
            <li>Add role-specific skills</li>
          </ul>
        </div>

      </div>
    </motion.div>
  </motion.div>
</section>


         {/* AI Interview Preparation */}
<section className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    {/* Left - Interview Mockup */}
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-xl p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Personalized Interview Questions
        </h3>

        <MessageSquareQuote className="w-8 h-8 text-indigo-600" />
      </div>

      <div className="space-y-5">

        {[
          "Explain the React project mentioned on your resume.",
          "How did you improve the performance of your application?",
          "Describe a challenge you faced during your internship.",
          "Why are you interested in this Product Management role?",
        ].map((question, index) => (
          <motion.div
            key={question}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <span className="text-xs font-semibold text-indigo-600">
              Question {index + 1}
            </span>

            <p className="mt-2 text-slate-700 leading-7">
              {question}
            </p>
          </motion.div>
        ))}

      </div>
    </motion.div>

    {/* Right - Content */}
    <motion.div variants={fadeUp}>
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <MessageSquareQuote size={18} />
        AI Interview Preparation
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Practice Interview Questions Based on Your Resume
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        KAIRO analyzes your resume together with the target job description
        and generates personalized interview questions. Practice with
        questions tailored to your experience, projects, technical skills,
        and the role you're applying for.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Resume-Based Questions",
          "Role-Specific Technical Questions",
          "Behavioral Interview Questions",
          "Project and Experience Discussions",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
</section>

          {/* How KAIRO Works */}
<section id="how-it-works" className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-7xl mx-auto px-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    <motion.div
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <ScanSearch size={18} />
        How KAIRO Works
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Improve Your Resume in Four Simple Steps
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        Upload your resume, let KAIRO analyze it with AI,
        receive personalized improvements, and download a
        stronger version ready for job applications.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          icon: Upload,
          step: "01",
          title: "Upload Resume",
          desc: "Upload your PDF resume securely."
        },
        {
          icon: ScanSearch,
          step: "02",
          title: "AI Analysis",
          desc: "KAIRO evaluates ATS compatibility, keywords and formatting."
        },
        {
          icon: WandSparkles,
          step: "03",
          title: "Improve Resume",
          desc: "Receive AI-powered recommendations and optimized content."
        },
        {
          icon: Download,
          step: "04",
          title: "Apply Confidently",
          desc: (<>Download your improved resume and start applying (<strong> (Coming Soon) </strong>)</>)
        },
      ].map((item) => (
        <motion.div
          key={item.step}
          variants={fadeUp}
          whileHover={{ y: -10 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
            <item.icon className="w-8 h-8 text-indigo-600" />
          </div>

          <p className="mt-6 text-sm font-semibold text-indigo-600">
            STEP {item.step}
          </p>

          <h3 className="mt-3 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </motion.div>
</section>
{/* FAQ */}
<section id= "faq" className="relative z-10 py-24 bg-transparent">
  <motion.div
    className="max-w-4xl mx-auto px-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={stagger}
  >
    {/* Heading */}
    <motion.div
      variants={fadeUp}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-medium">
        <HelpCircle size={18} />
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Everything You Need to Know
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        Have questions about KAIRO? Here are answers to the most common ones.
      </p>
    </motion.div>

    <motion.div
      variants={stagger}
      className="space-y-5"
    >

      {[
        {
          q: "How does KAIRO analyze my resume?",
          a: "KAIRO uses AI to evaluate ATS compatibility, resume structure, readability, keywords, skills, and overall content quality."
        },
        {
          q: "Does KAIRO compare my resume with a job description?",
          a: "Yes. You can optionally upload a job description to receive a match score, missing keywords, and role-specific recommendations."
        },
        {
          q: "Will KAIRO rewrite my resume?",
          a: "KAIRO suggests stronger wording, improved bullet points, and optimized summaries while keeping you in control of the final content."
        },
        {
          q: "Can KAIRO generate interview questions?",
          a: "Yes. KAIRO creates personalized interview questions based on your resume, projects, skills, and target job role."
        },
        {
          q: "Is my resume stored securely?",
          a: "Your uploaded resume is processed securely. KAIRO is designed with user privacy in mind, and you remain in control of your data."
        },
        {
          q: "Which resume formats are supported?",
          a: "KAIRO currently supports PDF resumes only. Support for additional formats may be added in future updates."
         },
         {
          q: "Is KAIRO free to use?",
          a: "Yes. KAIRO is currently free to use during its beta phase. Additional premium features may be introduced in the future while keeping a free version available."
         },
      ].map((faq, index) => (
        <motion.details
          key={index}
          variants={fadeUp}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">
            {faq.q}

            <ChevronDown className="transition duration-300 group-open:rotate-180" />
          </summary>

          <p className="mt-5 leading-8 text-slate-600">
            {faq.a}
          </p>
        </motion.details>
      ))}

    </motion.div>
  </motion.div>
</section>
            
             
      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
          >
            Analyze Resume
            <motion.span
              whileHover={{ x: 4 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
