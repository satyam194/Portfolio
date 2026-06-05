/* ==========================================
   SATYAM AI — PORTFOLIO ASSISTANT
   Powered by Claude API
========================================== */

/* ==========================================
   THEME TOGGLE
========================================== */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const isLightMode = document.body.classList.toggle('light-mode');
    const theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeToggle');
    if (icon) {
        icon.querySelector('.theme-icon').textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

/* ==========================================
   ENTRANCE ANIMATIONS
========================================== */

function triggerEntranceAnimations() {
    const fromSplash = sessionStorage.getItem('fromSplash');

    const overlay = document.getElementById('transitionOverlay');

    // Normal page refresh
    if (!fromSplash) {
        if (overlay) {
            overlay.style.display = 'none';
        }
        return;
    }

    sessionStorage.removeItem('fromSplash');

    const sidebar = document.getElementById('sidebar');
    const landing = document.getElementById('landing');
    const main = document.getElementById('main');
    const themeToggle = document.getElementById('themeToggle');

    // Set initial hidden state
    if (sidebar) {
        sidebar.style.opacity = '0';
        sidebar.style.transform = 'translateY(60px)';
    }

    if (landing) {
        landing.style.opacity = '0';
        landing.style.transform = 'translateY(60px)';
    }

    if (themeToggle) {
        themeToggle.style.opacity = '0';
        themeToggle.style.transform = 'translateY(60px)';
    }

    // Trigger animations
    setTimeout(() => {
        if (overlay) {
            overlay.classList.add('hide');
        }

        if (sidebar) {
            sidebar.classList.add('entrance-animate');
        }

        if (main) {
            main.classList.add('entrance-animate');
        }

        if (landing) {
            landing.classList.add('entrance-animate');
        }

        if (themeToggle) {
            themeToggle.classList.add('entrance-animate');
        }
    }, 50);
}

document.addEventListener('DOMContentLoaded', triggerEntranceAnimations);

const knowledgeBase = {
    "Financial Anomaly Detection": `<h3>Financial Anomaly Detection with LLM Integration</h3>
<div class="expand-summary"> <strong>Trained ensemble models</strong> – Random Forest and Isolation Forest on 23 engineered features includes Merchant Risk, Distance, and Declines. </div> <div class="expand-details"> Developed and evaluated multiple machine learning models including Random Forest, Isolation Forest for fraud detection on imbalanced transaction data. Engineered 23 predictive features covering merchant risk, transaction velocity, geographic distance, historical decline patterns, cardholder occupation risk and behavioral spending trends. Performed feature importance analysis and model validation to identify the strongest fraud indicators and improve detection performance. </div>
<div class="expand-summary"> <strong>Integrated GPT-4o-mini pipeline</strong> to automatically generate structured analyst case summaries for flagged transactions. </div> <div class="expand-details"> Designed an automated case narration workflow that converts model outputs into investigation summaries. Generated explanations highlighting key risk factors, unusual transaction patterns, merchant behavior and confidence scores, reducing manual review effort and improving analyst productivity. Structured outputs to mirror real fraud investigation reports and support faster decision making. </div>
<div class="expand-summary"> <strong>Achieved 97% accuracy and 0.98 weighted F1 score</strong> across 389K transactions. </div> <div class="expand-details"> Trained and evaluated models on a dataset containing over 389k+ financial transactions. Achieved strong overall classification performance with 97% accuracy and a weighted F1 score of 0.98 while maintaining stability across validation datasets. Conducted detailed performance evaluation using confusion matrices, precision, recall and class-specific metrics. </div>
<div class="expand-summary"> <strong>Documented precision-recall tradeoffs</strong> on a 97:3 imbalanced dataset and proposed threshold tuning and SMOTE-based improvements. </div> <div class="expand-details"> Analyzed fraud-class recall limitations caused by severe class imbalance where fraudulent transactions represented only approximately 3% of the dataset. Evaluated threshold optimization strategies and investigated synthetic oversampling techniques such as SMOTE to improve fraud detection sensitivity. Proposed enhancements capable of increasing fraud recall while preserving acceptable false-positive rates for business users. </div>`,

    "Credit Risk Monitoring": `<h3>Credit Risk Monitoring & Model Drift Detection</h3>
<p><strong>Project Overview:</strong> Automated model monitoring and drift detection workflows implemented during tenure at American Express to proactively identify performance degradation.</p>
<div class="expand-summary"> <strong>SHAP Explainability Framework</strong> – Enhanced model interpretability through SHAP-based feature importance analysis and decision explanations. </div> <div class="expand-details"> Implemented SHAP based analysis to provide transparent, model-agnostic explanations for credit risk predictions. Generated feature importance rankings and individual prediction explanations, enabling analysts to understand key decision drivers. </div>
<div class="expand-summary"> <strong>Model Drift Detection Pipelines</strong> – Continuous monitoring of model performance degradation across multiple dimensions. </div> <div class="expand-details"> Built automated vendor tracking model performance metrics continuously against baseline thresholds. Implemented multi-dimensional drift detection covering distribution shifts, performance decay, and data quality issues. </div>
<div class="expand-summary"> <strong>Gini Coefficient Monitoring</strong> – Tracked discrimination power and stability of credit risk models. </div> <div class="expand-details"> Established Gini coefficient as primary metric for monitoring model discrimination ability and discriminatory power stability. Created rolling baseline tracking using 10-day windows to detect emerging performance issues early. Implemented control limit breach detection with Root Cause Analysis workflows to identify underlying causes of degradation. </div>
<div class="expand-summary"> <strong>Multi-metric Tracking & Recalibration Automation</strong> – Monitored accuracy, stability metrics and proposed automated recovery strategies. </div> <div class="expand-details"> Tracked comprehensive metrics including accuracy, stability, across validation datasets. Analyzed performance patterns to identify optimal recalibration triggers and strategies. Contributed to 5% performance improvement through targeted model tuning and threshold optimization. </div>`,

    "Power BI Dashboard": `<h3>Power BI Operations Dashboard – mCaffeine</h3>
<p><strong>Project Overview:</strong> Created a real-time dashboard analyzing over 900K orders for mCaffeine's logistics operations, enabling data-driven decision-making across the organization.</p>
<div class="expand-summary"> <strong>900K+ Orders Processed</strong> – Real-time data integration and visualization across multiple sales channels. </div> <div class="expand-details"> Integrated data from multiple e-commerce channels including direct website, marketplace partners, and third-party sellers. Built ETL pipelines processing 900K+ monthly orders into Power BI. Implemented incremental refresh strategies to handle growing data volumes efficiently while maintaining dashboard responsiveness. </div>
<div class="expand-summary"> <strong>Regional Performance Analysis</strong> – Geographic insights enabling localized optimization strategies. </div> <div class="expand-details"> Created geographic heat maps and regional performance comparisons across cities and states. Analyzed regional demand patterns, delivery times, and customer satisfaction metrics by location. Generated insights on regional logistics gaps and capacity constraints, enabling targeted resource allocation. Provided region-specific dashboards for branch managers to monitor local KPIs independently. </div>
<div class="expand-summary"> <strong>Delivery Route Optimization</strong> – Data-driven recommendations for improving logistics efficiency (4.6% improvement achieved). </div> <div class="expand-details"> Analyzed delivery route data to identify inefficiencies, bottlenecks, and optimization opportunities. Benchmarked current turnaround times against industry standards and peer performance. Recommended route consolidation strategies, regional hub optimization, and resource reallocation. Achieved 4.6% improvement in delivery efficiency through implemention of recommendations, reducing average delivery time and improving customer satisfaction. </div>
<div class="expand-summary"> <strong>Inventory Monitoring & Operational KPIs</strong> – Automated tracking with threshold-based alerting and comprehensive metrics dashboard. </div> <div class="expand-details"> Implemented real-time inventory tracking across 100+ warehouses and fulfillment centers. Set up automated alerts for low-stock conditions, overstock situations, and expiring inventory. Created comprehensive KPI dashboards covering order fulfillment rates, delivery performance, customer satisfaction, and operational costs. Enabled drill-down analysis from executive summaries to operational details for problem investigation. </div>`,

    "American Express": `<h3>American Express – Data Science (Credit Risk)</h3>
<p><strong>Duration:</strong> Sept 2025 – May 2026</p>
<div class="expand-summary"> <strong>Engineered automated case review tool</strong> reducing manual effort by 50%+ and supporting high-volume case analysis. </div> <div class="expand-details"> Built end-to-end automation framework for case review and vendor model tracking across US and international markets. Integrated data from multiple sources (transaction systems, bureau reports, vendor feeds) into unified case review interface. Reduced manual review time per case by 50%+ through pre-population of risk factors. Supported analysis of cases monthly, enabling faster decision-making and improved productivity across teams. </div>
<div class="expand-summary"> <strong>Reviewed high-balance risk cases</strong> ($30M+) and delivered SHAP-based insights. </div> <div class="expand-details"> Analyzed complex, high-value credit risk cases exceeding $30M balance thresholds requiring manual expert review. Provided interpretable model explanations using SHAP values, showing feature contributions to risk scores. Integrated transaction-level behavioral analysis with bureau information and historical patterns. Generated executive summaries highlighting key risk drivers and recommended approval/decline decisions with confidence scores. </div>
<div class="expand-summary"> <strong>Identified model drift</strong> across Gini, accuracy, and stability metrics with recalibration strategies. </div> <div class="expand-details"> Monitored model performance against baseline metrics tracking discrimination power (Gini), accuracy, and stability over time. Identified drift patterns indicating performance degradation and root causes such as population shifts or data quality issues. Proposed targeted model retraining and threshold optimization strategies. Implemented recalibration approach achieving 5% performance improvement while maintaining model stability and regulatory compliance. </div>
<div class="expand-summary"> <strong>Led CDIT tracking</strong> using 10-day rolling averages with RCA on control limit breaches. </div> <div class="expand-details"> Established comprehensive CDIT monitoring using 10-day rolling window analysis across max, min, mean, median, and missing% metrics. Performed Root Cause Analysis on control limit violations, investigating data quality issues, process changes, and system problems. </div>`,

    "mCaffeine": `<h3>mCaffeine – Data Analyst & Automation Intern</h3>
<p><strong>Duration:</strong> May 2025 – Aug 2025</p>
<div class="expand-summary"> <strong>Created real-time Power BI dashboard</strong> analysing 900K+ orders across multiple channels. </div> <div class="expand-details"> Designed and implemented comprehensive Power BI dashboard integrating order data from all sales channels (direct website, marketplace partners, logistics partners). Built data models supporting 900K+ monthly order volume with sub-minute refresh cycles. Created interactive visualizations for regional utilization tracking, channel performance comparison, and trend analysis. Enabled business teams to identify bottlenecks and opportunities through self-service analytics, reducing dependency on manual reporting. </div>
<div class="expand-summary"> <strong>Improved delivery efficiency by 4.6%</strong> through regional optimization analysis. </div> <div class="expand-details"> Conducted comprehensive logistics KPI analysis across geographic regions and fulfillment centers. Identified regional performance gaps through benchmarking and trend analysis. Analyzed delivery route efficiency, turnaround times, and resource utilization patterns. Recommended targeted process optimizations including route consolidation, hub rebalancing, and staffing adjustments. Achieved 4.6% overall improvement in delivery efficiency with reduced average turnaround time and improved customer satisfaction scores. </div>
<div class="expand-summary"> <strong>Designed order fulfillment dashboard</strong> eliminating 70%+ manual reporting. </div> <div class="expand-details"> Built end-to-end order fulfillment tracking dashboard covering order intake, inventory allocation, picking/packing, and shipping stages. Implemented automated data pipelines extracting from multiple legacy systems and transforming into unified schema. Created real-time visualizations showing fulfillment metrics, exceptions, and performance trends. Reduced manual reporting overhead by 70%+ while improving reporting accuracy and enabling faster issue identification. </div>
<div class="expand-summary"> <strong>Built master inventory framework</strong> with 15+ attributes reducing errors by 30%. </div> <div class="expand-details"> Designed centralized inventory master data framework with 15+ structured attributes covering product identifiers, attributes, locations, SKU configurations, and supply chain properties. Consolidated inventory information from multiple disparate systems into single source of truth. Implemented data validation and quality checks reducing product listing errors by 30%. Improved catalog accuracy, supply visibility, and inventory planning efficiency across the organization. </div>`,

    "Education": `<h3>Indian Institute of Technology (ISM), Dhanbad</h3>
<p><strong>Bachelor of Technology in Chemical Engineering</strong></p>
<p>Duration: Aug 2021 – May 2025 | Location: Dhanbad, Jharkhand</p>
<div class="expand-summary"> <strong>Core Chemical Engineering Curriculum</strong> </div> <div class="expand-details"> Completed coursework covering thermodynamics, mass transfer, chemical reaction engineering, process design, and safety systems. Gained practical knowledge through laboratory experiments, process simulations, and case studies based on real industrial scenarios. Developed strong foundation in mathematical modeling, optimization, and problem-solving applicable across technical domains. </div>
<div class="expand-summary"> <strong>Advanced Coursework in Data Science & AI</strong>  </div> <div class="expand-details"> Pursued specialized coursework in Data Science, Statistics, Advanced Machine Learning, and Artificial Intelligence applications. Completed projects involving predictive modeling, anomaly detection, and optimization algorithms. Applied technical concepts to real-world problems including supply chain optimization and process improvement. Developed strong programming skills in Python, SQL, and data analysis tools. </div>`,

    "Achievements": `<h3>Achievements & Rankings</h3>
<div class="expand-summary"> <strong>Top 1% in JEE Advanced 2021</strong> – Ranked nationally among the top 1% of competitive exam takers. </div> <div class="expand-details"> Cleared both JEE Mains 2021 and JEE Advanced 2021 competitive examinations with top 1% ranking nationally. </div>
<div class="expand-summary"> <strong>MMVY Scholarship</strong> – Government of Madhya Pradesh award for top achievers. </div> <div class="expand-details"> Awarded prestigious MMVY (Mukhyamantri Medhavi Yojana) scholarship by the Government of Madhya Pradesh for exceptional academic performance in Class 12 examinations and JEE qualifying rank. Scholarship recognizes top performers demonstrating exceptional aptitude and potential. Award provided recognition and financial support for continuing technical education at premier institute. </div>
<div class="expand-summary"> <strong>Competitive Rankings</strong> – Top 0.01% Walmart, Top 50 Meesho, Rank 20 Kaggle. </div> <div class="expand-details"> Achieved top 0.01% ranking in Walmart SparkPlug Competition, earning direct internship opportunity with Walmart. Reached top 50 position in Meesho Dice Competition with outstanding Software domain performance. Achieved Rank 20 out of 500 teams in Kaggle KDSH Data Solution Competition demonstrating strong predictive modeling and machine learning capabilities. </div>
<div class="expand-summary"> <strong>Doraemon Den PM Bootcamp Excellence Award</strong> – Recognition for product management learning. </div> <div class="expand-details"> Received Cretificate from Doraemon Den Product Management Bootcamp for outstanding performance in competitive product management curriculum. Understanding of product strategy, user research, roadmapping, and go-to-market execution. Demonstrated ability to apply business concepts and analytical frameworks to complex product challenges. </div>`,

    "Skills": `<h3>Technical Skills</h3>
<div class="expand-summary"> <strong>Programming Languages</strong> – Python, SQL, SAS, C, C++ for various computational tasks. </div> <div class="expand-details"> <strong>Python:</strong> Primary language for data science, machine learning, and automation with expertise in scientific computing, data manipulation, and scripting. <strong>SQL:</strong> Advanced database querying, optimization, and data warehousing across relational databases. <strong>SAS:</strong> Statistical analysis and data management for enterprise analytics workflows. <strong>C/C++:</strong> Systems programming, performance-critical algorithms, and software engineering fundamentals. Strong foundation in programming paradigms, algorithms, and code optimization. </div>
<div class="expand-summary"> <strong>Data Science & Machine Learning</strong> – End-to-end ML pipeline development and deployment. </div> <div class="expand-details"> <strong>ML Libraries:</strong> Scikit-learn for classical machine learning, TensorFlow for deep learning, XGBoost for gradient boosting. <strong>Data Processing:</strong> Pandas for data manipulation and transformation, NumPy for numerical computing and vectorized operations. <strong>Algorithms:</strong> Expertise in supervised learning (Logistic Regression, Linear SVC, Random Forest), unsupervised learning (Isolation Forest), and time series (ARIMA). <strong>Interpretability:</strong> SHAP for model explanation and feature importance analysis. Experience building production ML systems with model validation, monitoring, and retraining pipelines. </div>
<div class="expand-summary"> <strong>Data Visualization & Analytics</strong> – Dashboard design and business intelligence tools. </div> <div class="expand-details"> <strong>BI Platforms:</strong> Power BI for interactive dashboards and real-time reporting, Tableau for exploratory analysis and advanced visualizations. <strong>Python Viz:</strong> Matplotlib and Seaborn for statistical graphics and publication-quality visualizations. <strong>Spreadsheet Tools:</strong> Advanced Excel for financial modeling, pivot tables, and complex computations. Strong ability to translate complex data into actionable visual insights for diverse stakeholder audiences. </div>
<div class="expand-summary"> <strong>Web & Development Tools</strong> – Full-stack web development and DevOps. </div> <div class="expand-details"> <strong>Frontend:</strong> HTML, CSS, JavaScript for interactive web applications and responsive UI design. <strong>Backend:</strong> API development, server-side processing, and database integration. <strong>Development Tools:</strong> Git for version control and collaboration, Jupyter for interactive analysis and documentation, VS Code for development environment. <strong>Specialized Tools:</strong> MATLAB for numerical computing, BeautifulSoup for web scraping, Selenium for browser automation. Experience with modern development workflows and continuous integration practices. </div>`,
    
    "Contact Information": `<h3>Contact Information</h3>
<p>You can reach Satyam through the following channels:</p>

<div class="expand-summary">
<strong>Phone</strong>
</div>
<div class="expand-details">
+91 8719053010
</div>

<div class="expand-summary">
<strong>Email</strong> 
</div>
<div class="expand-details">
<a href="mailto:satyam.kushwah1904@gmail.com">satyam.kushwah1904@gmail.com</a>
</div>

<div class="expand-summary">
<strong>LinkedIn</strong>
</div>
<div class="expand-details">
<a href="https://www.linkedin.com/in/satyam-kushwah-005265246/" target="_blank">
linkedin.com/in/satyam-kushwah-005265246
</a>
</div>`

};

/* ==========================================
   STATE
========================================== */

let chatStarted = false;
let isThinking = false;
const conversationHistory = [];

const chatContainer = document.getElementById('chat-container');
const landing = document.getElementById('landing');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

/* ==========================================
   CHAT INIT
========================================== */

function startChat() {
    if (chatStarted) return;
    chatStarted = true;
    landing.classList.add('hidden');
    chatContainer.classList.add('active');
}

/* ==========================================
   MESSAGES
========================================== */

function addUserMessage(text) {
    const row = document.createElement('div');
    row.className = 'msg-row user';
    row.innerHTML = `
        <div class="msg-avatar">You</div>
        <div class="msg-bubble">${escapeHTML(text)}</div>
    `;
    chatContainer.appendChild(row);
    scrollBottom();
}

function addAIMessage(html) {
    const row = document.createElement('div');
    console.log("addAIMessage received:", html);
    row.className = 'msg-row ai';
    row.innerHTML = `
        <div class="msg-avatar">SK</div>
        <div class="msg-bubble">${html}</div>
    `;
    chatContainer.appendChild(row);
    
    // Make message clickable for expansion
    makeMessageClickable(row);
    
    scrollBottom();
    return row;
}

function addTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'msg-row ai typing-row';
    row.innerHTML = `
        <div class="msg-avatar">SK</div>
        <div class="msg-bubble">
            <div class="typing-dot">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatContainer.appendChild(row);
    scrollBottom();
    return row;
}

function escapeHTML(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function scrollBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

/* ==========================================
   API CALL
========================================== */

async function callGroqAPI(question) {

    const response = await fetch(
        "https://satyam-ai-backend.onrender.com/chat",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question
            })
        }
    );

    if (!response.ok) {
        throw new Error("API Error");
    }

    const data = await response.json();

    return formatAPIResponse(data.answer);
}

function formatAPIResponse(text) {
    // Convert bullet lines to HTML list items and add links/emails
    const lines = text.split('\n');
    let html = '';
    let inList = false;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) {
            if (inList) { html += '</ul>'; inList = false; }
            continue;
        }
        
        const formattedLine = addLinksAndEmails(trimmed);
        
        if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += `<li>${formattedLine.replace(/^[-•]\s*/, '')}</li>`;
        } else {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<p>${formattedLine}</p>`;
        }
    }
    if (inList) html += '</ul>';
    return html;
}

