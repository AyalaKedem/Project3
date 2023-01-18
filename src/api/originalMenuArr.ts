import { MenuItemProp } from "../@types";
import { v4 } from "uuid";

export const menuArr2: MenuItemProp = {
  breakfast: [
    {
      id: v4(),
      name: "בוקר ליחיד",
      description:
        "ביצים לבחירה, סלט אישי קצוץ / עלים, לחםלבחירה: פוקאצ'ה / לחם דגנים / לחם לבן, בליוויסט מטבלים: פטה בשמן זית וזעתר, גבינתשמנת, סלט טונה במיונז, טחינה, ממרח חציליםשרופים, סלט אבוקדו, ריבת הבית, חמאה ומינימוזלי, מוגש עם שתייה קלה וחמה.",
      price: 62,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "בוקר זוגי",
      description:
        "ביצים לבחירה, סלט אישי קצוץ / עלים, לחם לבחירה: פוקאצ'ה / לחם דגנים / לחם לבן בליווי סט מטבלים: פטה בשמן זית וזעתר, גבינת שמנת, סלט טונה במיונז, טחינה, ממרח חצילים שרופים, לאבנה עם שמן זית וזעתר, סלט אבוקדו, פסטו, ריבת הבית, חמאה ומיני מוזלי, מוגש עם שתייה קלה וחמה לכל סועד.",
      price: 115,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "בוקר צרפתי",
      description:
        "טוסט בחמאת שום שמיר, תערובת גבינות, רוטבשמנת ירוקים וביצי עין מעל, מוגש עם סלט אישי,זיתי הבית ושתייה קלה / חמה לבחירה.תוספת סלמון מעושן .",
      price: 62,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "בוקר טבעוני",
      description:
        "פנקייקים מעדשים כתומות, קרם קוקוס ועשביתיבול, על מצע טחינה, בצל ופטריות מוקפצים,מוגש עם ממרח חצילים שרופים, זיתי הבית,לחם לבחירה, סלט אישי עלים / קצוץ, שתייה קלה וחמה.*שתייה חמה ניתן להזמין עם: משקה סויה / אורזושקדים / שאל את המלצר למשקאות נוספים.",
      price: 56,
      vegan: true,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "שקשוקת הבית",
      description:
        "תבשיל עגבניות פיקנטי, פלפלים אדומים, בצל ושום, מוגש במחבת לוהטת עם שתי ביצי משק, לצד סלט אישי, חלה מתוקה, טחינה וזיתי הבית. תוספות לשקשוקה: פטה / פלפל קלוי / חצילים / זיתי קלמטה / פסטו / פטריות / פלפל חריף / מוצרלה / בולגרית.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "שקשוקה טבעונית ",
      description:
        "תבשיל עגבניות פיקנטי, פלפלים אדומים, בצלושום, מוגש במחבת לוהטת עם קוביות טופווצהובה טבעונית, מוגש לצד סלט אישי, חלהמתוקה, טחינה וזיתי הבית.",
      price: 56,
      vegan: true,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קפה ומאפה",
      description: "*עד גמר המלאי",
      price: 28,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "מוזלי של בוקר",
      description: "תערובת של דגנים ופירות יבשים, יוגורט %4 ,מוזלי של בוקר פירות טריים וסילאן תמרים / דבש",
      price: 32,
      vegan: false,
      vegetarian: true,
    },
  ],
  starters: [
    {
      id: v4(),
      name: "פוקאצ'ה מהתנור ומטבלים",
      description: "נאפית במקום בתנור אבן, מוגשת בליווי שמן זית, בלסמי, שום קונפי וסלסת עגבניות.",
      price: 48,
      vegan: true,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "חציל בלאדי",
      description: "חציל קלוי, טחינה, סלסת עגבניות, עשבי תיבול ופלוט לניגוב.",
      price: 48,
      vegan: true,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "פולנטה ופטריות",
      description: "קרם פולנטה בחמאה ושמנת, פטריות ושעועיתירוקה מוקפצים בתוספת קרם כמהין ופרמז'ן.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "ארטישוק לימוני",
      description: "רבעי ארטישוק צרובים בחמאת לימון, מונחיםעל עלי רוקט טריים, פסטו, שקדים קלויים ופרמז'ן.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "ארנצ'יני פריך",
      description: "כדורי אורז וגבינות, במעטפת פריכה ורוטב רוזה / שמנת וירוקים.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "קפרזה",
      description: "עגבניות שרי צבעוניות, קרעי מוצרלה, עלי בזיליקום טריים בתיבול שמן זית, לימון, פסטו ובלסמי מצומצם.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "הום פרייז",
      description: "קוביות תפוח אדמה קריספי ברוטב צ'ילי, חמאה ונגיעות שמנת.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "צ׳יפס קלאסי",
      description: "צ'יפס מתפוחי אדמה, גרידת לימון, שום ועשבי תיבול.",
      price: 28,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "מרק היום",
      description: "שאל את המלצר. תוספת לחם ",
      price: 28,
      vegan: false,
      vegetarian: false,
    },
  ],
  sandwiches: [
    {
      id: v4(),
      name: "חביתת ירק",
      description: "חביתת ירק ובצל מטוגן, גבינת שמנת, מלפפון חמוץ, עגבנייה וחסה.",
      price: 28,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "כריך סביח",
      description: "חציל קלוי, ביצה קשה, טחינה, עשבי תיבול, בצל מטוגן ומלפפון חמוץ",
      price: 28,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "סלמון מעושן",
      description: "סלמון מעושן, ביצה קשה, גבינת שמנת / ממרח שום סומאק, עגבנייה וחסה.",
      price: 28,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "טונה",
      description: "סלט טונה במיונז, ביצה קשה, מלפפון חמוץ, עגבנייה וחסה.",
      price: 28,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "בולגרית",
      description: "פלפלים קלויים, פסטו בזיליקום, רוקט, עגבנייה וחסה.",
      price: 28,
      vegan: false,
      vegetarian: true,
    },
  ],
  salads: [
    {
      id: v4(),
      name: "מה שבשוק",
      description: "עגבנייה, מלפפון, בצל סגול, כרוב לבן ועשבי תיבול. בתיבול שמן זית, מיץ לימון וטחינה בצד.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "סלט טונה",
      description:
        "סלט טונה במיונז, ביצה קשה, תפוח אדמה קריספי ואיולי קיסר, מלפפוןחמוץ, שעועית ירוקה, בצל סגול, עגבניות שרי ומלפפון טרי על מצע חסהבתיבול הויניגרט שלנו.",
      price: 56,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "סלט יווני",
      description:
        "עגבניות, מלפפונים ובצל סגול, זיתי קלמטה, פלפלים, גזר, עלים ירוקים, בתחמיץ לימון ושמן זית, גבינה בולגרית וזעתר, מוגש על בייגל ירושלמי מהתנור. *מוגש ללא תוספת לחם.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "טאבולה קינואה וברזל",
      description:
        "עדשים שחורות, קינואה, קוביות סלק, עלי סלרי, המון פטרוזיליה, בצל ירוק ונענע קצוצים דק, חמוציות, שקדים קלויים. בתיבול שמן זית לימון ובתוספת גבינת לאבנה / טחינה.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "חלומי ופטריות ממולאות",
      description:
        "פטריות פריכות ממולאות בתערובת גבינות, קוביות חלומי צרובותומוקפצות עם רבעי פטריות, אגוזי מלך ברוטב טריאקי ופסטו, מונחיםעל תערובת חסות, עגבניות שרי, מלפפון, רצועות גזר, בצל סגול וירוקבתיבול הויניגרט שלנו.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "סלט הבלקן",
      description:
        "קוביות טוסט מבייגל שומשום עם תערובת גבינות ופסטו מוקפצותבחמאת שום, מונחות על תערובת חסות, עגבניות שרי, מלפפון, רצועותגזר, בצל סגול, זיתי קלמטה וגבינת פטה מעל, בתיבול הויניגרט שלנו.*מוגש ללא תוספת לחם.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "סלט ארטישוק",
      description:
        "עגבניות שרי בצבעים, עלי בזיליקום טרי, בצל סגול, ארטישוק, אגוזי מלך, עלים ירוקים וקרעי מוצרלה בתיבול שמן זית, לימון ובלסמי מצומצם.",
      price: 56,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "סלט סלמון חם",
      description:
        "נתחי סלמון צרובים, פלפלים קלויים, שעועית ירוקה, פטריות ובצל מוקפצים, עלי רוקט טריים. מונח על חלה לוהטת בליווי רוטב קיסר. *מוגש ללא תוספת לחם.",
      price: 56,
      vegan: false,
      vegetarian: false,
    },
  ],
  italian: [
    {
      id: v4(),
      name: "פיצה מרגריטה",
      description:
        "הבצק האיטלקי שלנו, רוטב עגבניות, גבינת מוצרלה ושתי תוספות לבחירה: זיתים ירוקים / בצל / פטה / שום קונפי / ביצה קשה / פטריות / עגבנייה / פלפל חריף / פלפל קלוי / חציל קלוי. תוספת נוספת | תוספת ארטישוק. *ניתן להזמין עם גבינה טבעונית.",
      price: 62,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "פיצה ארטישוק",
      description: "הבצק האיטלקי שלנו, רוטב עגבניות, גבינת מוצרלה, ארטישוק, זיתי קלמטה ועלי בזיליקום.",
      price: 62,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "קלצונה בתנור",
      description: "במילוי רוטב עגבניות איטלקי, גבינות, חצילים וזיתי קלמטה, לצד פסטו.",
      price: 52,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "בייגל ירושלמי מהתנור",
      description: "במילוי 4 הגבינות שלנו, לצד סלסת עגבניות, זיתים וביצה קשה.",
      price: 48,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "פסטה נפוליטנה",
      description: "עגבניות איטלקיות, זיתי קלמטה, שום, שמן זית ובזיליקום טרי.",
      price: 58,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "רוזה",
      description: "פסטה ברוטב עגבניות איטלקיות, שום, שמנת ובזיליקום טרי.",
      price: 58,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "שמנת פטריות",
      description: "פסטה ברוטב שמנת, פטריות טריות ובזיליקום טרי.",
      price: 58,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "אליו אוליו סלמון",
      description: "נתחי סלמון, שום קונפי, בצל סגול, ארטישוק, עגבניות מיובשות,זיתי קלמטה, צ׳ילי, שמן זית ועשבי תיבול.",
      price: 78,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "רביולי שמנת ופסטו",
      description: "  רביולי במילוי גבינות ברוטב שמנת, פסטו, בזיליקום ופטה מגורדת מעל.  ",
      price: 62,
      vegan: false,
      vegetarian: true,
    },
    {
      id: v4(),
      name: "רביולי בטטה וערמונים",
      description: "רביולי במילוי בטטה ברוטב שמנת, ערמונים ועלי בזיליקום.",
      price: 62,
      vegan: false,
      vegetarian: true,
    },
  ],
  asian: [
    {
      id: v4(),
      name: "מוקפץ טופו / סלמון",
      description: "נודלס, נתחי סלמון / טופו, בצל לבן וירוק, נענע, שעועיתירוקה ופטריות ברוטב אסייתי, כוסברה, אפונת וואסאבי ובוטניםמטוגנים.",
      price: 58,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "סאקה טופו / סלמון",
      description: "נודלס, קוביות סלמון / טופו, בצל לבן, בטטות אפויות, פטריות, פלפלים ובצל ירוק ברוטב טריאקי, בעיטור שומשום ושקדים קלויים.",
      price: 58,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "המנה האסייתית",
      description: "נתחי טופו / סלמון, אורז / נודלס מוקפצים ברוטב אסיאתי ומבחר ירקות שוק, בעיטור בוטנים ושומשום קלוי.",
      price: 58,
      vegan: false,
      vegetarian: false,
    },
  ],
  desserts: [
    {
      id: v4(),
      name: "כנאפה מתוקה",
      description: "כנאפה עם הסירופ הייחודי שלנו ופיסטוקים טחונים,מוגש עם כדור גלידה.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "גבינה אפוייה",
      description: "עוגת גבינה אפויה 'ניו יורקית', על מצע של עוגיות חמאה, קרם וניל, קצפת ורוטב פירות יער.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "עוגת תפוחים ביתית",
      description: "מוגשת חמה, עם גלידת וניל וקצפת.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קראק פאי",
      description: "קראק פאיפאי קראנצ'י ונימוח של גרנולה, טופי, קרמל ווניל,מוגש עם כדור גלידה ושברי פקאן.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קוביית שוקולד פאדג'",
      description: "עוגת שוקולד חמה שנמסה בפה, גלידת וניל וקצפת )ללא קמח(. ",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "פאי אגוזים",
      description: "פאי אגוזי מלך, אגוזי לוז ואגוזי פקאן בקרמל טופי, מוגש עם כדור גלידה וקצפת.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "נוצ'ולטו",
      description: "שכבות של קרם שוקולד בלגי וקרם פרלינה אגוזים, על מצע קריספי של שוקולד ונוגט, בציפוי קראנצ'י שוקולד.",
      price: 48,
      vegan: true,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קינוח ללא סוכר",
      description: "שאל את המלצר.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "וופל בלגי",
      description: "וופל בלגי חם, עם גלידת וניל, גלידת שוקולד, קצפת, סירופ בטעם מייפל ורוטב שוקולד.",
      price: 48,
      vegan: false,
      vegetarian: false,
    },
  ],
  softDrink: [
    {
      id: v4(),
      name: "לימונענע גרוס",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "לימונענע אננס גרוס",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "שייק פירות",
      description: "תות / בננה / מנגו / תמר / מלון / אננס על בסיס: חלב / משקה סויה / משקה אורז שקדים / מים / מיץ תפוזים.",
      price: 28,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קפה קר",
      description: "חלב קר על בסיס אספרסו כפול עם קוביות קרח.",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "אייס קפה",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "אייס קפה פקאן",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "שוקו קר",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "מילקשייק",
      description: "שוקולד / וניל / וניל עוגיות / וניל קפה / לוטוס / פירות יער / לעוד טעמים מיוחדים שאל את המלצר.",
      price: 28,
      vegan: false,
      vegetarian: false,
    },
  ],
  coffee: [
    {
      id: v4(),
      name: "אספרסו / אספרסו כפול",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "מקיאטו / מקיאטו כפול",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קפוצ'ינו",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "אמריקנו / נס קפה",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "נס על חלב",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "שוקו חם",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
    {
      id: v4(),
      name: "קפה שחור",
      description: "",
      price: 18,
      vegan: false,
      vegetarian: false,
    },
  ],
};
