export default function JobCard({ job }) {
  const {
    title, company, companyInitial, companyBg, category, budget, budgetType,
    deadline, description, skills, proposals, posted, urgent, verified
  } = job;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 card-hover group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${companyBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {companyInitial}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-slate-500">{company}</span>
              {verified && (
                <svg className="w-3 h-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0 ml-3">
          {urgent && (
            <span className="text-xs font-medium px-2 py-0.5 bg-red-50 text-red-600 rounded-full">
              Urgent
            </span>
          )}
          <span className="text-xs text-slate-400">{posted}</span>
        </div>
      </div>

      {/* Category */}
      <span className="inline-block text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg mb-3">
        {category}
      </span>

      {/* Description */}
      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">{description}</p>

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

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">{budget}</div>
          <div className="text-xs text-slate-400">{budgetType} · {deadline}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">{proposals} proposals</span>
          <button className="text-xs font-semibold text-white gradient-bg px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