function addLinksAndEmails(text) {
    // URL regex - matches http://, https://, and www.
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    // Email regex
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    
    // Replace URLs with clickable links
    text = text.replace(urlRegex, (match) => {
        const url = match.startsWith('http') ? match : 'https://' + match;
        return `<a href="${url}" target="_blank" class="msg-link">${match}</a>`;
    });
    
    // Replace emails with mailto links
    text = text.replace(emailRegex, (match) => {
        return `<a href="mailto:${match}" class="msg-link">${match}</a>`;
    });
    
    return text;
}

function processHTMLForLinks(html) {
    // Create a temporary element to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Process all text nodes
    const walker = document.createTreeWalker(
        temp,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodesToReplace = [];
    let node;
    
    while (node = walker.nextNode()) {
        const text = node.textContent;
        const processed = addLinksAndEmails(text);
        if (processed !== text) {
            nodesToReplace.push({ node, processed });
        }
    }
    
    // Replace text nodes with processed HTML
    nodesToReplace.forEach(({ node, processed }) => {
        const span = document.createElement('span');
        span.innerHTML = processed;
        node.parentNode.replaceChild(span, node);
    });
    
    return temp.innerHTML;
}

/* ==========================================
   CLICKABLE MESSAGE EXPANSION
========================================== */

function makeMessageClickable(messageElement) {
    const bubble = messageElement.querySelector('.msg-bubble');
    
    // Handle expand-summary/expand-details pairs
    const summaries = bubble.querySelectorAll('.expand-summary');
    summaries.forEach(summary => {
        const details = summary.nextElementSibling;
        if (details && details.classList.contains('expand-details')) {
            summary.addEventListener('click', (e) => {
                e.stopPropagation();
                summary.classList.toggle('open');
                details.classList.toggle('open');
            });
        }
    });
    
    // Handle suggestion items
    const suggestions = bubble.querySelectorAll('.suggestion-item');
    suggestions.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const question = item.getAttribute('data-question');
            if (question) {
                userInput.value = question;
                sendMessage();
            }
        });
    });
}

