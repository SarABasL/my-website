/* ==========================================================================
   مشروع مقرر برمجة الويب BWP401 - دليل فعاليات الجامعة الافتراضية السورية (SVU)
   إشراف: د. باسل الخطيب
   ملف الجافاسكريبت الرئيسي: assets/js/main.js
   ========================================================================== */

// 1. مصفوفة بيانات الفعاليات المعتمدة في الدليل
const SVU_EVENTS = [
    {
        id: 1,
        title: "مؤتمر الذكاء الاصطناعي وتقنيات الويب الحديثة 2026",
        category: "culture",
        categoryName: "ثقافة ومعرفة",
        date: "2026-10-25",
        time: "10:00 صباحاً - 03:00 عصراً",
        location: "دمشق - مدرج الجامعة الافتراضية + بث مباشر",
        image: "assets/img/photo-1516321318423-f06f85e504b3.avif",
        isFeatured: true,
        isToday: false,
        seats: 120,
        shortDesc: "ملتقى علمي يستعرض أحدث تطبيقات الذكاء الاصطناعي وتطوير تطبيقات الويب لطلاب الهندسة المعلوماتية.",
        fullDesc: "يجمع هذا المؤتمر نخبة من أساتذة الجامعة الافتراضية السورية وخبراء صناعة البرمجيات لمناقشة مستقبل تطوير الويب وتكامل نماذج الذكاء الاصطناعي التوليدي في المشاريع الأكاديمية والعملية."
    },
    {
        id: 2,
        title: "ملتقى الطلاب والأفكار المبتكرة",
        category: "social",
        categoryName: "مجتمع وطلاب",
        date: "2026-10-30",
        time: "11:00 صباحاً - 05:00 مساءً",
        location: "دمشق - المركز الثقافي",
        image: "assets/img/photo-1529156069898-49953e39b3ac.avif",
        isFeatured: true,
        isToday: false,
        seats: 200,
        shortDesc: "مساحة مفتوحة للتعارف وتبادل الأفكار والمبادرات الطلابية.",
        fullDesc: "يقدّم الملتقى فرصة فريدة لتفاعل طلاب الاختصاصات المختلفة في الجامعة الافتراضية السورية، وعرض المشاريع الريادية والأفكار الإبداعية."
    },
    {
        id: 3,
        title: "أمسية المواهب الفنية",
        category: "music",
        categoryName: "فن وموسيقى",
        date: "2026-11-02",
        time: "06:00 مساءً - 09:00 مساءً",
        location: "حمص - قاعة دار الثقافة",
        image: "assets/img/photo-1501386761578-eac5c94b800a.avif",
        isFeatured: false,
        isToday: false,
        seats: 95,
        shortDesc: "أمسية فنية تحتفي بالمواهب والإبداع الطلابي.",
        fullDesc: "تجمع الأمسية عازفين وطلاباً مهتمين بالفن والموسيقى في برنامج متنوع، مع مساحة للتعريف بالمواهب الجامعية وتبادل الخبرات الفنية."
    },
    {
        id: 4,
        title: "حوار الأفكار المبتكرة",
        category: "culture",
        categoryName: "ثقافة ومعرفة",
        date: "2026-11-05",
        time: "10:30 صباحاً - 02:30 ظهراً",
        location: "اللاذقية - المركز الجامعي",
        image: "assets/img/photo-1521737711867-e3b97375f902.avif",
        isFeatured: false,
        isToday: false,
        seats: 180,
        shortDesc: "حوار مفتوح حول الأفكار التي تصنع الفرق في المجتمع الأكاديمي.",
        fullDesc: "نقاشات مفتوحة تهدف إلى تحفيز الفكر النقدي والإبداعي لدى طلاب الجامعة الافتراضية."
    },
    {
        id: 5,
        title: "يوم الرياضة الجامعي",
        category: "sport",
        categoryName: "رياضة ونشاط",
        date: "2026-11-07",
        time: "08:30 صباحاً - 01:30 ظهراً",
        location: "حلب - المدينة الرياضية",
        image: "assets/img/photo-1517649763962-0c623066013b.avif",
        isFeatured: false,
        isToday: false,
        seats: 150,
        shortDesc: "أنشطة جماعية تشجع على الحركة وروح الفريق الواحد.",
        fullDesc: "فعالية رياضية شبابية تشمل بطولات ودية في كرة القدم والشطرنج لتعزيز النشاط البدني والروح الرياضية بين الطلاب."
    },
    {
        id: 6,
        title: "مبادرة معاً للمجتمع",
        category: "social",
        categoryName: "مجتمع وطلاب",
        date: "2026-11-09",
        time: "04:00 عصراً - 07:30 مساءً",
        location: "طرطوس - المركز الثقافي",
        image: "assets/img/photo-1559024094-4a1e4495c3c1.avif",
        isFeatured: false,
        isToday: false,
        seats: 300,
        shortDesc: "مبادرة طلابية لخدمة المجتمع المحلي وتعزيز العمل التطوعي.",
        fullDesc: "أنشطة تطوعية ومجتمعية ينظمها طلاب الجامعة الافتراضية السورية لترسيخ قيم المسؤولية المجتمعية."
    }
];

