/* ====================================================================
   إعدادات عامة — غيّري رقم الواتساب هنا برقم هند الحقيقي (بصيغة دولية بدون +)
==================================================================== */
const WHATSAPP_NUMBER = "201002953876"; // TODO: استبدلي بالرقم الحقيقي

/* ====================================================================
   1) الترجمة — كل نص ثابت في الصفحة
==================================================================== */
const I18N = {
  ar: {
    brandName:"هند محمد", brandSub:"معالِجة بالفن",
    navAbout:"من هي؟", navHelp:"مين بتساعد؟", navCourses:"الكورسات", navCompass:"بوصلتك", navFaq:"أسئلة",
    heroEyebrow:"مساحة آمنة… بلغة الفن",
    heroTitle:"حين تعجز الكلمات<br>يتكلّم الفرشاة",
    heroDesc:"علاج نفسي حقيقي، بأسلوب فني مختلف تمامًا عن الطرق التقليدية — تتعالجي وانتِ بتلوّني، بترسمي، وبتحكي حكايتك بشكل تاني.",
    heroCta:"اعرفي تبدأي منين",
    heroCtaBook:"احجزي استشارتك الأولى",
    liveBadge:"لقطات من الرحلة",
    navConsultation:"احجزي استشارة",
    consultEyebrow:"الخطوة الأولى", consultTitle:"احجزي استشارتك الأولى",
    consultDesc:"قبل أي كورس أو التزام، ابدأي باستشارة قصيرة نتعرف فيها على حالتك ونرشح لك المسار الأنسب — التأكيد بيتم مباشرة على الواتساب مع هند.",
    consultPoint1:"لا حاجة لتشخيص مسبق", consultPoint2:"سرية تامة لكل ما يُشارك", consultPoint3:"رد على استفسارك في نفس اليوم غالبًا",
    formNameLabel:"اسمك", formNamePh:"اكتبي اسمك",
    formPhoneLabel:"رقم الواتساب", formPhonePh:"01xxxxxxxxx",
    formTypeLabel:"نوع الطلب", formTimeLabel:"الميعاد المفضل للتواصل",
    formNoteLabel:"تحبي تقولي حاجة قبل ما نتواصل؟ (اختياري)", formNotePh:"اكتبي أي تفاصيل تحبي هند تعرفها مقدمًا...",
    formSubmit:"إرسال طلب الحجز على واتساب",
    consultPrivacy:"بالضغط على إرسال، هيتفتح الواتساب برسالة جاهزة بالتفاصيل اللي كتبتيها — تقدري تعدلي فيها قبل الإرسال.",
    portraitTag:"فرشاة، ألوان، واحتواء",
    aboutEyebrow:"تعرّفي عليها", aboutTitle:"هند محمد",
    aboutText1:"معالجة نفسية بالفن، بخبرة تمتد لأكثر من 10 سنوات في الدمج بين الفن والعلاج النفسي — بتجمع بين الخبرة الإكلينيكية وبين الفن كأداة علاج فعلية، مش مجرد نشاط جانبي.",
    aboutSignature:"«الفرشاة بتوصل لحتة جوّاكِ، الكلام لوحده مش بيوصلها»",
    helpEyebrow:"هل بتحسي بأي من ده؟",
    helpTitle:"مش لازم يكون عندك «تشخيص» عشان تبدأي",
    helpIntro:"دول بعض اللي بييجوا يشتكوا منه — لو حسيتي بحاجة قريبة من ده، فيه مساحة ليكِ هنا.",
    coursesEyebrow:"لتأهيل المعالجين", coursesTitle:"برنامج تأهيل المعالجين بالعلاج بالفن",
    coursesIntro:"برنامج تدريبي متخصص لتأهيل المعالجين والراغبين في دخول مجال العلاج بالفن، على مستويين متتاليين.",
    modalEyebrow:"تأكيد الحجز", modalNote1:"هيتم تأكيد الحجز عن طريق رسالة على الواتساب مباشرة مع هند.",
    modalConfirm:"تأكيد الحجز وإرسال التفاصيل على واتساب",
    payVodafone:"فودافون كاش", payInsta:"إنستاباي (InstaPay)",
    payMethodLabel:"طريقة الدفع", payAccountLabel:"رقم الحساب المحوَّل منه", payAccountPh:"01xxxxxxxxx",
    compassEyebrow:"جربيها دلوقتي", compassTitle:"بوصلة اللون الداخلية",
    compassIntro:"٣ اختيارات صغيرة… وهي هتقولك تقريبًا أنتِ حاليًا فين، وأقرب طريقة فنية تساعدك تبدأي بيها.",
    testEyebrow:"مش كلامي، كلامهم", testTitle:"آراء العميلات",
    faqEyebrow:"وارد يكون في تخوف", faqTitle:"أسئلة بتتردد كتير",
    footerLine:"مساحة آمنة… تتكلم فيها بالفرشاة قبل الكلام",
    shareBtn:"شاركي مع صديقة محتاجة الدعم ده", copyLink:"تم نسخ رسالة المشاركة ✓",
    restartQuiz:"جربي مرة تانية"
  },
  en:{
    brandName:"Hend Mohamed", brandSub:"Art Therapist",
    navAbout:"About", navHelp:"Who I help", navCourses:"Courses", navCompass:"Compass", navFaq:"FAQ",
    heroEyebrow:"A safe space, in the language of art",
    heroTitle:"When words run out,<br>the brush speaks",
    heroDesc:"Real psychological therapy through a genuinely different, art-based approach — you heal while you paint, draw, and tell your story in a new way.",
    heroCta:"See where you can start",
    heroCtaBook:"Book your first consultation",
    liveBadge:"Moments from the journey",
    navConsultation:"Book a consultation",
    consultEyebrow:"The first step", consultTitle:"Book your first consultation",
    consultDesc:"Before any course or commitment, start with a short consultation so we can understand what you're going through and recommend the right path — confirmed directly with Hend on WhatsApp.",
    consultPoint1:"No prior diagnosis needed", consultPoint2:"Everything shared stays fully confidential", consultPoint3:"You'll usually hear back the same day",
    formNameLabel:"Your name", formNamePh:"Enter your name",
    formPhoneLabel:"WhatsApp number", formPhonePh:"+20 1xxxxxxxxx",
    formTypeLabel:"Request type", formTimeLabel:"Preferred time to be contacted",
    formNoteLabel:"Anything you'd like to share first? (optional)", formNotePh:"Write any details you'd like Hend to know in advance...",
    formSubmit:"Send booking request on WhatsApp",
    consultPrivacy:"On submit, WhatsApp opens with a ready message containing your details — you can edit it before sending.",
    portraitTag:"Brush, colour, and holding space",
    aboutEyebrow:"Get to know her", aboutTitle:"Hend Mohamed",
    aboutText1:"An art psychotherapist with over 10 years of experience combining art and psychotherapy — bringing together real clinical training and art as an actual therapeutic tool, not a side activity.",
    aboutSignature:"\"The brush reaches places words alone can't.\"",
    helpEyebrow:"Does any of this feel familiar?",
    helpTitle:"You don't need a diagnosis to begin",
    helpIntro:"Here are some of the things clients often come in carrying — if any of this feels close, there's space for you here.",
    coursesEyebrow:"Your next step", coursesTitle:"Practitioner Training in Art Therapy",
    coursesIntro:"A specialised training program for practitioners and anyone entering the field of art therapy, across two consecutive levels.",
    modalEyebrow:"Confirm booking", modalNote1:"Your booking is confirmed through a direct WhatsApp message with Hend.",
    modalConfirm:"Confirm booking and send on WhatsApp",
    payVodafone:"Vodafone Cash", payInsta:"InstaPay",
    payMethodLabel:"Payment method", payAccountLabel:"Account number transferred from", payAccountPh:"+20 1xxxxxxxxx",
    compassEyebrow:"Try it now", compassTitle:"The Inner Colour Compass",
    compassIntro:"Three small choices — a quick sense of where you are right now, and the closest artistic way to begin.",
    testEyebrow:"Not our words, theirs", testTitle:"Client voices",
    faqEyebrow:"You might be wondering", faqTitle:"Common questions",
    footerLine:"A safe space where the brush speaks before the words do",
    footerCopy:"© 2026 Hend Mohamed — Art Therapy. All rights reserved.",
    shareBtn:"Share with a friend who needs this", copyLink:"Share message copied ✓",
    restartQuiz:"Try again"
  }
};

