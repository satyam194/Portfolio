/* ==========================================
   SATYAM AI — PORTFOLIO ASSISTANT
   Powered by Groq API
========================================== */

/* ==========================================
   THEME
========================================== */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    ['themeToggle', 'themeToggleMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.querySelector('.theme-icon').textContent = theme === 'light' ? '☀️' : '🌙';
    });
}

/* ==========================================
   ENTRANCE ANIMATIONS
========================================== */

function triggerEntranceAnimations() {
    const fromSplash = sessionStorage.getItem('fromSplash');
    const overlay = document.getElementById('transitionOverlay');
    const sidebar = document.getElementById('sidebar');
    const landing = document.getElementById('landing');
    const main = document.getElementById('main');
    const themeToggle = document.getElementById('themeToggle');

    if (overlay) overlay.style.display = 'none';

    if (!fromSplash) {
        if (sidebar) sidebar.style.opacity = '1';
        if (landing) { landing.style.opacity = '1'; landing.style.transform = 'none'; }
        if (themeToggle) { themeToggle.style.opacity = '1'; themeToggle.style.transform = 'none'; }
        return;
    }

    sessionStorage.removeItem('fromSplash');

    if (sidebar) { sidebar.style.opacity = '0'; sidebar.style.transform = 'translateY(60px)'; }
    if (landing) { landing.style.opacity = '0'; landing.style.transform = 'translateY(60px)'; }
    if (themeToggle) { themeToggle.style.opacity = '0'; themeToggle.style.transform = 'translateY(60px)'; }

    setTimeout(() => {
        if (overlay) overlay.classList.add('hide');
        if (sidebar) sidebar.classList.add('entrance-animate');
        if (main) main.classList.add('entrance-animate');
        if (landing) landing.classList.add('entrance-animate');
        if (themeToggle) themeToggle.classList.add('entrance-animate');
    }, 50);
}

/* ==========================================
   KNOWLEDGE BASE
========================================== */

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
<div class="expand-summary"> <strong>Regional Performance Analysis</strong> – Geographic insights enabling localized optimization strategies. </div> <div class="expand-details"> Created geographic heat maps and regional performance comparisons across cities and states. Analyzed regional demand patterns, delivery times, and customer satisfaction metrics by location. Generated insights on regional logistics gaps and capacity constraints, enabling targeted resource allocation. </div>
<div class="expand-summary"> <strong>Delivery Route Optimization</strong> – Data-driven recommendations for improving logistics efficiency (4.6% improvement achieved). </div> <div class="expand-details"> Analyzed delivery route data to identify inefficiencies, bottlenecks, and optimization opportunities. Recommended route consolidation strategies, regional hub optimization, and resource reallocation. Achieved 4.6% improvement in delivery efficiency. </div>
<div class="expand-summary"> <strong>Inventory Monitoring & Operational KPIs</strong> – Automated tracking with threshold-based alerting. </div> <div class="expand-details"> Implemented real-time inventory tracking across 100+ warehouses and fulfillment centers. Set up automated alerts for low-stock conditions and overstock situations. Created comprehensive KPI dashboards covering order fulfillment rates, delivery performance, and operational costs. </div>`,

    "American Express": `<h3>American Express – Data Science (Credit Risk)</h3>
