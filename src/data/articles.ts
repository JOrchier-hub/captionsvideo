export interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  readingTime: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Perimenopause: Your Complete Guide",
    content: `Perimenopause is the transitional period before menopause, typically beginning in your 40s. During this time, your body undergoes significant hormonal changes as it prepares for menopause.

Key signs to watch for:
• Irregular periods
• Changes in menstrual flow
• Hot flashes and night sweats
• Mood changes
• Sleep disturbances
• Vaginal dryness

These changes are completely normal and can begin 8-10 years before menopause. Understanding what's happening in your body can help you navigate this transition with confidence. Work with your healthcare provider to develop a personalized management plan that addresses your specific symptoms and concerns.`,
    category: "Basics",
    imageUrl: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=800",
    readingTime: "5 min",
    author: "Dr. Sarah Johnson"
  },
  // ... rest of the articles array remains exactly the same as in HealthInfo.tsx
];