// 2. دوال آمنة للتعامل مع localStorage
function safeGetStorage(key, fallback = "") {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (err) {
        return fallback;
    }
}

function safeSetStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        // تجاهل الخطأ في حال حظر التخزين المحلي
    }
}

// 3. تفعيل الوضع الليلي (Dark Mode)
function initDarkMode() {
    const savedTheme = safeGetStorage("svu_theme", "light");
    const toggleBtn = document.getElementById("darkModeToggle");
    const themeIcon = document.getElementById("themeIcon");

    function applyTheme(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        if (themeIcon) themeIcon.src = isDark ? "assets/icons/moon-fill.svg" : "assets/icons/sun-fill.svg";
        if (toggleBtn) {
            toggleBtn.setAttribute("aria-pressed", String(isDark));
            toggleBtn.setAttribute("aria-label", isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي");
        }
    }

    applyTheme(savedTheme === "dark");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            const isDark = !document.body.classList.contains("dark-mode");
            applyTheme(isDark);
            safeSetStorage("svu_theme", isDark ? "dark" : "light");
        });
    }
}

// 4. تفعيل زر الصعود للأعلى (Scroll-to-top Button)
function initScrollToTop() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (!scrollBtn) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 5. ربط أزرار حجز المقاعد بـ Modal
function bindBookingButtons() {
    const triggers = document.querySelectorAll(".book-modal-trigger");
    const modalEventTitle = document.getElementById("modalEventName");
    const bookingAlert = document.getElementById("bookingAlertBox");
    const bookingForm = document.getElementById("bookingModalForm");

    triggers.forEach(btn => {
        btn.addEventListener("click", function () {
            const title = this.getAttribute("data-event-title") || "فعالية الجامعة الافتراضية";
            if (modalEventTitle) modalEventTitle.textContent = title;
            if (bookingAlert) bookingAlert.innerHTML = "";
            if (bookingForm) bookingForm.reset();

            const modalEl = document.getElementById("bookingModal");
            if (modalEl && window.bootstrap) {
                const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
                modalInstance.show();
            }
        });
    });
}

// 6. فلترة وبحث صفحة كل الفعاليات (events.html)
function initEventsPage() {
    const eventsGrid = document.getElementById("eventsGrid");
    if (!eventsGrid) return;

    const q = document.getElementById("q");
    const cat = document.getElementById("cat");
    const date = document.getElementById("date");
    const loc = document.getElementById("loc");
    const count = document.getElementById("count");
    const empty = document.getElementById("empty");
    const searchBtn = document.getElementById("search");
    const resetBtn = document.getElementById("reset");

    const initialCat = new URLSearchParams(location.search).get("category");
    if (initialCat && cat && [...cat.options].some(o => o.value === initialCat)) {
        cat.value = initialCat;
    }

    function filter() {
        let n = 0;
        const searchTerm = q ? q.value.trim().toLocaleLowerCase("ar") : "";
        const catVal = cat ? cat.value : "";
        const dateVal = date ? date.value : "";
        const locVal = loc ? loc.value : "";

        const items = [...eventsGrid.querySelectorAll(".event-item")];
        items.forEach(el => {
            const title = (el.dataset.title || "").toLocaleLowerCase("ar");
            const category = el.dataset.category || "";
            const eventDate = el.dataset.date || "";
            const location = el.dataset.location || "";
            const searchData = (el.dataset.search || "").toLocaleLowerCase("ar");

            const matchesQuery = !searchTerm || title.includes(searchTerm) || searchData.includes(searchTerm);
            const matchesCat = !catVal || category === catVal;
            const matchesDate = !dateVal || eventDate.startsWith(dateVal);
            const matchesLoc = !locVal || location.includes(locVal);

            const ok = matchesQuery && matchesCat && matchesDate && matchesLoc;
            el.classList.toggle("d-none", !ok);
            if (ok) n++;
        });

        if (count) count.textContent = `عدد الفعاليات: ${n}`;
        if (empty) empty.classList.toggle("d-none", n !== 0);
    }

    [q, cat, date, loc].forEach(x => {
        if (x) {
            x.addEventListener("input", filter);
            x.addEventListener("change", filter);
        }
    });

    if (searchBtn) searchBtn.addEventListener("click", filter);

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (q) q.value = "";
            if (cat) cat.value = "";
            if (date) date.value = "";
            if (loc) loc.value = "";
            filter();
        });
    }

    filter();
}

