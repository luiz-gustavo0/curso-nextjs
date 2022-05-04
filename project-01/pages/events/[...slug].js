import { useRouter } from 'next/router';

import { EventList } from '../../components/EventList';

import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }
  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <p className='center'>Invalid filter</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='center'>No events found</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
