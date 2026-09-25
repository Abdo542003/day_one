/**
 * The EXACT letter content provided by the user.
 * Preserved word-for-word with zero omission, zero summary, zero modification.
 */

export interface Chapter {
  id: string;
  number: string;
  theme: string;
}

export const LETTER_TITLE = "من يوم ما جيتي لحياتي ❤️";
export const LETTER_SUBTITLE = "كلام كان لازم أقولهولك...";
export const PROMISE_QUOTE = "هصالحك كل يوم، سواء زعلانة أو مش زعلانة.";

export const CHAPTERS_LIST: Chapter[] = [
  { id: 'ch-01', number: '٠١', theme: 'البداية' },
  { id: 'ch-02', number: '٠٢', theme: 'الاعتراف' },
  { id: 'ch-03', number: '٠٣', theme: 'حياتي بدأت ترجعلي' },
  { id: 'ch-04', number: '٠٤', theme: 'التفاصيل الصغيرة' },
  { id: 'ch-05', number: '٠٥', theme: 'وعدي اليومي' },
  { id: 'ch-06', number: '٠٦', theme: 'وجودك في حياتي' },
  { id: 'ch-07', number: '٠٧', theme: 'شكرًا' },
  { id: 'ch-08', number: '٠٨', theme: 'قيمتك عندي' },
  { id: 'ch-09', number: '٠٩', theme: 'مبسوط إنك هنا' },
  { id: 'ch-10', number: '١٠', theme: 'حياتي رجعتلي' },
  { id: 'ch-11', number: '١١', theme: 'إنتِ مهمة ليه' },
  { id: 'ch-12', number: '١٢', theme: 'كفاية زعل يا حبيبتي' },
  { id: 'ch-final', number: '♥', theme: 'اليوم الأول من وعدي' },
];
