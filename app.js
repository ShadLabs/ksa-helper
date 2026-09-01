const translations = {
  en:{
    tagline:"Know what to do next.",badge:"For life in Saudi Arabia",heroTitle:"What do you need help with today?",
    heroText:"Describe your issue or choose a common problem. We’ll point you to the right official service.",
    searchPlaceholder:"Try: iqama expired, salary, final exit...",problemEyebrow:"Problem finder",problemTitle:"Start with your situation",
    empty:"No matching problem yet. Try a different keyword.",servicesEyebrow:"Official services",servicesTitle:"Which platform do I need?",
    trackerEyebrow:"Private on your device",trackerTitle:"Expiry tracker",trackerText:"Save important expiry dates locally in this browser. Nothing is sent to a server.",
    docIqama:"Iqama",docPassport:"Passport",docLicense:"Driver’s licence",docInsurance:"Insurance",docVehicle:"Vehicle registration",docContract:"Employment contract",
    saveDate:"Save date",calcEyebrow:"Employment tool",calcTitle:"End-of-service benefit",
    calcText:"For an authoritative estimate, use the Ministry of Human Resources and Social Development’s official calculator.",
    openCalc:"Open official calculator ↗",noticeTitle:"Important",noticeText:"KSA Helper is an independent guidance tool, not a Saudi government service. Rules, fees and eligibility can change. Always verify important actions on the linked official platform.",
    footer:"Built to make everyday Saudi services easier to understand.",open:"Open official service ↗",days:"days left",expired:"expired",delete:"Delete",
    quick:["Iqama","Final exit","Salary","Traffic","Contract"]
  },
  ar:{
    tagline:"اعرف خطوتك التالية.",badge:"للحياة في المملكة العربية السعودية",heroTitle:"كيف يمكننا مساعدتك اليوم؟",
    heroText:"اكتب مشكلتك أو اختر حالة شائعة، وسنوجهك إلى الخدمة الرسمية المناسبة.",
    searchPlaceholder:"مثال: الإقامة منتهية، الراتب، خروج نهائي...",problemEyebrow:"دليل المشكلات",problemTitle:"ابدأ بحالتك",
    empty:"لا توجد نتيجة مطابقة. جرّب كلمة أخرى.",servicesEyebrow:"الخدمات الرسمية",servicesTitle:"أي منصة أحتاج؟",
    trackerEyebrow:"محفوظ على جهازك",trackerTitle:"متابعة تواريخ الانتهاء",trackerText:"احفظ تواريخ الانتهاء في هذا المتصفح فقط. لا يتم إرسال البيانات إلى أي خادم.",
    docIqama:"الإقامة",docPassport:"جواز السفر",docLicense:"رخصة القيادة",docInsurance:"التأمين",docVehicle:"استمارة المركبة",docContract:"عقد العمل",
    saveDate:"حفظ التاريخ",calcEyebrow:"أداة وظيفية",calcTitle:"مكافأة نهاية الخدمة",
    calcText:"للحصول على تقدير موثوق، استخدم الحاسبة الرسمية لوزارة الموارد البشرية والتنمية الاجتماعية.",
    openCalc:"فتح الحاسبة الرسمية ↗",noticeTitle:"تنبيه مهم",noticeText:"KSA Helper أداة إرشادية مستقلة وليست خدمة حكومية سعودية. قد تتغير الأنظمة والرسوم وشروط الأهلية، لذا تحقق دائماً من المنصة الرسمية.",
    footer:"صُمم لتسهيل فهم الخدمات اليومية في السعودية.",open:"فتح الخدمة الرسمية ↗",days:"يوم متبقي",expired:"منتهي",delete:"حذف",
    quick:["إقامة","خروج نهائي","راتب","مرور","عقد"]
  }
};

