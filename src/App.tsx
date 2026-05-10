import { useState, useEffect } from 'react'
import './App.css'
import JobBoard from './components/JobBoard'
import AddJobModal from './components/AddJobModal'

export interface JobItem {
  id: string
  title: string
  company: string
  status: 'applied' | 'reviewing' | 'interviewing' | 'offered' | 'rejected'
  appliedDate: string
  notes?: string
  url?: string
}

function App() {
  const [jobs, setJobs] = useState<JobItem[]>([])
  const [showModal, setShowModal] = useState(false)

  // Load jobs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('jobAssistBoard')
    if (saved) {
      try {
        setJobs(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load jobs', e)
      }
    }
  }, [])

  // Save jobs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('jobAssistBoard', JSON.stringify(jobs))
  }, [jobs])

  const addJob = (jobData: Omit<JobItem, 'id'>) => {
    const newJob: JobItem = {
      ...jobData,
      id: Date.now().toString(),
    }
    setJobs([...jobs, newJob])
    setShowModal(false)
  }

  const updateJobStatus = (id: string, newStatus: JobItem['status']) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ))
  }

  const deleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>🎯 Job Assist Board</h1>
          <p>Track your job applications and interview progress</p>
          <button className="primary" onClick={() => setShowModal(true)}>
            + Add New Application
          </button>
        </div>

        <JobBoard 
          jobs={jobs} 
          onStatusChange={updateJobStatus}
          onDeleteJob={deleteJob}
        />

        {showModal && (
          <AddJobModal 
            onAdd={addJob} 
            onClose={() => setShowModal(false)} 
          />
        )}
      </div>
    </div>
  )
}

export default App
