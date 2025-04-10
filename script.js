document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadProgress = document.getElementById('downloadProgress');
    
    downloadBtn.addEventListener('click', function() {
        // Mostrar confirmación
        const confirmed = confirm('¿Deseas descargar MiApp Pro? (24.5 MB)');
        
        if(confirmed) {
            // Mostrar estado de descarga
            downloadProgress.textContent = 'Preparando descarga...';
            downloadProgress.style.display = 'block';
            
            // Pequeño retraso para mejor UX
            setTimeout(() => {
                // Crear enlace temporal
                const link = document.createElement('a');
                
                // Configurar enlace
                link.href = 'app-debug.apk'; // Cambiar por tu archivo APK
                link.download = 'QR bus.apk'; // Nombre sugerido para descarga
                
                // Para algunos navegadores
                link.target = '_blank';
                
                // Simular clic
                document.body.appendChild(link);
                link.click();
                
                // Limpiar
                document.body.removeChild(link);
                
                // Actualizar UI
                downloadProgress.textContent = '¡Descarga completada!';
                downloadProgress.style.color = 'var(--success-color)';
                
                // Resetear después de 3 segundos
                setTimeout(() => {
                    downloadProgress.textContent = '';
                    downloadProgress.style.display = 'none';
                    downloadProgress.style.color = 'var(--primary-color)';
                }, 3000);
                
            }, 800);
        }
    });
});