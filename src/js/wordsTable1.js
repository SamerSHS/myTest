﻿const wordsTable = [
    {
        "1": "يعالج الناس من الأمراض",
        "2": "طبيب"
    },
    {
        "1": "يقص شعر الناس بالمقص",
        "2": "حلاق"
    },
    {
        "1": "يعلّم الطلاب القراءة والكتابة",
        "2": "معلم"
    },
    {
        "1": "يصنع الأبواب والنوافذ في الورشة",
        "2": "نجار"
    },
    {
        "1": "تهتمّ بالمرضى في المستشفى",
        "2": "ممرضة"
    },
    {
        "1": "يطهو الطعام في المطعم",
        "2": "طباخ"
    },
    {
        "1": "تخدم المسافرين في الطائرة",
        "2": "مضيفة الطيران"
    },
    {
        "1": "يكتب المقالات في الجريدة",
        "2": "صحفي"
    },
    {
        "1": "يصنع الملابس من القماش",
        "2": "خياط"
    },
    {
        "1": "يزرع الخضراوات والفواكه",
        "2": "فلاح / مزارع"
    },
    {
        "1": "يحمي الناس من المجرمين",
        "2": "الشرطي"
    },
    {
        "1": "يقود السيارة أو الحافلة",
        "2": "سائق"
    },
    {
        "1": "يعمل في محل الألبسة",
        "2": "بائع"
    },
    {
        "1": "يقدّم الطعام للناس في المطعم",
        "2": "نادل"
    },
    {
        "1": "من وسائل المواصلات تسير في شوراع المدينة عادة",
        "2": "السيارة"
    },
    {
        "1": "وسيلة سريعة جداً في السفر",
        "2": "الطائرة"
    },
    {
        "1": "وسيلة قديمة من وسائل النقل",
        "2": "الجمل"
    },
    {
        "1": "تسير في البحار والمحيطات",
        "2": "السفينة"
    },
    {
        "1": "يسير على سكة حديدية",
        "2": "القطار"
    },
    {
        "1": "أخو أمي هو .........",
        "2": "خالي"
    },
    {
        "1": "أخت أمي هي .........",
        "2": "خالتي"
    },
    {
        "1": "أخو أبي هو ..........",
        "2": "عمي"
    },
    {
        "1": "أخت أبي هي .........",
        "2": "عمتي"
    },
    {
        "1": "أم أبي هي ...........",
        "2": "جدتي"
    },
    {
        "1": "أبو أمي هو ..........",
        "2": "جدي"
    },
    {
        "1": "ابن ابني هو ..........",
        "2": "حفيدي"
    },
    {
        "1": "يكون في وسط البيت الدمشقي ويخرج منه الماء",
        "2": "نافورة"
    },
    {
        "1": "مكان في البيت دمشقي مفتوح نرى منه السماء ",
        "2": "فسحة"
    },
    {
        "1": "مكان في المدينة فيه أشجار ونباتات يتجول فيه الناس ويلعب فيه الأطفال",
        "2": "حديقة"
    },
    {
        "1": "مركز أي شيء",
        "2": "قلب"
    },
    {
        "1": "دقتر وقلم وممحاة ومسطرة",
        "2": "قرطاسية"
    },
    {
        "1": "مكان نصلي فيه ",
        "2": "جامع"
    },
    {
        "1": "مكان للبيع والشراء",
        "2": "سوق"
    },
    {
        "1": "مكان نشرب فيه القهوة والشاي",
        "2": "مقهى"
    },
    {
        "1": "الهبرغر والبطاطا المقلية و المشروبات الغازية ",
        "2": "الوجبات الضارة"
    },
    {
        "1": "السهر والكلام الكثير على الجوال والتأخر عن البيت",
        "2": "عادات سيئة"
    },
    {
        "1": "شخص لا يأكل ولا يشرب في رمضان من الفجر حتى المغرب",
        "2": "صائم"
    },
    {
        "1": "البقلاوة والكنافة والقطايف هي من :.............",
        "2": "الحلويات"
    },
    {
        "1": "صلاة نصليها في شهر رمضان فقط",
        "2": "التراويح"
    },
    {
        "1": "طعام نأكله قبل أذان الفجر في رمضان",
        "2": "سحور"
    },
    {
        "1": "يقضي الليل مستيقظاً ولا ينام ",
        "2": "يسهر"
    },
    {
        "1": "طاولة عليها طعام",
        "2": "مائدة"
    },
    {
        "1": "شخص يأكل ويشرب في رمضان قبل المغرب",
        "2": "مفطر"
    },
    {
        "1": "دجاج مطبوخ على النار فقط",
        "2": "دجاج مشوي"
    },
    {
        "1": "دجاج مطبوخ بالزيت",
        "2": "دجاج مقلي"
    },
    {
        "1": "دجاج مطبوخ بالماء المغلي فقط",
        "2": "دجاج مسلوق"
    },
    {
        "1": "السلطة والتبولة والكبة النيئة والفتوش والمخلل",
        "2": "المقبلات"
    },
    {
        "1": "من الملابس، أضعها على رأسي",
        "2": "قبعة"
    },
    {
        "1": "تضعه المرأة المسلمة على رأسها",
        "2": "حجاب"
    },
    {
        "1": "يلبسها إمام الجامع فوق الثوب",
        "2": "عباءة"
    },
    {
        "1": "ألبسه في قدمي",
        "2": "حذاء"
    },
    {
        "1": "أضعه على رقبتي وكتفي",
        "2": "وشاح"
    },
    {
        "1": "ألبسه مع البنطال و مكانه على الخصر",
        "2": "حزام"
    }
]