/* ==========================================
   STATIC FALLBACK (offline)
========================================== */

function getStaticResponse(question) {
    const q = question.toLowerCase().trim();

    const suggestionMap = {
    "tell me about your american express experience": knowledgeBase["American Express"],
    "tell me about your mcaffeine experience": knowledgeBase["mCaffeine"],
    "sharing contact information": knowledgeBase["Contact Information"],
    "explain the fraud detection project": knowledgeBase["Financial Anomaly Detection"],
    "what are your technical skills?": knowledgeBase["Skills"],
    "what achievements do you have?": knowledgeBase["Achievements"]
    };

    const exactMatch = suggestionMap[q];

    if (exactMatch) {
        return exactMatch;
    }
    if (q.includes('fraud') || q.includes('anomaly')) return knowledgeBase.fraud;
    if (q.includes('american') || q.includes('amex')) return knowledgeBase.amex;
    if (q.includes('mcaffeine') || q.includes('caffeine')) return knowledgeBase.mcaffeine;
    if (q.includes('contact') || q.includes('email') || q.includes('linkedin')|| q.includes('phone') || q.includes('contact information') || q.includes('contact details') || q.includes('contact info') || q.includes('contact information')|| q.includes('mail')|| q.includes('reach')) return knowledgeBase["Contact Information"];
    if (q.includes('dashboard') || q.includes('power bi')) return knowledgeBase.dashboard;
    if (q.includes('risk') || q.includes('credit')) return knowledgeBase.risk;
    if (q.includes('education') || q.includes('iit') || q.includes('college') || q.includes('university')) return knowledgeBase.education;
    if (q.includes('achievement') || q.includes('award') || q.includes('rank') || q.includes('jee')) return knowledgeBase.achievements;
    if (q.includes('skill') || q.includes('tech') || q.includes('python') || q.includes('ml')) return knowledgeBase.skills;
    return `<p>I can help you learn about Satyam's work. Try asking about:</p>
<ul>
<li class="suggestion-item" data-question="American Express or mCaffeine experience">American Express or mCaffeine experience</li>
<li class="suggestion-item" data-question="The fraud detection or credit risk project">The fraud detection or credit risk project</li>
<li class="suggestion-item" data-question="Technical skills and tools">Technical skills and tools</li>
<li class="suggestion-item" data-question="Education at IIT ISM Dhanbad">Education at IIT ISM Dhanbad</li>
<li class="suggestion-item" data-question="Achievements and rankings">Achievements and rankings</li>
</ul>`;
}   