let currentLang = "ar";

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(I18N[lang][key] !== undefined) el.setAttribute("placeholder", I18N[lang][key]);
  });
  document.querySelector(".lang-current").textContent = lang === "ar" ? "EN" : "AR";
  renderHelpGrid(); renderCourses(); renderTestimonials(); renderFaq(); resetCompass(); renderConsultOptions(); renderCredentials();
}

document.getElementById("langSwitch").addEventListener("click",()=>{
  applyI18n(currentLang === "ar" ? "en" : "ar");
});

/* ====================================================================
   1.5) بيانات التعريف (السيرة المهنية)
==================================================================== */
const CREDENTIALS = [
  {icon:"✓", ar:"خبرة أكثر من 10 سنوات بين الفن والعلاج النفسي", en:"Over 10 years of experience combining art and psychotherapy"},
  {icon:"✓", ar:"محاضرة ومدرّبة في برامج دبلومات جامعة عين شمس", en:"Lecturer and trainer in diploma programs at Ain Shams University"},
  {icon:"✓", ar:"قدّمت ورش علاجية في جهات متعددة، منها مركز جريدة الأهرام ومركز الحرية للإبداع بالإسكندرية", en:"Delivered therapeutic workshops at several venues, including Al-Ahram Newspaper Center and Al-Horreya Center for Creativity, Alexandria"},
  {icon:"✓", ar:"محاضرة ومعالجة بالفن في مركز بيسفولي للاستشارات والتطوير بالإسكندرية", en:"Lecturer and art therapist at Basefly Center for Consulting & Development, Alexandria"},
  {icon:"✓", ar:"أعدّت برنامج «قصص للأطفال» المتخصص في الأفكار العقلانية واللاعقلانية", en:"Developed the \"Stories for Children\" program on rational and irrational thinking"},
  {icon:"✓", ar:"فنانة تشكيلية شاركت في عدد من المعارض: أتيليه الإسكندرية، لمسات بالقاهرة، أول مرة بمكتبة الإسكندرية، أركان بالكاتدرائية بالإسكندرية", en:"Visual artist with exhibitions including Atelier Alexandria, Lamasat in Cairo, Awel Marra at the Bibliotheca Alexandrina, and Arkan at the Alexandria Cathedral"}
];
function renderCredentials(){
  const el = document.getElementById("credentialsList");
  if(!el) return;
  el.innerHTML = CREDENTIALS.map(c=>`<li><span class="cred-icon">${c.icon}</span><span>${c[currentLang]}</span></li>`).join("");
}