const problems = [
  {
    icon:"🪪", tags:["iqama","residency","expired","renew","إقامة","تجديد","منتهية"],
    en:{title:"My Iqama is expiring or expired",desc:"Check validity and find the correct residency service.",steps:["Check the Iqama validity/expiry status.","If you are an employee, contact your employer/HR about renewal.","Use the official Absher service for residency-related enquiries."]},
    ar:{title:"إقامتي قاربت على الانتهاء أو انتهت",desc:"تحقق من الصلاحية واعرف الخدمة المناسبة.",steps:["تحقق من حالة وصلاحية الإقامة.","إذا كنت موظفاً، تواصل مع صاحب العمل أو الموارد البشرية بخصوص التجديد.","استخدم خدمة أبشر الرسمية للاستعلامات المتعلقة بالإقامة."]},
    link:"https://www.absher.sa/"
  },
  {
    icon:"✈️", tags:["exit","reentry","final exit","visa","خروج","عودة","تأشيرة"],
    en:{title:"I need exit/re-entry or final exit help",desc:"Find the official passport/visa service.",steps:["Identify whether you need exit/re-entry, final exit, or a status check.","Check your eligibility and current visa status.","Complete the action through the relevant official Absher service."]},
    ar:{title:"أحتاج مساعدة في الخروج والعودة أو الخروج النهائي",desc:"اعثر على خدمة الجوازات والتأشيرات الرسمية.",steps:["حدد هل تحتاج خروج وعودة أو خروج نهائي أو استعلاماً عن الحالة.","تحقق من الأهلية وحالة التأشيرة الحالية.","أكمل الإجراء عبر خدمة أبشر الرسمية المناسبة."]},
    link:"https://www.absher.sa/"
  },
  {
    icon:"💼", tags:["contract","job","employment","qiwa","عقد","عمل","قوى","وظيفة"],
    en:{title:"I need help with my employment contract",desc:"Start with Qiwa and official labor services.",steps:["Review your employment contract details.","Check your contract/status in Qiwa where applicable.","For disputes or rights questions, use Ministry labor channels and official guidance."]},
    ar:{title:"أحتاج مساعدة في عقد العمل",desc:"ابدأ بمنصة قوى والخدمات العمالية الرسمية.",steps:["راجع تفاصيل عقد العمل.","تحقق من العقد والحالة عبر قوى عند انطباق ذلك.","للنزاعات أو الاستفسارات الحقوقية استخدم قنوات الوزارة الرسمية."]},
    link:"https://www.qiwa.sa/"
  },
  {
    icon:"💰", tags:["salary","wage","pay","money","راتب","أجر","فلوس"],
    en:{title:"I have a salary or wage issue",desc:"Know where to start if payment is late or disputed.",steps:["Keep your contract, payslips and payment records.","Check your employment information in Qiwa.","Use official Ministry labor complaint/support channels if the issue is unresolved."]},
    ar:{title:"لدي مشكلة في الراتب أو الأجر",desc:"اعرف من أين تبدأ إذا تأخر الراتب أو حدث خلاف.",steps:["احتفظ بالعقد ومسيرات الرواتب وسجلات الدفع.","تحقق من بيانات عملك في قوى.","استخدم قنوات الشكاوى والدعم العمالي الرسمية إذا لم تُحل المشكلة."]},
    link:"https://www.hrsd.gov.sa/"
  },
  {
    icon:"🧮", tags:["end service","benefit","gratuity","مكافأة","نهاية الخدمة"],
    en:{title:"I want to estimate end-of-service benefit",desc:"Use the Ministry’s official calculator.",steps:["Gather your actual wage, contract type and service period.","Select the reason the employment relationship ended.","Use the Ministry calculator for the estimate and verify any legal questions separately."]},
    ar:{title:"أريد حساب مكافأة نهاية الخدمة",desc:"استخدم حاسبة الوزارة الرسمية.",steps:["جهّز الأجر الفعلي ونوع العقد ومدة الخدمة.","حدد سبب انتهاء العلاقة العمالية.","استخدم حاسبة الوزارة للتقدير وتحقق من أي مسألة قانونية بشكل منفصل."]},
    link:"https://www.hrsd.gov.sa/ministry-services/services/end-service-benefit-calculator"
  },
  {
    icon:"🚗", tags:["traffic","car","vehicle","fine","license","مرور","سيارة","مخالفة","رخصة"],
    en:{title:"I need help with traffic or vehicle services",desc:"Find the relevant government e-service.",steps:["Identify whether the issue is a licence, vehicle registration, fine or ownership service.","Use Absher for relevant traffic e-services.","Verify fees, conditions and required documents before submitting."]},
    ar:{title:"أحتاج خدمة مرور أو مركبة",desc:"اعثر على الخدمة الحكومية المناسبة.",steps:["حدد هل الموضوع يخص الرخصة أو الاستمارة أو المخالفة أو الملكية.","استخدم أبشر لخدمات المرور الإلكترونية المناسبة.","تحقق من الرسوم والشروط والمستندات قبل الإرسال."]},
    link:"https://www.absher.sa/"
  },
  {
    icon:"🏠", tags:["housing","balady","municipal","rent","بلدي","سكن","بلدية","إيجار"],
    en:{title:"I need a municipal or Balady service",desc:"Find municipal requests and services.",steps:["Identify the municipal service or request category.","Open Balady and sign in through the official flow.","Track your submitted request from the platform."]},
    ar:{title:"أحتاج خدمة بلدية أو من بلدي",desc:"اعثر على الطلبات والخدمات البلدية.",steps:["حدد فئة الخدمة أو الطلب البلدي.","افتح منصة بلدي وسجل الدخول بالطريقة الرسمية.","تابع طلبك المقدم من خلال المنصة."]},
    link:"https://balady.gov.sa/"
  },
  {
    icon:"⚖️", tags:["court","legal","najiz","case","محكمة","ناجز","قضية","قانوني"],
    en:{title:"I need a court or justice service",desc:"Start with the Ministry of Justice’s Najiz platform.",steps:["Identify the type of judicial or documentation service you need.","Use Najiz for the relevant electronic service.","For legal advice, consult an appropriately qualified professional."]},
    ar:{title:"أحتاج خدمة قضائية أو عدلية",desc:"ابدأ بمنصة ناجز التابعة لوزارة العدل.",steps:["حدد نوع الخدمة القضائية أو التوثيقية المطلوبة.","استخدم ناجز للخدمة الإلكترونية المناسبة.","للاستشارة القانونية، راجع مختصاً مؤهلاً."]},
    link:"https://najiz.sa/"
  },
  {
    icon:"👨‍👩‍👧", tags:["family","dependent","domestic","musaned","تابع","أسرة","عمالة منزلية","مساند"],
    en:{title:"I need family/dependent or domestic-worker guidance",desc:"Start with the service that matches the person involved.",steps:["Identify whether the request concerns a family member, dependent or domestic worker.","Use Absher for applicable family/passport services.","Use Musaned for applicable domestic-worker services."]},
    ar:{title:"أحتاج خدمة للتابعين أو العمالة المنزلية",desc:"ابدأ بالمنصة المناسبة للشخص المعني.",steps:["حدد هل الطلب يخص فرداً من الأسرة أو تابعاً أو عاملاً منزلياً.","استخدم أبشر لخدمات الأسرة والجوازات التي تنطبق.","استخدم مساند لخدمات العمالة المنزلية التي تنطبق."]},
    link:"https://www.absher.sa/"
  }
];

