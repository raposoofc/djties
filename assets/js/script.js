/**
 * Tenta iniciar o áudio de fundo e adiciona o controle.
 * Navegadores modernos exigem interação do usuário para tocar áudio com som.
 */
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    
    // O 'muted' e 'autoplay' garantem que o áudio comece a tocar imediatamente, mas em silêncio.
    audio.play().catch(error => {
        console.log('Autoplay com som bloqueado. Áudio iniciando mudo (muted).');
    });

    // Atualiza o ícone de controle ao carregar (Deve mostrar o ícone de mudo)
    updateAudioControlIcon(audio.muted);
});

/**
 * Alterna entre mudo e ativo (unmute).
 */
function toggleAudio() {
    const audio = document.getElementById('background-audio');
    
    // Se o áudio estiver pausado (o que não deve ocorrer com o atributo 'loop'), tenta dar play
    if (audio.paused) {
        audio.play().catch(error => {
            console.error('Não foi possível dar play no áudio:', error);
        });
    }

    // Alterna o estado de mudo
    audio.muted = !audio.muted;
    
    // Atualiza o ícone
    updateAudioControlIcon(audio.muted);
}

/**
 * Atualiza o ícone de controle de áudio (Volume ou Mudo).
 */
function updateAudioControlIcon(isMuted) {
    const control = document.getElementById('audio-control');
    const icon = control.querySelector('i');
    
    if (isMuted) {
        // Ícone Mudo (Volume com X)
        icon.className = 'fas fa-volume-mute';
        control.style.opacity = '0.5';
    } else {
        // Ícone Ativo (Volume normal)
        icon.className = 'fas fa-volume-up';
        control.style.opacity = '1';
    }
}