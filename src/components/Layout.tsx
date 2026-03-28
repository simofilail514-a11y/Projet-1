import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-lg font-semibold">Live Sports TV - MVP</h2>
        </div>
      </header>
      {children}
      <footer className="max-w-4xl mx-auto p-4 text-sm text-slate-600">© {new Date().getFullYear()} Projet-1</footer>
    </div>
  )
}

export default Layout