/* ====================================================================
   2) الشريط المتحرك (٤ صور) — يدور للأبد بدون توقف
==================================================================== */
const STRIP_SLIDES = [
  { src:"assets/strip1.png", cap:{ar:"جلسة رسم فردية — الفرشاة بتبدأ الحكاية قبل الكلام", en:"An individual painting session — the brush opens the story before words do."} },
  { src:"assets/strip2.png", cap:{ar:"الألوان المائية وتهدئة الجهاز العصبي أثناء الجلسة", en:"Watercolour work helping the nervous system settle during the session."} },
  { src:"assets/strip3.png", cap:{ar:"جلسات جروب — كل حصّانة (إيزيل) بتحمل رحلة مختلفة", en:"Group sessions — every easel holds a different journey."} },
  { src:"assets/strip4.png", cap:{ar:"لحظة تفريغ وتسريح لمشاعر كانت متكتّمة", en:"A moment of releasing feelings that had been held in for too long."} }
];

let stripIndex = 0;
const stripTrack = document.getElementById("stripTrack");
const stripCaption = document.getElementById("stripCaption");
const stripDots = document.getElementById("stripDots");

function buildStrip(){
  stripTrack.innerHTML = STRIP_SLIDES.map((s,i)=>
    `<div class="strip-slide${i===0?' active':''}"><img src="${s.src}" alt="art therapy"></div>`
  ).join("");
  stripDots.innerHTML = STRIP_SLIDES.map((_,i)=>`<span${i===0?' class="active"':''}></span>`).join("");
  updateCaption();
}
function updateCaption(){
  stripCaption.textContent = STRIP_SLIDES[stripIndex].cap[currentLang];
}
function advanceStrip(){
  const slides = stripTrack.querySelectorAll(".strip-slide");
  const dots = stripDots.querySelectorAll("span");
  slides[stripIndex].classList.remove("active");
  dots[stripIndex].classList.remove("active");
  stripIndex = (stripIndex + 1) % STRIP_SLIDES.length;
  slides[stripIndex].classList.add("active");
  dots[stripIndex].classList.add("active");
  updateCaption();
}
buildStrip();
// يدور للأبد — لا يوجد clearInterval، فقط يتوقف بصريًا لو التاب مخفي لتوفير الأداء
setInterval(()=>{ if(!document.hidden) advanceStrip(); }, 4200);

