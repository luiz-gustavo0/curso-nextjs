import { useRouter } from 'next/router';

import { EventList } from '../../components/EventList';
import { EventSearch } from '../../components/EventSearch';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const handleFindEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventSearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
