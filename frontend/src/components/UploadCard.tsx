import { useState } from "react";
import { UploadCloud, FileText, Trash2 } from "lucide-react";
import Dashboard from "./Dashboard";
import { analyzeResume } from "../services/api";
import { motion } from "framer-motion";

function UploadCard() {
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
    setAnalysisResult(null);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setAnalysisResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);
      const result = await analyzeResume(
  selectedFile,
  jobDescription
);


      if (result.error) {
        alert(result.error);
        return;
      }

      setAnalysisResult(result);
    } catch (error) {
      console.error("Resume analysis failed:",error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Unable to analyze your resume at the moment.\n\nPlease check your internet connection or try again in a few moments.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
          AI Resume Analysis
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Upload your resume to receive an ATS score, detailed feedback,
          missing skills, personalized recommendations, and interview
          questions in seconds.
        </p>
      </div>

      {/* Upload Box */}
      {!selectedFile && (
        <div className="
  bg-white/70
  backdrop-blur-xl
  border
  border-white/40
  rounded-3xl
  shadow-2xl
  p-6 md:p-10 lg:p-12
">

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-10 md:p-16 text-center transition-all duration-300 hover:border-indigo-600 hover:shadow-lg">

           <motion.div
               animate={{
                 y: [0, -10, 0],
           }}
                       transition={{
                               duration: 3,
                          repeat: Infinity,
                  ease: "easeInOut",
  }}
>
  <UploadCloud
    className="mx-auto text-indigo-600 mb-6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
  />
</motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              Drag & Drop your Resume
            </h2>

            <p className="mt-3 text-slate-500">
              PDF files only
            </p>

            <label
              htmlFor="resume-upload"
              className="inline-block mt-8 w-full md:w-auto cursor-pointer rounded-xl bg-indigo-600 px-8 py-4 text-white font-semibold hover:bg-indigo-700 transition text-center"
            >
              Select Resume
            </label>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

          </div>

        </div>
      )}

      {/* Selected File */}
      {selectedFile && (
        <motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
        className="
  bg-white/70
  backdrop-blur-xl
  border
  border-white/40
  rounded-3xl
  shadow-2xl
  p-5 md:p-8
">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between border rounded-2xl p-4 md:p-6 gap-4">

            <div className="flex items-center gap-4">

              <div className="bg-indigo-100 p-4 rounded-xl">
                <FileText
                  className="text-indigo-600 w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {selectedFile.name}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>

            </div>

          </div>
          

          <button
            onClick={removeFile}
            className="mt-6 w-full rounded-xl border border-red-300 py-3 text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-2"
          >
            <Trash2 size={18} />
            Remove Resume
          </button>
          <div className="mt-6">
  <label className="block text-lg font-semibold text-slate-800 mb-3">
    Job Description (Optional)
  </label>

  <textarea
    value={jobDescription}
    onChange={(e) => setJobDescription(e.target.value)}
    rows={5}
    placeholder="Paste the job description here..."
    className="w-full rounded-xl border border-slate-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition disabled:bg-slate-400"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>

        </motion.div>
      )}

      {/* Dashboard */}
      {analysisResult && (
        <div className="mt-8 md:mt-12">
          <Dashboard analysis={analysisResult} />
        </div>
      )}

    </div>
  );
}

export default UploadCard;