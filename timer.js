//script created by mostafa kamal.
//contact prosnutthor@gmail.com

function startWordTimer() {
    var timerElement = document.getElementById('timer_word');
    if (!timerElement) return;
    
    // Initial styles
    timerElement.style.fontSize = '48px';
    timerElement.style.textAlign = 'center';
    timerElement.style.margin = '10px auto';
    timerElement.style.padding = '10px';
    timerElement.style.fontFamily = 'Arial, sans-serif';
    timerElement.style.transition = 'all 0.3s ease';
    timerElement.style.transform = 'scale(1)';
    
    var hiddenWord = timerElement.getAttribute('data-word');
    var timeLeft = 30;
    
    function pulseAnimation() {
        timerElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            timerElement.style.transform = 'scale(1)';
        }, 150);
    }
    
    function revealLetterByLetter() {
        timerElement.style.opacity = '0';
        timerElement.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            timerElement.innerHTML = '';
            timerElement.style.color = '#2ecc71';
            timerElement.style.fontWeight = 'bold';
            timerElement.style.textTransform = 'uppercase';
            timerElement.style.letterSpacing = '2px';
            timerElement.style.opacity = '1';
            timerElement.style.transform = 'scale(1)';
            
            let letters = hiddenWord.split('');
            let currentIndex = 0;
            
            // Create a span for each letter
            letters.forEach((letter, index) => {
                let span = document.createElement('span');
                span.textContent = letter;
                span.style.opacity = '0';
                span.style.transition = 'all 2.5s ease';
                span.style.display = 'inline-block';
                span.style.transform = 'translateY(20px) rotateY(90deg)';
                timerElement.appendChild(span);
            });
            
            // Reveal each letter with animation
            let letterReveal = setInterval(() => {
                if (currentIndex < letters.length) {
                    let span = timerElement.children[currentIndex];
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0) rotateY(0deg)';
                    currentIndex++;
                } else {
                    clearInterval(letterReveal);
                    // Final gentle bounce animation
                    setTimeout(() => {
                        timerElement.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            timerElement.style.transform = 'scale(1)';
                        }, 200);
                    }, 500);
                }
            }, 200); // Slower reveal (200ms between each letter)
            
        }, 800); // Longer initial pause before revealing starts
    }
    
    var countdown = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            if (hiddenWord) {
                revealLetterByLetter();
            } else {
                timerElement.innerHTML = 'Word not set';
                timerElement.style.color = '#e74c3c';
            }
        } else {
            timerElement.innerHTML = timeLeft;
            timerElement.style.color = '#3498db';
            timerElement.style.fontWeight = 'bold';
            
            pulseAnimation();
            
            if (timeLeft <= 5) {
                timerElement.style.color = '#e74c3c';
            }
            
            timeLeft--;
        }
    }, 1000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startWordTimer);
} else {
    startWordTimer();
                               }