/* ====================================================================
   3) قسم "مين بتساعد؟"
==================================================================== */
const HELP_ITEMS = [
  {icon:"🌪️", ar:{t:"قلق مستمر ومخاوف مالها سبب واضح", d:"لو حاسة إن قلبك بيسبقك في كل قرار، أو فيه توتر داخلي مش قادرة تحدديه."}, en:{t:"Constant anxiety with no clear reason", d:"If your mind races ahead of every decision, or there's an inner tension you can't quite name."}},
  {icon:"🌧️", ar:{t:"اكتئاب أو فقدان الرغبة في أي حاجة", d:"مش بس حزن، لكن فقدان الطاقة والمعنى في حاجات كانت بتفرحك."}, en:{t:"Depression or loss of motivation", d:"Not just sadness — losing energy and meaning in things that used to matter."}},
  {icon:"⚡", ar:{t:"فرط الحركة وتشتت الانتباه عند السيدات", d:"صعوبة التركيز، كثرة الأفكار، والإحساس المستمر إنك «متأخرة» عن نفسك."}, en:{t:"ADHD in women", d:"Trouble focusing, racing thoughts, and a constant feeling of being behind."}},
  {icon:"🌫️", ar:{t:"الفايبروميالجيا وآلام الجسد المرتبطة بالتوتر", d:"لما الجسم يبدأ يعبّر عن ضغط نفسي مكتوم عن طريق الألم."}, en:{t:"Fibromyalgia & stress-related body pain", d:"When the body starts speaking the tension the mind has been holding."}},
  {icon:"🎭", ar:{t:"اضطرابات الشخصية الأساسية", d:"صعوبة في تنظيم المشاعر أو العلاقات، وتقلبات حادة في الإحساس بالذات."}, en:{t:"Core personality disorders", d:"Difficulty regulating emotions or relationships, and sharp shifts in self-image."}},
  {icon:"💔", ar:{t:"الانفصال من علاقة", d:"سواء طلاق أو ارتباط انتهى، والشعور إنك بتعيدي تجميع نفسك تاني."}, en:{t:"Breakups & separation", d:"Whether a divorce or a relationship that ended — feeling like you're piecing yourself back together."}},
  {icon:"🤍", ar:{t:"الأمهات العازبات (Single Mothers)", d:"حمل مضاعف من المسؤولية العاطفية والعملية، وقلة مساحة للاهتمام بنفسك."}, en:{t:"Single mothers", d:"Carrying double the emotional and practical load, with little space left for yourself."}},
  {icon:"🛡️", ar:{t:"أثر العنف الأسري", d:"احتياج مساحة آمنة تمامًا للتعبير، بعيد عن أي حكم أو خوف من الكلام المباشر."}, en:{t:"Effects of domestic violence", d:"Needing a fully safe space to express what direct words are too heavy to carry."}},
];
function renderHelpGrid(){
  document.getElementById("helpGrid").innerHTML = HELP_ITEMS.map(it=>`
    <div class="help-card">
      <span class="icon">${it.icon}</span>
      <h3>${it[currentLang].t}</h3>
      <p>${it[currentLang].d}</p>
    </div>`).join("");
}

/* ====================================================================
   4) الكورسات — برنامج تأهيل المعالجين (مستويان)
==================================================================== */
const COURSES = [
  {
    id:"level1",
    badge:{ar:"المستوى الأول — تعليمي", en:"Level 1 — Educational"},
    images:["assets/course1-1.png","assets/course1-2.png","assets/course1-3.png"],
    ar:{
      name:"تأهيل المعالجين بالعلاج بالفن — المستوى الأول",
      desc:"مستوى تعليمي بالأساس (غير علاجي)، يؤسس للمفاهيم النظرية والتدريبات العملية اللازمة لدخول مجال العلاج بالفن.",
      meta:["مستوى تعليمي","نظري وعملي"],
      theory:["سيكولوجية اللون والأنماط المزاجية","نظرية الحواس الخمس في العلاج بالفن","الحاسة السمعية: الموسيقى كأداة علاجية","حاسة الشم وتأثيرها الحسي في الجلسة","مراحل النمو النفسي","أساسيات قراءة اللوحات الفنية","تدريب عملي على قراءة اللوحات","مراحل التعلم: الناقد الداخلي، الطفل، الراشد، الحدود"],
      practical:["سيكولوجية اللون: دائرة الألوان","تمرين الشجرة","تمرين التوازن","تمرين «لون بحبّه ولون بكرهه»","تدريب الحواس: حاسة اللمس","تمرين التنفس","تطبيقات على مراحل النمو"]
    },
    en:{
      name:"Practitioner Training in Art Therapy — Level 1",
      desc:"A primarily educational (non-clinical) level, building the theoretical concepts and practical exercises needed to enter the field of art therapy.",
      meta:["Educational level","Theory & practice"],
      theory:["Colour psychology & mood patterns","The five senses in art therapy — theory","Hearing: music as a therapeutic tool","Smell and its sensory impact in session","Stages of psychological development","Fundamentals of reading paintings","Practical training in reading paintings","Learning stages: the inner critic, the child, the adult, boundaries"],
      practical:["Colour psychology: the colour wheel","The tree exercise","The balance exercise","\"A colour I love, a colour I dislike\" exercise","Senses training: touch","Breathing exercise","Applications on developmental stages"]
    },
    price:{ar:"6000 جنيه", en:"EGP 6000"}
  },
  {
    id:"level2",
    badge:{ar:"المستوى الثاني — الطمي", en:"Level 2 — Clay"},
    images:["assets/course2-1.png","assets/course2-2.png","assets/course2-3.png"],
    ar:{
      name:"تأهيل المعالجين بالعلاج بالفن — المستوى الثاني (الطمي)",
      desc:"مستوى متخصص في العلاج بالطمي، يجمع بين النظرية والتدريب الحر والتحليل، وصولًا لاستخدام الطمي في علاج الصدمات.",
      meta:["10 جلسات","جلسة أسبوعيًا","2 ساعة للجلسة","3-4 متدربين"],
      syllabus:["معلومات عامة عن الطمي ونظريته في العلاج النفسي","تدريب حر بالطمي","تمرين الذات","تمرين التنفس","تمرين الصعود","تمرين حر: بناء، ظل، ونور","قراءة الطمي كعمل فني","تدريب على القراءة الفنية","تمرين حر مع التحليل","قراءة الطمي في علاج الصدمات"]
    },
    en:{
      name:"Practitioner Training in Art Therapy — Level 2 (Clay)",
      desc:"A specialised clay-therapy level combining theory, free practice, and analysis — culminating in using clay work in trauma therapy.",
      meta:["10 sessions","Weekly session","2 hours per session","3-4 trainees"],
      syllabus:["General overview of clay and its theory in psychotherapy","Free practice with clay","The self exercise","Breathing exercise","The ascension exercise","Free exercise: building, shadow & light","Reading clay work as an art piece","Training in reading clay work","Free exercise with analysis","Reading clay work in trauma therapy"]
    },
    price:{ar:"4000 جنيه", en:"EGP 4000"}
  }
];

