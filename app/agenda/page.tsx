import { Calendar, Clock, MapPin } from "lucide-react"

export default function AgendaPage() {
  const days = [
    {
      date: "May 10, 2023",
      events: [
        {
          time: "08:30 AM - 09:30 AM",
          title: "Registration & Check-in",
          description: "Welcome participants and distribute badges",
        },
        {
          time: "09:30 AM - 10:00 AM",
          title: "Opening Ceremony",
          description: "Welcome speech by organizers and sponsors",
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Keynote Speech",
          description: "Industry expert sharing insights on innovation",
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "Team Formation",
          description: "Participants form teams and brainstorm ideas",
        },
        {
          time: "12:00 PM - 01:00 PM",
          title: "Lunch Break",
          description: "Networking lunch provided for all participants",
        },
        {
          time: "01:00 PM - 02:00 PM",
          title: "Workshop: Design Thinking",
          description: "Interactive workshop on problem-solving",
        },
        { time: "02:00 PM - 06:00 PM", title: "Hacking Session", description: "Teams start working on their projects" },
        { time: "06:00 PM - 07:00 PM", title: "Dinner", description: "Dinner provided for all participants" },
        {
          time: "07:00 PM - 09:00 PM",
          title: "Continued Hacking",
          description: "Teams continue working on their projects",
        },
      ],
    },
    {
      date: "May 11, 2023",
      events: [
        { time: "09:00 AM - 10:00 AM", title: "Breakfast", description: "Breakfast provided for all participants" },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Continued Hacking",
          description: "Teams continue working on their projects",
        },
        {
          time: "12:00 PM - 01:00 PM",
          title: "Lunch Break",
          description: "Networking lunch provided for all participants",
        },
        {
          time: "01:00 PM - 02:00 PM",
          title: "Mentorship Session",
          description: "One-on-one mentorship with industry experts",
        },
        {
          time: "02:00 PM - 03:00 PM",
          title: "Project Submission Deadline",
          description: "Teams finalize and submit their projects",
        },
        {
          time: "03:00 PM - 05:00 PM",
          title: "Project Presentations",
          description: "Teams present their projects to judges",
        },
        {
          time: "05:00 PM - 06:00 PM",
          title: "Judging & Deliberation",
          description: "Judges evaluate projects and select winners",
        },
        {
          time: "06:00 PM - 07:00 PM",
          title: "Awards Ceremony",
          description: "Announcement of winners and prize distribution",
        },
        {
          time: "07:00 PM - 08:00 PM",
          title: "Closing Ceremony & Networking",
          description: "Final remarks and networking opportunity",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-fortum-blue mb-4">Event Agenda</h1>
        <div className="w-20 h-1 bg-fortum-teal mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Join us for two days of innovation, collaboration, and learning at Hack&apos;n&apos;Biz 1.0.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-center md:text-left">
        <div className="flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-fortum-teal" />
          <span>May 10-11, 2023</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-fortum-teal" />
          <span>8:30 AM - 8:00 PM</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-fortum-teal" />
          <span>Tekup University</span>
        </div>
      </div>

      <div className="space-y-12">
        {days.map((day, dayIndex) => (
          <div key={dayIndex}>
            <h2 className="text-2xl font-bold text-fortum-blue mb-6 flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-fortum-teal" />
              Day {dayIndex + 1}: {day.date}
            </h2>
            <div className="border-l-2 border-fortum-teal pl-6 space-y-8">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="relative">
                  <div className="absolute -left-8 mt-1 w-4 h-4 rounded-full bg-fortum-teal"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-fortum-blue">{event.title}</h3>
                      <span className="text-sm font-medium text-fortum-teal flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {event.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
