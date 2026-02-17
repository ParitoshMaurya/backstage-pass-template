export const mockPosts = [
  {
    id: 1,
    type: 'your-submission',
    author: {
      name: 'Ashraf Idrishi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      timestamp: '1s'
    },
    content: 'Today challenge workout completed - feeling stronger already',
    media: {
      type: 'video',
      thumbnail: '/video-thumbnail.jpg',
      url: '#'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 2,
    type: 'pinned',
    isPinned: true,
    author: {
      name: 'Russell Brunson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      timestamp: '3 hrs ago'
    },
    content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger - one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
    instructions: [
      { step: 1, text: 'Minimum 20 minutes of sit-up' },
      { step: 2, text: 'Mention Intensity' },
      { step: 3, text: 'Upload Media (Optional)' }
    ],
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 3,
    type: 'community',
    author: {
      name: 'Sayantan Chandra',
      avatar: null,
      initials: 'S',
      timestamp: '1 hrs ago'
    },
    content: 'Completed today challenge workout, one step closer to my goal.',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 4,
    type: 'community',
    author: {
      name: 'Pappu Saha',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      timestamp: '2 day ago'
    },
    content: 'Today challenge workout completed - feeling stronger already',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 5,
    type: 'community',
    author: {
      name: 'Srijan Chandra',
      avatar: null,
      initials: 'S',
      timestamp: '1d'
    },
    content: 'Taking part in the workout challenge and staying consistent.',
    badge: {
      text: 'Silver Pass',
      label: 'Posted in'
    },
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  }
];

export const participantStats = {
  count: '85+',
  message: 'participants already completed'
};