const galleryIndex = { level1:0, level2:0 };

function renderCourses(){
  document.getElementById("courseGrid").innerHTML = COURSES.map(c=>{
    const syllabusHtml = c.ar.theory
      ? `<div class="course-syllabus">
           <div class="syllabus-block">
             <h4>${currentLang==='ar'?'المحاور النظرية':'Theoretical track'}</h4>
             <ul>${c[currentLang].theory.map(i=>`<li>${i}</li>`).join("")}</ul>
           </div>
           <div class="syllabus-block">
             <h4>${currentLang==='ar'?'الجزء العملي':'Practical track'}</h4>
             <ul>${c[currentLang].practical.map(i=>`<li>${i}</li>`).join("")}</ul>
           </div>
         </div>`
      : `<div class="course-syllabus">
           <div class="syllabus-block">
             <h4>${currentLang==='ar'?'محاور الكورس':'Course outline'}</h4>
             <ul>${c[currentLang].syllabus.map(i=>`<li>${i}</li>`).join("")}</ul>
           </div>
         </div>`;
    return `
    <div class="course-card">
      <span class="course-badge">${c.badge[currentLang]}</span>
      <h3>${c[currentLang].name}</h3>
      <div class="course-gallery" data-course="${c.id}">
        <img id="gal-img-${c.id}" src="${c.images[0]}" alt="${c[currentLang].name}">
        <button class="gal-arrow gal-prev" data-course="${c.id}" data-dir="-1" aria-label="prev">‹</button>
        <button class="gal-arrow gal-next" data-course="${c.id}" data-dir="1" aria-label="next">›</button>
        <div class="gal-dots" id="gal-dots-${c.id}">${c.images.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join("")}</div>
      </div>
      <p class="desc">${c[currentLang].desc}</p>
      <div class="course-meta">${c[currentLang].meta.map(m=>`<span>${m}</span>`).join("")}</div>
      <p class="course-price">${c.price[currentLang]}</p>
      ${syllabusHtml}
      <button class="btn btn-primary full" onclick="openOrder('${c.id}')">${currentLang==='ar'?'احجزي هذا المستوى':'Book this level'}</button>
    </div>`;
  }).join("");

  document.querySelectorAll(".gal-arrow").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id = btn.getAttribute("data-course");
      const dir = parseInt(btn.getAttribute("data-dir"),10);
      const course = COURSES.find(c=>c.id===id);
      galleryIndex[id] = (galleryIndex[id] + dir + course.images.length) % course.images.length;
      document.getElementById(`gal-img-${id}`).src = course.images[galleryIndex[id]];
      document.querySelectorAll(`#gal-dots-${id} span`).forEach((d,i)=>{
        d.classList.toggle("active", i === galleryIndex[id]);
      });
    });
  });
}

/* Modal / booking logic */
const orderModal = document.getElementById("orderModal");
let currentOrderCourse = null;

