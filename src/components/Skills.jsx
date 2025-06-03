const skills = [
  "Linux", "Git", "Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "Ansible", "Maven", "CI/CD", "Monitoring"
];

export default function Skills() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
}