// 7. تهيئة صفحة تفاصيل الفعالية (event.html)
function initEventDetailsPage() {
    const detailsArticle = document.getElementById("eventDetails");
    if (!detailsArticle) return;

    const params = new URLSearchParams(window.location.search);
    const eventId = parseInt(params.get("id") || "1", 10);
    const currentEvent = SVU_EVENTS.find(e => e.id === eventId) || SVU_EVENTS[0];

    const titleEl = document.getElementById("eventTitle");
    const catEl = document.getElementById("eventCategory");
    const dateEl = document.getElementById("eventDate");
    const locEl = document.getElementById("eventLocation");
    const imgEl = document.getElementById("eventImage");
    const descEl = document.getElementById("eventDescription");

    if (titleEl) titleEl.textContent = currentEvent.title;
    if (catEl) {
        catEl.textContent = currentEvent.categoryName;
    }
    if (dateEl) dateEl.textContent = `📅 ${currentEvent.date}`;
    if (locEl) locEl.textContent = `📍 ${currentEvent.location}`;
    if (imgEl) {
        imgEl.src = currentEvent.image;
        imgEl.alt = currentEvent.title;
    }
    if (descEl) descEl.textContent = currentEvent.fullDesc;
}

// 8. نموذج حجز المقعد داخل الـ Modal
function initBookingFormSubmit() {
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");
    if (!bookingForm) return;

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("bookingName").value.trim();
        const email = document.getElementById("bookingEmail").value.trim();

        if (!name || !email) {
            if (bookingResult) {
                bookingResult.innerHTML = `<div class="alert alert-danger mt-2 py-2 small">يرجى تعبئة كافة الحقول المطلوبة.</div>`;
            }
            return;
        }

        const ticketCode = "SVU-" + Math.floor(100000 + Math.random() * 900000);
        if (bookingResult) {
            bookingResult.innerHTML = `
        <div class="alert alert-success mt-2 py-2 small">
          <strong>تم حجز المقعد بنجاح يا ${name}!</strong> رقم التذكرة: <strong>${ticketCode}</strong>
        </div>
      `;
        }
        bookingForm.reset();
    });
}

// 9. التحقق من نموذج "اتصل بنا" (contact.html)
function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    const alertBox = document.getElementById("contactAlertContainer");
    if (!contactForm || !alertBox) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameVal = document.getElementById("contactName").value.trim();
        const emailVal = document.getElementById("contactEmail").value.trim();
        const msgVal = document.getElementById("contactMessage").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errors = [];

        if (nameVal.length < 3) errors.push("الاسم يجب ألا يقل عن 3 أحرف.");
        if (!emailRegex.test(emailVal)) errors.push("يرجى إدخال بريد إلكتروني صحيح.");
        if (msgVal.length < 10) errors.push("نص الرسالة قصير جداً.");

        if (errors.length > 0) {
            alertBox.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show small" role="alert">
          <ul class="mb-0">
            ${errors.map(err => `<li>${err}</li>`).join("")}
          </ul>
        </div>
      `;
            return;
        }

        alertBox.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show small" role="alert">
        <strong>تم إرسال رسالتك بنجاح!</strong> شكراً لتواصلك معنا يا ${nameVal}.
      </div>
    `;
        contactForm.reset();
    });
}

// 10. التشغيل عند التحميل الكامل
document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initScrollToTop();
    bindBookingButtons();
    initEventsPage();
    initEventDetailsPage();
    initBookingFormSubmit();
    initContactForm();
});