function openOrder(courseId){
  currentOrderCourse = COURSES.find(x=>x.id===courseId);
  document.getElementById("modalCourseName").textContent = currentOrderCourse[currentLang].name;
  document.getElementById("modalCoursePrice").textContent = currentOrderCourse.price[currentLang];
  document.getElementById("orderForm").reset();
  orderModal.classList.add("open");
}
document.getElementById("modalClose").addEventListener("click",()=>orderModal.classList.remove("open"));
orderModal.addEventListener("click",(e)=>{ if(e.target===orderModal) orderModal.classList.remove("open"); });

document.getElementById("orderForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  if(!currentOrderCourse) return;
  const name = document.getElementById("oName").value.trim();
  const payValue = document.getElementById("oPayMethod").value;
  const payLabel = payValue === "vodafone" ? I18N[currentLang].payVodafone : I18N[currentLang].payInsta;
  const account = document.getElementById("oAccount").value.trim();
  const note = document.getElementById("oNote").value.trim();
  const c = currentOrderCourse;

  const msg = currentLang === "ar"
    ? `مرحبًا هند، أنا ${name}.\nأريد حجز: "${c.ar.name}"\nالسعر: ${c.price.ar}\nطريقة الدفع: ${payLabel}\nرقم الحساب المحوَّل منه: ${account}${note ? `\nملاحظة: ${note}` : ""}`
    : `Hi Hend, I'm ${name}.\nI'd like to book: "${c.en.name}"\nPrice: ${c.price.en}\nPayment method: ${payLabel}\nAccount number transferred from: ${account}${note ? `\nNote: ${note}` : ""}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  orderModal.classList.remove("open");
});

/* ====================================================================
   4.5) نظام حجز الاستشارة — نفس منطق الواتساب المستخدم في الكورسات
==================================================================== */
const CONSULT_TYPES = [
  {ar:"استشارة أولية ", en:" initial consultation"},
  {ar:"استفسار عن كورس معين", en:"Inquiry about a specific course"},
  {ar:"حجز جلسة فردية", en:"Book an individual session"}
];
const CONSULT_TIMES = [
  {ar:"صباحًا (10ص - 1م)", en:"Morning (10am - 1pm)"},
  {ar:"بعد الظهر (1م - 4م)", en:"Afternoon (1pm - 4pm)"},
  {ar:"مساءً (4م - 8م)", en:"Evening (4pm - 8pm)"}
];
function renderConsultOptions(){
  const typeSel = document.getElementById("cType");
  const timeSel = document.getElementById("cTime");
  if(!typeSel || !timeSel) return;
  typeSel.innerHTML = CONSULT_TYPES.map(t=>`<option>${t[currentLang]}</option>`).join("");
  timeSel.innerHTML = CONSULT_TIMES.map(t=>`<option>${t[currentLang]}</option>`).join("");
}

document.getElementById("consultForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const phone = document.getElementById("cPhone").value.trim();
  const type = document.getElementById("cType").value;
  const time = document.getElementById("cTime").value;
  const note = document.getElementById("cNote").value.trim();

  const msg = currentLang === "ar"
    ? `مرحبًا هند، أنا ${name}.\nنوع الطلب: ${type}\nرقم التواصل: ${phone}\nالميعاد المفضل: ${time}${note ? `\nملاحظة: ${note}` : ""}`
    : `Hi Hend, I'm ${name}.\nRequest type: ${type}\nContact number: ${phone}\nPreferred time: ${time}${note ? `\nNote: ${note}` : ""}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ====================================================================
   5) العنصر المميز: بوصلة اللون الداخلية (كويز + مشاركة/إحالة)
