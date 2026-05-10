import { JobItem } from '../App'
import JobCard from './JobCard'

interface JobBoardProps {
  jobs: JobItem[]
  onStatusChange: (id: string, status: JobItem['status']) => void
  onDeleteJob: (id: string) => void
}

const STATUS_ORDER: JobItem['status'][] = ['applied', 'reviewing', 'interviewing', 'offered', 'rejected']

const STATUS_LABELS: Record<JobItem['status'], string> = {
  applied: '📝 Applied',
  reviewing: '👀 Under Review',
  interviewing: '💬 Interviewing',
  offered: '✅ Offered',
  rejected: '❌ Rejected',
}

const STATUS_COLORS: Record<JobItem['status'], string> = {
  applied: '#3b82f6',
  reviewing: '#f59e0b',
  interviewing: '#8b5cf6',
  offered: '#10b981',
  rejected: '#ef4444',
}

export default function JobBoard({ jobs, onStatusChange, onDeleteJob }: JobBoardProps) {
  return (
    <div className="board-grid">
      {STATUS_ORDER.map(status => {
        const statusJobs = jobs.filter(job => job.status === status)
        
        return (
          <div key={status} className="status-column">
            <div className="status-header" style={{ borderBottomColor: STATUS_COLORS[status] }}>
              <h3>{STATUS_LABELS[status]}</h3>
              <span className="status-badge" style={{ backgroundColor: STATUS_COLORS[status] }}>
                {statusJobs.length}
              </span>
            </div>
            
            <div className="cards-container">
              {statusJobs.length === 0 ? (
                <div className="empty-state">
                  <p>No applications here yet</p>
                </div>
              ) : (
                statusJobs.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onStatusChange={onStatusChange}
                    onDelete={onDeleteJob}
                    nextStatus={STATUS_ORDER[STATUS_ORDER.indexOf(status) + 1]}
                  />
                ))
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
