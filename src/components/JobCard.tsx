import { JobItem } from '../App'

interface JobCardProps {
  job: JobItem
  onStatusChange: (id: string, status: JobItem['status']) => void
  onDelete: (id: string) => void
  nextStatus?: JobItem['status']
}

export default function JobCard({ job, onStatusChange, onDelete, nextStatus }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })
  }

  const daysAgo = Math.floor((Date.now() - new Date(job.appliedDate).getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="job-card">
      <h4>{job.title}</h4>
      <p className="job-company">{job.company}</p>
      
      {job.notes && (
        <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#6b7280', marginTop: '0.5rem' }}>
          "{job.notes}"
        </p>
      )}
      
      <div className="job-date">
        Applied {daysAgo} day{daysAgo !== 1 ? 's' : ''} ago ({formatDate(job.appliedDate)})
      </div>
      
      <div className="card-actions">
        {nextStatus && (
          <button 
            className="primary" 
            onClick={() => onStatusChange(job.id, nextStatus)}
            style={{ flex: 2 }}
          >
            Move →
          </button>
        )}
        {job.url && (
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem 0.5rem',
              textDecoration: 'none',
              backgroundColor: '#e5e7eb',
              borderRadius: '0.375rem',
              fontSize: '0.75rem',
              color: '#1f2937',
              border: '1px solid #d1d5db',
            }}
          >
            Link 🔗
          </a>
        )}
        <button 
          onClick={() => onDelete(job.id)}
          style={{
            flex: 1,
            backgroundColor: '#fee2e2',
            color: '#991b1b',
            fontSize: '0.75rem',
            border: '1px solid #fca5a5',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