<p><strong>Duration:</strong> Sept 2025 – May 2026</p>
<div class="expand-summary"> <strong>Engineered automated case review tool</strong> reducing manual effort by 50%+ and supporting high-volume case analysis. </div> <div class="expand-details"> Built end-to-end automation framework for case review and vendor model tracking across US and international markets. Integrated data from multiple sources (transaction systems, bureau reports, vendor feeds) into unified case review interface. Reduced manual review time per case by 50%+ through pre-population of risk factors. </div>
<div class="expand-summary"> <strong>Reviewed high-balance risk cases</strong> ($30M+) and delivered SHAP-based insights. </div> <div class="expand-details"> Analyzed complex, high-value credit risk cases exceeding $30M balance thresholds requiring manual expert review. Provided interpretable model explanations using SHAP values, showing feature contributions to risk scores. Integrated transaction-level behavioral analysis with bureau information and historical patterns. </div>
<div class="expand-summary"> <strong>Identified model drift</strong> across Gini, accuracy, and stability metrics with recalibration strategies. </div> <div class="expand-details"> Monitored model performance against baseline metrics tracking discrimination power (Gini), accuracy, and stability over time. Proposed targeted model retraining and threshold optimization strategies achieving 5% performance improvement. </div>
<div class="expand-summary"> <strong>Led CDIT tracking</strong> using 10-day rolling averages with RCA on control limit breaches. </div> <div class="expand-details"> Established comprehensive CDIT monitoring using 10-day rolling window analysis across max, min, mean, median, and missing% metrics. Performed Root Cause Analysis on control limit violations, investigating data quality issues, process changes, and system problems. </div>`,

    "mCaffeine": `<h3>mCaffeine – Data Analyst & Automation Intern</h3>
<p><strong>Duration:</strong> May 2025 – Aug 2025</p>
<div class="expand-summary"> <strong>Created real-time Power BI dashboard</strong> analysing 900K+ orders across multiple channels. </div> <div class="expand-details"> Designed and implemented comprehensive Power BI dashboard integrating order data from all sales channels. Built data models supporting 900K+ monthly order volume with sub-minute refresh cycles. Enabled business teams to identify bottlenecks and opportunities through self-service analytics. </div>
<div class="expand-summary"> <strong>Improved delivery efficiency by 4.6%</strong> through regional optimization analysis. </div> <div class="expand-details"> Conducted comprehensive logistics KPI analysis across geographic regions and fulfillment centers. Identified regional performance gaps through benchmarking and trend analysis. Achieved 4.6% overall improvement in delivery efficiency with reduced average turnaround time. </div>
<div class="expand-summary"> <strong>Designed order fulfillment dashboard</strong> eliminating 70%+ manual reporting. </div> <div class="expand-details"> Built end-to-end order fulfillment tracking dashboard covering order intake, inventory allocation, picking/packing, and shipping stages. Reduced manual reporting overhead by 70%+ while improving reporting accuracy. </div>
<div class="expand-summary"> <strong>Built master inventory framework</strong> with 15+ attributes reducing errors by 30%. </div> <div class="expand-details"> Designed centralized inventory master data framework with 15+ structured attributes. Consolidated inventory information from multiple disparate systems into single source of truth. Implemented data validation reducing product listing errors by 30%. </div>`,

    "Education": `<h3>Indian Institute of Technology (ISM), Dhanbad</h3>
<p><strong>Bachelor of Technology in Chemical Engineering</strong></p>
<p>Duration: Aug 2021 – May 2025 | Location: Dhanbad, Jharkhand</p>
<div class="expand-summary"> <strong>Core Chemical Engineering Curriculum</strong> </div> <div class="expand-details"> Completed coursework covering thermodynamics, mass transfer, chemical reaction engineering, process design, and safety systems. Developed strong foundation in mathematical modeling, optimization, and problem-solving. </div>
<div class="expand-summary"> <strong>Advanced Coursework in Data Science & AI</strong> </div> <div class="expand-details"> Pursued specialized coursework in Data Science, Statistics, Advanced Machine Learning, and AI applications. Completed projects involving predictive modeling, anomaly detection, and optimization algorithms. </div>`,

    "Achievements": `<h3>Achievements & Rankings</h3>
