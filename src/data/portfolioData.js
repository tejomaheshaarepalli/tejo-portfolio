// AI / Machine Learning Portfolio Data
// All content for Tejo Mahesh Aarepalli's portfolio website

const portfolioData = {
  personalInfo: {
    name: "TEJO MAHESH AAREPALLI",
    title: "Generative AI Engineer",
    location: "Des Plaines, IL",
    phone: "+1 (224) 486-9160",
    email: "mahesht4655@gmail.com",
    github: "https://github.com/tejoaarepalli",
    profileImage: "/image.png",
    resume: "/AWL-4686-12032026-0325-resume_tejo-mahesh-aarepalli_aiml.pdf"
  },

  summary: "AI / Machine Learning Engineer with over 4 years of experience designing, building, and deploying Machine Learning, Generative AI, and Data Engineering solutions across healthcare, banking, insurance, and telecommunications. Experienced in developing end-to-end ML pipelines, Large Language Model (LLM) applications, NLP systems, and Retrieval-Augmented Generation (RAG) solutions using Python, PyTorch, TensorFlow, Scikit-learn, LangChain, and Hugging Face. Hands-on experience building scalable data pipelines with Apache Spark, PySpark, Kafka, Airflow, and Databricks, and deploying production-ready AI applications using FastAPI, MLflow, Docker, Kubernetes, and cloud platforms including Azure, AWS, and Google Cloud. Skilled in prompt engineering, vector databases, MLOps, REST APIs, and enterprise AI, with a strong focus on delivering scalable, reliable, and business-driven AI solutions.",

  skills: {
    programmingDataProcessing: [
      "Python",
      "SQL",
      "PySpark",
      "Pandas",
      "NumPy"
    ],
    machineLearningDeepLearning: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Hyperparameter Optimization",
      "Ensemble Learning",
      "Time Series Forecasting",
      "Classification",
      "Regression",
      "Clustering"
    ],
    mlFrameworks: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "LightGBM"
    ],
    generativeAiLlms: [
      "Large Language Models (LLMs)",
      "Generative AI",
      "Prompt Engineering",
      "LLM Fine-Tuning (LoRA, PEFT)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Hugging Face Transformers",
      "Embeddings",
      "Vector Search"
    ],
    naturalLanguageProcessing: [
      "Text Classification",
      "Named Entity Recognition (NER)",
      "Semantic Search",
      "Information Extraction"
    ],
    mlOpsDeployment: [
      "MLflow",
      "Experiment Tracking",
      "Model Deployment",
      "Model Monitoring",
      "Docker"
    ],
    dataEngineeringBigData: [
      "ETL/ELT Pipelines",
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
      "Databricks",
      "Batch & Streaming Data Processing"
    ],
    cloudAiPlatforms: [
      "AWS (S3, EC2, SageMaker)",
      "Azure Machine Learning",
      "Google Vertex AI"
    ],
    aiApisBackend: [
      "FastAPI",
      "Flask",
      "REST APIs"
    ],
    databasesWarehousing: [
      "Snowflake",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "BigQuery"
    ]
  },

  experience: [
    {
      company: "Walgreens",
      role: "Generative AI Engineer",
      location: "Chicago, IL",
      duration: "Nov 2025 - Present",
      achievements: [
        "Designed and deployed Large Language Model (LLM) applications using Python, Azure OpenAI, LangChain, and Hugging Face to automate healthcare document summarization, patient communication, and pharmacy support workflows.",
        "Built Retrieval-Augmented Generation (RAG) pipelines using FAISS, Pinecone, and vector embeddings to enable secure, context-aware retrieval from healthcare knowledge bases and enterprise medical documentation.",
        "Developed prompt engineering frameworks with guardrails to improve response accuracy, consistency, and reliability while minimizing hallucinations in LLM-generated responses.",
        "Created NLP pipelines using PyTorch and Hugging Face Transformers to classify medical documents and extract diagnoses, medications, procedures, and clinical entities from unstructured healthcare data.",
        "Integrated AI-powered microservices with enterprise healthcare applications using FastAPI and REST APIs while supporting secure, HIPAA-compliant data processing.",
        "Optimized model inference performance by improving latency, token utilization, and response quality through prompt optimization and evaluation frameworks.",
        "Deployed production-ready AI services using Docker, Kubernetes, MLflow, and Azure DevOps CI/CD pipelines for scalable enterprise deployments.",
        "Collaborated with healthcare SMEs, business stakeholders, and engineering teams to design and deliver production-ready AI solutions that enhanced pharmacy and healthcare workflows."
      ]
    },
    {
      company: "The Bank of New York Mellon",
      role: "AI/ML Engineer",
      location: "New York, NY",
      duration: "Dec 2024 - Oct 2025",
      achievements: [
        "Developed and deployed Machine Learning models using Python, TensorFlow, PyTorch, and Scikit-learn for fraud detection, AML monitoring, customer segmentation, and banking risk analysis.",
        "Built NLP and Retrieval-Augmented Generation (RAG) solutions using LangChain, LlamaIndex, Hugging Face, FAISS, and Pinecone for intelligent document search, KYC automation, and banking document processing.",
        "Designed scalable ETL and data processing pipelines using Apache Spark, Databricks, Kafka, SQL, and Airflow to process structured and unstructured financial data.",
        "Converted data science prototypes into production-ready AI services using FastAPI, REST APIs, MLflow, Kubeflow, and Azure Machine Learning",
        "Implemented MLOps workflows including model versioning, deployment, monitoring, data drift detection, and CI/CD automation using Azure DevOps, GitHub Actions, and Jenkins.",
        "Integrated AI services with enterprise banking platforms through secure REST APIs, enabling scalable AI-driven business applications.",
        "Developed model validation frameworks, monitoring dashboards, and Responsible AI documentation to support governance and regulatory compliance.",
        "Worked closely with business stakeholders, data scientists, and engineering teams to deliver enterprise AI solutions for financial services."
      ]
    },
    {
      company: "Nationwide Insurance",
      role: "Machine Learning Engineer",
      location: "Columbus, OH",
      duration: "Mar 2023 - Nov 2024",
      achievements: [
        "Developed patient readmission risk prediction models using Python, Scikit-learn, and XGBoost trained on EHR datasets and ICD coded records, improving early identification of high risk patients by 19% for clinical care teams.",
        "Designed and deployed Machine Learning solutions using Python, TensorFlow, PyTorch, and Scikit-learn for fraud detection, claims automation, underwriting, customer segmentation, and risk assessment.",
        "Built end-to-end ML pipelines covering feature engineering, model training, validation, deployment, and monitoring for enterprise insurance applications.",
        "Developed NLP and Retrieval-Augmented Generation (RAG) solutions using LangChain, Hugging Face, and vector databases to process policy documents, claims reports, adjuster notes, and customer communications.",
        "Implemented scalable MLOps pipelines using MLflow, Docker, Kubernetes, and cloud-native AI services across development, testing, and production environments.",
        "Integrated AI models with enterprise policy administration, claims management, and customer service platforms using FastAPI and REST APIs.",
        "Performed model validation, A/B testing, explainability, and performance evaluation to improve prediction accuracy and business impact.",
        "Applied Responsible AI, model governance, and data privacy practices throughout the machine learning lifecycle to support enterprise compliance.",
        "Partnered with actuaries, claims analysts, underwriters, and cloud architects to deliver production-ready AI solutions for insurance operations."
      ]
    },
    {
      company: "Wipro",
      role: "AI/ML Python Developer",
      location: "Bangalore, India",
      duration: "Mar 2022 - Dec 2022",
      achievements: [
        "Developed Python-based backend applications and RESTful APIs using FastAPI to automate telecom business processes and integrate enterprise CRM and billing systems.",
        "Built ETL pipelines using Python, SQL, Pandas, and NumPy to process customer, billing, and telecom operational data for analytics and reporting.",
        "Developed Machine Learning models using Scikit-learn and XGBoost to identify high-risk subscribers and improve customer retention initiatives.",
        "Designed real-time data ingestion workflows using Apache Kafka and Apache Airflow to process telecom events and automate batch processing pipelines.",
        "Integrated Python services with Oracle Service Bus (OSB) and Oracle SOA Suite to enable seamless communication across enterprise applications.",
        "Containerized backend applications using Docker and supported automated deployments through Git, Jenkins, Maven, and CI/CD workflows.",
        "Optimized SQL queries, performed data validation, and generated reconciliation reports to improve data quality and reporting accuracy.",
        "Collaborated with developers, DBAs, QA engineers, and business analysts to deliver reliable, scalable, and production-ready enterprise applications."
      ]
    },
    {
      company: "BSNL",
      role: "Data Engineer",
      location: "Hyderabad, India",
      duration: "Jul 2021 - Feb 2022",
      achievements: [
        "Designed and developed ETL/ELT pipelines using Python and SQL to ingest, transform, and process structured and unstructured enterprise data for analytics and reporting.",
        "Built scalable batch and real-time data pipelines using Apache Spark, PySpark, Kafka, and Airflow to support enterprise data processing workloads.",
        "Optimized SQL queries, data transformations, and pipeline performance to improve processing efficiency, scalability, and data reliability.",
        "Developed data models and managed relational and NoSQL databases including PostgreSQL, MySQL, and MongoDB to support downstream analytics applications.",
        "Implemented data validation, quality checks, monitoring, and governance processes to ensure data accuracy, consistency, and completeness.",
        "Supported cloud-based data processing using AWS services for scalable storage, compute, and enterprise data integration.",
        "Applied RBAC, data security, and governance practices to protect enterprise data assets and support compliance requirements.",
        "Collaborated with data scientists, business analysts, and software engineers to deliver high-quality datasets for analytics, reporting, and AI/ML initiatives."
      ]
    }
  ],

  projects: [
    {
      title: "Enterprise Generative AI Knowledge Assistant",
      description: "Built document ingestion and preprocessing pipelines using Python, PySpark, Apache Spark, and Databricks on AWS to process large volumes of enterprise documents and research reports, enabling scalable data preparation for LLM based knowledge retrieval.",
      technologies: ["Python", "PySpark", "LangChain", "Hugging Face", "Azure ML", "Docker", "FastAPI"],
      liveUrl: "#",
      repoUrl: "https://github.com/tejoaarepalli",
      image: "/enterprise_ai.png"
    },
    {
      title: "Fraud Detection Machine Learning Platform",
      description: "Engineered data ingestion and feature processing pipelines using PySpark, Apache Spark, Apache Kafka, and Databricks to transform high volume transaction streams into model ready datasets for fraud analytics.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Apache Kafka", "MLflow", "Azure ML", "FastAPI"],
      liveUrl: "#",
      repoUrl: "https://github.com/tejoaarepalli",
      image: "/fraud_detection.png"
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Campbellsville University",
      location: "Kentucky, USA",
      duration: "Graduate"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      location: "Andhra Pradesh, India",
      duration: "Graduate"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Machine Learning Engineer",
      provider: "Amazon Web Services",
      year: "2024",
      credentialUrl: "#"
    },
    {
      name: "Google Cloud Certified - Generative AI Studio",
      provider: "Google Cloud",
      year: "2024",
      credentialUrl: "#"
    },
    {
      name: "Machine Learning Specialization",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Deep Learning Specialization",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Machine Learning Engineering for Production (MLOps)",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Generative AI for Developers",
      provider: "LinkedIn Learning",
      year: "2024",
      credentialUrl: "#"
    }
  ],

  contact: {
    email: "mahesht4655@gmail.com",
    phone: "+1 (224) 486-9160",
    github: "https://github.com/tejoaarepalli",
    location: "Des Plaines, IL"
  }
};

export default portfolioData;
