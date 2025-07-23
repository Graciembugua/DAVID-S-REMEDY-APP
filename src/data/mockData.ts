export interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    isDoctor?: boolean;
    specialty?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar?: string;
    isDoctor?: boolean;
    specialty?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  tags?: string[];
  isLiked?: boolean;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Dr. Sarah Chen',
      isDoctor: true,
      specialty: 'Neurologist'
    },
    content: 'Remember that establishing consistent daily routines can significantly help individuals with dementia feel more secure and reduce anxiety. Simple things like having meals at the same time each day and following a predictable bedtime routine can make a huge difference.',
    timestamp: '2 hours ago',
    likes: 24,
    tags: ['MorningRoutines', 'SafetyTips'],
    comments: [
      {
        id: '1-1',
        author: {
          name: 'Emma Martinez'
        },
        content: 'This is so helpful! We\'ve been struggling with evening anxiety. Will try implementing a consistent bedtime routine.',
        timestamp: '1 hour ago',
        likes: 3
      }
    ]
  },
  {
    id: '2',
    author: {
      name: 'Robert Johnson'
    },
    content: 'Just wanted to share a victory today. My wife with Alzheimer\'s successfully used the new medication reminder system we set up. It took weeks of practice, but she\'s getting more independent. Don\'t give up, fellow caregivers!',
    timestamp: '4 hours ago',
    likes: 18,
    tags: ['MedicationManagement', 'CommunitySupport'],
    comments: [
      {
        id: '2-1',
        author: {
          name: 'Dr. Michael Roberts',
          isDoctor: true,
          specialty: 'Geriatrician'
        },
        content: 'Wonderful progress! Maintaining independence in medication management is a significant achievement. Keep up the great work.',
        timestamp: '3 hours ago',
        likes: 8
      },
      {
        id: '2-2',
        author: {
          name: 'Maria Rodriguez'
        },
        content: 'This gives me hope! What kind of reminder system did you use?',
        timestamp: '2 hours ago',
        likes: 2
      }
    ]
  },
  {
    id: '3',
    author: {
      name: 'Emma Martinez'
    },
    content: 'Has anyone else noticed their loved one becomes more agitated in the late afternoon? I\'ve been reading about "sundowning" and wondering if others have experience with this.',
    timestamp: '6 hours ago',
    likes: 12,
    tags: ['BehaviorManagement', 'SelfCare'],
    comments: [
      {
        id: '3-1',
        author: {
          name: 'Dr. Jennifer Wong',
          isDoctor: true,
          specialty: 'Psychiatrist'
        },
        content: 'Sundowning is very common. Try increasing light exposure during the day and reducing stimulation in the evening. Would be happy to discuss specific strategies.',
        timestamp: '5 hours ago',
        likes: 15
      }
    ]
  }
];