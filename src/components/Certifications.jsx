// src/components/Certifications.jsx
import React from "react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    link: "https://www.your-credly-link.com/aws-certified-cloud-practitioner",
  },
  {
    name: "Docker Certified Associate",
    link: "https://www.your-credly-link.com/docker-certified-associate",
  },
  {
    name: "Jenkins Engineer",
    link: "https://www.your-credly-link.com/jenkins-engineer",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    link: "https://www.your-credly-link.com/cka",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
