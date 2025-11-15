تطبيق كلمات للأطفال — 500 كلمة
ملفات جاهزة لتجربة كـ PWA (يمكن تثبيتها على الشاشة الرئيسية) أو تحويلها إلى APK باستخدام أدوات خارجية.

الملفات المهمة:
- index.html  (واجهة التطبيق)
- manifest.json (مواصفات PWA)
- sw.js (خدمة بسيطة للتخزين المؤقت)
- icon-192.png, icon-512.png (أيقونات تطبيق بصيغة SVG داخل ملفات .png)
- words.json (قائمة الكلمات بالإنجليزية و العربية)

كيفية التجربة على هاتفك:
1) انقل محتوى المجلد إلى هاتفك (أو افتحه على خادم محلي).
2) افتح index.html في متصفح Chrome أو Edge.
3) اختر من المتصفح: ⋮ ثم "إضافة إلى الشاشة الرئيسية".

كيفية تحويله إلى APK (خيارات):
A) استخدام PWABuilder (https://pwabuilder.com) — ارفع موقعك أو ملفاتك وسيولد APK/AAB جاهز أو حزمة لعملها.
B) استخدام Bubblewrap (CLI من Google) — يحول PWA إلى TWA ويعطيك APK/AAB (يتطلب Node.js و Android SDK). مستخدمو المطورين يفضلون هذه الطريقة لنشر Google Play.
C) استخدام قنوات بدون كود مثل MobiLoud أو AppMySite أو Appilix — خدمات مدفوعة تحول موقعك إلى تطبيق Native.
D) استخدام Cordova/Capacitor — وضع الملفات داخل مشروع Cordova أو Capacitor ثم بناء APK بواسطة Android Studio.

إذا أردت، أستطيع:
- رفع الملفات إلى GitHub Pages ليصبح لها رابط (مفيد للـ Bubblewrap/PWABuilder). أحتاج حسابك GitHub أو إذنك لإنشاء repo.
- أو أشرح لك خطوة بخطوة كيفية استخدام Bubblewrap أو PWABuilder لتحصل على APK.
- أو أجهز مشروع Cordova جاهز لبنائه في Android Studio (سأجهز الملفات الآن إذا أردت).