const services = [
  {icon:"🟢",name:"Absher",en:"Residency, passports, traffic and many individual government services.",ar:"الإقامة والجوازات والمرور والعديد من الخدمات الحكومية للأفراد.",url:"https://www.absher.sa/"},
  {icon:"🔵",name:"Qiwa",en:"Employment and labor-market services.",ar:"خدمات العمل وسوق العمل.",url:"https://www.qiwa.sa/"},
  {icon:"⚖️",name:"Najiz",en:"Justice, courts and documentation services.",ar:"الخدمات العدلية والقضائية والتوثيق.",url:"https://najiz.sa/"},
  {icon:"🏙️",name:"Balady",en:"Municipal and city services.",ar:"الخدمات البلدية وخدمات المدن.",url:"https://balady.gov.sa/"},
  {icon:"🏠",name:"Musaned",en:"Domestic-worker recruitment and related services.",ar:"خدمات استقدام العمالة المنزلية وما يرتبط بها.",url:"https://musaned.com.sa/"},
  {icon:"🏛️",name:"HRSD",en:"Official labor guidance, support and employment services.",ar:"الإرشادات والدعم والخدمات العمالية الرسمية.",url:"https://www.hrsd.gov.sa/"}
];

let lang = localStorage.getItem("ksaHelperLang") || "en";
const $ = s => document.querySelector(s);

function t(k){return translations[lang][k] || k}

function applyLanguage(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.title=lang==="ar"?"KSA Helper — دليلك":"KSA Helper";
  $("#langBtn").textContent=lang==="en"?"العربية":"English";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  renderChips(); renderProblems($("#problemSearch").value); renderServices(); renderTracker();
}

