import FeedPost from '../FeedPost';
import styles from './FeedList.module.css';
import { mockPosts, participantStats } from '../../data/mockData';

export default function FeedList() {
  const yourSubmission = mockPosts.find(post => post.type === 'your-submission');
  const communityPosts = mockPosts.filter(post => post.type !== 'your-submission');

  return (
    <div className={styles.feedList}>
      {/* Your Submission */}
      {yourSubmission && <FeedPost post={yourSubmission} />}

      {/* Community Feed Section */}
      <div className={styles.communitySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            See what others{' '}
            <div className={styles.avatarStack}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
            </div>{' '}
            shared
          </h2>
          <p className={styles.participantCount}>
            <b>{participantStats.count}</b> {participantStats.message}
          </p>

           {/* Community Posts */}
        <div className={styles.posts}>
          {communityPosts.map(post => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
