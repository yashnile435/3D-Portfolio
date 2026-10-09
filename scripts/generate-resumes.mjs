import fs from 'fs';
import path from 'path';

const resumes = [
  { file: 'android-developer.pdf', role: 'Android Developer', note: 'Specialization: Native Android, Kotlin, Java, MVVM, Firebase' },
  { file: 'java-developer.pdf', role: 'Java Developer', note: 'Specialization: Java 21, Spring Boot, MySQL, REST APIs' },
  { file: 'full-stack-developer.pdf', role: 'Full Stack Developer', note: 'Specialization: React, TypeScript, Java/Spring, PHP, MySQL, Firebase' },
  { file: 'web-developer.pdf', role: 'Web Developer', note: 'Specialization: React, TypeScript, Modern CSS, Responsive Web Design' },
  { file: 'software-developer.pdf', role: 'Software Developer', note: 'Specialization: Core Java, Clean Code, Data Structures, Relational DBs' }
];

const resumesDir = path.resolve('public/resumes');
if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir, { recursive: true });
}

function createMinimalPdf(title, subtitle, note) {
  const content = 
`BT
/F1 22 Tf
50 720 Td
(YASH NILE) Tj
ET
BT
/F1 15 Tf
50 690 Td
(${title} - Curriculum Vitae) Tj
ET
BT
/F1 11 Tf
50 660 Td
(Education: MCA - Savitribai Phule Pune University, SPPU - Expected 2027) Tj
ET
BT
/F1 11 Tf
50 635 Td
(${note}) Tj
ET
BT
/F1 10 Tf
50 580 Td
([PLACEHOLDER NOTICE]) Tj
ET
BT
/F1 10 Tf
50 560 Td
(This is a placeholder resume file for Yash Nile.) Tj
ET
BT
/F1 10 Tf
50 540 Td
(To use your actual resume, simply replace this file in:) Tj
ET
BT
/F1 10 Tf
50 520 Td
(public/resumes/${title.toLowerCase().replace(/\\s+/g, '-')}.pdf) Tj
ET`;

  const streamLen = Buffer.byteLength(content, 'utf8');

  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLen} >>
stream
${content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000236 00000 n 
0000000300 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
380
%%EOF
`;
}

for (const r of resumes) {
  const targetPath = path.join(resumesDir, r.file);
  const pdfContent = createMinimalPdf(r.role, 'Yash Nile Portfolio', r.note);
  fs.writeFileSync(targetPath, pdfContent, 'utf8');
  console.log(`Generated resume: ${targetPath}`);
}
