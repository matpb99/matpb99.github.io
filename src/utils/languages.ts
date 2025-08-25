export interface Language {
  name: string;
  iconName: string;
  className?: string;
  
}

export const languages: Record<string, Language> = {
  python: {
    name: "Python",
    iconName: "python",

  },
  sql: {
    name: "SQL",
    iconName: "sql",

  },
  html: {
    name: "HTML",
    iconName: "html",

  },
  latex: {
    name: "LaTeX",
    iconName: "latex",

  },
  bigquery: {
    name: "BigQuery",
    iconName: "google-bigquery",

  },
  powerbi: {
    name: "Power BI",
    iconName: "power-bi",

  },
  tableau: {
    name: "Tableau",
    iconName: "tableau",

  },
  looker: {
    name: "Looker",
    iconName: "looker",

  },
  seaborn: {
    name: "Seaborn",
    iconName: "seaborn",

  },
  matplotlib: {
    name: "Matplotlib",
    iconName: "matplotlib",

  },
  powerautomate: {
    name: "Power Automate",
    iconName: "power-automate",

  },
  git: {
    name: "Git",
    iconName: "git",

  },
  excel: {
    name: "MS Excel",
    iconName: "microsoft-excel",

  },
  googlecolab: {
    name: "Google Colab",
    iconName: "google-colab",

  },
  msproject: {
    name: "MS Project",
    iconName: "microsoft-project",

  },

  ollama: {
    name: "Ollama",
    iconName: "ollama",

  },

  "web-scraping": {
    name: "Web Scraping",
    iconName: "web-scraping",

  },
  apis: {
    name: "APIs",
    iconName: "apis",

  },
  streamlit: {
    name: "Streamlit",
    iconName: "streamlit",

  },
  rlang: {
    name: "R",
    iconName: "r-lang",

  },
  sklearn: {
    name: "Scikit learn",
    iconName: "sklearn",

  },
  pandas: {
    name: "Pandas",
    iconName: "pandas",

  },
  tensorflow: {
    name: "TensorFlow",
    iconName: "tensorflow",

  },
  sqlite: {
    name: "SQLite",
    iconName: "sqlite",

  },
  pytorch: {
    name: "PyTorch",
    iconName: "pytorch",

  },
  opencv: {
    name: "OpenCV",
    iconName: "opencv",

  },
  numpy: {
    name: "NumPy",
    iconName: "numpy",

  },
  keras: {
    name: "Keras",
    iconName: "keras",

  },
  fastapi: {
    name: "FastAPI",
    iconName: "fastapi",

  },
  docker: {
    name: "Docker",
    iconName: "docker",

  },
  astro: {
    name: "Astro",
    iconName: "astro",

  },
  selenium: {
    name: "Selenium",
    iconName: "selenium",
    
  },
  vscode: {
    name: "VSCode",
    iconName: "vscode",
    
  },
  huggingface: {
    name: "Hugging Face",
    iconName: "huggingface",

  },
  airflow: {
    name: "Airflow",
    iconName: "airflow",

  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",

  },
  mysql: {
    name: "MySQL",
    iconName: "mysql",
    
  },
  githubactions: {
    name: "GitHub Actions",
    iconName: "githubactions",
  },
  grafana: {
    name: "Grafana",
    iconName: "grafana",
  },
  graphql: {
    name: "GraphQL",
    iconName: "graphql",
  },
  kaggle: {
    name: "Kaggle",
    iconName: "kaggle",
  },
  mongodb: {
    name: "MongoDB",
    iconName: "mongodb",
  },
  playwright: {
    name: "Playwright",
    iconName: "playwright",
  },
  ploty: {
    name: "Plotly",
    iconName: "ploty",
  },
  typescript: {
    name: "TypeScript",
    iconName: "typescript",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    iconName: "tailwindcss",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },

};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};