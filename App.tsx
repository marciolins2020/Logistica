import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Toast from './components/Toast';

type ToastState = {
  message: string;
  type: 'success' | 'error';
}

const App: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Exibe o toast de sucesso
      setToast({ message: `Planilha "${file.name}" importada com sucesso!`, type: 'success' });
    }
     // Reset the input value to allow selecting the same file again
    if(event.target) {
      event.target.value = '';
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <Header onImportClick={handleImportClick} />
      <main>
        <Dashboard />
      </main>
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={handleFileChange}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
       <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Projeto Logística Inteligente Amazônica</p>
      </footer>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default App;