<div class="expand-summary"> <strong>Top 1% in JEE Advanced 2021</strong> – Ranked nationally among the top 1% of competitive exam takers. </div> <div class="expand-details"> Cleared both JEE Mains 2021 and JEE Advanced 2021 competitive examinations with top 1% ranking nationally. </div>
<div class="expand-summary"> <strong>MMVY Scholarship</strong> – Government of Madhya Pradesh award for top achievers. </div> <div class="expand-details"> Awarded prestigious MMVY (Mukhyamantri Medhavi Yojana) scholarship for exceptional academic performance. Scholarship provides recognition and financial support for continuing technical education. </div>
<div class="expand-summary"> <strong>Competitive Rankings</strong> – Top 0.01% Walmart, Top 50 Meesho, Rank 20 Kaggle. </div> <div class="expand-details"> Achieved top 0.01% ranking in Walmart SparkPlug Competition. Reached top 50 in Meesho Dice Competition. Achieved Rank 20 out of 500 teams in Kaggle KDSH Data Solution Competition. </div>
<div class="expand-summary"> <strong>Doraemon Den PM Bootcamp Excellence Award</strong> – Recognition for product management learning. </div> <div class="expand-details"> Received certificate from Doraemon Den Product Management Bootcamp for outstanding performance. Demonstrated ability to apply business concepts and analytical frameworks to complex product challenges. </div>`,

    "Skills": `<h3>Technical Skills</h3>
<div class="expand-summary"> <strong>Programming Languages</strong> – Python, SQL, SAS, C, C++. </div> <div class="expand-details"> <strong>Python:</strong> Primary language for data science, machine learning, and automation. <strong>SQL:</strong> Advanced database querying, optimization, and data warehousing. <strong>SAS:</strong> Statistical analysis and data management for enterprise analytics. <strong>C/C++:</strong> Systems programming and performance-critical algorithms. </div>
<div class="expand-summary"> <strong>Data Science & Machine Learning</strong> – End-to-end ML pipeline development and deployment. </div> <div class="expand-details"> <strong>ML Libraries:</strong> Scikit-learn, TensorFlow, XGBoost. <strong>Data Processing:</strong> Pandas, NumPy. <strong>Algorithms:</strong> Random Forest, Isolation Forest, Logistic Regression, ARIMA. <strong>Interpretability:</strong> SHAP for model explanation and feature importance analysis. </div>
<div class="expand-summary"> <strong>Data Visualization & Analytics</strong> – Dashboard design and business intelligence. </div> <div class="expand-details"> <strong>BI Platforms:</strong> Power BI, Tableau. <strong>Python Viz:</strong> Matplotlib, Seaborn. <strong>Spreadsheet Tools:</strong> Advanced Excel. </div>
<div class="expand-summary"> <strong>Web & Development Tools</strong> – Full-stack web development and DevOps. </div> <div class="expand-details"> <strong>Frontend:</strong> HTML, CSS, JavaScript. <strong>Dev Tools:</strong> Git, Jupyter, VS Code. <strong>Specialized:</strong> MATLAB, BeautifulSoup, Selenium. </div>`,

    "Contact Information": `<h3>Contact Information</h3>
