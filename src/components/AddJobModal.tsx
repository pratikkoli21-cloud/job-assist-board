import { useState } from 'react'
import { JobItem } from '../App'

interface AddJobModalProps {
  onAdd: (job: Omit<JobItem, 'id'>) => void
  onClose: () => void
}

export default function AddJobModal({ onAdd, onClose }: AddJobModalProps) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [notes, setNotes] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !company.trim()) {
      alert('Please fill in the job title and company')
      return
    }

    onAdd({
      title: title.trim(),
      company: company.trim(),
      status: 'applied',
      appliedDate: new Date().toISOString(),
      notes: notes.trim(),
      url: url.trim(),
    })

    // Reset form
    setTitle('')
    setCompany('')
    setNotes('')
    setUrl('')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Add New Job Application</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g., Senior Frontend Engineer"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company *</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="e.g., Acme Corp"
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="e.g., Remote role, interesting tech stack"
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Job Listing URL</label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://example.com/job/12345"
            />
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              onClick={onClose}
              style={{
                backgroundColor: '#e5e7eb',
                color: '#1f2937',
              }}
            >
              Cancel
            </button>
            <button type="submit" className="primary">
              Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
