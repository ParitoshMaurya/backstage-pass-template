import { useState } from 'react';
import styles from './DaySidebar.module.css';

const TOTAL_DAYS = 9;

export default function DaySidebar({ currentDay = 1, onDayChange }) {
  const [selectedDay, setSelectedDay] = useState(currentDay);

  const handleDayClick = (day) => {
      setSelectedDay(day);
      onDayChange?.(day);
  };

  const getDayState = (day) => {
    if (day < currentDay) return 'completed';
    if (day === currentDay) return 'active';
    return 'locked';
  };

  const renderIcon = (day) => {
    const state = getDayState(day);
    
    if (state === 'completed' || (state === 'active' && selectedDay === day)) {
      return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.125 0C6.51803 0 4.94714 0.476523 3.611 1.36931C2.27485 2.2621 1.23344 3.53105 0.618482 5.0157C0.00352044 6.50035 -0.157382 8.13401 0.156123 9.71011C0.469628 11.2862 1.24346 12.7339 2.37976 13.8702C3.51606 15.0065 4.9638 15.7804 6.53989 16.0939C8.11599 16.4074 9.74966 16.2465 11.2343 15.6315C12.719 15.0166 13.9879 13.9752 14.8807 12.639C15.7735 11.3029 16.25 9.73197 16.25 8.125C16.2477 5.97081 15.391 3.90551 13.8677 2.38227C12.3445 0.85903 10.2792 0.00227486 8.125 0ZM11.6922 6.69219L7.31719 11.0672C7.25915 11.1253 7.19022 11.1714 7.11434 11.2029C7.03847 11.2343 6.95714 11.2505 6.875 11.2505C6.79287 11.2505 6.71154 11.2343 6.63567 11.2029C6.55979 11.1714 6.49086 11.1253 6.43282 11.0672L4.55782 9.19219C4.44054 9.07491 4.37466 8.91585 4.37466 8.75C4.37466 8.58415 4.44054 8.42509 4.55782 8.30781C4.67509 8.19054 4.83415 8.12465 5 8.12465C5.16586 8.12465 5.32492 8.19054 5.44219 8.30781L6.875 9.74141L10.8078 5.80781C10.8659 5.74974 10.9348 5.70368 11.0107 5.67225C11.0866 5.64083 11.1679 5.62465 11.25 5.62465C11.3321 5.62465 11.4134 5.64083 11.4893 5.67225C11.5652 5.70368 11.6341 5.74974 11.6922 5.80781C11.7503 5.86588 11.7963 5.93482 11.8277 6.01069C11.8592 6.08656 11.8754 6.16788 11.8754 6.25C11.8754 6.33212 11.8592 6.41344 11.8277 6.48931C11.7963 6.56518 11.7503 6.63412 11.6922 6.69219Z" fill="#30A46C"/>
        </svg>

      );
    }
    
    return (
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.75 5.625H11.25V3.75C11.25 2.75544 10.8549 1.80161 10.1517 1.09835C9.44839 0.395088 8.49456 0 7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75V5.625H1.25C0.918479 5.625 0.600537 5.7567 0.366116 5.99112C0.131696 6.22554 0 6.54348 0 6.875V15.625C0 15.9565 0.131696 16.2745 0.366116 16.5089C0.600537 16.7433 0.918479 16.875 1.25 16.875H13.75C14.0815 16.875 14.3995 16.7433 14.6339 16.5089C14.8683 16.2745 15 15.9565 15 15.625V6.875C15 6.54348 14.8683 6.22554 14.6339 5.99112C14.3995 5.7567 14.0815 5.625 13.75 5.625ZM5 3.75C5 3.08696 5.26339 2.45107 5.73223 1.98223C6.20107 1.51339 6.83696 1.25 7.5 1.25C8.16304 1.25 8.79893 1.51339 9.26777 1.98223C9.73661 2.45107 10 3.08696 10 3.75V5.625H5V3.75Z" fill="var(--bg-tertiary)" fill-opacity="0.611765"/>
      </svg>

    );
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.overlay} />
      <div className={styles.daysList}>
        {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((day) => {
          const state = getDayState(day);
          const isSelected = day === selectedDay;

          return (
            <button
              key={day}
              className={`${styles.dayItem} ${styles[state]} ${isSelected ? styles.selected : ''}`}
              onClick={() => handleDayClick(day)}
              aria-label={`Day ${day}`}
              aria-current={isSelected ? 'true' : 'false'}
            >
              {isSelected && (
                <svg className={`${styles.selectedBg} d-ds-none`} width="97" height="74" viewBox="0 0 97 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4825 27.8518C20.5451 12.4514 33.0472 0 48.4478 0C63.9208 0 76.453 12.5645 76.4132 28.0375L76.3482 53.295C76.3188 64.7214 85.5735 74 97 74H0C11.2219 74 20.3318 64.927 20.3774 53.7052L20.4825 27.8518Z" fill="var(--bg-main-content)"/>
                </svg>
              )}

              {isSelected && (
                <svg className={`${styles.selectedBg} d-mb-none`} width="250" height="98" viewBox="0 0 250 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3318 79.8581C13.1323 79.8581 -1.36704e-06 66.7259 -2.07514e-06 50.5264C-2.78324e-06 34.3269 13.1323 21.1946 29.3318 21.1946L228.805 21.1946C240.511 21.1946 250 11.7054 250 -3.29845e-06L250 98C250 87.9805 241.878 79.8581 231.858 79.8581L29.3318 79.8581Z" fill="var(--bg-main-content)" />
                </svg>
              )}
              <div className={styles.dayContent}>
                <span className={`${styles.dayLabel} d-mb-none`}>Day - {day}</span>
                 <span className={`${styles.dayLabel} d-ds-none`}>Day 
                  <b className={isSelected ? styles.dayLabelSelected : ''}>
                    {day}
                  </b>
                </span>
                <div className={`${styles.dayIcon} ${isSelected ? "d-mb-none" : ""}`}>
                  {renderIcon(day)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