<p>You can reach Satyam through the following channels:</p>
<div class="expand-summary"><strong>Phone</strong></div>
<div class="expand-details">+91 8719053010</div>
<div class="expand-summary"><strong>Email</strong></div>
<div class="expand-details"><a href="mailto:satyam.kushwah1904@gmail.com">satyam.kushwah1904@gmail.com</a></div>
<div class="expand-summary"><strong>LinkedIn</strong></div>
<div class="expand-details"><a href="https://www.linkedin.com/in/satyam-kushwah-005265246/" target="_blank">linkedin.com/in/satyam-kushwah-005265246</a></div>`
};

/* ==========================================
   STATE
========================================== */

let chatStarted = false;
let isThinking = false;
const conversationHistory = [];

/* ==========================================
   DOM REFS (set after DOMContentLoaded)
========================================== */

let chatContainer, landingEl, userInput, sendBtn;

/* ==========================================
   CHAT INIT
========================================== */

function startChat() {
    if (chatStarted) return;
    chatStarted = true;
    landingEl.classList.add('hidden');
    chatContainer.classList.add('active');
}

function resetChat() {
    chatStarted = false;
    landingEl.classList.remove('hidden');
    chatContainer.innerHTML = '';
    chatContainer.classList.remove('active');
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
    row.className = 'msg-row ai';
    row.innerHTML = `
        <div class="msg-avatar">SK</div>
        <div class="msg-bubble">${html}</div>
    `;
    chatContainer.appendChild(row);
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
    const response = await fetch("https://satyam-ai-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
    });
    if (!response.ok) throw new Error("API Error");
    const data = await response.json();
    return formatAPIResponse(data.answer);
}

/* ==========================================
   FORMAT RESPONSE
========================================== */

function formatAPIResponse(text) {
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
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    text = text.replace(urlRegex, match => {
        const url = match.startsWith('http') ? match : 'https://' + match;
        return `<a href="${url}" target="_blank" class="msg-link">${match}</a>`;
    });
    text = text.replace(emailRegex, match => `<a href="mailto:${match}" class="msg-link">${match}</a>`);
    return text;
}

function processHTMLForLinks(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const walker = document.createTreeWalker(temp, NodeFilter.SHOW_TEXT, null, false);
    const nodesToReplace = [];
    let node;
    while (node = walker.nextNode()) {
        const text = node.textContent;
        const processed = addLinksAndEmails(text);
        if (processed !== text) nodesToReplace.push({ node, processed });
    }
    nodesToReplace.forEach(({ node, processed }) => {
        const span = document.createElement('span');
        span.innerHTML = processed;
        node.parentNode.replaceChild(span, node);
    });
    return temp.innerHTML;
}

/* ==========================================
   EXPAND / CLICKABLE
========================================== */

function makeMessageClickable(messageElement) {
    const bubble = messageElement.querySelector('.msg-bubble');
    bubble.querySelectorAll('.expand-summary').forEach(summary => {
        const details = summary.nextElementSibling;
        if (details && details.classList.contains('expand-details')) {
            summary.addEventListener('click', e => {
                e.stopPropagation();
                summary.classList.toggle('open');
                details.classList.toggle('open');
            });
        }
    });
    bubble.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            const question = item.getAttribute('data-question');
            if (question) { userInput.value = question; sendMessage(); }
        });
    });
}

/* ==========================================
   STATIC FALLBACK
========================================== */

function getStaticResponse(question) {
    const q = question.toLowerCase().trim();
    const map = {
        "tell me about your american express experience": knowledgeBase["American Express"],
        "tell me about your mcaffeine experience":        knowledgeBase["mCaffeine"],
        "explain the fraud detection project":            knowledgeBase["Financial Anomaly Detection"],
        "what are your technical skills?":                knowledgeBase["Skills"],
        "what achievements do you have?":                 knowledgeBase["Achievements"],
        "tell me about your contact information":         knowledgeBase["Contact Information"]
    };
    if (map[q]) return map[q];
    if (q.includes('fraud') || q.includes('anomaly'))       return knowledgeBase["Financial Anomaly Detection"];
    if (q.includes('american') || q.includes('amex'))       return knowledgeBase["American Express"];
    if (q.includes('mcaffeine') || q.includes('caffeine'))  return knowledgeBase["mCaffeine"];
    if (q.includes('contact') || q.includes('email') || q.includes('linkedin') || q.includes('phone') || q.includes('reach') || q.includes('mail')) return knowledgeBase["Contact Information"];
    if (q.includes('dashboard') || q.includes('power bi')) return knowledgeBase["Power BI Dashboard"];
    if (q.includes('risk') || q.includes('credit'))        return knowledgeBase["Credit Risk Monitoring"];
    if (q.includes('education') || q.includes('iit') || q.includes('college')) return knowledgeBase["Education"];
    if (q.includes('achievement') || q.includes('award') || q.includes('rank') || q.includes('jee')) return knowledgeBase["Achievements"];
    if (q.includes('skill') || q.includes('tech') || q.includes('python') || q.includes('ml')) return knowledgeBase["Skills"];
    return `<p>I can help you learn about Satyam's work. Try asking about:</p>