==================================================================== */
const COMPASS_QUESTIONS = [
  { ar:"لو جسمك حاليًا لون، يكون قاعد فين؟", en:"If your body were a colour right now, where would it sit?",
    opts:[
      {ar:"مشدود ومتوتر", en:"Tight & tense", tag:"anxiety"},
      {ar:"تقيل وبطيء", en:"Heavy & slow", tag:"depression"},
      {ar:"مشتت في كل اتجاه", en:"Scattered everywhere", tag:"adhd"},
    ]},
  { ar:"لو رسمتي الفترة اللي إنتِ فيها دلوقتي، هتكون أقرب لـ:", en:"If you painted this period of your life, it would look like:",
    opts:[
      {ar:"خطوط متشابكة وسريعة", en:"Fast, tangled lines", tag:"anxiety"},
      {ar:"مساحة رمادية واسعة", en:"A wide grey space", tag:"depression"},
      {ar:"ألوان كتير بلا شكل واحد", en:"Many colours, no single shape", tag:"adhd"},
    ]},
  { ar:"وأنتِ محتاجة دلوقتي أكتر إيه؟", en:"Right now, what do you need most?",
    opts:[
      {ar:"هدوء واحتواء", en:"Calm & containment", tag:"calm"},
      {ar:"مساحة تفضفضي فيها بحرية", en:"Space to freely let it out", tag:"release"},
      {ar:"ترتيب وتنظيم لأفكارك", en:"Structure for your thoughts", tag:"structure"},
    ]}
];
const COMPASS_RESULTS = {
  anxiety:{color:"#3ecdd1", ar:{h:"إنتِ في مرحلة «التهدئة»", p:"الفن المائي والتلوين البطيء ممكن يبدأ يهدّي جهازك العصبي قبل أي خطوة تانية. احجزي استشارة أولية وهند هترشح لك نقطة البداية المناسبة."}, en:{h:"You're in a Calming phase", p:"Slow watercolour and colouring work can begin settling your nervous system before anything else. Book an initial consultation and Hend will recommend the right starting point."}},
  depression:{color:"#5c6668", ar:{h:"إنتِ في مرحلة «إعادة الإحساس»", p:"الهدف دلوقتي مش الإنتاجية، الهدف إنك تحسي بحاجة تاني. احجزي استشارة قصيرة نتكلم فيها بهدوء عن الخطوة التالية."}, en:{h:"You're in a Re-sensing phase", p:"The goal isn't productivity right now — it's feeling something again. Book a short consultation so we can gently talk through the next step."}},
  adhd:{color:"#d9b08c", ar:{h:"إنتِ في مرحلة «التجميع»", p:"محتاجة مساحة تحطي فيها كل الأفكار المتشتتة في شكل واحد. ابدأي باستشارة أولية عشان نحدد خطة تناسبك."}, en:{h:"You're in a Gathering phase", p:"You need a space to bring the scattered thoughts into one shape. Start with an initial consultation so we can outline a plan that fits you."}}
};

let compassStep = 0;
let compassScores = {};
const compassBox = document.getElementById("compassBox");

function resetCompass(){ compassStep = 0; compassScores = {}; renderCompassQuestion(); }

function renderCompassQuestion(){
  const q = COMPASS_QUESTIONS[compassStep];
  compassBox.innerHTML = `
    <div class="compass-progress">${COMPASS_QUESTIONS.map((_,i)=>`<span class="${i<compassStep?'done':''}"></span>`).join("")}</div>
    <p class="compass-question">${q[currentLang]}</p>
    <div class="compass-options">
      ${q.opts.map((o,i)=>`<button class="compass-opt" data-tag="${o.tag}">${o[currentLang]}</button>`).join("")}
    </div>`;
  compassBox.querySelectorAll(".compass-opt").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const tag = btn.getAttribute("data-tag");
      compassScores[tag] = (compassScores[tag]||0)+1;
      compassStep++;
      if(compassStep < COMPASS_QUESTIONS.length){ renderCompassQuestion(); }
      else { renderCompassResult(); }
    });
  });
}

function renderCompassResult(){
  const clinicalTags = ["anxiety","depression","adhd"];
  let best = "anxiety", bestScore = -1;
  clinicalTags.forEach(t=>{ if((compassScores[t]||0) > bestScore){ bestScore=(compassScores[t]||0); best=t; } });
  const r = COMPASS_RESULTS[best];
  const shareMsg = currentLang === "ar"
    ? `عملت اختبار "بوصلة اللون الداخلية" عند هند محمد وطلعت نتيجتي "${r.ar.h}" — جربيه إنتِ كمان: ${location.href}`
    : `I just took Hend Mohamed's "Inner Colour Compass" and got "${r.en.h}" — try it too: ${location.href}`;

  compassBox.innerHTML = `
    <div class="compass-result">
      <div class="swatch" style="background:${r.color}"></div>
      <h3>${r[currentLang].h}</h3>
      <p>${r[currentLang].p}</p>
      <div class="compass-actions">
        <a class="btn btn-primary" href="https://wa.me/?text=${encodeURIComponent(shareMsg)}" target="_blank">${I18N[currentLang].shareBtn}</a>
        <button class="btn btn-ghost" id="compassRestart">${I18N[currentLang].restartQuiz}</button>
      </div>
    </div>`;
  document.getElementById("compassRestart").addEventListener("click", resetCompass);
}