function renderChips(){
  $("#quickChips").innerHTML=t("quick").map(x=>`<button class="chip" type="button">${x}</button>`).join("");
  document.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ $("#problemSearch").value=c.textContent; renderProblems(c.textContent); }));
}
function renderProblems(q=""){
  const query=q.trim().toLowerCase();
  const filtered=problems.filter(p=>!query || p.tags.join(" ").toLowerCase().includes(query) || p[lang].title.toLowerCase().includes(query) || p[lang].desc.toLowerCase().includes(query));
  $("#problemGrid").innerHTML=filtered.map((p,i)=>`<article class="card" data-problem="${problems.indexOf(p)}"><div class="icon">${p.icon}</div><h3>${p[lang].title}</h3><p>${p[lang].desc}</p><span class="meta">${lang==="en"?"See next steps →":"عرض الخطوات ←"}</span></article>`).join("");
  $("#emptyState").classList.toggle("hidden",filtered.length!==0);
  document.querySelectorAll("[data-problem]").forEach(el=>el.addEventListener("click",()=>openProblem(+el.dataset.problem)));
}
function openProblem(i){
  const p=problems[i];
  $("#dialogContent").innerHTML=`<div class="icon">${p.icon}</div><h2>${p[lang].title}</h2><p>${p[lang].desc}</p><ol class="steps">${p[lang].steps.map(s=>`<li>${s}</li>`).join("")}</ol><a class="primary-btn link-btn dialog-link" href="${p.link}" target="_blank" rel="noopener">${t("open")}</a>`;
  $("#problemDialog").showModal();
}
function renderServices(){
  $("#serviceGrid").innerHTML=services.map(s=>`<article class="card"><div class="icon">${s.icon}</div><h3>${s.name}</h3><p>${s[lang]}</p><a class="service-link" href="${s.url}" target="_blank" rel="noopener">${t("open")}</a></article>`).join("");
}

function getTracker(){return JSON.parse(localStorage.getItem("ksaHelperTracker")||"[]")}
function saveTracker(items){localStorage.setItem("ksaHelperTracker",JSON.stringify(items))}
function daysUntil(dateString){
  const today=new Date(); today.setHours(0,0,0,0);
  const d=new Date(dateString+"T00:00:00");
  return Math.ceil((d-today)/86400000);
}
function docLabel(type){
  const map={iqama:"docIqama",passport:"docPassport",license:"docLicense",insurance:"docInsurance",vehicle:"docVehicle",contract:"docContract"};
  return t(map[type]||type);
}
function renderTracker(){
  const items=getTracker().sort((a,b)=>a.date.localeCompare(b.date));
  $("#trackerList").innerHTML=items.length?items.map((x,i)=>{
    const d=daysUntil(x.date); const status=d<0?`${Math.abs(d)} ${t("days")} · ${t("expired")}`:`${d} ${t("days")}`;
    return `<div class="tracker-item"><div><strong>${docLabel(x.type)}</strong><br><small>${x.date} · ${status}</small></div><div class="tracker-actions"><button class="delete-btn" data-delete="${i}">${t("delete")}</button></div></div>`;
  }).join(""):`<p>${lang==="en"?"No dates saved yet.":"لا توجد تواريخ محفوظة بعد."}</p>`;
  document.querySelectorAll("[data-delete]").forEach(btn=>btn.addEventListener("click",()=>{
    const current=getTracker().sort((a,b)=>a.date.localeCompare(b.date));
    current.splice(+btn.dataset.delete,1); saveTracker(current); renderTracker();
  }));
}

$("#trackerForm").addEventListener("submit",e=>{
  e.preventDefault(); const items=getTracker();
  items.push({type:$("#docType").value,date:$("#expiryDate").value}); saveTracker(items); e.target.reset(); renderTracker();
});
$("#problemSearch").addEventListener("input",e=>renderProblems(e.target.value));
$("#langBtn").addEventListener("click",()=>{lang=lang==="en"?"ar":"en";localStorage.setItem("ksaHelperLang",lang);applyLanguage()});
$("#dialogClose").addEventListener("click",()=>$("#problemDialog").close());
$("#problemDialog").addEventListener("click",e=>{if(e.target===$("#problemDialog"))$("#problemDialog").close()});
$("#year").textContent=new Date().getFullYear();
applyLanguage();
