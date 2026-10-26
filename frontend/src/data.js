export const GITHUB_USERNAME = 'SamyogGhimire'
export const LEETCODE_USERNAME = 'SamyogGhimire'
export const EMAIL = 'samyog.ghimire04@gmail.com'
export const RESUME_LINK = 'https://drive.google.com/file/d/1gAGM1mijAtSnFA2D-kVIjWg_Gyf64TZM/view?usp=sharing'

export const socials = [
  { label: 'GitHub', href: `https://github.com/${GITHUB_USERNAME}` },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/Samyogghimire' },
  { label: 'LeetCode', href: `https://leetcode.com/${LEETCODE_USERNAME}` },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

export const navLinks = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'FAQ', id: 'faq' },
]

const gh = name => `https://github.com/${GITHUB_USERNAME}/${name}`

// `flow` is drawn as the pipeline diagram on each project card.
export const projects = [
  {
    title: 'Self-Healing Kubernetes',
    category: 'SRE • Machine Learning',
    description:
      'A recovery layer above Kubernetes. It injects controlled faults into a microservice system, detects anomalies, diagnoses the cause and picks a recovery action with an online-learning policy, then verifies and explains every incident.',
    highlights: [
      'Adaptive UCB1 bandit compared against Kubernetes defaults and fixed rules',
      'Safety guardrails gate every automated recovery action',
      'Fully local: minikube, Prometheus, Grafana, Ollama. No paid APIs',
    ],
    flow: ['Inject fault', 'Detect anomaly', 'Diagnose cause', 'Choose action (UCB1)', 'Guardrail check', 'Verify & explain'],
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'FastAPI', 'scikit-learn', 'React'],
    github: gh('selfhealing-k8s'),
  },
  {
    title: 'AgentWarden',
    category: 'AI Security • Research',
    description:
      'A human-in-the-loop security gateway for AI coding agents. It sits between the agent and the operating system and decides, outside the AI, whether each command, file access or network call may happen.',
    highlights: [
      'Parses shell commands into structured operations: pipes, subshells, heredocs, sh -c',
      'Risk scoring with human approval only when it is actually needed',
      'Guiding principle: AI intent is not authorization',
    ],
    flow: ['Detect action', 'Analyse behaviour', 'Score risk', 'Ask a human', 'Enforce', 'Audit log'],
    tags: ['Python', 'Security', 'LLM Agents', 'Linux'],
    github: gh('Agent-Warden'),
  },
  {
    title: 'FraudLens',
    category: 'FinTech • Cloud',
    description:
      'A unified fraud detection engine that merges device fingerprinting, fund-flow analysis and phishing signals into one 0–100 risk score, where every point links back to the exact field that produced it.',
    highlights: [
      'Explainable scoring: “+25 pass_through_ratio = 0.97”',
      'Hybrid deployment: on-prem sources, AWS cloud zone behind nginx',
      'Infrastructure as code with Terraform and Docker Compose',
    ],
    flow: ['Device signals', 'Fund-flow signals', 'Phishing signals', 'Unified score', 'Analyst dashboard'],
    tags: ['Python', 'AWS', 'Terraform', 'Docker', 'nginx'],
    github: gh('fraudlens'),
  },
  {
    title: 'CivicTrack',
    category: 'Full-Stack • GovTech',
    description:
      'A municipal infrastructure operations platform that turns scattered citizen complaints and inspections into a prioritised, budget-aware maintenance plan with crew dispatch and SLA tracking.',
    highlights: [
      'Scoring, SLA, dispatch and prediction engines in FastAPI',
      'Next.js 14 frontend with graceful fallback when the API is down',
      'CI/CD on GitHub Actions and AWS infrastructure in Terraform',
    ],
    flow: ['Citizen report', 'Severity scoring', 'SLA tracking', 'Crew dispatch', 'Budget forecast'],
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Terraform', 'Docker'],
    github: gh('civic-track'),
  },
  {
    title: 'Terraform Security Lab',
    category: 'DevSecOps • Research',
    description:
      'A reproducible research framework that evaluates Infrastructure-as-Code security scanners on Terraform, and measures whether combining several scanners finds more than relying on one.',
    highlights: [
      'Benchmarks KICS, Trivy and Checkov against a ground-truth corpus',
      'Controlled corpora plus real-world Terraform repositories',
      'Generates precision, recall and complementarity graphs',
    ],
    flow: ['Terraform corpus', 'KICS · Trivy · Checkov', 'Aggregate findings', 'Ground-truth match', 'Metrics & graphs'],
    tags: ['Terraform', 'Python', 'Checkov', 'Trivy', 'KICS'],
    github: gh('Terraform-Security-Lab'),
  },
  {
    title: 'Real-Time Fraud Pipeline',
    category: 'Streaming • Infrastructure',
    description:
      'A Kafka-driven, containerised system that ingests a live transaction stream, flags suspicious activity with explainable rules and recovers automatically from failure with zero data loss.',
    highlights: [
      'Kafka in KRaft mode with Redis for detection state',
      'Self-healing containers that resume from committed offsets',
      'Tested with Jest, Supertest and Vitest',
    ],
    flow: ['Transaction stream', 'Kafka topic', 'Rules engine', 'Alerts → PostgreSQL', 'Crash → auto-recover'],
    tags: ['Kafka', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'React'],
    github: gh('banking-fraud-detection'),
  },
  {
    title: 'GitOps CI/CD Pipeline',
    category: 'DevOps',
    description:
      'An end-to-end pipeline for a Spring Boot app. A push triggers Jenkins to build, test and containerise it, update the GitOps manifests, and let ArgoCD roll the new version out to Kubernetes.',
    highlights: [
      'GitHub webhook → Jenkins → Maven build and tests',
      'Image pushed to Docker Hub, tag committed to a manifest repo',
      'ArgoCD auto-syncs the cluster from Git',
    ],
    flow: ['git push', 'Jenkins + Maven', 'Docker Hub', 'GitOps repo', 'ArgoCD', 'Kubernetes'],
    tags: ['Jenkins', 'Docker', 'ArgoCD', 'Kubernetes', 'Java'],
    github: gh('CICD-Pipeline'),
  },
  {
    title: 'FitnessHub',
    category: 'Full-Stack',
    description:
      'A full-stack gym management website with membership booking, QR-code gym entry, real-time crowd tracking, trainer hiring and an admin scanner panel.',
    highlights: [
      'Live crowd counter over Socket.IO',
      'QR-code entry with an admin scanner panel',
      'Deployed on Vercel and Railway with MongoDB Atlas',
    ],
    flow: ['Book membership', 'QR pass', 'Scan at entry', 'Live crowd count'],
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
    github: gh('Fitness-Webpage'),
    live: 'https://fitness-webpage-nine.vercel.app',
  },
]