<ul>
<li class="suggestion-item" data-question="Tell me about your American Express experience">American Express or mCaffeine experience</li>
<li class="suggestion-item" data-question="Explain the fraud detection project">The fraud detection or credit risk project</li>
<li class="suggestion-item" data-question="What are your technical skills?">Technical skills and tools</li>
<li class="suggestion-item" data-question="Tell me about your contact information">Contact information</li>
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
        typing.remove();
        addAIMessage(getStaticResponse(question));
    }

    isThinking = false;
    sendBtn.disabled = false;
    userInput.focus();
}

/* ==========================================
   SIDEBAR SECTIONS
========================================== */

function loadSection(section) {
    // Close legacy sidebar if present
    const legacySidebar = document.getElementById('sidebar');
    const legacyOverlay = document.getElementById('sidebarOverlay');
    if (legacySidebar) legacySidebar.classList.remove('open');
    if (legacyOverlay) legacyOverlay.classList.remove('active');

    startChat();
    const label = section.charAt(0).toUpperCase() + section.slice(1);
    addUserMessage(`Tell me about: ${label}`);
    conversationHistory.push({ role: 'user', content: [{ text: `Tell me about: ${label}` }] });

    let html = knowledgeBase[section] || `<p>No info found for "${label}".</p>`;
    html = processHTMLForLinks(html);
    conversationHistory.push({ role: 'assistant', content: [{ text: html.replace(/<[^>]+>/g, ' ').trim() }] });

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

/* ==========================================
   MOBILE TAB SWITCHING
   Uses .mobile-active / .mobile-hidden classes
========================================== */

function splitSwitchTab(tab) {
    const resumePanel = document.getElementById('resume-panel');
    const chatPanel   = document.getElementById('chat-panel');
    const tabResume   = document.getElementById('tab-resume');
    const tabChat     = document.getElementById('tab-chat');

    if (tab === 'resume') {
        resumePanel.classList.add('mobile-active');
        chatPanel.classList.add('mobile-hidden');
        tabResume.classList.add('active');
        tabChat.classList.remove('active');
    } else {
        resumePanel.classList.remove('mobile-active');
        chatPanel.classList.remove('mobile-hidden');
        tabChat.classList.add('active');
        tabResume.classList.remove('active');
    }
}

/* On desktop always show both panels side-by-side */
function handleSplitResize() {
    const resumePanel = document.getElementById('resume-panel');
    const chatPanel   = document.getElementById('chat-panel');
    if (window.innerWidth > 768) {
        // Clear all mobile positioning overrides
        resumePanel.classList.remove('mobile-active');
        chatPanel.classList.remove('mobile-hidden');
        chatPanel.style.transform = '';
        chatPanel.style.opacity   = '';
    } else {
        // Mobile default: show chat tab
        chatPanel.classList.remove('mobile-hidden');
        resumePanel.classList.remove('mobile-active');
        // Sync tab bar to chat
        document.getElementById('tab-chat').classList.add('active');
        document.getElementById('tab-resume').classList.remove('active');
    }
}

/* Clicking an impact card loads section AND switches to chat tab on mobile */
function splitLoadSection(section) {
    loadSection(section);
    if (window.innerWidth <= 768) {
        splitSwitchTab('chat');
    }
}

/* ==========================================
   LEGACY SIDEBAR TOGGLE (kept for compat)
========================================== */

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}

/* ==========================================
   INIT
========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Bind DOM refs
    chatContainer = document.getElementById('chat-container');
    landingEl     = document.getElementById('landing');
    userInput     = document.getElementById('userInput');
    sendBtn       = document.getElementById('sendBtn');

    // Theme
    initTheme();

    // Entrance animation
    triggerEntranceAnimations();

    // Layout
    handleSplitResize();
    window.addEventListener('resize', handleSplitResize);

    // Hamburger (legacy)
    const hamburger = document.getElementById('hamburgerBtn');
    if (hamburger) hamburger.addEventListener('click', toggleSidebar);

    // Textarea
    userInput.addEventListener('input', autoResize);
    userInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    console.log('%cSATYAM AI INITIALIZED', 'color: #c8ff57; font-weight: bold; font-size: 14px;');
});