/* ==========================================
   SEND MESSAGE
========================================== */

async function sendMessage() {
    const question = userInput.value.trim();
    if (!question || isThinking) return;

    isThinking = true;
    sendBtn.disabled = true;
    startChat();
    addUserMessage(question);
    userInput.value = '';
    autoResize();

    const typing = addTypingIndicator();

    try {
        const html = await callGroqAPI(question);
        typing.remove();
        addAIMessage(html);
    } catch (err) {
        console.warn('API unavailable, using static response:', err.message);

        const html = getStaticResponse(question);

        console.log("Question:", question);
        console.log("Static HTML:", html);
        console.log("Type:", typeof html);

        typing.remove();
        addAIMessage(html);
    }

    isThinking = false;
    sendBtn.disabled = false;
    userInput.focus();
}

/* ==========================================
   SIDEBAR SECTIONS
========================================== */

function loadSection(section) {
    startChat();
    const label = section.charAt(0).toUpperCase() + section.slice(1);
    addUserMessage(`Tell me about: ${label}`);

    conversationHistory.push({ role: 'user', content: [{ text: `Tell me about: ${label}` }] });
    let html = knowledgeBase[section] || `<p>No info found for "${label}".</p>`;
    
    // Add links and emails to predefined answers
    html = processHTMLForLinks(html);
    
    const aiText = html.replace(/<[^>]+>/g, ' ').trim();
    conversationHistory.push({ role: 'assistant', content: [{ text: aiText }] });

    setTimeout(() => addAIMessage(html), 400);
}

/* ==========================================
   SUGGESTION CHIPS
========================================== */

function askQuestion(question) {
    userInput.value = question;
    sendMessage();
}

/* ==========================================
   AUTO-RESIZE TEXTAREA
========================================== */

function autoResize() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 160) + 'px';
}

userInput.addEventListener('input', autoResize);

/* ==========================================
   SIDEBAR TOGGLE (mobile)
========================================== */

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

/* ==========================================
   KEYBOARD
========================================== */

userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

console.log('%cSATYAM AI INITIALIZED', 'color: #c8ff57; font-weight: bold; font-size: 14px;');