const icon = path => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

// `mono` icons are black glyphs that get inverted in the dark theme.
export const skillGroups = [
  {
    title: 'Cloud & IaC',
    items: [
      { name: 'AWS', icon: icon('amazonwebservices/amazonwebservices-original-wordmark.svg'), mono: true },
      { name: 'Terraform', icon: icon('terraform/terraform-original.svg') },
      { name: 'Ansible', icon: icon('ansible/ansible-original.svg'), mono: true },
      { name: 'Nginx', icon: icon('nginx/nginx-original.svg') },
    ],
  },
  {
    title: 'Containers',
    items: [
      { name: 'Docker', icon: icon('docker/docker-original.svg') },
      { name: 'Kubernetes', icon: icon('kubernetes/kubernetes-plain.svg') },
      { name: 'Helm', icon: icon('helm/helm-original.svg'), mono: true },
      { name: 'Minikube', icon: icon('kubernetes/kubernetes-plain.svg') },
    ],
  },
  {
    title: 'CI/CD & GitOps',
    items: [
      { name: 'Jenkins', icon: icon('jenkins/jenkins-original.svg') },
      { name: 'GitHub Actions', icon: icon('githubactions/githubactions-original.svg') },
      { name: 'GitLab CI', icon: icon('gitlab/gitlab-original.svg') },
      { name: 'ArgoCD', icon: icon('argocd/argocd-original.svg') },
    ],
  },
  {
    title: 'Observability',
    items: [
      { name: 'Prometheus', icon: icon('prometheus/prometheus-original.svg') },
      { name: 'Grafana', icon: icon('grafana/grafana-original.svg') },
      { name: 'Linux', icon: icon('linux/linux-original.svg') },
      { name: 'Bash', icon: icon('bash/bash-original.svg'), mono: true },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: icon('nodejs/nodejs-original.svg') },
      { name: 'Express', icon: icon('express/express-original.svg'), mono: true },
      { name: 'FastAPI', icon: icon('fastapi/fastapi-original.svg') },
      { name: 'Django', icon: icon('django/django-plain.svg'), mono: true },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: icon('react/react-original.svg') },
      { name: 'Next.js', icon: icon('nextjs/nextjs-original.svg'), mono: true },
      { name: 'Tailwind CSS', icon: icon('tailwindcss/tailwindcss-original.svg') },
      { name: 'Vite', icon: icon('vitejs/vitejs-original.svg') },
    ],
  },
  {
    title: 'Data & Messaging',
    items: [
      { name: 'PostgreSQL', icon: icon('postgresql/postgresql-original.svg') },
      { name: 'MongoDB', icon: icon('mongodb/mongodb-original.svg') },
      { name: 'Redis', icon: icon('redis/redis-original.svg') },
      { name: 'Kafka', icon: icon('apachekafka/apachekafka-original.svg'), mono: true },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: icon('python/python-original.svg') },
      { name: 'Java', icon: icon('java/java-original.svg') },
      { name: 'TypeScript', icon: icon('typescript/typescript-original.svg') },
      { name: 'Go', icon: icon('go/go-original-wordmark.svg') },
    ],
  },
]

export const faqs = [
  {
    q: 'What kind of roles are you looking for?',
    a: 'DevOps, Cloud and Platform Engineering roles, and full-stack positions where I can own a feature from the UI down to the infrastructure it runs on.',
  },
  {
    q: 'Are you open to remote work or freelance projects?',
    a: 'Yes. I’m open to remote, hybrid and on-site opportunities, as well as freelance work. Send me the details through the form below.',
  },
  {
    q: 'What does your usual stack look like?',
    a: 'React or Next.js on the front, Node.js, FastAPI or Django behind it, PostgreSQL or MongoDB for data, all shipped with Docker, Terraform and a CI/CD pipeline to AWS or Kubernetes, and watched with Prometheus and Grafana.',
  },
  {
    q: 'Can I see the code for your projects?',
    a: 'Every project links to its GitHub repository. If a repository isn’t public yet, get in touch and I’ll walk you through it.',
  },
  {
    q: 'How do you approach a new project?',
    a: 'I start with the failure modes: what breaks, how we’d notice, and how it recovers. Then I build the smallest version that can be deployed, automate the pipeline early and iterate from real feedback.',
  },
  {
    q: 'How quickly do you reply?',
    a: 'Usually within a day or two. Email is the fastest way to reach me.',
  },
]
