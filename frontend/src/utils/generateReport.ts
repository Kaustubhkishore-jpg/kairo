import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateReport(analysis: any) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.setTextColor(79, 70, 229);
  doc.text("KAIRO", 14, 20);

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("AI Resume Analysis Report", 14, 30);

  // Date
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    14,
    38
  );

  // Scores
  autoTable(doc, {
    startY: 45,
    head: [["Metric", "Score"]],
    body: [
      ["ATS Score", `${analysis.ats_score}%`],
      ["Resume Quality", `${analysis.resume_quality}%`],
      ["Job Match", `${analysis.job_match}%`],
    ],
  });

  let y = (doc as any).lastAutoTable.finalY + 10;

  function addSection(title: string, items: string[]) {
    doc.setFontSize(14);
    doc.setTextColor(79, 70, 229);
    doc.text(title, 14, y);

    y += 6;

    doc.setFontSize(11);
    doc.setTextColor(0);

    items.forEach((item) => {
      doc.text(`• ${item}`, 18, y);
      y += 6;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 6;
  }

  addSection("Strengths", analysis.strengths);
  addSection("Weaknesses", analysis.weaknesses);
  addSection("Missing Skills", analysis.missing_skills);
  addSection("Missing Keywords", analysis.missing_keywords);
  addSection("Suggestions", analysis.suggestions);
  addSection("Interview Questions", analysis.interview_questions);

  doc.save("KAIRO-Resume-Report.pdf");
}