/* ====================================================================
   6) آراء العميلات
==================================================================== */
const TESTIMONIALS = [
  {ar:{q:"مرة أول ما عبّرت عن حزني كان بالرسم، مش بالكلام. حسيت بارتياح غريب.", n:"— عميلة سابقة"}, en:{q:"For the first time, I expressed my sadness through drawing, not words. It brought a strange relief.", n:"— former client"}},
  {ar:{q:"كنت خايفة إن الجلسات هتكون زي أي علاج تقليدي، لكن كل جلسة كانت مختلفة وحسيت إنها فعلًا شايلة معايا.", n:"— أم لطفلين"}, en:{q:"I was afraid it would feel like typical therapy, but every session was different — I felt truly held.", n:"— mother of two"}},
  {ar:{q:"بعد الطلاق مكنتش عارفة أعبّر عن أي حاجة. الفن فتح لي باب كنت مقفّلة عليه من زمان.", n:"— عميلة سابقة"}, en:{q:"After my divorce I couldn't express anything. Art opened a door I'd kept shut for years.", n:"— former client"}}
];
function renderTestimonials(){
  document.getElementById("testGrid").innerHTML = TESTIMONIALS.map(t=>`
    <div class="test-card">
      <span class="stars">★★★★★</span>
      <p>"${t[currentLang].q}"</p>
      <span class="test-name">${t[currentLang].n}</span>
    </div>`).join("");
}

/* ====================================================================
   7) أسئلة شائعة (تعالج التخوف)
==================================================================== */
const FAQS = [
  {ar:{q:"لازم أكون شاطرة في الرسم؟", a:"لا نهائيًا. العلاج بالفن مش عن الموهبة أو الجمال، هو عن التعبير. أي خط أو لون بترسميه له معنى، بغض النظر عن الشكل النهائي."}, en:{q:"Do I need to be good at drawing?", a:"Not at all. Art therapy isn't about talent or beauty — it's about expression. Any line or colour you make has meaning, regardless of how it looks."}},
  {ar:{q:"هل الجلسات سرية تمامًا؟", a:"بالتأكيد. كل ما بيحصل في الجلسة، سواء كلام أو رسومات، بيفضل خاص بينك وبين هند فقط، ومحكوم بأخلاقيات المهنة."}, en:{q:"Are sessions completely confidential?", a:"Absolutely. Everything shared in session — words or artwork — stays strictly between you and Hend, governed by professional ethics."}},
  {ar:{q:"إزاي أعرف أبدأ بالمستوى الأول ولا الثاني؟", a:"المستوى الأول هو الأساس النظري والعملي المطلوب قبل الالتحاق بالمستوى الثاني المتخصص في الطمي. لو مش متأكدة، ابعتي رسالة على الواتساب وهند هترشح لك نقطة البداية المناسبة."}, en:{q:"How do I know whether to start at Level 1 or Level 2?", a:"Level 1 is the theoretical and practical foundation required before joining the specialised clay-focused Level 2. If you're not sure, send a WhatsApp message and Hend will recommend the right starting point."}},
  {ar:{q:"الجلسات أونلاين ولا لازم حضوري؟", a:"متاح الاتنين حسب راحتك، والمواد الفنية المطلوبة بسيطة ومتوفرة في البيت أو بيتم تجهيزها مسبقًا لو حضوري."}, en:{q:"Are sessions online or in person?", a:"Both are available depending on what suits you — the art materials needed are simple and either home-available or prepared in advance for in-person sessions."}},
  {ar:{q:"عندي خوف إني أتحكم عليّ أو حد يحاسبني على اللي أرسمه", a:"مفيش تصحيح أو حكم على أي رسمة أبدًا. الهدف الوحيد إنك تتعبّري بحرية، ومفيش «رسم غلط»."}, en:{q:"I'm afraid of being judged for what I draw", a:"There's never any correcting or judging of what you create. The only goal is free expression — there's no such thing as a \"wrong\" drawing."}}
];
function renderFaq(){
  document.getElementById("faqList").innerHTML = FAQS.map((f,i)=>`
    <div class="faq-item">
      <div class="faq-q" data-i="${i}"><span>${f[currentLang].q}</span><span class="arrow">+</span></div>
      <div class="faq-a">${f[currentLang].a}</div>
    </div>`).join("");
  document.querySelectorAll(".faq-q").forEach(q=>{
    q.addEventListener("click",()=>{
      const item = q.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(it=>{ it.classList.remove("open"); it.querySelector(".faq-a").style.maxHeight = null; });
      if(!wasOpen){
        item.classList.add("open");
        const a = item.querySelector(".faq-a");
        a.style.maxHeight = a.scrollHeight + 40 + "px";
      }
    });
  });
}

/* ====================================================================
   8) واتساب العائم
==================================================================== */
document.getElementById("floatWhatsapp").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحبًا هند، حابه أستفسر عن جلسات العلاج بالفن.")}`;

/* ====================================================================
   9) أول تشغيل
==================================================================== */
applyI18n("ar");
