// ============================================================
//  إعدادات الربط مع Firebase  —  اتبع ملف SETUP-AR.md
// ============================================================
//  هذه القيم ليست أسرارًا (تظهر لأي زائر في أي موقع يستخدم Firebase)،
//  الحماية الحقيقية تأتي من قواعد Firestore في ملف firestore.rules.
//
//  من Firebase Console:  Project settings ← Your apps ← Web app ← Config
export const firebaseConfig = {
  apiKey: "AIzaSyBQ-jRHIOz6n3WtI8GSd5vlAFd2DU2mJWk",
  authDomain: "portfolio-anas-2d1b0.firebaseapp.com",
  projectId: "portfolio-anas-2d1b0",
  appId: "1:366308085925:web:8b4ddb2d503f99b673fd4c"
};

// اسم المستخدم (يظهر جاهزًا في صفحة الدخول)
export const adminEmail = "anas@portfolio.com";

// معرّف المستخدم (UID) من Authentication ← Users.
// هو الذي تعتمد عليه الصلاحية، ويجب أن يكون نفسه داخل firestore.rules
export const adminUid = "G1UvymU3QDOVWxkUtgXw15zQepl1";
