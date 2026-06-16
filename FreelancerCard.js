import Link from "next/link";

export default function FreelancerCard({ freelancer }) {
  const { name, title, avatar, avatarBg, skills, rating, reviews, hourlyRate, completedJobs, location, availability, verified, bio, badge } = freelancer;

  const isAvailable = availability === "Available";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 card-hover cursor-pointer group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                {name}
              </h3>
              {verified && (
                <span className="text-blue-600" title="Verified">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">{title}</p>
          </div>
        </div>
        {badge && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            badge === "Top Rated" ? "bg-amber-50 text-amber-700" :
            badge === "Expert" ? "bg-purple-50 text-purple-700" :
            "bg-blue-50 text-blue-700"
          }`}>
            {badge}
          </span>
        )}
      </div>

      {/* Bio */}
      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">{bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {skills.slice(0, 3).map((skill) => (
          <span key={skill} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg">
            {skill}
          </span>
        ))}
        {skills.length > 3 && (
          <span className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-400 rounded-lg">
            +{skills.length - 3}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-xs font-semibold text-slate-900">{rating}</span>
            <span className="text-xs text-slate-400">({reviews})</span>
          </div>
          <span className="text-slate-200">|</span>
          <span className="text-xs text-slate-500">{completedJobs} jobs</span>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-slate-900">৳{hourlyRate.toLocaleString()}</span>
          <span className="text-xs text-slate-400">/hr</span>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-emerald-400" : "bg-amber-400"}`} />
          <span className={`text-xs ${isAvailable ? "text-emerald-600" : "text-amber-600"}`}>
            {availability}
          </span>
        </div>
        <span className="text-xs text-slate-400">{location.split(",")[0]}</span>
      </div>
    </div>
  );
}
